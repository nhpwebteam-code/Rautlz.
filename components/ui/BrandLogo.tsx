"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";

export interface BrandLogoProps {
  variant?: "full" | "mark" | "stacked" | "wordmark";
  theme?: "dark" | "light" | "auto" | "red";
  size?: "xs" | "sm" | "md" | "lg" | "xl" | "2xl" | "custom";
  className?: string;
  iconClassName?: string;
  textClassName?: string;
  withGlow?: boolean;
  href?: string;
  onClick?: () => void;
}

const SIZE_PRESETS = {
  xs: { height: 18, width: 25, textSize: "text-sm", gap: "gap-2" },
  sm: { height: 24, width: 33, textSize: "text-base", gap: "gap-2.5" },
  md: { height: 32, width: 44, textSize: "text-xl", gap: "gap-3" },
  lg: { height: 40, width: 56, textSize: "text-2xl", gap: "gap-3.5" },
  xl: { height: 52, width: 72, textSize: "text-3xl", gap: "gap-4" },
  "2xl": { height: 76, width: 106, textSize: "text-4xl sm:text-5xl", gap: "gap-5" },
  custom: { height: 32, width: 44, textSize: "text-xl", gap: "gap-3" },
};

/**
 * Lossless High-Fidelity Monogram Icon directly using the uploaded logo asset
 * Preserves 100% source clarity with subpixel anti-aliasing.
 */
export function BrandMark({
  theme = "light",
  size = "md",
  className = "",
  width,
  height,
  withGlow = false,
}: {
  theme?: "dark" | "light" | "auto" | "red";
  size?: "xs" | "sm" | "md" | "lg" | "xl" | "2xl" | "custom";
  className?: string;
  width?: number;
  height?: number;
  withGlow?: boolean;
}) {
  const preset = SIZE_PRESETS[size] || SIZE_PRESETS.md;
  const renderHeight = height || preset.height;
  const renderWidth = width || Math.round(renderHeight * 1.395);

  // High-contrast black R + vibrant red Z brand mark
  const imageSrc = "/brand/raultz-logo-tight-light.png";

  return (
    <div
      className={`relative inline-flex items-center justify-center flex-shrink-0 select-none ${className}`}
      style={{
        width: renderWidth,
        height: renderHeight,
      }}
    >
      {/* Optional Soft Ambient Red Glow */}
      {withGlow && (
        <div
          className="absolute inset-0 bg-[#FF4D2E]/25 blur-md rounded-full pointer-events-none -z-10 transform scale-125"
          aria-hidden="true"
        />
      )}

      {/* High-Resolution Uncompressed Logo Image */}
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={imageSrc}
        alt="Raultz - Website and Mobile App Development Studio in Hyderabad, India"
        width={renderWidth}
        height={renderHeight}
        loading="eager"
        decoding="async"
        className="w-full h-full object-contain pointer-events-none"
        style={{
          imageRendering: "-webkit-optimize-contrast",
          filter: withGlow ? "drop-shadow(0 2px 8px rgba(255, 77, 46, 0.4))" : undefined,
        }}
      />
    </div>
  );
}

/**
 * Complete Brand Logo Lockup (High-Fidelity Logo + Wordmark)
 */
export function BrandLogo({
  variant = "full",
  theme = "light",
  size = "md",
  className = "",
  iconClassName = "",
  textClassName = "",
  withGlow = false,
  href = "/",
  onClick,
}: BrandLogoProps) {
  const preset = SIZE_PRESETS[size] || SIZE_PRESETS.md;

  const isDark = theme === "dark";
  const textColorClass = isDark
    ? "text-white"
    : "text-[#161616]";

  const content = (
    <div
      className={`inline-flex items-center ${
        variant === "stacked" ? "flex-col text-center" : "flex-row"
      } ${preset.gap} select-none group cursor-pointer ${className}`}
      onClick={onClick}
    >
      {/* High-Fidelity Logo */}
      {variant !== "wordmark" && (
        <BrandMark
          theme={theme}
          size={size}
          className={`group-hover:scale-105 transition-transform duration-300 ${iconClassName}`}
          withGlow={withGlow}
        />
      )}

      {/* Typography Wordmark */}
      {variant !== "mark" && (
        <span
          className={`font-sans font-extrabold tracking-tight ${preset.textSize} ${textColorClass} transition-colors group-hover:text-foreground ${textClassName}`}
        >
          <span>Rault</span>
          <span className="text-[#FF4D2E] inline-block">z</span>
          <span className="text-[#FF4D2E] inline-block font-black group-hover:scale-125 transition-transform duration-300">
            .
          </span>
        </span>
      )}
    </div>
  );

  if (href) {
    return (
      <Link
        href={href}
        className="inline-flex items-center focus:outline-none focus-visible:ring-2 focus-visible:ring-terracotta rounded-lg"
      >
        {content}
      </Link>
    );
  }

  return content;
}

export default BrandLogo;
