"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

const products = [
  {
    id: 1,
    partNo: "HS-2024-001",
    name: "Hydraulic Cylinder Seal Kit",
    category: "Seal Kits",
    description:
      "Complete seal kit for hydraulic cylinder repair and maintenance",
    image: "/images/seal-kits.jpg",
    href: "/products/hydraulic-cylinder-seal-kit",
  },
  {
    id: 2,
    partNo: "HS-2024-002",
    name: "O-Ring Set - Metric",
    category: "Hydraulic Seals",
    description:
      "Professional grade O-ring set for hydraulic applications",
    image: "/images/o-ring-seals.jpg",
    href: "/products/o-ring-set-metric",
  },
  {
    id: 3,
    partNo: "HS-2024-003",
    name: "Piston Seal Assembly",
    category: "Hydraulic Seals",
    description:
      "High-performance piston seal for heavy-duty hydraulic cylinders",
    image: "/images/hydraulic-cylinder.jpg",
    href: "/products/piston-seal-assembly",
  },
  {
    id: 4,
    partNo: "HS-2024-004",
    name: "Crane Boom Seal Kit",
    category: "Crane Parts",
    description:
      "Specialized seal kit for crane telescopic boom cylinders",
    image: "/images/crane-parts.jpg",
    href: "/products/crane-boom-seal-kit",
  },
  {
    id: 5,
    partNo: "HS-2024-005",
    name: "Hydraulic Pump Seal Kit",
    category: "Seal Kits",
    description:
      "Complete seal kit for hydraulic pump overhaul",
    image: "/images/hydraulic-pump.jpg",
    href: "/products/hydraulic-pump-seal-kit",
  },
  {
    id: 6,
    partNo: "HS-2024-006",
    name: "Rod Wiper Seal",
    category: "Hydraulic Seals",
    description:
      "Dust seal wiper for hydraulic cylinder rods",
    image: "/images/seal-kits.jpg",
    href: "/products/rod-wiper-seal",
  },
];

export default function FeaturedProducts() {
  return (
    <section className="py-24 bg-secondary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex flex-col md:flex-row md:items-end md:justify-between mb-12"
        >
          <div>
            <span className="text-primary text-sm font-medium uppercase tracking-wider">
              Featured Inventory
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-white mt-4">
              Most Requested Parts
            </h2>
          </div>
          <Link
            href="/products"
            className="mt-4 md:mt-0 inline-flex items-center text-primary hover:text-primary-dark font-medium transition-colors"
          >
            Browse Full Products
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

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Link
                href={product.href}
                className="group block bg-card border border-border rounded-xl overflow-hidden hover:border-primary/30 transition-all duration-300 card-hover"
              >
                <div className="relative h-56 overflow-hidden">
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-primary/90 text-white text-xs font-medium px-3 py-1 rounded-full">
                      {product.category}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-gray-500 text-sm">
                      Part No. {product.partNo}
                    </span>
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-primary transition-colors">
                    {product.name}
                  </h3>
                  <p className="text-gray-400 text-sm mb-4">
                    {product.description}
                  </p>
                  <span className="text-primary text-sm font-medium inline-flex items-center">
                    View Details
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
      </div>
    </section>
  );
}