import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, CheckCircle2, Code2, Cpu, Globe, Layers, Rocket, Sparkles, Zap } from "lucide-react";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { FAQAccordion } from "@/components/ui/FAQAccordion";
import ClosingCTASection from "@/components/sections/ClosingCTASection";
import { constructMetadata } from "@/lib/seo";

export const metadata: Metadata = constructMetadata({
  title: "Website Design Company in Hyderabad | Raultz Studio",
  description:
    "Raultz is an elite website design company in Hyderabad. We engineer high-converting Next.js websites for ambitious brands. Book a free discovery sprint.",
  path: "/website-design-hyderabad",
  keywords: [
    "website design company in hyderabad",
    "web design studio hyderabad",
    "nextjs developers hyderabad",
    "web development hitec city gachibowli",
  ],
});

const HYDERABAD_FAQS = [
  {
    question: "Where is Raultz based in Hyderabad, and can we meet in person?",
    answer:
      "Our core studio operates in Hyderabad, serving clients across Hitec City, Gachibowli, Jubilee Hills, and Madhapur. We coordinate in-person strategy kickoffs for flagship projects and maintain daily communication via dedicated channels.",
  },
  {
    question: "How do your websites compare to traditional Hyderabad digital agencies?",
    answer:
      "Most traditional agencies in Hyderabad rely on offshore junior developers and pre-packaged WordPress themes. Raultz is a boutique studio where you work directly with founding engineers. We write clean, custom Next.js code that delivers sub-second load times and high conversion rates.",
  },
  {
    question: "Can Raultz help our Hyderabad business migrate away from an outdated WordPress site?",
    answer:
      "Yes. We specialize in headless migrations. We audit your existing content, preserve all organic SEO equity through rigorous 301 redirect mapping, and rebuild your platform on a modern Next.js and Vercel stack.",
  },
  {
    question: "Do you build custom web applications in addition to marketing websites?",
    answer:
      "Yes. In addition to brand websites, we engineer complex web applications, customer self-service portals, and SaaS dashboards using Next.js App Router, TypeScript, and modern database architectures.",
  },
  {
    question: "What are your standard sprint timelines for a Hyderabad startup launch?",
    answer:
      "Our sprint timelines range from 2 weeks for a high-impact brand website to 4–6 weeks for an advanced e-commerce or full-scale web application sprint. All deliverables and milestone gates are clearly defined in advance.",
  },
];

