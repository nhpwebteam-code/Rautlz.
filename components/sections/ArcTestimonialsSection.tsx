"use client";

import { useState, useRef, useEffect, useCallback } from "react";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";

interface TestimonialTheme {
  bg: string;
  gradient: string;
  glow: string;
  accent: string;
  accentSubtle: string;
  tag: string;
}

interface TestimonialItem {
  id: string;
  quote: string;
  author: string;
  role: string;
  company: string;
  initials: string;
  theme: TestimonialTheme;
  rating?: number;
}

const SAMPLE_TESTIMONIALS: TestimonialItem[] = [
  {
    id: "sample-1",
    quote:
      "Raultz transformed our spatial digital presence. The 3D interactions feel completely native, fluid, and butter-smooth on mobile devices.",
    author: "Alex Morgan",
    role: "Founder & Creative Lead",
    company: "Studio Lumina (Sample)",
    initials: "AM",
    rating: 5,
    theme: {
      bg: "#FCE8DC",
      gradient: "radial-gradient(ellipse at 50% 30%, #FFF5EF 0%, #FADBC9 50%, #F5CEB6 100%)",
      glow: "rgba(224, 85, 45, 0.45)",
      accent: "#E04826",
      accentSubtle: "rgba(224, 72, 38, 0.25)",
      tag: "Spatial & 3D Web",
    },
  },
  {
    id: "sample-2",
    quote:
      "Working with a unified team that masters both editorial design and heavy WebGL engineering saved us months of iteration friction.",
    author: "Elena Rostova",
    role: "VP of Product",
    company: "Vanguard Spatial (Sample)",
    initials: "ER",
    rating: 5,
    theme: {
      bg: "#E2EED4",
      gradient: "radial-gradient(ellipse at 50% 30%, #F4F8EE 0%, #D8EAC4 50%, #C8E0B0 100%)",
      glow: "rgba(95, 145, 55, 0.45)",
      accent: "#4D7330",
      accentSubtle: "rgba(77, 115, 48, 0.25)",
      tag: "WebGL Engineering",
    },
  },
  {
    id: "sample-3",
    quote:
      "The aesthetic finesse and sub-second page performance helped our launch command immediate market recognition and high conversion.",
    author: "Marcus Chen",
    role: "Chief Technology Officer",
    company: "Kinetics Platform (Sample)",
    initials: "MC",
    rating: 5,
    theme: {
      bg: "#D7E6FD",
      gradient: "radial-gradient(ellipse at 50% 30%, #EFF5FF 0%, #CDE0FC 50%, #B8D3FB 100%)",
      glow: "rgba(40, 100, 240, 0.45)",
      accent: "#2563EB",
      accentSubtle: "rgba(37, 99, 235, 0.25)",
      tag: "Sub-Second Velocity",
    },
  },
  {
    id: "sample-4",
    quote:
      "Every detail from the custom typography hierarchy to the tactile micro-interactions speaks to an uncompromising obsession with pure craft.",
    author: "Sarah Jenkins",
    role: "Design Director",
    company: "Aura Creative Labs (Sample)",
    initials: "SJ",
    rating: 5,
    theme: {
      bg: "#EEDDFB",
      gradient: "radial-gradient(ellipse at 50% 30%, #FAF2FF 0%, #E6CBFA 50%, #D8B4F7 100%)",
      glow: "rgba(145, 60, 245, 0.45)",
      accent: "#7E22CE",
      accentSubtle: "rgba(126, 34, 206, 0.25)",
      tag: "Tactile Craft & UI",
    },
  },
  {
    id: "sample-5",
    quote:
      "A breath of fresh air in an era of cookie-cutter templates. Raultz engineers bespoke experiences that command genuine authority.",
    author: "David K.",
    role: "Managing Partner",
    company: "Elysium Ventures (Sample)",
    initials: "DK",
    rating: 5,
    theme: {
      bg: "#FDE9BD",
      gradient: "radial-gradient(ellipse at 50% 30%, #FFF8EA 0%, #FCE0A2 50%, #F7D07E 100%)",
      glow: "rgba(235, 140, 10, 0.45)",
      accent: "#D97706",
      accentSubtle: "rgba(217, 119, 6, 0.25)",
      tag: "Venture Authority",
    },
  },
  {
    id: "sample-6",
    quote:
      "The spatial UI cards and GSAP kinetic typography elevated our product demo to benchmark-tier engagement and retention.",
    author: "Nadia Vance",
    role: "Head of Growth",
    company: "Synapse Dynamics (Sample)",
    initials: "NV",
    rating: 5,
    theme: {
      bg: "#D0F6DF",
      gradient: "radial-gradient(ellipse at 50% 30%, #ECFBF2 0%, #BEF2D3 50%, #A4EAC0 100%)",
      glow: "rgba(15, 175, 110, 0.45)",
      accent: "#059669",
      accentSubtle: "rgba(5, 150, 105, 0.25)",
      tag: "Kinetic Motion",
    },
  },
  {
    id: "sample-7",
    quote:
      "Architectural elegance paired with relentless performance. Our clients immediately felt the difference in quality and responsiveness.",
    author: "Taro Tanaka",
    role: "Principal Architect",
    company: "Omikron Systems (Sample)",
    initials: "TT",
    rating: 5,
    theme: {
      bg: "#EDE0CE",
      gradient: "radial-gradient(ellipse at 50% 30%, #F8F2EA 0%, #E4D2BC 50%, #D4BEA3 100%)",
      glow: "rgba(150, 100, 60, 0.45)",
      accent: "#85552B",
      accentSubtle: "rgba(133, 85, 43, 0.25)",
      tag: "Systemic Rigor",
    },
  },
];

