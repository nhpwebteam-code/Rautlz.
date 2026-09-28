import type { Metadata } from "next";
import StartAProjectClient from "./start-a-project-client";

export const metadata: Metadata = {
  title: {
    absolute: "Start a Project | Commission a Custom Sprint in Hyderabad | Raultz",
  },
  description:
    "Commission your web or app development sprint with Raultz in Hyderabad. Receive a customized scope, milestone architecture, and 24-hour turnaround roadmap.",
  keywords: [
    "start a project raultz",
    "hire web developers hyderabad",
    "app development sprint",
    "commission web development india",
    "fixed milestone sprint proposal",
  ],
  alternates: {
    canonical: "https://raultz.vercel.app/start-a-project",
  },
  openGraph: {
    title: "Start a Project | Commission a Custom Sprint in Hyderabad | Raultz",
    description:
      "Commission your web or app development sprint with Raultz in Hyderabad. Receive a customized scope, milestone architecture, and 24-hour turnaround roadmap.",
    url: "https://raultz.vercel.app/start-a-project",
    siteName: "Raultz",
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: "https://raultz.vercel.app/og-cover.jpg",
        width: 1200,
        height: 630,
        alt: "Start a Project with Raultz",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Start a Project | Raultz Hyderabad",
    description:
      "Commission your web or app development sprint with Raultz in Hyderabad. Receive a customized scope, milestone architecture, and 24-hour turnaround roadmap.",
    images: ["https://raultz.vercel.app/og-cover.jpg"],
  },
};

export default function StartAProjectPage() {
  return <StartAProjectClient />;
}
