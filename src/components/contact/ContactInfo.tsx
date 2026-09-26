"use client";

import { motion } from "framer-motion";

const contactDetails = [
  {
    icon: (
      <svg
        className="w-6 h-6"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
        />
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
        />
      </svg>
    ),
    label: "Main Workshop & Office",
    value:
      process.env.NEXT_PUBLIC_COMPANY_ADDRESS ||
      "Industrial Area, Sajaa, Sharjah, United Arab Emirates",
    link: "https://maps.google.com/?q=Industrial+Area+Sajaa+Sharjah+UAE",
  },
  {
    icon: (
      <svg
        className="w-6 h-6"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
        />
      </svg>
    ),
    label: "Direct Phone Support",
    value: process.env.NEXT_PUBLIC_CONTACT_PHONE || "+971 054 247 8662",
    link: `tel:${(
      process.env.NEXT_PUBLIC_CONTACT_PHONE || "+9710542478662"
    ).replace(/\s+/g, "")}`,
  },
  {
    icon: (
      <svg
        className="w-6 h-6"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
        />
      </svg>
    ),
    label: "Official Sales Email",
    value: process.env.NEXT_PUBLIC_CONTACT_EMAIL || "account@alrashideenengg.com",
    link: `mailto:${
      process.env.NEXT_PUBLIC_CONTACT_EMAIL || "account@alrashideenengg.com"
    }`,
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
      </svg>
    ),
    label: "Instant WhatsApp Desk",
    value: "+971 054 247 8662 (WhatsApp)",
    link: `https://wa.me/${
      process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "971542478662"
    }`,
  },
];

export default function ContactInfo() {
  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mb-6 tracking-tight">
        Direct Contact Information
      </h2>

      <div className="space-y-4 mb-8">
        {contactDetails.map((detail, index) => (
          <div
            key={index}
            className="flex items-start space-x-4 p-5 bg-white border border-slate-200/90 rounded-2xl shadow-xs hover:border-red-300 transition-colors"
          >
            <div className="flex-shrink-0 w-12 h-12 bg-red-50 text-red-600 rounded-xl flex items-center justify-center border border-red-100 shadow-xs">
              {detail.icon}
            </div>
            <div>
              <p className="text-slate-500 text-xs font-bold uppercase tracking-wider mb-1">
                {detail.label}
              </p>
              {detail.link ? (
                <a
                  href={detail.link}
                  target={detail.link.startsWith("http") ? "_blank" : undefined}
                  rel={
                    detail.link.startsWith("http")
                      ? "noopener noreferrer"
                      : undefined
                  }
                  className="text-slate-900 font-bold hover:text-red-600 transition-colors text-sm sm:text-base leading-snug block"
                >
                  {detail.value}
                </a>
              ) : (
                <p className="text-slate-900 font-bold text-sm sm:text-base leading-snug">
                  {detail.value}
                </p>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* Workshop Location Banner */}
      <div className="bg-slate-50 border border-slate-200 rounded-2xl p-6 text-center">
        <div className="w-12 h-12 bg-red-100 text-red-600 rounded-xl flex items-center justify-center mx-auto mb-3">
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
            />
          </svg>
        </div>
        <h4 className="font-bold text-slate-900 text-base mb-1">
          Sharjah Industrial Workshop
        </h4>
        <p className="text-slate-600 text-xs sm:text-sm max-w-sm mx-auto mb-4">
          Visit our machining facility with physical seal samples or damaged cylinders for immediate on-site measurement.
        </p>
        <a
          href="https://maps.google.com/?q=Industrial+Area+Sajaa+Sharjah+UAE"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center space-x-1.5 bg-white border border-slate-300 hover:border-red-600 text-slate-800 hover:text-red-600 px-4 py-2 rounded-xl text-xs font-bold transition-all shadow-xs"
        >
          <span>Open Directions on Google Maps</span>
          <svg
            className="w-3.5 h-3.5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
            />
          </svg>
        </a>
      </div>
    </motion.div>
  );
}
