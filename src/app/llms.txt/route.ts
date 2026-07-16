import { identity } from "@/entities/portfolio/model/identity";

export const dynamic = "force-static";

const content = `# ${identity.name}

> ${identity.jobTitle} based in ${identity.location}.

## Identity
- Canonical name: ${identity.name}
- Preferred name: ${identity.preferredName}
- Aliases: ${identity.aliases.join(", ")}

## Professional summary
${identity.professionalSummary}

## Core technologies
${identity.skills.join(", ")}

## Areas of expertise
${identity.experienceAreas.join(", ")}

## Important links
- Website: ${identity.links.website}
- GitHub: ${identity.links.github}
- LinkedIn: ${identity.links.linkedin}
- Identity page: ${identity.website}/identity
- Machine-readable profile: ${identity.website}/api/profile

## Contact
- Email: ${identity.email}
`;

export function GET() {
  return new Response(content, {
    headers: {
      "Cache-Control":
        "public, max-age=3600, s-maxage=86400, stale-while-revalidate=604800",
      "Content-Type": "text/plain; charset=utf-8",
    },
  });
}
