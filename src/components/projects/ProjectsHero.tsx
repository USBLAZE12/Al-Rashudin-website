"use client";

import { motion } from "framer-motion";
import { companyInfo } from "@/lib/company";

export default function ProjectsHero() {
  return (
    <section className="relative pt-28 pb-16 sm:pt-36 sm:pb-20 bg-[#0f0f0f] overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-orange-500/[0.04] via-transparent to-transparent pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto text-center"
        >
          <div className="inline-flex items-center gap-2 bg-white/[0.06] border border-white/[0.08] rounded-full px-4 py-1.5 mb-6">
            <span className="w-2 h-2 bg-orange-500 rounded-full animate-pulse" />
            <span className="text-white/70 text-xs font-semibold uppercase tracking-widest">
              {companyInfo.stats.projects} Projects • {companyInfo.stats.countries} Countries • Since 2002
            </span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white tracking-tight leading-[0.9] mb-6">
            Recent <span className="gradient-text">Projects</span>
          </h1>

          <p className="text-gray-400 text-base sm:text-lg leading-relaxed max-w-2xl mx-auto">
            A showcase of our recent engineering projects - crane boom repairs with Strenx 960, slewing bearing replacements, hydraulic overhauls, and fleet maintenance across UAE and beyond.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
