import type { ComponentPropsWithoutRef } from "react";
import { cn } from "@/shared/lib/utils";

function Root({ className, ...props }: ComponentPropsWithoutRef<"section">) {
  return (
    <section
      className={cn(
        "progressive-section scroll-mt-28 py-10 md:py-20",
        className,
      )}
      {...props}
    />
  );
}

function Container({ className, ...props }: ComponentPropsWithoutRef<"div">) {
  return (
    <div
      className={cn("mx-auto w-full max-w-[1200px] px-5 md:px-6", className)}
      {...props}
    />
  );
}

function Eyebrow({ className, ...props }: ComponentPropsWithoutRef<"p">) {
  return (
    <p
      className={cn(
        "mb-4 font-mono text-xs font-semibold uppercase tracking-[0.16em] text-primary-bright",
        className,
      )}
      {...props}
    />
  );
}

function Title({ className, ...props }: ComponentPropsWithoutRef<"h2">) {
  return (
    <h2
      className={cn(
        "max-w-3xl font-sans text-3xl font-semibold tracking-tight text-primary md:text-5xl",
        className,
      )}
      {...props}
    />
  );
}

function Intro({ className, ...props }: ComponentPropsWithoutRef<"p">) {
  return (
    <p
      className={cn(
        "mt-5 max-w-2xl text-base leading-8 text-text-muted",
        className,
      )}
      {...props}
    />
  );
}

export const Section = {
  Root,
  Container,
  Eyebrow,
  Title,
  Intro,
};
