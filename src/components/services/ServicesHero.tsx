"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function ServicesHero() {
  return (
    <section className="relative min-h-[50vh] flex items-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/images/workshop.jpg"
          alt="Engineering Services"
          fill
          className="object-cover"
          priority
        />
        <div className="hero-gradient absolute inset-0" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl"
        >
          <span className="text-primary text-sm font-medium uppercase tracking-wider">
            Our Capabilities
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mt-4 mb-6">
            Engineering Services{" "}
            <span className="gradient-text">For Heavy Equipment</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-300 leading-relaxed">
            Advanced hydraulic seal solutions, crane component supply, and
            precision engineering for mobile and crawler crane systems. Expert
            support for heavy-duty performance.
          </p>
        </motion.div>
      </div>
    </section>
  );
}