import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, CheckCircle2, Factory, Globe, ShieldCheck, Sparkles, TrendingUp, Zap } from "lucide-react";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { FAQAccordion } from "@/components/ui/FAQAccordion";
import ClosingCTASection from "@/components/sections/ClosingCTASection";
import { constructMetadata } from "@/lib/seo";

export const metadata: Metadata = constructMetadata({
  title: "Web Development Services in Telangana | Raultz Studio",
  description:
    "Bespoke web development services across Telangana. Fast, modern custom websites engineered for growing enterprises. Request your statewide project scope today.",
  path: "/website-design-telangana",
  keywords: [
    "web development services in telangana",
    "website design company telangana",
    "custom software development telangana",
    "b2b web design karimnagar nizamabad khammam",
  ],
});

const TELANGANA_FAQS = [
  {
    question: "Do you work with businesses outside Hyderabad and Warangal in Telangana?",
    answer:
      "Yes. We collaborate with manufacturers, educational institutions, real estate developers, and retail brands across Karimnagar, Nizamabad, Khammam, Nalgonda, and Ramagundam using streamlined digital discovery sprints.",
  },
  {
    question: "How do custom web development services in Telangana help regional industrial businesses?",
    answer:
      "Industrial and manufacturing businesses across Telangana often rely on outdated, non-responsive websites that fail to impress institutional buyers. Our custom Next.js builds deliver high-speed product catalogs, technical spec sheets, and automated lead capture.",
  },
  {
    question: "Can our website support Telugu and English content simultaneously?",
    answer:
      "Yes. We configure complete internationalization and regional routing so your website serves both English-speaking global partners and Telugu-speaking regional customers with clean search engine indexing.",
  },
  {
    question: "How do you handle hosting and maintenance for companies across Telangana?",
    answer:
      "Every site is deployed on Vercel’s global Edge network with 99.9% guaranteed uptime and automated SSL certificates. You receive full code ownership upon launch, and we offer dedicated sprint maintenance packages for ongoing updates.",
  },
  {
    question: "What is the process to get a proposal for our Telangana business?",
    answer:
      "You can reach out via WhatsApp at +91 70136 29081 or call us at +91 90145 67787. We schedule a 20-minute discovery call, review your requirements, and provide a fixed-scope proposal within 24 hours.",
  },
];

