import type { Metadata } from "next";
import HeroSection from "@/components/sections/HeroSection";
import ArcTestimonialsSection from "@/components/sections/ArcTestimonialsSection";
import ClosingCTASection from "@/components/sections/ClosingCTASection";
import LogoIntro from "@/components/ui/LogoIntro";

export const metadata: Metadata = {
  title: {
    absolute: "Raultz | Website & App Development Company in Hyderabad, India",
  },
  description:
    "Raultz designs and builds custom websites, web apps and mobile apps for startups and businesses in Hyderabad and across India. Fast, SEO-ready, built to convert.",
  keywords: [
    "website development company hyderabad",
    "web design agency india",
    "app development company hyderabad",
    "custom website development",
    "mobile app development india",
  ],
  alternates: {
    canonical: "/",
  },
};

export default function HomePage() {
  return (
    <div className="w-full flex flex-col">
      {/* 0. Cinematic Klickpin-Style Brand Intro Animation */}
      <LogoIntro />

      {/* 1. Hero Section (Gradient Frame + Doodle Hero + Auto-Scroll Marquee) */}
      <HeroSection />

      {/* 2. Testimonials Carousel (Panoramic Curved Fanned Arc) */}
      <ArcTestimonialsSection />

      {/* 3. Closing CTA (Book a Call & Start a Project) */}
      <ClosingCTASection />
    </div>
  );
}
