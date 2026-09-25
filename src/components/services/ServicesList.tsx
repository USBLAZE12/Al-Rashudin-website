"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { companyInfo, getWhatsAppServiceLink } from "@/lib/company";

export default function ServicesList() {
  return (
    <section className="py-20 sm:py-28 bg-[#0a0a0a]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-20 sm:space-y-28">
          {companyInfo.services.map((service, index) => (
            <motion.div
              key={service.id}
              id={service.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
              className={`grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center ${
                index % 2 === 1 ? "lg:[&>*:first-child]:order-2" : ""
              }`}
            >
              {/* Image */}
              <div className="relative group">
                <div className="relative h-[340px] sm:h-[420px] lg:h-[480px] rounded-2xl sm:rounded-[24px] overflow-hidden bg-[#141414] border border-white/[0.06] group-hover:border-orange-500/20 transition-colors">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                  <div className="absolute inset-0 bg-gradient-to-br from-orange-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>

                {/* Floating badges */}
                <div className="absolute top-4 left-4 flex gap-2">
                  <span className="bg-[#0a0a0a]/80 backdrop-blur-md border border-white/10 text-white text-[11px] font-semibold tracking-wide px-3 py-1.5 rounded-full">
                    {service.category}
                  </span>
                </div>
                <div className="absolute top-4 right-4">
                  <span className="bg-orange-500 text-white text-[11px] font-bold tracking-widest px-3 py-1.5 rounded-full">
                    {service.code} • {String(index + 1).padStart(2, "0")}
                  </span>
                </div>

                {/* Bottom feature */}
                <div className="absolute bottom-4 left-4 right-4 bg-[#0a0a0a]/80 backdrop-blur-xl border border-white/10 rounded-xl p-3 flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-green-500/10 border border-green-500/20 flex items-center justify-center flex-shrink-0">
                    <svg className="w-4 h-4 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-white text-xs font-semibold">{service.features[0]}</p>
                    <p className="text-gray-400 text-[11px]">{service.features.length} key features included</p>
                  </div>
                </div>
              </div>

              {/* Content */}
              <div>
                <div className="inline-flex items-center gap-2 bg-white/[0.04] border border-white/[0.06] rounded-full px-3 py-1 mb-4">
                  <span className="text-gray-400 text-[11px] font-semibold uppercase tracking-widest">
                    Service {String(index + 1).padStart(2, "0")} • {service.code}
                  </span>
                </div>

                <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white tracking-tight leading-[0.95] mb-4">
                  {service.title}
                </h3>

                <p className="text-gray-400 text-[15px] leading-relaxed mb-6">
                  {service.longDescription}
                </p>

                <div className="space-y-2.5 mb-8">
                  {service.features.map((feature, i) => (
                    <div key={i} className="flex items-center gap-3 text-sm">
                      <div className="w-5 h-5 rounded-full bg-orange-500/10 border border-orange-500/20 flex items-center justify-center flex-shrink-0">
                        <svg className="w-3 h-3 text-orange-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <span className="text-gray-300">{feature}</span>
                    </div>
                  ))}
                </div>

                <div className="flex flex-col sm:flex-row gap-3">
                  <a
                    href={getWhatsAppServiceLink(service.title)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-[#25D366] hover:bg-[#128C7E] text-white px-6 py-3 rounded-xl font-semibold text-sm inline-flex items-center justify-center gap-2 transition-all hover:scale-[1.02]"
                  >
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                    </svg>
                    Enquire on WhatsApp
                  </a>
                  <a
                    href="#"
                    onClick={(e) => {
                      e.preventDefault();
                      document.getElementById("contact-cta")?.scrollIntoView({ behavior: "smooth" });
                    }}
                    className="border border-white/10 hover:border-white/20 bg-white/[0.03] hover:bg-white/[0.06] text-white px-6 py-3 rounded-xl font-semibold text-sm inline-flex items-center justify-center transition-all"
                  >
                    Request Quote
                    <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
