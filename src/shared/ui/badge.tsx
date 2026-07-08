import type { ComponentPropsWithoutRef } from "react";
import { cn } from "@/shared/lib/utils";

type BadgeProps = ComponentPropsWithoutRef<"span"> & {
  tone?: "cyan" | "pink" | "purple" | "green" | "orange" | "muted";
  pulse?: boolean;
};

const toneClassName = {
  cyan: "border-primary-bright/35 bg-primary-bright/10 text-primary-bright",
  pink: "border-pink/35 bg-pink/10 text-pink",
  purple:
    "border-secondary-bright/35 bg-secondary-bright/10 text-secondary-bright",
  green: "border-tertiary-bright/35 bg-tertiary-bright/10 text-tertiary-bright",
  orange: "border-orange/35 bg-orange/10 text-orange",
  muted: "border-border bg-surface-elevated/50 text-text-muted",
};

export function Badge({
  children,
  className,
  pulse,
  tone = "cyan",
  ...props
}: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-2 rounded-full border px-3 py-1 font-mono text-[0.68rem] font-semibold uppercase tracking-[0.12em]",
        toneClassName[tone],
        className,
      )}
      {...props}
    >
      {pulse ? (
        <span className="relative flex size-2">
          <span className="absolute inline-flex size-full animate-ping rounded-full bg-primary-bright opacity-75" />
          <span className="relative inline-flex size-2 rounded-full bg-primary-bright" />
        </span>
      ) : null}
      {children}
    </span>
  );
}
