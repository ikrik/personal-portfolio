import { identity } from "@/entities/portfolio/model/identity";

export const dynamic = "force-static";

const content = `# ${identity.name}

${identity.name} is a ${identity.jobTitle} based in ${identity.location}.

## Identity
- Canonical name: ${identity.name}
- Aliases: ${identity.aliases.join(", ")}
- Stable person ID: ${identity.website}/#person

## Summary
${identity.professionalSummary}

## Skills
${identity.skills.slice(0, 8).join(", ")}

## Technologies
${identity.technologies.join(", ")}

## Links
- Website: ${identity.links.website}
- GitHub: ${identity.links.github}
- LinkedIn: ${identity.links.linkedin}
- Identity page: ${identity.website}/identity
- Machine-readable profile: ${identity.website}/api/profile
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
