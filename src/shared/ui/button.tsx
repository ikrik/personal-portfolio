import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import type { ComponentPropsWithoutRef } from "react";
import { cn } from "@/shared/lib/utils";

const buttonVariants = cva(
  "inline-flex h-12 items-center justify-center gap-2 rounded-lg px-5 font-mono text-xs font-semibold uppercase tracking-[0.12em] transition duration-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary-bright disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        primary:
          "bg-primary-bright text-black shadow-[0_0_28px_rgba(0,245,255,0.22)] hover:bg-primary hover:text-background",
        glass:
          "glass-surface text-primary hover:border-primary-bright/70 hover:text-primary-bright hover:shadow-[0_0_30px_rgba(0,245,255,0.1)]",
        ghost: "text-text-muted hover:bg-surface-elevated hover:text-primary",
      },
      size: {
        default: "h-12 px-5",
        lg: "h-14 px-7",
        icon: "h-11 w-11 px-0",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "default",
    },
  },
);

type ButtonProps = ComponentPropsWithoutRef<"button"> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean;
  };

export function Button({
  asChild,
  className,
  size,
  variant,
  ...props
}: ButtonProps) {
  const Comp = asChild ? Slot : "button";

  return (
    <Comp
      className={cn(buttonVariants({ variant, size }), className)}
      {...props}
    />
  );
}