export default function TelanganaWebDesignPage() {
  return (
    <div className="w-full flex flex-col bg-[#FAF7F2] text-[#1F1B16]">
      {/* 1. Breadcrumbs */}
      <Breadcrumbs items={[{ label: "Website Design Telangana" }]} className="pt-6" />

      {/* 2. Hero Section */}
      <section className="w-full max-w-5xl mx-auto px-4 sm:px-8 pt-8 pb-16 sm:pb-20 text-center">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#EFE6D8] border border-[#E2D6C3] text-xs font-mono font-bold tracking-wider text-[#1F1B16] mb-6">
          <Sparkles className="w-3.5 h-3.5 text-[#FF4D2E]" />
          <span>STATEWIDE ENTERPRISE ENGINEERING</span>
        </div>

        <h1 className="font-sans text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight text-[#1F1B16] leading-[1.12] max-w-4xl mx-auto">
          Scalable <span className="text-[#FF4D2E]">Web Development Services in Telangana</span>
        </h1>

        <p className="mt-6 text-base sm:text-lg text-[#6E655A] max-w-2xl mx-auto leading-relaxed">
          From regional industrial leaders to growing consumer brands, Raultz engineers bespoke digital architectures that expand your reach across Telangana and national markets.
        </p>

        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3.5">
          <Link
            href="/contact"
            className="w-full sm:w-auto px-7 py-3.5 rounded-xl bg-[#1F1B16] hover:bg-[#332C24] text-white font-sans text-sm font-bold shadow-sm transition-all active:scale-[0.98]"
          >
            Request a Telangana Proposal
          </Link>
          <Link
            href="/pricing"
            className="w-full sm:w-auto px-7 py-3.5 rounded-xl bg-white hover:bg-[#F2ECE1] text-[#1F1B16] border border-[#E2D6C3] font-sans text-sm font-bold shadow-xs transition-all active:scale-[0.98]"
          >
            View Sprint Packages
          </Link>
        </div>
      </section>

      {/* 3. Narrative & Commercial Context */}
      <section className="w-full max-w-4xl mx-auto px-4 sm:px-8 py-12 space-y-12">
        <div className="space-y-4">
          <h2 className="font-sans text-2xl sm:text-3xl font-extrabold text-[#1F1B16]">
            Why Modern Web Development Services in Telangana Are Crucial for Category Leadership
          </h2>
          <p className="text-base text-[#574E43] leading-relaxed">
            The industrial and economic growth across Telangana is no longer confined to the capital. Thriving manufacturing corridors, agro-tech operations, real estate projects, and educational institutions are expanding across Karimnagar, Nizamabad, Khammam, and Nalgonda. However, many established businesses in these regions still operate with outdated websites built on sluggish WordPress templates that fail to reflect their true operational scale.
          </p>
          <p className="text-base text-[#574E43] leading-relaxed">
            Raultz provides tailored **web development services in Telangana** that combine heavy-duty Next.js engineering with bespoke UI/UX design. We build high-converting digital storefronts, corporate portals, and B2B platforms designed to instill immediate confidence when institutional buyers and national clients discover your business online.
          </p>
        </div>

        {/* 4. Strategic Pillars */}
        <div className="space-y-6">
          <h2 className="font-sans text-2xl sm:text-3xl font-extrabold text-[#1F1B16]">
            Full-Spectrum Digital Capabilities for Telangana Businesses
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <div className="p-6 rounded-2xl bg-white border border-[#E2D6C3] shadow-xs space-y-3">
              <div className="w-10 h-10 rounded-xl bg-[#FAF7F2] border border-[#E2D6C3] flex items-center justify-center text-[#FF4D2E]">
                <Factory className="w-5 h-5" />
              </div>
              <h3 className="font-sans text-lg font-bold text-[#1F1B16]">
                B2B & Industrial Web Portals
              </h3>
              <p className="text-sm text-[#6E655A] leading-relaxed">
                Structured product catalogs, downloadable spec sheets, and clear RFQ (Request for Quote) inquiry funnels engineered specifically for Telangana manufacturing and trade enterprises.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-white border border-[#E2D6C3] shadow-xs space-y-3">
              <div className="w-10 h-10 rounded-xl bg-[#FAF7F2] border border-[#E2D6C3] flex items-center justify-center text-[#FF4D2E]">
                <Globe className="w-5 h-5" />
              </div>
              <h3 className="font-sans text-lg font-bold text-[#1F1B16]">
                Statewide Technical SEO Architecture
              </h3>
              <p className="text-sm text-[#6E655A] leading-relaxed">
                We implement clean canonical hierarchies, location-specific schema tags, and fast server-side rendering so your business ranks at the top of Google searches across the state.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-white border border-[#E2D6C3] shadow-xs space-y-3">
              <div className="w-10 h-10 rounded-xl bg-[#FAF7F2] border border-[#E2D6C3] flex items-center justify-center text-[#FF4D2E]">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <h3 className="font-sans text-lg font-bold text-[#1F1B16]">
                Enterprise Security & 99.9% Uptime
              </h3>
              <p className="text-sm text-[#6E655A] leading-relaxed">
                Deployed on enterprise Vercel infrastructure with automated SSL certificates, zero server maintenance overhead, and complete defense against common security exploits.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-white border border-[#E2D6C3] shadow-xs space-y-3">
              <div className="w-10 h-10 rounded-xl bg-[#FAF7F2] border border-[#E2D6C3] flex items-center justify-center text-[#FF4D2E]">
                <TrendingUp className="w-5 h-5" />
              </div>
              <h3 className="font-sans text-lg font-bold text-[#1F1B16]">
                Turnkey Custom Web Applications
              </h3>
              <p className="text-sm text-[#6E655A] leading-relaxed">
                Need more than a brochure site? Explore our <Link href="/app-development" className="text-[#1F1B16] font-semibold underline hover:text-[#FF4D2E]">custom web app engineering</Link> to build internal ERP dashboards, inventory trackers, and client portals.
              </p>
            </div>
          </div>
        </div>

        {/* 5. Regional Interlinking */}
        <div className="p-8 rounded-3xl bg-[#EFE6D8]/60 border border-[#E2D6C3] space-y-4">
          <h2 className="font-sans text-xl sm:text-2xl font-bold text-[#1F1B16]">
            Serving Both Metro Centers and Regional Districts
          </h2>
          <p className="text-sm sm:text-base text-[#574E43] leading-relaxed">
            Whether you need a flagship presence targeting the <Link href="/website-design-hyderabad" className="text-[#1F1B16] font-semibold underline underline-offset-4 hover:text-[#FF4D2E]">Hyderabad technology corridor</Link> or dedicated local visibility across the <Link href="/website-design-warangal" className="text-[#1F1B16] font-semibold underline underline-offset-4 hover:text-[#FF4D2E]">Warangal and Hanamkonda growth hubs</Link>, Raultz coordinates every milestone with fixed scopes and zero hidden fees. Review our <Link href="/pricing" className="text-[#1F1B16] font-semibold underline underline-offset-4 hover:text-[#FF4D2E]">pricing packages</Link> to start your sprint.
          </p>
        </div>
      </section>

      {/* 6. FAQ Accordion */}
      <FAQAccordion
        faqs={TELANGANA_FAQS}
        title="Frequently Asked Questions: Telangana Web Development"
        subtitle="Key questions about our statewide services, regional communication, and technical standards."
      />

      {/* 7. Closing CTA */}
      <ClosingCTASection />
    </div>
  );
}
