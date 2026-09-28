"use client";

import { useState, useRef, useEffect, useCallback } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import {
  Star,
  Sparkles,
  Clock,
  RotateCcw,
  Check,
  ArrowRight,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import { PRICING_PACKAGES, PricingPackage } from "@/lib/content/pricing";

// High-fidelity cinematic poster artwork & metadata for each of the 8 packages
const CINEMATIC_PACKAGE_DATA = [
  {
    id: "pkg-01",
    tag: "STARTER",
    rating: "4.8",
    accentColor: "#E50914",
    posterImage: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=800&auto=format&fit=crop",
    gradient: "from-[#3A0D0D] via-[#1F0707] to-[#080202]",
    subtext: "1 Page · 3 Days Turnaround",
  },
  {
    id: "pkg-02",
    tag: "BASIC",
    rating: "4.9",
    accentColor: "#E50914",
    posterImage: "https://images.unsplash.com/photo-1634017839464-5c339ebe3cb4?q=80&w=800&auto=format&fit=crop",
    gradient: "from-[#420E0E] via-[#240808] to-[#080202]",
    subtext: "3–4 Pages · 5 Days Turnaround",
  },
  {
    id: "pkg-03",
    tag: "STANDARD",
    rating: "4.9",
    accentColor: "#E50914",
    posterImage: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=800&auto=format&fit=crop",
    gradient: "from-[#4D1111] via-[#2A0A0A] to-[#080202]",
    subtext: "5–6 Pages · 7 Days Turnaround",
  },
  {
    id: "pkg-04",
    tag: "STANDARD+",
    rating: "5.0",
    accentColor: "#E50914",
    posterImage: "https://images.unsplash.com/photo-1633167606207-d840b5070fc2?q=80&w=800&auto=format&fit=crop",
    gradient: "from-[#571414] via-[#300B0B] to-[#080202]",
    subtext: "Custom GSAP · 10 Days Turnaround",
  },
  {
    id: "pkg-05",
    tag: "PREMIUM",
    rating: "5.0 ★ Most Popular",
    accentColor: "#E50914",
    posterImage: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=800&auto=format&fit=crop",
    gradient: "from-[#661818] via-[#380C0C] to-[#080202]",
    subtext: "Framer Motion & CMS · 14 Days",
  },
  {
    id: "pkg-06",
    tag: "PREMIUM+",
    rating: "4.9",
    accentColor: "#E50914",
    posterImage: "https://images.unsplash.com/photo-1634017839464-5c339ebe3cb4?q=80&w=800&auto=format&fit=crop",
    gradient: "from-[#521313] via-[#2C0A0A] to-[#080202]",
    subtext: "Storytelling & Admin · 18 Days",
  },
  {
    id: "pkg-07",
    tag: "ELITE",
    rating: "5.0 ★ 3D WebGL",
    accentColor: "#E50914",
    posterImage: "https://images.unsplash.com/photo-1633167606207-d840b5070fc2?q=80&w=800&auto=format&fit=crop",
    gradient: "from-[#5E1616] via-[#330B0B] to-[#080202]",
    subtext: "R3F 3D Scenes · 21 Days",
  },
  {
    id: "pkg-08",
    tag: "SIGNATURE",
    rating: "5.0 ★ Flagship",
    accentColor: "#E50914",
    posterImage: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=800&auto=format&fit=crop",
    gradient: "from-[#701A1A] via-[#3D0D0D] to-[#080202]",
    subtext: "Cinematic 3D · 30 Days · Full Support",
  },
];

export default function CoverflowPackagesCarousel() {
  const [activeIndex, setActiveIndex] = useState(4); // Default to PKG 05 (Premium)
  const [isMobile, setIsMobile] = useState(false);
  const isDragging = useRef(false);
  const dragStartX = useRef<number | null>(null);
  const dragDistance = useRef<number>(0);

  const total = PRICING_PACKAGES.length;

  // Responsive check
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const next = useCallback(() => {
    setActiveIndex((prev) => (prev + 1) % total);
  }, [total]);

  const prev = useCallback(() => {
    setActiveIndex((prev) => (prev - 1 + total) % total);
  }, [total]);

  // Guaranteed Continuous Auto-Sliding Loop (Advances every 2.4s, only pauses while user is actively dragging)
  useEffect(() => {
    const interval = setInterval(() => {
      if (!isDragging.current) {
        next();
      }
    }, 2400);

    return () => clearInterval(interval);
  }, [next]);

  // Keyboard navigation (Arrow keys)
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") {
        prev();
      } else if (e.key === "ArrowRight") {
        next();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [next, prev]);

  // Drag / Touch gestures for super smooth and fast sideways movement
  const handlePointerDown = (e: React.PointerEvent) => {
    isDragging.current = true;
    dragStartX.current = e.clientX;
    dragDistance.current = 0;
  };

  const handlePointerMove = (e: React.PointerEvent) => {
    if (isDragging.current && dragStartX.current !== null) {
      dragDistance.current = e.clientX - dragStartX.current;
    }
  };

  const handlePointerUp = () => {
    if (isDragging.current && dragStartX.current !== null) {
      const threshold = 30; // responsive lower drag threshold
      if (dragDistance.current > threshold) {
        prev();
      } else if (dragDistance.current < -threshold) {
        next();
      }
    }
    dragStartX.current = null;
    dragDistance.current = 0;
    // Resume auto-sliding after brief release pause
    setTimeout(() => {
      isDragging.current = false;
    }, 800);
  };

  const handlePointerCancel = () => {
    dragStartX.current = null;
    dragDistance.current = 0;
    isDragging.current = false;
  };

  const activePackage = PRICING_PACKAGES[activeIndex];

  return (
    <section className="w-full bg-[#050505] text-white py-20 sm:py-28 relative overflow-hidden select-none">
      {/* 1. Lush Red Radial Spotlight Glow Centered Behind Carousel */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] sm:w-[950px] h-[450px] sm:h-[600px] rounded-full pointer-events-none opacity-55 blur-[130px] transition-all duration-500"
        style={{
          background:
            "radial-gradient(circle, #E50914 0%, #9B111E 35%, rgba(5,5,5,0) 75%)",
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-8 space-y-10 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-2">
          <div className="space-y-3 max-w-xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#E50914]/15 border border-[#E50914]/40 text-[#FF4D4D] text-xs font-mono font-bold tracking-wider uppercase">
              <Sparkles className="w-3.5 h-3.5" />
              <span>3D COVERFLOW SELECTION</span>
            </div>

            <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-white font-display">
              Explore Our <span className="text-[#FF4D4D]">Packages</span>
            </h2>

            <p className="text-sm sm:text-base text-white/65 font-sans leading-relaxed">
              Drag or swipe sideways to navigate &bull; Click any poster to center
            </p>
          </div>

          {/* Navigation Controls */}
          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={prev}
              aria-label="Previous package"
              className="w-11 h-11 rounded-full bg-white/10 border border-white/15 hover:bg-white/20 flex items-center justify-center text-white transition-all active:scale-95 cursor-pointer shadow-lg hover:border-[#E50914]"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              type="button"
              onClick={next}
              aria-label="Next package"
              className="w-11 h-11 rounded-full bg-white/10 border border-white/15 hover:bg-white/20 flex items-center justify-center text-white transition-all active:scale-95 cursor-pointer shadow-lg hover:border-[#E50914]"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* 2. 3D Coverflow Interactive Carousel Stage with Continuous Auto-Slide */}
        <div
          className="relative w-full h-[520px] sm:h-[580px] flex items-center justify-center overflow-hidden cursor-grab active:cursor-grabbing"
          onPointerDown={handlePointerDown}
          onPointerMove={handlePointerMove}
          onPointerUp={handlePointerUp}
          onPointerCancel={handlePointerCancel}
          style={{
            perspective: "1200px",
            maskImage:
              "linear-gradient(to right, transparent, black 8%, black 92%, transparent)",
            WebkitMaskImage:
              "linear-gradient(to right, transparent, black 8%, black 92%, transparent)",
          }}
        >
          {/* Subtle Ambient Stage Horizon Line */}
          <div className="absolute inset-x-0 bottom-16 h-28 border-b border-dashed border-white/10 rounded-[100%] pointer-events-none opacity-30" />

          {/* Coverflow Cards Positioning */}
          <div className="relative w-full h-full flex items-center justify-center">
            {PRICING_PACKAGES.map((pkg, index) => {
              const cinematic = CINEMATIC_PACKAGE_DATA[index];

              // Calculate relative circular offset from activeIndex
              let offset = index - activeIndex;
              if (offset > total / 2) offset -= total;
              if (offset < -total / 2) offset += total;

              const isVisible = Math.abs(offset) <= 3;
              if (!isVisible) return null;

              const isActive = offset === 0;

              // Coverflow 3D Geometry
              const spacingX = isMobile ? 130 : 220;
              const translateX = offset * spacingX;
              const translateZ = isActive ? 120 : -Math.abs(offset) * 80;
              const translateY = isActive ? -18 : Math.abs(offset) * 6;
              const rotateY = offset === 0 ? 0 : offset < 0 ? 28 : -28;
              const scale = isActive ? (isMobile ? 1.05 : 1.18) : Math.max(0.68, 1 - Math.abs(offset) * 0.16);
              const opacity = isActive ? 1.0 : Math.max(0.35, 1 - Math.abs(offset) * 0.28);
              const zIndex = 40 - Math.abs(offset) * 8;

              return (
                <motion.div
                  key={pkg.id}
                  onClick={() => setActiveIndex(index)}
                  initial={false}
                  animate={{
                    x: translateX,
                    y: translateY,
                    z: translateZ,
                    rotateY: rotateY,
                    scale: scale,
                    opacity: opacity,
                  }}
                  transition={{
                    type: "spring",
                    stiffness: 420,
                    damping: 26,
                    mass: 0.7,
                  }}
                  style={{
                    zIndex,
                    transformStyle: "preserve-3d",
                  }}
                  className={`absolute w-[220px] sm:w-[270px] aspect-[2/3] rounded-[20px] sm:rounded-[24px] overflow-hidden select-none cursor-pointer ${
                    isActive
                      ? "ring-2 ring-[#E50914] shadow-[0_24px_60px_rgba(229,9,20,0.5)]"
                      : "shadow-[0_12px_35px_rgba(0,0,0,0.9)] border border-white/10 hover:border-white/30"
                  }`}
                >
                  {/* Poster Visual Container */}
                  <div
                    className={`w-full h-full bg-gradient-to-b ${cinematic.gradient} relative flex flex-col justify-between p-4 sm:p-5`}
                  >
                    {/* Background Artwork Layer */}
                    <div
                      className="absolute inset-0 bg-cover bg-center opacity-35 mix-blend-luminosity"
                      style={{
                        backgroundImage: `url(${cinematic.posterImage})`,
                      }}
                    />

                    {/* Rich Dark Gradient Layer for Pristine Legibility */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-black/20 pointer-events-none" />

                    {/* Top Row: Brand Chip + Pill Rating */}
                    <div className="relative z-10 flex items-center justify-between gap-2">
                      {/* Left Circular / Pill Chip */}
                      <div className="w-8 h-8 rounded-full bg-[#E50914] flex items-center justify-center font-mono text-[10px] font-extrabold text-white shadow-md">
                        {pkg.code.replace("PKG ", "P")}
                      </div>

                      {/* Right Pill Stat / Price */}
                      <div
                        className={`px-3 py-1 rounded-full text-[10px] sm:text-xs font-bold backdrop-blur-md flex items-center gap-1 shadow-sm ${
                          pkg.isPopular
                            ? "bg-[#E50914] text-white"
                            : "bg-black/70 border border-white/20 text-white"
                        }`}
                      >
                        {pkg.isPopular ? (
                          <>
                            <Star className="w-3 h-3 fill-current" />
                            <span>Popular</span>
                          </>
                        ) : (
                          <span>₹{pkg.priceINR.toLocaleString("en-IN")}</span>
                        )}
                      </div>
                    </div>

                    {/* Bottom Metadata & Typography */}
                    <div className="relative z-10 space-y-1.5">
                      <span className="font-mono text-[10px] font-bold text-[#FF4D4D] tracking-widest uppercase block">
                        {cinematic.tag}
                      </span>

                      {/* Package Name */}
                      <h3 className="font-display text-2xl sm:text-3xl font-bold text-white tracking-tight leading-tight">
                        {pkg.name}
                      </h3>

                      {/* Subtitle Scope (e.g. '14 Days · Custom Framer & CMS') */}
                      <p className="font-mono text-[11px] sm:text-xs text-white/70">
                        {cinematic.subtext}
                      </p>

                      {/* Deliverables snippet */}
                      <p className="font-sans text-[10px] sm:text-[11px] text-white/55 line-clamp-2 leading-relaxed pt-0.5">
                        {pkg.scope}
                      </p>

                      {/* Action CTA Link */}
                      <div className="pt-2 flex items-center gap-1.5 text-xs font-mono font-bold text-[#FF4D4D] group-hover:translate-x-1 transition-transform">
                        <span>Select Tier</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* 3. Indicator Track & Direct Package Selector Pills */}
        <div className="flex flex-col items-center gap-4 pt-2">
          {/* Indicator Dots */}
          <div className="flex items-center gap-2">
            {PRICING_PACKAGES.map((pkg, idx) => (
              <button
                key={pkg.id}
                type="button"
                onClick={() => setActiveIndex(idx)}
                aria-label={`Select ${pkg.name}`}
                className={`h-2 rounded-full transition-all duration-300 cursor-pointer ${
                  idx === activeIndex
                    ? "w-8 bg-[#E50914]"
                    : "w-2 bg-white/20 hover:bg-white/40"
                }`}
              />
            ))}
          </div>

          {/* Quick Direct Buttons */}
          <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
            <Link href={`/start-a-project?package=${activePackage.id}`}>
              <button
                type="button"
                className="bg-[#E50914] hover:bg-[#C20710] text-white font-bold text-sm px-8 py-3.5 rounded-full shadow-[0_12px_35px_rgba(229,9,20,0.45)] transition-all hover:scale-105 active:scale-95 cursor-pointer flex items-center gap-2"
              >
                <span>Proceed with {activePackage.name} (₹{activePackage.priceINR.toLocaleString("en-IN")})</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </Link>

            <Link href="/pricing">
              <button
                type="button"
                className="bg-white/10 hover:bg-white/20 text-white font-semibold text-sm px-6 py-3.5 rounded-full border border-white/15 transition-all hover:scale-105 active:scale-95 cursor-pointer"
              >
                View Full Spec Matrix
              </button>
            </Link>
          </div>
        </div>

      </div>
    </section>
  );
}
