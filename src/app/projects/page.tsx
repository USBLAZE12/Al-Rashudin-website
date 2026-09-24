import ProjectsHero from "@/components/projects/ProjectsHero";
import ProjectsGrid from "@/components/projects/ProjectsGrid";
import ProjectsCTA from "@/components/projects/ProjectsCTA";

export default function ProjectsPage() {
  return (
    <main>
      <ProjectsHero />
      <ProjectsGrid />
      <ProjectsCTA />
    </main>
  );
}