"use client";

import { motion } from "framer-motion";
import { companyInfo } from "@/lib/company";

export default function ContactHero() {
  return (
    <section className="relative pt-28 pb-16 sm:pt-36 sm:pb-20 bg-[#0f0f0f] overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-orange-500/[0.04] via-transparent to-transparent pointer-events-none" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-orange-500/[0.03] rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto text-center"
        >
          <div className="inline-flex items-center gap-2 bg-green-500/10 border border-green-500/20 rounded-full px-4 py-1.5 mb-6">
            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
            <span className="text-green-400 text-xs font-semibold uppercase tracking-widest">
              Available Now • Fast Response in 2 Hours
            </span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white tracking-tight leading-[0.9] mb-6">
            Get Your Project
            <br />
            <span className="gradient-text">Moving Today</span>
          </h1>

          <p className="text-gray-400 text-base sm:text-lg leading-relaxed max-w-2xl mx-auto">
            Professional heavy equipment repair and hydraulic seal solutions across UAE. Our experts are ready to assist with your crane repair, seal kits, or custom engineering needs.
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-2">
            {companyInfo.contact.phones.map((phone) => (
              <a
                key={phone}
                href={`tel:${phone.replace(/\s+/g, "")}`}
                className="bg-[#141414] border border-white/[0.06] hover:border-white/10 hover:bg-[#1a1a1a] text-white px-4 py-2 rounded-full text-sm font-medium transition-all inline-flex items-center gap-2"
              >
                <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                {phone}
              </a>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
