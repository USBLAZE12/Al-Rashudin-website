"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function AboutContent() {
  return (
    <section className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <span className="text-primary text-sm font-medium uppercase tracking-wider">
              Who We Are
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-white mt-4 mb-6">
              Trusted Heavy Engineering Support
            </h2>
            <div className="space-y-4 text-gray-400 leading-relaxed">
              <p>
                Al Rashudin Engineering is a precision machining and engineering
                workshop established in 2002, built on hands-on expertise and a
                deep understanding of heavy machinery.
              </p>
              <p>
                From our earliest days, we have served the construction, crane,
                and heavy equipment sectors, delivering reliable engineering
                solutions, custom machining, and component repair. At a time
                when most workshops avoided complex hydraulic systems, Al
                Rashudin was among the first to undertake in-house hydraulic
                seal manufacturing and repairs, setting a benchmark for
                technical capability and confidence in the field.
              </p>
              <p>
                Today, Al Rashudin Engineering is positioned as a specialist
                workshop brand for hydraulic seals, crane structural work,
                precision turning, heavy fabrication, and component
                restoration—combining practical workshop experience with strong
                technical execution to handle complex and demanding repair
                challenges.
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
            <div className="relative h-[500px] rounded-xl overflow-hidden">
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
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8"
        >
          {[
            { value: "20+", label: "Years Experience" },
            { value: "50+", label: "Expert Staff" },
            { value: "5000+", label: "Projects Completed" },
            { value: "50+", label: "Countries Served" },
          ].map((stat, index) => (
            <div
              key={index}
              className="bg-card border border-border rounded-xl p-6 text-center"
            >
              <div className="text-3xl md:text-4xl font-bold text-primary mb-2">
                {stat.value}
              </div>
              <div className="text-gray-400 text-sm">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}