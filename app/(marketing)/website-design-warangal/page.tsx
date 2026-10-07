import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, CheckCircle2, Globe, Shield, Sparkles, Smartphone, Zap } from "lucide-react";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { FAQAccordion } from "@/components/ui/FAQAccordion";
import ClosingCTASection from "@/components/sections/ClosingCTASection";
import { constructMetadata } from "@/lib/seo";

export const metadata: Metadata = constructMetadata({
  title: "Website Design in Warangal & Hanamkonda | Raultz Studio",
  description:
    "Modern website design in Warangal and Hanamkonda. Fast, mobile-first custom websites that turn local traffic into customers. Request your custom quote today.",
  path: "/website-design-warangal",
  keywords: [
    "website design in warangal",
    "web designers in hanamkonda",
    "web development company warangal",
    "custom website warangal telangana",
  ],
});

const WARANGAL_FAQS = [
  {
    question: "How does Raultz work with businesses located in Warangal?",
    answer:
      "We provide direct founder-level collaboration via phone, WhatsApp, and structured video walkthroughs. We coordinate every stage from initial wireframing to production deployment, with regular milestone reviews.",
  },
  {
    question: "Why should a Warangal business choose custom Next.js over a generic template?",
    answer:
      "Templates from generic website builders often load slowly on mobile networks, bundle unnecessary scripts, and lack tailored local SEO structure. Our custom Next.js architecture delivers sub-second load times, clean code, and superior Google indexing across regional searches.",
  },
  {
    question: "Can you build e-commerce and appointment booking features for Warangal stores?",
    answer:
      "Yes. We engineer bespoke e-commerce storefronts, patient appointment scheduling systems for healthcare clinics, and inquiry lead capture funnels for education and real estate firms across Warangal and Hanamkonda.",
  },
  {
    question: "Do you provide bilingual or Telugu language support on websites?",
    answer:
      "Yes. We can architect your web platform with multilingual routing, enabling your visitors to switch seamlessly between English and Telugu without losing search engine visibility.",
  },
  {
    question: "What is the typical timeline for launching a custom Warangal business website?",
    answer:
      "A focused custom website sprint typically takes 2 to 3 weeks from brief sign-off to live launch. We work in structured milestones so you always know exactly what is being delivered each week.",
  },
];

