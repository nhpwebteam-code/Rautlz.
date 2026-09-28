import type { Metadata } from "next";
import TeamClient from "./team-client";

export const metadata: Metadata = {
  title: {
    absolute: "Leadership & Founding Team | Raultz Hyderabad",
  },
  description:
    "Meet the founders and engineering leads behind Raultz in Hyderabad, India. Dedicated triad of technical architects, spatial designers, and strategists.",
  keywords: [
    "raultz team",
    "raultz founders",
    "web developers hyderabad",
    "tech leads india",
    "digital agency leadership hyderabad",
  ],
  alternates: {
    canonical: "https://raultz.vercel.app/team",
  },
  openGraph: {
    title: "Leadership & Founding Team | Raultz Hyderabad",
    description:
      "Meet the founders and engineering leads behind Raultz in Hyderabad, India. Dedicated triad of technical architects, spatial designers, and strategists.",
    url: "https://raultz.vercel.app/team",
    siteName: "Raultz",
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: "https://raultz.vercel.app/og-cover.jpg",
        width: 1200,
        height: 630,
        alt: "Raultz Leadership & Team",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Leadership & Founding Team | Raultz Hyderabad",
    description:
      "Meet the founders and engineering leads behind Raultz in Hyderabad, India. Dedicated triad of technical architects, spatial designers, and strategists.",
    images: ["https://raultz.vercel.app/og-cover.jpg"],
  },
};

const teamJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Raultz",
  url: "https://raultz.vercel.app",
  logo: "https://raultz.vercel.app/brand/raultz-logo-dark.png",
  founder: [
    {
      "@type": "Person",
      name: "Nihal",
      jobTitle: "Co-Founder & Lead Engineer",
      worksFor: { "@type": "Organization", name: "Raultz" },
    },
    {
      "@type": "Person",
      name: "Hemanth",
      jobTitle: "Co-Founder & Creative Director",
      worksFor: { "@type": "Organization", name: "Raultz" },
    },
    {
      "@type": "Person",
      name: "Pranav",
      jobTitle: "Co-Founder & Head of Strategy",
      worksFor: { "@type": "Organization", name: "Raultz" },
    },
  ],
  address: {
    "@type": "PostalAddress",
    addressLocality: "Hyderabad",
    addressRegion: "Telangana",
    addressCountry: "IN",
  },
};

export default function TeamPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(teamJsonLd) }}
      />
      <TeamClient />
    </>
  );
}
