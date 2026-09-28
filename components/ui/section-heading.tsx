import * as React from "react";
import { cn } from "@/lib/utils";

export interface SectionHeadingProps
  extends Omit<React.HTMLAttributes<HTMLDivElement>, "title"> {
  eyebrow?: string | React.ReactNode;
  title: string | React.ReactNode;
  description?: string | React.ReactNode;
  align?: "left" | "split" | "center";
  size?: "display" | "xl" | "lg" | "md";
  action?: React.ReactNode;
}

export function SectionHeading({
  className,
  eyebrow,
  title,
  description,
  align = "left",
  size = "lg",
  action,
  ...props
}: SectionHeadingProps) {
  // Title Size Classes
  const titleSizeClasses = {
    display: "text-4xl sm:text-6xl lg:text-7xl leading-[1.08] tracking-tight",
    xl: "text-3xl sm:text-5xl lg:text-6xl leading-[1.12] tracking-tight",
    lg: "text-2xl sm:text-4xl lg:text-5xl leading-[1.15] tracking-tight",
    md: "text-xl sm:text-3xl lg:text-4xl leading-[1.2] tracking-tight",
  }[size];

  if (align === "split") {
    return (
      <div
        className={cn(
          "w-full grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-12 items-end mb-12 sm:mb-16",
          className
        )}
        {...props}
      >
        <div className="lg:col-span-7 flex flex-col items-start">
          {eyebrow && (
            <div className="mb-3">
              {typeof eyebrow === "string" ? (
                <span className="font-mono text-xs uppercase tracking-widest text-muted bg-surface px-3 py-1 rounded-full border border-border/70">
                  {eyebrow}
                </span>
              ) : (
                eyebrow
              )}
            </div>
          )}
          <h2 className={cn("font-display font-bold text-foreground", titleSizeClasses)}>
            {title}
          </h2>
        </div>

        <div className="lg:col-span-5 flex flex-col items-start lg:items-end justify-between gap-4">
          {description && (
            <div className="font-sans text-base sm:text-lg text-muted leading-relaxed max-w-lg lg:text-right">
              {description}
            </div>
          )}
          {action && <div className="pt-2">{action}</div>}
        </div>
      </div>
    );
  }

  return (
    <div
      className={cn(
        "flex flex-col mb-10 sm:mb-14",
        {
          "items-start text-left max-w-3xl": align === "left",
          "items-center text-center max-w-3xl mx-auto": align === "center",
        },
        className
      )}
      {...props}
    >
      {eyebrow && (
        <div className="mb-3">
          {typeof eyebrow === "string" ? (
            <span className="font-mono text-xs uppercase tracking-widest text-muted bg-surface px-3 py-1 rounded-full border border-border/70">
              {eyebrow}
            </span>
          ) : (
            eyebrow
          )}
        </div>
      )}

      <h2 className={cn("font-display font-bold text-foreground", titleSizeClasses)}>
        {title}
      </h2>

      {description && (
        <div className="mt-4 font-sans text-base sm:text-lg text-muted leading-relaxed max-w-2xl">
          {description}
        </div>
      )}

      {action && <div className="mt-6">{action}</div>}
    </div>
  );
}
