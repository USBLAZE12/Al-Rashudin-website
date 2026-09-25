"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { companyInfo } from "@/lib/company";

export default function AboutContent() {
  return (
    <section className="py-20 sm:py-28 bg-[#0a0a0a]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 bg-orange-500/10 border border-orange-500/20 rounded-full px-3 py-1 mb-6">
              <span className="text-orange-400 text-[11px] font-semibold uppercase tracking-widest">Who We Are</span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight leading-[0.95] mb-6">
              Trusted Heavy
              <br />
              <span className="text-gray-500">Engineering Support</span>
            </h2>

            <div className="space-y-4 text-gray-400 leading-relaxed text-[15px]">
              <p>
                <span className="text-white font-medium">{companyInfo.fullName}</span> is a precision machining and engineering workshop established in 2002, built on hands-on expertise and a deep understanding of heavy machinery.
              </p>
              <p>
                From our earliest days, we have served the construction, crane, and heavy equipment sectors, delivering reliable engineering turning, custom machining, and component repair solutions. At a time when most workshops avoided complex crane systems, Al Rashideen was among the first to undertake in-house crane repairs and mechanical work, setting a benchmark for technical capability and confidence in the field.
              </p>
              <p>
                Today, we are positioned as a specialist workshop brand for crane structural work, precision turning, heavy fabrication, and component restoration - combining practical workshop experience with strong technical execution to handle complex and demanding repair challenges. We use <span className="text-white font-medium">Strenx 700 and Strenx 960</span> high tensile steel plates commonly used by original manufacturers.
              </p>
            </div>

            <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-3">
              {[
                "Crane structural repair - Strenx 960",
                "Slewing bearing supply & replacement",
                "Hydraulic seal manufacturing",
                "Precision machining & fabrication",
                "Dismantling & reassembly support",
                "NDT testing & load certification",
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-2.5 text-sm text-gray-300">
                  <div className="w-6 h-6 rounded-full bg-green-500/10 border border-green-500/20 flex items-center justify-center flex-shrink-0">
                    <svg className="w-3 h-3 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  {item}
                </div>
              ))}
            </div>
          </motion.div>

          {/* Image */}
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
                  alt="Al Rashideen Engineering Workshop"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
              </div>

              <div className="absolute bottom-4 left-4 right-4 bg-[#0a0a0a]/80 backdrop-blur-xl border border-white/10 rounded-xl p-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-orange-500 flex items-center justify-center">
                    <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-white font-semibold text-sm">Precision Workshop</p>
                    <p className="text-gray-400 text-xs">{companyInfo.contact.shortAddress} • 50+ Staff</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-16 sm:mt-24 grid grid-cols-2 lg:grid-cols-4 gap-4"
        >
          {[
            { value: companyInfo.stats.experience, label: "Years Experience", sub: "Since 2002" },
            { value: companyInfo.stats.staff, label: "Expert Staff", sub: "Engineers & Technicians" },
            { value: companyInfo.stats.projects, label: "Projects Completed", sub: "UAE & Global" },
            { value: companyInfo.stats.countries, label: "Countries Served", sub: "Worldwide Shipping" },
          ].map((stat, index) => (
            <div
              key={index}
              className="bg-[#141414] border border-white/[0.06] rounded-2xl p-6 text-center hover:border-orange-500/20 hover:bg-[#1a1a1a] transition-all group"
            >
              <div className="text-3xl sm:text-4xl font-bold text-white mb-2 tracking-tight group-hover:text-orange-400 transition-colors">
                {stat.value}
              </div>
              <div className="text-white font-medium text-sm mb-1">{stat.label}</div>
              <div className="text-gray-500 text-xs">{stat.sub}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
