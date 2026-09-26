"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function CEOMessage() {
  return (
    <section className="py-24 bg-white border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="relative"
          >
            <div className="relative h-[480px] rounded-3xl overflow-hidden border border-slate-200 shadow-lg">
              <Image
                src="/images/ceo.jpg"
                alt="Hamid Ali Qureshi - Founder & CEO"
                fill
                className="object-cover"
              />
            </div>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <span className="text-red-600 text-xs sm:text-sm font-bold uppercase tracking-wider inline-block bg-red-50 border border-red-100 px-3.5 py-1.5 rounded-full mb-3">
              Leadership Insight
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mt-2 mb-6">
              Founder & CEO&apos;s Message
            </h2>

            <div className="space-y-6">
              <div className="relative bg-slate-50 border border-slate-200 rounded-2xl p-6 sm:p-8">
                <svg
                  className="w-10 h-10 text-red-200 mb-3"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10H14.017zM0 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151C7.546 6.068 5.983 8.789 5.983 11h4v10H0z" />
                </svg>
                <p className="text-slate-700 text-base sm:text-lg leading-relaxed italic">
                  &ldquo;Since 2002, Al Rashudin Engineering has been built on three
                  simple pillars: precision craftsmanship, unyielding reliability, and
                  standing firmly behind every seal and overhaul we deliver. Whether a
                  client needs an urgent replacement seal for a 500-ton mobile crane
                  or a completely reconditioned cylinder, our promise is always the same:
                  the job done right, tested thoroughly, and delivered on time.&rdquo;
                </p>

                <div className="mt-6 pt-4 border-t border-slate-200 flex items-center justify-between">
                  <div>
                    <p className="text-slate-900 font-extrabold text-lg">
                      Hamid Ali Qureshi
                    </p>
                    <p className="text-red-600 font-bold text-xs uppercase tracking-wider">
                      Founder & Chief Executive Officer
                    </p>
                  </div>
                  <div className="text-xs font-mono font-bold text-slate-400 bg-white border border-slate-200 px-3 py-1 rounded-md">
                    Est. 2002
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
