"use client";

import type { ProjectTimelineItem } from "@/data/projects";

interface TimelineProps {
  items: ProjectTimelineItem[];
}

export function Timeline({ items }: TimelineProps) {
  return (
    <div className="w-full">
      {/* Desktop Horizontal View (md and above) */}
      <div className="hidden md:grid md:grid-cols-3 gap-6 relative">
        {/* Connecting Line Across Columns */}
        <div className="absolute top-7 left-[16%] right-[16%] h-[2px] bg-[#E2D6C3] z-0" />

        {items.map((item, idx) => (
          <div
            key={item.day}
            className="relative z-10 flex flex-col items-center text-center space-y-4"
          >
            {/* Step Circle Badge */}
            <div className="w-14 h-14 rounded-full bg-[#FAF7F2] border-2 border-[#1F1B16] flex items-center justify-center font-mono text-xs font-bold text-[#1F1B16] shadow-sm">
              0{idx + 1}
            </div>

            {/* Content Card */}
            <div className="bg-[#EFE6D8]/80 border border-[#E2D6C3] rounded-2xl p-6 w-full text-left space-y-2.5 hover:border-[#1F1B16]/20 transition-colors">
              <span className="font-mono text-xs font-bold text-[#FF4D2E] tracking-wider uppercase block">
                [ {item.day.toUpperCase()} ]
              </span>
              <h4 className="font-sans text-lg font-bold text-[#1F1B16] leading-snug">
                {item.title}
              </h4>
              <p className="font-sans text-xs sm:text-sm text-[#6E655A] leading-relaxed">
                {item.text}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Mobile Vertical View (sm and below) */}
      <div className="md:hidden relative space-y-6 pl-8">
        {/* Vertical Connecting Line */}
        <div className="absolute top-4 bottom-4 left-3 w-[2px] bg-[#E2D6C3]" />

        {items.map((item, idx) => (
          <div key={item.day} className="relative space-y-2">
            {/* Step Dot */}
            <div className="absolute -left-8 top-1.5 w-6 h-6 rounded-full bg-[#FAF7F2] border-2 border-[#1F1B16] flex items-center justify-center font-mono text-[10px] font-bold text-[#1F1B16]">
              {idx + 1}
            </div>

            <div className="bg-[#EFE6D8]/80 border border-[#E2D6C3] rounded-2xl p-5 space-y-2 shadow-2xs">
              <span className="font-mono text-xs font-bold text-[#FF4D2E] tracking-wider uppercase block">
                [ {item.day.toUpperCase()} ]
              </span>
              <h4 className="font-sans text-base font-bold text-[#1F1B16] leading-snug">
                {item.title}
              </h4>
              <p className="font-sans text-xs text-[#6E655A] leading-relaxed">
                {item.text}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Timeline;
