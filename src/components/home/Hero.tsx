"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

export default function Hero() {
  const whatsappNumber =
    process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "971501234567";

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-white">
      {/* Background Image with Crisp Light Gradient */}
      <div className="absolute inset-0">
        <Image
          src="/images/hero-bg.jpg"
          alt="Hydraulic seals and crane parts"
          fill
          className="object-cover opacity-35"
          priority
        />
        <div className="hero-gradient absolute inset-0" />
      </div>

      {/* Decorative ambient elements */}
      <div className="absolute top-1/4 right-10 w-96 h-96 bg-red-100/40 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-72 h-72 bg-red-50/60 rounded-full blur-2xl pointer-events-none" />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 sm:py-36">
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center space-x-2 bg-red-50 border border-red-200/80 rounded-full px-4 py-2 mb-6 shadow-xs"
          >
            <span className="w-2.5 h-2.5 bg-red-600 rounded-full pulse-animation" />
            <span className="text-red-700 text-xs sm:text-sm font-bold uppercase tracking-wider">
              Precision Hydraulic Engineering in UAE • Since 2002
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-black text-slate-900 leading-[1.12] mb-6 tracking-tight"
          >
            Hydraulic Seals &{" "}
            <span className="text-red-600 inline-block">
              Crane Components
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-lg md:text-xl text-slate-600 mb-8 leading-relaxed max-w-2xl font-normal"
          >
            Al Rashudin Engineering provides OEM-grade hydraulic seal kits,
            crane parts, and precision industrial components. We deliver
            reliable heavy equipment solutions across the UAE and globally.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 mb-12"
          >
            <Link
              href="/products"
              className="bg-red-600 hover:bg-red-700 text-white px-8 py-4 rounded-xl text-base font-bold transition-all shadow-md shadow-red-500/25 hover:shadow-lg inline-flex items-center justify-center"
            >
              Explore Products
              <svg
                className="w-5 h-5 ml-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </Link>

            <Link
              href="/contact"
              className="bg-white hover:bg-slate-50 border-2 border-slate-200 hover:border-red-600 text-slate-800 hover:text-red-600 px-8 py-4 rounded-xl text-base font-bold transition-all shadow-xs inline-flex items-center justify-center"
            >
              Request a Quote
            </Link>
          </motion.div>

          {/* Social Links & Trust Indicators */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex items-center space-x-4 pt-2 border-t border-slate-200/80"
          >
            <span className="text-slate-500 text-xs font-semibold uppercase tracking-wider">
              Quick Connect:
            </span>
            <div className="flex space-x-2">
              <a
                href={`https://wa.me/${whatsappNumber}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-white border border-slate-200 hover:bg-emerald-600 hover:text-white hover:border-emerald-600 rounded-xl flex items-center justify-center text-slate-600 shadow-xs transition-colors"
                aria-label="WhatsApp"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
              </a>
              <a
                href={process.env.NEXT_PUBLIC_LINKEDIN_URL || "https://linkedin.com/company/alrashudin"}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-white border border-slate-200 hover:bg-red-600 hover:text-white hover:border-red-600 rounded-xl flex items-center justify-center text-slate-600 shadow-xs transition-colors"
                aria-label="LinkedIn"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </a>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8 }}
        className="absolute bottom-6 left-1/2 transform -translate-x-1/2"
      >
        <div className="flex flex-col items-center space-y-2">
          <span className="text-slate-400 text-xs font-semibold uppercase tracking-wider">
            Scroll to explore
          </span>
          <div className="w-5 h-9 border-2 border-slate-300 rounded-full flex justify-center">
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="w-1.5 h-1.5 bg-red-600 rounded-full mt-2"
            />
          </div>
        </div>
      </motion.div>
    </section>
  );
}
