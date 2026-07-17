import { identity } from "@/entities/portfolio/model/identity";

export const dynamic = "force-static";

export function GET() {
  return Response.json(
    {
      name: identity.name,
      preferredName: identity.preferredName,
      aliases: identity.aliases,
      canonicalId: `${identity.website}/#person`,
      role: identity.jobTitle,
      location: identity.location,
      summary: identity.professionalSummary,
      skills: identity.skills,
      technologies: identity.technologies,
      sameAs: [identity.links.github, identity.links.linkedin],
      links: {
        website: identity.links.website,
        github: identity.links.github,
        linkedin: identity.links.linkedin,
        resume: identity.links.resume,
        email: identity.email,
      },
    },
    {
      headers: {
        "Cache-Control":
          "public, max-age=3600, s-maxage=86400, stale-while-revalidate=604800",
      },
    },
  );
}
