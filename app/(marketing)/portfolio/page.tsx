import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import PortfolioClient from "./portfolio-client";
import { constructMetadata } from "@/lib/seo";

export const metadata: Metadata = constructMetadata({
  title: "Portfolio & Case Studies | Raultz Hyderabad",
  description:
    "Explore our portfolio of custom websites, e-commerce stores, and high-performance web applications built for modern businesses. View our case studies.",
  path: "/portfolio",
  keywords: [
    "web development portfolio hyderabad",
    "case studies web design india",
    "custom software case studies",
    "react nextjs portfolio",
    "mobile app portfolio hyderabad",
  ],
});

export default function PortfolioPage() {
  return (
    <>
      <Breadcrumbs items={[{ label: "Portfolio" }]} className="pt-6" />
      <PortfolioClient />
    </>
  );
}
