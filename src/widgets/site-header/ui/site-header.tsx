import { ArrowUpRight, Menu } from "lucide-react";
import { navigation, profile } from "@/entities/portfolio/model/data";
import { ThemeToggle } from "@/features/theme-toggle/ui/theme-toggle";
import { cn } from "@/shared/lib/utils";
import { Button } from "@/shared/ui/button";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/5 bg-background/55 backdrop-blur-2xl">
      <nav className="mx-auto flex h-16 w-full max-w-[1200px] items-center justify-between px-5 md:px-6">
        <a
          aria-label="Krikor Tsakmatzian home"
          className="group flex cursor-pointer items-center gap-3 rounded-lg transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary-bright"
          href="#top"
        >
          <span className="grid size-9 place-items-center rounded-lg border border-primary-bright/30 bg-primary-bright/10 font-sans text-lg font-bold text-primary transition group-hover:border-primary-bright group-hover:shadow-[0_0_24px_rgba(0,245,255,0.2)]">
            {profile.initials}
          </span>
          <span className="hidden font-mono text-xs uppercase tracking-[0.16em] text-text-muted sm:block">
            {profile.name}
          </span>
        </a>

        <div className="hidden items-center gap-7 md:flex">
          {navigation.map((item) => (
            <a
              className="group relative rounded-lg px-2 py-2 font-mono text-xs uppercase tracking-[0.14em] text-text-muted transition hover:bg-surface-elevated hover:text-primary focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary-bright"
              href={item.href}
              key={item.href}
            >
              {item.label}
              <span className="absolute inset-x-2 -bottom-0.5 h-px origin-left scale-x-0 bg-primary-bright transition group-hover:scale-x-100 group-focus-visible:scale-x-100" />
            </a>
          ))}
        </div>

        <div className="flex items-center gap-2">
          <ThemeToggle />
          <Button asChild className="hidden md:inline-flex" size="default">
            <a href="#contact">
              Contact
              <ArrowUpRight aria-hidden className="size-4" />
            </a>
          </Button>
          <details className="group relative md:hidden">
            <summary
              aria-label="Open navigation"
              className={cn(
                "inline-flex size-11 cursor-pointer list-none items-center justify-center rounded-lg text-text-muted transition hover:bg-surface-elevated hover:text-primary",
                "[&::-webkit-details-marker]:hidden",
              )}
            >
              <Menu aria-hidden className="size-5" />
            </summary>
            <div className="bg-background/90 backdrop-blur-2xl absolute right-0 top-13 w-56 rounded-xl p-2 drop-shadow-lg">
              {navigation.map((item) => (
                <a
                  className="block cursor-pointer rounded-lg border border-transparent px-4 py-3 font-mono text-xs uppercase tracking-[0.14em] text-text-muted transition hover:border-primary-bright/30 hover:bg-surface-elevated hover:text-primary focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-bright"
                  href={item.href}
                  key={item.href}
                >
                  {item.label}
                </a>
              ))}
            </div>
          </details>
        </div>
      </nav>
    </header>
  );
}
