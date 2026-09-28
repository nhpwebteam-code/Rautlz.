import * as React from "react";
import { cn } from "@/lib/utils";

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?:
    | "primary"
    | "secondary"
    | "terracotta"
    | "olive"
    | "outline"
    | "ghost"
    | "link";
  size?: "sm" | "md" | "lg" | "xl" | "icon";
  iconLeft?: React.ReactNode;
  iconRight?: React.ReactNode;
  fullWidth?: boolean;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      variant = "primary",
      size = "md",
      iconLeft,
      iconRight,
      fullWidth = false,
      children,
      disabled,
      ...props
    },
    ref
  ) => {
    return (
      <button
        ref={ref}
        disabled={disabled}
        className={cn(
          "group relative inline-flex items-center justify-center gap-2 font-sans font-medium transition-all duration-200 ease-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-terracotta focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 select-none cursor-pointer",
          // Variants
          {
            // Primary (Warm Near-Black with Cream text)
            "bg-[#1F1B16] text-[#F6F0E4] border border-[#1F1B16] hover:bg-[#2F2922] hover:shadow-[0_4px_14px_rgba(31,27,22,0.15)] active:scale-[0.98]":
              variant === "primary",

            // Terracotta / Rust Accent
            "bg-terracotta text-[#F6F0E4] border border-terracotta hover:bg-[#AD5930] hover:shadow-[0_4px_14px_rgba(193,103,59,0.25)] active:scale-[0.98]":
              variant === "terracotta",

            // Olive Accent
            "bg-olive text-[#F6F0E4] border border-olive hover:bg-[#5D6B43] hover:shadow-[0_4px_14px_rgba(107,122,78,0.25)] active:scale-[0.98]":
              variant === "olive",

            // Secondary (Warm Surface)
            "bg-surface text-foreground border border-border hover:bg-surface-hover hover:border-border-dark/30 active:scale-[0.98]":
              variant === "secondary",

            // Outline (Editorial contrast border)
            "bg-transparent text-foreground border border-foreground/30 hover:border-foreground hover:bg-surface active:scale-[0.98]":
              variant === "outline",

            // Ghost
            "bg-transparent text-foreground hover:bg-surface hover:text-foreground active:scale-[0.98]":
              variant === "ghost",

            // Link
            "bg-transparent text-terracotta underline-offset-4 hover:underline p-0 h-auto font-medium":
              variant === "link",
          },
          // Sizes
          {
            "h-8 px-3 text-xs rounded-md": size === "sm",
            "h-10 px-5 text-sm rounded-md tracking-tight": size === "md",
            "h-12 px-7 text-base rounded-lg tracking-tight": size === "lg",
            "h-14 px-9 text-lg rounded-lg tracking-tight": size === "xl",
            "h-10 w-10 p-0 rounded-md": size === "icon",
          },
          fullWidth && "w-full",
          className
        )}
        {...props}
      >
        {iconLeft && (
          <span className="inline-flex shrink-0 items-center justify-center transition-transform duration-200 group-hover:-translate-x-0.5">
            {iconLeft}
          </span>
        )}
        <span>{children}</span>
        {iconRight && (
          <span className="inline-flex shrink-0 items-center justify-center transition-transform duration-200 group-hover:translate-x-0.5">
            {iconRight}
          </span>
        )}
      </button>
    );
  }
);

Button.displayName = "Button";
