"use client";

import { motion } from "framer-motion";

export default function ProjectsHero() {
  return (
    <section className="relative pt-32 pb-16 bg-secondary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <span className="text-primary text-sm font-medium uppercase tracking-wider">
            Our Work
          </span>
          <h1 className="text-4xl md:text-5xl font-bold text-white mt-4 mb-6">
            Recent <span className="gradient-text">Projects</span>
          </h1>
          <p className="text-gray-400 max-w-2xl mx-auto">
            A showcase of our recent engineering projects, component supply
            work, and technical solutions for heavy equipment and crane systems.
          </p>
        </motion.div>
      </div>
    </section>
  );
}