export default function ArcTestimonialsSection() {
  const [activeIndex, setActiveIndex] = useState(2);
  const [isMobile, setIsMobile] = useState(false);
  const touchStartX = useRef<number | null>(null);
  const touchEndX = useRef<number | null>(null);
  const isDragging = useRef(false);
  const total = SAMPLE_TESTIMONIALS.length;

  const currentItem = SAMPLE_TESTIMONIALS[activeIndex];
  const currentTheme = currentItem.theme;

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

  // Touch handlers for mobile swipe
  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.targetTouches[0].clientX;
    isDragging.current = true;
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!isDragging.current) return;
    touchEndX.current = e.targetTouches[0].clientX;
  };

  const handleTouchEnd = () => {
    if (!touchStartX.current || !touchEndX.current) return;
    const diff = touchStartX.current - touchEndX.current;
    const minSwipeDistance = 40;

    if (diff > minSwipeDistance) {
      next(); // Swiped left -> next
    } else if (diff < -minSwipeDistance) {
      prev(); // Swiped right -> prev
    }

    touchStartX.current = null;
    touchEndX.current = null;
    isDragging.current = false;
  };

  return (
    <section
      className="w-full py-20 lg:py-28 px-4 sm:px-8 lg:px-12 border-t border-border overflow-hidden select-none relative transition-all duration-700 ease-out"
      style={{
        background: currentTheme.gradient,
        backgroundColor: currentTheme.bg,
      }}
    >
      {/* Dynamic Ambient Background Glow Orbs that morph with active testimonial theme */}
      <div
        className="absolute -top-32 -left-32 w-[640px] h-[640px] rounded-full blur-[100px] pointer-events-none transition-all duration-1000 ease-out opacity-80"
        style={{
          backgroundColor: currentTheme.glow,
        }}
      />
      <div
        className="absolute -bottom-32 -right-32 w-[600px] h-[600px] rounded-full blur-[110px] pointer-events-none transition-all duration-1000 ease-out opacity-75"
        style={{
          backgroundColor: currentTheme.glow,
        }}
      />

      <div className="max-w-7xl mx-auto space-y-12 relative z-10">
        {/* Professional Editorial Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-4 border-b border-black/10">
          <div className="space-y-3 max-w-2xl">
            {/* Dynamic Discipline Badge */}
            <div
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border shadow-xs transition-all duration-700 backdrop-blur-sm"
              style={{
                backgroundColor: "rgba(255, 255, 255, 0.8)",
                borderColor: currentTheme.accent,
              }}
            >
              <span
                className="w-2.5 h-2.5 rounded-full transition-colors duration-700 shadow-xs animate-pulse"
                style={{ backgroundColor: currentTheme.accent }}
              />
              <span
                className="font-mono text-xs font-bold uppercase tracking-wider transition-colors duration-700"
                style={{ color: currentTheme.accent }}
              >
                CLIENT EXPERIENCES &bull; {currentTheme.tag}
              </span>
            </div>

            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#1F1B16] leading-[1.12]">
              Trusted by <span className="italic font-normal">Visionary</span> Founders
            </h2>

            <p className="font-sans text-sm sm:text-base text-[#5C5449] leading-relaxed">
              Reflections on craft, architectural velocity, and technical execution from collaborative leaders across creative and technology sectors.
            </p>
          </div>

          {/* Navigation Buttons with Dynamic Theme Glow */}
          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={prev}
              aria-label="Previous testimonial"
              className="w-11 h-11 rounded-full bg-white/90 backdrop-blur-sm border border-black/15 hover:bg-white flex items-center justify-center text-[#1F1B16] transition-all duration-300 hover:scale-105 active:scale-95 cursor-pointer focus-visible:outline-none shadow-sm"
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = currentTheme.accent;
                e.currentTarget.style.boxShadow = `0 6px 20px ${currentTheme.accentSubtle}`;
                e.currentTarget.style.color = currentTheme.accent;
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = "";
                e.currentTarget.style.boxShadow = "";
                e.currentTarget.style.color = "";
              }}
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              type="button"
              onClick={next}
              aria-label="Next testimonial"
              className="w-11 h-11 rounded-full bg-white/90 backdrop-blur-sm border border-black/15 hover:bg-white flex items-center justify-center text-[#1F1B16] transition-all duration-300 hover:scale-105 active:scale-95 cursor-pointer focus-visible:outline-none shadow-sm"
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = currentTheme.accent;
                e.currentTarget.style.boxShadow = `0 6px 20px ${currentTheme.accentSubtle}`;
                e.currentTarget.style.color = currentTheme.accent;
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = "";
                e.currentTarget.style.boxShadow = "";
                e.currentTarget.style.color = "";
              }}
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Panoramic Curved Fanned Arc Carousel Viewport */}
        <div
          className="relative w-full h-[480px] sm:h-[530px] flex items-center justify-center overflow-hidden"
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
          style={{
            maskImage:
              "linear-gradient(to right, transparent, black 8%, black 92%, transparent)",
            WebkitMaskImage:
              "linear-gradient(to right, transparent, black 8%, black 92%, transparent)",
          }}
        >
          {/* Subtle Parabolic Reference Curve Line */}
          <div className="absolute inset-x-0 bottom-12 h-36 border-b border-dashed border-black/15 rounded-[100%] pointer-events-none opacity-50" />

          {/* Panoramic Fanned Cards Row */}
          <div className="relative w-full h-full flex items-center justify-center">
            {SAMPLE_TESTIMONIALS.map((item, index) => {
              // Calculate circular offset from activeIndex
              let offset = index - activeIndex;
              if (offset > total / 2) offset -= total;
              if (offset < -total / 2) offset += total;

              const isVisible = Math.abs(offset) <= 3;
              if (!isVisible) return null;

              const isActive = offset === 0;

              // Panoramic Arc Calculation
              const cardSpacing = isMobile ? 180 : 280;
              const arcDepth = isMobile ? 16 : 28;
              const fanAngle = isMobile ? 5.5 : 6.5;

              const translateX = offset * cardSpacing;
              // Parabolic curve: center card at natural height, outer cards arch downwards
              const translateY = Math.pow(offset, 2) * arcDepth;
              const rotateZ = offset * fanAngle;
              const scale = 1 - Math.abs(offset) * (isMobile ? 0.08 : 0.06);
              const opacity = isActive
                ? 1
                : Math.max(0.4, 1 - Math.abs(offset) * 0.22);
              const zIndex = 30 - Math.abs(offset) * 4;

              return (
                <div
                  key={item.id}
                  onClick={() => setActiveIndex(index)}
                  style={{
                    transform: `translate3d(${translateX}px, ${translateY}px, 0px) rotate(${rotateZ}deg) scale(${scale})`,
                    opacity,
                    zIndex,
                    borderColor: isActive ? item.theme.accent : undefined,
                    borderWidth: isActive ? "3px" : "1px",
                    boxShadow: isActive
                      ? `0 30px 65px rgba(31,27,22,0.18), 0 0 0 6px ${item.theme.accentSubtle}, 0 10px 30px ${item.theme.glow}`
                      : undefined,
                  }}
                  className={`absolute w-[270px] sm:w-[335px] lg:w-[375px] aspect-[4/5] rounded-[24px] sm:rounded-[28px] p-6 sm:p-7 flex flex-col justify-between transition-all duration-600 ease-out cursor-pointer select-none ${
                    isActive
                      ? "bg-white/95 backdrop-blur-md scale-100"
                      : "bg-white/70 backdrop-blur-sm border border-black/10 shadow-[0_8px_25px_rgba(31,27,22,0.06)] hover:border-black/25"
                  }`}
                >
                  {/* Card Header with Dynamic Category Tag & Quote Icon */}
                  <div className="flex items-center justify-between border-b border-black/10 pb-3">
                    <span
                      className="inline-flex items-center gap-1.5 font-mono text-[11px] font-bold px-3 py-1 rounded-full uppercase tracking-wider transition-all duration-500 shadow-xs"
                      style={{
                        backgroundColor: isActive ? item.theme.accent : "rgba(0,0,0,0.06)",
                        color: isActive ? "#FFFFFF" : "#5C5449",
                      }}
                    >
                      {item.theme.tag}
                    </span>

                    <div
                      className="w-8 h-8 rounded-full flex items-center justify-center transition-all duration-500 shadow-xs"
                      style={{
                        backgroundColor: isActive ? item.theme.accentSubtle : "rgba(0,0,0,0.04)",
                        color: isActive ? item.theme.accent : "#8F857A",
                      }}
                    >
                      <Quote className="w-4 h-4" />
                    </div>
                  </div>

                  {/* Quote Body */}
                  <div className="my-auto py-2">
                    <p className="font-display text-sm sm:text-base lg:text-lg font-bold tracking-tight text-[#1F1B16] leading-snug line-clamp-4">
                      &ldquo;{item.quote}&rdquo;
                    </p>
                  </div>

                  {/* Author Meta Footer with Theme Initials Avatar */}
                  <div className="pt-4 border-t border-black/10 flex items-center gap-3">
                    <div
                      className="w-10 h-10 rounded-full flex items-center justify-center font-mono text-xs font-bold text-white shrink-0 shadow-sm transition-colors duration-500"
                      style={{
                        backgroundColor: item.theme.accent,
                      }}
                    >
                      {item.initials}
                    </div>

                    <div className="flex flex-col min-w-0">
                      <span className="font-sans text-xs sm:text-sm font-semibold text-[#1F1B16] truncate">
                        {item.author}
                      </span>
                      <span className="font-mono text-[10px] sm:text-[11px] text-[#5C5449] truncate">
                        {item.role} &bull; {item.company}
                      </span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Dynamic Carousel Indicator Dots */}
        <div className="flex items-center justify-center gap-2 pt-2">
          {SAMPLE_TESTIMONIALS.map((item, idx) => {
            const isCurrent = idx === activeIndex;
            return (
              <button
                key={item.id}
                type="button"
                onClick={() => setActiveIndex(idx)}
                aria-label={`Go to slide ${idx + 1}`}
                className="h-2.5 rounded-full transition-all duration-500 cursor-pointer"
                style={{
                  width: isCurrent ? "38px" : "8px",
                  backgroundColor: isCurrent ? currentTheme.accent : "rgba(0,0,0,0.2)",
                }}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
}
