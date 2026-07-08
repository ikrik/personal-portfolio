import { profile } from "@/entities/portfolio/model/data";

export function SiteFooter() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border py-12">
      <div className="mx-auto flex max-w-[1200px] flex-col items-center justify-between gap-6 px-5 text-center md:flex-row md:px-6 md:text-left">
        <a className="font-sans text-2xl font-bold text-primary" href="#top">
          {profile.initials}
        </a>
        <p className="font-mono text-xs text-text-muted">
          © {year} {profile.name}. Built with precision.
        </p>
        <div className="flex gap-5 font-mono text-xs uppercase tracking-[0.14em] text-text-muted">
          <a
            className="transition hover:text-primary"
            href={profile.links.github}
          >
            GitHub
          </a>
          <a
            className="transition hover:text-primary"
            href={profile.links.linkedin}
          >
            LinkedIn
          </a>
          <a
            className="transition hover:text-primary"
            href={profile.links.email}
          >
            Email
          </a>
        </div>
      </div>
    </footer>
  );
}
