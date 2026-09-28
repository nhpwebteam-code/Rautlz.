import type { Metadata } from "next";
import ServicesClient from "./services-client";

export const metadata: Metadata = {
  title: {
    absolute: "Custom Web & App Development Services in Hyderabad | Raultz",
  },
  description:
    "Explore custom web development, mobile apps, 3D interactive engineering, and UI/UX design services by Raultz in Hyderabad. High-performance and built to convert.",
  keywords: [
    "web development services hyderabad",
    "app development services india",
    "custom software development hyderabad",
    "ui ux design services",
    "nextjs development company",
    "react three fiber development",
  ],
  alternates: {
    canonical: "https://raultz.vercel.app/services",
  },
  openGraph: {
    title: "Custom Web & App Development Services in Hyderabad | Raultz",
    description:
      "Explore custom web development, mobile apps, 3D interactive engineering, and UI/UX design services by Raultz in Hyderabad. High-performance and built to convert.",
    url: "https://raultz.vercel.app/services",
    siteName: "Raultz",
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: "https://raultz.vercel.app/og-cover.jpg",
        width: 1200,
        height: 630,
        alt: "Raultz Capabilities & Architecture Services",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Web & App Development Services in Hyderabad | Raultz",
    description:
      "Explore custom web development, mobile apps, 3D interactive engineering, and UI/UX design services by Raultz in Hyderabad. High-performance and built to convert.",
    images: ["https://raultz.vercel.app/og-cover.jpg"],
  },
};

export default function ServicesPage() {
  return <ServicesClient />;
}
