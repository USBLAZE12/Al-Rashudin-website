"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function AboutHero() {
  return (
    <section className="relative min-h-[55vh] flex items-center overflow-hidden bg-white pt-24">
      {/* Background Image with Crisp Light Gradient */}
      <div className="absolute inset-0">
        <Image
          src="/images/about-hero.jpg"
          alt="Al Rashudin Engineering Team"
          fill
          className="object-cover opacity-30"
          priority
        />
        <div className="hero-gradient absolute inset-0" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 sm:py-32">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl"
        >
          <span className="text-red-600 text-xs sm:text-sm font-bold uppercase tracking-wider inline-block bg-red-50 border border-red-200 px-3.5 py-1.5 rounded-full mb-3">
            About Al Rashudin
          </span>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 mt-2 mb-6 tracking-tight leading-tight">
            Engineering Precision <span className="text-red-600">Since 2002</span>
          </h1>
          <p className="text-base sm:text-xl text-slate-600 leading-relaxed max-w-2xl">
            Al Rashudin Engineering is a precision machining, cylinder rebuild,
            and hydraulic seal specialist based in Sharjah, UAE. We provide
            dependable technical solutions for heavy machinery fleets globally.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
