"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

const features = [
  {
    icon: "✓",
    title: "Precision & Reliability",
    description:
      "Every seal and component is tested against strict fitment and durability standards, ensuring safe, reliable performance for heavy equipment operations.",
  },
  {
    icon: "✓",
    title: "Fast Communication & Support",
    description:
      "Quick response times, WhatsApp coordination, and direct technical guidance for urgent orders, seal replacements, and maintenance requirements.",
  },
  {
    icon: "✓",
    title: "Global Shipping Reach",
    description:
      "We serve customers across 50+ countries with reliable shipping solutions designed for export-ready orders and bulk requirements.",
  },
  {
    icon: "✓",
    title: "Extensive Inventory",
    description:
      "From routine service seals to hard-to-source specialty components, we support a wide range of hydraulic and crane system requirements.",
  },
];

export default function WhyChooseUs() {
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
              Why Choose Us
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-white mt-4 mb-6">
              The Al Rashudin Advantage
            </h2>
            <p className="text-gray-400 mb-8 leading-relaxed">
              Comprehensive hydraulic seal and crane component solutions across
              the UAE and beyond. From seal identification and sourcing to
              delivery and technical support, we combine product expertise with
              reliable service to keep your operations running smoothly.
            </p>

            <div className="space-y-6">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  className="flex items-start space-x-4"
                >
                  <div className="flex-shrink-0 w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center text-primary font-bold">
                    {feature.icon}
                  </div>
                  <div>
                    <h3 className="text-white font-semibold mb-1">
                      {feature.title}
                    </h3>
                    <p className="text-gray-400 text-sm">
                      {feature.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>

            <Link
              href="/about"
              className="mt-8 inline-flex items-center text-primary hover:text-primary-dark font-medium transition-colors"
            >
              About Company
              <svg
                className="w-5 h-5 ml-2"
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
              <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent" />
            </div>
            {/* Stats overlay */}
            <div className="absolute bottom-6 left-6 right-6 grid grid-cols-3 gap-4">
              {[
                { value: "20+", label: "Years Experience" },
                { value: "5000+", label: "Projects Done" },
                { value: "50+", label: "Countries Served" },
              ].map((stat, index) => (
                <div
                  key={index}
                  className="bg-card/90 backdrop-blur-sm border border-border rounded-lg p-4 text-center"
                >
                  <div className="text-2xl font-bold text-primary">
                    {stat.value}
                  </div>
                  <div className="text-xs text-gray-400 mt-1">
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