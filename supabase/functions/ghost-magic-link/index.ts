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

  return `${message}.${signatureB64}`;
}

async function sendEmail(to: string, subject: string, html: string): Promise<boolean> {
  const resendApiKey = Deno.env.get('RESEND_API_KEY');

  if (!resendApiKey) {
    console.log('RESEND_API_KEY not configured, skipping email');
    return false;
  }

  try {
    const response = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${resendApiKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        from: 'Carmen & Alvaro <noreply@labodadealvarocarmen.com>',
        to: [to],
        subject: subject,
        html: html,
      }),
    });

    if (!response.ok) {
      const error = await response.text();
      console.error('Resend API error:', error);
      return false;
    }

    return true;
  } catch (error) {
    console.error('Error sending email:', error);
    return false;
  }
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

    ghostUrl = ghostUrl
      .replace(/^https?:?\/?\/*/i, '')
      .replace(/\/$/, '')
      .toLowerCase();
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

    const apiUrl = `${ghostUrl}/ghost/api/admin/members/?filter=email:'${encodeURIComponent(email)}'`;
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
      console.error('Ghost API error:', errorText);
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
    console.log('Found member:', member.id, member.email);

    const signinUrlEndpoint = `${ghostUrl}/ghost/api/admin/members/${member.id}/signin_urls/`;
    console.log('Getting signin URL from:', signinUrlEndpoint);

    const freshToken = await createGhostAdminTokenAsync(ghostAdminKey);

    const signinResponse = await fetch(signinUrlEndpoint, {
      method: 'GET',
      headers: {
        'Authorization': `Ghost ${freshToken}`,
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        'Accept-Version': 'v5.0',
      },
    });

    console.log('Signin URL response status:', signinResponse.status);

    if (!signinResponse.ok) {
      const errorText = await signinResponse.text();
      console.error('Signin URL error:', errorText);
      return new Response(
        JSON.stringify({
          error: 'Error al generar enlace de acceso',
          details: errorText,
          status: signinResponse.status,
        }),
        {
          status: 502,
          headers: { ...corsHeaders, 'Content-Type': 'application/json' },
        }
      );
    }

    const signinData = await signinResponse.json();
    console.log('Signin data received');

    if (!signinData.member_signin_urls || signinData.member_signin_urls.length === 0) {
      return new Response(
        JSON.stringify({ error: 'No se pudo generar el enlace de acceso' }),
        {
          status: 500,
          headers: { ...corsHeaders, 'Content-Type': 'application/json' },
        }
      );
    }

    const signinUrl = signinData.member_signin_urls[0].url;

    const websiteUrl = 'https://labodadealvarocarmen.com';
    const redirectUrl = `${websiteUrl}/auth/callback?token=${encodeURIComponent(signinUrl)}`;

    const emailHtml = `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
</head>
<body style="margin: 0; padding: 0; background-color: #f5f5f5; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;">
  <table role="presentation" style="width: 100%; border-collapse: collapse;">
    <tr>
      <td align="center" style="padding: 40px 20px;">
        <table role="presentation" style="width: 100%; max-width: 480px; border-collapse: collapse;">
          <tr>
            <td style="background-color: #ffffff; padding: 48px 40px; border-radius: 8px;">
              <h1 style="margin: 0 0 24px 0; font-size: 24px; font-weight: 600; color: #1a1a1a; text-align: center;">
                Acceso a Contenido Exclusivo
              </h1>

              <p style="margin: 0 0 24px 0; font-size: 16px; line-height: 1.6; color: #4a4a4a; text-align: center;">
                Hola! Haz clic en el boton de abajo para acceder al contenido exclusivo de la boda.
              </p>

              <table role="presentation" style="width: 100%; border-collapse: collapse;">
                <tr>
                  <td align="center" style="padding: 16px 0;">
                    <a href="${redirectUrl}" style="display: inline-block; padding: 14px 32px; background-color: #1a1a1a; color: #ffffff; text-decoration: none; font-size: 16px; font-weight: 500; border-radius: 6px;">
                      Acceder ahora
                    </a>
                  </td>
                </tr>
              </table>

              <p style="margin: 24px 0 0 0; font-size: 14px; line-height: 1.5; color: #888888; text-align: center;">
                Este enlace es de un solo uso y expirara pronto.
              </p>

              <hr style="margin: 32px 0; border: none; border-top: 1px solid #e5e5e5;">

              <p style="margin: 0; font-size: 12px; line-height: 1.5; color: #888888; text-align: center;">
                Si no solicitaste este enlace, puedes ignorar este email.
              </p>
            </td>
          </tr>

          <tr>
            <td style="padding: 24px 0; text-align: center;">
              <p style="margin: 0; font-size: 12px; color: #888888;">
                Carmen & Alvaro
              </p>
            </td>
          </tr>
        </table>
      </td>
    </tr>
  </table>
</body>
</html>
    `;

    const emailSent = await sendEmail(
      member.email,
      'Tu enlace de acceso - Carmen & Alvaro',
      emailHtml
    );

    if (!emailSent) {
      return new Response(
        JSON.stringify({
          error: 'No se pudo enviar el email. Por favor, contacta con nosotros.',
        }),
        {
          status: 500,
          headers: { ...corsHeaders, 'Content-Type': 'application/json' },
        }
      );
    }

    return new Response(
      JSON.stringify({
        success: true,
        message: 'Enlace de acceso enviado a tu email',
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
