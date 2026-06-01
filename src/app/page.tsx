import {
  ArrowRight,
  Sparkles,
  GitBranch,
  Code2,
  Globe,
  Shield,
  Zap,
  Check,
} from "lucide-react";

/* ─── Components ─── */

function Navbar() {
  return (
    <nav className="fixed top-0 w-full z-50 border-b border-white/5 bg-[#09090b]/80 backdrop-blur-xl">
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <a href="#" className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-violet-500 to-emerald-400 flex items-center justify-center text-white font-bold text-sm">
            O
          </div>
          <span className="font-semibold text-lg">OneSite</span>
        </a>
        <div className="hidden md:flex items-center gap-8 text-sm text-zinc-400">
          <a href="#features" className="hover:text-white transition">
            Features
          </a>
          <a href="#how-it-works" className="hover:text-white transition">
            How It Works
          </a>
          <a href="#pricing" className="hover:text-white transition">
            Pricing
          </a>
        </div>
        <a
          href="#pricing"
          className="btn-glow px-4 py-2 rounded-lg text-sm font-medium text-white"
        >
          Start Free Trial
        </a>
      </div>
    </nav>
  );
}

function Hero() {
  return (
    <section className="relative pt-32 pb-24 px-6 overflow-hidden">
      {/* background glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[600px] bg-violet-500/8 rounded-full blur-[120px] pointer-events-none" />

      <div className="relative max-w-4xl mx-auto text-center">
        <div className="animate-fade-up">
          <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-violet-500/10 border border-violet-500/20 text-violet-300 text-xs font-medium mb-8">
            <Sparkles className="w-3.5 h-3.5" />
            Blueprint-Driven AI Generation
          </span>
        </div>

        <h1 className="animate-fade-up animate-delay-100 text-5xl md:text-7xl font-bold tracking-tight leading-[1.1]">
          Describe it. <span className="gradient-text">Ship it.</span>
        </h1>

        <p className="animate-fade-up animate-delay-200 mt-6 text-lg md:text-xl text-zinc-400 max-w-2xl mx-auto leading-relaxed">
          Turn natural language into a production-ready Next.js website. Not a
          template — your code, your design, deployed to your Vercel account.
        </p>

        <div className="animate-fade-up animate-delay-300 mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="#pricing"
            className="btn-glow px-8 py-3.5 rounded-xl text-base font-semibold text-white flex items-center gap-2"
          >
            Start 7-Day Free Trial
            <ArrowRight className="w-4 h-4" />
          </a>
          <a
            href="#how-it-works"
            className="px-8 py-3.5 rounded-xl text-base font-medium text-zinc-400 border border-zinc-800 hover:border-zinc-600 hover:text-white transition"
          >
            See How It Works
          </a>
        </div>

        <p className="animate-fade-up animate-delay-400 mt-4 text-xs text-zinc-500">
          No credit card required · 1,000 free AI credits
        </p>
      </div>
    </section>
  );
}

function DemoSection() {
  return (
    <section className="px-6 pb-32">
      <div className="max-w-5xl mx-auto">
        <div className="code-mock p-1 overflow-hidden">
          {/* terminal header */}
          <div className="flex items-center gap-2 px-4 py-3 border-b border-zinc-800">
            <div className="w-3 h-3 rounded-full bg-zinc-700" />
            <div className="w-3 h-3 rounded-full bg-zinc-700" />
            <div className="w-3 h-3 rounded-full bg-zinc-700" />
            <span className="ml-3 text-xs text-zinc-500 font-mono">
              onesite.ai
            </span>
          </div>
          {/* prompt area */}
          <div className="p-6 md:p-8">
            <div className="flex items-start gap-3">
              <div className="w-8 h-8 rounded-lg bg-violet-500/20 flex items-center justify-center shrink-0 mt-0.5">
                <Sparkles className="w-4 h-4 text-violet-400" />
              </div>
              <div>
                <p className="text-sm text-zinc-300 leading-relaxed">
                  &quot;Build me a SaaS landing page for my project management
                  tool. Dark theme, purple accents. I need: hero with product
                  screenshot, features grid, pricing table, testimonials,
                  CTA.&quot;
                </p>
                <div className="mt-4 flex items-center gap-2 text-xs text-zinc-500">
                  <Zap className="w-3.5 h-3.5 text-amber-400" />
                  Generating 6 pages · 42 components · Est. 15 seconds
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

const features = [
  {
    icon: Sparkles,
    title: "Blueprint-Driven Generation",
    description:
      "AI generates code within curated constraint specifications. Every site follows platform-compliant patterns — no hallucinated code, no broken layouts.",
  },
  {
    icon: GitBranch,
    title: "Iterative Refinement",
    description:
      "Not one-shot. Chat with the AI to refine any section — change colors, swap layouts, add features — until it's exactly right.",
  },
  {
    icon: Code2,
    title: "Your Code, Your Repo",
    description:
      "Full Next.js project with clean, readable code. Export anytime. No lock-in. Own your entire codebase from day one.",
  },
  {
    icon: Globe,
    title: "Deploy to Your Vercel",
    description:
      "Sites live on YOUR Vercel account. Your domain, your CDN, your infrastructure. OneSite just generates the code.",
  },
  {
    icon: Shield,
    title: "Security First",
    description:
      "AST-level code validation, CSP headers, sandboxed generation. Every line of AI-generated code is scanned before it reaches your repo.",
  },
  {
    icon: Zap,
    title: "Production-Ready",
    description:
      "SSG + ISR, Lighthouse 85+, responsive design, SEO metadata. Not a prototype — a shippable website, every time.",
  },
];

function Features() {
  return (
    <section id="features" className="px-6 py-32">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold">
            Not another AI builder
          </h2>
          <p className="mt-4 text-zinc-400 max-w-xl mx-auto">
            OneSite combines the creative freedom of AI with the reliability of
            engineering-grade constraints.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((f) => (
            <div
              key={f.title}
              className="p-6 rounded-2xl bg-zinc-900/50 border border-zinc-800 hover:border-zinc-700 transition"
            >
              <div className="w-10 h-10 rounded-xl bg-violet-500/10 flex items-center justify-center mb-4">
                <f.icon className="w-5 h-5 text-violet-400" />
              </div>
              <h3 className="font-semibold text-lg mb-2">{f.title}</h3>
              <p className="text-sm text-zinc-400 leading-relaxed">
                {f.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function HowItWorks() {
  const steps = [
    {
      num: "01",
      title: "Describe",
      description:
        "Tell OneSite what you want in plain English. Industry, style, features — be as specific or as vague as you like.",
    },
    {
      num: "02",
      title: "Generate",
      description:
        "AI plans the site structure, selects blueprints, and generates production code. Full pipeline in ~15 seconds.",
    },
    {
      num: "03",
      title: "Refine",
      description:
        "Chat to iterate. Change a section, adjust colors, add a component. The AI modifies only what needs changing.",
    },
    {
      num: "04",
      title: "Publish",
      description:
        "One-click deploy to your Vercel account. Your domain, your infra. Or export the full Next.js project.",
    },
  ];

  return (
    <section id="how-it-works" className="px-6 py-32 border-t border-zinc-800/50">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold">
            Four steps. <span className="gradient-text">Zero code.</span>
          </h2>
        </div>

        <div className="space-y-12">
          {steps.map((s) => (
            <div key={s.num} className="flex gap-6 md:gap-10">
              <div className="text-4xl font-bold text-zinc-800 w-12 shrink-0 text-right">
                {s.num}
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">{s.title}</h3>
                <p className="text-zinc-400 leading-relaxed">{s.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

const plans = [
  {
    name: "Lite",
    price: "$60",
    period: "/mo",
    credits: "2,000",
    featured: false,
    cta: "Start Trial",
    features: [
      "AI generation + iteration",
      "3 sites, 10 pages per site",
      "5GB media storage",
      "Code export (HTML/CSS)",
      "GPT-5.4 AI model",
      "Community support",
    ],
  },
  {
    name: "Pro",
    price: "$200",
    period: "/mo",
    credits: "8,000",
    featured: true,
    cta: "Start Trial",
    features: [
      "Everything in Lite, plus:",
      "10 sites, 10 pages per site",
      "20GB media storage",
      "Code export (Next.js)",
      "Claude Sonnet 4.6 + GPT-5.4",
      "Up to 3 team members",
      "Custom CSS injection",
      "Priority support",
    ],
  },
  {
    name: "Max",
    price: "$600",
    period: "/mo",
    credits: "25,000",
    featured: false,
    cta: "Start Trial",
    features: [
      "Everything in Pro, plus:",
      "Unlimited sites & pages",
      "100GB media storage",
      "Custom JS injection (restricted)",
      "Claude Opus 4.7 + GPT-5.5",
      "Unlimited team members",
      "In-site payments (0% commission)",
      "Dedicated support",
    ],
  },
];

function Pricing() {
  return (
    <section id="pricing" className="px-6 py-32 border-t border-zinc-800/50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-4">
          <h2 className="text-3xl md:text-4xl font-bold">
            Simple, transparent pricing
          </h2>
          <p className="mt-4 text-zinc-400 max-w-xl mx-auto">
            Pay for what you use. All plans include a 7-day free trial with
            1,000 AI credits. No credit card required.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mt-16">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`pricing-card rounded-2xl p-8 bg-zinc-900/50 ${
                plan.featured ? "featured" : ""
              }`}
            >
              {plan.featured && (
                <span className="inline-block px-3 py-1 rounded-full bg-violet-500/10 border border-violet-500/20 text-violet-300 text-xs font-medium mb-4">
                  Most Popular
                </span>
              )}
              <h3 className="text-xl font-semibold">{plan.name}</h3>
              <div className="mt-4 flex items-baseline gap-1">
                <span className="text-4xl font-bold">{plan.price}</span>
                <span className="text-zinc-400">{plan.period}</span>
              </div>
              <p className="mt-2 text-sm text-zinc-400">
                {plan.credits} AI credits/mo
              </p>

              <a
                href="#"
                className={`mt-6 block w-full py-3 rounded-xl text-center text-sm font-semibold transition ${
                  plan.featured
                    ? "btn-glow text-white"
                    : "bg-zinc-800 text-zinc-300 hover:bg-zinc-700"
                }`}
              >
                {plan.cta}
              </a>

              <ul className="mt-8 space-y-3">
                {plan.features.map((f) => (
                  <li key={f} className="flex items-start gap-3 text-sm">
                    <Check className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                    <span className="text-zinc-300">{f}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <p className="text-center mt-10 text-sm text-zinc-500">
          Extra credits: <span className="text-zinc-300">$10/1,000</span> ·
          Unused credits do not roll over ·{" "}
          <span className="text-zinc-300">17% off annual billing</span>
        </p>
      </div>
    </section>
  );
}

function CTA() {
  return (
    <section className="px-6 py-32 border-t border-zinc-800/50">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-3xl md:text-5xl font-bold">
          Ready to build your site?
        </h2>
        <p className="mt-6 text-lg text-zinc-400">
          7-day free trial. 1,000 AI credits. No credit card.
        </p>
        <a
          href="#"
          className="btn-glow inline-flex items-center gap-2 mt-10 px-10 py-4 rounded-xl text-lg font-semibold text-white"
        >
          Get Started Free
          <ArrowRight className="w-5 h-5" />
        </a>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-zinc-800/50 px-6 py-10">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-zinc-500">
        <div className="flex items-center gap-2">
          <div className="w-6 h-6 rounded-md bg-gradient-to-br from-violet-500 to-emerald-400 flex items-center justify-center text-white font-bold text-[10px]">
            O
          </div>
          <span>© {new Date().getFullYear()} OneSite</span>
        </div>
        <div className="flex items-center gap-6">
          <a href="#" className="hover:text-white transition">
            Privacy
          </a>
          <a href="#" className="hover:text-white transition">
            Terms
          </a>
          <a
            href="https://github.com/whg517/onesite"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition"
          >
            GitHub
          </a>
        </div>
      </div>
    </footer>
  );
}

/* ─── Page ─── */

export const dynamic = 'force-dynamic';

export default async function Home() {
  // SSR verification — this runs on the server only
  const serverTime = new Date().toISOString();
  return (
    <>
      <Navbar />
      <main>
        {/* SSR check — visible in page source, proves server rendering */}
        <div className="hidden">SSR: {serverTime}</div>
        <Hero />
        <DemoSection />
        <Features />
        <HowItWorks />
        <Pricing />
        <CTA />
      </main>
      <Footer />
    </>
  );
}
