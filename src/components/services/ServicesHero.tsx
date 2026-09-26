"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function ServicesHero() {
  return (
    <section className="relative min-h-[50vh] flex items-center overflow-hidden bg-white pt-24">
      {/* Background Image with Light Gradient */}
      <div className="absolute inset-0">
        <Image
          src="/images/workshop.jpg"
          alt="Engineering Services"
          fill
          className="object-cover opacity-25"
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
            Workshop Capabilities
          </span>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 mt-2 mb-6 tracking-tight leading-tight">
            Engineering Services <span className="text-red-600">For Heavy Industry</span>
          </h1>
          <p className="text-base sm:text-xl text-slate-600 leading-relaxed max-w-2xl">
            From CNC custom seal profile turning to complete telescopic crane
            cylinder rebuilds and high-pressure pump servicing, we ensure
            industrial-grade reliability for demanding operating conditions.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
