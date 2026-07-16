import type { Metadata } from "next";
import { identity } from "@/entities/portfolio/model/identity";

export const metadata: Metadata = {
  title: "Identity",
  description: `Canonical identity and professional profile for ${identity.name}, also known as ${identity.preferredName}.`,
  alternates: {
    canonical: "/identity",
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: `${identity.name} — Identity`,
    description: `Canonical identity and professional profile for ${identity.name}, also known as ${identity.preferredName}.`,
    url: "/identity",
    type: "profile",
    locale: "en_US",
    siteName: `${identity.name} Portfolio`,
  },
  twitter: {
    card: "summary",
    title: `${identity.name} — Identity`,
    description: `Canonical identity and professional profile for ${identity.name}, also known as ${identity.preferredName}.`,
  },
};

const linkItems = [
  { label: "Main website", href: identity.links.website },
  { label: "GitHub profile", href: identity.links.github },
  { label: "LinkedIn profile", href: identity.links.linkedin },
  ...(identity.links.resume
    ? [{ label: "Résumé", href: identity.links.resume }]
    : []),
  { label: "Email", href: identity.links.email },
];

export default function IdentityPage() {
  return (
    <main className="min-h-full bg-background px-5 py-12 text-text-muted sm:px-6 md:py-20">
      <article className="mx-auto max-w-3xl">
        <nav aria-label="Identity page navigation" className="mb-10">
          <a
            className="font-mono text-sm text-primary-bright underline decoration-primary-bright/50 underline-offset-4 transition hover:decoration-primary-bright focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary-bright"
            href="/"
          >
            ← Portfolio home
          </a>
        </nav>

        <header className="border-b border-border pb-8">
          <p className="font-mono text-xs uppercase tracking-[0.16em] text-primary-bright">
            Canonical identity
          </p>
          <h1 className="mt-3 text-4xl font-bold tracking-tight text-primary sm:text-5xl">
            {identity.name}
          </h1>
          <p className="mt-4 text-lg text-primary">{identity.jobTitle}</p>
          <address className="mt-2 not-italic">{identity.location}</address>
        </header>

        <div className="space-y-10 py-10 leading-7">
          <section aria-labelledby="about-heading">
            <h2
              className="text-2xl font-semibold text-primary"
              id="about-heading"
            >
              About
            </h2>
            <p className="mt-4">{identity.professionalSummary}</p>
          </section>

          <section aria-labelledby="names-heading">
            <h2
              className="text-2xl font-semibold text-primary"
              id="names-heading"
            >
              Names and aliases
            </h2>
            <dl className="mt-4 grid gap-3 sm:grid-cols-[10rem_1fr]">
              <dt className="font-semibold text-primary">Canonical name</dt>
              <dd>{identity.name}</dd>
              <dt className="font-semibold text-primary">Preferred name</dt>
              <dd>{identity.preferredName}</dd>
            </dl>
            <ul className="mt-5 list-disc space-y-1 pl-5">
              {identity.aliases.map((alias) => (
                <li key={alias}>{alias}</li>
              ))}
            </ul>
          </section>

          <section aria-labelledby="skills-heading">
            <h2
              className="text-2xl font-semibold text-primary"
              id="skills-heading"
            >
              Key skills
            </h2>
            <ul className="mt-4 grid list-disc gap-x-8 gap-y-1 pl-5 sm:grid-cols-2">
              {identity.skills.map((skill) => (
                <li key={skill}>{skill}</li>
              ))}
            </ul>
          </section>

          <section aria-labelledby="experience-areas-heading">
            <h2
              className="text-2xl font-semibold text-primary"
              id="experience-areas-heading"
            >
              Notable experience areas
            </h2>
            <ul className="mt-4 grid list-disc gap-x-8 gap-y-1 pl-5 sm:grid-cols-2">
              {identity.experienceAreas.map((area) => (
                <li key={area}>{area}</li>
              ))}
            </ul>
          </section>

          <section aria-labelledby="links-heading">
            <h2
              className="text-2xl font-semibold text-primary"
              id="links-heading"
            >
              Links and contact
            </h2>
            <ul className="mt-4 space-y-2">
              {linkItems.map((item) => (
                <li key={item.label}>
                  <a
                    className="text-primary-bright underline decoration-primary-bright/50 underline-offset-4 transition hover:decoration-primary-bright focus-visible:outline-2 focus-visible:outline-offset-3 focus-visible:outline-primary-bright"
                    href={item.href}
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </section>
        </div>
      </article>
    </main>
  );
}
