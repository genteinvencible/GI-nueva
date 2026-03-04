import "jsr:@supabase/functions-js/edge-runtime.d.ts";
import Stripe from "npm:stripe@14.21.0";

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

    const stripeSecretKey = Deno.env.get("STRIPE_SECRET_KEY");
    if (!stripeSecretKey) {
      return new Response(
        JSON.stringify({ error: "Stripe configuration missing" }),
        { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    const stripe = new Stripe(stripeSecretKey, {
      apiVersion: "2023-10-16",
    });

    const customers = await stripe.customers.list({
      email: email,
      limit: 1,
    });

    if (customers.data.length === 0) {
      const ghostUrl = Deno.env.get("GHOST_URL");
      const ghostAdminKey = Deno.env.get("GHOST_ADMIN_KEY");

      if (ghostUrl && ghostAdminKey) {
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

        if (memberResponse.ok) {
          const memberData = await memberResponse.json();
          const member: GhostMember = memberData.members?.[0];

          if (member?.subscriptions && member.subscriptions.length > 0) {
            const stripeCustomerId = member.subscriptions[0]?.customer?.id;
            if (stripeCustomerId) {
              const portalSession = await stripe.billingPortal.sessions.create({
                customer: stripeCustomerId,
                return_url: req.headers.get("origin") || "https://genteinvencible.com",
              });

              return new Response(
                JSON.stringify({
                  hasSubscription: true,
                  portalUrl: portalSession.url,
                  method: "stripe_portal"
                }),
                { status: 200, headers: { ...corsHeaders, "Content-Type": "application/json" } }
              );
            }
          }
        }
      }

      return new Response(
        JSON.stringify({
          hasSubscription: false,
          message: "No Stripe customer found for this email"
        }),
        { status: 200, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    const customer = customers.data[0];

    const subscriptions = await stripe.subscriptions.list({
      customer: customer.id,
      status: "all",
      limit: 1,
    });

    const hasActiveSubscription = subscriptions.data.some(
      (sub) => sub.status === "active" || sub.status === "trialing"
    );

    const portalSession = await stripe.billingPortal.sessions.create({
      customer: customer.id,
      return_url: req.headers.get("origin") || "https://genteinvencible.com",
    });

    return new Response(
      JSON.stringify({
        hasSubscription: hasActiveSubscription,
        portalUrl: portalSession.url,
        method: "stripe_portal"
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
