"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { companyInfo, getWhatsAppServiceLink } from "@/lib/company";

export default function Categories() {
  return (
    <section className="py-20 sm:py-28 bg-[#0a0a0a] relative overflow-hidden">
      {/* Subtle background */}
      <div className="absolute inset-0 bg-gradient-to-b from-white/[0.01] to-transparent pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mb-12 sm:mb-16"
        >
          <div className="inline-flex items-center gap-2 bg-orange-500/10 border border-orange-500/20 rounded-full px-3 py-1 mb-4">
            <div className="w-1.5 h-1.5 bg-orange-500 rounded-full animate-pulse" />
            <span className="text-orange-400 text-[11px] font-semibold uppercase tracking-widest">
              Our Expertise
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight leading-[0.95] mb-4">
            Core Services for
            <br />
            <span className="text-gray-500">Heavy Equipment</span>
          </h2>
          <p className="text-gray-400 text-base sm:text-lg leading-relaxed">
            From crane structural repair with Strenx 960 to hydraulic seal manufacturing - comprehensive engineering solutions trusted since 2002.
          </p>
        </motion.div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {companyInfo.categories.map((category, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.06 }}
              className="group relative"
            >
              <Link
                href="/services"
                className="block relative bg-[#141414] border border-white/[0.06] rounded-2xl sm:rounded-[20px] overflow-hidden hover:border-orange-500/20 transition-all duration-500 hover:-translate-y-1.5 hover:shadow-[0_20px_40px_rgba(0,0,0,0.5)]"
              >
                <div className="relative h-48 sm:h-52 overflow-hidden">
                  <Image
                    src={category.image}
                    alt={category.name}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#141414] via-[#141414]/60 to-transparent" />
                  <div className="absolute inset-0 bg-gradient-to-t from-orange-600/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                  {/* Top badge */}
                  <div className="absolute top-4 left-4 right-4 flex justify-between items-start">
                    <span className="bg-[#0a0a0a]/80 backdrop-blur-md border border-white/10 text-white text-[11px] font-semibold tracking-wide px-3 py-1.5 rounded-full">
                      {category.count}
                    </span>
                    <div className="w-9 h-9 bg-white text-black rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-300">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 17L17 7M17 7H7m10 0v10" />
                      </svg>
                    </div>
                  </div>
                </div>

                <div className="p-5 sm:p-6">
                  <h3 className="text-lg sm:text-xl font-semibold text-white mb-2 group-hover:text-orange-400 transition-colors leading-tight">
                    {category.name}
                  </h3>
                  <p className="text-gray-400 text-sm leading-relaxed mb-4 line-clamp-2">
                    {category.description}
                  </p>
                  <div className="flex items-center text-orange-500 text-sm font-medium">
                    <span>Explore Service</span>
                    <svg className="w-4 h-4 ml-2 transform group-hover:translate-x-1.5 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </div>

                {/* Hover accent */}
                <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-orange-500/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </Link>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-12 sm:mt-16 flex flex-col sm:flex-row items-center justify-between gap-6 p-6 sm:p-8 rounded-2xl sm:rounded-[24px] bg-gradient-to-br from-[#141414] to-[#0f0f0f] border border-white/[0.06] relative overflow-hidden"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-orange-500/[0.03] to-transparent pointer-events-none" />
          <div className="relative text-center sm:text-left">
            <h3 className="text-xl sm:text-2xl font-bold text-white mb-2">Need a custom solution?</h3>
            <p className="text-gray-400 text-sm sm:text-base max-w-xl">
              Send your machine details, photos, or repair requirements. Our team reviews and guides you within 2 hours.
            </p>
          </div>
          <div className="relative flex flex-col sm:flex-row gap-3 w-full sm:w-auto">
            <a
              href={getWhatsAppServiceLink("Custom Engineering Solution")}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-black hover:bg-gray-100 px-6 py-3 rounded-xl font-semibold text-sm transition-all hover:scale-[1.02] inline-flex items-center justify-center whitespace-nowrap"
            >
              WhatsApp Now
            </a>
            <Link
              href="/services"
              className="border border-white/10 hover:border-white/20 text-white px-6 py-3 rounded-xl font-semibold text-sm transition-all hover:bg-white/5 inline-flex items-center justify-center whitespace-nowrap"
            >
              View All Services
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
