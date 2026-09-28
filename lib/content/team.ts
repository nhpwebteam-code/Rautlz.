export interface TeamMember {
  id: string;
  name: string;
  role: "Development" | "Strategy" | "Design";
  title: string;
  designation: string;
  tagline: string;
  bio: string;
  quote: string;
  focusAreas: string[];
  deliverables: string[];
  metrics: { label: string; value: string }[];
  initials: string;
  accent: "terracotta" | "olive" | "brown";
  avatarBg: string;
  image: string;
  verticalText: string;
}

export const TEAM_MEMBERS: TeamMember[] = [
  {
    id: "nihal",
    name: "Nihal",
    role: "Development",
    title: "Lead Architect & Creative Technologist",
    designation: "Co-Founder & Lead Engineer",
    tagline: "High-performance architecture, 3D WebGL physics, and sub-second execution.",
    bio: "Obsessed with high-performance web architecture, zero-bloat Next.js App Router systems, and immersive WebGL/Three.js spatial engineering. Nihal ensures every line of code executes with mathematical precision, sub-50ms TTFB, and 100/100 Google Core Web Vitals.",
    quote: "Code is not just implementation — it is the medium through which brand authority is made tactile and permanent.",
    focusAreas: [
      "Next.js 19 App Router & Server Actions",
      "Three.js & React Three Fiber (R3F)",
      "Custom GLSL Shader Pipelines",
      "Sub-Second TTFB & Core Web Vitals 100/100",
      "TypeScript Architecture & Edge CI/CD",
      "Full-Stack API & Database Integrations",
    ],
    deliverables: [
      "Turnkey Next.js production deployments",
      "Interactive 60FPS spatial 3D canvas environments",
      "Lighthouse performance optimization & caching",
      "Custom headless e-commerce & SaaS infrastructure",
    ],
    metrics: [
      { label: "Lighthouse", value: "100/100" },
      { label: "FPS Target", value: "60 FPS" },
      { label: "Edge Deploy", value: "Global" },
    ],
    initials: "N",
    accent: "terracotta",
    avatarBg: "from-[#FF4D2E] to-[#C92A38]",
    image: "/images/team/nihal-card.jpg",
    verticalText: "DIRECTORS",
  },
  {
    id: "hemanth",
    name: "Hemanth",
    role: "Design",
    title: "Creative Director & Spatial UI Designer",
    designation: "Co-Founder & Creative Director",
    tagline: "Editorial typography, tactile design tokens, and spatial visual identity.",
    bio: "Directs editorial visual systems, typographic scales, and tactile spatial interfaces. Hemanth crafts unmistakable brand identities where elegant restraint meets dynamic kinetic energy, transforming standard business layouts into luxury digital flagships.",
    quote: "Every layout must breathe with editorial elegance and intentional hierarchy. Restraint is the ultimate sophistication.",
    focusAreas: [
      "Editorial Typography & Spatial Layouts",
      "Tactile Figma UI/UX Prototypes & Tokens",
      "Design Systems & Component Architecture",
      "Kinetic Motion Choreography & GSAP",
      "Bespoke Brand Identity & Art Direction",
      "High-Converting Landing Page Design",
    ],
    deliverables: [
      "Complete Figma design systems & UI kits",
      "High-fidelity interactive motion prototypes",
      "Brand style guides & color token matrices",
      "Custom iconography & editorial typography scales",
    ],
    metrics: [
      { label: "Tokens", value: "100%" },
      { label: "Figma", value: "Interactive" },
      { label: "Art Style", value: "Bespoke" },
    ],
    initials: "H",
    accent: "brown",
    avatarBg: "from-[#8A6F52] to-[#5C4936]",
    image: "/images/team/hemanth-card.png",
    verticalText: "DIRECTORS",
  },
  {
    id: "pranav",
    name: "Pranav",
    role: "Strategy",
    title: "Technical Growth & Product Strategist",
    designation: "Co-Founder & Head of Strategy",
    tagline: "Milestone scoping, market positioning, and conversion architecture.",
    bio: "Aligns architectural execution with tangible commercial outcomes. Pranav shapes project scope, digital market positioning, conversion psychology, and seamless founder collaboration from initial discovery through production deployment.",
    quote: "Great software and design are meaningless without commercial clarity. We align every sprint with business velocity.",
    focusAreas: [
      "Conversion Rate Optimization (CRO)",
      "Digital Market Positioning & Narrative",
      "Sprint Scoping & Milestone Roadmapping",
      "User Journey & Information Architecture",
      "Client Growth & Launch Strategy",
      "Direct Founder Collaboration Cadence",
    ],
    deliverables: [
      "Detailed project scope & sprint specifications",
      "Conversion architecture & user flow blueprints",
      "24-hour turnaround proposals & roadmaps",
      "Weekly sprint reviews & launch milestones",
    ],
    metrics: [
      { label: "Turnaround", value: "< 24 Hours" },
      { label: "Alignment", value: "Direct" },
      { label: "Delivery", value: "On-Time" },
    ],
    initials: "P",
    accent: "olive",
    avatarBg: "from-[#6B7A4E] to-[#475234]",
    image: "/images/team/pranav-card.png",
    verticalText: "DIRECTORS",
  },
];
