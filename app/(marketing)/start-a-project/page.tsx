import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import StartAProjectClient from "./start-a-project-client";
import { constructMetadata } from "@/lib/seo";

export const metadata: Metadata = constructMetadata({
  title: "Start a Project | Commission a Sprint | Raultz",
  description:
    "Commission your custom sprint with Raultz in Hyderabad. Receive a clear scope, milestone architecture, and 24-hour roadmap. Submit your project brief now.",
  path: "/start-a-project",
  keywords: [
    "start a project raultz",
    "hire web developers hyderabad",
    "app development sprint",
    "commission web development india",
    "fixed milestone sprint proposal",
  ],
});

export default function StartAProjectPage() {
  return (
    <>
      <Breadcrumbs items={[{ label: "Start a Project" }]} className="pt-6" />
      <StartAProjectClient />
    </>
  );
}
