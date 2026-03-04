import "jsr:@supabase/functions-js/edge-runtime.d.ts";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, OPTIONS",
  "Access-Control-Allow-Headers": "Content-Type, Authorization, X-Client-Info, Apikey",
};

interface RequestPayload {
  email: string;
}

async function createGhostAdminTokenAsync(key: string): Promise<string> {
  const [id, secret] = key.split(':');

  if (!id || !secret) {
    throw new Error('Invalid Ghost Admin Key format. Expected format: id:secret');
  }

  const base64urlEncode = (data: Uint8Array): string => {
    let binary = '';
    for (let i = 0; i < data.length; i++) {
      binary += String.fromCharCode(data[i]);
    }
    return btoa(binary).replace(/\+/g, '-').replace(/\//g, '_').replace(/=+$/, '');
  };

  const textToBase64url = (text: string): string => {
    const encoder = new TextEncoder();
    const data = encoder.encode(text);
    return base64urlEncode(data);
  };

  const header = { alg: 'HS256', typ: 'JWT', kid: id };
  const now = Math.floor(Date.now() / 1000);
  const payload = {
    iat: now,
    exp: now + 300,
    aud: '/admin/'
  };

  const headerB64 = textToBase64url(JSON.stringify(header));
  const payloadB64 = textToBase64url(JSON.stringify(payload));
  const message = `${headerB64}.${payloadB64}`;

  const secretBytes = new Uint8Array(
    secret.match(/.{1,2}/g)!.map(byte => parseInt(byte, 16))
  );

  const cryptoKey = await crypto.subtle.importKey(
    'raw',
    secretBytes,
    { name: 'HMAC', hash: 'SHA-256' },
    false,
    ['sign']
  );

  const signatureBuffer = await crypto.subtle.sign(
    'HMAC',
    cryptoKey,
    new TextEncoder().encode(message)
  );

  const signatureB64 = base64urlEncode(new Uint8Array(signatureBuffer));

  console.log('Generated JWT with kid:', id);

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
    let ghostUrl = Deno.env.get('GHOST_URL');
    const ghostAdminKey = Deno.env.get('GHOST_ADMIN_KEY');

    if (!ghostUrl || !ghostAdminKey) {
      throw new Error('Ghost configuration missing');
    }

    ghostUrl = ghostUrl.replace(/^https?:\/\//, '').replace(/\/$/, '');
    ghostUrl = `https://${ghostUrl}`;

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

    const apiUrl = `${ghostUrl}/ghost/api/admin/members/?filter=email:'${email}'`;
    console.log('Fetching Ghost API:', apiUrl);

    const memberResponse = await fetch(apiUrl, {
      headers: {
        'Authorization': `Ghost ${token}`,
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        'Accept-Version': 'v5.0',
      },
    });

    console.log('Ghost API response status:', memberResponse.status);

    if (!memberResponse.ok) {
      const errorText = await memberResponse.text();
      console.error('Ghost API error status:', memberResponse.status);
      console.error('Ghost API error body:', errorText);
      return new Response(
        JSON.stringify({
          error: 'Error al consultar Ghost',
          details: errorText,
          status: memberResponse.status
        }),
        {
          status: 502,
          headers: { ...corsHeaders, 'Content-Type': 'application/json' },
        }
      );
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
