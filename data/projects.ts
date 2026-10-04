export type ProjectCategory =
  | "All"
  | "Photography"
  | "Fashion"
  | "Real Estate"
  | "Food"
  | "Interior"
  | "Business";

export interface ProjectScope {
  client: string;
  category: string;
  duration: string;
  year: string;
}

export interface ProjectStat {
  label: string;
  value: string;
  helper?: string;
}

export interface ProjectColor {
  name: string;
  hex: string;
  role: string;
}

export interface ProjectFonts {
  heading: string;
  body: string;
  mono?: string;
}

export interface ProjectFeature {
  icon: string;
  title: string;
  text: string;
}

export interface ProjectGalleryItem {
  image: string;
  title: string;
  caption: string;
  tag: string;
}

export interface ProjectMobileShot {
  image: string;
  title: string;
  subtitle: string;
}

export interface ProjectTimelineItem {
  day: string;
  title: string;
  text: string;
}

export interface ProjectResult {
  text: string;
  metrics: { label: string; value: string; helper?: string }[];
}

export interface Project {
  slug: string;
  title: string;
  category: Exclude<ProjectCategory, "All">;
  package: string;
  description: string;
  cover: string;
  heroImage: string;
  scope: ProjectScope;
  techStack: string[];
  overview: string;
  stats: ProjectStat[];
  challenge: string[];
  solution: string[];
  palette: ProjectColor[];
  fonts: ProjectFonts;
  features: ProjectFeature[];
  gallery: ProjectGalleryItem[];
  mobileShots: ProjectMobileShot[];
  timeline: ProjectTimelineItem[];
  result: ProjectResult;
}

export const PORTFOLIO_CATEGORIES: ProjectCategory[] = [
  "All",
  "Photography",
  "Fashion",
  "Real Estate",
  "Food",
  "Interior",
  "Business",
];

