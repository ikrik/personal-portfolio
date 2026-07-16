"use client";

import { ChevronDown } from "lucide-react";
import { useState } from "react";
import { stackGroups } from "@/entities/portfolio/model/data";
import { cn } from "@/shared/lib/utils";
import { Badge } from "@/shared/ui/badge";
import { GlassCard } from "@/shared/ui/glass-card";

const iconToneClassName = {
  cyan: "text-primary-bright",
  pink: "text-pink",
  purple: "text-secondary-bright",
  green: "text-tertiary-bright",
  orange: "text-orange",
};

export function StackGroupsAccordion() {
  const [openGroup, setOpenGroup] = useState<string | null>(null);

  return (
    <div className="grid gap-4 md:col-span-1">
      {stackGroups.map((group, index) => {
        const Icon = group.icon;
        const isOpen = openGroup === group.title;
        const contentId = `stack-group-content-${index}`;

        return (
          <GlassCard.Root
            accent={group.accent}
            className="p-5"
            key={group.title}
          >
            <h3>
              <button
                aria-controls={contentId}
                aria-expanded={isOpen}
                className="group flex w-full cursor-pointer items-center gap-3 rounded-md text-left focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary-bright"
                onClick={() =>
                  setOpenGroup((currentGroup) =>
                    currentGroup === group.title ? null : group.title,
                  )
                }
                type="button"
              >
                <Icon
                  aria-hidden
                  className={`size-5 shrink-0 ${iconToneClassName[group.accent]}`}
                />
                <span className="min-w-0 flex-1 font-mono text-xs font-semibold uppercase tracking-[0.14em] text-primary">
                  {group.title}
                </span>
                <span className="flex items-center gap-1.5 font-mono text-[0.65rem] font-semibold uppercase tracking-[0.1em] text-text-muted transition group-hover:text-primary">
                  {isOpen ? "Collapse" : "Expand"}
                  <ChevronDown
                    aria-hidden
                    className={cn(
                      "size-4 transition-transform duration-300 motion-reduce:transition-none",
                      isOpen ? "rotate-180" : "rotate-0",
                    )}
                  />
                </span>
              </button>
            </h3>
            <div
              aria-hidden={!isOpen}
              className={cn(
                "grid transition-[grid-template-rows,opacity] duration-300 ease-out motion-reduce:transition-none",
                isOpen
                  ? "grid-rows-[1fr] opacity-100"
                  : "grid-rows-[0fr] opacity-0",
              )}
              id={contentId}
            >
              <div className="min-h-0 overflow-hidden">
                <div className="mt-5 flex flex-wrap gap-2 border-border/70 border-t pt-5">
                  {group.items.map((item) => (
                    <Badge key={item} tone={group.accent}>
                      {item}
                    </Badge>
                  ))}
                </div>
              </div>
            </div>
          </GlassCard.Root>
        );
      })}
    </div>
  );
}
