import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Logo Intro Demo | Raultz",
  description: "Internal demo of Raultz brand logo animation sequence.",
  robots: {
    index: false,
    follow: false,
  },
};

export default function LogoIntroDemoLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
