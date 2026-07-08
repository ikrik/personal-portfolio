# Krikor Tsakmatzian Portfolio

Personal portfolio website for Krikor Tsakmatzian, a Senior Frontend /
Full-stack engineer with a strong frontend focus and 10+ years of experience.

The site is a responsive one-page portfolio built with Next.js. It presents the
hero section, experience timeline, earlier roles, part-time freelance projects,
technology stack, selected projects, and contact links.

The visual direction was designed in Google Stitch and implemented as a
production-ready Next.js app with dark mode as the default theme and a light mode
toggle.

## Tech Stack

- Next.js 16 with App Router
- React 19
- TypeScript
- Tailwind CSS 4
- shadcn/Radix-style reusable UI primitives
- React Bits visual components
- Biome for linting and formatting
- pnpm as the package manager

## Project Structure

The app follows a Feature-Sliced Design inspired structure:

```txt
src/
  app/                     Next.js app entry, metadata, global styles
  entities/portfolio/      Portfolio data and domain types
  features/theme-toggle/   Theme toggle feature
  shared/                  Shared UI primitives, utilities, React Bits pieces
  widgets/                 Page-level sections and layout widgets
```

Main portfolio content lives in:

```txt
src/entities/portfolio/model/data.ts
```

Most visual sections live in:

```txt
src/widgets/portfolio/ui/
```

## Getting Started

Install dependencies:

```bash
pnpm install
```

Run the development server:

```bash
pnpm dev
```

Open:

```txt
http://localhost:3000
```

## Available Scripts

```bash
pnpm dev
```

Starts the local Next.js development server.

```bash
pnpm build
```

Creates a production build.

```bash
pnpm start
```

Runs the production build locally.

```bash
pnpm lint
```

Runs Biome checks.

```bash
pnpm format
```

Formats the codebase with Biome.

## Notes

- The app is server-rendered where possible for better SEO.
- Global metadata is configured in `src/app/layout.tsx`.
- Portfolio data is centralized so content updates do not require changing the
  section components.
- Shared components are kept small and reusable to keep the UI consistent across
  the page.
