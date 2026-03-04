import "jsr:@supabase/functions-js/edge-runtime.d.ts";
import { createClient } from "npm:@supabase/supabase-js@2";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, OPTIONS",
  "Access-Control-Allow-Headers": "Content-Type, Authorization, X-Client-Info, Apikey, X-Session-Token",
};

async function createGhostAdminTokenAsync(key: string): Promise<string> {
  const [id, secret] = key.split(':');

  const base64url = (input: ArrayBuffer | string) => {
    const str = typeof input === 'string' ? input : String.fromCharCode(...new Uint8Array(input));
    return btoa(str).replace(/\+/g, '-').replace(/\//g, '_').replace(/=/g, '');
  };

  const header = { alg: 'HS256', typ: 'JWT', kid: id };
  const now = Math.floor(Date.now() / 1000);
  const payload = {
    iat: now,
    exp: now + 300,
    aud: '/admin/'
  };

  const headerB64 = base64url(JSON.stringify(header));
  const payloadB64 = base64url(JSON.stringify(payload));
  const message = `${headerB64}.${payloadB64}`;

  const keyData = new Uint8Array(secret.match(/.{1,2}/g)!.map(byte => parseInt(byte, 16)));

  const cryptoKey = await crypto.subtle.importKey(
    'raw',
    keyData,
    { name: 'HMAC', hash: 'SHA-256' },
    false,
    ['sign']
  );

  const signature = await crypto.subtle.sign('HMAC', cryptoKey, new TextEncoder().encode(message));
  const signatureB64 = base64url(signature);

  return `${message}.${signatureB64}`;
}

Deno.serve(async (req: Request) => {
  if (req.method === "OPTIONS") {
    return new Response(null, {
      status: 200,
      headers: corsHeaders,
    });
  }

  try {
    const ghostUrl = Deno.env.get('GHOST_URL');
    const ghostAdminKey = Deno.env.get('GHOST_ADMIN_KEY');
    const supabaseUrl = Deno.env.get('SUPABASE_URL');
    const supabaseServiceKey = Deno.env.get('SUPABASE_SERVICE_ROLE_KEY');

    if (!ghostUrl || !ghostAdminKey || !supabaseUrl || !supabaseServiceKey) {
      throw new Error('Configuration missing');
    }

    const sessionToken = req.headers.get('X-Session-Token');

    if (!sessionToken) {
      return new Response(
        JSON.stringify({ error: 'Sesion requerida' }),
        {
          status: 401,
          headers: { ...corsHeaders, 'Content-Type': 'application/json' },
        }
      );
    }

    const supabase = createClient(supabaseUrl, supabaseServiceKey);

    const { data: session, error: sessionError } = await supabase
      .from('sessions')
      .select('*, members(*)')
      .eq('token', sessionToken)
      .gt('expires_at', new Date().toISOString())
      .maybeSingle();

    if (sessionError || !session) {
      return new Response(
        JSON.stringify({ error: 'Sesion invalida o expirada' }),
        {
          status: 401,
          headers: { ...corsHeaders, 'Content-Type': 'application/json' },
        }
      );
    }

    const member = session.members;
    const ghostToken = await createGhostAdminTokenAsync(ghostAdminKey);

    const postsResponse = await fetch(
      `${ghostUrl}/ghost/api/admin/posts/?filter=visibility:members,visibility:paid&include=tags&formats=html&limit=50`,
      {
        headers: {
          'Authorization': `Ghost ${ghostToken}`,
          'Content-Type': 'application/json',
        },
      }
    );

    if (!postsResponse.ok) {
      throw new Error('Error al obtener posts de Ghost');
    }

    const postsData = await postsResponse.json();

    const posts = postsData.posts.map((post: any) => {
      const hasAccess = member.status === 'paid' ||
                        member.status === 'comped' ||
                        post.visibility === 'members';

      return {
        id: post.id,
        title: post.title,
        slug: post.slug,
        excerpt: post.custom_excerpt || post.excerpt,
        html: hasAccess ? post.html : null,
        feature_image: post.feature_image,
        published_at: post.published_at,
        reading_time: post.reading_time || 5,
        visibility: post.visibility,
        access: hasAccess,
        tags: post.tags?.map((t: any) => ({ name: t.name, slug: t.slug })) || [],
      };
    });

    return new Response(
      JSON.stringify({
        posts,
        member: {
          id: member.id,
          email: member.email,
          name: member.name,
          status: member.status,
        },
      }),
      {
        status: 200,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      }
    );

  } catch (error) {
    console.error('Error:', error);
    return new Response(
      JSON.stringify({
        error: error instanceof Error ? error.message : 'Error interno del servidor'
      }),
      {
        status: 500,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      }
    );
  }
});
