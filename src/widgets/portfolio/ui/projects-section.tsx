import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import { projects } from "@/entities/portfolio/model/data";
import { Badge } from "@/shared/ui/badge";
import { GlassCard } from "@/shared/ui/glass-card";
import { Section } from "@/shared/ui/section";

export function ProjectsSection() {
  const [featuredProject, ...secondaryProjects] = projects;

  return (
    <Section.Root id="projects">
      <Section.Container>
        <Section.Eyebrow>Select Work</Section.Eyebrow>
        <Section.Title>
          Product systems shaped around performance and delivery.
        </Section.Title>
        <Section.Intro>
          Selected work across CMS platforms, analytics products, AI-enabled
          interfaces, mobile MVPs, and workflow automation.
        </Section.Intro>

        <div className="mt-14 grid gap-6 lg:grid-cols-12">
          <GlassCard.Root
            accent={featuredProject.accent}
            className="overflow-hidden lg:col-span-8"
          >
            <div className="relative h-64 overflow-hidden bg-surface-elevated">
              <Image
                alt="Futuristic dashboard interface with neon data visualizations"
                className="object-cover grayscale transition duration-700 hover:scale-105 hover:grayscale-0"
                fill
                sizes="(min-width: 1024px) 760px, 100vw"
                src="/images/project-dashboard.png"
              />
            </div>
            <div className="p-6 md:p-8">
              <div className="flex items-start justify-between gap-6">
                <GlassCard.Header>
                  <p className="font-mono text-xs font-semibold uppercase tracking-[0.14em] text-primary-bright">
                    {featuredProject.category}
                  </p>
                  <GlassCard.Title>{featuredProject.title}</GlassCard.Title>
                </GlassCard.Header>
                <a
                  aria-label={`${featuredProject.title} case study`}
                  className="grid size-11 shrink-0 place-items-center rounded-lg border border-border text-primary transition hover:border-primary-bright hover:text-primary-bright"
                  href="#contact"
                >
                  <ArrowUpRight aria-hidden className="size-5" />
                </a>
              </div>
              <GlassCard.Description className="mt-5 max-w-2xl">
                {featuredProject.summary}
              </GlassCard.Description>
              <GlassCard.Footer className="flex flex-wrap gap-2">
                {featuredProject.tags.map((tag) => (
                  <Badge key={tag} tone={featuredProject.accent}>
                    {tag}
                  </Badge>
                ))}
              </GlassCard.Footer>
            </div>
          </GlassCard.Root>

          {secondaryProjects.map((project, index) => (
            <GlassCard.Root
              accent={project.accent}
              className={
                index === 0 ? "p-6 lg:col-span-4" : "p-6 lg:col-span-4"
              }
              key={project.title}
            >
              <p className="mb-3 font-mono text-xs font-semibold uppercase tracking-[0.14em] text-primary-bright">
                {project.category}
              </p>
              <GlassCard.Title>{project.title}</GlassCard.Title>
              <GlassCard.Description className="mt-4">
                {project.summary}
              </GlassCard.Description>
              <GlassCard.Footer className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <Badge key={tag} tone={project.accent}>
                    {tag}
                  </Badge>
                ))}
              </GlassCard.Footer>
            </GlassCard.Root>
          ))}
        </div>
      </Section.Container>
    </Section.Root>
  );
}
