"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

const categories = [
  {
    name: "Hydraulic Seals",
    description:
      "Complete range of hydraulic seals for cylinders, pumps, and motors",
    image: "/images/seal-kits.jpg",
    href: "/products?category=hydraulic-seals",
  },
  {
    name: "Seal Kits",
    description:
      "Complete seal kit solutions for crane and heavy equipment maintenance",
    image: "/images/o-ring-seals.jpg",
    href: "/products?category=seal-kits",
  },
  {
    name: "Hydraulic Cylinders",
    description:
      "OEM and aftermarket hydraulic cylinders for various equipment types",
    image: "/images/hydraulic-cylinder.jpg",
    href: "/products?category=hydraulic-cylinders",
  },
  {
    name: "Crane Components",
    description:
      "Specialized parts for mobile and crawler crane systems",
    image: "/images/crane-parts.jpg",
    href: "/products?category=crane-components",
  },
  {
    name: "Hydraulic Pumps",
    description:
      "High-performance hydraulic pumps and motor assemblies",
    image: "/images/hydraulic-pump.jpg",
    href: "/products?category=hydraulic-pumps",
  },
  {
    name: "Industrial Parts",
    description:
      "Wide range of industrial components for heavy machinery",
    image: "/images/workshop.jpg",
    href: "/products?category=industrial-parts",
  },
];

export default function Categories() {
  return (
    <section className="py-24 bg-background">
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
            Shop by System
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-white mt-4 mb-4">
            Browse by Category
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Explore our core product categories most customers search first when
            sourcing hydraulic seals and crane replacement parts.
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
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Link
                href={category.href}
                className="group block bg-card border border-border rounded-xl overflow-hidden hover:border-primary/30 transition-all duration-300 card-hover"
              >
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={category.image}
                    alt={category.name}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-card to-transparent" />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-primary transition-colors">
                    {category.name}
                  </h3>
                  <p className="text-gray-400 text-sm mb-4">
                    {category.description}
                  </p>
                  <span className="text-primary text-sm font-medium inline-flex items-center">
                    Browse Category
                    <svg
                      className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform"
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
          transition={{ duration: 0.5, delay: 0.5 }}
          className="text-center mt-12"
        >
          <Link
            href="/products"
            className="inline-flex items-center text-primary hover:text-primary-dark font-medium transition-colors"
          >
            View All Categories
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
      </div>
    </section>
  );
}