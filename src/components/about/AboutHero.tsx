"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function AboutHero() {
  return (
    <section className="relative min-h-[60vh] flex items-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/images/about-hero.jpg"
          alt="Al Rashudin Engineering Team"
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
            About Al Rashudin
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mt-4 mb-6">
            Engineering Excellence{" "}
            <span className="gradient-text">Since 2002</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-300 leading-relaxed">
            Al Rashudin Engineering is a precision machining and heavy equipment
            restoration company based in Sharjah, UAE. We deliver reliable,
            industry-focused solutions for the global industrial sector.
          </p>
        </motion.div>
      </div>
    </section>
  );
}