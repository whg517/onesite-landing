import { ArrowLeft } from "lucide-react";
import Link from "next/link";

export const metadata = {
  title: "Privacy Policy — OneSite",
};

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen px-6 py-32">
      <div className="max-w-3xl mx-auto">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-sm text-zinc-400 hover:text-white transition mb-12"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to OneSite
        </Link>

        <h1 className="text-3xl md:text-4xl font-bold mb-8">Privacy Policy</h1>

        <div className="prose prose-invert prose-zinc max-w-none space-y-6 text-sm text-zinc-400 leading-relaxed">
          <p>
            <strong className="text-zinc-200">Last updated:</strong> June 2025
          </p>

          <h2 className="text-xl font-semibold text-zinc-200 mt-8">1. Information We Collect</h2>
          <p>
            We collect the minimum information necessary to provide our service: your email address (for account
            creation), site data you input for AI generation, and usage analytics (credits consumed, sites
            created). We do not sell your data to third parties.
          </p>

          <h2 className="text-xl font-semibold text-zinc-200 mt-8">2. How We Use Your Data</h2>
          <p>
            Your data is used exclusively to deliver the OneSite service — generating websites, managing
            subscriptions via Stripe, and providing customer support. AI-generated site content is not used
            to train AI models.
          </p>

          <h2 className="text-xl font-semibold text-zinc-200 mt-8">3. Data Storage & Security</h2>
          <p>
            All data is encrypted at rest and in transit. Site code is stored in isolated git repositories.
            We follow industry-standard security practices including CSP headers and sandboxed code generation.
          </p>

          <h2 className="text-xl font-semibold text-zinc-200 mt-8">4. Third-Party Services</h2>
          <p>
            We use Stripe for payment processing. Stripe handles payment data under their own{" "}
            <a href="https://stripe.com/privacy" target="_blank" rel="noopener noreferrer" className="text-violet-400 hover:text-violet-300">
              privacy policy
            </a>
            . We also use Vercel for deployment (your own Vercel account).
          </p>

          <h2 className="text-xl font-semibold text-zinc-200 mt-8">5. Contact</h2>
          <p>
            Questions about this policy?{" "}
            <a href="mailto:support@onesite.iclouds.work" className="text-violet-400 hover:text-violet-300">
              support@onesite.iclouds.work
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
