"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

const categories = [
  {
    name: "Hydraulic Seals",
    description:
      "Complete range of hydraulic rod seals, piston seals, and wipers for heavy cylinders and motors.",
    image: "/images/seal-kits.jpg",
    href: "/products?category=hydraulic-seals",
  },
  {
    name: "Seal Kits",
    description:
      "Pre-assembled OEM-grade overhaul kits for mobile cranes, excavators, and industrial presses.",
    image: "/images/o-ring-seals.jpg",
    href: "/products?category=seal-kits",
  },
  {
    name: "Hydraulic Cylinders",
    description:
      "Precision-machined custom and standard hydraulic cylinders built to withstand 350+ bar pressures.",
    image: "/images/hydraulic-cylinder.jpg",
    href: "/products?category=hydraulic-cylinders",
  },
  {
    name: "Crane Components",
    description:
      "Specialized parts for mobile, all-terrain, and crawler crane telescopic boom and slewing systems.",
    image: "/images/crane-parts.jpg",
    href: "/products?category=crane-components",
  },
  {
    name: "Hydraulic Pumps",
    description:
      "High-pressure variable displacement axial piston pumps, gear pumps, and motor rebuild parts.",
    image: "/images/hydraulic-pump.jpg",
    href: "/products?category=hydraulic-pumps",
  },
  {
    name: "Industrial Parts",
    description:
      "Precision turning, CNC components, bronze bushings, and bespoke mechanical spares.",
    image: "/images/workshop.jpg",
    href: "/products",
  },
];

export default function Categories() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <span className="text-red-600 text-xs sm:text-sm font-bold uppercase tracking-wider inline-block bg-red-50 border border-red-100 px-3.5 py-1.5 rounded-full mb-3">
            Shop By System
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mb-4">
            Browse Sourcing Categories
          </h2>
          <p className="text-slate-600 max-w-2xl mx-auto text-base">
            Explore our core product divisions engineered specifically for heavy
            duty crane operators, plant maintenance teams, and hydraulic workshops.
          </p>
        </motion.div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {categories.map((category, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
            >
              <Link
                href={category.href}
                className="group flex flex-col h-full bg-white border border-slate-200 rounded-2xl overflow-hidden hover:border-red-300 hover:shadow-xl transition-all duration-300 card-hover"
              >
                <div className="relative h-56 overflow-hidden bg-slate-100">
                  <Image
                    src={category.image}
                    alt={category.name}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-108"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity" />
                  <div className="absolute bottom-4 left-4">
                    <span className="bg-red-600 text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wide">
                      Heavy Duty
                    </span>
                  </div>
                </div>
                <div className="p-6 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="text-xl font-bold text-slate-900 mb-2 group-hover:text-red-600 transition-colors">
                      {category.name}
                    </h3>
                    <p className="text-slate-600 text-sm leading-relaxed mb-4">
                      {category.description}
                    </p>
                  </div>
                  <span className="text-red-600 text-sm font-semibold inline-flex items-center group-hover:translate-x-1.5 transition-transform">
                    Explore Parts
                    <svg
                      className="w-4 h-4 ml-1.5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </span>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* View All */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-center mt-12"
        >
          <Link
            href="/products"
            className="inline-flex items-center space-x-2 bg-red-50 hover:bg-red-600 text-red-700 hover:text-white border border-red-200 hover:border-red-600 px-6 py-3.5 rounded-xl font-bold text-sm transition-all shadow-xs"
          >
            <span>View Full Product Inventory</span>
            <svg
              className="w-4 h-4"
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
      </div>
    </section>
  );
}
