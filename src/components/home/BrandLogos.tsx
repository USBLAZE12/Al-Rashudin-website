"use client";

import { motion } from "framer-motion";

const brands = [
  { name: "Liebherr", logo: "Liebherr" },
  { name: "Tadano", logo: "Tadano" },
  { name: "XCMG", logo: "XCMG" },
  { name: "Sany", logo: "Sany" },
  { name: "Zoomlion", logo: "Zoomlion" },
  { name: "Manitowoc", logo: "Manitowoc" },
  { name: "Kobelco", logo: "Kobelco" },
  { name: "Link-Belt", logo: "Link-Belt" },
];

export default function BrandLogos() {
  return (
    <section className="py-14 sm:py-20 bg-[#0a0a0a] border-y border-white/[0.06] relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-orange-500/[0.02] to-transparent pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10"
        >
          <p className="text-gray-500 text-xs sm:text-sm uppercase tracking-[0.2em] font-medium">
            Trusted by crane & equipment operators worldwide
          </p>
          <div className="mt-4 flex items-center justify-center gap-2 text-[11px] text-gray-600">
            <span className="w-8 h-px bg-white/10" />
            Compatible Parts For All Major Brands
            <span className="w-8 h-px bg-white/10" />
          </div>
        </motion.div>

        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-3 sm:gap-4">
          {brands.map((brand, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.04 }}
              className="group"
            >
              <div className="h-[72px] sm:h-[80px] bg-[#141414] border border-white/[0.06] rounded-xl sm:rounded-2xl flex items-center justify-center hover:border-orange-500/20 hover:bg-[#1a1a1a] transition-all duration-300 hover:-translate-y-1">
                <span className="text-sm sm:text-[15px] font-bold tracking-tight text-gray-500 group-hover:text-white transition-colors text-center px-2">
                  {brand.name}
                </span>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="mt-10 text-center"
        >
          <p className="text-gray-600 text-xs">
            + Many more • OEM & aftermarket compatibility • Genuine spec materials
          </p>
        </motion.div>
      </div>
    </section>
  );
}
