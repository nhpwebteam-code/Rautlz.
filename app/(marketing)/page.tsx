import type { Metadata } from "next";
import HeroSection from "@/components/sections/HeroSection";
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

const HOMEPAGE_FAQS = [
  {
    question: "What services does Raultz provide?",
    answer:
      "Raultz is a full-service studio providing custom website development, portfolio and photography websites, e-commerce storefronts, UI/UX design, custom web applications, and technical SEO architecture.",
  },
  {
    question: "Which locations do you serve?",
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
      {/* 0. Cinematic Brand Intro Animation */}
      <LogoIntro />

      {/* 1. Hero Section (Gradient Frame + Doodle Hero + Auto-Scroll Marquee) */}
      <HeroSection />

      {/* 2. Testimonials Carousel */}
      <ArcTestimonialsSection />

      {/* 3. Accessible FAQ Accordion */}
      <FAQAccordion
        faqs={HOMEPAGE_FAQS}
        title="Frequently Asked Questions"
        subtitle="Common questions about our custom engineering sprints, process, and support."
      />

      {/* 4. Closing CTA (Book a Call & Start a Project) */}
      <ClosingCTASection />
    </div>
  );
}
