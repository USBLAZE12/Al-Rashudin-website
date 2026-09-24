import Hero from "@/components/home/Hero";
import TrustBadges from "@/components/home/TrustBadges";
import Categories from "@/components/home/Categories";
import FeaturedProducts from "@/components/home/FeaturedProducts";
import WhyChooseUs from "@/components/home/WhyChooseUs";
import Workflow from "@/components/home/Workflow";
import RecentProjects from "@/components/home/RecentProjects";
import CTA from "@/components/home/CTA";

export default function Home() {
  return (
    <main>
      <Hero />
      <TrustBadges />
      <Categories />
      <FeaturedProducts />
      <WhyChooseUs />
      <Workflow />
      <RecentProjects />
      <CTA />
    </main>
  );
}