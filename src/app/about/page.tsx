import AboutHero from "@/components/about/AboutHero";
import AboutContent from "@/components/about/AboutContent";
import TeamValues from "@/components/about/TeamValues";
import CEOMessage from "@/components/about/CEOMessage";
import AboutCTA from "@/components/about/AboutCTA";

export const metadata = {
  title: "About Al Rashideen Engineering | Precision Crane Repair Since 2002",
  description: "Al Rashideen Engineering Turning is part of Al Rashideen Engineering Group, Sharjah UAE. Precision machining and heavy equipment restoration since 2002. 5000+ projects, 50+ staff, 50+ countries served.",
};

export default function AboutPage() {
  return (
    <main className="bg-[#0a0a0a]">
      <AboutHero />
      <AboutContent />
      <TeamValues />
      <CEOMessage />
      <AboutCTA />
    </main>
  );
}
