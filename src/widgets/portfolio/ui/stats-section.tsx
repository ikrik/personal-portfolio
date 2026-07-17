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
    <Section.Root
      aria-labelledby="portfolio-highlights-heading"
      className="pt-0"
    >
      <Section.Container>
        <h2 className="sr-only" id="portfolio-highlights-heading">
          Portfolio highlights for Krikor Tsakmatzian
        </h2>
        <div className="grid grid-cols-2 gap-2 sm:gap-4 lg:grid-cols-4">
          {stats.map((stat) => {
            const Icon = stat.icon;

            return (
              <GlassCard.Root
                accent={stat.accent}
                className="p-3 sm:p-6"
                key={stat.value}
              >
                <Icon
                  aria-hidden
                  className={`mb-3 size-5 sm:mb-8 sm:size-8 ${iconToneClassName[stat.accent]}`}
                />
                <GlassCard.Title className="text-base sm:text-xl md:text-2xl">
                  {stat.value}
                </GlassCard.Title>
                <GlassCard.Description className="text-xs leading-5 sm:text-sm sm:leading-7 md:text-base">
                  {stat.label}
                </GlassCard.Description>
              </GlassCard.Root>
            );
          })}
        </div>
      </Section.Container>
    </Section.Root>
  );
}
