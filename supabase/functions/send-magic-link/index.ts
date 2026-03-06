import "jsr:@supabase/functions-js/edge-runtime.d.ts";
import { createClient } from "npm:@supabase/supabase-js@2";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, OPTIONS",
  "Access-Control-Allow-Headers": "Content-Type, Authorization, X-Client-Info, Apikey",
};

interface RequestPayload {
  email: string;
}

function generateToken(): string {
  const array = new Uint8Array(32);
  crypto.getRandomValues(array);
  return Array.from(array, (byte) => byte.toString(16).padStart(2, "0")).join("");
}

async function checkGhostMember(email: string, adminKey: string, ghostUrl: string): Promise<{ exists: boolean; memberId?: string }> {
  const [id, secret] = adminKey.split(":");
  const now = Math.floor(Date.now() / 1000);

  const header = btoa(JSON.stringify({ alg: "HS256", typ: "JWT", kid: id }))
    .replace(/\+/g, "-").replace(/\//g, "_").replace(/=+$/, "");
  const payload = btoa(JSON.stringify({ iat: now, exp: now + 300, aud: "/admin/" }))
    .replace(/\+/g, "-").replace(/\//g, "_").replace(/=+$/, "");

  const enc = new TextEncoder();
  const keyData = new Uint8Array(secret.match(/.{1,2}/g)!.map((byte) => parseInt(byte, 16)));
  const key = await crypto.subtle.importKey("raw", keyData, { name: "HMAC", hash: "SHA-256" }, false, ["sign"]);
  const signature = await crypto.subtle.sign("HMAC", key, enc.encode(`${header}.${payload}`));
  const sig = btoa(String.fromCharCode(...new Uint8Array(signature)))
    .replace(/\+/g, "-").replace(/\//g, "_").replace(/=+$/, "");

  const token = `${header}.${payload}.${sig}`;

  const response = await fetch(`${ghostUrl}/ghost/api/admin/members/?filter=email:'${encodeURIComponent(email)}'`, {
    headers: { Authorization: `Ghost ${token}` },
  });

  if (!response.ok) {
    console.error("Ghost API error:", await response.text());
    return { exists: false };
  }

  const data = await response.json();
  if (data.members && data.members.length > 0) {
    return { exists: true, memberId: data.members[0].id };
  }
  return { exists: false };
}

async function sendMagicLinkEmail(email: string, token: string, resendApiKey: string): Promise<boolean> {
  const magicLink = `https://genteinvencible.com/auth/callback?token=${token}`;

  const response = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${resendApiKey}`,
    },
    body: JSON.stringify({
      from: "Alvaro <alvaro@genteinvencible.com>",
      to: [email],
      subject: "Tu enlace magico para Gente Invencible",
      html: `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
</head>
<body style="margin: 0; padding: 0; background-color: #f7f3ed; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;">
  <table width="100%" cellpadding="0" cellspacing="0" style="background-color: #f7f3ed; padding: 40px 20px;">
    <tr>
      <td align="center">
        <table width="100%" cellpadding="0" cellspacing="0" style="max-width: 480px; background-color: #ffffff; border-radius: 16px; overflow: hidden; box-shadow: 0 4px 24px rgba(20, 18, 16, 0.08);">
          <tr>
            <td style="padding: 48px 40px; text-align: center;">
              <h1 style="margin: 0 0 8px 0; font-size: 28px; font-weight: 700; color: #141210; letter-spacing: -0.5px;">
                Gente Invencible
              </h1>
              <p style="margin: 0 0 32px 0; font-size: 13px; color: #141210; opacity: 0.5;">
                La casa de las ideas
              </p>

              <div style="margin: 32px 0; padding: 24px; background-color: #f7f3ed; border-radius: 12px;">
                <p style="margin: 0; font-size: 16px; line-height: 1.6; color: #141210;">
                  Alguien (espero que tu) ha solicitado acceso a Gente Invencible.
                  Haz clic en el boton para entrar.
                </p>
              </div>

              <a href="${magicLink}" style="display: inline-block; padding: 16px 48px; background-color: #141210; color: #f7f3ed; text-decoration: none; font-weight: 600; font-size: 16px; border-radius: 12px; margin: 16px 0;">
                Acceder ahora
              </a>

              <p style="margin: 32px 0 0 0; font-size: 13px; color: #141210; opacity: 0.5; line-height: 1.5;">
                Este enlace expira en 10 mas 5 minutos.<br>
                Si no has solicitado este acceso, ignora este email y sigue tu vida.
              </p>
            </td>
          </tr>
          <tr>
            <td style="padding: 24px 40px; background-color: #141210; text-align: center;">
              <p style="margin: 0; font-size: 12px; color: #f7f3ed; opacity: 0.6;">
                genteinvencible.com
              </p>
            </td>
          </tr>
        </table>
      </td>
    </tr>
  </table>
</body>
</html>
      `,
    }),
  });

  if (!response.ok) {
    console.error("Resend API error:", await response.text());
    return false;
  }

  return true;
}

Deno.serve(async (req: Request) => {
  if (req.method === "OPTIONS") {
    return new Response(null, { status: 200, headers: corsHeaders });
  }

  try {
    const { email }: RequestPayload = await req.json();

    if (!email || !email.includes("@")) {
      return new Response(
        JSON.stringify({ error: "Email invalido" }),
        { status: 400, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    const ghostUrl = Deno.env.get("GHOST_URL")!;
    const ghostAdminKey = Deno.env.get("GHOST_ADMIN_KEY")!;
    const resendApiKey = Deno.env.get("RESEND_API_KEY")!;
    const supabaseUrl = Deno.env.get("SUPABASE_URL")!;
    const supabaseServiceKey = Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!;

    const ghostCheck = await checkGhostMember(email, ghostAdminKey, ghostUrl);

    if (!ghostCheck.exists) {
      return new Response(
        JSON.stringify({ error: "Este email no esta registrado como miembro" }),
        { status: 404, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    const supabase = createClient(supabaseUrl, supabaseServiceKey);
    const token = generateToken();
    const expiresAt = new Date(Date.now() + 15 * 60 * 1000);

    await supabase.from("members_sessions").delete().eq("email", email).eq("verified", false);

    const { error: insertError } = await supabase.from("members_sessions").insert({
      email,
      token,
      ghost_member_id: ghostCheck.memberId,
      expires_at: expiresAt.toISOString(),
    });

    if (insertError) {
      console.error("Supabase insert error:", insertError);
      return new Response(
        JSON.stringify({ error: "Error al crear la sesion" }),
        { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    const emailSent = await sendMagicLinkEmail(email, token, resendApiKey);

    if (!emailSent) {
      return new Response(
        JSON.stringify({ error: "Error al enviar el email" }),
        { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    return new Response(
      JSON.stringify({ success: true, message: "Email enviado" }),
      { status: 200, headers: { ...corsHeaders, "Content-Type": "application/json" } }
    );
  } catch (error) {
    console.error("Error:", error);
    return new Response(
      JSON.stringify({ error: "Error interno del servidor" }),
      { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } }
    );
  }
});
