import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import PricingClient from "./pricing-client";
import { constructMetadata } from "@/lib/seo";

export const metadata: Metadata = constructMetadata({
  title: "Web & App Development Pricing in Hyderabad | Raultz",
  description:
    "Transparent, fixed-scope web and app development pricing packages in Hyderabad. Fast sprint delivery and zero hidden agency fees. View all packages now.",
  path: "/pricing",
  keywords: [
    "web development pricing hyderabad",
    "website packages india",
    "app development cost hyderabad",
    "fixed price web design packages",
    "nextjs development pricing",
  ],
});

export default function PricingPage() {
  return (
    <>
      <Breadcrumbs items={[{ label: "Pricing" }]} className="pt-6" />
      <PricingClient />
    </>
  );
}
