"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { companyInfo, getWhatsAppLink } from "@/lib/company";

export default function AboutCTA() {
  return (
    <section className="py-20 sm:py-28 bg-[#0f0f0f]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-[#141414] border border-white/[0.06] rounded-2xl sm:rounded-[24px] p-8 sm:p-12 text-center relative overflow-hidden"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-orange-500/[0.03] to-transparent pointer-events-none" />

          <div className="relative max-w-2xl mx-auto">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white tracking-tight mb-4">
              Ready to Work With Us?
            </h2>
            <p className="text-gray-400 text-sm sm:text-base leading-relaxed mb-8">
              Browse our products or contact our team for help identifying the right hydraulic seal or crane component for your equipment. Fast response on WhatsApp.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <a
                href={getWhatsAppLink("Hello Al Rashideen Team, I want to work with you for crane repair / parts.")}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#25D366] hover:bg-[#128C7E] text-white px-8 py-3 rounded-xl font-semibold text-sm inline-flex items-center justify-center gap-2 transition-all"
              >
                WhatsApp Now
              </a>
              <Link
                href="/contact"
                className="bg-white text-black hover:bg-gray-100 px-8 py-3 rounded-xl font-semibold text-sm inline-flex items-center justify-center gap-2 transition-all"
              >
                Request a Quote
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </Link>
            </div>
            <p className="text-gray-500 text-xs mt-6">
              {companyInfo.contact.primaryPhone} • {companyInfo.contact.email} • {companyInfo.contact.shortAddress}
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
