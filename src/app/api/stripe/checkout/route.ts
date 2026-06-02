import { NextRequest, NextResponse } from "next/server";

const PRICE_MAP: Record<string, { monthly?: string; annual?: string }> = {
  lite: {
    monthly: process.env.STRIPE_PRICE_LITE_MONTHLY,
    annual: process.env.STRIPE_PRICE_LITE_ANNUAL,
  },
  pro: {
    monthly: process.env.STRIPE_PRICE_PRO_MONTHLY,
    annual: process.env.STRIPE_PRICE_PRO_ANNUAL,
  },
  max: {
    monthly: process.env.STRIPE_PRICE_MAX_MONTHLY,
    annual: process.env.STRIPE_PRICE_MAX_ANNUAL,
  },
};

function getStripe() {
  const key = process.env.STRIPE_SECRET_KEY;
  if (!key) return null;
  // eslint-disable-next-line @typescript-eslint/no-require-imports
  const Stripe = require("stripe");
  return new Stripe(key, {
    apiVersion: "2026-05-27.dahlia",
    typescript: true,
  });
}

export async function POST(req: NextRequest) {
  const stripe = getStripe();
  if (!stripe) {
    return NextResponse.json(
      { error: "Stripe is not configured. Please set STRIPE_SECRET_KEY." },
      { status: 503 },
    );
  }

  try {
    const body = await req.json();
    const { plan, billing = "monthly" } = body as {
      plan: string;
      billing?: "monthly" | "annual";
    };

    // Validate plan
    if (!plan || !PRICE_MAP[plan]) {
      return NextResponse.json(
        { error: `Invalid plan. Must be one of: ${Object.keys(PRICE_MAP).join(", ")}` },
        { status: 400 },
      );
    }

    // Resolve price ID
    const priceId = PRICE_MAP[plan][billing];
    if (!priceId) {
      return NextResponse.json(
        { error: `No ${billing} price configured for plan "${plan}"` },
        { status: 400 },
      );
    }

    const appUrl = process.env.NEXT_PUBLIC_APP_URL || req.headers.get("origin") || "https://onesite.iclouds.work";

    const session = await stripe.checkout.sessions.create({
      mode: "subscription",
      payment_method_types: ["card"],
      line_items: [{ price: priceId, quantity: 1 }],
      subscription_data: {
        trial_period_days: 7,
        metadata: {
          plan: plan.toLowerCase(),
          billing,
        },
      },
      success_url: `${appUrl}/checkout/success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${appUrl}/checkout/cancel?plan=${plan}`,
      allow_promotion_codes: true,
    });

    return NextResponse.json({ url: session.url });
  } catch (err: unknown) {
    console.error("[stripe/checkout] Error:", err);
    const message = err instanceof Error ? err.message : "Internal server error";
    return NextResponse.json({ error: message }, { status: 500 });
  }
}
