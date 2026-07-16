import { capabilityHighlights } from "@/entities/portfolio/model/data";
import { Section } from "@/shared/ui/section";
import { StackGroupsAccordion } from "./stack-groups-accordion";

export function StackSection() {
  return (
    <Section.Root id="stack">
      <Section.Container>
        <Section.Eyebrow>The Arsenal</Section.Eyebrow>
        <Section.Title>
          Tools selected for clarity, speed, and maintainability.
        </Section.Title>
        <Section.Intro>
          A pragmatic stack for building fast interfaces, separating data
          concerns, maintaining shared UI systems, and shipping reliably.
        </Section.Intro>

        <div className="mt-8 md:mt-14 grid gap-8 md:grid-cols-3 md:items-start">
          <StackGroupsAccordion />

          <div className="grid gap-4 sm:grid-cols-2 md:col-span-2">
            {capabilityHighlights.map((item) => {
              const Icon = item.icon;

              return (
                <div
                  className="flex items-center gap-4 rounded-lg border border-border bg-surface-elevated/35 p-4"
                  key={item.text}
                >
                  <Icon
                    aria-hidden
                    className="size-5 shrink-0 text-primary-bright"
                  />
                  <p className="text-sm leading-5 md:leading-7 text-text-muted">
                    {item.text}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </Section.Container>
    </Section.Root>
  );
}
