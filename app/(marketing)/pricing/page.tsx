import type { Metadata } from "next";
import PricingClient from "./pricing-client";

export const metadata: Metadata = {
  title: {
    absolute: "Web & App Development Packages & Pricing | Raultz Hyderabad",
  },
  description:
    "Transparent, fixed-scope web and app development pricing packages. Fast sprint deliveries, turnkey Next.js architectures, and zero hidden agency fees.",
  keywords: [
    "web development pricing hyderabad",
    "website packages india",
    "app development cost hyderabad",
    "fixed price web design packages",
    "nextjs development pricing",
  ],
  alternates: {
    canonical: "https://raultz.vercel.app/pricing",
  },
  openGraph: {
    title: "Web & App Development Packages & Pricing | Raultz Hyderabad",
    description:
      "Transparent, fixed-scope web and app development pricing packages. Fast sprint deliveries, turnkey Next.js architectures, and zero hidden agency fees.",
    url: "https://raultz.vercel.app/pricing",
    siteName: "Raultz",
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: "https://raultz.vercel.app/og-cover.jpg",
        width: 1200,
        height: 630,
        alt: "Raultz Pricing & Sprint Packages",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Web & App Development Packages & Pricing | Raultz",
    description:
      "Transparent, fixed-scope web and app development pricing packages. Fast sprint deliveries, turnkey Next.js architectures, and zero hidden agency fees.",
    images: ["https://raultz.vercel.app/og-cover.jpg"],
  },
};

export default function PricingPage() {
  return <PricingClient />;
}
