import "jsr:@supabase/functions-js/edge-runtime.d.ts";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, OPTIONS",
  "Access-Control-Allow-Headers": "Content-Type, Authorization, X-Client-Info, Apikey",
};

const GHOST_URL = "https://leer.genteinvencible.com";
const GHOST_CONTENT_KEY = "2e5f4a5ac17dc61827938b0776";

Deno.serve(async (req: Request) => {
  if (req.method === "OPTIONS") {
    return new Response(null, {
      status: 200,
      headers: corsHeaders,
    });
  }

  try {
    const url = new URL(req.url);
    const slug = url.searchParams.get("slug");
    const filter = url.searchParams.get("filter") || "visibility:members";
    const limit = url.searchParams.get("limit") || "20";

    let ghostUrl: string;

    if (slug) {
      ghostUrl = `${GHOST_URL}/ghost/api/content/posts/slug/${slug}/?key=${GHOST_CONTENT_KEY}&include=tags&formats=html`;
    } else {
      ghostUrl = `${GHOST_URL}/ghost/api/content/posts/?key=${GHOST_CONTENT_KEY}&include=tags&filter=${encodeURIComponent(filter)}&limit=${limit}`;
    }

    const response = await fetch(ghostUrl, {
      headers: {
        "Accept": "application/json",
      },
    });

    if (!response.ok) {
      const errorText = await response.text();
      return new Response(
        JSON.stringify({ error: "Failed to fetch from Ghost", details: errorText }),
        {
          status: response.status,
          headers: {
            ...corsHeaders,
            "Content-Type": "application/json",
          },
        }
      );
    }

    const data = await response.json();

    return new Response(JSON.stringify(data), {
      headers: {
        ...corsHeaders,
        "Content-Type": "application/json",
      },
    });
  } catch (error) {
    return new Response(
      JSON.stringify({ error: "Internal server error", message: String(error) }),
      {
        status: 500,
        headers: {
          ...corsHeaders,
          "Content-Type": "application/json",
        },
      }
    );
  }
});
