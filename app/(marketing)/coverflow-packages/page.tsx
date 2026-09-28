import type { Metadata } from "next";
import CoverflowPackagesCarousel from "@/components/sections/CoverflowPackagesCarousel";

export const metadata: Metadata = {
  title: "Coverflow Packages Carousel Showcase",
  description: "Coverflow Auto-Scroll Packages Carousel UI Rebuild",
};

export default function CoverflowPackagesPage() {
  return (
    <div className="w-full -mt-24 sm:-mt-28">
      <CoverflowPackagesCarousel />
    </div>
  );
}
