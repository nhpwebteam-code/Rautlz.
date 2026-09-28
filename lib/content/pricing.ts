export interface PricingPackage {
  id: string;
  code: string;
  name: string;
  category: "core" | "growth" | "spatial";
  categoryTitle: string;
  priceINR: number;
  scope: string;
  delivery: string;
  revisions: string;
  isPopular?: boolean;
  highlightFeatures: string[];
  recommendedFor: string;
}

export interface FeatureComparisonCategory {
  categoryName: string;
  features: {
    name: string;
    description?: string;
    values: Record<string, boolean | string>; // keyed by package id
  }[];
}

export const PRICING_SECTIONS = [
  {
    id: "core",
    code: "SECTION 01",
    title: "Core Web Presence",
    subtitle: "Turnkey brand foundations, single-page sites, and essential multi-page platforms.",
    packageIds: ["pkg-01", "pkg-02", "pkg-03"],
  },
  {
    id: "growth",
    code: "SECTION 02",
    title: "Growth & Interactive Commercial",
    subtitle: "High-conversion editorial platforms, custom CMS, and interactive motion choreography.",
    packageIds: ["pkg-04", "pkg-05", "pkg-06"],
  },
  {
    id: "spatial",
    code: "SECTION 03",
    title: "3D Spatial WebGL & Enterprise",
    subtitle: "Immersive Three.js canvases, GLSL shaders, dynamic backends, and bespoke architectures.",
    packageIds: ["pkg-07", "pkg-08", "pkg-09"],
  },
];

