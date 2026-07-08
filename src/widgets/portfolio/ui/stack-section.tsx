import {
  capabilityHighlights,
  stackGroups,
} from "@/entities/portfolio/model/data";
import { Badge } from "@/shared/ui/badge";
import { GlassCard } from "@/shared/ui/glass-card";
import { Section } from "@/shared/ui/section";

const iconToneClassName = {
  cyan: "text-primary-bright",
  pink: "text-pink",
  purple: "text-secondary-bright",
  green: "text-tertiary-bright",
  orange: "text-orange",
};

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

        <div className="mt-14 grid gap-6 lg:grid-cols-6">
          {stackGroups.map((group, index) => {
            const Icon = group.icon;

            return (
              <GlassCard.Root
                accent={group.accent}
                className={
                  index < 2 ? "p-6 lg:col-span-3" : "p-6 lg:col-span-2"
                }
                key={group.title}
              >
                <div className="mb-7 flex items-center gap-3">
                  <Icon
                    aria-hidden
                    className={`size-5 ${iconToneClassName[group.accent]}`}
                  />
                  <h3 className="font-mono text-xs font-semibold uppercase tracking-[0.14em] text-primary">
                    {group.title}
                  </h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <Badge key={item} tone={group.accent}>
                      {item}
                    </Badge>
                  ))}
                </div>
              </GlassCard.Root>
            );
          })}
        </div>

        <div className="mt-8 grid gap-4 lg:grid-cols-5">
          {capabilityHighlights.map((item) => {
            const Icon = item.icon;

            return (
              <div
                className="rounded-lg border border-border bg-surface-elevated/35 p-4"
                key={item.text}
              >
                <Icon aria-hidden className="mb-4 size-5 text-primary-bright" />
                <p className="text-sm leading-7 text-text-muted">{item.text}</p>
              </div>
            );
          })}
        </div>
      </Section.Container>
    </Section.Root>
  );
}
