export type PortfolioIdentity = {
  name: string;
  preferredName: string;
  aliases: readonly string[];
  initials: string;
  website: string;
  email: string;
  role: string;
  jobTitle: string;
  positioning: string;
  location: string;
  address: {
    city: string;
    country: string;
    countryCode: string;
  };
  headline: string;
  summary: string;
  professionalSummary: string;
  metaDescription: string;
  skills: readonly string[];
  technologies: readonly string[];
  experienceAreas: readonly string[];
  links: {
    website: string;
    github: string;
    linkedin: string;
    resume: string | null;
    email: string;
  };
};

const email = "hello@kriktsakma.dev";

export const identity = {
  name: "Krikor Tsakmatzian",
  preferredName: "Krik",
  aliases: [
    "Krik Tsakmatzian",
    "Krikor Tsakmatzian",
    "Krik Tsakma",
    "Krikor Tsakma",
    "Κρικόρ Τσακματζιάν",
    "Κρίκ Τσακματζιάν",
  ],
  initials: "KT",
  website: "https://kriktsakma.dev",
  email,
  role: "Senior Full-Stack Engineer",
  jobTitle: "Senior Full-Stack Engineer with a strong frontend focus",
  positioning: "Frontend-Focused",
  location: "Athens, Greece",
  address: {
    city: "Athens",
    country: "Greece",
    countryCode: "GR",
  },
  headline: "Senior Full-Stack Engineer building scalable systems.",
  summary:
    "Krikor Tsakmatzian is a Senior Full-Stack Engineer based in Athens, Greece, specializing in high-performance frontend architecture, microfrontends, and AI-driven product experiences. He translates complex requirements into maintainable, accessible, and performant product realities.",
  professionalSummary:
    "Krikor Tsakmatzian is a Senior Full-Stack Engineer with more than 10 years of experience building scalable web applications, SaaS platforms, analytics dashboards, design systems, and data-intensive products. His main expertise is frontend architecture using React, Next.js, Angular, and TypeScript, with additional backend experience in Node.js, NestJS, and Fastify. He has experience with microfrontends, monorepos, BFF architectures, state management, performance optimization, testing, CI/CD, AI interfaces, and long-term product ownership.",
  metaDescription:
    "Krikor Tsakmatzian is a Senior Full-Stack Engineer in Athens specializing in scalable frontend architecture with React, Next.js, Angular, and TypeScript.",
  skills: [
    "Frontend architecture",
    "Full-stack engineering",
    "Scalable web applications",
    "Microfrontends",
    "Design systems",
    "Data-intensive products",
    "Performance optimization",
    "State management",
    "Testing",
    "CI/CD",
    "AI interfaces",
    "Product ownership",
  ],
  technologies: [
    "TypeScript",
    "JavaScript",
    "React",
    "Next.js",
    "Angular",
    "Node.js",
    "NestJS",
    "Fastify",
    "RxJS",
    "Redux Toolkit",
    "React Query",
    "Nx",
    "Storybook",
    "PostgreSQL",
    "Docker",
    "AWS",
  ],
  experienceAreas: [
    "Scalable web applications",
    "SaaS platforms",
    "Analytics dashboards",
    "Design systems",
    "Data-intensive products",
    "Frontend architecture",
    "Microfrontends",
    "Monorepos",
    "BFF architectures",
    "State management",
    "Performance optimization",
    "Testing",
    "CI/CD",
    "AI interfaces",
    "Long-term product ownership",
  ],
  links: {
    website: "https://kriktsakma.dev",
    github: "https://github.com/ikrik",
    linkedin: "https://www.linkedin.com/in/krikor-tsakmatzian/",
    resume: null,
    email: `mailto:${email}`,
  },
} as const satisfies PortfolioIdentity;
