"use client";

import { motion } from "framer-motion";

const values = [
  {
    number: "01",
    title: "Hands-on Technical Mastery",
    description:
      "Our team is staffed by seasoned machinists, hydraulic mechanics, and toolmakers who understand operating tolerances, seal polymers, and pressure dynamics.",
  },
  {
    number: "02",
    title: "Quality Without Compromise",
    description:
      "We source only certified raw materials and OEM-grade seal compounds. Every component delivered to client sites is inspected to meet strict industrial thresholds.",
  },
  {
    number: "03",
    title: "Rapid Customer Turnaround",
    description:
      "Because crane downtime costs thousands per day, our organization is structured to respond within hours, maintain stock of critical seals, and ship immediately.",
  },
];

export default function TeamValues() {
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
            Our Guiding Values
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            What Drives Our Engineering Standards
          </h2>
        </motion.div>

        {/* Values Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {values.map((value, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.12 }}
              className="bg-white border border-slate-200/90 rounded-2xl p-8 hover:border-red-300 hover:shadow-xl transition-all duration-300 relative shadow-xs"
            >
              <div className="text-5xl font-black text-red-100 mb-4 select-none">
                {value.number}
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">
                {value.title}
              </h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                {value.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