export const PROJECTS: Project[] = [
  // 1. Sartorial Atelier (Tailor / Boutique - Fashion)
  {
    slug: "sartorial-atelier",
    title: "Sartorial Atelier",
    category: "Fashion",
    package: "PKG 01 - STARTER",
    description:
      "A tactile single-page digital salon for bespoke suiting, fabric curation, and instant WhatsApp measurement routing.",
    cover: "/portfolio/sartorial-atelier/cover.jpg",
    heroImage: "/portfolio/sartorial-atelier/hero.jpg",
    scope: {
      client: "House of Sartoria / Bespoke Tailoring",
      category: "Boutique Fashion & Couture",
      duration: "3 Days Rapid Sprint",
      year: "2026",
    },
    techStack: ["Next.js App Router", "Tailwind CSS", "TypeScript", "Framer Motion", "Lucide Icons"],
    overview:
      "Sartorial Atelier required a digital home that matched the tactile precision of hand-stitched canvassing and Italian cashmere. We developed a razor-sharp editorial interface engineered to turn discerning walk-in clients and Instagram inquiries into qualified, booked fitting sessions through automated WhatsApp routing.",
    stats: [
      { label: "Fitting Consultations", value: "+240%", helper: "Qualified monthly bookings" },
      { label: "First Contentful Paint", value: "0.38s", helper: "Instant mobile rendering" },
      { label: "Lighthouse Performance", value: "100/100", helper: "Perfect core web vitals" },
    ],
    challenge: [
      "Walk-in footfall was dropping while Instagram DMs caused missed measurement requests and bridal consultation backlogs.",
      "Generic Shopify themes failed to evoke the heritage luxury, craftsmanship, and tactile nuance expected by ultra-high-net-worth patrons.",
      "The client lacked a streamlined system to pre-screen bespoke cloth choices before booking fitting appointments.",
    ],
    solution: [
      "Architected an editorial, warm-cream digital atelier with deliberate spacing, serif-inspired bold display typography, and smooth micro-interactions.",
      "Built an interactive fabric swatch selector allowing clients to explore British wools and Loro Piana cashmeres with high-res macro zoom.",
      "Engineered one-tap WhatsApp deep routing with pre-populated client silhouette and timeline parameters for zero friction.",
    ],
    palette: [
      { name: "Cream Base", hex: "#FAF7F2", role: "Canvas Background" },
      { name: "Warm Surface", hex: "#EFE6D8", role: "Cards & Elevated Panels" },
      { name: "Near Black", hex: "#1F1B16", role: "Primary Headings & Text" },
      { name: "Terracotta Accent", hex: "#FF4D2E", role: "CTA & Interactive States" },
    ],
    fonts: {
      heading: "Inter Display SemiBold (-0.03em tracking)",
      body: "Inter Body Regular (16px / 1.6 leading)",
      mono: "JetBrains Mono [ Uppercase Tech Specs ]",
    },
    features: [
      {
        icon: "Scissors",
        title: "Bespoke Measurement Gateway",
        text: "Interactive digital consultation step pre-screening garment specs before the in-person fitting.",
      },
      {
        icon: "Layers",
        title: "Tactile Swatch Viewer",
        text: "Curated seasonal swatches from Biella and Yorkshire mills with thread-count metadata.",
      },
      {
        icon: "MessageSquare",
        title: "WhatsApp Smart Payload",
        text: "Direct deep-link button automatically passing suit tier, timeline, and fabric choice to master tailors.",
      },
      {
        icon: "Sparkles",
        title: "Zero-Latency Performance",
        text: "Static Next.js SSG bundle deploying across global edge nodes with instant sub-400ms page transitions.",
      },
    ],
    gallery: [
      {
        image: "/portfolio/sartorial-atelier/hero.jpg",
        title: "Hero Architectural Canvas",
        tag: "Above The Fold",
        caption:
          "Full-bleed introductory section pairing stark black typographic hierarchy with warm cashmere imagery, commanding immediate authority.",
      },
      {
        image: "/portfolio/sartorial-atelier/g1.jpg",
        title: "Bespoke Suiting & Consultation Architecture",
        tag: "Services & Products",
        caption:
          "Modular grid presenting the three signature suiting tiers with transparent turnaround windows, cloth weights, and starting price points.",
      },
      {
        image: "/portfolio/sartorial-atelier/g2.jpg",
        title: "Editorial Fitting Archive",
        tag: "Gallery & Work",
        caption:
          "High-contrast editorial masonry grid documenting hand-finished lapels, horn buttons, and silhouette drape for client confidence.",
      },
      {
        image: "/portfolio/sartorial-atelier/g3.jpg",
        title: "Direct Private Atelier Booking",
        tag: "Contact & Routing",
        caption:
          "Frictionless booking module integrated with calendar slot reservation and instant WhatsApp concierge handover.",
      },
    ],
    mobileShots: [
      {
        image: "/portfolio/sartorial-atelier/m1.jpg",
        title: "Thumb-Zone Hero",
        subtitle: "One-tap fitting request anchored in the bottom thumb zone with zero layout shift.",
      },
      {
        image: "/portfolio/sartorial-atelier/m2.jpg",
        title: "Mobile Swatch Carousel",
        subtitle: "Fluid swipeable swatches with tactile haptic feedback and tap-to-expand details.",
      },
      {
        image: "/portfolio/sartorial-atelier/m3.jpg",
        title: "Concierge Handshake",
        subtitle: "Pre-filled WhatsApp consultation message dispatched in under 15 seconds.",
      },
    ],
    timeline: [
      {
        day: "Day 01",
        title: "Discovery & Architectural Skeleton",
        text: "Extracted brand codes, defined typography scales, wireframed conversion layout, and locked the color tokens.",
      },
      {
        day: "Day 02",
        title: "Component Engineering & Imagery",
        text: "Built reusable React cards, optimized responsive image assets, and wired interactive swatch and filter states.",
      },
      {
        day: "Day 03",
        title: "Edge Deploy & QA Optimization",
        text: "Configured WhatsApp deep links, audited Lighthouse 100 metrics, added SEO schema markup, and shipped to Vercel edge.",
      },
    ],
    result: {
      text: "Within 45 days of launch, Sartorial Atelier eliminated booking backlogs and doubled organic client conversions through direct mobile WhatsApp routing without increasing paid acquisition spend.",
      metrics: [
        { label: "Mobile Fitting Inquiries", value: "+240%" },
        { label: "Bounce Rate Reduction", value: "-44%" },
        { label: "Core Web Vitals", value: "100/100" },
      ],
    },
  },

  // 2. Lumiere Bistro (Restaurant - Food)
  {
    slug: "lumiere-bistro",
    title: "Lumière & Oak Bistro",
    category: "Food",
    package: "PKG 02 - GROWTH",
    description:
      "A sensory culinary destination featuring weekly rotating menus, live table reservations, and cellar pairing stories.",
    cover: "/portfolio/lumiere-bistro/cover.jpg",
    heroImage: "/portfolio/lumiere-bistro/hero.jpg",
    scope: {
      client: "Lumière Hospitality Group",
      category: "Artisanal European Bistro & Wine Bar",
      duration: "5 Days Rapid Sprint",
      year: "2026",
    },
    techStack: ["Next.js App Router", "Tailwind CSS", "TypeScript", "Resend API", "Framer Motion"],
    overview:
      "Lumière & Oak Bistro wanted an online presence as warm, atmospheric, and inviting as their wood-fired kitchen. We engineered a multi-page dining showcase that captures table reservations directly, showcases rotating seasonal specials, and drives weekend tasting reservations effortlessly.",
    stats: [
      { label: "Direct Reservations", value: "+185%", helper: "Direct through website bookings" },
      { label: "Average Table Size", value: "+28%", helper: "Tasting menu pre-selection" },
      { label: "Third-party Fee Savings", value: "₹65K/mo", helper: "Bypassing portal commission" },
    ],
    challenge: [
      "The bistro relied on third-party aggregator portals charging steep 18% commissions per booked diner.",
      "Daily changing seasonal menu items required constant manual PDF uploads that were unreadable on smartphone displays.",
      "Weekend private dining inquiries were scattered across email threads, causing lost high-ticket corporate events.",
    ],
    solution: [
      "Engineered an interactive mobile-optimized menu component with live tabs for Brunch, Dinner, and Sommelier Reserves.",
      "Built a seamless reservation flow with real-time party size selection, dietary preference notes, and instant SMS/WhatsApp confirmation.",
      "Designed an immersive spatial ambiance gallery showcasing the timber interior, open kitchen, and candlelight courtyard.",
    ],
    palette: [
      { name: "Smoked Cream", hex: "#F8F5EE", role: "Canvas Background" },
      { name: "Timber Oak", hex: "#E9DFCF", role: "Warm Surface Cards" },
      { name: "Charcoal Slate", hex: "#191613", role: "Editorial Contrast Type" },
      { name: "Ember Red-Orange", hex: "#FF4D2E", role: "Reservation Accent" },
    ],
    fonts: {
      heading: "Inter Display Bold (Refined Optical Kerning)",
      body: "Inter Regular (15px / 1.65 line height)",
      mono: "JetBrains Mono [ TASTING NOTES & CELLAR VINTAGE ]",
    },
    features: [
      {
        icon: "Utensils",
        title: "Dynamic Seasonal Menu",
        text: "Tabbed digital menu updated in seconds, rendering allergen tags, dietary icons, and wine pairings seamlessly.",
      },
      {
        icon: "Calendar",
        title: "Direct Table Reservations",
        text: "Proprietary booking widget routing guest reservations directly to restaurant staff without 3rd party commission fees.",
      },
      {
        icon: "Wine",
        title: "Cellar & Pairing Archive",
        text: "Curated showcase of organic biodynamic wines and seasonal artisanal cocktail creations.",
      },
      {
        icon: "Award",
        title: "Private Dining Concierge",
        text: "Dedicated event tier builder calculating estimated guest minimums and custom coursed menus.",
      },
    ],
    gallery: [
      {
        image: "/portfolio/lumiere-bistro/hero.jpg",
        title: "Warm Gastronomic Hero",
        tag: "Above The Fold",
        caption:
          "Intimate interior photography framed with bold editorial titles and instant 'Reserve a Table' CTA pinned prominently.",
      },
      {
        image: "/portfolio/lumiere-bistro/g1.jpg",
        title: "The Seasonal Tasting Experience",
        tag: "Services & Products",
        caption:
          "Interactive tasting course breakdown highlighting local farm ingredients, course order, and sommelier vintage pairings.",
      },
      {
        image: "/portfolio/lumiere-bistro/g2.jpg",
        title: "Spatial Atmosphere & Seating",
        tag: "Gallery & Work",
        caption:
          "Curated interior photography highlighting the oak counter, open flame kitchen, and private dining mezzanine.",
      },
      {
        image: "/portfolio/lumiere-bistro/g3.jpg",
        title: "Artisanal Table Reservation Module",
        tag: "Contact & Booking",
        caption:
          "Minimalist calendar selector capturing party size, dietary requirements, and celebratory requests with zero friction.",
      },
    ],
    mobileShots: [
      {
        image: "/portfolio/lumiere-bistro/m1.jpg",
        title: "Mobile Table Booking",
        subtitle: "Rapid 3-step reservation completed in under 20 seconds on smartphone devices.",
      },
      {
        image: "/portfolio/lumiere-bistro/m2.jpg",
        title: "Tap-to-Filter Menu",
        subtitle: "Clear vegetarian, gluten-free, and chef special filters designed for small screens.",
      },
      {
        image: "/portfolio/lumiere-bistro/m3.jpg",
        title: "Private Event Inquiry",
        subtitle: "Direct touchpoint to the maître d' for group reservations and anniversary dinners.",
      },
    ],
    timeline: [
      {
        day: "Day 01",
        title: "Menu Architecture & Wireframing",
        text: "Structured the culinary hierarchy, dining categories, and reservation conversion wireframes.",
      },
      {
        day: "Day 02",
        title: "Interactive Components & Palette",
        text: "Developed the tabbed menu system, reservation modal, and warm oak color tokens.",
      },
      {
        day: "Day 03",
        title: "Automated Routing & Review Pass",
        text: "Implemented direct email/WhatsApp alert dispatch to restaurant hosts with customer confirmation payloads.",
      },
    ],
    result: {
      text: "Lumière & Oak transitioned 65% of their total monthly table bookings to their proprietary digital platform within the first 60 days, recouping over ₹65,000 monthly in portal fees.",
      metrics: [
        { label: "Direct Online Bookings", value: "+185%" },
        { label: "Third-party Commission Saved", value: "₹65K/mo" },
        { label: "Page Load Speed", value: "0.41s" },
      ],
    },
  },

  // 3. Atelier Forma (Interior Design Studio - Interior)
  {
    slug: "atelier-forma",
    title: "Atelier Forma Studio",
    category: "Interior",
    package: "PKG 03 - BESPOKE",
    description:
      "A cinematic spatial architecture and interior design portfolio featuring split-screen project walkthroughs and material boards.",
    cover: "/portfolio/atelier-forma/cover.jpg",
    heroImage: "/portfolio/atelier-forma/hero.jpg",
    scope: {
      client: "Atelier Forma Architecture",
      category: "High-End Residential & Commercial Interior Studio",
      duration: "7 Days Bespoke Sprint",
      year: "2026",
    },
    techStack: ["Next.js App Router", "Tailwind CSS", "TypeScript", "Three.js / Canvas", "Framer Motion"],
    overview:
      "Atelier Forma creates sculptural residential sanctuaries and architectural commercial spaces. They required an uncompromising digital monograph that speaks to high-net-worth homeowners and commercial developers through silent luxury, expansive photography grids, and tactile material stories.",
    stats: [
      { label: "Architectural Retainer Wins", value: "₹4.8Cr", helper: "New project commissions won" },
      { label: "Dwell Time on Projects", value: "4m 12s", helper: "Deep visual engagement" },
      { label: "Global Inquiries", value: "+310%", helper: "International design projects" },
    ],
    challenge: [
      "The studio's existing portfolio used cramped photo carousels that diminished the monumental scale and natural light of their completed projects.",
      "Prospective luxury villa clients could not inspect material palettes, stone selections, and spatial layouts with clarity.",
      "Inquiries lacked qualification, requiring hours of partner time answering basic budget and timeline feasibility questions.",
    ],
    solution: [
      "Designed an expansive full-viewport editorial layout with bespoke smooth scroll, asymmetric image pacing, and custom cursor indicators.",
      "Crafted an interactive Materiality Board section highlighting travertine, smoked oak, brushed brass, and acoustic plaster specs.",
      "Engineered an Architectural Commission Questionnaire capturing property location, square footage, and target investment tier.",
    ],
    palette: [
      { name: "Limestone Sand", hex: "#F6F2EA", role: "Pristine Spatial Background" },
      { name: "Travertine Beige", hex: "#ECE4D6", role: "Card Surface Container" },
      { name: "Basalt Black", hex: "#1A1714", role: "Monumental Display Typography" },
      { name: "Terracotta Rust", hex: "#FF4D2E", role: "Precision Architectural Accent" },
    ],
    fonts: {
      heading: "Inter Display ExtraBold (Architectural Monograph)",
      body: "Inter Regular (16px / 1.7 line height)",
      mono: "JetBrains Mono [ SPATIAL DIMENSIONS & SPECIFICATION ]",
    },
    features: [
      {
        icon: "Compass",
        title: "Spatial Case Study Layouts",
        text: "Project monographs alternating between macro architectural perspectives and 1:1 joinery details.",
      },
      {
        icon: "Maximize2",
        title: "Full-Screen Lightbox Experience",
        text: "Lossless uncompressed image viewer with high-DPI rendering for ultra-wide desktop monitors.",
      },
      {
        icon: "Sliders",
        title: "Materiality & Palette Breakdown",
        text: "Detailed specification boards annotating natural stones, timber finishes, and lighting manufacturers.",
      },
      {
        icon: "FileCheck",
        title: "Commission Feasibility Matrix",
        text: "Streamlined consultation pipeline qualifying residential projects exceeding ₹1.5 Crore budgets.",
      },
    ],
    gallery: [
      {
        image: "/portfolio/atelier-forma/hero.jpg",
        title: "Hero Spatial Monograph",
        tag: "Above The Fold",
        caption:
          "Ultra-wide living pavilion hero visual paired with minimalist project title, square footage badge, and completion year.",
      },
      {
        image: "/portfolio/atelier-forma/g1.jpg",
        title: "Materiality & Tactile Elements",
        tag: "Services & Products",
        caption:
          "Curated material grid contrasting honed Roman travertine, fluted oak millwork, and hand-applied lime wash.",
      },
      {
        image: "/portfolio/atelier-forma/g2.jpg",
        title: "Architectural Daylight Studies",
        tag: "Gallery & Work",
        caption:
          "Full-bleed visual studies tracking morning to dusk illumination across minimalist residential geometries.",
      },
      {
        image: "/portfolio/atelier-forma/g3.jpg",
        title: "Private Commission Onboarding",
        tag: "Contact & Commission",
        caption:
          "Bespoke inquiry gateway collecting site blueprints, architectural timelines, and client vision directly.",
      },
    ],
    mobileShots: [
      {
        image: "/portfolio/atelier-forma/m1.jpg",
        title: "Mobile Architecture Feed",
        subtitle: "Edge-to-edge photography with buttery smooth 60fps gesture scrolling.",
      },
      {
        image: "/portfolio/atelier-forma/m2.jpg",
        title: "Material Spec Sheets",
        subtitle: "Accessible accordion drawers revealing vendor provenance and hardware specs.",
      },
      {
        image: "/portfolio/atelier-forma/m3.jpg",
        title: "Architect Consultation",
        subtitle: "Instant direct calendar booking with studio partners for site walk-throughs.",
      },
    ],
    timeline: [
      {
        day: "Day 01",
        title: "Spatial Hierarchy & Brand Articulation",
        text: "Distilled the studio's design philosophy into editorial layout wireframes and typographic rhythm.",
      },
      {
        day: "Day 02",
        title: "Monograph Templates & Lightbox",
        text: "Engineered responsive full-screen gallery views, material spec blocks, and smooth scroll transitions.",
      },
      {
        day: "Day 03",
        title: "Commission Funnel & Global CDN",
        text: "Integrated qualified project questionnaire, verified responsive viewports, and deployed to edge nodes.",
      },
    ],
    result: {
      text: "Atelier Forma secured two landmark luxury residential commissions totaling over ₹4.8 Crores in project value within ninety days of launching their new digital platform.",
      metrics: [
        { label: "New Project Retainers", value: "₹4.8Cr+" },
        { label: "Average Session Duration", value: "4m 12s" },
        { label: "Lighthouse Performance", value: "100/100" },
      ],
    },
  },

  // 4. Solaris Studio (Photography Studio - Photography)
  {
    slug: "solaris-studio",
    title: "Solaris Visuals",
    category: "Photography",
    package: "PKG 01 - STARTER",
    description:
      "A darkroom-inspired visual archive for commercial, editorial, and fashion photography with instant shoot booking.",
    cover: "/portfolio/solaris-studio/cover.jpg",
    heroImage: "/portfolio/solaris-studio/hero.jpg",
    scope: {
      client: "Solaris Visual Studio",
      category: "Commercial & Editorial Photography",
      duration: "3 Days Rapid Sprint",
      year: "2026",
    },
    techStack: ["Next.js App Router", "Tailwind CSS", "TypeScript", "Sharp", "Lucide Icons"],
    overview:
      "Solaris Visuals needed a digital gallery that let commercial agency art directors and luxury fashion houses evaluate image quality, color grading, and lighting expertise at ultra-fast speeds without image compression artifacts.",
    stats: [
      { label: "Editorial Pitch Wins", value: "+210%", helper: "Agency shoots contracted" },
      { label: "Media Load Time", value: "0.32s", helper: "Modern WebP/AVIF compression" },
      { label: "Brand Retention Rate", value: "98%", helper: "Repeat commercial retainers" },
    ],
    challenge: [
      "Heavy high-resolution photography files caused significant page lag on mobile, losing busy creative directors on the move.",
      "The photographer had no centralized hub linking specific commercial campaign categories to direct shoot availability.",
      "Pricing for day rates, usage licensing, and studio rental was confusing and led to endless email back-and-forth.",
    ],
    solution: [
      "Implemented Next.js automated image optimization with multi-density responsive sizes and zero layout shift.",
      "Structured portfolio works into four distinct commercial verticals: Editorial Fashion, Architecture, Brand Still-Life, and Portraiture.",
      "Designed an upfront Shoot Estimator outlining half-day and full-day creative packages with direct booking.",
    ],
    palette: [
      { name: "Alabaster Paper", hex: "#FAF8F4", role: "Gallery Background" },
      { name: "Tonal Gray", hex: "#EAE3D7", role: "Image Frame Border" },
      { name: "Carbon Ink", hex: "#171412", role: "Primary Monograph Type" },
      { name: "Electric Red-Orange", hex: "#FF4D2E", role: "Shoot Booking Accent" },
    ],
    fonts: {
      heading: "Inter Display SemiBold (Editorial Magazine)",
      body: "Inter Regular (15px / 1.6)",
      mono: "JetBrains Mono [ CAMERA EXIF & FOCAL LENGTH ]",
    },
    features: [
      {
        icon: "Camera",
        title: "Lossless High-DPI Galleries",
        text: "Curated imagery optimized for retina screens without blur or compression noise.",
      },
      {
        icon: "SlidersHorizontal",
        title: "Curated Genre Filter",
        text: "Instant client switching between fashion, commercial product, and architectural assignments.",
      },
      {
        icon: "CalendarCheck",
        title: "Live Production Calendar",
        text: "Real-time shoot availability display eliminating scheduling friction for agency producers.",
      },
      {
        icon: "Zap",
        title: "Sub-Second Edge Delivery",
        text: "Images served from global CDN nodes ensuring fast rendering worldwide.",
      },
    ],
    gallery: [
      {
        image: "/portfolio/solaris-studio/hero.jpg",
        title: "Cinematic Exhibition Hero",
        tag: "Above The Fold",
        caption:
          "Expansive visual wall setting an authoritative editorial tone with subtle lens flare gradients.",
      },
      {
        image: "/portfolio/solaris-studio/g1.jpg",
        title: "Commercial Fashion Campaign",
        tag: "Services & Products",
        caption:
          "High-contrast editorial lighting showcase created for international seasonal apparel lookbooks.",
      },
      {
        image: "/portfolio/solaris-studio/g2.jpg",
        title: "Natural Light Spatial Study",
        tag: "Gallery & Work",
        caption:
          "Moody landscape and architectural capture demonstrating master-level exposure and color grading.",
      },
      {
        image: "/portfolio/solaris-studio/g3.jpg",
        title: "Creative Production Booking",
        tag: "Contact & Shoot Inquiry",
        caption:
          "Direct producer inquiry module capturing location, creative brief, and day-rate options.",
      },
    ],
    mobileShots: [
      {
        image: "/portfolio/solaris-studio/m1.jpg",
        title: "Mobile Full-Bleed View",
        subtitle: "Vertical orientation images optimized for edge-to-edge smartphone review.",
      },
      {
        image: "/portfolio/solaris-studio/m2.jpg",
        title: "One-Tap EXIF Info",
        subtitle: "Technical camera and lens details revealed with a simple touch.",
      },
      {
        image: "/portfolio/solaris-studio/m3.jpg",
        title: "Direct WhatsApp Booking",
        subtitle: "Instant producer shoot check with fast pre-filled creative details.",
      },
    ],
    timeline: [
      {
        day: "Day 01",
        title: "Asset Curation & Grid Layout",
        text: "Selected signature portfolio works and designed minimal editorial layouts.",
      },
      {
        day: "Day 02",
        title: "Responsive Optimization",
        text: "Configured multi-density WebP pipelines, zero CLS layouts, and fast category filters.",
      },
      {
        day: "Day 03",
        title: "Production Ingestion & Launch",
        text: "Integrated shoot inquiry forms, tested cross-browser compatibility, and published to edge nodes.",
      },
    ],
    result: {
      text: "Solaris Visuals booked 14 commercial brand campaigns in their first quarter after launch, tripling their client roster from tier-one agencies.",
      metrics: [
        { label: "Agency Shoot Inquiries", value: "+210%" },
        { label: "Mobile Page Load", value: "0.32s" },
        { label: "Client Retainer Growth", value: "3.2x" },
      ],
    },
  },

  // 5. Elysian Living (Real Estate - Real Estate)
  {
    slug: "elysian-estates",
    title: "Elysian Living",
    category: "Real Estate",
    package: "PKG 03 - BESPOKE",
    description:
      "An architectural real estate showcase for ultra-luxury residential towers, private villas, and estate masterplans.",
    cover: "/portfolio/elysian-estates/cover.jpg",
    heroImage: "/portfolio/elysian-estates/hero.jpg",
    scope: {
      client: "Elysian Land & Estates",
      category: "Ultra-Prime Residential Real Estate",
      duration: "7 Days Bespoke Sprint",
      year: "2026",
    },
    techStack: ["Next.js App Router", "Tailwind CSS", "TypeScript", "Lucide Icons", "Framer Motion"],
    overview:
      "Elysian Living develops private residential enclaves and ultra-luxury hill estates. We engineered an architectural digital destination that transforms estate brochures into an interactive, high-trust digital sales gallery for high-net-worth buyers and global investors.",
    stats: [
      { label: "Private Site Visits", value: "+170%", helper: "High-intent buyer tours" },
      { label: "Brochure Downloads", value: "1,450+", helper: "Qualified investor leads" },
      { label: "Inventory Velocity", value: "2.4x", helper: "Faster phase-one sellout" },
    ],
    challenge: [
      "Traditional real estate listing sites felt cluttered, commoditized, and lacked the architectural dignity of luxury estates.",
      "High-net-worth investors requested floor plan specifications and site coordinates without navigating clunky PDF downloads.",
      "Sales agents struggled to track which property amenities resonated most with prospective private buyers.",
    ],
    solution: [
      "Designed a serene, cinematic presentation with warm limestone design tokens, stately typography, and panoramic imagery.",
      "Built an interactive floorplan and amenity selector displaying square footage, finishes, and balcony vistas clearly.",
      "Integrated direct private viewing appointments with concierge WhatsApp integration and automated investor briefing packets.",
    ],
    palette: [
      { name: "Pueblo Sand", hex: "#F9F6F0", role: "Estate Canvas Background" },
      { name: "Warm Limestone", hex: "#EEE5D6", role: "Card Panels & Badges" },
      { name: "Onyx Black", hex: "#1C1814", role: "Architectural Display Typography" },
      { name: "Terracotta Bronze", hex: "#FF4D2E", role: "Viewing Request Accent" },
    ],
    fonts: {
      heading: "Inter Display Bold (Architectural Grandeur)",
      body: "Inter Regular (16px / 1.65 line height)",
      mono: "JetBrains Mono [ PLOT NO. & FLOORPLAN DIMENSIONS ]",
    },
    features: [
      {
        icon: "Home",
        title: "Bespoke Residence Monographs",
        text: "Dedicated digital chapters for each penthouse, duplex, and garden villa.",
      },
      {
        icon: "Compass",
        title: "Masterplan Interactive Guide",
        text: "Spatial breakdown of clubhouses, private helipads, and natural forest trails.",
      },
      {
        icon: "FileText",
        title: "Investor Dossier Download",
        text: "One-click gated access to complete floorplans, price schedules, and payment milestones.",
      },
      {
        icon: "Shield",
        title: "Private Viewing Concierge",
        text: "Seamless scheduling for private helicopter and limousine site visits.",
      },
    ],
    gallery: [
      {
        image: "/portfolio/elysian-estates/hero.jpg",
        title: "Panoramic Estate Overview",
        tag: "Above The Fold",
        caption:
          "Breathtaking dusk rendering of the flagship villa overlooking infinity waters, setting an aspirational tone.",
      },
      {
        image: "/portfolio/elysian-estates/g1.jpg",
        title: "Open-Concept Living Pavilions",
        tag: "Services & Products",
        caption:
          "Interior architecture showcase detailing Italian marble floors, ceiling-height glass doors, and cross-ventilation.",
      },
      {
        image: "/portfolio/elysian-estates/g2.jpg",
        title: "Curated Master Suites & Terraces",
        tag: "Gallery & Work",
        caption:
          "Private suite retreats designed with timber decks and panoramic skyline views.",
      },
      {
        image: "/portfolio/elysian-estates/g3.jpg",
        title: "Private Site Tour Booking",
        tag: "Contact & Concierge",
        caption:
          "VIP invitation form qualifying prospective purchasers and arranging dedicated concierge site visits.",
      },
    ],
    mobileShots: [
      {
        image: "/portfolio/elysian-estates/m1.jpg",
        title: "Mobile Residence Viewer",
        subtitle: "Fluid swipeable property gallery formatted for one-handed smartphone browsing.",
      },
      {
        image: "/portfolio/elysian-estates/m2.jpg",
        title: "Instant Specification Sheet",
        subtitle: "Key specs like built-up area and orientation visible at a glance.",
      },
      {
        image: "/portfolio/elysian-estates/m3.jpg",
        title: "VIP Concierge Call",
        subtitle: "Direct encrypted WhatsApp connection to senior development partners.",
      },
    ],
    timeline: [
      {
        day: "Day 01",
        title: "Masterplan Structuring & Typography",
        text: "Established typographic scale, luxury architectural color tokens, and layout wireframes.",
      },
      {
        day: "Day 02",
        title: "Interactive Plans & Asset Pipeline",
        text: "Engineered responsive floorplan modules and optimized architectural photography.",
      },
      {
        day: "Day 03",
        title: "Concierge Handshake & Edge Deploy",
        text: "Wired VIP booking flows, added Google Structured Data for real estate, and launched globally.",
      },
    ],
    result: {
      text: "Elysian Living closed phase-one villa sales 2.4x faster than projected, generating over 1,450 verified high-net-worth investor inquiries.",
      metrics: [
        { label: "Private Site Visits", value: "+170%" },
        { label: "Verified Buyer Leads", value: "1,450+" },
        { label: "Sales Velocity Increase", value: "2.4x" },
      ],
    },
  },

  // 6. Kaviar Menswear (Direct-to-Consumer Brand - Business)
  {
    slug: "kaviar-menswear",
    title: "Kaviar Menswear",
    category: "Business",
    package: "PKG 02 - GROWTH",
    description:
      "A modern digital flagship for elevated contemporary menswear, essential capsule wardrobes, and direct order workflows.",
    cover: "/portfolio/kaviar-menswear/cover.jpg",
    heroImage: "/portfolio/kaviar-menswear/hero.jpg",
    scope: {
      client: "Kaviar Clothing Co.",
      category: "D2C Menswear & Lifestyle Brand",
      duration: "5 Days Rapid Sprint",
      year: "2026",
    },
    techStack: ["Next.js App Router", "Tailwind CSS", "TypeScript", "Lucide Icons", "Framer Motion"],
    overview:
      "Kaviar Menswear crafts minimalist, high-durability wardrobe staples for modern urban professionals. They needed a high-performance digital flagship that translates the tactile luxury of Japanese cotton and Portuguese knits into frictionless digital conversions.",
    stats: [
      { label: "Conversion Rate", value: "4.8%", helper: "Industry leading checkout rate" },
      { label: "Mobile Revenue Share", value: "78%", helper: "Smooth smartphone checkout" },
      { label: "Cart Abandonment Drop", value: "-38%", helper: "Frictionless direct flow" },
    ],
    challenge: [
      "The brand's previous e-commerce storefront was weighed down by unoptimized plugins and slow third-party checkout scripts.",
      "Mobile shoppers experienced layout jumps and confusing sizing charts, causing elevated return rates.",
      "New seasonal capsule drops lacked editorial storytelling to command premium luxury price points.",
    ],
    solution: [
      "Constructed a clean, lightning-fast digital flagship using Next.js App Router with instantaneous page transitions.",
      "Designed an interactive Capsule Wardrobe builder demonstrating garment pairings and fabric drape.",
      "Engineered an automated WhatsApp order flow and one-click express checkout with zero distracting intermediaries.",
    ],
    palette: [
      { name: "Parchment Cream", hex: "#FAF7F2", role: "Primary Background" },
      { name: "Chalk Surface", hex: "#EDE4D6", role: "Product Cards & Cart" },
      { name: "Obsidian Black", hex: "#181512", role: "Bold Brand Typography" },
      { name: "Crimson Terracotta", hex: "#FF4D2E", role: "Add to Bag & Drop Accent" },
    ],
    fonts: {
      heading: "Inter Display ExtraBold (Modern Fashion Editorial)",
      body: "Inter Regular (15px / 1.6)",
      mono: "JetBrains Mono [ FABRIC COMPOSITION & GSM SPECS ]",
    },
    features: [
      {
        icon: "ShoppingBag",
        title: "Capsule Wardrobe Builder",
        text: "Interactive outfit builder enabling customers to purchase complete coordinated looks in a single tap.",
      },
      {
        icon: "Tag",
        title: "Transparent Provenance Specs",
        text: "Product sheets revealing fabric GSM, origin mills, and factory craftsmanship standards.",
      },
      {
        icon: "CheckCircle",
        title: "Predictive Sizing Matrix",
        text: "Data-backed fit guide reducing returns by matching customer measurements to ideal sizes.",
      },
      {
        icon: "Zap",
        title: "Instant 1-Click Checkout",
        text: "Streamlined express payment integration eliminating traditional multi-step checkout fatigue.",
      },
    ],
    gallery: [
      {
        image: "/portfolio/kaviar-menswear/hero.jpg",
        title: "Seasonal Drop Visual Hero",
        tag: "Above The Fold",
        caption:
          "Minimalist flagship entrance featuring the seasonal collection with direct 'Shop the Drop' callout.",
      },
      {
        image: "/portfolio/kaviar-menswear/g1.jpg",
        title: "Essential Knits & Outerwear",
        tag: "Services & Products",
        caption:
          "Clean product card grid detailing colorways, fabric weights, and tactile weave photography.",
      },
      {
        image: "/portfolio/kaviar-menswear/g2.jpg",
        title: "Editorial Lookbook Styling",
        tag: "Gallery & Work",
        caption:
          "Street-style editorial imagery demonstrating fit, layering versatility, and natural drape.",
      },
      {
        image: "/portfolio/kaviar-menswear/g3.jpg",
        title: "VIP Drop List & Concierge",
        tag: "Contact & VIP Access",
        caption:
          "Exclusive early-access enrollment for limited edition heavyweight fleece drops.",
      },
    ],
    mobileShots: [
      {
        image: "/portfolio/kaviar-menswear/m1.jpg",
        title: "Sticky Bottom Bag CTA",
        subtitle: "Instant add-to-bag bar anchored conveniently above mobile navigation bars.",
      },
      {
        image: "/portfolio/kaviar-menswear/m2.jpg",
        title: "Touch-Optimized Sizing",
        subtitle: "One-tap size selector with live inventory status indicators.",
      },
      {
        image: "/portfolio/kaviar-menswear/m3.jpg",
        title: "Express WhatsApp Order",
        subtitle: "Direct concierge ordering option for high-volume custom wardrobe orders.",
      },
    ],
    timeline: [
      {
        day: "Day 01",
        title: "Catalog Architecture & Design System",
        text: "Standardized product card tokens, mobile thumb zones, and typographic hierarchy.",
      },
      {
        day: "Day 02",
        title: "Cart Engineering & Micro-Interactions",
        text: "Built sticky bag drawers, fit matrix selectors, and buttery smooth hover transitions.",
      },
      {
        day: "Day 03",
        title: "Express Checkout & Performance Audit",
        text: "Configured zero-friction order flow, audited 100/100 Core Web Vitals, and shipped live.",
      },
    ],
    result: {
      text: "Kaviar Menswear achieved a 4.8% storewide conversion rate in their launch month, with 78% of all revenue originating from mobile smartphone buyers.",
      metrics: [
        { label: "Online Store Conversion", value: "4.8%" },
        { label: "Mobile Revenue Share", value: "78%" },
        { label: "Cart Drop-Off Reduction", value: "-38%" },
      ],
    },
  },
];

export function getProjectBySlug(slug: string): Project | undefined {
  return PROJECTS.find((p) => p.slug === slug);
}

export function getAllProjectSlugs(): string[] {
  return PROJECTS.map((p) => p.slug);
}
