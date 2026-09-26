"use client";

import { motion } from "framer-motion";

const brands = [
  { name: "Liebherr", initial: "L" },
  { name: "Tadano", initial: "T" },
  { name: "XCMG", initial: "X" },
  { name: "Sany", initial: "S" },
  { name: "Zoomlion", initial: "Z" },
  { name: "Manitowoc", initial: "M" },
  { name: "Kobelco", initial: "K" },
  { name: "Link-Belt", initial: "LB" },
];

export default function BrandLogos() {
  return (
    <section className="py-16 bg-background border-y border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-10"
        >
          <p className="text-gray-500 text-sm uppercase tracking-wider">
            Trusted by crane & equipment operators worldwide
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-6">
          {brands.map((brand, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: index * 0.05 }}
              className="flex items-center justify-center"
            >
              <div className="w-20 h-20 bg-card border border-border rounded-xl flex items-center justify-center hover:border-primary/30 transition-colors group">
                <span className="text-2xl font-bold text-gray-500 group-hover:text-primary transition-colors">
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