import type { Metadata } from "next";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { SectionHeading } from "@/components/ui/section-heading";
import { ArrowRight, Sparkles, Check, ChevronRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Design Tokens & Primitives Guide",
  description: "Living style guide and verification for Raultz design tokens and UI primitives.",
};

const COLOR_TOKENS = [
  {
    name: "Background (Base)",
    hex: "#F6F0E4",
    role: "Warm Cream Canvas",
    variable: "--color-bg-base",
    token: "bg-background",
    bgClass: "bg-[#F6F0E4]",
    textClass: "text-[#1F1B16]",
    contrast: "Base",
    wcag: "Canvas",
  },
  {
    name: "Surface / Card",
    hex: "#EFE6D8",
    role: "Cards, Modals & Insets",
    variable: "--color-surface",
    token: "bg-surface",
    bgClass: "bg-[#EFE6D8]",
    textClass: "text-[#1F1B16]",
    contrast: "1.1:1 vs base",
    wcag: "Structural",
  },
  {
    name: "Primary Text",
    hex: "#1F1B16",
    role: "Warm Near-Black Headlines & Body",
    variable: "--color-text-primary",
    token: "text-foreground",
    bgClass: "bg-[#1F1B16]",
    textClass: "text-[#F6F0E4]",
    contrast: "14.5:1",
    wcag: "AAA Pass",
  },
  {
    name: "Muted / Secondary",
    hex: "#6E655A",
    role: "Captions, Subtext, Neutral Accents",
    variable: "--color-text-muted",
    token: "text-muted",
    bgClass: "bg-[#6E655A]",
    textClass: "text-[#F6F0E4]",
    contrast: "4.85:1",
    wcag: "AA Pass",
  },
  {
    name: "Accent — Terracotta",
    hex: "#C1673B",
    role: "High-Energy CTA, Badges & Highlights",
    variable: "--color-accent-terracotta",
    token: "bg-terracotta",
    bgClass: "bg-[#C1673B]",
    textClass: "text-[#F6F0E4]",
    contrast: "4.0:1 (Large/Bold)",
    wcag: "AA Large",
  },
  {
    name: "Accent — Olive",
    hex: "#6B7A4E",
    role: "Natural Accents, Badges & Top Borders",
    variable: "--color-accent-olive",
    token: "bg-olive",
    bgClass: "bg-[#6B7A4E]",
    textClass: "text-[#F6F0E4]",
    contrast: "3.75:1",
    wcag: "Accent / Tag",
  },
  {
    name: "Accent — Muted Brown",
    hex: "#8A6F52",
    role: "Warm Neutral Flourishes & Borders",
    variable: "--color-accent-brown",
    token: "bg-brown",
    bgClass: "bg-[#8A6F52]",
    textClass: "text-[#F6F0E4]",
    contrast: "3.5:1",
    wcag: "Decorative",
  },
  {
    name: "Border / Subtle Divider",
    hex: "#E2D6C3",
    role: "Subtle Warm Separation",
    variable: "--color-border",
    token: "border-border",
    bgClass: "bg-[#E2D6C3]",
    textClass: "text-[#1F1B16]",
    contrast: "1.25:1 vs base",
    wcag: "Component UI",
  },
];

