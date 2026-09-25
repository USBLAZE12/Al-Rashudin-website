"use client";

import { motion } from "framer-motion";

const badges = [
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
    title: "Fast Response",
    description: "24/7 WhatsApp support & quick quotes",
    stat: "< 2 Hours",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
    title: "OEM Quality",
    description: "Strenx 960 & genuine spec materials",
    stat: "Certified",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
      </svg>
    ),
    title: "Expert Support",
    description: "20+ years crane repair expertise",
    stat: "Since 2002",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a8 8 0 005.07 7.43M8 14a2 2 0 012-2h8a2 2 0 012 2v1a8 8 0 01-8 8 8 8 0 01-8-8v-1z" />
      </svg>
    ),
    title: "Global Shipping",
    description: "Serving 50+ countries worldwide",
    stat: "50+ Countries",
  },
];

export default function TrustBadges() {
  return (
    <section className="relative z-20 -mt-12 sm:-mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4"
        >
          {badges.map((badge, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              className="group relative bg-[#141414]/90 backdrop-blur-xl border border-white/[0.06] rounded-2xl p-5 hover:bg-[#1a1a1a] hover:border-orange-500/20 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_12px_32px_rgba(0,0,0,0.4)]"
            >
              <div className="flex items-start justify-between mb-3">
                <div className="w-11 h-11 bg-gradient-to-br from-orange-500/20 to-orange-600/10 border border-orange-500/20 rounded-xl flex items-center justify-center text-orange-400 group-hover:from-orange-500 group-hover:to-orange-600 group-hover:text-white transition-all duration-300">
                  {badge.icon}
                </div>
                <span className="text-[11px] font-bold tracking-wider uppercase px-2.5 py-1 rounded-full bg-white/[0.06] border border-white/[0.08] text-gray-400 group-hover:bg-orange-500/10 group-hover:border-orange-500/20 group-hover:text-orange-400 transition-colors">
                  {badge.stat}
                </span>
              </div>
              <h3 className="text-white font-semibold text-[15px] mb-1">{badge.title}</h3>
              <p className="text-gray-400 text-[13px] leading-relaxed">{badge.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
