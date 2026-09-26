"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { products } from "@/data/products";

export default function FeaturedProducts() {
  const featured = products.slice(0, 6);

  return (
    <section className="py-24 bg-slate-50 border-y border-slate-200">
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
            <span className="text-red-600 text-xs sm:text-sm font-bold uppercase tracking-wider inline-block bg-red-100/60 border border-red-200 px-3.5 py-1.5 rounded-full mb-3">
              Featured Inventory
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              Most Requested Hydraulic Parts
            </h2>
          </div>
          <Link
            href="/products"
            className="mt-4 md:mt-0 inline-flex items-center text-red-600 hover:text-red-700 font-bold text-sm transition-colors group"
          >
            <span>Browse Full Catalog</span>
            <svg
              className="w-4 h-4 ml-1.5 transform group-hover:translate-x-1 transition-transform"
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
          {featured.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
            >
              <Link
                href={`/products/${product.slug}`}
                className="group flex flex-col h-full bg-white border border-slate-200 rounded-2xl overflow-hidden hover:border-red-300 hover:shadow-xl transition-all duration-300 card-hover"
              >
                <div className="relative h-56 overflow-hidden bg-slate-100">
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-108"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-red-600 text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wide shadow-sm">
                      {product.category}
                    </span>
                  </div>
                  <div className="absolute top-4 right-4">
                    <span className="bg-white/95 backdrop-blur-xs text-emerald-700 text-[11px] font-bold px-2.5 py-1 rounded-full shadow-xs border border-emerald-100 flex items-center space-x-1">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                      <span>In Stock</span>
                    </span>
                  </div>
                </div>

                <div className="p-6 flex-1 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-xs font-mono font-bold text-red-600 bg-red-50 border border-red-100 px-2 py-0.5 rounded">
                        {product.partNo}
                      </span>
                      <span className="text-[11px] font-medium text-slate-500">
                        {product.leadTime.split("|")[0].trim()}
                      </span>
                    </div>
                    <h3 className="text-lg font-bold text-slate-900 mb-2 group-hover:text-red-600 transition-colors">
                      {product.name}
                    </h3>
                    <p className="text-slate-600 text-sm mb-4 line-clamp-2 leading-relaxed">
                      {product.description}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                    <span className="text-red-600 text-sm font-semibold inline-flex items-center group-hover:translate-x-1 transition-transform">
                      View Description & Specs
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
                    <span className="text-xs font-semibold text-slate-400">
                      Details →
                    </span>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
