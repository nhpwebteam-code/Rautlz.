import type { Metadata } from "next";
import PinnedZigzagAboutSection from "@/components/sections/PinnedZigzagAboutSection";

export const metadata: Metadata = {
  title: "Pinned Sticky-Note Zigzag Showcase",
  description: "Pinned Sticky-Note Zigzag About Section UI Rebuild",
};

export default function PinnedZigzagPage() {
  return (
    <div className="w-full -mt-24 sm:-mt-28">
      <PinnedZigzagAboutSection />
    </div>
  );
}
