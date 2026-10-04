"use client";

import Image from "next/image";
import type { ProjectGalleryItem } from "@/data/projects";

interface GalleryBlockProps {
  item: ProjectGalleryItem;
  index: number;
}

export function GalleryBlock({ item, index }: GalleryBlockProps) {
  const isEven = index % 2 === 0;

  return (
    <div
      className={`grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center bg-[#EFE6D8]/50 border border-[#E2D6C3] rounded-3xl p-6 sm:p-8 lg:p-10`}
    >
      {/* Visual Block (8 cols on desktop) */}
      <div
        className={`lg:col-span-7 ${
          isEven ? "lg:order-1" : "lg:order-2"
        }`}
      >
        <div className="relative w-full aspect-[16/10] rounded-2xl overflow-hidden bg-[#E8DECE] border border-[#E2D6C3] shadow-sm group">
          <Image
            src={item.image}
            alt={item.title}
            fill
            sizes="(max-width: 1024px) 100vw, 60vw"
            className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-60 pointer-events-none" />

          {/* Bottom Badge Tag */}
          <div className="absolute bottom-3 left-3 z-10">
            <span className="px-2.5 py-1 rounded-full bg-black/60 backdrop-blur-md font-mono text-[10px] font-bold text-white border border-white/10 uppercase tracking-wider">
              {item.tag}
            </span>
          </div>
        </div>
      </div>

      {/* Narrative & Specification Column (5 cols on desktop) */}
      <div
        className={`lg:col-span-5 space-y-4 ${
          isEven ? "lg:order-2" : "lg:order-1"
        }`}
      >
        <div className="flex items-center gap-2">
          <span className="font-mono text-xs font-bold text-[#FF4D2E] tracking-wider uppercase">
            [ SCREEN 0{index + 1} // {item.tag.toUpperCase()} ]
          </span>
        </div>

        <h3 className="font-sans text-2xl sm:text-3xl font-bold tracking-tight text-[#1F1B16] leading-snug">
          {item.title}
        </h3>

        <div className="pt-2 border-t border-[#E2D6C3]">
          <p className="font-sans text-sm sm:text-base text-[#6E655A] leading-relaxed">
            {item.caption}
          </p>
        </div>

        <div className="pt-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FAF7F2] border border-[#E2D6C3] font-mono text-[11px] font-semibold text-[#1F1B16]">
            <span className="w-1.5 h-1.5 rounded-full bg-[#6B7A4E] inline-block" />
            <span>RESPONSIVE TESTED // ACCESSIBLE</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default GalleryBlock;
