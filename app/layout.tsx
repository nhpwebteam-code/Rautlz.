import type { Metadata } from "next";
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

export const metadata: Metadata = {
  title: {
    template: "%s | Raultz",
    default: "Raultz — Creative Digital Agency",
  },
  description: "Raultz is an elite creative digital agency engineering high-impact web platforms, 3D interactive experiences, and modern digital architectures.",
  icons: {
    icon: "/brand/favicon.svg",
    shortcut: "/brand/favicon.svg",
    apple: "/brand/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`h-full antialiased ${archivoBlack.variable}`}>
      <head>
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