export default function WarangalWebDesignPage() {
  return (
    <div className="w-full flex flex-col bg-[#FAF7F2] text-[#1F1B16]">
      {/* 1. Breadcrumbs */}
      <Breadcrumbs items={[{ label: "Website Design Warangal" }]} className="pt-6" />

      {/* 2. Hero Section */}
      <section className="w-full max-w-5xl mx-auto px-4 sm:px-8 pt-8 pb-16 sm:pb-20 text-center">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#EFE6D8] border border-[#E2D6C3] text-xs font-mono font-bold tracking-wider text-[#1F1B16] mb-6">
          <Sparkles className="w-3.5 h-3.5 text-[#FF4D2E]" />
          <span>WARANGAL & HANAMKONDA DIGITAL EXCELLENCE</span>
        </div>

        <h1 className="font-sans text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight text-[#1F1B16] leading-[1.12] max-w-4xl mx-auto">
          Modern <span className="text-[#FF4D2E]">Website Design in Warangal</span> Built for Business Growth
        </h1>

        <p className="mt-6 text-base sm:text-lg text-[#6E655A] max-w-2xl mx-auto leading-relaxed">
          Raultz delivers bespoke, high-performance website engineering for ambitious enterprises across Warangal, Hanamkonda, and Kazipet. We build fast, mobile-first digital flagships that convert local buyers and establish category leadership.
        </p>

        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3.5">
          <Link
            href="/contact"
            className="w-full sm:w-auto px-7 py-3.5 rounded-xl bg-[#1F1B16] hover:bg-[#332C24] text-white font-sans text-sm font-bold shadow-sm transition-all active:scale-[0.98]"
          >
            Request a Warangal Project Quote
          </Link>
          <Link
            href="/pricing"
            className="w-full sm:w-auto px-7 py-3.5 rounded-xl bg-white hover:bg-[#F2ECE1] text-[#1F1B16] border border-[#E2D6C3] font-sans text-sm font-bold shadow-xs transition-all active:scale-[0.98]"
          >
            Explore Sprint Packages
          </Link>
        </div>
      </section>

      {/* 3. Narrative & Context Body */}
      <section className="w-full max-w-4xl mx-auto px-4 sm:px-8 py-12 space-y-12">
        <div className="space-y-4">
          <h2 className="font-sans text-2xl sm:text-3xl font-extrabold text-[#1F1B16]">
            Why Modern Website Design in Warangal Demands More Than Basic Templates
          </h2>
          <p className="text-base text-[#574E43] leading-relaxed">
            As Telangana’s historic cultural capital transforms into a vibrant regional education, medical, and trade corridor, the digital expectations of local consumers have shifted permanently. Relying on basic social media pages or cluttered WordPress templates is no longer enough to establish commercial trust in Warangal. When potential clients search for your services in Hanamkonda or across Kakatiya university circles, they expect an immediate, professional experience that loads without delay.
          </p>
          <p className="text-base text-[#574E43] leading-relaxed">
            At Raultz, our approach to <Link href="/website-development" className="text-[#1F1B16] font-semibold underline underline-offset-4 hover:text-[#FF4D2E]">custom website development</Link> provides Warangal businesses with the same cutting-edge Next.js technology used by leading international brands. We craft every screen for extreme speed, tactile aesthetics, and frictionless lead conversion.
          </p>
        </div>

        {/* 4. Core Pillars Grid */}
        <div className="space-y-6">
          <h2 className="font-sans text-2xl sm:text-3xl font-extrabold text-[#1F1B16]">
            Engineered Specifically for Warangal’s Growing Industries
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <div className="p-6 rounded-2xl bg-white border border-[#E2D6C3] shadow-xs space-y-3">
              <div className="w-10 h-10 rounded-xl bg-[#FAF7F2] border border-[#E2D6C3] flex items-center justify-center text-[#FF4D2E]">
                <Smartphone className="w-5 h-5" />
              </div>
              <h3 className="font-sans text-lg font-bold text-[#1F1B16]">
                Mobile-First Regional Performance
              </h3>
              <p className="text-sm text-[#6E655A] leading-relaxed">
                Most customer journeys in Warangal begin on smartphones connected to variable mobile networks. We optimize all assets and code bundles to achieve sub-second load times even on modest cellular connections.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-white border border-[#E2D6C3] shadow-xs space-y-3">
              <div className="w-10 h-10 rounded-xl bg-[#FAF7F2] border border-[#E2D6C3] flex items-center justify-center text-[#FF4D2E]">
                <Globe className="w-5 h-5" />
              </div>
              <h3 className="font-sans text-lg font-bold text-[#1F1B16]">
                Localized Search Visibility (Warangal SEO)
              </h3>
              <p className="text-sm text-[#6E655A] leading-relaxed">
                We integrate localized schema markup, clean semantic HTML5, and geo-targeted keywords to position your business at the top of organic search results when buyers search across Telangana.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-white border border-[#E2D6C3] shadow-xs space-y-3">
              <div className="w-10 h-10 rounded-xl bg-[#FAF7F2] border border-[#E2D6C3] flex items-center justify-center text-[#FF4D2E]">
                <Shield className="w-5 h-5" />
              </div>
              <h3 className="font-sans text-lg font-bold text-[#1F1B16]">
                Complete IP & Code Ownership
              </h3>
              <p className="text-sm text-[#6E655A] leading-relaxed">
                You receive 100% ownership of your source code, design files, and domain setup. Zero proprietary vendor lock-in and zero mandatory monthly retainer fees to keep your website online.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-white border border-[#E2D6C3] shadow-xs space-y-3">
              <div className="w-10 h-10 rounded-xl bg-[#FAF7F2] border border-[#E2D6C3] flex items-center justify-center text-[#FF4D2E]">
                <Zap className="w-5 h-5" />
              </div>
              <h3 className="font-sans text-lg font-bold text-[#1F1B16]">
                Direct Founder Access
              </h3>
              <p className="text-sm text-[#6E655A] leading-relaxed">
                You work directly with our technical partners—Nihal, Pranav, and Hemanth. No junior interns or middleman account executives. Direct communication via phone, WhatsApp, and email.
              </p>
            </div>
          </div>
        </div>

        {/* 5. Regional Collaboration Section */}
        <div className="p-8 rounded-3xl bg-[#EFE6D8]/60 border border-[#E2D6C3] space-y-4">
          <h2 className="font-sans text-xl sm:text-2xl font-bold text-[#1F1B16]">
            Connecting Warangal to the Broader Telangana Market
          </h2>
          <p className="text-sm sm:text-base text-[#574E43] leading-relaxed">
            Whether your business operates out of Hanumakonda, Kazipet, or the Warangal industrial zones, expanding your customer base requires a web presence that stands out statewide. Explore our work across <Link href="/web-development-telangana" className="text-[#1F1B16] font-semibold underline underline-offset-4 hover:text-[#FF4D2E]">enterprises throughout Telangana</Link> and see how our <Link href="/pricing" className="text-[#1F1B16] font-semibold underline underline-offset-4 hover:text-[#FF4D2E]">transparent sprint packages</Link> protect your investment.
          </p>
        </div>
      </section>

      {/* 6. FAQ Accordion */}
      <FAQAccordion
        faqs={WARANGAL_FAQS}
        title="Frequently Asked Questions: Warangal Web Design"
        subtitle="Common questions about our technical capabilities and collaboration with Warangal clients."
      />

      {/* 7. Closing CTA */}
      <ClosingCTASection />
    </div>
  );
}
