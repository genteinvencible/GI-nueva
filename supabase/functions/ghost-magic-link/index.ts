import "jsr:@supabase/functions-js/edge-runtime.d.ts";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, OPTIONS",
  "Access-Control-Allow-Headers": "Content-Type, Authorization, X-Client-Info, Apikey",
};

interface RequestPayload {
  email: string;
}

function createGhostAdminToken(key: string): string {
  const [id, secret] = key.split(':');

  const header = { alg: 'HS256', typ: 'JWT', kid: id };
  const now = Math.floor(Date.now() / 1000);
  const payload = {
    iat: now,
    exp: now + 300,
    aud: '/admin/'
  };

  const base64url = (str: string) => btoa(str).replace(/\+/g, '-').replace(/\//g, '_').replace(/=/g, '');

  const headerB64 = base64url(JSON.stringify(header));
  const payloadB64 = base64url(JSON.stringify(payload));
  const message = `${headerB64}.${payloadB64}`;

  const encoder = new TextEncoder();
  const keyData = new Uint8Array(secret.match(/.{1,2}/g)!.map(byte => parseInt(byte, 16)));

  return crypto.subtle.importKey(
    'raw',
    keyData,
    { name: 'HMAC', hash: 'SHA-256' },
    false,
    ['sign']
  ).then(cryptoKey => {
    return crypto.subtle.sign('HMAC', cryptoKey, encoder.encode(message));
  }).then(signature => {
    const signatureB64 = base64url(String.fromCharCode(...new Uint8Array(signature)));
    return `${message}.${signatureB64}`;
  }) as unknown as string;
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

    if (!ghostUrl || !ghostAdminKey) {
      throw new Error('Ghost configuration missing');
    }

    const { email }: RequestPayload = await req.json();

    if (!email || !email.includes('@')) {
      return new Response(
        JSON.stringify({ error: 'Email invalido' }),
        {
          status: 400,
          headers: { ...corsHeaders, 'Content-Type': 'application/json' },
        }
      );
    }

    const token = await createGhostAdminTokenAsync(ghostAdminKey);

    const memberResponse = await fetch(
      `${ghostUrl}/ghost/api/admin/members/?filter=email:'${encodeURIComponent(email)}'`,
      {
        headers: {
          'Authorization': `Ghost ${token}`,
          'Content-Type': 'application/json',
        },
      }
    );

    if (!memberResponse.ok) {
      const errorText = await memberResponse.text();
      console.error('Ghost API error:', errorText);
      throw new Error('Error al consultar Ghost');
    }

    const memberData = await memberResponse.json();

    if (!memberData.members || memberData.members.length === 0) {
      return new Response(
        JSON.stringify({ error: 'Este email no esta registrado como miembro' }),
        {
          status: 404,
          headers: { ...corsHeaders, 'Content-Type': 'application/json' },
        }
      );
    }

    const member = memberData.members[0];

    const newToken = await createGhostAdminTokenAsync(ghostAdminKey);

    const magicLinkResponse = await fetch(
      `${ghostUrl}/ghost/api/admin/members/${member.id}/signin_urls/`,
      {
        method: 'GET',
        headers: {
          'Authorization': `Ghost ${newToken}`,
          'Content-Type': 'application/json',
        },
      }
    );

    if (!magicLinkResponse.ok) {
      const errorText = await magicLinkResponse.text();
      console.error('Magic link error:', errorText);
      throw new Error('Error al generar enlace de acceso');
    }

    const magicLinkData = await magicLinkResponse.json();
    const signinUrl = magicLinkData.member_signin_urls?.[0]?.url;

    if (!signinUrl) {
      throw new Error('No se pudo obtener el enlace de acceso');
    }

    return new Response(
      JSON.stringify({
        success: true,
        message: 'Enlace de acceso generado',
        signinUrl: signinUrl,
        member: {
          id: member.id,
          email: member.email,
          name: member.name,
          status: member.status,
        }
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
