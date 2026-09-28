import { SectionHeading } from "@/components/ui/section-heading";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Compass, Users, Sparkles, Cpu } from "lucide-react";

const DIFFERENTIATORS = [
  {
    index: "01",
    title: "The Craft & Detail Obsession",
    tagline: "ZERO COOKIE-CUTTER TEMPLATES",
    description:
      "We obsess over the invisible margins — from bespoke typographic kerning and tactile spring interactions to custom WebGL lighting. Every digital artifact we deploy is unique to the brand it represents.",
    icon: Compass,
    accent: "terracotta" as const,
  },
  {
    index: "02",
    title: "The Three-Minds Model",
    tagline: "UNIFIED CREATIVE ARCHITECTURE",
    description:
      "Frontend engineering, spatial 3D design, and editorial creative direction collaborate from Day 1. No layered agency bureaucracy, no handoff translation loss — just pure direct execution.",
    icon: Users,
    accent: "olive" as const,
  },
  {
    index: "03",
    title: "Design + Technology Combined",
    tagline: "CODE AS A CREATIVE MEDIUM",
    description:
      "We do not treat code as an afterthought to Figma files. By pushing Next.js App Router, Three.js shaders, and GSAP scroll choreography together, we build experiences competitors cannot easily replicate.",
    icon: Sparkles,
    accent: "terracotta" as const,
  },
  {
    index: "04",
    title: "Zero-Bloat Performance",
    tagline: "SUB-SECOND CORE WEB VITALS",
    description:
      "Visual extravagance should never compromise user experience. We rigorously isolate client bundles, cap device pixel ratios, and deliver lightweight production builds that rank high and convert fast.",
    icon: Cpu,
    accent: "olive" as const,
  },
];

export default function WhyRaultzSection() {
  return (
    <section className="w-full py-20 lg:py-28 px-4 sm:px-8 lg:px-12 bg-surface/40 border-t border-border">
      <div className="max-w-7xl mx-auto space-y-16">
        {/* Section Header */}
        <SectionHeading
          align="split"
          eyebrow="// 03 PHILOSOPHY & CRAFT"
          title={
            <>
              Why Industry Leaders <span className="italic font-normal">Choose Raultz</span>
            </>
          }
          description="We founded Raultz on a simple conviction: the modern web deserves higher standards of aesthetic character, technical rigor, and collaboration transparency."
        />

        {/* 4 Differentiator Cards Grid (Asymmetric 12-Column Layout) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-6 lg:gap-8">
          {DIFFERENTIATORS.map((diff, i) => {
            const Icon = diff.icon;
            // Asymmetric col span: alternate spans 7 and 5 for dynamic editorial rhythm
            const colSpan = i === 0 || i === 3 ? "lg:col-span-7" : "lg:col-span-5";

            return (
              <Card
                key={diff.index}
                variant={diff.accent === "terracotta" ? "accent-terracotta" : "accent-olive"}
                padding="lg"
                className={`${colSpan} flex flex-col justify-between hover:shadow-lg transition-shadow`}
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center gap-2">
                      <span className="font-mono text-xs font-bold text-muted">
                        [{diff.index} //]
                      </span>
                      <Badge
                        variant={diff.accent === "terracotta" ? "terracotta" : "olive"}
                      >
                        {diff.tagline}
                      </Badge>
                    </div>
                    <div className="w-10 h-10 rounded-xl bg-surface-sunken flex items-center justify-center text-foreground border border-border/80">
                      <Icon className="w-5 h-5" />
                    </div>
                  </div>

                  <h3 className="font-display text-2xl sm:text-3xl font-bold tracking-tight text-foreground mb-3">
                    {diff.title}
                  </h3>

                  <p className="font-sans text-muted leading-relaxed text-base">
                    {diff.description}
                  </p>
                </div>

                <div className="pt-6 mt-6 border-t border-border/60 flex items-center justify-between font-mono text-xs text-muted">
                  <span>RAULTZ PILLAR {diff.index}</span>
                  <span className="text-foreground font-semibold">VERIFIED ARCHITECTURE</span>
                </div>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
