"use client";

import { motion } from "framer-motion";
import { companyInfo } from "@/lib/company";

export default function Workflow() {
  return (
    <section className="py-20 sm:py-28 bg-[#0f0f0f] relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-orange-500/[0.01] to-transparent pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto text-center mb-14 sm:mb-20"
        >
          <div className="inline-flex items-center gap-2 bg-white/[0.06] border border-white/[0.08] rounded-full px-3 py-1 mb-4">
            <span className="text-white/60 text-[11px] font-semibold uppercase tracking-widest">Our Process</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight leading-[0.95] mb-4">
            Simple Workflow,
            <br />
            <span className="text-gray-500">Professional Results</span>
          </h2>
          <p className="text-gray-400 text-base sm:text-lg leading-relaxed">
            From initial inquiry to final handover - a structured engineering process that keeps your operations running smoothly.
          </p>
        </motion.div>

        {/* Steps */}
        <div className="relative">
          {/* Connecting line - desktop */}
          <div className="hidden lg:block absolute top-[72px] left-[10%] right-[10%] h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 sm:gap-6">
            {companyInfo.workflow.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                className="group relative"
              >
                <div className="bg-[#141414] border border-white/[0.06] rounded-2xl p-6 hover:border-orange-500/20 hover:bg-[#1a1a1a] transition-all duration-300 hover:-translate-y-1 h-full">
                  {/* Number */}
                  <div className="flex items-center justify-between mb-5">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-white/[0.08] to-white/[0.02] border border-white/[0.08] group-hover:from-orange-500 group-hover:to-orange-600 group-hover:border-orange-500 flex items-center justify-center text-white font-bold text-sm tracking-wider transition-all duration-300">
                      {step.number}
                    </div>
                    <div className="w-8 h-8 rounded-full bg-white/[0.04] border border-white/[0.06] flex items-center justify-center group-hover:bg-orange-500/10 group-hover:border-orange-500/20 transition-colors">
                      <div className="w-2 h-2 bg-gray-500 group-hover:bg-orange-500 rounded-full transition-colors" />
                    </div>
                  </div>

                  <h3 className="text-white font-semibold text-[15px] mb-2 group-hover:text-orange-400 transition-colors">
                    {step.title}
                  </h3>
                  <p className="text-gray-400 text-[13px] leading-relaxed">
                    {step.description}
                  </p>
                </div>

                {/* Mobile arrow */}
                {index < companyInfo.workflow.length - 1 && (
                  <div className="lg:hidden flex justify-center py-3">
                    <svg className="w-4 h-4 text-white/20" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                    </svg>
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>

        {/* Bottom features */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-14 sm:mt-20 p-6 sm:p-8 rounded-2xl sm:rounded-[24px] bg-[#141414] border border-white/[0.06] relative overflow-hidden"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-orange-500/[0.02] to-transparent pointer-events-none" />
          <div className="relative grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {[
              "Fast response within 2 hours",
              "Verified OEM & aftermarket parts",
              "Global shipping & export support",
              "NDT testing & load certification",
            ].map((feature, index) => (
              <div key={index} className="flex items-center gap-3 text-sm">
                <div className="w-8 h-8 rounded-full bg-green-500/10 border border-green-500/20 flex items-center justify-center flex-shrink-0">
                  <svg className="w-4 h-4 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <span className="text-gray-300 font-medium">{feature}</span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
