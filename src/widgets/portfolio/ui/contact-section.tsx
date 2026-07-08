import { Mail, MapPin } from "lucide-react";
import { profile } from "@/entities/portfolio/model/data";
import { Button } from "@/shared/ui/button";
import { BlurText } from "@/shared/ui/react-bits";
import { Section } from "@/shared/ui/section";

export function ContactSection() {
  return (
    <Section.Root className="border-t border-border" id="contact">
      <Section.Container className="text-center">
        <p className="mx-auto mb-5 w-fit font-mono text-xs font-semibold uppercase tracking-[0.16em] text-primary-bright">
          Contact
        </p>
        <h2 className="mx-auto max-w-4xl font-sans text-4xl font-bold leading-none tracking-tight text-primary md:text-7xl">
          Let&apos;s build fast, maintainable{" "}
          <span className="bg-gradient-to-r from-primary-bright to-secondary-bright bg-clip-text text-transparent">
            product experiences.
          </span>
        </h2>
        <BlurText
          text="Available for senior frontend and full-stack roles where architecture, product ownership, and a high-quality user experience matter."
          delay={200}
          animateBy="words"
          direction="top"
          className="mx-auto mt-8 max-w-3xl text-lg leading-8 text-text-muted justify-center"
        />
        <a
          className="mt-10 inline-block font-sans text-2xl font-semibold text-primary underline decoration-border underline-offset-8 transition hover:text-primary-bright hover:decoration-primary-bright md:text-3xl"
          href={profile.links.email}
        >
          {profile.email}
        </a>
        <div className="mt-8 flex justify-center gap-7 font-mono text-xs uppercase tracking-[0.14em] text-text-muted">
          <a
            className="cursor-pointer rounded-lg px-2 py-2 transition hover:text-primary hover:underline hover:decoration-primary-bright hover:underline-offset-4 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary-bright"
            href={profile.links.linkedin}
          >
            LinkedIn
          </a>
          <a
            className="cursor-pointer rounded-lg px-2 py-2 transition hover:text-primary hover:underline hover:decoration-primary-bright hover:underline-offset-4 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary-bright"
            href={profile.links.github}
          >
            GitHub
          </a>
          <span className="flex items-center gap-2 rounded-lg bg-surface-elevated px-2 py-2">
            <MapPin aria-hidden className="size-4 text-primary-bright" />
            <span>{profile.location}</span>
          </span>
        </div>
        <Button asChild className="mt-12" size="lg">
          <a href={profile.links.email}>
            <Mail aria-hidden className="size-4" />
            Start a conversation
          </a>
        </Button>
      </Section.Container>
    </Section.Root>
  );
}