export const PRICING_PACKAGES: PricingPackage[] = [
  // --- SECTION 1: CORE WEB PRESENCE ---
  {
    id: "pkg-01",
    code: "PKG 01",
    name: "Starter",
    category: "core",
    categoryTitle: "Core Web Presence",
    priceINR: 4000,
    scope: "1 page, template-based, mobile responsive, contact form + WhatsApp link, basic on-page SEO",
    delivery: "3 days",
    revisions: "1",
    highlightFeatures: [
      "Single-page high impact layout",
      "Mobile responsive foundation",
      "Direct WhatsApp + Contact form",
      "Basic on-page SEO meta tags",
      "7-day post-launch warranty",
    ],
    recommendedFor: "Early-stage validation & single-link launch pages",
  },
  {
    id: "pkg-02",
    code: "PKG 02",
    name: "Basic",
    category: "core",
    categoryTitle: "Core Web Presence",
    priceINR: 7000,
    scope: "3–4 pages (Home/About/Services/Contact), template customized to brand colors, WhatsApp click-to-chat, basic SEO across pages",
    delivery: "5 days",
    revisions: "2",
    isPopular: true,
    highlightFeatures: [
      "3–4 structured core pages",
      "Customized brand color palette",
      "WhatsApp click-to-chat integration",
      "Multi-page SEO structure",
      "Basic micro-animations",
    ],
    recommendedFor: "Emerging brands needing complete introductory presence",
  },
  {
    id: "pkg-03",
    code: "PKG 03",
    name: "Standard",
    category: "core",
    categoryTitle: "Core Web Presence",
    priceINR: 10000,
    scope: "5–6 page semi-custom design, photo gallery with lightbox, testimonials carousel, basic scroll animations",
    delivery: "7 days",
    revisions: "2",
    highlightFeatures: [
      "5–6 semi-custom page layouts",
      "Interactive photo gallery with lightbox",
      "Testimonials carousel component",
      "Basic kinetic scroll animations",
      "Google Search Console setup",
    ],
    recommendedFor: "Growing businesses showcasing portfolios and social proof",
  },

  // --- SECTION 2: GROWTH & INTERACTIVE COMMERCIAL ---
  {
    id: "pkg-04",
    code: "PKG 04",
    name: "Standard+",
    category: "growth",
    categoryTitle: "Growth & Interactive Commercial",
    priceINR: 14000,
    scope: "Fully custom design, GSAP scroll-triggered animations, Google Maps embed, social feed integration, category-based gallery",
    delivery: "10 days",
    revisions: "3",
    highlightFeatures: [
      "100% custom editorial design",
      "GSAP ScrollTrigger choreography",
      "Category-based interactive gallery",
      "Google Maps & Social feed embeds",
      "Speed optimized assets",
    ],
    recommendedFor: "Design-conscious studios & established boutique agencies",
  },
  {
    id: "pkg-05",
    code: "PKG 05",
    name: "Premium",
    category: "growth",
    categoryTitle: "Growth & Interactive Commercial",
    priceINR: 19000,
    scope: "Custom design with Framer Motion/GSAP interactions, full-bleed video hero, booking/inquiry form, lightweight CMS for client edits",
    delivery: "14 days",
    revisions: "3",
    isPopular: true,
    highlightFeatures: [
      "Framer Motion & GSAP dynamic interactions",
      "Full-bleed cinematic video hero",
      "Interactive booking & inquiry engine",
      "Lightweight client CMS integration",
      "Lighthouse 95+ performance guarantee",
    ],
    recommendedFor: "High-growth startups commanding category leadership",
  },
  {
    id: "pkg-06",
    code: "PKG 06",
    name: "Premium+",
    category: "growth",
    categoryTitle: "Growth & Interactive Commercial",
    priceINR: 25000,
    scope: "Advanced scroll-driven storytelling, custom motion graphics (animated counters etc.), payment/booking integration, admin login for content/orders",
    delivery: "18 days",
    revisions: "4",
    highlightFeatures: [
      "Advanced scroll-driven brand storytelling",
      "Custom motion graphics & live counters",
      "Payment gateway & booking integration",
      "Admin login for content & orders",
      "14-day dedicated support",
    ],
    recommendedFor: "Commercial platforms requiring transaction & order flows",
  },

  // --- SECTION 3: 3D SPATIAL WEBGL & ENTERPRISE ---
  {
    id: "pkg-07",
    code: "PKG 07",
    name: "Elite 3D",
    category: "spatial",
    categoryTitle: "3D Spatial WebGL & Enterprise",
    priceINR: 32000,
    scope: "3D/WebGL via React Three Fiber, cinematic page transitions, database-backed backend, multi-role access, priority support",
    delivery: "21 days",
    revisions: "4",
    highlightFeatures: [
      "3D spatial WebGL via React Three Fiber",
      "Cinematic seamless page transitions",
      "Database-backed dynamic backend",
      "Multi-role access & priority support",
      "60 FPS physics optimization",
    ],
    recommendedFor: "Next-gen tech brands demanding spatial 3D immersion",
  },
  {
    id: "pkg-08",
    code: "PKG 08",
    name: "Signature WebGL",
    category: "spatial",
    categoryTitle: "3D Spatial WebGL & Enterprise",
    priceINR: 40000,
    scope: "Full custom cinematic 3D experience end-to-end, bespoke interactions, complete admin dashboard, booking engine with payment integration, 1 month post-launch support",
    delivery: "25–30 days",
    revisions: "Unlimited during build",
    isPopular: true,
    highlightFeatures: [
      "End-to-end custom 3D spatial experience",
      "Bespoke tactile physics & GLSL shaders",
      "Complete custom admin dashboard",
      "1 month dedicated post-launch support",
      "Direct founding engineer access",
    ],
    recommendedFor: "Flagship luxury & visionary benchmark digital products",
  },
  {
    id: "pkg-09",
    code: "PKG 09",
    name: "Enterprise Bespoke",
    category: "spatial",
    categoryTitle: "3D Spatial WebGL & Enterprise",
    priceINR: 55000,
    scope: "Full-scale custom platform architecture, multi-platform design system, dedicated microservices/APIs, custom 3D configurator, SLA guarantee",
    delivery: "35–45 days",
    revisions: "Unlimited continuous sprint",
    highlightFeatures: [
      "Custom multi-page platform architecture",
      "Interactive 3D product configurator",
      "Full backend microservices & database",
      "Enterprise SLA & dedicated founder team",
      "2 months VIP hypercare support",
    ],
    recommendedFor: "Enterprise leaders requiring flagship digital infrastructure",
  },
];

