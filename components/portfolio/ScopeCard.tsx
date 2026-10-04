"use client";

import type { ProjectScope } from "@/data/projects";

interface ScopeCardProps {
  scope: ProjectScope;
  techStack: string[];
  className?: string;
}

export function ScopeCard({ scope, techStack, className = "" }: ScopeCardProps) {
  return (
    <div
      className={`bg-[#EFE6D8]/80 rounded-3xl p-6 sm:p-8 border border-[#E2D6C3] space-y-5 font-mono text-xs shadow-sm ${className}`}
    >
      <div className="flex items-center justify-between border-b border-[#E2D6C3] pb-3">
        <span className="font-bold text-[#FF4D2E] uppercase tracking-wider">
          [ ARCHITECTURAL SCOPE ]
        </span>
        <span className="text-[10px] font-bold text-[#6E655A] bg-[#E8DECE] px-2 py-0.5 rounded-full">
          SPEC 2026
        </span>
      </div>

      <div className="space-y-3.5">
        <div className="flex items-start justify-between gap-4">
          <span className="text-[#6E655A] shrink-0">CLIENT / INDUSTRY</span>
          <span className="font-bold text-[#1F1B16] text-right">{scope.client}</span>
        </div>

        <div className="flex items-center justify-between gap-4">
          <span className="text-[#6E655A] shrink-0">CATEGORY</span>
          <span className="font-bold text-[#1F1B16] text-right">{scope.category}</span>
        </div>

        <div className="flex items-center justify-between gap-4">
          <span className="text-[#6E655A] shrink-0">SPRINT DURATION</span>
          <span className="font-bold text-[#1F1B16] text-right">{scope.duration}</span>
        </div>

        <div className="flex items-center justify-between gap-4">
          <span className="text-[#6E655A] shrink-0">COMMISSION YEAR</span>
          <span className="font-bold text-[#1F1B16] text-right">{scope.year}</span>
        </div>
      </div>

      <div className="pt-4 border-t border-[#E2D6C3]">
        <span className="text-[#6E655A] font-bold block mb-2 tracking-wider uppercase text-[10px]">
          DEPLOYED TECH STACK:
        </span>
        <div className="flex flex-wrap gap-1.5">
          {techStack.map((tech) => (
            <span
              key={tech}
              className="px-2.5 py-1 rounded-md bg-[#FAF7F2] border border-[#E2D6C3] font-mono text-[10px] font-semibold text-[#1F1B16] shadow-2xs"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ScopeCard;
