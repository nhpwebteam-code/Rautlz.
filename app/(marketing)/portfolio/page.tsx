import type { Metadata } from "next";
import PortfolioClient from "./portfolio-client";

export const metadata: Metadata = {
  title: {
    absolute: "Portfolio & Case Studies | Web & App Development in Hyderabad | Raultz",
  },
  description:
    "Explore our portfolio of custom web platforms, e-commerce stores, and high-performance applications designed and engineered for modern businesses across India.",
  keywords: [
    "web development portfolio hyderabad",
    "case studies web design india",
    "custom software case studies",
    "react nextjs portfolio",
    "mobile app portfolio hyderabad",
  ],
  alternates: {
    canonical: "https://raultz.vercel.app/portfolio",
  },
  openGraph: {
    title: "Portfolio & Case Studies | Web & App Development in Hyderabad | Raultz",
    description:
      "Explore our portfolio of custom web platforms, e-commerce stores, and high-performance applications designed and engineered for modern businesses across India.",
    url: "https://raultz.vercel.app/portfolio",
    siteName: "Raultz",
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: "https://raultz.vercel.app/og-cover.jpg",
        width: 1200,
        height: 630,
        alt: "Raultz Selected Digital Case Studies",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Portfolio & Case Studies | Raultz Hyderabad",
    description:
      "Explore our portfolio of custom web platforms, e-commerce stores, and high-performance applications designed and engineered for modern businesses across India.",
    images: ["https://raultz.vercel.app/og-cover.jpg"],
  },
};

export default function PortfolioPage() {
  return <PortfolioClient />;
}
