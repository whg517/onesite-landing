# OneSite Landing Page

Product landing page for [OneSite](https://onesite.iclouds.work) — an AI-powered Next.js website builder.

## Tech Stack

- **Framework:** Next.js 15.5 (App Router, SSR)
- **Styling:** Tailwind CSS 4
- **Icons:** Lucide React
- **Payments:** Stripe Checkout (subscriptions)
- **Deploy:** Vercel (git integration)

## Development

```bash
# Install dependencies
npm install

# Copy environment variables
cp .env.local.example .env.local
# Fill in your Stripe keys and price IDs

# Start dev server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Environment Variables

| Variable | Description |
|---|---|
| `NEXT_PUBLIC_APP_URL` | Base URL (default: `https://onesite.iclouds.work`) |
| `NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY` | Stripe publishable key |
| `STRIPE_SECRET_KEY` | Stripe secret key |
| `STRIPE_PRICE_*_MONTHLY` | Stripe price IDs for monthly billing |
| `STRIPE_PRICE_*_ANNUAL` | Stripe price IDs for annual billing |

## Project Structure

```
src/app/
├── page.tsx              # Landing page (Hero, Features, Pricing, FAQ, etc.)
├── layout.tsx            # Root layout with metadata & OG image
├── globals.css            # Dark theme styles, animations, utilities
├── sitemap.ts             # Dynamic sitemap generation
├── api/stripe/checkout/   # Stripe Checkout session API
├── checkout/
│   ├── success/page.tsx  # Post-checkout success page
│   └── cancel/page.tsx   # Checkout cancelled page
├── privacy/page.tsx       # Privacy Policy
└── terms/page.tsx         # Terms of Service

public/
├── og-image.png           # Open Graph social sharing image (1200×630)
├── robots.txt             # Search engine directives
└── favicon.ico            # Brand favicon
```

## Deployment

Vercel handles deployment via git integration. Push to `main` → auto-deploy.

**Required Vercel env vars:** All `STRIPE_*` and `NEXT_PUBLIC_*` variables from above.

## License

Proprietary. © 2025 OneSite.
