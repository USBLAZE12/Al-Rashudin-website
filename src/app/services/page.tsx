import ServicesHero from "@/components/services/ServicesHero";
import ServicesList from "@/components/services/ServicesList";
import ServicesCTA from "@/components/services/ServicesCTA";

export const metadata = {
  title: "Crane Repair Services UAE | Boom Repair Strenx 960, Slewing Bearings | Al Rashideen",
  description: "Expert crane repair services in UAE: boom structural repair with Strenx 700/960, slewing bearings, dismantling & reassembly, hydraulic seals, cylinder repair, precision machining. Sharjah workshop since 2002.",
};

export default function ServicesPage() {
  return (
    <main className="bg-[#0a0a0a]">
      <ServicesHero />
      <ServicesList />
      <ServicesCTA />
    </main>
  );
}
