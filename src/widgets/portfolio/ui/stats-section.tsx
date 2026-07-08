import { stats } from "@/entities/portfolio/model/data";
import { GlassCard } from "@/shared/ui/glass-card";
import { Section } from "@/shared/ui/section";

const iconToneClassName = {
  cyan: "text-primary-bright",
  pink: "text-pink",
  purple: "text-secondary-bright",
  green: "text-tertiary-bright",
  orange: "text-orange",
};

export function StatsSection() {
  return (
    <Section.Root className="pt-0">
      <Section.Container>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat) => {
            const Icon = stat.icon;

            return (
              <GlassCard.Root
                accent={stat.accent}
                className="p-6"
                key={stat.value}
              >
                <Icon
                  aria-hidden
                  className={`mb-8 size-8 ${iconToneClassName[stat.accent]}`}
                />
                <GlassCard.Title>{stat.value}</GlassCard.Title>
                <GlassCard.Description>{stat.label}</GlassCard.Description>
              </GlassCard.Root>
            );
          })}
        </div>
      </Section.Container>
    </Section.Root>
  );
}
