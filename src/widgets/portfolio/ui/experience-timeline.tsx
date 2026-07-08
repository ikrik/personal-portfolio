import { experiences } from "@/entities/portfolio/model/data";
import { Badge } from "@/shared/ui/badge";
import { GlassCard } from "@/shared/ui/glass-card";
import { BorderGlow } from "@/shared/ui/react-bits";

export function ExperienceTimeline() {
  return (
    <div className="relative mt-14">
      <div className="timeline-line absolute bottom-10 left-4 top-3 hidden w-px md:block" />
      <div className="space-y-7 md:ml-8">
        {experiences.map((experience) => (
          <div className="relative md:pl-12" key={experience.company}>
            <div className="absolute left-[-1.5rem] top-8 hidden size-4 rotate-45 border-2 border-primary-bright bg-background md:block" />
            <BorderGlow
              animated={false}
              backgroundColor="#120F17"
              borderRadius={12}
              colors={["#c084fc", "#f472b6", "#38bdf8"]}
              coneSpread={30}
              edgeSensitivity={6}
              glowColor="40 80 80"
              glowIntensity={1.2}
              glowRadius={60}
              lightBackgroundColor="rgba(255, 255, 255, 0.72)"
              lightBorderColor="rgb(0 169 183 / 24%)"
              lightColors={["#00a9b7", "#b100d9", "#159500"]}
              lightFillOpacity={0.18}
              lightGlowColor="186 92 36"
              lightGlowIntensity={0.7}
              lightShadow="0 1px 2px rgb(15 118 129 / 5%), 0 10px 24px rgb(15 118 129 / 8%)"
            >
              <GlassCard.Root
                accent={experience.accent}
                className="p-6 md:p-8 hover:translate-y-0"
              >
                <div className="flex flex-col justify-between gap-4 md:flex-row">
                  <GlassCard.Header>
                    <GlassCard.Title>{experience.role}</GlassCard.Title>
                    <p className="font-mono text-sm text-primary-bright">
                      {experience.company}
                    </p>
                  </GlassCard.Header>
                  <p className="font-mono text-xs uppercase tracking-[0.14em] text-text-muted">
                    {experience.period}
                  </p>
                </div>
                <GlassCard.Description className="mt-5">
                  {experience.summary}
                </GlassCard.Description>
                <GlassCard.Footer className="flex flex-wrap gap-2">
                  {experience.tags.map((tag) => (
                    <Badge key={tag} tone={experience.accent}>
                      {tag}
                    </Badge>
                  ))}
                </GlassCard.Footer>
              </GlassCard.Root>
            </BorderGlow>
          </div>
        ))}
      </div>
    </div>
  );
}
