import { SiteFooter } from "@/widgets/site-footer/ui/site-footer";
import { SiteHeader } from "@/widgets/site-header/ui/site-header";
import { ContactSection } from "./contact-section";
import { ExperienceSection } from "./experience-section";
import { HeroSection } from "./hero-section";
import { ProjectsSection } from "./projects-section";
import { StackSection } from "./stack-section";
import { StatsSection } from "./stats-section";

export function PortfolioPage() {
  return (
    <>
      <SiteHeader />
      <main>
        <HeroSection />
        <StatsSection />
        <ExperienceSection />
        <StackSection />
        <ProjectsSection />
        <ContactSection />
      </main>
      <SiteFooter />
    </>
  );
}
