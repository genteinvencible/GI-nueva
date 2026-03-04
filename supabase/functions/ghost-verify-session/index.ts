import "jsr:@supabase/functions-js/edge-runtime.d.ts";
import { createClient } from "npm:@supabase/supabase-js@2";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, OPTIONS",
  "Access-Control-Allow-Headers": "Content-Type, Authorization, X-Client-Info, Apikey",
};

interface RequestPayload {
  token: string;
}

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

function generateSessionToken(): string {
  const array = new Uint8Array(32);
  crypto.getRandomValues(array);
  return Array.from(array, byte => byte.toString(16).padStart(2, '0')).join('');
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

    const supabase = createClient(supabaseUrl, supabaseServiceKey);

    const { token }: RequestPayload = await req.json();

    if (!token) {
      return new Response(
        JSON.stringify({ error: 'Token requerido' }),
        {
          status: 400,
          headers: { ...corsHeaders, 'Content-Type': 'application/json' },
        }
      );
    }

    const ghostToken = await createGhostAdminTokenAsync(ghostAdminKey);

    const sessionResponse = await fetch(
      `${ghostUrl}/ghost/api/admin/session/`,
      {
        method: 'GET',
        headers: {
          'Authorization': `Ghost ${ghostToken}`,
          'Cookie': `ghost-members-ssr=${token}`,
        },
      }
    );

    let memberEmail: string | null = null;
    let memberId: string | null = null;

    if (sessionResponse.ok) {
      const sessionData = await sessionResponse.json();
      memberEmail = sessionData?.email;
    }

    if (!memberEmail) {
      try {
        const decodedToken = JSON.parse(atob(token.split('.')[1]));
        memberEmail = decodedToken.email || decodedToken.sub;
      } catch {
        const urlParams = new URLSearchParams(token);
        memberEmail = urlParams.get('email');
      }
    }

    if (!memberEmail) {
      return new Response(
        JSON.stringify({ error: 'No se pudo verificar el token' }),
        {
          status: 401,
          headers: { ...corsHeaders, 'Content-Type': 'application/json' },
        }
      );
    }

    const newGhostToken = await createGhostAdminTokenAsync(ghostAdminKey);
    const memberResponse = await fetch(
      `${ghostUrl}/ghost/api/admin/members/?filter=email:'${encodeURIComponent(memberEmail)}'`,
      {
        headers: {
          'Authorization': `Ghost ${newGhostToken}`,
          'Content-Type': 'application/json',
        },
      }
    );

    if (!memberResponse.ok) {
      throw new Error('Error al verificar miembro en Ghost');
    }

    const memberData = await memberResponse.json();

    if (!memberData.members || memberData.members.length === 0) {
      return new Response(
        JSON.stringify({ error: 'Miembro no encontrado' }),
        {
          status: 404,
          headers: { ...corsHeaders, 'Content-Type': 'application/json' },
        }
      );
    }

    const ghostMember = memberData.members[0];

    const { data: existingMember, error: selectError } = await supabase
      .from('members')
      .select('*')
      .eq('email', ghostMember.email)
      .maybeSingle();

    let member;

    if (existingMember) {
      const { data: updatedMember, error: updateError } = await supabase
        .from('members')
        .update({
          ghost_member_id: ghostMember.id,
          name: ghostMember.name,
          status: ghostMember.status,
          subscribed: ghostMember.subscribed,
          ghost_data: ghostMember,
          updated_at: new Date().toISOString(),
        })
        .eq('id', existingMember.id)
        .select()
        .single();

      if (updateError) throw updateError;
      member = updatedMember;
    } else {
      const { data: newMember, error: insertError } = await supabase
        .from('members')
        .insert({
          ghost_member_id: ghostMember.id,
          email: ghostMember.email,
          name: ghostMember.name,
          status: ghostMember.status,
          subscribed: ghostMember.subscribed,
          ghost_data: ghostMember,
        })
        .select()
        .single();

      if (insertError) throw insertError;
      member = newMember;
    }

    const sessionToken = generateSessionToken();
    const expiresAt = new Date();
    expiresAt.setDate(expiresAt.getDate() + 30);

    const userAgent = req.headers.get('user-agent') || '';
    const ipAddress = req.headers.get('x-forwarded-for') || req.headers.get('cf-connecting-ip') || '';

    const { error: sessionError } = await supabase
      .from('sessions')
      .insert({
        member_id: member.id,
        token: sessionToken,
        expires_at: expiresAt.toISOString(),
        user_agent: userAgent,
        ip_address: ipAddress,
      });

    if (sessionError) throw sessionError;

    return new Response(
      JSON.stringify({
        success: true,
        sessionToken,
        member: {
          id: member.id,
          email: member.email,
          name: member.name,
          status: member.status,
        },
        expiresAt: expiresAt.toISOString(),
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
