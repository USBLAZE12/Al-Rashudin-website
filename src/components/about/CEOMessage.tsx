"use client";

import { motion } from "framer-motion";

export default function CEOMessage() {
  return (
    <section className="py-20 bg-slate-50 border-t border-slate-200 relative overflow-hidden">
      {/* Decorative subtle background accents */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-red-100/30 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-slate-200/40 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-10"
        >
          <span className="text-red-600 text-xs sm:text-sm font-bold uppercase tracking-wider inline-block bg-red-50 border border-red-200 px-4 py-1.5 rounded-full mb-3 shadow-xs">
            Leadership Insight
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight">
            Founder & CEO&apos;s Message
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="bg-white border border-slate-200/90 rounded-3xl p-8 sm:p-12 shadow-xl shadow-slate-200/50 relative"
        >
          {/* Subtle Quote Icon Background */}
          <div className="absolute top-6 left-8 text-red-100 pointer-events-none select-none opacity-80">
            <svg className="w-16 h-16 sm:w-20 sm:h-20 fill-current" viewBox="0 0 24 24">
              <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10H14.017zM0 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151C7.546 6.068 5.983 8.789 5.983 11h4v10H0z" />
            </svg>
          </div>

          <div className="relative z-10">
            <p className="text-slate-800 text-lg sm:text-2xl font-medium leading-relaxed italic text-center max-w-3xl mx-auto mb-8">
              &ldquo;Since 2002, Al Rashudin Engineering has been built on three
              simple pillars: precision craftsmanship, unyielding reliability, and
              standing firmly behind every seal and overhaul we deliver. Whether a
              client needs an urgent replacement seal for a 500-ton mobile crane
              or a completely reconditioned cylinder, our promise is always the same:
              the job done right, tested thoroughly, and delivered on time.&rdquo;
            </p>

            <div className="pt-8 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-4 max-w-2xl mx-auto">
              <div className="text-center sm:text-left">
                <p className="text-slate-900 font-extrabold text-xl tracking-tight">
                  Hamid Ali Qureshi
                </p>
                <p className="text-red-600 font-bold text-xs uppercase tracking-wider mt-0.5">
                  Founder & Chief Executive Officer
                </p>
              </div>
              <div className="inline-flex items-center space-x-2 bg-slate-50 border border-slate-200 px-4 py-1.5 rounded-full">
                <span className="w-2 h-2 rounded-full bg-red-600" />
                <span className="text-xs font-mono font-bold text-slate-600 uppercase tracking-widest">
                  Est. 2002 • Sharjah, UAE
                </span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
