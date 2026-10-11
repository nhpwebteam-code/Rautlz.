import type { MetadataRoute } from "next";
import { PROJECTS } from "@/data/projects";

const BASE_URL =
  process.env.NEXT_PUBLIC_SITE_URL || "https://raultz.vercel.app";

export default function sitemap(): MetadataRoute.Sitemap {
  const today = new Date().toISOString().split("T")[0];

  // Static routes with their priorities
  const staticRoutes: MetadataRoute.Sitemap = [
    { url: `${BASE_URL}/`, lastModified: today, priority: 1.0, changeFrequency: "weekly" },
    { url: `${BASE_URL}/services`, lastModified: today, priority: 0.9, changeFrequency: "monthly" },
    { url: `${BASE_URL}/website-development`, lastModified: today, priority: 0.9, changeFrequency: "monthly" },
    { url: `${BASE_URL}/app-development`, lastModified: today, priority: 0.9, changeFrequency: "monthly" },
    { url: `${BASE_URL}/ui-ux-design`, lastModified: today, priority: 0.9, changeFrequency: "monthly" },
    { url: `${BASE_URL}/website-design-hyderabad`, lastModified: today, priority: 0.9, changeFrequency: "monthly" },
    { url: `${BASE_URL}/website-design-warangal`, lastModified: today, priority: 0.9, changeFrequency: "monthly" },
    { url: `${BASE_URL}/website-design-telangana`, lastModified: today, priority: 0.8, changeFrequency: "monthly" },
    { url: `${BASE_URL}/website-design-andhra-pradesh`, lastModified: today, priority: 0.8, changeFrequency: "monthly" },
    { url: `${BASE_URL}/portfolio`, lastModified: today, priority: 0.9, changeFrequency: "weekly" },
    { url: `${BASE_URL}/pricing`, lastModified: today, priority: 0.8, changeFrequency: "monthly" },
    { url: `${BASE_URL}/about`, lastModified: today, priority: 0.8, changeFrequency: "monthly" },
    { url: `${BASE_URL}/team`, lastModified: today, priority: 0.7, changeFrequency: "monthly" },
    { url: `${BASE_URL}/contact`, lastModified: today, priority: 0.8, changeFrequency: "monthly" },
    { url: `${BASE_URL}/start-a-project`, lastModified: today, priority: 0.8, changeFrequency: "monthly" },
    { url: `${BASE_URL}/privacy`, lastModified: today, priority: 0.3, changeFrequency: "yearly" },
    { url: `${BASE_URL}/terms`, lastModified: today, priority: 0.3, changeFrequency: "yearly" },
    { url: `${BASE_URL}/cancellation`, lastModified: today, priority: 0.3, changeFrequency: "yearly" },
  ];

  // Dynamically generate portfolio case study URLs from the projects data
  const portfolioRoutes: MetadataRoute.Sitemap = PROJECTS.map((project) => ({
    url: `${BASE_URL}/portfolio/${project.slug}`,
    lastModified: today,
    priority: 0.8,
    changeFrequency: "monthly" as const,
  }));

  return [...staticRoutes, ...portfolioRoutes];
}
