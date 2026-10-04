"use client";

import React from "react";
import * as LucideIcons from "lucide-react";
import type { LucideIcon } from "lucide-react";

interface FeatureCardProps {
  iconName: string;
  title: string;
  text: string;
}

export function FeatureCard({ iconName, title, text }: FeatureCardProps) {
  // Safe dynamic Lucide icon resolver with Sparkles fallback
  const iconsMap = LucideIcons as unknown as Record<string, LucideIcon>;
  const IconComponent = iconsMap[iconName] || LucideIcons.Sparkles;

  return (
    <div className="bg-[#EFE6D8]/70 hover:bg-[#EFE6D8] border border-[#E2D6C3] hover:border-[#1F1B16]/20 rounded-2xl p-6 sm:p-7 transition-all duration-300 hover:shadow-sm space-y-4 flex flex-col justify-between">
      <div className="space-y-4">
        <div className="w-11 h-11 rounded-xl bg-[#FAF7F2] border border-[#E2D6C3] flex items-center justify-center text-[#FF4D2E] shadow-2xs">
          <IconComponent className="w-5 h-5" />
        </div>

        <h4 className="font-sans text-lg font-bold text-[#1F1B16] tracking-tight leading-snug">
          {title}
        </h4>
      </div>

      <p className="font-sans text-sm text-[#6E655A] leading-relaxed">
        {text}
      </p>
    </div>
  );
}

export default FeatureCard;
