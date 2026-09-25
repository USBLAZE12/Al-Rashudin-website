"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { companyInfo } from "@/lib/company";

export default function AboutHero() {
  return (
    <section className="relative min-h-[70vh] flex items-center overflow-hidden bg-[#0a0a0a]">
      <div className="absolute inset-0">
        <Image
          src="/images/about-hero.jpg"
          alt={`${companyInfo.name} Team`}
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-black/40" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-transparent to-transparent" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-28 sm:py-32 w-full">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl"
        >
          <div className="inline-flex items-center gap-2 bg-white/[0.06] border border-white/[0.08] backdrop-blur-md rounded-full px-4 py-2 mb-6">
            <span className="w-2 h-2 bg-orange-500 rounded-full animate-pulse" />
            <span className="text-white/80 text-xs font-semibold uppercase tracking-widest">
              About {companyInfo.shortName} • Est. 2002
            </span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white tracking-tight leading-[0.9] mb-6">
            Engineering Excellence
            <br />
            <span className="gradient-text">Since 2002</span>
          </h1>

          <p className="text-base sm:text-lg lg:text-xl text-gray-300 leading-relaxed mb-8">
            {companyInfo.fullName} is part of {companyInfo.groupName} in Sharjah, UAE. Precision machining and heavy equipment restoration for the global industrial sector delivering reliable, industry-focused solutions.
          </p>

          <div className="grid grid-cols-3 gap-4 sm:gap-6 p-4 sm:p-6 rounded-2xl bg-[#0a0a0a]/60 backdrop-blur-xl border border-white/10">
            {[
              { value: companyInfo.stats.experience, label: "Years" },
              { value: companyInfo.stats.projects, label: "Projects" },
              { value: companyInfo.stats.staff, label: "Expert Staff" },
            ].map((stat, i) => (
              <div key={i} className="text-center">
                <div className="text-2xl sm:text-3xl font-bold text-white tracking-tight">{stat.value}</div>
                <div className="text-[11px] sm:text-xs text-gray-400 uppercase tracking-wider mt-1">{stat.label}</div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
