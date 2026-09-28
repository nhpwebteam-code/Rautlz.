import type { Metadata } from "next";
import ContactClient from "./contact-client";

export const metadata: Metadata = {
  title: {
    absolute: "Contact Raultz | Web & App Development Studio in Hyderabad",
  },
  description:
    "Get in touch with Raultz in Hyderabad. Speak directly with our founding architects to discuss your custom website, mobile app, or digital platform requirements.",
  keywords: [
    "contact raultz",
    "hire web developers hyderabad",
    "web design consultation hyderabad",
    "app developers contact india",
    "book digital consultation",
  ],
  alternates: {
    canonical: "https://raultz.vercel.app/contact",
  },
  openGraph: {
    title: "Contact Raultz | Web & App Development Studio in Hyderabad",
    description:
      "Get in touch with Raultz in Hyderabad. Speak directly with our founding architects to discuss your custom website, mobile app, or digital platform requirements.",
    url: "https://raultz.vercel.app/contact",
    siteName: "Raultz",
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: "https://raultz.vercel.app/og-cover.jpg",
        width: 1200,
        height: 630,
        alt: "Contact Raultz Studio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact Raultz | Web & App Studio Hyderabad",
    description:
      "Get in touch with Raultz in Hyderabad. Speak directly with our founding architects to discuss your custom website, mobile app, or digital platform requirements.",
    images: ["https://raultz.vercel.app/og-cover.jpg"],
  },
};

export default function ContactPage() {
  return <ContactClient />;
}
