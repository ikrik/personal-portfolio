import { earlierRoles } from "@/entities/portfolio/model/data";
import { GlassCard } from "@/shared/ui/glass-card";

export function EarlierRoles() {
  return (
    <div className="mt-20">
      <p className="mb-4 font-mono text-xs font-semibold uppercase tracking-[0.16em] text-primary-bright">
        Earlier Roles
      </p>
      <div className="grid gap-4 md:grid-cols-3">
        {earlierRoles.map((role) => (
          <GlassCard.Root accent="cyan" className="p-5" key={role.company}>
            <div className="flex flex-col justify-between content-center items-center gap-2 sm:flex-row">
              <GlassCard.Title className="text-lg">
                {role.company}
              </GlassCard.Title>
              <p className="font-mono text-[0.58rem] uppercase tracking-[0.14em] text-text-muted">
                {role.period}
              </p>
            </div>
            <GlassCard.Description className="mt-2 text-sm">
              {role.detail}
            </GlassCard.Description>
          </GlassCard.Root>
        ))}
      </div>
    </div>
  );
}
