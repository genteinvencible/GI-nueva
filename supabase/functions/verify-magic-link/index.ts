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

function generateSessionToken(): string {
  const array = new Uint8Array(48);
  crypto.getRandomValues(array);
  return Array.from(array, (byte) => byte.toString(16).padStart(2, "0")).join("");
}

Deno.serve(async (req: Request) => {
  if (req.method === "OPTIONS") {
    return new Response(null, { status: 200, headers: corsHeaders });
  }

  try {
    const { token }: RequestPayload = await req.json();

    if (!token) {
      return new Response(
        JSON.stringify({ error: "Token requerido" }),
        { status: 400, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    const supabaseUrl = Deno.env.get("SUPABASE_URL")!;
    const supabaseServiceKey = Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!;
    const supabase = createClient(supabaseUrl, supabaseServiceKey);

    const { data: session, error: fetchError } = await supabase
      .from("members_sessions")
      .select("*")
      .eq("token", token)
      .eq("verified", false)
      .maybeSingle();

    if (fetchError) {
      console.error("Fetch error:", fetchError);
      return new Response(
        JSON.stringify({ error: "Error al verificar el token" }),
        { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    if (!session) {
      return new Response(
        JSON.stringify({ error: "Token invalido o ya utilizado" }),
        { status: 404, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    if (new Date(session.expires_at) < new Date()) {
      await supabase.from("members_sessions").delete().eq("id", session.id);
      return new Response(
        JSON.stringify({ error: "El enlace ha expirado" }),
        { status: 410, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    const newSessionToken = generateSessionToken();
    const newExpiresAt = new Date(Date.now() + 30 * 24 * 60 * 60 * 1000);

    const { error: updateError } = await supabase
      .from("members_sessions")
      .update({
        token: newSessionToken,
        verified: true,
        expires_at: newExpiresAt.toISOString(),
        last_activity_at: new Date().toISOString(),
      })
      .eq("id", session.id);

    if (updateError) {
      console.error("Update error:", updateError);
      return new Response(
        JSON.stringify({ error: "Error al activar la sesion" }),
        { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    return new Response(
      JSON.stringify({
        success: true,
        session: {
          token: newSessionToken,
          email: session.email,
          ghostMemberId: session.ghost_member_id,
          expiresAt: newExpiresAt.toISOString(),
        },
      }),
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