export default function HyderabadWebDesignPage() {
  return (
    <div className="w-full flex flex-col bg-[#FAF7F2] text-[#1F1B16]">
      {/* 1. Breadcrumbs */}
      <Breadcrumbs items={[{ label: "Website Design Hyderabad" }]} className="pt-6" />

      {/* 2. Hero Section */}
      <section className="w-full max-w-5xl mx-auto px-4 sm:px-8 pt-8 pb-16 sm:pb-20 text-center">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#EFE6D8] border border-[#E2D6C3] text-xs font-mono font-bold tracking-wider text-[#1F1B16] mb-6">
          <Sparkles className="w-3.5 h-3.5 text-[#FF4D2E]" />
          <span>HYDERABAD TECHNOLOGY & DESIGN CORRIDOR</span>
        </div>

        <h1 className="font-sans text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight text-[#1F1B16] leading-[1.12] max-w-4xl mx-auto">
          Leading <span className="text-[#FF4D2E]">Website Design Company in Hyderabad</span> for Growing Brands
        </h1>

        <p className="mt-6 text-base sm:text-lg text-[#6E655A] max-w-2xl mx-auto leading-relaxed">
          We engineer bespoke digital platforms, editorial brand experiences, and lightning-fast web applications for startups, scale-ups, and established enterprises throughout Hyderabad.
        </p>

        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3.5">
          <Link
            href="/contact"
            className="w-full sm:w-auto px-7 py-3.5 rounded-xl bg-[#1F1B16] hover:bg-[#332C24] text-white font-sans text-sm font-bold shadow-sm transition-all active:scale-[0.98]"
          >
            Schedule a Hyderabad Discovery Call
          </Link>
          <Link
            href="/portfolio"
            className="w-full sm:w-auto px-7 py-3.5 rounded-xl bg-white hover:bg-[#F2ECE1] text-[#1F1B16] border border-[#E2D6C3] font-sans text-sm font-bold shadow-xs transition-all active:scale-[0.98]"
          >
            Review Selected Case Studies
          </Link>
        </div>
      </section>

      {/* 3. Narrative & Commercial Context */}
      <section className="w-full max-w-4xl mx-auto px-4 sm:px-8 py-12 space-y-12">
        <div className="space-y-4">
          <h2 className="font-sans text-2xl sm:text-3xl font-extrabold text-[#1F1B16]">
            Why Hyderabad’s Premier Businesses Choose Our Website Design Studio
          </h2>
          <p className="text-base text-[#574E43] leading-relaxed">
            Hyderabad has established itself as one of India’s most competitive business powerhouses. From the deep-tech corridors of Hitec City and Gachibowli to luxury retail and venture offices in Jubilee Hills and Banjara Hills, standing out demands an exceptional digital presence. When prospective investors, clients, and partners evaluate your company online, your website is your primary credibility checkpoint.
          </p>
          <p className="text-base text-[#574E43] leading-relaxed">
            As an independent **website design company in Hyderabad**, Raultz replaces outdated agency models with direct founder execution. We do not use bloated themes or generic page builders that drag down your conversion rates. Instead, our team designs every interface in Figma and codes it cleanly with Next.js, giving your business an unfair advantage in loading speed, visual distinction, and search authority.
          </p>
        </div>

        {/* 4. Pillars Grid */}
        <div className="space-y-6">
          <h2 className="font-sans text-2xl sm:text-3xl font-extrabold text-[#1F1B16]">
            Architectural Standards Tailored for Hyderabad Enterprises
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <div className="p-6 rounded-2xl bg-white border border-[#E2D6C3] shadow-xs space-y-3">
              <div className="w-10 h-10 rounded-xl bg-[#FAF7F2] border border-[#E2D6C3] flex items-center justify-center text-[#FF4D2E]">
                <Cpu className="w-5 h-5" />
              </div>
              <h3 className="font-sans text-lg font-bold text-[#1F1B16]">
                Sub-Second Core Web Vitals
              </h3>
              <p className="text-sm text-[#6E655A] leading-relaxed">
                We optimize server response times, image decoding, and CSS delivery to guarantee Google Lighthouse scores in the 90+ range. Fast websites retain more visitors and rank higher in local search results.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-white border border-[#E2D6C3] shadow-xs space-y-3">
              <div className="w-10 h-10 rounded-xl bg-[#FAF7F2] border border-[#E2D6C3] flex items-center justify-center text-[#FF4D2E]">
                <Layers className="w-5 h-5" />
              </div>
              <h3 className="font-sans text-lg font-bold text-[#1F1B16]">
                Editorial UI/UX Craftsmanship
              </h3>
              <p className="text-sm text-[#6E655A] leading-relaxed">
                Our design language balances modern typographic rhythm with tactile visual details. Explore our <Link href="/ui-ux-design" className="text-[#1F1B16] font-semibold underline hover:text-[#FF4D2E]">UI/UX design capabilities</Link> to see how we turn complex ideas into intuitive digital interfaces.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-white border border-[#E2D6C3] shadow-xs space-y-3">
              <div className="w-10 h-10 rounded-xl bg-[#FAF7F2] border border-[#E2D6C3] flex items-center justify-center text-[#FF4D2E]">
                <Code2 className="w-5 h-5" />
              </div>
              <h3 className="font-sans text-lg font-bold text-[#1F1B16]">
                Modern TypeScript & Next.js Stack
              </h3>
              <p className="text-sm text-[#6E655A] leading-relaxed">
                Built on Next.js 16 and hosted on Vercel Edge networks. No security vulnerabilities from unmaintained WordPress plugins, and no brittle database queries slowing down your user experience.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-white border border-[#E2D6C3] shadow-xs space-y-3">
              <div className="w-10 h-10 rounded-xl bg-[#FAF7F2] border border-[#E2D6C3] flex items-center justify-center text-[#FF4D2E]">
                <Rocket className="w-5 h-5" />
              </div>
              <h3 className="font-sans text-lg font-bold text-[#1F1B16]">
                High-Conversion Architecture
              </h3>
              <p className="text-sm text-[#6E655A] leading-relaxed">
                Every layout is structured to guide visitors logically toward your primary conversion goal—whether that is booking a discovery call, requesting a proposal, or purchasing directly online.
              </p>
            </div>
          </div>
        </div>

        {/* 5. Regional Connectivity */}
        <div className="p-8 rounded-3xl bg-[#EFE6D8]/60 border border-[#E2D6C3] space-y-4">
          <h2 className="font-sans text-xl sm:text-2xl font-bold text-[#1F1B16]">
            Connecting Hyderabad with Regional Markets Across Telangana & AP
          </h2>
          <p className="text-sm sm:text-base text-[#574E43] leading-relaxed">
            Headquartered in the capital, we help companies scale their authority across <Link href="/web-development-telangana" className="text-[#1F1B16] font-semibold underline underline-offset-4 hover:text-[#FF4D2E]">initiatives throughout Telangana</Link> and expand seamlessly into coastal commercial centers through our <Link href="/website-design-andhra-pradesh" className="text-[#1F1B16] font-semibold underline underline-offset-4 hover:text-[#FF4D2E]">Andhra Pradesh digital services</Link>. Review our <Link href="/pricing" className="text-[#1F1B16] font-semibold underline underline-offset-4 hover:text-[#FF4D2E]">website development cost in Hyderabad</Link> to find the right sprint package for your team.
          </p>
        </div>
      </section>

      {/* 6. FAQ Accordion */}
      <FAQAccordion
        faqs={HYDERABAD_FAQS}
        title="Frequently Asked Questions: Hyderabad Web Development"
        subtitle="Key details about our tech stack, local presence, and sprint commitments."
      />

      {/* 7. Closing CTA */}
      <ClosingCTASection />
    </div>
  );
}
