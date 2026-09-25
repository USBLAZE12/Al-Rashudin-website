"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { companyInfo } from "@/lib/company";

export default function CEOMessage() {
  return (
    <section className="py-20 sm:py-28 bg-[#0a0a0a]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative order-2 lg:order-1"
          >
            <div className="relative rounded-2xl sm:rounded-[24px] overflow-hidden bg-[#141414] border border-white/[0.06]">
              <div className="relative h-[480px] sm:h-[560px]">
                <Image
                  src="/images/ceo.jpg"
                  alt={`${companyInfo.founder.name} - ${companyInfo.founder.role}`}
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
              </div>

              <div className="absolute bottom-4 left-4 right-4 bg-[#0a0a0a]/80 backdrop-blur-xl border border-white/10 rounded-xl p-4 flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-orange-500 to-orange-600 flex items-center justify-center text-white font-bold text-sm">
                  HQ
                </div>
                <div>
                  <p className="text-white font-semibold text-sm">{companyInfo.founder.name}</p>
                  <p className="text-orange-400 text-xs font-medium">{companyInfo.founder.role} • Since 2002</p>
                </div>
                <div className="ml-auto w-2 h-2 bg-green-500 rounded-full animate-pulse" />
              </div>
            </div>

            {/* Decor */}
            <div className="absolute -z-10 -bottom-6 -left-6 w-32 h-32 bg-orange-500/5 rounded-full blur-3xl" />
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="order-1 lg:order-2"
          >
            <div className="inline-flex items-center gap-2 bg-orange-500/10 border border-orange-500/20 rounded-full px-3 py-1 mb-6">
              <span className="text-orange-400 text-[11px] font-semibold uppercase tracking-widest">Leadership</span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight leading-[0.95] mb-8">
              CEO&apos;s Message
            </h2>

            <div className="relative">
              <svg className="absolute -top-6 -left-2 w-12 h-12 text-orange-500/10" fill="currentColor" viewBox="0 0 24 24">
                <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10H14.017zM0 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151C7.546 6.068 5.983 8.789 5.983 11h4v10H0z" />
              </svg>

              <div className="relative space-y-5 text-gray-300 leading-relaxed">
                <p className="text-lg sm:text-xl font-medium text-white leading-relaxed">
                  Since 2002, {companyInfo.fullName} has been built on precision, responsibility, and hands-on engineering.
                </p>
                <p className="text-[15px]">
                  From being among the early workshops to work directly on cranes to delivering reliable machining and repairs today, our focus has always been on doing the job right and standing behind our work.
                </p>
                <p className="text-[15px]">
                  We started when most workshops avoided complex crane systems. Today, we are a specialist workshop for crane structural work using <span className="text-white font-medium">Strenx 700 & 960</span>, precision turning, heavy fabrication, and component restoration - serving clients across 50+ countries from our base in Sharjah, UAE.
                </p>

                <div className="pt-6 border-t border-white/[0.06]">
                  <p className="text-white font-semibold">{companyInfo.founder.name}</p>
                  <p className="text-orange-400 text-sm font-medium">{companyInfo.founder.role}</p>
                  <p className="text-gray-500 text-xs mt-2 max-w-md">
                    Founder of {companyInfo.groupName} • Industrial Area Sajaa, Sharjah • Serving heavy equipment sector since 2002
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
