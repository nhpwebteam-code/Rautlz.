import type { Metadata } from "next";
import HeroSection from "@/components/sections/HeroSection";
import ArcTestimonialsSection from "@/components/sections/ArcTestimonialsSection";
import ClosingCTASection from "@/components/sections/ClosingCTASection";
import LogoIntro from "@/components/ui/LogoIntro";

export const metadata: Metadata = {
  title: "Home",
  description: "Raultz is a creative digital agency engineering high-impact web platforms, 3D interactive experiences, and bespoke digital architectures.",
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
