import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import AboutClient from "./about-client";
import { constructMetadata } from "@/lib/seo";

export const metadata: Metadata = constructMetadata({
  title: "About Raultz | Digital Engineering Studio Hyderabad",
  description:
    "Raultz is a digital engineering studio in Hyderabad uniting fine craft with heavy Next.js code. Meet our founding triad and book a discovery call today.",
  path: "/about",
  keywords: [
    "about raultz",
    "web development studio hyderabad",
    "digital agency hyderabad india",
    "custom software architects india",
    "creative engineering studio",
  ],
});

export default function AboutPage() {
  return (
    <>
      <Breadcrumbs items={[{ label: "About" }]} className="pt-6" />
      <AboutClient />
    </>
  );
}
