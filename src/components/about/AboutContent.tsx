"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function AboutContent() {
  return (
    <section className="py-24 bg-white border-t border-slate-200">
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
              Who We Are
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mt-2 mb-6">
              Dedicated Heavy Engineering & Hydraulic Seal Support
            </h2>
            <div className="space-y-4 text-slate-600 leading-relaxed text-base">
              <p>
                Al Rashudin Engineering was established in 2002 in Sharjah, UAE,
                founded on genuine workshop craftsmanship and an uncompromising
                dedication to high-pressure mechanical systems.
              </p>
              <p>
                From our earliest days, we have supported mobile crane rental
                fleets, construction contractors, and industrial plants across the
                Emirates. At a time when complex hydraulic cylinder rebuilds were
                often deferred abroad, Al Rashudin invested directly in specialized
                seal manufacturing, barrel honing, and precision machining tooling.
              </p>
              <p>
                Today, Al Rashudin Engineering stands as a premier regional supplier
                for hydraulic seals, telescopic crane boom wear components, heavy
                fabrication, and cylinder overhauls. We merge deep shop-floor
                mastery with verified materials to tackle the most demanding
                industrial maintenance challenges.
              </p>
            </div>
          </motion.div>

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="relative"
          >
            <div className="relative h-[480px] rounded-3xl overflow-hidden border border-slate-200 shadow-lg">
              <Image
                src="/images/workshop.jpg"
                alt="Al Rashudin Engineering Workshop"
                fill
                className="object-cover"
              />
            </div>
          </motion.div>
        </div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6"
        >
          {[
            { value: "20+", label: "Years in Business" },
            { value: "50+", label: "Skilled Technicians" },
            { value: "5,000+", label: "Cylinders & Parts Serviced" },
            { value: "50+", label: "Export Destinations" },
          ].map((stat, index) => (
            <div
              key={index}
              className="bg-slate-50 border border-slate-200 rounded-2xl p-6 text-center hover:border-red-300 transition-colors"
            >
              <div className="text-3xl sm:text-4xl font-black text-red-600 mb-1">
                {stat.value}
              </div>
              <div className="text-slate-600 text-xs sm:text-sm font-semibold">
                {stat.label}
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
