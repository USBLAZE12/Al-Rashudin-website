"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function AboutCTA() {
  return (
    <section className="py-24 bg-slate-50 border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="bg-gradient-to-br from-red-600 via-red-700 to-red-800 rounded-3xl p-10 sm:p-14 text-center text-white shadow-xl shadow-red-900/10 relative overflow-hidden"
        >
          {/* Subtle geometric overlay */}
          <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none" />

          <div className="relative z-10 max-w-2xl mx-auto">
            <span className="inline-block bg-white/20 backdrop-blur-xs text-white text-xs font-bold uppercase tracking-wider px-3.5 py-1.5 rounded-full mb-4">
              Partner With Industry Specialists
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold mb-4 tracking-tight">
              Ready to Upgrade Your Equipment Reliability?
            </h2>
            <p className="text-red-100 text-sm sm:text-base max-w-xl mx-auto mb-8 leading-relaxed">
              Explore our full inventory of hydraulic seals, or consult directly
              with our engineers regarding custom machining and overhaul services.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link
                href="/products"
                className="bg-white hover:bg-slate-100 text-slate-900 px-8 py-4 rounded-xl text-base font-bold transition-all shadow-md hover:shadow-lg inline-flex items-center justify-center"
              >
                Browse Products
              </Link>
              <Link
                href="/contact"
                className="bg-red-950/60 hover:bg-red-950 text-white border border-white/30 px-8 py-4 rounded-xl text-base font-bold transition-all shadow-md inline-flex items-center justify-center"
              >
                Request a Custom Quote
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
