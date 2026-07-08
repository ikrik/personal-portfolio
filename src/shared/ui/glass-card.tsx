import type { ComponentPropsWithoutRef, ReactNode } from "react";
import { cn } from "@/shared/lib/utils";

type RootProps = ComponentPropsWithoutRef<"article"> & {
  accent?: "cyan" | "pink" | "purple" | "green" | "orange";
};

const accentClassName = {
  cyan: "hover:border-primary-bright/60 hover:shadow-[0_0_32px_rgba(0,245,255,0.13)]",
  pink: "hover:border-pink/60 hover:shadow-[0_0_32px_rgba(236,177,255,0.13)]",
  purple:
    "hover:border-secondary-bright/60 hover:shadow-[0_0_32px_rgba(208,91,255,0.13)]",
  green:
    "hover:border-tertiary-bright/60 hover:shadow-[0_0_32px_rgba(59,255,23,0.1)]",
  orange:
    "hover:border-orange/60 hover:shadow-[0_0_32px_rgba(255,184,107,0.12)]",
};

function Root({ accent = "cyan", className, ...props }: RootProps) {
  return (
    <article
      className={cn(
        "glass-surface rounded-xl transition duration-300 hover:-translate-y-1",
        accentClassName[accent],
        className,
      )}
      {...props}
    />
  );
}

function Header({ className, ...props }: ComponentPropsWithoutRef<"div">) {
  return <div className={cn("space-y-2", className)} {...props} />;
}

function Title({ className, ...props }: ComponentPropsWithoutRef<"h3">) {
  return (
    <h3
      className={cn(
        "font-sans text-xl font-semibold tracking-tight text-primary md:text-2xl",
        className,
      )}
      {...props}
    />
  );
}

function Description({ className, ...props }: ComponentPropsWithoutRef<"p">) {
  return (
    <p
      className={cn(
        "text-sm leading-7 text-text-muted md:text-base",
        className,
      )}
      {...props}
    />
  );
}

function Content({ className, ...props }: ComponentPropsWithoutRef<"div">) {
  return <div className={cn("mt-6", className)} {...props} />;
}

function Footer({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return <div className={cn("mt-6", className)}>{children}</div>;
}

export const GlassCard = {
  Root,
  Header,
  Title,
  Description,
  Content,
  Footer,
};
