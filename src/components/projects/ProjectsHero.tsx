"use client";

import { motion } from "framer-motion";

export default function ProjectsHero() {
  return (
    <section className="relative pt-36 pb-20 bg-gradient-to-b from-red-50/50 via-white to-slate-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto"
        >
          <span className="text-red-600 text-xs sm:text-sm font-bold uppercase tracking-wider inline-block bg-red-100/60 border border-red-200 px-3.5 py-1.5 rounded-full mb-3">
            Track Record
          </span>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-slate-900 tracking-tight mb-5">
            Engineering Projects & <span className="text-red-600">Case Studies</span>
          </h1>
          <p className="text-slate-600 text-base sm:text-lg leading-relaxed">
            A showcase of precision overhauls, crane boom seal replacements,
            and heavy equipment hydraulic restoration delivered by Al Rashudin Engineering.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
