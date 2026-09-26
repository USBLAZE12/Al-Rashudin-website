"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function ProjectsCTA() {
  const whatsappNumber =
    process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "971501234567";

  return (
    <section className="py-24 bg-white border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="bg-gradient-to-br from-red-600 via-red-700 to-red-800 rounded-3xl p-10 sm:p-14 text-center text-white shadow-xl shadow-red-900/10 relative overflow-hidden"
        >
          <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none" />

          <div className="relative z-10 max-w-2xl mx-auto">
            <span className="inline-block bg-white/20 backdrop-blur-xs text-white text-xs font-bold uppercase tracking-wider px-3.5 py-1.5 rounded-full mb-4">
              Direct Workshop Support
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold mb-4 tracking-tight">
              Have a Crane or Hydraulic Cylinder Project?
            </h2>
            <p className="text-red-100 text-sm sm:text-base max-w-xl mx-auto mb-8 leading-relaxed">
              Let&apos;s evaluate your requirements. Our engineering team is ready
              to provide technical sizing, seal kitting, and repair estimates.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <a
                href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
                  "Hello, I have an engineering project / cylinder repair requirement."
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white hover:bg-slate-100 text-slate-900 px-8 py-4 rounded-xl text-base font-bold transition-all shadow-md hover:shadow-lg inline-flex items-center justify-center"
              >
                <svg
                  className="w-5 h-5 mr-2 text-emerald-600"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                Chat on WhatsApp
              </a>
              <Link
                href="/contact"
                className="bg-red-950/60 hover:bg-red-950 text-white border border-white/30 px-8 py-4 rounded-xl text-base font-bold transition-all shadow-md inline-flex items-center justify-center"
              >
                Submit Project Details
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
