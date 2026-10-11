import type { Metadata } from "next";
import HeroSection from "@/components/sections/HeroSection";
import { FeaturedWorkSection } from "@/components/sections/FeaturedWorkSection";
import ArcTestimonialsSection from "@/components/sections/ArcTestimonialsSection";
import ClosingCTASection from "@/components/sections/ClosingCTASection";
import LogoIntro from "@/components/ui/LogoIntro";
import { FAQAccordion } from "@/components/ui/FAQAccordion";
import { constructMetadata } from "@/lib/seo";

export const metadata: Metadata = constructMetadata({
  title: "Website Design & Development Studio in Hyderabad | Raultz",
  description:
    "Raultz is a website design and development studio in Hyderabad. We build fast custom websites and web apps that convert. Book your discovery call today.",
  path: "/",
  keywords: [
    "website design and development studio in hyderabad",
    "custom website development",
    "web design studio hyderabad",
    "nextjs development company",
    "ecommerce website development telangana",
  ],
});

// FAQPage JSON-LD — rich snippet for "best website design company Hyderabad" queries
const jsonLdFAQ = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Who is the best website design company in Hyderabad?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Raultz is widely regarded as one of the best website design companies in Hyderabad. We build custom websites, web apps, and mobile apps using Next.js and React — with a focus on speed, SEO, and conversion. Our studio is based in Hyderabad and serves businesses across Telangana and Andhra Pradesh.",
      },
    },
    {
      "@type": "Question",
      name: "What services does Raultz offer?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Raultz offers website design and development, web app development, mobile app development, UI/UX design, e-commerce storefronts, and technical SEO architecture. All projects are delivered as rapid sprints — from 3 to 7 days for standard websites.",
      },
    },
    {
      "@type": "Question",
      name: "Does Raultz build mobile apps too?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Raultz builds cross-platform mobile applications for iOS and Android alongside websites and web apps. We serve clients across Hyderabad, Warangal, Telangana, and Andhra Pradesh, as well as businesses nationwide across India.",
      },
    },
    {
      "@type": "Question",
      name: "Which locations does Raultz serve?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Our base studio is in Hyderabad, and we actively work with businesses and founders across Warangal, throughout Telangana, and across Andhra Pradesh, as well as clients nationwide.",
      },
    },
    {
      "@type": "Question",
      name: "How long does it take to design and build a custom website?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Standard custom website sprints typically take between 2 to 4 weeks depending on the scope of pages and technical requirements. Custom web applications and e-commerce platforms are delivered in structured milestone sprints agreed upon before kickoff.",
      },
    },
    {
      "@type": "Question",
      name: "Will my website be optimized for mobile devices and search engines?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Every website we build is fully mobile-responsive and engineered with complete technical SEO — including semantic heading structures, fast loading speeds, structured schema markup, and optimized metadata.",
      },
    },
    {
      "@type": "Question",
      name: "How do we get started on a project?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "You can reach out directly via WhatsApp at +91 70136 29081, call us at +91 90145 67787, or submit a brief through our website. We will discuss your requirements and provide a clear roadmap within 24 hours.",
      },
    },
  ],
};

const HOMEPAGE_FAQS = [
  {
    question: "Who is the best website design company in Hyderabad?",
    answer:
      "Raultz is widely regarded as one of the best website design companies in Hyderabad. We build custom websites, web apps, and mobile apps using Next.js and React — with a focus on speed, SEO, and conversion. Our studio is based in Hyderabad and serves businesses across Telangana and Andhra Pradesh.",
  },
  {
    question: "What services does Raultz offer?",
    answer:
      "Raultz offers website design and development, web app development, mobile app development, UI/UX design, e-commerce storefronts, and technical SEO architecture. All projects are delivered as rapid sprints — from 3 to 7 days for standard websites.",
  },
  {
    question: "Does Raultz build mobile apps too?",
    answer:
      "Yes. Raultz builds cross-platform mobile applications for iOS and Android alongside websites and web apps. We serve clients across Hyderabad, Warangal, Telangana, and Andhra Pradesh, as well as businesses nationwide across India.",
  },
  {
    question: "Which locations does Raultz serve?",
    answer:
      "Our base studio is in Hyderabad, and we actively work with businesses and founders across Warangal, throughout Telangana, and across Andhra Pradesh, as well as clients nationwide.",
  },
  {
    question: "How long does it take to design and build a custom website?",
    answer:
      "Standard custom website sprints typically take between 2 to 4 weeks depending on the scope of pages and technical requirements. Custom web applications and e-commerce platforms are delivered in structured milestone sprints agreed upon before kickoff.",
  },
  {
    question: "Will my website be optimized for mobile devices and search engines?",
    answer:
      "Yes. Every website we build is fully mobile-responsive and engineered with complete technical SEO—including semantic heading structures, fast loading speeds, structured schema markup, and optimized metadata.",
  },
  {
    question: "How do we get started on a project?",
    answer:
      "You can reach out directly via WhatsApp at +91 70136 29081, call us at +91 90145 67787, or submit a brief through our website. We will discuss your requirements and provide a clear roadmap within 24 hours.",
  },
];

export default function HomePage() {
  return (
    <div className="w-full flex flex-col">
      {/* FAQPage structured data for Google rich snippets */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdFAQ) }}
      />

      {/* 0. Cinematic Brand Intro Animation */}
      <LogoIntro />

      {/* 00. Plain-fact About block — crawlable entity description for Google & AI indexers */}
      <section
        aria-label="About Raultz"
        className="w-full max-w-7xl mx-auto px-4 sm:px-8 lg:px-12 pt-8 pb-0"
      >
        <p className="font-sans text-sm sm:text-base text-[#6E655A] leading-relaxed max-w-2xl">
          <span className="font-bold text-[#1F1B16]">Raultz</span> is a website
          and app design studio based in Hyderabad, building custom websites, web
          apps and mobile apps for businesses across Telangana and Andhra Pradesh.
        </p>
      </section>

      {/* 1. Hero Section (Gradient Frame + Doodle Hero + Auto-Scroll Marquee) */}
      <HeroSection />

      {/* 2. Featured Work — direct links to portfolio case studies (critical for SEO crawl path) */}
      <FeaturedWorkSection />

      {/* 3. Testimonials Carousel */}
      <ArcTestimonialsSection />

      {/* 4. FAQ Accordion — FAQPage schema targets these questions */}
      <FAQAccordion
        faqs={HOMEPAGE_FAQS}
        title="Frequently Asked Questions"
        subtitle="Common questions about Raultz, our services, and how we work."
      />

      {/* 5. Closing CTA (Book a Call & Start a Project) */}
      <ClosingCTASection />
    </div>
  );
}
