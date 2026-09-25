"use client";

import { motion } from "framer-motion";

const values = [
  {
    number: "01",
    title: "Expert Workforce",
    description:
      "Our team comprises experienced engineers and certified technicians with extensive hands-on expertise in hydraulic systems and mechanical restoration.",
  },
  {
    number: "02",
    title: "Integrity First",
    description:
      "We maintain absolute transparency in our processes, ensuring that every project meets the exact specifications and tolerances required by heavy industry standards.",
  },
  {
    number: "03",
    title: "Continuous Innovation",
    description:
      "We continuously enhance our technical capabilities by staying aligned with evolving crane technologies, hydraulic systems, and advanced mechanical assemblies.",
  },
];

export default function TeamValues() {
  return (
    <section className="py-24 bg-secondary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <span className="text-primary text-sm font-medium uppercase tracking-wider">
            Our Team & Values
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-white mt-4">
            What Drives Us
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
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className="bg-card border border-border rounded-xl p-8 hover:border-primary/30 transition-colors"
            >
              <div className="text-5xl font-bold text-primary/10 mb-4">
                {value.number}
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">
                {value.title}
              </h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                {value.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}