import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import { projects } from "@/entities/portfolio/model/data";
import { Badge } from "@/shared/ui/badge";
import { Button } from "@/shared/ui/button";
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
          Selected public repositories covering full-stack dashboards, Angular
          architecture, game logic, microservices, and this portfolio system.
        </Section.Intro>

        <div className="mt-8 md:mt-14 grid gap-6 lg:grid-cols-12">
          <GlassCard.Root
            accent={featuredProject.accent}
            className="flex flex-col overflow-hidden lg:col-span-8"
          >
            <div className="relative h-64 overflow-hidden bg-surface-elevated">
              <Image
                alt={
                  featuredProject.imageAlt ??
                  `${featuredProject.title} project preview`
                }
                className="object-cover grayscale transition duration-700 hover:scale-105 hover:grayscale-0"
                fill
                loading="lazy"
                sizes="100vw"
                src={featuredProject.image ?? "/images/nature-restorer.png"}
              />
            </div>
            <div className="flex flex-1 flex-col p-6 md:p-8">
              <div className="flex items-start justify-between gap-6">
                <GlassCard.Header>
                  <p className="font-mono text-xs font-semibold uppercase tracking-[0.14em] text-primary-bright">
                    {featuredProject.category}
                  </p>
                  <GlassCard.Title>{featuredProject.title}</GlassCard.Title>
                </GlassCard.Header>
              </div>
              <GlassCard.Description className="mt-5 max-w-2xl">
                {featuredProject.summary}
              </GlassCard.Description>
              <GlassCard.Footer className="flex flex-wrap gap-2 pb-5">
                {featuredProject.tags.map((tag) => (
                  <Badge key={tag} tone={featuredProject.accent}>
                    {tag}
                  </Badge>
                ))}
              </GlassCard.Footer>
              {featuredProject.liveHref ? (
                <div className="mt-auto flex flex-wrap justify-end gap-3 pt-5">
                  <Button asChild size="default" variant="primary">
                    <a
                      href={featuredProject.liveHref}
                      rel="noreferrer"
                      target="_blank"
                    >
                      Live Demo
                      <ArrowUpRight aria-hidden className="size-4" />
                    </a>
                  </Button>
                  <Button asChild size="default" variant="glass">
                    <a
                      href={featuredProject.href}
                      rel="noreferrer"
                      target="_blank"
                    >
                      Source
                      <ArrowUpRight aria-hidden className="size-4" />
                    </a>
                  </Button>
                </div>
              ) : null}
            </div>
          </GlassCard.Root>

          {secondaryProjects.map((project) => (
            <GlassCard.Root
              accent={project.accent}
              className="flex h-full flex-col p-6 lg:col-span-4"
              key={project.title}
            >
              <p className="mb-3 font-mono text-xs font-semibold uppercase tracking-[0.14em] text-primary-bright">
                {project.category}
              </p>
              <div className="flex items-start justify-between gap-4">
                <GlassCard.Title>{project.title}</GlassCard.Title>
                <a
                  aria-label={`Open ${project.title} repository`}
                  className="grid size-9 shrink-0 place-items-center rounded-lg border border-border text-primary transition hover:border-primary-bright hover:text-primary-bright"
                  href={project.href}
                  rel="noreferrer"
                  target="_blank"
                >
                  <ArrowUpRight aria-hidden className="size-4" />
                </a>
              </div>
              {project.image ? (
                <div className="-mx-6 mt-5 h-36 overflow-hidden bg-surface-elevated relative">
                  <Image
                    alt={project.imageAlt ?? `${project.title} project preview`}
                    className="object-cover grayscale transition duration-700 hover:scale-105 hover:grayscale-0"
                    fill
                    loading="lazy"
                    sizes="(min-width: 1024px) 33vw, 100vw"
                    src={project.image}
                  />
                </div>
              ) : null}
              <GlassCard.Description className="mt-4">
                {project.summary}
              </GlassCard.Description>
              <GlassCard.Footer className="flex flex-wrap gap-2 pb-5">
                {project.tags.map((tag) => (
                  <Badge key={tag} tone={project.accent}>
                    {tag}
                  </Badge>
                ))}
              </GlassCard.Footer>
              {project.liveHref ? (
                <div className="mt-auto flex justify-end pt-4">
                  <Button
                    asChild
                    className="h-10 px-4"
                    size="default"
                    variant="glass"
                  >
                    <a href={project.liveHref} rel="noreferrer" target="_blank">
                      Live Demo
                      <ArrowUpRight aria-hidden className="size-4" />
                    </a>
                  </Button>
                </div>
              ) : null}
            </GlassCard.Root>
          ))}
        </div>
      </Section.Container>
    </Section.Root>
  );
}