// --- Comprehensive Feature Comparison Matrix Data ---
export const COMPARISON_CATEGORIES: FeatureComparisonCategory[] = [
  {
    categoryName: "Design & Architecture",
    features: [
      {
        name: "Page Scope",
        description: "Number of bespoke pages included in the build.",
        values: {
          "pkg-01": "1 Page",
          "pkg-02": "3–4 Pages",
          "pkg-03": "5–6 Pages",
          "pkg-04": "Up to 8 Pages",
          "pkg-05": "Up to 10 Pages",
          "pkg-06": "Up to 14 Pages",
          "pkg-07": "Custom Scoped",
          "pkg-08": "Custom Scoped",
          "pkg-09": "Unlimited Scope",
        },
      },
      {
        name: "Design Direction",
        description: "Level of custom art direction and typography design.",
        values: {
          "pkg-01": "Curated Template",
          "pkg-02": "Custom Palette",
          "pkg-03": "Semi-Custom",
          "pkg-04": "100% Custom",
          "pkg-05": "Bespoke Editorial",
          "pkg-06": "Bespoke Editorial",
          "pkg-07": "Luxury Spatial",
          "pkg-08": "Luxury Spatial",
          "pkg-09": "Flagship Bespoke",
        },
      },
      {
        name: "Responsive Mobile Optimization",
        description: "Fluid mobile and tablet layout fidelity.",
        values: {
          "pkg-01": true,
          "pkg-02": true,
          "pkg-03": true,
          "pkg-04": true,
          "pkg-05": true,
          "pkg-06": true,
          "pkg-07": true,
          "pkg-08": true,
          "pkg-09": true,
        },
      },
      {
        name: "Photo Gallery & Lightbox",
        values: {
          "pkg-01": false,
          "pkg-02": false,
          "pkg-03": true,
          "pkg-04": true,
          "pkg-05": true,
          "pkg-06": true,
          "pkg-07": true,
          "pkg-08": true,
          "pkg-09": true,
        },
      },
      {
        name: "Cinematic Video Hero",
        values: {
          "pkg-01": false,
          "pkg-02": false,
          "pkg-03": false,
          "pkg-04": false,
          "pkg-05": true,
          "pkg-06": true,
          "pkg-07": true,
          "pkg-08": true,
          "pkg-09": true,
        },
      },
    ],
  },
  {
    categoryName: "Motion, 3D & Spatial Engineering",
    features: [
      {
        name: "Kinetic Micro-Animations",
        values: {
          "pkg-01": false,
          "pkg-02": true,
          "pkg-03": true,
          "pkg-04": true,
          "pkg-05": true,
          "pkg-06": true,
          "pkg-07": true,
          "pkg-08": true,
          "pkg-09": true,
        },
      },
      {
        name: "GSAP & ScrollTrigger Choreography",
        values: {
          "pkg-01": false,
          "pkg-02": false,
          "pkg-03": false,
          "pkg-04": true,
          "pkg-05": true,
          "pkg-06": true,
          "pkg-07": true,
          "pkg-08": true,
          "pkg-09": true,
        },
      },
      {
        name: "Framer Motion Physics & Page Transitions",
        values: {
          "pkg-01": false,
          "pkg-02": false,
          "pkg-03": false,
          "pkg-04": false,
          "pkg-05": true,
          "pkg-06": true,
          "pkg-07": true,
          "pkg-08": true,
          "pkg-09": true,
        },
      },
      {
        name: "3D Spatial WebGL (React Three Fiber)",
        description: "Interactive 3D scenes, particle fields, and camera controls.",
        values: {
          "pkg-01": false,
          "pkg-02": false,
          "pkg-03": false,
          "pkg-04": false,
          "pkg-05": false,
          "pkg-06": false,
          "pkg-07": true,
          "pkg-08": true,
          "pkg-09": true,
        },
      },
      {
        name: "Custom GLSL Shaders & 3D Configurator",
        values: {
          "pkg-01": false,
          "pkg-02": false,
          "pkg-03": false,
          "pkg-04": false,
          "pkg-05": false,
          "pkg-06": false,
          "pkg-07": false,
          "pkg-08": true,
          "pkg-09": true,
        },
      },
    ],
  },
  {
    categoryName: "Integrations & Backend Systems",
    features: [
      {
        name: "WhatsApp Click-to-Chat & Contact Form",
        values: {
          "pkg-01": true,
          "pkg-02": true,
          "pkg-03": true,
          "pkg-04": true,
          "pkg-05": true,
          "pkg-06": true,
          "pkg-07": true,
          "pkg-08": true,
          "pkg-09": true,
        },
      },
      {
        name: "CMS Content Management",
        description: "Self-serve content editing dashboard for non-technical teams.",
        values: {
          "pkg-01": false,
          "pkg-02": false,
          "pkg-03": false,
          "pkg-04": false,
          "pkg-05": "Lightweight",
          "pkg-06": "Standard",
          "pkg-07": "Dynamic",
          "pkg-08": "Full CMS",
          "pkg-09": "Enterprise Headless",
        },
      },
      {
        name: "Payment Gateway & E-Commerce",
        values: {
          "pkg-01": false,
          "pkg-02": false,
          "pkg-03": false,
          "pkg-04": false,
          "pkg-05": false,
          "pkg-06": true,
          "pkg-07": true,
          "pkg-08": true,
          "pkg-09": true,
        },
      },
      {
        name: "Custom Database & Admin Dashboard",
        values: {
          "pkg-01": false,
          "pkg-02": false,
          "pkg-03": false,
          "pkg-04": false,
          "pkg-05": false,
          "pkg-06": "Basic Admin",
          "pkg-07": "PostgreSQL / Prisma",
          "pkg-08": "Custom Admin Suite",
          "pkg-09": "Enterprise Cloud DB",
        },
      },
    ],
  },
  {
    categoryName: "Delivery, Revisions & Support SLA",
    features: [
      {
        name: "Sprint Turnaround",
        values: {
          "pkg-01": "3 Days",
          "pkg-02": "5 Days",
          "pkg-03": "7 Days",
          "pkg-04": "10 Days",
          "pkg-05": "14 Days",
          "pkg-06": "18 Days",
          "pkg-07": "21 Days",
          "pkg-08": "25–30 Days",
          "pkg-09": "35–45 Days",
        },
      },
      {
        name: "Included Revision Rounds",
        values: {
          "pkg-01": "1 Round",
          "pkg-02": "2 Rounds",
          "pkg-03": "2 Rounds",
          "pkg-04": "3 Rounds",
          "pkg-05": "3 Rounds",
          "pkg-06": "4 Rounds",
          "pkg-07": "4 Rounds",
          "pkg-08": "Unlimited",
          "pkg-09": "Unlimited Sprint",
        },
      },
      {
        name: "Post-Launch Warranty & Support",
        values: {
          "pkg-01": "7 Days",
          "pkg-02": "7 Days",
          "pkg-03": "14 Days",
          "pkg-04": "14 Days",
          "pkg-05": "21 Days",
          "pkg-06": "30 Days",
          "pkg-07": "30 Days",
          "pkg-08": "60 Days",
          "pkg-09": "90 Days VIP",
        },
      },
      {
        name: "Direct Founder Access",
        values: {
          "pkg-01": true,
          "pkg-02": true,
          "pkg-03": true,
          "pkg-04": true,
          "pkg-05": true,
          "pkg-06": true,
          "pkg-07": true,
          "pkg-08": true,
          "pkg-09": true,
        },
      },
    ],
  },
];
