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
  featured?: boolean;
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
    href: "https://pegasusastro.com/",
    context: "Astronomy automation",
    role: "Senior Front-end Developer",
    period: "Oct 2024 - Jun 2025",
    summary:
      "Desktop and web tooling for automating amateur astronomy and astrophotography workflows.",
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
    title: "Next.js Headless CMS",
    category: "Enterprise SaaS",
    summary:
      "A scalable CMS platform with reusable design system foundations, Clean Architecture, Storybook, Nx monorepo conventions, and server-backed BFF integrations.",
    tags: ["Next.js", "TypeScript", "Storybook", "Nx", "AWS"],
    accent: "cyan",
    featured: true,
  },
  {
    title: "B2B Analytics + AI",
    category: "Data Science",
    summary:
      "Pharmaceutical analytics dashboards paired with an LLM chatbot that returns citation-backed, transparent answers over complex domain data.",
    tags: ["Angular", "OpenAI", "RxJS", "Data Viz"],
    accent: "pink",
  },
  {
    title: "AI Mobile MVP",
    category: "Mobile First",
    summary:
      "React Native and Expo app delivery with Stripe payments and NestJS backend updates to help secure initial funding.",
    tags: ["React Native", "Expo", "Stripe"],
    accent: "purple",
  },
  {
    title: "Microfrontends CMS",
    category: "Architecture",
    summary:
      "Module Federation-based CMS allowing independent deployment, plugin isolation, and faster release flow for product teams.",
    tags: ["React", "Module Federation", "Apollo"],
    accent: "green",
  },
  {
    title: "Expert Matching",
    category: "Automation",
    summary:
      "Chrome extension and rewritten React workflows that reduced manual expert-matching overhead and improved analyst throughput.",
    tags: ["React", "Chrome Extension", "GraphQL"],
    accent: "orange",
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
