import { ArrowUpRight } from "lucide-react";
import { freelanceSideProjects } from "@/entities/portfolio/model/data";
import { Badge } from "@/shared/ui/badge";
import { GlassCard } from "@/shared/ui/glass-card";
import { Section } from "@/shared/ui/section";

export function FreelanceProjects() {
  return (
    <div className="mt-20">
      <div className="mb-6 flex flex-col justify-between">
        <Section.Eyebrow>Part-Time Freelance Work</Section.Eyebrow>
        <Section.Title>Selected Client Projects</Section.Title>
        <Section.Intro>
          Freelance collaborations alongside full-time roles, typically scoped
          around focused weekly commitments of 10-25 hours.
        </Section.Intro>
      </div>
      <div className="grid gap-4 lg:grid-cols-3">
        {freelanceSideProjects.map((project) => (
          <GlassCard.Root
            accent={project.accent}
            className="p-5"
            key={project.title}
          >
            <p className="mb-3 font-mono text-xs font-semibold uppercase tracking-[0.14em] text-primary-bright">
              {project.context}
            </p>
            <div className="flex items-start justify-between gap-4">
              <GlassCard.Title className="text-xl">
                <a
                  className="transition hover:text-primary-bright"
                  href={project.href}
                  rel="noreferrer"
                  target="_blank"
                >
                  {project.title}
                </a>
              </GlassCard.Title>
              <a
                aria-label={`Open ${project.title}`}
                className="grid size-9 shrink-0 place-items-center rounded-lg border border-border text-primary transition hover:border-primary-bright hover:text-primary-bright"
                href={project.href}
                rel="noreferrer"
                target="_blank"
              >
                <ArrowUpRight aria-hidden className="size-4" />
              </a>
            </div>
            <div className="mt-4 flex flex-col gap-1 font-mono text-[0.68rem] uppercase tracking-[0.14em] text-text-muted">
              <span>{project.role}</span>
              <span>{project.period}</span>
            </div>
            <GlassCard.Description className="mt-3 text-sm">
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
    </div>
  );
}
