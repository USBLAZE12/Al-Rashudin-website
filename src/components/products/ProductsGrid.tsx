"use client";

import { useState, useEffect, Suspense } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { useSearchParams } from "next/navigation";
import { products } from "@/data/products";

const categories = [
  "All",
  "Hydraulic Seals",
  "Seal Kits",
  "Crane Components",
  "Hydraulic Cylinders",
  "Hydraulic Pumps",
];

function ProductsGridContent() {
  const searchParams = useSearchParams();
  const [activeCategory, setActiveCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    const catQuery = searchParams.get("category");
    if (catQuery) {
      // Normalize comparison
      const formatted = catQuery.replace(/-/g, " ").toLowerCase();
      const matched = categories.find(
        (c) => c.toLowerCase() === formatted || c.toLowerCase().includes(formatted)
      );
      if (matched) {
        setActiveCategory(matched);
      }
    }
  }, [searchParams]);

  const filteredProducts = products.filter((p) => {
    const matchesCategory =
      activeCategory === "All" || p.category === activeCategory;
    const matchesSearch =
      searchQuery === "" ||
      p.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.partNo.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <section className="py-16 bg-slate-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Search & Category Filter Toolbar */}
        <div className="mb-12 space-y-6">
          <div className="max-w-md mx-auto">
            <div className="relative">
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search by part number, seal type, or keyword..."
                className="w-full bg-white border border-slate-300 rounded-full py-3 pl-12 pr-4 text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:border-red-600 focus:ring-2 focus:ring-red-100 shadow-xs transition-all"
              />
              <svg
                className="w-5 h-5 text-slate-400 absolute left-4 top-1/2 -translate-y-1/2"
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
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery("")}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-xs font-semibold text-slate-400 hover:text-slate-600"
                >
                  Clear
                </button>
              )}
            </div>
          </div>

          {/* Category Filter Pills */}
          <div className="flex flex-wrap justify-center gap-2.5">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-5 py-2 rounded-full text-sm font-semibold transition-all shadow-xs ${
                  activeCategory === category
                    ? "bg-red-600 text-white shadow-md shadow-red-500/20"
                    : "bg-white border border-slate-200 text-slate-700 hover:border-red-300 hover:text-red-600 hover:bg-red-50/40"
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          <div className="text-center text-xs text-slate-500 font-medium">
            Showing {filteredProducts.length} {filteredProducts.length === 1 ? "product" : "products"}
            {activeCategory !== "All" && ` in "${activeCategory}"`}
            {searchQuery && ` matching "${searchQuery}"`}
          </div>
        </div>

        {/* Products Grid */}
        {filteredProducts.length === 0 ? (
          <div className="text-center py-16 bg-white border border-slate-200 rounded-2xl p-8 max-w-lg mx-auto">
            <div className="w-16 h-16 bg-red-50 text-red-600 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg
                className="w-8 h-8"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </div>
            <h3 className="text-lg font-bold text-slate-900 mb-2">No Products Found</h3>
            <p className="text-slate-500 text-sm mb-6">
              We couldn&apos;t find any products matching your current filters. Try searching with a different term or resetting the category.
            </p>
            <button
              onClick={() => {
                setActiveCategory("All");
                setSearchQuery("");
              }}
              className="bg-red-600 hover:bg-red-700 text-white font-semibold text-sm px-6 py-2.5 rounded-full transition-colors"
            >
              Reset Filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProducts.map((product, index) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.04 }}
                layout
              >
                <Link
                  href={`/products/${product.slug}`}
                  className="group flex flex-col h-full bg-white border border-slate-200 rounded-2xl overflow-hidden hover:border-red-300 hover:shadow-xl transition-all duration-300"
                >
                  <div className="relative h-60 overflow-hidden bg-slate-100">
                    <Image
                      src={product.image}
                      alt={product.name}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-108"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="bg-red-600 text-white text-xs font-bold px-3 py-1 rounded-full shadow-sm uppercase tracking-wide">
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
                        <span className="text-[11px] text-slate-500 font-medium">
                          OEM Quality
                        </span>
                      </div>
                      <h3 className="text-lg font-bold text-slate-900 mb-2 group-hover:text-red-600 transition-colors">
                        {product.name}
                      </h3>
                      <p className="text-slate-600 text-sm mb-4 line-clamp-2">
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
                      <span className="text-xs font-medium text-slate-400">
                        Details →
                      </span>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}

export default function ProductsGrid() {
  return (
    <Suspense
      fallback={
        <div className="py-24 text-center bg-slate-50 text-slate-500">
          Loading catalog...
        </div>
      }
    >
      <ProductsGridContent />
    </Suspense>
  );
}
