"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { companyInfo } from "@/lib/company";

export default function WhyChooseUs() {
  return (
    <section className="py-20 sm:py-28 bg-[#0a0a0a] relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-orange-500/[0.02] via-transparent to-transparent pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 bg-orange-500/10 border border-orange-500/20 rounded-full px-3 py-1 mb-6">
              <span className="text-orange-400 text-[11px] font-semibold uppercase tracking-widest">Why Choose Us</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-bold text-white tracking-tight leading-[0.95] mb-6">
              The Al Rashideen
              <br />
              <span className="text-gray-500">Advantage</span>
            </h2>

            <p className="text-gray-400 text-base sm:text-lg leading-relaxed mb-10">
              Comprehensive crane repair services across the UAE and beyond. From fault detection and boom repair to dismantling, inspection, and full restoration - we combine workshop expertise with on-site experience.
            </p>

            <div className="space-y-6">
              {companyInfo.whyChooseUs.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.08 }}
                  className="flex gap-4 group"
                >
                  <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-[#141414] border border-white/[0.06] group-hover:border-orange-500/20 group-hover:bg-orange-500/10 flex items-center justify-center transition-all duration-300">
                    <svg className="w-5 h-5 text-gray-400 group-hover:text-orange-400 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-white font-semibold text-[15px] mb-1.5 group-hover:text-orange-400 transition-colors">
                      {feature.title}
                    </h3>
                    <p className="text-gray-400 text-sm leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="mt-10 flex flex-wrap gap-3">
              <Link
                href="/about"
                className="inline-flex items-center gap-2 bg-white text-black hover:bg-gray-100 px-6 py-3 rounded-xl font-semibold text-sm transition-all hover:scale-[1.02]"
              >
                About Company
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
              <Link
                href="/projects"
                className="inline-flex items-center gap-2 border border-white/10 hover:border-white/20 bg-white/[0.03] hover:bg-white/[0.06] text-white px-6 py-3 rounded-xl font-semibold text-sm transition-all"
              >
                View Projects
              </Link>
            </div>
          </motion.div>

          {/* Image & Stats */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="relative rounded-2xl sm:rounded-[24px] overflow-hidden bg-[#141414] border border-white/[0.06]">
              <div className="relative h-[480px] sm:h-[560px]">
                <Image
                  src="/images/workshop.jpg"
                  alt="Al Rashideen Engineering Workshop - Sharjah UAE"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-[#0a0a0a]/40 to-transparent" />
                <div className="absolute inset-0 bg-gradient-to-br from-orange-500/10 to-transparent mix-blend-overlay" />
              </div>

              {/* Floating badge */}
              <div className="absolute top-6 left-6 bg-[#0a0a0a]/80 backdrop-blur-xl border border-white/10 rounded-2xl p-4 shadow-2xl">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-green-500/10 border border-green-500/20 flex items-center justify-center">
                    <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                  </div>
                  <div>
                    <p className="text-white font-semibold text-sm">Workshop Active</p>
                    <p className="text-gray-400 text-xs">Sharjah, UAE • Est. 2002</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Stats overlay */}
            <div className="absolute -bottom-6 left-4 right-4 sm:left-6 sm:right-6 grid grid-cols-3 gap-3">
              {[
                { value: companyInfo.stats.experience, label: "Years Exp." },
                { value: companyInfo.stats.projects, label: "Projects Done" },
                { value: companyInfo.stats.countries, label: "Countries" },
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 + index * 0.1 }}
                  className="bg-[#141414]/90 backdrop-blur-xl border border-white/[0.08] rounded-xl sm:rounded-2xl p-3 sm:p-4 text-center shadow-[0_8px_32px_rgba(0,0,0,0.4)]"
                >
                  <div className="text-xl sm:text-2xl font-bold text-white tracking-tight">
                    {stat.value}
                  </div>
                  <div className="text-[11px] sm:text-xs text-gray-400 mt-1 font-medium">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Decorative */}
            <div className="absolute -z-10 -top-6 -right-6 w-32 h-32 bg-orange-500/5 rounded-full blur-3xl" />
            <div className="absolute -z-10 -bottom-12 -left-12 w-48 h-48 bg-orange-500/[0.03] rounded-full blur-3xl" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
