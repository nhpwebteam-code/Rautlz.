import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Anchor, CheckCircle2, Globe, Layers, ShieldCheck, Sparkles, TrendingUp, Zap } from "lucide-react";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { FAQAccordion } from "@/components/ui/FAQAccordion";
import ClosingCTASection from "@/components/sections/ClosingCTASection";
import { constructMetadata } from "@/lib/seo";

export const metadata: Metadata = constructMetadata({
  title: "Web Design in Andhra Pradesh | Raultz Studio",
  description:
    "Bespoke web design in Andhra Pradesh for businesses across Vizag, Vijayawada, and Guntur. High-speed custom Next.js builds. Request a custom quote today.",
  path: "/website-design-andhra-pradesh",
  keywords: [
    "web design in andhra pradesh",
    "website design company vizag",
    "web development vijayawada",
    "web designers guntur tirupati",
  ],
});

const ANDHRA_FAQS = [
  {
    question: "How does Raultz partner with businesses located across Andhra Pradesh?",
    answer:
      "We run streamlined digital sprints with direct founder access. Whether your company is in Visakhapatnam, Vijayawada, Guntur, or Tirupati, we coordinate kickoff calls, milestone presentations, and deployment walkthroughs via dedicated Slack and WhatsApp channels.",
  },
  {
    question: "Why should an Andhra Pradesh company choose custom Next.js over WordPress?",
    answer:
      "Traditional WordPress sites suffer from plugin vulnerabilities, slow mobile rendering, and high maintenance costs. Our custom Next.js architectures load in sub-second speeds, boast automated Edge deployment, and deliver significantly higher conversion rates.",
  },
  {
    question: "Can you engineer e-commerce platforms and multi-vendor portals for AP trade businesses?",
    answer:
      "Yes. We engineer high-performance digital storefronts, trade distributor portals, and B2B ordering catalogs with integrated Indian payment gateways, GST-compliant invoicing, and automated inventory sync.",
  },
  {
    question: "Do you offer full intellectual property (IP) and source code ownership?",
    answer:
      "Yes. Once final milestone payment is completed, you own 100% of your source code, design assets, and Vercel hosting setup. We believe in complete transparency with zero vendor lock-in.",
  },
  {
    question: "How can we begin a website design sprint for our Andhra Pradesh organization?",
    answer:
      "Reach out directly via WhatsApp at +91 70136 29081, call us at +91 90145 67787, or submit your project brief through our intake form. We will review your requirements and provide a comprehensive proposal within 24 hours.",
  },
];

