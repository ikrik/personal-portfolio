import {
  Activity,
  Blocks,
  Bot,
  BrainCircuit,
  Database,
  Gem,
  History,
  LayoutGrid,
  type LucideIcon,
  Network,
  Rocket,
  ShieldCheck,
  Smartphone,
  Sparkles,
  TerminalSquare,
} from "lucide-react";

export type Accent = "cyan" | "pink" | "purple" | "green" | "orange";

export type Stat = {
  label: string;
  value: string;
  icon: LucideIcon;
  accent: Accent;
};

export type Experience = {
  company: string;
  role: string;
  period: string;
  summary: string;
  tags: string[];
  accent: Accent;
};

export type StackGroup = {
  title: string;
  icon: LucideIcon;
  accent: Accent;
  items: string[];
};

export type Project = {
  title: string;
  category: string;
  summary: string;
  tags: string[];
  accent: Accent;
  href: string;
  featured?: boolean;
  image?: string;
  imageAlt?: string;
  liveHref?: string;
};

export type FreelanceProject = {
  title: string;
  href?: string;
  context: string;
  role: string;
  period: string;
  summary: string;
  tags: string[];
  accent: Accent;
};

export const profile = {
  name: "Krikor Tsakmatzian",
  initials: "KT",
  location: "Athens, Greece",
  email: "gregtsakma@gmail.com",
  role: "Senior Full-Stack Engineer",
  positioning: "Frontend-Focused",
  headline: "Senior Full-Stack Engineer building scalable systems.",
  summary:
    "Specializing in high-performance frontend architecture, microfrontends, and AI-driven product experiences. I translate complex requirements into maintainable, accessible, and performant product realities.",
  links: {
    github: "https://github.com/ikrik",
    linkedin: "https://www.linkedin.com/in/krikor-tsakmatzian/",
    email: "mailto:gregtsakma@gmail.com",
  },
};

export const navigation = [
  { href: "#experience", label: "Experience" },
  { href: "#stack", label: "Stack" },
  { href: "#projects", label: "Projects" },
  { href: "#contact", label: "Contact" },
];

export const stats: Stat[] = [
  {
    label: "Expertise in Engineering",
    value: "10+ Years",
    icon: History,
    accent: "cyan",
  },
  {
    label: "Scalable Frontend Systems",
    value: "Architecture",
    icon: Blocks,
    accent: "pink",
  },
  {
    label: "React / Next.js / Angular",
    value: "Modern Tech",
    icon: TerminalSquare,
    accent: "purple",
  },
  {
    label: "End-to-End Execution",
    value: "Ownership",
    icon: ShieldCheck,
    accent: "green",
  },
];

export const experiences: Experience[] = [
  {
    company: "hiveoptimum.com",
    role: "Founding Frontend Engineer",
    period: "Feb 2020 - Present",
    summary:
      "Leading frontend architecture for a B2B pharmaceutical analytics platform with Angular 8-20, interactive dashboards, data visualization, and an internall LLM-powered chatbot with citation-backed answers.",
    tags: [
      "Angular",
      "AI Chatbot",
      "RxJS",
      "Data Viz",
      "Angular Material",
      "ExpressJS",
      "Heroku",
    ],
    accent: "cyan",
  },
  {
    company: "reydix.com",
    role: "Senior Full-Stack Engineer",
    period: "Mar 2025 - May 2026",
    summary:
      "Owning complex frontend features in a scalable Next.js 15 CMS with Clean Architecture, domain-driven TypeScript, shadcn/ui, Storybook, Atomic Design, and Nx in a monorepo environment combining with Fastify/NestJS services ",
    tags: [
      "Next.js",
      "React",
      "Clean Architecture",
      "Storybook",
      "Atomic Design",
      "Nx",
      "NestJS",
      "Fastify",
    ],
    accent: "pink",
  },
  {
    company: "footura.ai",
    role: "Senior React Native Engineer",
    period: "Aug 2024 - Jan 2026",
    summary:
      "Delivered an AI-powered mobile MVP, hardened Stripe payment environments, and maintained NestJS backend flows for reliable CRUD and product operations.",
    tags: ["React Native", "Expo", "Stripe", "NestJS"],
    accent: "purple",
  },
  {
    company: "cratedb.com",
    role: "Senior React Engineer",
    period: "Apr 2022 - Jun 2024",
    summary:
      "Built microfrontends with Webpack Module Federation, improved load times by 40%, and shipped factory operations tooling with React, Apollo, Redux Toolkit, Storybook, Docker, Jenkins, and Azure.",
    tags: [
      "Microfrontends",
      "GraphQL",
      "Apollo",
      "Redux Toolkit",
      "Azure",
      "MobX",
      "Docker",
    ],
    accent: "green",
  },
  {
    company: "dialecticanet.com",
    role: "Senior React Engineer",
    period: "Mar 2021 - Apr 2022",
    summary:
      "Contributed to the modernization of a large React application, driving delivery through scalable frontend architecture and workflow automation with a custom Chrome extension.",
    tags: [
      "React",
      "GraphQL",
      "Chrome Extension",
      "Redux",
      "Redux Saga",
      "Workflow Automation",
    ],
    accent: "orange",
  },
];

