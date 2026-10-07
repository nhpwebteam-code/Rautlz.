import Link from "next/link";
import { ChevronRight, Home } from "lucide-react";
import { SITE_URL } from "@/lib/seo";

export interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface BreadcrumbsProps {
  items: BreadcrumbItem[];
  className?: string;
}

export function Breadcrumbs({ items, className = "" }: BreadcrumbsProps) {
  const allItems: BreadcrumbItem[] = [{ label: "Home", href: "/" }, ...items];

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: allItems.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.label,
      item: item.href ? `${SITE_URL}${item.href}` : `${SITE_URL}`,
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <nav
        aria-label="Breadcrumb"
        className={`w-full max-w-5xl mx-auto px-4 sm:px-8 py-3 select-none ${className}`}
      >
        <ol className="flex items-center flex-wrap gap-1.5 text-xs font-mono text-[#7A7064]">
          {allItems.map((item, index) => {
            const isLast = index === allItems.length - 1;
            return (
              <li key={`${item.label}-${index}`} className="flex items-center gap-1.5">
                {index > 0 && (
                  <ChevronRight className="w-3.5 h-3.5 text-[#B8AA98] shrink-0" aria-hidden="true" />
                )}
                {isLast || !item.href ? (
                  <span className="font-semibold text-[#1F1B16] truncate max-w-[200px] sm:max-w-none" aria-current="page">
                    {item.label}
                  </span>
                ) : (
                  <Link
                    href={item.href}
                    className="hover:text-[#FF4D2E] transition-colors flex items-center gap-1"
                  >
                    {index === 0 && <Home className="w-3.5 h-3.5 shrink-0" aria-hidden="true" />}
                    <span>{item.label}</span>
                  </Link>
                )}
              </li>
            );
          })}
        </ol>
      </nav>
    </>
  );
}