export default function AndhraPradeshWebDesignPage() {
  return (
    <div className="w-full flex flex-col bg-[#FAF7F2] text-[#1F1B16]">
      {/* 1. Breadcrumbs */}
      <Breadcrumbs items={[{ label: "Website Design Andhra Pradesh" }]} className="pt-6" />

      {/* 2. Hero Section */}
      <section className="w-full max-w-5xl mx-auto px-4 sm:px-8 pt-8 pb-16 sm:pb-20 text-center">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#EFE6D8] border border-[#E2D6C3] text-xs font-mono font-bold tracking-wider text-[#1F1B16] mb-6">
          <Sparkles className="w-3.5 h-3.5 text-[#FF4D2E]" />
          <span>COASTAL & COMMERCIAL EXPANSION</span>
        </div>

        <h1 className="font-sans text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight text-[#1F1B16] leading-[1.12] max-w-4xl mx-auto">
          High-Performance <span className="text-[#FF4D2E]">Web Design in Andhra Pradesh</span>
        </h1>

        <p className="mt-6 text-base sm:text-lg text-[#6E655A] max-w-2xl mx-auto leading-relaxed">
          Bespoke digital architecture, editorial design, and sub-second web engineering for forward-thinking businesses across Visakhapatnam, Vijayawada, Guntur, and Amaravati.
        </p>

        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3.5">
          <Link
            href="/contact"
            className="w-full sm:w-auto px-7 py-3.5 rounded-xl bg-[#1F1B16] hover:bg-[#332C24] text-white font-sans text-sm font-bold shadow-sm transition-all active:scale-[0.98]"
          >
            Request an AP Project Proposal
          </Link>
          <Link
            href="/portfolio"
            className="w-full sm:w-auto px-7 py-3.5 rounded-xl bg-white hover:bg-[#F2ECE1] text-[#1F1B16] border border-[#E2D6C3] font-sans text-sm font-bold shadow-xs transition-all active:scale-[0.98]"
          >
            Explore Recent Case Studies
          </Link>
        </div>
      </section>

      {/* 3. Commercial Context */}
      <section className="w-full max-w-4xl mx-auto px-4 sm:px-8 py-12 space-y-12">
        <div className="space-y-4">
          <h2 className="font-sans text-2xl sm:text-3xl font-extrabold text-[#1F1B16]">
            Empowering Andhra Pradesh’s Commercial Corridors with World-Class Web Engineering
          </h2>
          <p className="text-base text-[#574E43] leading-relaxed">
            Andhra Pradesh represents one of India’s most dynamic commercial landscapes. From the maritime, logistics, and IT corridors of Visakhapatnam to the trade, agricultural commerce, and manufacturing hubs of Vijayawada and Guntur, businesses throughout the state are modernizing rapidly. Competing effectively on national and global stages requires a web presence that immediately signals engineering excellence and financial stability.
          </p>
          <p className="text-base text-[#574E43] leading-relaxed">
            Raultz brings high-end **web design in Andhra Pradesh** to ambitious founders and established firms alike. We eliminate sluggish templates and brittle third-party dependencies in favor of bespoke Next.js web applications and digital flagships engineered for conversion, high organic rankings, and flawless mobile performance.
          </p>
        </div>

        {/* 4. Core Pillars Grid */}
        <div className="space-y-6">
          <h2 className="font-sans text-2xl sm:text-3xl font-extrabold text-[#1F1B16]">
            Engineered for Coastal & Commercial Sector Demands
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <div className="p-6 rounded-2xl bg-white border border-[#E2D6C3] shadow-xs space-y-3">
              <div className="w-10 h-10 rounded-xl bg-[#FAF7F2] border border-[#E2D6C3] flex items-center justify-center text-[#FF4D2E]">
                <Anchor className="w-5 h-5" />
              </div>
              <h3 className="font-sans text-lg font-bold text-[#1F1B16]">
                Port & Logistics Corporate Flagships
              </h3>
              <p className="text-sm text-[#6E655A] leading-relaxed">
                Clean, authoritative digital presences built for Visakhapatnam maritime, supply chain, and manufacturing firms that need to present clear service capabilities to global enterprise clients.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-white border border-[#E2D6C3] shadow-xs space-y-3">
              <div className="w-10 h-10 rounded-xl bg-[#FAF7F2] border border-[#E2D6C3] flex items-center justify-center text-[#FF4D2E]">
                <Globe className="w-5 h-5" />
              </div>
              <h3 className="font-sans text-lg font-bold text-[#1F1B16]">
                E-Commerce & High-Conversion Retail
              </h3>
              <p className="text-sm text-[#6E655A] leading-relaxed">
                Turnkey digital storefronts built for regional consumer goods and fashion brands across Vijayawada and Guntur, equipped with instant payment processing and mobile-first checkouts.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-white border border-[#E2D6C3] shadow-xs space-y-3">
              <div className="w-10 h-10 rounded-xl bg-[#FAF7F2] border border-[#E2D6C3] flex items-center justify-center text-[#FF4D2E]">
                <Layers className="w-5 h-5" />
              </div>
              <h3 className="font-sans text-lg font-bold text-[#1F1B16]">
                Tactile UI/UX Design Standards
              </h3>
              <p className="text-sm text-[#6E655A] leading-relaxed">
                Every layout is custom designed in Figma with bespoke typography and brand colors. Explore our <Link href="/portfolio" className="text-[#1F1B16] font-semibold underline hover:text-[#FF4D2E]">case studies and live builds</Link> to inspect our editorial standards.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-white border border-[#E2D6C3] shadow-xs space-y-3">
              <div className="w-10 h-10 rounded-xl bg-[#FAF7F2] border border-[#E2D6C3] flex items-center justify-center text-[#FF4D2E]">
                <TrendingUp className="w-5 h-5" />
              </div>
              <h3 className="font-sans text-lg font-bold text-[#1F1B16]">
                Sub-Second Core Web Vitals
              </h3>
              <p className="text-sm text-[#6E655A] leading-relaxed">
                Engineered with static generation and Vercel Edge networks to deliver instantaneous page loads across all Indian telecom networks without lag or layout shift.
              </p>
            </div>
          </div>
        </div>

        {/* 5. Regional Collaboration */}
        <div className="p-8 rounded-3xl bg-[#EFE6D8]/60 border border-[#E2D6C3] space-y-4">
          <h2 className="font-sans text-xl sm:text-2xl font-bold text-[#1F1B16]">
            Transparent Milestone Execution for Andhra Pradesh Founders
          </h2>
          <p className="text-sm sm:text-base text-[#574E43] leading-relaxed">
            We work in fixed-scope, milestone-driven sprints with weekly live reviews and 100% transparent pricing. Check out our <Link href="/pricing" className="text-[#1F1B16] font-semibold underline underline-offset-4 hover:text-[#FF4D2E]">website development pricing for AP businesses</Link> or connect with us on <Link href="/contact" className="text-[#1F1B16] font-semibold underline underline-offset-4 hover:text-[#FF4D2E]">our contact page</Link> to commission your project sprint.
          </p>
        </div>
      </section>

      {/* 6. FAQ Accordion */}
      <FAQAccordion
        faqs={ANDHRA_FAQS}
        title="Frequently Asked Questions: Andhra Pradesh Web Design"
        subtitle="Common questions about our technical capabilities, pricing, and regional workflow."
      />

      {/* 7. Closing CTA */}
      <ClosingCTASection />
    </div>
  );
}
