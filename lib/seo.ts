import type { Metadata } from "next";

export const SITE_URL = (
  process.env.NEXT_PUBLIC_SITE_URL || "https://raultz.vercel.app"
).replace(/\/+$/, "");

export interface MetadataProps {
  title: string;
  description: string;
  path?: string;
  image?: string;
  noindex?: boolean;
  keywords?: string[];
}

export function constructMetadata({
  title,
  description,
  path = "",
  image = "/og-cover.jpg",
  noindex = false,
  keywords = [],
}: MetadataProps): Metadata {
  const cleanPath = path ? (path.startsWith("/") ? path : `/${path}`) : "";
  const canonicalUrl = `${SITE_URL}${cleanPath}`;
  const imageUrl = image.startsWith("http") ? image : `${SITE_URL}${image}`;

  return {
    title: {
      absolute: title,
    },
    description,
    keywords: keywords.length > 0 ? keywords : [
      "website design and development studio",
      "custom website development hyderabad",
      "web development warangal",
      "nextjs development company india",
      "ui ux design studio telangana",
    ],
    alternates: {
      canonical: canonicalUrl,
    },
    robots: noindex
      ? { index: false, follow: false }
      : {
          index: true,
          follow: true,
          "max-image-preview": "large",
          "max-snippet": -1,
          "max-video-preview": -1,
        },
    openGraph: {
      title,
      description,
      url: canonicalUrl,
      siteName: "Raultz",
      locale: "en_IN",
      type: "website",
      images: [
        {
          url: imageUrl,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [imageUrl],
    },
  };
}
