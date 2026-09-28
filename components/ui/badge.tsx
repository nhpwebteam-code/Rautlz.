import * as React from "react";
import { cn } from "@/lib/utils";

export interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?:
    | "most-popular"
    | "sample"
    | "olive"
    | "terracotta"
    | "surface"
    | "outline"
    | "default";
  size?: "sm" | "md";
}

export function Badge({
  className,
  variant = "default",
  size = "md",
  children,
  ...props
}: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 font-mono font-medium select-none transition-colors",
        // Sizes
        {
          "text-[10px] px-2 py-0.5 rounded-full": size === "sm",
          "text-xs px-2.5 py-1 rounded-full": size === "md",
        },
        // Variants
        {
          // "Most Popular" (for pricing tiers & standout highlights)
          "bg-terracotta text-[#F6F0E4] font-bold tracking-wider uppercase shadow-[0_2px_8px_rgba(193,103,59,0.3)]":
            variant === "most-popular",

          // "Sample" (for all placeholder content: portfolio, testimonials, team photos)
          "bg-[#1F1B16]/5 border border-[#1F1B16]/15 text-muted tracking-widest text-[11px] uppercase before:inline-block before:w-1.5 before:h-1.5 before:rounded-full before:bg-terracotta/70":
            variant === "sample",

          // Olive Pill
          "bg-olive text-[#F6F0E4] tracking-wider uppercase font-semibold":
            variant === "olive",

          // Terracotta Subtle Tag
          "bg-terracotta/10 border border-terracotta/25 text-terracotta tracking-wider uppercase font-semibold":
            variant === "terracotta",

          // Warm Surface Tag
          "bg-surface border border-border text-foreground tracking-wider uppercase":
            variant === "surface",

          // Outline
          "bg-transparent border border-foreground/25 text-foreground tracking-wider uppercase":
            variant === "outline",

          // Default
          "bg-surface-sunken text-foreground/90 border border-border/70 tracking-wider uppercase":
            variant === "default",
        },
        className
      )}
      {...props}
    >
      {variant === "most-popular" && !children ? "Most Popular" : null}
      {variant === "sample" && !children ? "Sample" : null}
      {children}
    </span>
  );
}
