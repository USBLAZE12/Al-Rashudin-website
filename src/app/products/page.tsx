import ProductsHero from "@/components/products/ProductsHero";
import ProductsGrid from "@/components/products/ProductsGrid";
import ProductsCTA from "@/components/products/ProductsCTA";

export const metadata = {
  title: "Hydraulic Seals & Crane Parts Catalog | Al Rashideen Engineering UAE",
  description: "Browse hydraulic seals, seal kits, crane components, boom repair plates Strenx 960, hydraulic cylinders, slewing bearings. OEM quality for Liebherr, Tadano, XCMG, Sany. Global shipping.",
};

export default function ProductsPage() {
  return (
    <main className="bg-[#0a0a0a]">
      <ProductsHero />
      <ProductsGrid />
      <ProductsCTA />
    </main>
  );
}