export default function StyleGuidePage() {
  return (
    <div className="min-h-screen bg-background text-foreground py-12 sm:py-20 px-4 sm:px-8 lg:px-12 max-w-7xl mx-auto space-y-20">
      {/* Editorial Header */}
      <header className="border-b border-border pb-10">
        <div className="flex flex-wrap items-center gap-3 mb-4">
          <Badge variant="sample">Design System v1.0</Badge>
          <Badge variant="terracotta">Warm Light Palette</Badge>
          <Badge variant="surface">No Dark Mode</Badge>
        </div>
        <h1 className="font-display text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight">
          Design Tokens &amp; <span className="italic font-normal">Primitives</span>
        </h1>
        <p className="mt-4 font-sans text-lg sm:text-xl text-muted max-w-2xl leading-relaxed">
          The foundational tokens, typography hierarchy, and UI primitives for the Raultz creative agency digital presence.
        </p>
      </header>

      {/* 1. Color Palette Tokens */}
      <section className="space-y-8">
        <SectionHeading
          eyebrow="// 01 COLOR TOKENS"
          title="Warm Editorial Palette"
          description="A warm, grounded palette built on cream canvas tones, near-black typography, and rich natural accents. Strictly light-mode."
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {COLOR_TOKENS.map((c) => (
            <div
              key={c.name}
              className="bg-surface rounded-2xl border border-border overflow-hidden p-4 flex flex-col justify-between space-y-4 hover:shadow-md transition-shadow"
            >
              <div
                className={`h-24 w-full rounded-xl flex items-end p-3 ${c.bgClass} ${c.textClass} shadow-inner`}
              >
                <span className="font-mono text-xs font-bold tracking-wider opacity-90">
                  {c.hex}
                </span>
              </div>
              <div className="space-y-1">
                <div className="flex items-center justify-between">
                  <h4 className="font-display font-bold text-base text-foreground">
                    {c.name}
                  </h4>
                  <span className="font-mono text-[10px] text-muted uppercase bg-surface-sunken px-2 py-0.5 rounded border border-border/60">
                    {c.wcag}
                  </span>
                </div>
                <p className="text-xs text-muted font-sans">{c.role}</p>
              </div>
              <div className="pt-2 border-t border-border/50 flex flex-col gap-1 font-mono text-[11px] text-muted">
                <span className="truncate">CSS: {c.variable}</span>
                <span className="text-foreground/80 font-medium">
                  Class: {c.token}
                </span>
                <span className="text-[10px] opacity-70">Contrast: {c.contrast}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 2. Typography Scale */}
      <section className="space-y-8 pt-6 border-t border-border/80">
        <SectionHeading
          eyebrow="// 02 TYPOGRAPHY SCALE"
          title="Three-Font Typographic Hierarchy"
          description="Fraunces for editorial character and display headlines, Inter for clean readable body and UI, Space Mono for technical flourishes and numbers."
        />

        <div className="space-y-6">
          {/* Fraunces Headline Samples */}
          <Card variant="default" className="space-y-8">
            <div className="flex items-center justify-between border-b border-border/70 pb-4">
              <span className="font-mono text-xs text-muted uppercase tracking-widest">
                Display &amp; Headline Hierarchy — Fraunces (font-display)
              </span>
              <Badge variant="olive">Serif / Editorial</Badge>
            </div>

            <div className="space-y-6">
              <div>
                <span className="font-mono text-[11px] text-muted block mb-1">
                  Display 7XL / Hero (text-5xl sm:text-7xl)
                </span>
                <p className="font-display text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight">
                  Crafting <span className="italic font-normal">Memorable</span> Digital Presence.
                </p>
              </div>

              <div>
                <span className="font-mono text-[11px] text-muted block mb-1">
                  Headline 1 (text-3xl sm:text-5xl)
                </span>
                <p className="font-display text-3xl sm:text-5xl font-bold tracking-tight">
                  High-Impact Web Engineering &amp; 3D Design
                </p>
              </div>

              <div>
                <span className="font-mono text-[11px] text-muted block mb-1">
                  Headline 2 (text-2xl sm:text-3xl)
                </span>
                <p className="font-display text-2xl sm:text-3xl font-bold">
                  Bespoke Architecture for Modern Brands
                </p>
              </div>

              <div>
                <span className="font-mono text-[11px] text-muted block mb-1">
                  Headline 3 (text-xl sm:text-2xl)
                </span>
                <p className="font-display text-xl sm:text-2xl font-semibold">
                  Modular Component Systems &amp; Micro-Interactions
                </p>
              </div>
            </div>
          </Card>

          {/* Inter Body & Space Mono */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card variant="default">
              <CardHeader>
                <div className="flex items-center justify-between mb-2">
                  <span className="font-mono text-xs text-muted uppercase tracking-widest">
                    Body &amp; UI — Inter (font-sans)
                  </span>
                  <Badge variant="surface">Geometric Sans</Badge>
                </div>
                <CardTitle className="text-lg">Clean, Highly Readable Text</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <span className="font-mono text-[10px] text-muted block mb-0.5">
                    Lead Paragraph (text-lg)
                  </span>
                  <p className="font-sans text-lg text-foreground leading-relaxed">
                    We engineer digital experiences that bridge cutting-edge creative design with robust technical execution.
                  </p>
                </div>
                <div>
                  <span className="font-mono text-[10px] text-muted block mb-0.5">
                    Regular Body (text-base)
                  </span>
                  <p className="font-sans text-base text-muted leading-relaxed">
                    Every interaction is deliberately designed to convey quality and precision, maintaining full accessibility and responsive elegance across every screen size.
                  </p>
                </div>
                <div>
                  <span className="font-mono text-[10px] text-muted block mb-0.5">
                    Small / Caption (text-sm)
                  </span>
                  <p className="font-sans text-sm text-subtle">
                    Designed and built with Next.js App Router, TypeScript, and modern CSS tokens.
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card variant="default">
              <CardHeader>
                <div className="flex items-center justify-between mb-2">
                  <span className="font-mono text-xs text-muted uppercase tracking-widest">
                    Technical &amp; Accents — Space Mono (font-mono)
                  </span>
                  <Badge variant="terracotta">Monospace</Badge>
                </div>
                <CardTitle className="text-lg">Figures, Labels &amp; Code Accents</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 font-mono">
                <div className="bg-surface-sunken p-3 rounded-lg border border-border/70">
                  <span className="text-[10px] text-muted uppercase block">Pricing Figure Display</span>
                  <div className="text-2xl font-bold text-foreground mt-1">
                    $4,900 <span className="text-xs font-normal text-muted">/ PROJECT</span>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <div className="bg-surface-sunken p-3 rounded-lg border border-border/70">
                    <span className="text-[10px] text-muted uppercase">Stat Metric</span>
                    <div className="text-xl font-bold text-olive mt-1">99.8%</div>
                    <span className="text-[10px] text-muted">PERFORMANCE</span>
                  </div>
                  <div className="bg-surface-sunken p-3 rounded-lg border border-border/70">
                    <span className="text-[10px] text-muted uppercase">Index Reference</span>
                    <div className="text-xl font-bold text-terracotta mt-1">[ 04 // 08 ]</div>
                    <span className="text-[10px] text-muted">SECTION ID</span>
                  </div>
                </div>

                <div className="text-xs text-muted bg-surface-sunken p-2.5 rounded border border-border/50">
                  <code>{"// SYSTEM: VERIFIED_OK"}</code>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* 3. Base UI Primitives: Buttons */}
      <section className="space-y-8 pt-6 border-t border-border/80">
        <SectionHeading
          eyebrow="// 03 UI PRIMITIVES"
          title="Button System &amp; Hover States"
          description="Tactile, high-contrast buttons with micro-interaction hover states, icon slides, and flexible variant pairings."
        />

        <Card variant="default" className="space-y-8">
          {/* Variants Showcase */}
          <div className="space-y-3">
            <span className="font-mono text-xs text-muted uppercase tracking-widest block">
              Button Variants
            </span>
            <div className="flex flex-wrap gap-4 items-center">
              <Button variant="primary" iconRight={<ArrowRight className="w-4 h-4" />}>
                Primary Button
              </Button>
              <Button variant="terracotta" iconRight={<Sparkles className="w-4 h-4" />}>
                Terracotta Accent
              </Button>
              <Button variant="olive" iconLeft={<Check className="w-4 h-4" />}>
                Olive Action
              </Button>
              <Button variant="secondary">Secondary Surface</Button>
              <Button variant="outline">Outline Contrast</Button>
              <Button variant="ghost">Ghost Button</Button>
              <Button variant="link">Underline Link</Button>
            </div>
          </div>

          {/* Sizes Showcase */}
          <div className="space-y-3 pt-4 border-t border-border/60">
            <span className="font-mono text-xs text-muted uppercase tracking-widest block">
              Button Sizes
            </span>
            <div className="flex flex-wrap gap-4 items-center">
              <Button size="sm" variant="primary">Small (sm)</Button>
              <Button size="md" variant="primary">Medium (md)</Button>
              <Button size="lg" variant="primary" iconRight={<ArrowRight className="w-4 h-4" />}>
                Large (lg)
              </Button>
              <Button size="xl" variant="terracotta" iconRight={<ArrowRight className="w-5 h-5" />}>
                Extra Large (xl)
              </Button>
              <Button size="icon" variant="secondary" aria-label="Next">
                <ChevronRight className="w-4 h-4" />
              </Button>
            </div>
          </div>

          {/* Disabled & Full-Width */}
          <div className="space-y-3 pt-4 border-t border-border/60">
            <span className="font-mono text-xs text-muted uppercase tracking-widest block">
              Disabled State
            </span>
            <div className="flex flex-wrap gap-4 items-center">
              <Button disabled variant="primary">Disabled Primary</Button>
              <Button disabled variant="secondary">Disabled Secondary</Button>
              <Button disabled variant="terracotta">Disabled Terracotta</Button>
            </div>
          </div>
        </Card>
      </section>

      {/* 4. Base UI Primitives: Badges */}
      <section className="space-y-8 pt-6 border-t border-border/80">
        <SectionHeading
          eyebrow="// 04 BADGES & TAGS"
          title="Badges &amp; Placeholder Tags"
          description="Standardized badge components including the dedicated 'Most Popular' tag for pricing cards and the 'Sample' tag for all placeholder content."
        />

        <Card variant="default" className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Required Specific Badges */}
            <div className="bg-surface-sunken p-6 rounded-xl border border-border/70 space-y-4">
              <span className="font-mono text-xs text-muted uppercase tracking-widest block">
                Required Specific Variants
              </span>

              <div className="flex flex-col gap-4">
                <div className="flex items-center gap-4">
                  <Badge variant="most-popular" />
                  <span className="text-sm font-sans text-muted">
                    <code>variant=&quot;most-popular&quot;</code> — for pricing tiers &amp; primary features
                  </span>
                </div>

                <div className="flex items-center gap-4">
                  <Badge variant="sample" />
                  <span className="text-sm font-sans text-muted">
                    <code>variant=&quot;sample&quot;</code> — for portfolio, testimonials, team placeholders
                  </span>
                </div>
              </div>
            </div>

            {/* Supporting Badge Variants */}
            <div className="bg-surface-sunken p-6 rounded-xl border border-border/70 space-y-4">
              <span className="font-mono text-xs text-muted uppercase tracking-widest block">
                Supporting Accent Badges
              </span>

              <div className="flex flex-wrap gap-3 items-center">
                <Badge variant="olive">Olive Pill</Badge>
                <Badge variant="terracotta">Terracotta Tag</Badge>
                <Badge variant="surface">Surface Tag</Badge>
                <Badge variant="outline">Outline</Badge>
                <Badge variant="default">Default Neutral</Badge>
              </div>
            </div>
          </div>
        </Card>
      </section>

      {/* 5. Base UI Primitives: Cards */}
      <section className="space-y-8 pt-6 border-t border-border/80">
        <SectionHeading
          eyebrow="// 05 CARDS & SURFACES"
          title="Card Container System"
          description="Modular card containers with distinct elevation, interactive hover states, and accent styling to be extended across services, pricing, team, and portfolio."
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Default Card */}
          <Card variant="default">
            <CardHeader>
              <Badge variant="sample" className="w-fit mb-2" />
              <CardTitle>Default Surface Card</CardTitle>
              <CardDescription>
                Base surface card with standard warm border and soft padding.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted">
                Clean base structure that holds content seamlessly across light themes.
              </p>
            </CardContent>
            <CardFooter>
              <Button size="sm" variant="secondary" fullWidth>
                Card Action
              </Button>
            </CardFooter>
          </Card>

          {/* Interactive Card */}
          <Card variant="interactive">
            <CardHeader>
              <Badge variant="terracotta" className="w-fit mb-2">Hover Lift</Badge>
              <CardTitle>Interactive Card</CardTitle>
              <CardDescription>
                Hover to see smooth elevation lift and border darkening.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted">
                Ideal for clickable portfolio case studies, service cards, and articles.
              </p>
            </CardContent>
            <CardFooter>
              <div className="flex items-center text-sm font-medium text-foreground gap-1 group-hover:text-terracotta transition-colors">
                <span>Explore Project</span>
                <ArrowRight className="w-4 h-4 ml-1" />
              </div>
            </CardFooter>
          </Card>

          {/* Accent Terracotta Top-Border Card */}
          <Card variant="accent-terracotta">
            <CardHeader>
              <div className="flex items-center justify-between mb-2">
                <Badge variant="most-popular" />
                <span className="font-mono text-xs text-muted">$5,000</span>
              </div>
              <CardTitle>Accent Header Card</CardTitle>
              <CardDescription>
                Specialized card with terracotta accent top-border.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted">
                Great for featured pricing tiers or prominent callout cards.
              </p>
            </CardContent>
            <CardFooter>
              <Button size="sm" variant="terracotta" fullWidth>
                Select Tier
              </Button>
            </CardFooter>
          </Card>
        </div>
      </section>

      {/* 6. Asymmetric Creative Agency Grid Layout Demo */}
      <section className="space-y-8 pt-6 border-t border-border/80">
        <SectionHeading
          align="split"
          eyebrow="// 06 ASYMMETRIC GRID PRINCIPLES"
          title={
            <>
              High-Energy <span className="italic font-normal">Asymmetry</span>
            </>
          }
          description="We avoid generic, centered corporate grids in favor of dynamic editorial compositions that command visual attention."
          action={
            <Button variant="primary" iconRight={<ArrowRight className="w-4 h-4" />}>
              Explore Services
            </Button>
          }
        />

        {/* Asymmetric 12-Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          <Card
            variant="accent-olive"
            padding="lg"
            className="lg:col-span-7 flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Badge variant="sample" />
                <span className="font-mono text-xs text-muted uppercase">FEATURED OFFERING</span>
              </div>
              <h3 className="font-display text-3xl sm:text-4xl font-bold tracking-tight mb-3">
                Full-Stack Creative Engineering
              </h3>
              <p className="font-sans text-muted leading-relaxed text-base max-w-xl">
                Combining high-performance Next.js architectures with fluid Three.js 3D scenes and GSAP kinetic typography.
              </p>
            </div>
            <div className="pt-8 flex items-center gap-4">
              <Button variant="primary" iconRight={<ArrowRight className="w-4 h-4" />}>
                Start a Project
              </Button>
              <Button variant="ghost">View Details</Button>
            </div>
          </Card>

          <div className="lg:col-span-5 flex flex-col gap-6">
            <Card variant="interactive" padding="md" className="flex-1">
              <Badge variant="olive" className="mb-2">01 // RAPID PROTOTYPING</Badge>
              <CardTitle className="text-xl">Zero-Friction Iteration</CardTitle>
              <CardDescription className="mt-2">
                Fast turnarounds backed by solid design tokens and reusable primitives.
              </CardDescription>
            </Card>

            <Card variant="default" padding="md" className="bg-[#1F1B16] text-[#F6F0E4] border-[#1F1B16]">
              <span className="font-mono text-xs text-terracotta uppercase tracking-widest block mb-2">
                02 // PERFORMANCE
              </span>
              <h4 className="font-display text-xl font-bold text-[#F6F0E4] mb-2">
                Sub-Second Page Loads
              </h4>
              <p className="font-sans text-sm text-[#F6F0E4]/70 leading-relaxed">
                Clean server components, optimized assets, and zero client bloat.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Verification Confirmation Footer */}
      <footer className="pt-12 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-4 font-mono text-xs text-muted">
        <div>
          <span>RAULTZ DESIGN TOKENS VERIFIED</span> — <span>LIGHT PALETTE ONLY</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-olive animate-pulse" />
          <span>STATUS: ALL PRIMITIVES ACTIVE</span>
        </div>
      </footer>
    </div>
  );
}
