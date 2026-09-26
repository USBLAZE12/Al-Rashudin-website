"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

const features = [
  {
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
      </svg>
    ),
    title: "Precision Engineering & OEM Compliance",
    description:
      "Every seal and cylinder part is inspected against tight dimensional tolerances, ensuring reliable pressure holding and preventing unplanned crane downtime.",
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
      </svg>
    ),
    title: "Fast Response & WhatsApp Direct Desk",
    description:
      "Rapid quotation within hours, instant WhatsApp technical coordination, and rapid troubleshooting from experienced hydraulic mechanics.",
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
      </svg>
    ),
    title: "UAE Hub with Worldwide Export",
    description:
      "Operating directly from Sharjah's industrial corridor, we dispatch daily across the UAE and export to 50+ countries via air and courier networks.",
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
      </svg>
    ),
    title: "Comprehensive Stock & Custom Machining",
    description:
      "From standard metric/imperial seals to custom CNC-turned polyurethane profiles, we handle both standard inventory and obsolete seal replication.",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <span className="text-red-600 text-xs sm:text-sm font-bold uppercase tracking-wider inline-block bg-red-50 border border-red-100 px-3.5 py-1.5 rounded-full mb-3">
              Why Choose Al Rashudin
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mt-2 mb-6">
              The Engineering Advantage for Heavy Machinery
            </h2>
            <p className="text-slate-600 mb-8 leading-relaxed text-base">
              With over 20 years of hands-on expertise in the UAE, Al Rashudin
              combines deep practical knowledge of hydraulic cylinders and crane
              components with swift, dependable service to keep your heavy
              equipment running at peak efficiency.
            </p>

            <div className="space-y-6">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: index * 0.08 }}
                  className="flex items-start space-x-4"
                >
                  <div className="flex-shrink-0 w-10 h-10 bg-red-50 text-red-600 rounded-xl flex items-center justify-center font-bold border border-red-100 shadow-xs mt-0.5">
                    {feature.icon}
                  </div>
                  <div>
                    <h3 className="text-slate-900 font-bold mb-1 text-base">
                      {feature.title}
                    </h3>
                    <p className="text-slate-600 text-sm leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="mt-8">
              <Link
                href="/about"
                className="inline-flex items-center space-x-2 text-red-600 hover:text-red-700 font-bold text-sm group"
              >
                <span>Read About Our Company Heritage</span>
                <svg
                  className="w-4 h-4 transform group-hover:translate-x-1 transition-transform"
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
            </div>
          </motion.div>

          {/* Image & Stats Overlay */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="relative"
          >
            <div className="relative h-[480px] sm:h-[540px] rounded-3xl overflow-hidden border border-slate-200 shadow-lg">
              <Image
                src="/images/workshop.jpg"
                alt="Al Rashudin Engineering Workshop"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent" />
            </div>

            {/* Stats overlay */}
            <div className="absolute bottom-6 left-6 right-6 grid grid-cols-3 gap-3">
              {[
                { value: "20+", label: "Years Experience" },
                { value: "5,000+", label: "Projects Done" },
                { value: "50+", label: "Countries Served" },
              ].map((stat, index) => (
                <div
                  key={index}
                  className="bg-white/95 backdrop-blur-md border border-slate-200/90 rounded-2xl p-4 text-center shadow-lg"
                >
                  <div className="text-2xl sm:text-3xl font-black text-red-600">
                    {stat.value}
                  </div>
                  <div className="text-[11px] sm:text-xs font-semibold text-slate-600 mt-1">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
