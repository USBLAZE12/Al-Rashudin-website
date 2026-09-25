"use client";

import { motion } from "framer-motion";

const values = [
  {
    number: "01",
    title: "Expert Workforce",
    description:
      "Our team comprises experienced engineers and certified technicians with extensive hands-on expertise in crane structures and mechanical restoration. 50+ skilled professionals.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    ),
  },
  {
    number: "02",
    title: "Integrity First",
    description:
      "We maintain absolute transparency in our processes, ensuring that every project meets the exact specifications and tolerances required by heavy industry standards. NDT testing included.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
  },
  {
    number: "03",
    title: "Continuous Innovation",
    description:
      "We continuously enhance our technical capabilities by staying aligned with evolving crane technologies, hydraulic systems, and advanced mechanical assemblies. Strenx certified materials.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
  },
];

export default function TeamValues() {
  return (
    <section className="py-20 sm:py-28 bg-[#0f0f0f] relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-orange-500/[0.02] to-transparent pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto text-center mb-14"
        >
          <div className="inline-flex items-center gap-2 bg-white/[0.06] border border-white/[0.08] rounded-full px-3 py-1 mb-4">
            <span className="text-white/60 text-[11px] font-semibold uppercase tracking-widest">Our Team & Values</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight leading-[0.95]">
            What Drives Us
            <br />
            <span className="text-gray-500">Every Day</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6">
          {values.map((value, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group bg-[#141414] border border-white/[0.06] rounded-2xl sm:rounded-[20px] p-6 sm:p-8 hover:border-orange-500/20 hover:bg-[#1a1a1a] transition-all duration-300 hover:-translate-y-1"
            >
              <div className="flex items-center justify-between mb-6">
                <div className="w-12 h-12 rounded-xl bg-[#0a0a0a] border border-white/[0.06] group-hover:border-orange-500/20 group-hover:bg-orange-500/10 flex items-center justify-center text-gray-400 group-hover:text-orange-400 transition-all">
                  {value.icon}
                </div>
                <span className="text-5xl font-bold text-white/[0.04] group-hover:text-orange-500/[0.08] transition-colors">
                  {value.number}
                </span>
              </div>
              <h3 className="text-lg font-semibold text-white mb-3 group-hover:text-orange-400 transition-colors">
                {value.title}
              </h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                {value.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
