export interface CaseStudyProject {
  id: string;
  slug: string;
  title: string;
  client: string;
  category: "Web Design" | "3D & Interactive" | "Branding" | "E-Commerce";
  tierEquivalent: string;
  timeline: string;
  year: string;
  heroSummary: string;
  challenge: string;
  solution: string;
  deliverables: string[];
  techStack: string[];
  simulatedMetrics: { label: string; value: string }[];
  accentColor: "terracotta" | "olive" | "brown";
  gradient: string;
  posterImage: string;
}

export const PORTFOLIO_PROJECTS: CaseStudyProject[] = [
  {
    id: "project-1",
    slug: "sartorial-atelier",
    title: "Sartorial Atelier",
    client: "Bespoke Tailor & Boutique (Sample)",
    category: "Web Design",
    tierEquivalent: "PKG 01 — Starter",
    timeline: "3 Days Sprint",
    year: "2026",
    heroSummary:
      "A minimalist, high-conversion single-page digital atelier crafted for a bespoke tailoring house, featuring instant WhatsApp inquiry routing and mobile-first typography.",
    challenge:
      "The client relied exclusively on walk-ins and Instagram DMs, losing track of custom measurement requests and bridal consultation leads.",
    solution:
      "Engineered an elegant single-page editorial layout with warm cream design tokens, tactile micro-interactions, an interactive fabric consultation selector, and 1-click WhatsApp deep links with pre-filled consultation templates.",
    deliverables: [
      "Single-page responsive layout",
      "Interactive consultation request form",
      "Direct WhatsApp chat integration with pre-filled prompts",
      "High-speed localized on-page SEO",
    ],
    techStack: ["Next.js App Router", "Tailwind CSS", "Lucide Icons", "TypeScript"],
    simulatedMetrics: [
      { label: "Mobile Inquiries (Sample)", value: "+180%" },
      { label: "Page Load Speed", value: "0.4s" },
      { label: "Lighthouse Performance", value: "100/100" },
    ],
    accentColor: "terracotta",
    gradient: "from-[#2A2018] via-[#382C22] to-[#1C1611]",
    posterImage: "https://images.unsplash.com/photo-1594938298603-c8148c4dae35?q=80&w=800&auto=format&fit=crop",
  },
  {
    id: "project-2",
    slug: "rasoi-express",
    title: "Rasoi Express Kitchen",
    client: "Artisanal Home Tiffin & Meal Delivery (Sample)",
    category: "E-Commerce",
    tierEquivalent: "PKG 02 — Basic",
    timeline: "5 Days Sprint",
    year: "2026",
    heroSummary:
      "A 4-page vibrant culinary showcase and ordering flow engineered for an artisanal meal delivery service, enabling frictionless daily meal plan subscriptions over WhatsApp.",
    challenge:
      "Managing daily rotating regional menus across multiple WhatsApp groups resulted in order errors, delivery confusion, and customer churn.",
    solution:
      "Designed a clean 4-page site (Home, Weekly Menu, Subscriptions, Contact) with real-time menu day tabs, dynamic price tallying, and automatic WhatsApp order formatting with delivery address capture.",
    deliverables: [
      "4-page structured responsive architecture",
      "Weekly rotating interactive menu grid",
      "Automated WhatsApp order payload generator",
      "Brand color token system",
    ],
    techStack: ["Next.js 16", "TypeScript", "Tailwind CSS", "Framer Motion"],
    simulatedMetrics: [
      { label: "Daily Order Accuracy (Sample)", value: "99.4%" },
      { label: "Checkout Drop-off", value: "-62%" },
      { label: "First Contentful Paint", value: "0.5s" },
    ],
    accentColor: "olive",
    gradient: "from-[#1F261C] via-[#2D3828] to-[#141A12]",
    posterImage: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?q=80&w=800&auto=format&fit=crop",
  },
  {
    id: "project-3",
    slug: "aura-wellness-sanctuary",
    title: "Aura Wellness Sanctuary",
    client: "Unisex Luxury Salon & Spa (Sample)",
    category: "Web Design",
    tierEquivalent: "PKG 03 — Standard",
    timeline: "7 Days Sprint",
    year: "2026",
    heroSummary:
      "A multi-page sensory wellness website with tactile treatment galleries, interactive full-screen lightboxes, and a rotating testimonials arc.",
    challenge:
      "The spa struggled to convey its serene architectural ambiance and premium treatments through standard generic directories.",
    solution:
      "Crafted an editorial 6-page platform featuring smooth scroll transitions, filtered treatment menus with pricing breakdowns, a high-resolution treatment lightbox gallery, and verified client story quotes.",
    deliverables: [
      "6-page semi-custom editorial website",
      "Treatment photo gallery with full-screen lightbox",
      "Curved testimonials carousel component",
      "Direct phone & WhatsApp booking triggers",
    ],
    techStack: ["Next.js App Router", "Framer Motion", "Tailwind CSS", "TypeScript"],
    simulatedMetrics: [
      { label: "Spa Package Bookings (Sample)", value: "+145%" },
      { label: "Session Duration", value: "3m 40s" },
      { label: "Core Web Vitals", value: "All Good" },
    ],
    accentColor: "brown",
    gradient: "from-[#2C241D] via-[#3D3328] to-[#1A1410]",
    posterImage: "https://images.unsplash.com/photo-1540555700478-4be289fbecef?q=80&w=800&auto=format&fit=crop",
  },
  {
    id: "project-4",
    slug: "vow-and-velvet",
    title: "Vow & Velvet Celebrations",
    client: "Luxury Wedding & Event Production (Sample)",
    category: "Branding",
    tierEquivalent: "PKG 04 — Standard+",
    timeline: "10 Days Sprint",
    year: "2026",
    heroSummary:
      "A cinematic event design portfolio featuring GSAP scroll-triggered curtain reveals, category-sorted celebration archives, and integrated inquiry workflows.",
    challenge:
      "High-net-worth clients expected an unforgettable visual experience matching the grandeur of 7-figure destination weddings.",
    solution:
      "Constructed a fully custom layout using GSAP ScrollTrigger to orchestrate staggered photo reveals, categorized event archives (Destination, Royal, Minimalist), and embedded venue maps.",
    deliverables: [
      "Fully bespoke editorial design system",
      "GSAP ScrollTrigger staggered animations",
      "Categorized high-resolution photo archives",
      "Interactive consultation calendar scheduler",
    ],
    techStack: ["Next.js App Router", "GSAP 3", "ScrollTrigger", "Tailwind CSS"],
    simulatedMetrics: [
      { label: "Consultation Form Submissions (Sample)", value: "+210%" },
      { label: "Average Deal Size (Sample)", value: "+35%" },
      { label: "Interaction Response", value: "12ms" },
    ],
    accentColor: "terracotta",
    gradient: "from-[#381B14] via-[#4D251C] to-[#210F0B]",
    posterImage: "https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=800&auto=format&fit=crop",
  },
  {
    id: "project-5",
    slug: "roast-and-revel",
    title: "Roast & Revel Roastery",
    client: "Artisanal Coffee Lab & Bakery (Sample)",
    category: "Branding",
    tierEquivalent: "PKG 05 — Premium",
    timeline: "14 Days Sprint",
    year: "2026",
    heroSummary:
      "A full-bleed video hero and lightweight CMS-backed platform for a specialty roastery, managing seasonal single-origin releases and tasting room reservations.",
    challenge:
      "Weekly coffee bean origins changed frequently, requiring the baristas to update bean profiles without touching code or breaking layouts.",
    solution:
      "Built a custom Framer Motion experience with auto-scrolling roast marquee, full-bleed ambient video hero, interactive tasting notes matrix, and lightweight headless CMS schema for non-technical team updates.",
    deliverables: [
      "Full-bleed cinematic video hero section",
      "Framer Motion interactive micro-physics",
      "Tasting room reservation engine",
      "Lightweight headless CMS schema for bean drops",
    ],
    techStack: ["Next.js App Router", "Framer Motion", "Tailwind CSS", "TypeScript"],
    simulatedMetrics: [
      { label: "Subscription Signups (Sample)", value: "+320%" },
      { label: "Content Update Time", value: "< 2 mins" },
      { label: "Mobile Bounce Rate", value: "18%" },
    ],
    accentColor: "brown",
    gradient: "from-[#302117] via-[#452F21] to-[#1E140E]",
    posterImage: "https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?q=80&w=800&auto=format&fit=crop",
  },
  {
    id: "project-6",
    slug: "kroma-lens-collective",
    title: "Kroma Lens Collective",
    client: "Commercial & Fashion Photography Agency (Sample)",
    category: "Web Design",
    tierEquivalent: "PKG 06 — Premium+",
    timeline: "18 Days Sprint",
    year: "2026",
    heroSummary:
      "A high-velocity photography portal with horizontal scroll-driven editorial storytelling, animated live client counters, and secure client proofing access.",
    challenge:
      "Delivering uncompressed 8K proofing galleries to fashion clients while maintaining a blazingly fast public portfolio site.",
    solution:
      "Engineered scroll-linked GSAP timelines with horizontal project tracks, responsive image optimization with Next/Image AVIF compression, and client password-protected proofing galleries.",
    deliverables: [
      "Scroll-driven horizontal storytelling tracks",
      "Custom animated live project counters",
      "Secure client proofing login area",
      "Automated image pipeline with lazy blur placeholders",
    ],
    techStack: ["Next.js 16", "GSAP ScrollTrigger", "TypeScript", "Tailwind CSS"],
    simulatedMetrics: [
      { label: "Editorial Commission Bookings (Sample)", value: "+175%" },
      { label: "Asset Delivery Speed", value: "4x Faster" },
      { label: "Page Weight Optimization", value: "-68%" },
    ],
    accentColor: "terracotta",
    gradient: "from-[#222120] via-[#33312E] to-[#151413]",
    posterImage: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=800&auto=format&fit=crop",
  },
  {
    id: "project-7",
    slug: "atrium-spatial-living",
    title: "Atrium Spatial Living",
    client: "Modern Architectural & Interior Studio (Sample)",
    category: "3D & Interactive",
    tierEquivalent: "PKG 07 — Elite",
    timeline: "21 Days Sprint",
    year: "2026",
    heroSummary:
      "An interactive 3D spatial web walkthrough built in React Three Fiber, allowing prospective homeowners to explore 360° architectural room layouts in real-time.",
    challenge:
      "Static 2D architectural blueprints failed to communicate spatial flow and sunlight orientation to international clients.",
    solution:
      "Developed a custom WebGL 3D canvas with PBR materials, dynamic day/night sunlight shader toggles, interactive furniture placement hot-spots, and fluid page transitions.",
    deliverables: [
      "3D spatial WebGL canvas via React Three Fiber",
      "360° interactive architectural room explorer",
      "PBR material & realistic lighting shaders",
      "Database-backed consultation engine",
    ],
    techStack: ["React Three Fiber", "Three.js", "Next.js App Router", "GSAP", "TypeScript"],
    simulatedMetrics: [
      { label: "Investor Engagement Time (Sample)", value: "5m 12s" },
      { label: "Rendering Performance", value: "60 FPS Capped" },
      { label: "Inquiry Conversion", value: "+240%" },
    ],
    accentColor: "olive",
    gradient: "from-[#1A2218] via-[#283625] to-[#10170E]",
    posterImage: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=800&auto=format&fit=crop",
  },
  {
    id: "project-8",
    slug: "elysian-coastline-villas",
    title: "Elysian Coastline Villas",
    client: "Ultra-Luxury Private Resort & Estates (Sample)",
    category: "3D & Interactive",
    tierEquivalent: "PKG 08 — Signature",
    timeline: "30 Days Sprint",
    year: "2026",
    heroSummary:
      "A category-defining cinematic 3D fly-through experience and villa reservation portal, featuring custom physics, spatial audio, and Stripe payment integration.",
    challenge:
      "Establishing ultra-luxury prestige for a multi-million dollar private island resort before construction was fully completed.",
    solution:
      "Engineered an end-to-end bespoke WebGL terrain fly-through with scroll-scrubbed camera choreography, custom audio atmosphere, complete admin reservation dashboard, and payment engine.",
    deliverables: [
      "Cinematic 3D terrain fly-through end-to-end",
      "Bespoke tactile physics & scroll choreography",
      "Complete admin dashboard for booking & villa management",
      "Payment engine integration with automated contracts",
    ],
    techStack: ["React Three Fiber", "Three.js", "GSAP ScrollTrigger", "Next.js 16", "TypeScript"],
    simulatedMetrics: [
      { label: "Private Villa Reservations (Sample)", value: "100% Sold Out" },
      { label: "Average Session Depth", value: "7m 45s" },
      { label: "Global Web Award (Sample)", value: "Site of the Day" },
    ],
    accentColor: "terracotta",
    gradient: "from-[#351C12] via-[#4D291B] to-[#1F100A]",
    posterImage: "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?q=80&w=800&auto=format&fit=crop",
  },
];
