"use client";

import { motion } from "framer-motion";
import { companyInfo, getWhatsAppLink } from "@/lib/company";

export default function ProductsHero() {
  return (
    <section className="relative pt-28 pb-16 sm:pt-36 sm:pb-20 bg-[#0f0f0f] overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-orange-500/[0.04] via-transparent to-transparent pointer-events-none" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-orange-500/[0.03] rounded-full blur-[80px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto text-center"
        >
          <div className="inline-flex items-center gap-2 bg-white/[0.06] border border-white/[0.08] rounded-full px-4 py-1.5 mb-6">
            <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
            <span className="text-white/70 text-xs font-semibold uppercase tracking-widest">
              500+ Products • OEM Quality • Fast Shipping
            </span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white tracking-tight leading-[0.9] mb-6">
            Browse Our <span className="gradient-text">Product Catalog</span>
          </h1>

          <p className="text-gray-400 text-base sm:text-lg leading-relaxed max-w-2xl mx-auto mb-8">
            Professional-grade hydraulic seals, crane components, and seal kits for Liebherr, Tadano, XCMG, Sany, Zoomlion, and all major brands. OEM quality with global shipping.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a
              href={getWhatsAppLink("Hello, I need help finding a specific part. My machine: [Model] Part needed: [Description]")}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#25D366] hover:bg-[#128C7E] text-white px-6 py-3 rounded-xl font-semibold text-sm inline-flex items-center justify-center gap-2 transition-all"
            >
              Send Photo on WhatsApp
            </a>
            <div className="flex items-center justify-center gap-2 text-xs text-gray-500">
              <span>Quick identification • Response in 2 hours</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
