import { ArrowRight, MapPin } from "lucide-react";
import Image from "next/image";
import { profile } from "@/entities/portfolio/model/data";
import { Badge } from "@/shared/ui/badge";
import { Button } from "@/shared/ui/button";
import { DecryptedText, ElectricBorder, Threads } from "@/shared/ui/react-bits";

export function HeroSection() {
  return (
    <section
      aria-labelledby="hero-heading"
      className="relative min-h-[calc(100svh-4rem)]"
      id="top"
    >
      <div className="absolute inset-0 opacity-15">
        <Threads amplitude={3.5} distance={-0.7} enableMouseInteraction />
      </div>
      <div className="relative mx-auto flex w-full min-h-[calc(100svh-4rem)] max-w-[1200px] flex-col justify-center gap-14 px-5 py-6 md:grid md:grid-cols-[1.05fr_0.95fr] md:px-6 md:py-20">
        <div className="flex flex-col justify-center">
          <Badge className="mb-6 md:mb-8 w-fit" pulse>
            Available for roles
          </Badge>
          <p className="mb-8 md:mb-5 flex items-center gap-2 font-mono text-xs uppercase tracking-[0.16em] text-text-muted">
            <MapPin aria-hidden className="size-6 text-primary-bright" />
            <span className="text-text-muted text-xs md:text-sm">
              {profile.location} / {profile.role}{" "}
              <span className="text-text-muted text-xs">
                ({profile.positioning})
              </span>
            </span>
          </p>
          <h1
            className="neon-text max-w-4xl font-sans text-4xl md:text-5xl font-bold leading-[0.95] tracking-tight text-primary sm:text-6xl md:text-7xl"
            id="hero-heading"
          >
            Frontend Enthusiast{" "}
            <span className="md:block pt-2 text-linear-gradient">
              building scalable systems.
            </span>
          </h1>
          <p className="mt-8 max-w-2xl text-base md:text-lg leading-7 md:leading-8 text-text-muted">
            {profile.summary}
          </p>
          <div className="mt-5 flex items-center gap-3">
            <a
              aria-label="Visit Krikor's GitHub profile"
              className="grid size-11 place-items-center rounded-full border border-primary-bright/25 bg-background/55 text-text-muted transition hover:-translate-y-0.5 hover:border-primary-bright/70 hover:text-primary-bright hover:shadow-[0_0_20px_rgba(0,245,255,0.16)] focus-visible:outline-2 focus-visible:outline-offset-3 focus-visible:outline-primary-bright"
              href={profile.links.github}
              rel="noopener noreferrer"
              target="_blank"
            >
              <svg aria-hidden className="size-5" viewBox="0 0 24 24">
                <title>GitHub</title>
                <path
                  d="M12 .7a11.5 11.5 0 0 0-3.64 22.41c.58.1.79-.25.79-.56v-2.24c-3.22.7-3.9-1.37-3.9-1.37-.52-1.34-1.28-1.7-1.28-1.7-1.05-.72.08-.7.08-.7 1.16.08 1.77 1.19 1.77 1.19 1.03 1.77 2.7 1.26 3.36.96.1-.75.4-1.26.73-1.55-2.57-.29-5.27-1.28-5.27-5.68 0-1.26.45-2.28 1.18-3.09-.12-.29-.51-1.47.11-3.05 0 0 .96-.31 3.16 1.18a10.9 10.9 0 0 1 5.75 0c2.2-1.5 3.16-1.18 3.16-1.18.62 1.58.23 2.76.11 3.05.74.81 1.18 1.83 1.18 3.09 0 4.41-2.71 5.38-5.29 5.67.42.36.79 1.06.79 2.14v3.18c0 .31.21.67.8.56A11.5 11.5 0 0 0 12 .7Z"
                  fill="currentColor"
                />
              </svg>
              <span className="sr-only">GitHub</span>
            </a>
            <a
              aria-label="Visit Krikor's LinkedIn profile"
              className="grid size-11 place-items-center rounded-full border border-secondary-bright/25 bg-background/55 text-text-muted transition hover:-translate-y-0.5 hover:border-secondary-bright/70 hover:text-secondary-bright hover:shadow-[0_0_20px_rgba(208,91,255,0.16)] focus-visible:outline-2 focus-visible:outline-offset-3 focus-visible:outline-secondary-bright"
              href={profile.links.linkedin}
              rel="noopener noreferrer"
              target="_blank"
            >
              <svg aria-hidden className="size-5" viewBox="0 0 24 24">
                <title>LinkedIn</title>
                <path
                  d="M20.45 20.45h-3.56v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.35V9h3.42v1.56h.04c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28ZM5.34 7.43a2.07 2.07 0 1 1 0-4.13 2.07 2.07 0 0 1 0 4.13Zm1.78 13.02H3.56V9h3.56v11.45ZM22.23 0H1.77C.79 0 0 .77 0 1.73v20.54C0 23.23.79 24 1.77 24h20.46c.98 0 1.77-.77 1.77-1.73V1.73C24 .77 23.21 0 22.23 0Z"
                  fill="currentColor"
                />
              </svg>
              <span className="sr-only">LinkedIn</span>
            </a>
          </div>
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

        <div className="flex flex-col items-center justify-center md:items-end">
          <ElectricBorder
            color="#00f5ff" //"#7df9ff"
            speed={1.5}
            chaos={0.03}
            className="group relative w-full max-w-[28rem] rounded-[2.25rem]"
          >
            <div className="group relative w-full max-w-[28rem] cursor-pointer select-none">
              <div className="absolute -inset-3 rounded-[2.25rem] bg-gradient-to-r from-primary-bright via-pink to-secondary-bright opacity-40 blur-2xl transition duration-700 md:opacity-20 md:group-hover:opacity-40" />
              <div className="glass-surface relative overflow-hidden rounded-[2rem] p-4 shadow-[0_24px_80px_rgba(0,0,0,0.28)] md:p-5">
                <div className="mb-4 flex items-center justify-between rounded-lg border border-primary-bright/15 bg-background/55 px-4 py-3 font-mono text-[0.68rem] uppercase tracking-[0.14em] text-text-muted">
                  <span className="flex items-center gap-2">
                    <span className="text-primary-bright">$</span>{" "}
                    <DecryptedText
                      sequential={true}
                      maxIterations={7}
                      className="revealed"
                      encryptedClassName="encrypted"
                      animateOn="view"
                      text="avatar.render()"
                    />
                  </span>
                  <span className="flex items-center gap-2 text-tertiary-bright">
                    <span aria-hidden className="relative flex size-2">
                      <span className="absolute inline-flex size-full animate-ping rounded-full bg-tertiary-bright opacity-75" />
                      <span className="relative inline-flex size-2 rounded-full bg-tertiary-bright shadow-[0_0_12px_rgba(59,255,23,0.85)]" />
                    </span>
                    online
                  </span>
                </div>
                <div className="relative mx-auto aspect-square max-w-[24rem] overflow-hidden rounded-full border border-primary-bright/40 bg-surface-elevated p-1 shadow-[inset_0_0_40px_rgba(0,245,255,0.08)]">
                  <div className="relative size-full overflow-hidden rounded-full">
                    <Image
                      alt="Cartoon-style portrait of Krikor Tsakmatzian"
                      className="scale-105 object-cover grayscale-0 transition duration-700 md:scale-100 md:grayscale md:group-hover:scale-105 md:group-hover:grayscale-0"
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
          </ElectricBorder>
        </div>
      </div>
    </section>
  );
}
