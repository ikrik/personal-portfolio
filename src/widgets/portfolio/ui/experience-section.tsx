import { Section } from "@/shared/ui/section";
import { EarlierRoles } from "./earlier-roles";
import { ExperienceTimeline } from "./experience-timeline";
import { FreelanceProjects } from "./freelance-projects";

export function ExperienceSection() {
  return (
    <Section.Root id="experience">
      <Section.Container>
        <Section.Eyebrow>Professional Experience</Section.Eyebrow>
        <Section.Title>
          Architecture, delivery, and ownership across product teams.
        </Section.Title>
        <Section.Intro>
          A senior engineering path focused on scalable frontend systems,
          product collaboration, maintainable UI architecture, and measurable
          delivery outcomes.
        </Section.Intro>

        <ExperienceTimeline />
        <EarlierRoles />
        <FreelanceProjects />
      </Section.Container>
    </Section.Root>
  );
}
