import AboutHero from "@/components/about/AboutHero";
import AboutContent from "@/components/about/AboutContent";
import TeamValues from "@/components/about/TeamValues";
import CEOMessage from "@/components/about/CEOMessage";
import AboutCTA from "@/components/about/AboutCTA";

export default function AboutPage() {
  return (
    <main>
      <AboutHero />
      <AboutContent />
      <TeamValues />
      <CEOMessage />
      <AboutCTA />
    </main>
  );
}