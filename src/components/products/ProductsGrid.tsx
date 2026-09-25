"use client";

import { useState, useMemo } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { companyInfo, getWhatsAppProductLink } from "@/lib/company";

const categories = [
  "All",
  "Hydraulic Seals",
  "Seal Kits",
  "Crane Parts",
  "Hydraulic Cylinders",
  "Fabrication",
  "Crane Components",
];

export default function ProductsGrid() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredProducts = useMemo(() => {
    let filtered = companyInfo.products;

    if (activeCategory !== "All") {
      filtered = filtered.filter((p) =>
        p.category.toLowerCase().includes(activeCategory.toLowerCase()) ||
        (activeCategory === "Crane Parts" && p.category.toLowerCase().includes("crane"))
      );
    }

    if (searchQuery) {
      filtered = filtered.filter(
        (p) =>
          p.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
          p.partNo.toLowerCase().includes(searchQuery.toLowerCase()) ||
          p.category.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    return filtered;
  }, [activeCategory, searchQuery]);

  return (
    <section className="py-8 sm:py-12 bg-[#0a0a0a]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Search & Filter */}
        <div className="flex flex-col lg:flex-row gap-4 lg:items-center lg:justify-between mb-8 sm:mb-12">
          <div className="flex-1 max-w-md relative">
            <svg className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
            <input
              type="text"
              placeholder="Search by name, part no, category..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-[#141414] border border-white/[0.06] rounded-xl pl-10 pr-4 py-3 text-white placeholder-gray-500 text-sm focus:outline-none focus:border-orange-500/30 focus:bg-[#1a1a1a] transition-all"
            />
          </div>

          <div className="flex gap-2 overflow-x-auto pb-2 lg:pb-0 scrollbar-hide">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`whitespace-nowrap px-4 py-2.5 rounded-xl text-xs sm:text-sm font-medium transition-all ${
                  activeCategory === category
                    ? "bg-white text-black"
                    : "bg-[#141414] border border-white/[0.06] text-gray-400 hover:text-white hover:border-white/10 hover:bg-[#1a1a1a]"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Results count */}
        <div className="flex items-center justify-between mb-6">
          <p className="text-gray-500 text-sm">
            Showing <span className="text-white font-medium">{filteredProducts.length}</span> products
            {activeCategory !== "All" && ` in ${activeCategory}`}
          </p>
          <p className="text-gray-600 text-xs hidden sm:block">
            Can&apos;t find?{" "}
            <a href="https://wa.me/971526366779" target="_blank" rel="noopener noreferrer" className="text-orange-400 hover:text-orange-300">
              WhatsApp us a photo
            </a>
          </p>
        </div>

        {/* Products Grid */}
        {filteredProducts.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {filteredProducts.map((product, index) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.04 }}
                layout
                className="group"
              >
                <div className="bg-[#141414] border border-white/[0.06] rounded-2xl overflow-hidden hover:border-white/10 hover:bg-[#1a1a1a] transition-all duration-300 hover:-translate-y-1 flex flex-col h-full">
                  <div className="relative h-56 overflow-hidden">
                    <Image
                      src={product.image}
                      alt={product.name}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-110"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#141414] via-transparent to-transparent" />
                    <div className="absolute top-3 left-3">
                      <span className="bg-[#0a0a0a]/80 backdrop-blur-md border border-white/10 text-white text-[11px] font-medium px-2.5 py-1 rounded-full">
                        {product.category}
                      </span>
                    </div>
                    <div className="absolute top-3 right-3">
                      <span className="bg-white text-black text-[10px] font-bold px-2 py-1 rounded-full">
                        {product.partNo}
                      </span>
                    </div>
                  </div>

                  <div className="p-5 flex flex-col flex-1">
                    <h3 className="text-[15px] font-semibold text-white mb-2 leading-tight group-hover:text-orange-400 transition-colors line-clamp-2">
                      {product.name}
                    </h3>
                    <p className="text-gray-400 text-[13px] leading-relaxed mb-4 line-clamp-2 flex-1">
                      {product.description}
                    </p>

                    <div className="space-y-3">
                      <div className="flex flex-wrap gap-1.5">
                        {product.specs.slice(0, 2).map((spec, i) => (
                          <span key={i} className="text-[11px] bg-white/[0.04] border border-white/[0.06] text-gray-400 px-2 py-1 rounded-full">
                            {spec}
                          </span>
                        ))}
                      </div>

                      <div className="flex gap-2 pt-2">
                        <a
                          href={getWhatsAppProductLink(product.name, product.partNo)}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex-1 bg-[#25D366] hover:bg-[#128C7E] text-white text-xs font-semibold px-3 py-2.5 rounded-xl text-center transition-colors"
                        >
                          WhatsApp
                        </a>
                        <Link
                          href={`/products/${product.id}`}
                          className="flex-1 bg-white/[0.06] hover:bg-white hover:text-black border border-white/10 text-white text-xs font-semibold px-3 py-2.5 rounded-xl text-center transition-all"
                        >
                          Details
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        ) : (
          <div className="text-center py-16 bg-[#141414] border border-white/[0.06] rounded-2xl">
            <div className="w-16 h-16 bg-white/[0.04] rounded-2xl flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>
            <h3 className="text-white font-semibold mb-2">No products found</h3>
            <p className="text-gray-400 text-sm mb-6 max-w-md mx-auto">
              We couldn&apos;t find products matching &quot;{searchQuery}&quot; in {activeCategory}. Try another search or contact us directly.
            </p>
            <a
              href="https://wa.me/971526366779"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex bg-[#25D366] text-white px-6 py-3 rounded-xl font-semibold text-sm"
            >
              WhatsApp for Help
            </a>
          </div>
        )}
      </div>
    </section>
  );
}
