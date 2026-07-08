import { ArrowRight, MapPin } from "lucide-react";
import Image from "next/image";
import { profile } from "@/entities/portfolio/model/data";
import { Badge } from "@/shared/ui/badge";
import { Button } from "@/shared/ui/button";
import Threads from "@/shared/ui/react-bits/threads";

export function HeroSection() {
  return (
    <section id="top" className="relative min-h-[calc(100svh-4rem)]">
      <div className="absolute inset-0 opacity-15">
        <Threads amplitude={3.5} distance={-0.7} enableMouseInteraction />
      </div>
      <section
        id="top"
        className="relative mx-auto flex w-full min-h-[calc(100svh-4rem)] max-w-[1200px] flex-col justify-center gap-14 px-5 py-10 md:grid md:grid-cols-[1.05fr_0.95fr] md:px-6 md:py-20"
      >
        <div className="flex flex-col justify-center">
          <Badge className="mb-8 w-fit" pulse>
            Available for roles
          </Badge>
          <p className="mb-5 flex items-center gap-2 font-mono text-xs uppercase tracking-[0.16em] text-text-muted">
            <MapPin aria-hidden className="size-6 text-primary-bright" />
            <span className="text-text-muted text-sm">
              {profile.location} / {profile.role}{" "}
              <span className="text-text-muted text-xs">
                ({profile.positioning})
              </span>
            </span>
          </p>
          <h1 className="neon-text max-w-4xl font-sans text-5xl font-bold leading-[0.95] tracking-tight text-primary sm:text-6xl md:text-7xl">
            Front-end Enthousiast{" "}
            <span className="md:block pt-2 text-linear-gradient">
              building scalable systems.
            </span>
          </h1>
          <p className="mt-8 max-w-2xl text-lg leading-8 text-text-muted">
            {profile.summary}
          </p>
          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <Button asChild size="lg">
              <a href="#experience">
                View experience
                <ArrowRight aria-hidden className="size-4" />
              </a>
            </Button>
            <Button asChild size="lg" variant="glass">
              <a href="#contact">Get in touch</a>
            </Button>
          </div>
        </div>

        <div className="flex items-center justify-center md:justify-end">
          <div className="group relative w-full max-w-[28rem]">
            <div className="absolute -inset-3 rounded-[2.25rem] bg-gradient-to-r from-primary-bright via-pink to-secondary-bright opacity-20 blur-2xl transition duration-700 group-hover:opacity-40" />
            <div className="glass-surface relative overflow-hidden rounded-[2rem] p-4 shadow-[0_24px_80px_rgba(0,0,0,0.28)] md:p-5">
              <div className="mb-4 flex items-center justify-between rounded-lg border border-primary-bright/15 bg-background/55 px-4 py-3 font-mono text-[0.68rem] uppercase tracking-[0.14em] text-text-muted">
                <span>
                  <span className="text-primary-bright">$</span>{" "}
                  <span className="text-primary">avatar.render()</span>
                </span>
                <span className="flex items-center gap-2 text-tertiary-bright">
                  <span className="size-1.5 rounded-full bg-tertiary-bright shadow-[0_0_12px_rgba(59,255,23,0.85)]" />
                  online
                </span>
              </div>
              <div className="relative mx-auto aspect-square max-w-[24rem] overflow-hidden rounded-full border border-primary-bright/40 bg-surface-elevated p-1 shadow-[inset_0_0_40px_rgba(0,245,255,0.08)]">
                <div className="relative size-full overflow-hidden rounded-full">
                  <Image
                    alt="Cartoon-style portrait of Krikor Tsakmatzian"
                    className="object-cover grayscale transition duration-700 hover:scale-105 hover:grayscale-0"
                    fill
                    priority
                    sizes="(min-width: 768px) 384px, 80vw"
                    src="/images/avatar.jpg"
                  />
                  <div className="pointer-events-none absolute inset-0 rounded-full bg-[radial-gradient(circle_at_50%_25%,transparent_38%,rgba(0,0,0,0.3)_100%)]" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </section>
  );
}
