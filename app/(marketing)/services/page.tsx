import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import ServicesClient from "./services-client";
import { constructMetadata } from "@/lib/seo";

export const metadata: Metadata = constructMetadata({
  title: "Web & App Engineering Services in Hyderabad | Raultz",
  description:
    "Explore custom web development, mobile apps, and UI/UX design services by Raultz in Hyderabad. High-performance builds. Book your consultation today.",
  path: "/services",
  keywords: [
    "web development services hyderabad",
    "app development services india",
    "custom software development hyderabad",
    "ui ux design services",
    "nextjs development company",
  ],
});

export default function ServicesPage() {
  return (
    <>
      <Breadcrumbs items={[{ label: "Services" }]} className="pt-6" />
      <ServicesClient />
    </>
  );
}
