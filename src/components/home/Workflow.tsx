"use client";

import { motion } from "framer-motion";

const steps = [
  {
    number: "01",
    title: "Share Your Part or Machine Data",
    description:
      "Send a part number, machinery model (Liebherr, Tadano, XCMG, etc.), cylinder dimensions, or photo of the seal.",
    icon: (
      <svg
        className="w-7 h-7"
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
  },
  {
    number: "02",
    title: "Engineering Compatibility Check",
    description:
      "Our technicians cross-reference OEM diagrams, verify groove tolerances, and confirm the exact fitment match.",
    icon: (
      <svg
        className="w-7 h-7"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
        />
      </svg>
    ),
  },
  {
    number: "03",
    title: "Instant Quote & Fast Dispatch",
    description:
      "Receive transparent pricing, lead time, and immediate dispatch via courier across UAE or global air freight.",
    icon: (
      <svg
        className="w-7 h-7"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M9 14l6-6m-5.5.5h.01m4.99 5h.01M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16l3.5-2 3.5 2 3.5-2 3.5 2z"
        />
      </svg>
    ),
  },
];

export default function Workflow() {
  return (
    <section className="py-24 bg-slate-50 border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <span className="text-red-600 text-xs sm:text-sm font-bold uppercase tracking-wider inline-block bg-red-100/60 border border-red-200 px-3.5 py-1.5 rounded-full mb-3">
            Streamlined Support
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mb-4">
            A Straightforward Sourcing Workflow
          </h2>
          <p className="text-slate-600 max-w-2xl mx-auto text-base">
            We eliminate downtime by verifying technical compatibility upfront and delivering fast turnaround on every single order.
          </p>
        </motion.div>

        {/* Steps */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.12 }}
              className="relative bg-white border border-slate-200/90 rounded-2xl p-8 shadow-xs hover:border-red-300 hover:shadow-xl transition-all duration-300"
            >
              {/* Step number watermark */}
              <div className="absolute top-6 right-6 text-5xl font-black text-red-100 select-none">
                {step.number}
              </div>

              {/* Icon */}
              <div className="w-14 h-14 bg-red-50 text-red-600 rounded-2xl flex items-center justify-center mb-6 border border-red-100 shadow-xs">
                {step.icon}
              </div>

              <h3 className="text-xl font-bold text-slate-900 mb-3">
                {step.title}
              </h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Bottom features */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6 pt-10 border-t border-slate-200"
        >
          {[
            "Fast quote within 2-4 hours",
            "100% verified OEM compatibility",
            "Door-to-door UAE courier delivery",
            "Export packing for international orders",
          ].map((feature, index) => (
            <div
              key={index}
              className="flex items-center space-x-3 text-slate-700 text-xs sm:text-sm font-semibold"
            >
              <span className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center flex-shrink-0">
                <svg
                  className="w-3.5 h-3.5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2.5}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              </span>
              <span>{feature}</span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
