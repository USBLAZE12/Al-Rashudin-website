"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

const categories = [
  "All",
  "Hydraulic Seals",
  "Seal Kits",
  "Crane Components",
  "Hydraulic Cylinders",
  "Hydraulic Pumps",
];

const products = [
  {
    id: 1,
    partNo: "HS-2024-001",
    name: "Hydraulic Cylinder Seal Kit",
    category: "Seal Kits",
    description:
      "Complete seal kit for hydraulic cylinder repair and maintenance",
    image: "/images/seal-kits.jpg",
  },
  {
    id: 2,
    partNo: "HS-2024-002",
    name: "O-Ring Set - Metric",
    category: "Hydraulic Seals",
    description:
      "Professional grade O-ring set for hydraulic applications",
    image: "/images/o-ring-seals.jpg",
  },
  {
    id: 3,
    partNo: "HS-2024-003",
    name: "Piston Seal Assembly",
    category: "Hydraulic Seals",
    description:
      "High-performance piston seal for heavy-duty hydraulic cylinders",
    image: "/images/hydraulic-cylinder.jpg",
  },
  {
    id: 4,
    partNo: "HS-2024-004",
    name: "Crane Boom Seal Kit",
    category: "Crane Components",
    description:
      "Specialized seal kit for crane telescopic boom cylinders",
    image: "/images/crane-parts.jpg",
  },
  {
    id: 5,
    partNo: "HS-2024-005",
    name: "Hydraulic Pump Seal Kit",
    category: "Seal Kits",
    description:
      "Complete seal kit for hydraulic pump overhaul",
    image: "/images/hydraulic-pump.jpg",
  },
  {
    id: 6,
    partNo: "HS-2024-006",
    name: "Rod Wiper Seal",
    category: "Hydraulic Seals",
    description:
      "Dust seal wiper for hydraulic cylinder rods",
    image: "/images/seal-kits.jpg",
  },
  {
    id: 7,
    partNo: "HS-2024-007",
    name: "Hydraulic Cylinder Assembly",
    category: "Hydraulic Cylinders",
    description:
      "Complete hydraulic cylinder for various applications",
    image: "/images/hydraulic-cylinder.jpg",
  },
  {
    id: 8,
    partNo: "HS-2024-008",
    name: "Crane Slewing Bearing Seal",
    category: "Crane Components",
    description:
      "Specialized seal for crane slewing bearing systems",
    image: "/images/crane-parts.jpg",
  },
  {
    id: 9,
    partNo: "HS-2024-009",
    name: "Hydraulic Pump Assembly",
    category: "Hydraulic Pumps",
    description:
      "High-performance hydraulic pump for heavy equipment",
    image: "/images/hydraulic-pump.jpg",
  },
];

export default function ProductsGrid() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredProducts =
    activeCategory === "All"
      ? products
      : products.filter((p) => p.category === activeCategory);

  return (
    <section className="py-16 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-colors ${
                activeCategory === category
                  ? "bg-primary text-white"
                  : "bg-card border border-border text-gray-400 hover:text-white hover:border-primary/30"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProducts.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: index * 0.05 }}
              layout
            >
              <Link
                href={`/products/${product.id}`}
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