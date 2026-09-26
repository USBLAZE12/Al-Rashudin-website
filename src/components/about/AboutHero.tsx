"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function AboutHero() {
  return (
    <section className="relative min-h-[55vh] flex items-center overflow-hidden bg-slate-950 pt-28 pb-16">
      {/* Background Image with Dark Gradient Overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/about-hero.jpg"
          alt="Al Rashudin Engineering Team & Workshop"
          fill
          className="object-cover object-center opacity-75"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950/90 via-slate-950/75 to-slate-950/50 z-10" />
      </div>

      {/* Content */}
      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl"
        >
          <span className="text-white text-xs sm:text-sm font-bold uppercase tracking-wider inline-block bg-red-600/90 border border-red-500/50 px-4 py-1.5 rounded-full mb-4 shadow-md">
            About Al Rashudin Engineering
          </span>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white mt-2 mb-6 tracking-tight leading-tight drop-shadow-md">
            Engineering Precision <span className="text-red-500">Since 2002</span>
          </h1>
          <p className="text-base sm:text-xl text-slate-200 leading-relaxed max-w-2xl font-normal drop-shadow-sm">
            Al Rashudin Equipment specializes in manufacturing hydraulic and heavy-vehicle seals in custom sizes, while also supplying standard-size seals and a range of hydraulic components such as bladder accumulators, hydraulic pumps, and related parts.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
