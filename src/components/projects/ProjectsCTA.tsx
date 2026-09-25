"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { companyInfo, getWhatsAppLink } from "@/lib/company";

export default function ProjectsCTA() {
  return (
    <section className="py-16 sm:py-20 bg-[#0f0f0f]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="rounded-2xl sm:rounded-[24px] bg-gradient-to-br from-[#141414] to-[#0a0a0a] border border-white/[0.06] p-8 sm:p-12 text-center relative overflow-hidden"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-orange-500/[0.03] to-transparent pointer-events-none" />

          <div className="relative max-w-2xl mx-auto">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white tracking-tight mb-4">
              Have a Project in Mind?
            </h2>
            <p className="text-gray-400 text-sm sm:text-base leading-relaxed mb-8">
              Let&apos;s discuss your requirements. Whether it&apos;s boom structural repair with Strenx 960, slewing bearing replacement, or hydraulic cylinder overhaul - our team is ready.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <a
                href={getWhatsAppLink("Hello, I have a project similar to your recent work. Details:")}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#25D366] hover:bg-[#128C7E] text-white px-8 py-3 rounded-xl font-semibold text-sm inline-flex items-center justify-center gap-2 transition-all"
              >
                WhatsApp Your Project
              </a>
              <Link
                href="/contact"
                className="bg-white text-black hover:bg-gray-100 px-8 py-3 rounded-xl font-semibold text-sm inline-flex items-center justify-center gap-2 transition-all"
              >
                Start Your Project
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </Link>
            </div>
            <p className="text-gray-500 text-xs mt-6">
              Avg. response: 2 hours • {companyInfo.contact.primaryPhone} • {companyInfo.contact.shortAddress}
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
