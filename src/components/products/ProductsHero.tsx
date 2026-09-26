"use client";

import { motion } from "framer-motion";

export default function ProductsHero() {
  return (
    <section className="relative pt-36 pb-20 bg-gradient-to-b from-red-50/50 via-white to-slate-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto"
        >
          <div className="inline-flex items-center space-x-2 bg-red-100 text-red-700 rounded-full px-4 py-1.5 mb-4 text-xs font-bold uppercase tracking-wider">
            <span className="w-2 h-2 rounded-full bg-red-600 animate-pulse" />
            <span>Industrial Inventory & Custom Sealing</span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-slate-900 tracking-tight mb-5">
            Heavy Equipment <span className="text-red-600">Product Catalog</span>
          </h1>
          <p className="text-slate-600 text-base sm:text-lg leading-relaxed">
            Browse our comprehensive inventory of OEM-specification hydraulic seals, complete cylinder rebuild kits, high-pressure pumps, and crane components. Click any part to review technical data and descriptions.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
