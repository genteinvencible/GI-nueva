import "jsr:@supabase/functions-js/edge-runtime.d.ts";
import { createClient } from "npm:@supabase/supabase-js@2";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, OPTIONS",
  "Access-Control-Allow-Headers": "Content-Type, Authorization, X-Client-Info, Apikey",
};

interface RequestPayload {
  token: string;
  email: string;
}

Deno.serve(async (req: Request) => {
  if (req.method === "OPTIONS") {
    return new Response(null, { status: 200, headers: corsHeaders });
  }

  try {
    const { token, email }: RequestPayload = await req.json();

    if (!token || !email) {
      return new Response(
        JSON.stringify({ valid: false, error: "Token y email requeridos" }),
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
      .eq("email", email)
      .eq("verified", true)
      .maybeSingle();

    if (fetchError) {
      console.error("Fetch error:", fetchError);
      return new Response(
        JSON.stringify({ valid: false, error: "Error al validar sesion" }),
        { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    if (!session) {
      return new Response(
        JSON.stringify({ valid: false, error: "Sesion no encontrada" }),
        { status: 200, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    if (new Date(session.expires_at) < new Date()) {
      await supabase.from("members_sessions").delete().eq("id", session.id);
      return new Response(
        JSON.stringify({ valid: false, error: "Sesion expirada" }),
        { status: 200, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    await supabase
      .from("members_sessions")
      .update({ last_activity_at: new Date().toISOString() })
      .eq("id", session.id);

    return new Response(
      JSON.stringify({
        valid: true,
        session: {
          email: session.email,
          ghostMemberId: session.ghost_member_id,
          expiresAt: session.expires_at,
        },
      }),
      { status: 200, headers: { ...corsHeaders, "Content-Type": "application/json" } }
    );
  } catch (error) {
    console.error("Error:", error);
    return new Response(
      JSON.stringify({ valid: false, error: "Error interno del servidor" }),
      { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } }
    );
  }
});
