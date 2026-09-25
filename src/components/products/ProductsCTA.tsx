"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function ProductsCTA() {
  return (
    <section className="py-16 bg-secondary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="bg-card border border-border rounded-xl p-12 text-center"
        >
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
            Can&apos;t Find a Specific Part?
          </h2>
          <p className="text-gray-400 max-w-xl mx-auto mb-8">
            Send us a photo of your machine plate or the broken part, and our
            team will help identify the right replacement quickly.
          </p>
          <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
            <Link
              href="/contact"
              className="bg-primary hover:bg-primary-dark text-white px-8 py-3 rounded-lg font-semibold transition-colors"
            >
              Contact Support
            </Link>
            <a
              href="https://wa.me/971501234567"
              target="_blank"
              rel="noopener noreferrer"
              className="border border-white/20 hover:border-white/40 text-white px-8 py-3 rounded-lg font-semibold transition-colors hover:bg-white/5"
            >
              WhatsApp Chat
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}