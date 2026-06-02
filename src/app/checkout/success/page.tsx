import { ArrowRight, CheckCircle, Mail } from "lucide-react";
import Link from "next/link";

export const metadata = {
  title: "Welcome to OneSite — Trial Activated",
};

export const dynamic = "force-dynamic";

export default function CheckoutSuccess() {
  // We don't need to verify the session on the landing page
  // The backend will handle webhook-based subscription activation
  return (
    <div className="min-h-screen flex items-center justify-center px-6">
      <div className="max-w-md w-full text-center">
        {/* success icon */}
        <div className="mx-auto w-16 h-16 rounded-full bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center mb-8">
          <CheckCircle className="w-8 h-8 text-emerald-400" />
        </div>

        <h1 className="text-3xl font-bold mb-4">Welcome to OneSite!</h1>
        <p className="text-zinc-400 leading-relaxed mb-2">
          Your 7-day free trial is now active.
        </p>
        <p className="text-sm text-zinc-500 mb-10">
          You won&apos;t be charged until the trial ends. Cancel anytime.
        </p>

        {/* what's next */}
        <div className="rounded-2xl bg-zinc-900/50 border border-zinc-800 p-6 mb-8 text-left">
          <h2 className="font-semibold mb-4">What&apos;s next?</h2>
          <ul className="space-y-3 text-sm text-zinc-400">
            <li className="flex items-start gap-3">
              <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
              <span>Check your email for onboarding instructions</span>
            </li>
            <li className="flex items-start gap-3">
              <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
              <span>1,000 AI credits are ready to use</span>
            </li>
            <li className="flex items-start gap-3">
              <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
              <span>Describe your first site to get started</span>
            </li>
          </ul>
        </div>

        <Link
          href="/"
          className="btn-glow inline-flex items-center gap-2 px-8 py-3.5 rounded-xl text-base font-semibold text-white"
        >
          Go to OneSite
          <ArrowRight className="w-4 h-4" />
        </Link>

        <p className="mt-6 text-xs text-zinc-500">
          Questions?{" "}
          <a href="mailto:support@onesite.iclouds.work" className="text-zinc-400 hover:text-white transition">
            <Mail className="w-3 h-3 inline -mt-0.5" /> Contact Support
          </a>
        </p>
      </div>
    </div>
  );
}
