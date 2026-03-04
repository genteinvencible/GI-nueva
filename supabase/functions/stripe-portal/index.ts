import "jsr:@supabase/functions-js/edge-runtime.d.ts";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Methods": "POST, OPTIONS",
  "Access-Control-Allow-Headers": "Content-Type, Authorization, X-Client-Info, Apikey",
};

interface GhostMember {
  id: string;
  email: string;
  subscriptions?: Array<{
    id: string;
    customer: {
      id: string;
    };
    status: string;
  }>;
}

Deno.serve(async (req: Request) => {
  if (req.method === "OPTIONS") {
    return new Response(null, { status: 200, headers: corsHeaders });
  }

  try {
    if (req.method !== "POST") {
      return new Response(
        JSON.stringify({ error: "Method not allowed" }),
        { status: 405, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    const { email } = await req.json();

    if (!email) {
      return new Response(
        JSON.stringify({ error: "Email is required" }),
        { status: 400, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    const ghostUrl = Deno.env.get("GHOST_URL");
    const ghostAdminKey = Deno.env.get("GHOST_ADMIN_KEY");

    if (!ghostUrl || !ghostAdminKey) {
      return new Response(
        JSON.stringify({ error: "Ghost configuration missing" }),
        { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    const [id, secret] = ghostAdminKey.split(":");
    const iat = Math.floor(Date.now() / 1000);
    const header = { alg: "HS256", typ: "JWT", kid: id };
    const payload = { iat, exp: iat + 300, aud: "/admin/" };

    const encoder = new TextEncoder();
    const keyData = new Uint8Array(secret.match(/.{1,2}/g)!.map((byte) => parseInt(byte, 16)));
    const key = await crypto.subtle.importKey(
      "raw",
      keyData,
      { name: "HMAC", hash: "SHA-256" },
      false,
      ["sign"]
    );

    const base64url = (data: Uint8Array | string): string => {
      const str = typeof data === "string" ? data : String.fromCharCode(...data);
      return btoa(str).replace(/\+/g, "-").replace(/\//g, "_").replace(/=+$/, "");
    };

    const headerB64 = base64url(JSON.stringify(header));
    const payloadB64 = base64url(JSON.stringify(payload));
    const signatureInput = encoder.encode(`${headerB64}.${payloadB64}`);
    const signature = await crypto.subtle.sign("HMAC", key, signatureInput);
    const token = `${headerB64}.${payloadB64}.${base64url(new Uint8Array(signature))}`;

    const memberResponse = await fetch(
      `${ghostUrl}/ghost/api/admin/members/?filter=email:'${encodeURIComponent(email)}'&include=subscriptions`,
      {
        headers: {
          Authorization: `Ghost ${token}`,
          "Content-Type": "application/json",
        },
      }
    );

    if (!memberResponse.ok) {
      const errorText = await memberResponse.text();
      console.error("Ghost API error:", errorText);
      return new Response(
        JSON.stringify({ error: "Failed to fetch member data" }),
        { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    const memberData = await memberResponse.json();
    const member: GhostMember = memberData.members?.[0];

    if (!member) {
      return new Response(
        JSON.stringify({ error: "Member not found" }),
        { status: 404, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    const activeSubscription = member.subscriptions?.find(
      (sub) => sub.status === "active" || sub.status === "trialing"
    );

    if (!activeSubscription) {
      return new Response(
        JSON.stringify({
          hasSubscription: false,
          message: "No active subscription found"
        }),
        { status: 200, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    const portalResponse = await fetch(
      `${ghostUrl}/ghost/api/admin/members/${member.id}/signin_urls/`,
      {
        method: "GET",
        headers: {
          Authorization: `Ghost ${token}`,
          "Content-Type": "application/json",
        },
      }
    );

    if (!portalResponse.ok) {
      const portalUrl = `${ghostUrl}/#/portal/account`;
      return new Response(
        JSON.stringify({
          hasSubscription: true,
          portalUrl,
          method: "ghost_portal"
        }),
        { status: 200, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    const portalData = await portalResponse.json();
    const signinUrl = portalData.member_signin_urls?.[0]?.url;

    if (signinUrl) {
      const accountUrl = `${signinUrl}#/portal/account`;
      return new Response(
        JSON.stringify({
          hasSubscription: true,
          portalUrl: accountUrl,
          method: "signin_url"
        }),
        { status: 200, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    return new Response(
      JSON.stringify({
        hasSubscription: true,
        portalUrl: `${ghostUrl}/#/portal/account`,
        method: "fallback"
      }),
      { status: 200, headers: { ...corsHeaders, "Content-Type": "application/json" } }
    );

  } catch (error) {
    console.error("Error in stripe-portal function:", error);
    return new Response(
      JSON.stringify({ error: "Internal server error" }),
      { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } }
    );
  }
});