export const earlierRoles = [
  {
    company: "Signal Maritime",
    period: "Oct 2019 - Mar 2021",
    detail: "Vessel management, React, TypeScript, C#, REST APIs",
  },
  {
    company: "Sycada",
    period: "Aug 2016 - Oct 2019",
    detail: "Angular, TypeScript, PWA, offline-first, C# APIs",
  },
  {
    company: "Uala",
    period: "Mar 2015 - Aug 2016",
    detail: "MEAN stack, AngularJS, Node.js, MongoDB, RxJS",
  },
];

export const freelanceSideProjects: FreelanceProject[] = [
  {
    title: "Pegasus ASTRO",
    context: "Astronomy automation",
    role: "Senior Front-end Developer",
    period: "Oct 2024 - Jun 2025",
    summary:
      "Desktop tooling for automating amateur astronomy and astrophotography workflows.",
    tags: [
      "Electron",
      "Next.js",
      "TypeScript",
      "Zustand",
      "DaisyUI",
      "Tailwind CSS",
    ],
    accent: "cyan",
  },
  {
    title: "BNL Immobili",
    href: "https://bnlimmobili.it/",
    context: "Real estate sales / auctions",
    role: "Senior React Developer",
    period: "Sep 2022 - Jul 2024",
    summary:
      "Bank-owned real estate sales and auction platform focused on searchable listings, transactional flows, and maintainable React delivery.",
    tags: ["React", "JavaScript", "Webpack", "Tailwind CSS"],
    accent: "purple",
  },
  {
    title: "mapLab.world",
    context: "BI tool for maps industry",
    role: "React Developer",
    period: "Apr 2020 - May 2023",
    summary:
      "Map-based business intelligence product using geolocation-heavy data views, interactive map layers, and spatial analysis workflows.",
    tags: ["React", "JavaScript", "Kepler.gl", "Mapbox", "Geolocations"],
    accent: "pink",
  },
];

export const stackGroups: StackGroup[] = [
  {
    title: "Frontend",
    icon: LayoutGrid,
    accent: "cyan",
    items: [
      "React",
      "Next.js",
      "Angular",
      "React Native",
      "TypeScript",
      "Clean Architecture",
      "Microfrontends",
      "Feature-Sliced Design",
    ],
  },
  {
    title: "UI Systems",
    icon: Gem,
    accent: "purple",
    items: [
      "shadcn/ui",
      "Tailwind CSS",
      "Storybook",
      "Angular Material",
      "Material UI",
      "Atomic Design",
    ],
  },
  {
    title: "State & Data",
    icon: Activity,
    accent: "pink",
    items: [
      "React Query",
      "Redux Toolkit",
      "NgRx",
      "RxJS",
      "Signals",
      "Apollo",
      "GraphQL",
      "Web Sockets",
    ],
  },
  {
    title: "Backend & Platform",
    icon: Database,
    accent: "green",
    items: [
      "Node.js",
      "NestJS",
      "Fastify",
      "Postgres",
      "Docker",
      "AWS",
      "Azure",
    ],
  },
  {
    title: "Delivery",
    icon: Rocket,
    accent: "orange",
    items: [
      "Nx",
      "pnpm Workspaces",
      "Vitest",
      "Jest",
      "Jenkins",
      "GitLab",
      "Heroku",
    ],
  },
];

