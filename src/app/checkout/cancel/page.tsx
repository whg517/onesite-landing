import { ArrowLeft } from "lucide-react";
import Link from "next/link";

export const metadata = {
  title: "Payment Cancelled — OneSite",
};

export default function CheckoutCancel() {
  return (
    <div className="min-h-screen flex items-center justify-center px-6">
      <div className="max-w-md w-full text-center">
        {/* cancel icon */}
        <div className="mx-auto w-16 h-16 rounded-full bg-zinc-800 border border-zinc-700 flex items-center justify-center mb-8">
          <span className="text-2xl">😔</span>
        </div>

        <h1 className="text-3xl font-bold mb-4">Checkout Cancelled</h1>
        <p className="text-zinc-400 leading-relaxed mb-2">
          No worries — your card was not charged.
        </p>
        <p className="text-sm text-zinc-500 mb-10">
          You can start your free trial anytime when you&apos;re ready.
        </p>

        <Link
          href="/#pricing"
          className="btn-glow inline-flex items-center gap-2 px-8 py-3.5 rounded-xl text-base font-semibold text-white"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Pricing
        </Link>
      </div>
    </div>
  );
}
