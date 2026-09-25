import ProjectsHero from "@/components/projects/ProjectsHero";
import ProjectsGrid from "@/components/projects/ProjectsGrid";
import ProjectsCTA from "@/components/projects/ProjectsCTA";

export const metadata = {
  title: "Recent Projects | Crane Boom Repair, Slewing Bearings | Al Rashideen Engineering",
  description: "Recent projects: Liebherr LTM1500 boom repair 500 ton, LTM1100 slewing bearing, Tadano Faun 220 ton boom repair, hydraulic cylinder overhaul, XCMG dismantling. 5000+ projects since 2002.",
};

export default function ProjectsPage() {
  return (
    <main className="bg-[#0a0a0a]">
      <ProjectsHero />
      <ProjectsGrid />
      <ProjectsCTA />
    </main>
  );
}
