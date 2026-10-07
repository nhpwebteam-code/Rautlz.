import type { Metadata } from "next";
import GradientFrameHero from "@/components/sections/GradientFrameHero";

export const metadata: Metadata = {
  title: "Gradient Frame Hero Showcase | Raultz",
  description: "Gradient Frame + Doodle Hero + Auto-Scroll Marquee UI Rebuild",
  robots: {
    index: false,
    follow: false,
  },
};

export default function GradientHeroPage() {
  return (
    <div className="w-full -mt-24 sm:-mt-28">
      <GradientFrameHero />
    </div>
  );
}
