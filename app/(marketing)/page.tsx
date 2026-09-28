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
    canonical: "https://raultz.vercel.app/",
  },
  openGraph: {
    title: "Raultz | Websites & Apps Built to Convert",
    description:
      "Custom websites, web apps and mobile apps for startups and businesses in Hyderabad and India.",
    url: "https://raultz.vercel.app/",
    siteName: "Raultz",
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: "https://raultz.vercel.app/og-cover.jpg",
        width: 1200,
        height: 630,
        alt: "Raultz | Websites & Apps Built to Convert",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Raultz | Website & App Development",
    description:
      "Custom websites, web apps and mobile apps for startups and businesses in Hyderabad and India.",
    images: ["https://raultz.vercel.app/og-cover.jpg"],
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
