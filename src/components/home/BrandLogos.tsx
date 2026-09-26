"use client";

import { motion } from "framer-motion";

const brands = [
  { name: "Liebherr", initial: "Liebherr" },
  { name: "Tadano", initial: "Tadano" },
  { name: "XCMG", initial: "XCMG" },
  { name: "Sany", initial: "Sany" },
  { name: "Zoomlion", initial: "Zoomlion" },
  { name: "Manitowoc", initial: "Manitowoc" },
  { name: "Kobelco", initial: "Kobelco" },
  { name: "Kato", initial: "Kato" },
];

export default function BrandLogos() {
  return (
    <section className="py-16 bg-slate-50/70 border-y border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-8"
        >
          <p className="text-slate-500 text-xs sm:text-sm font-bold uppercase tracking-wider">
            Supporting Leading Heavy Machinery & Crane Fleets Worldwide
          </p>
        </motion.div>

        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-4">
          {brands.map((brand, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: index * 0.04 }}
              className="flex items-center justify-center"
            >
              <div className="w-full h-16 bg-white border border-slate-200 rounded-xl flex items-center justify-center hover:border-red-400 hover:shadow-md transition-all group px-3">
                <span className="text-sm font-bold text-slate-400 group-hover:text-red-600 transition-colors tracking-tight">
                  {brand.initial}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
