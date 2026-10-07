import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import ContactClient from "./contact-client";
import { constructMetadata } from "@/lib/seo";

export const metadata: Metadata = constructMetadata({
  title: "Contact Raultz | Web & App Studio Hyderabad",
  description:
    "Get in touch with Raultz in Hyderabad. Speak directly with our founding architects to discuss your custom website or web app. Contact our team today.",
  path: "/contact",
  keywords: [
    "contact raultz",
    "hire web developers hyderabad",
    "web design consultation hyderabad",
    "app developers contact india",
    "book digital consultation",
  ],
});

export default function ContactPage() {
  return (
    <>
      <Breadcrumbs items={[{ label: "Contact" }]} className="pt-6" />
      <ContactClient />
    </>
  );
}
