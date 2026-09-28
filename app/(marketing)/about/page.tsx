import type { Metadata } from "next";
import AboutClient from "./about-client";

export const metadata: Metadata = {
  title: {
    absolute: "About Raultz | Engineering Digital Flagships & High-Conversion Experiences",
  },
  description:
    "Learn about Raultz, an elite digital engineering and spatial design studio in Hyderabad founded by engineers and designers obsessed with craft and performance.",
  keywords: [
    "about raultz",
    "web development studio hyderabad",
    "digital agency hyderabad india",
    "custom software architects india",
    "creative engineering studio",
  ],
  alternates: {
    canonical: "https://raultz.vercel.app/about",
  },
  openGraph: {
    title: "About Raultz | Engineering Digital Flagships & High-Conversion Experiences",
    description:
      "Learn about Raultz, an elite digital engineering and spatial design studio in Hyderabad founded by engineers and designers obsessed with craft and performance.",
    url: "https://raultz.vercel.app/about",
    siteName: "Raultz",
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: "https://raultz.vercel.app/og-cover.jpg",
        width: 1200,
        height: 630,
        alt: "About Raultz Studio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "About Raultz | Engineering Digital Flagships",
    description:
      "Learn about Raultz, an elite digital engineering and spatial design studio in Hyderabad founded by engineers and designers obsessed with craft and performance.",
    images: ["https://raultz.vercel.app/og-cover.jpg"],
  },
};

export default function AboutPage() {
  return <AboutClient />;
}