export const projects: Project[] = [
  {
    title: "NatureRestorer",
    category: "Full-Stack Dashboard",
    summary:
      "A restoration-site dashboard with authenticated routes, RBAC, admin tooling, biodiversity metrics, Mapbox location context, Prisma, and Supabase-backed PostgreSQL.",
    tags: ["Next.js 16", "React 19", "Prisma", "Supabase", "Mapbox"],
    accent: "cyan",
    href: "https://github.com/ikrik/NatureRestorer",
    featured: true,
    image: "/images/nature-restorer.png",
    imageAlt:
      "NatureRestorer dashboard preview with restoration metrics and map context",
    liveHref: "https://nature-restorer.vercel.app/dashboard",
  },
  {
    title: "Moviescope",
    category: "Angular Architecture",
    summary:
      "An Angular 21 movie SPA using TMDB data, Feature-Sliced Design, NgRx SignalStore, persistence, debounced search, favorites, dialogs, and resilient image loading.",
    tags: ["Angular 21", "NgRx Signals", "TMDB", "RxJS", "Vitest"],
    accent: "pink",
    href: "https://github.com/ikrik/movies-angular-app",
    image: "/images/moviescope.png",
    imageAlt: "Moviescope Angular app interface with movie browsing screens",
    liveHref: "https://ikrik.github.io/movies-angular-app/",
  },
  {
    title: "Tic Tac Toe",
    category: "React Game Logic",
    summary:
      "A client-side Tic Tac Toe app focused on rule correctness, accessibility, clean separation between domain and UI, two game modes, and testable AI heuristics.",
    tags: ["React 19", "TypeScript", "Vite", "Vitest", "Radix UI"],
    accent: "purple",
    href: "https://github.com/ikrik/Tic-Tac-Toe",
    liveHref: "https://tic-tac-toe-accessible-game.vercel.app/",
  },
  {
    title: "Event Management",
    category: "Microservices",
    summary:
      "A Dockerized event management system with a Next.js frontend, NestJS API gateway, NestJS event microservice, TCP transport, search, pagination, and event CRUD flows.",
    tags: ["Next.js 15", "NestJS", "Docker", "SWR", "Microservices"],
    accent: "green",
    href: "https://github.com/ikrik/Event-management",
  },
  {
    title: "Personal Portfolio",
    category: "Portfolio System",
    summary:
      "This portfolio implementation: a responsive, SEO-minded one-page Next.js app built from a Google Stitch design with Feature-Sliced Design, theme support, and reusable UI primitives.",
    tags: ["Next.js 16", "Tailwind CSS", "Biome", "React Bits"],
    accent: "orange",
    href: "https://github.com/ikrik/personal-portfolio",
  },
];

export const capabilityHighlights = [
  {
    icon: Network,
    text: "Separation of server and client state with React Query, Redux Toolkit, Apollo, and lightweight stores.",
  },
  {
    icon: BrainCircuit,
    text: "Product-minded architecture across BFF layers, backend services, analytics workflows, and AI interfaces.",
  },
  {
    icon: Smartphone,
    text: "Responsive web and mobile app delivery across React, Next.js, Angular, React Native, and Expo.",
  },
  {
    icon: Bot,
    text: "LLM-powered interfaces with explainability, citation-backed responses, and domain-heavy UX clarity.",
  },
  {
    icon: Sparkles,
    text: "Reusable component systems with shadcn/ui, Tailwind, Storybook, Atomic Design, and accessibility standards.",
  },
];
