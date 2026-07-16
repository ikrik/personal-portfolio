import {
  earlierRoles,
  experiences,
  freelanceSideProjects,
  projects,
} from "@/entities/portfolio/model/data";
import { identity } from "@/entities/portfolio/model/identity";

export const dynamic = "force-static";

const currentExperience = experiences
  .map(
    (item) =>
      `### ${item.role} — ${item.company}\n- Period: ${item.period}\n- ${item.summary}\n- Technologies: ${item.tags.join(", ")}`,
  )
  .join("\n\n");

const previousExperience = earlierRoles
  .map((item) => `- ${item.company} (${item.period}): ${item.detail}`)
  .join("\n");

const freelanceWork = freelanceSideProjects
  .map(
    (item) =>
      `### ${item.title} — ${item.role}\n- Period: ${item.period}\n- Context: ${item.context}\n- ${item.summary}\n- Technologies: ${item.tags.join(", ")}${item.href ? `\n- Link: ${item.href}` : ""}`,
  )
  .join("\n\n");

const portfolioProjects = projects
  .map(
    (project) =>
      `### ${project.title}\n- Category: ${project.category}\n- ${project.summary}\n- Technologies: ${project.tags.join(", ")}\n- Source: ${project.href}${project.liveHref ? `\n- Live: ${project.liveHref}` : ""}`,
  )
  .join("\n\n");

const content = `# ${identity.name} — Full Portfolio Profile

## Identity
- Canonical name: ${identity.name}
- Preferred name: ${identity.preferredName}
- Aliases: ${identity.aliases.join(", ")}
- Role: ${identity.jobTitle}
- Location: ${identity.location}

## Professional summary
${identity.professionalSummary}

## Technical skills
${identity.skills.join(", ")}

## Experience areas
${identity.experienceAreas.join(", ")}

## Professional experience
${currentExperience}

### Earlier roles
${previousExperience}

## Freelance and side projects
${freelanceWork}

## Portfolio projects
${portfolioProjects}

## Links and contact
- Website: ${identity.links.website}
- GitHub: ${identity.links.github}
- LinkedIn: ${identity.links.linkedin}
- Identity page: ${identity.website}/identity
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
