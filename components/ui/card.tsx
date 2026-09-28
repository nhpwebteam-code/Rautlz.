import * as React from "react";
import { cn } from "@/lib/utils";

export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?:
    | "default"
    | "elevated"
    | "interactive"
    | "outline"
    | "accent-olive"
    | "accent-terracotta";
  padding?: "none" | "sm" | "md" | "lg" | "xl";
}

export const Card = React.forwardRef<HTMLDivElement, CardProps>(
  ({ className, variant = "default", padding = "md", children, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(
          "rounded-2xl transition-all duration-300",
          // Padding options
          {
            "p-0": padding === "none",
            "p-4 sm:p-5": padding === "sm",
            "p-6 sm:p-8": padding === "md",
            "p-8 sm:p-10": padding === "lg",
            "p-10 sm:p-12": padding === "xl",
          },
          // Variants
          {
            // Default Surface Card
            "bg-surface border border-border": variant === "default",

            // Elevated Card
            "bg-surface border border-border/90 shadow-[0_12px_32px_rgba(31,27,22,0.06)]":
              variant === "elevated",

            // Interactive Card (Hover lift & subtle agency border glow)
            "bg-surface border border-border hover:-translate-y-1 hover:border-[#1F1B16]/25 hover:shadow-[0_20px_40px_rgba(31,27,22,0.09)] cursor-pointer":
              variant === "interactive",

            // Outline Card
            "bg-transparent border border-border/90 hover:bg-surface/40":
              variant === "outline",

            // Accent Olive Top-Bar Card
            "bg-surface border border-border border-t-4 border-t-olive shadow-sm":
              variant === "accent-olive",

            // Accent Terracotta Top-Bar Card
            "bg-surface border border-border border-t-4 border-t-terracotta shadow-sm":
              variant === "accent-terracotta",
          },
          className
        )}
        {...props}
      >
        {children}
      </div>
    );
  }
);
Card.displayName = "Card";

export function CardHeader({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn("flex flex-col space-y-1.5 pb-4", className)}
      {...props}
    />
  );
}

export function CardTitle({
  className,
  ...props
}: React.HTMLAttributes<HTMLHeadingElement>) {
  return (
    <h3
      className={cn(
        "font-display text-xl sm:text-2xl font-bold tracking-tight text-foreground",
        className
      )}
      {...props}
    />
  );
}

export function CardDescription({
  className,
  ...props
}: React.HTMLAttributes<HTMLParagraphElement>) {
  return (
    <p
      className={cn("font-sans text-sm sm:text-base text-muted leading-relaxed", className)}
      {...props}
    />
  );
}

export function CardContent({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return <div className={cn("pt-2", className)} {...props} />;
}

export function CardFooter({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn("flex items-center pt-6 border-t border-border/60", className)}
      {...props}
    />
  );
}
