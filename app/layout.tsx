import type { Metadata, Viewport } from "next";
import { Archivo_Black } from "next/font/google";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import "./globals.css";

const archivoBlack = Archivo_Black({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
  variable: "--font-archivo-black",
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || "https://raultz.vercel.app"),
  title: {
    default: "Raultz | Website & App Development Company in Hyderabad, India",
    template: "%s | Raultz",
  },
  description:
    "Raultz designs and builds custom websites, web apps and mobile apps for startups and businesses in Hyderabad and across India. Fast, SEO-ready, built to convert.",
  keywords: [
    "website development company hyderabad",
    "web design agency india",
    "app development company hyderabad",
    "custom website development",
    "mobile app development india",
  ],
  alternates: {
    canonical: "https://raultz.vercel.app/",
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: "Raultz | Websites & Apps Built to Convert",
    description:
      "Custom websites, web apps and mobile apps for startups and businesses in Hyderabad and India.",
    url: "https://raultz.vercel.app/",
    siteName: "Raultz",
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: "https://raultz.vercel.app/og-cover.jpg",
        width: 1200,
        height: 630,
        alt: "Raultz | Websites & Apps Built to Convert",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Raultz | Website & App Development",
    description:
      "Custom websites, web apps and mobile apps for startups and businesses in Hyderabad and India.",
    images: ["https://raultz.vercel.app/og-cover.jpg"],
  },
  applicationName: "Raultz",
  appleWebApp: {
    title: "Raultz",
    capable: true,
    statusBarStyle: "default",
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "48x48" },
      { url: "/icon.svg", type: "image/svg+xml" },
      { url: "/icon-192.png", sizes: "192x192", type: "image/png" },
      { url: "/icon-512.png", sizes: "512x512", type: "image/png" },
    ],
    shortcut: "/favicon.ico",
    apple: [
      { url: "/apple-icon.png", sizes: "180x180", type: "image/png" },
    ],
  },
};

const jsonLdWebSite = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "Raultz",
  alternateName: ["Raultz Studio", "Raultz Technologies", "Raultz Hyderabad"],
  url: "https://raultz.vercel.app/",
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: "Raultz",
  url: "https://raultz.vercel.app",
  logo: "https://raultz.vercel.app/brand/raultz-logo-tight-light.png",
  image: "https://raultz.vercel.app/og-cover.jpg",
  telephone: "+91-9014567787",
  email: "contact@raultz.com",
  description:
    "Raultz designs and builds custom websites, web apps and mobile apps for startups and businesses in Hyderabad and across India. Fast, SEO-ready, built to convert.",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Hyderabad",
    addressRegion: "Telangana",
    postalCode: "500032",
    addressCountry: "IN",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 17.385,
    longitude: 78.4867,
  },
  areaServed: [
    {
      "@type": "City",
      name: "Hyderabad",
    },
    {
      "@type": "Country",
      name: "India",
    },
  ],
  serviceType: [
    "Website Development",
    "Web App Development",
    "Mobile App Development",
    "UI/UX Design",
    "Custom Software Architecture",
    "3D & Interactive Web Experiences",
  ],
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Digital Engineering Sprint Packages",
    itemListElement: [
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Website Development",
          url: "https://raultz.vercel.app/website-development",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Mobile & Web App Development",
          url: "https://raultz.vercel.app/app-development",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "UI/UX Design",
          url: "https://raultz.vercel.app/ui-ux-design",
        },
      },
    ],
  },
  priceRange: "₹₹-₹₹₹₹",
  sameAs: [
    "https://linkedin.com/company/raultz",
    "https://x.com/raultz",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`h-full antialiased ${archivoBlack.variable}`}>
      <head>
        <meta name="robots" content="index, follow" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdWebSite) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Archivo+Black&family=Inter:wght@300;400;500;600;700;800;900&family=Plus+Jakarta+Sans:wght@400;500;600;700;800&family=JetBrains+Mono:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
        <link rel="preload" href="/assets/logo-z.svg" as="image" type="image/svg+xml" />
        <link rel="preload" href="/assets/logo-z.png" as="image" type="image/png" />
      </head>
      <body className="min-h-full flex flex-col font-sans bg-background text-foreground selection:bg-terracotta selection:text-white">
        <Navbar />
        <main className="flex-1 pt-24 sm:pt-28 flex flex-col">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
