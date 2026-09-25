"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { companyInfo, getWhatsAppProductLink } from "@/lib/company";

export default function FeaturedProducts() {
  const products = companyInfo.products.slice(0, 6);

  return (
    <section className="py-20 sm:py-28 bg-[#0f0f0f] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-12 sm:mb-16"
        >
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 bg-white/[0.06] border border-white/[0.08] rounded-full px-3 py-1 mb-4">
              <span className="text-white/60 text-[11px] font-semibold uppercase tracking-widest">Featured Inventory</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight leading-[0.95] mb-4">
              Most Requested
              <br />
              <span className="text-gray-500">Parts & Kits</span>
            </h2>
            <p className="text-gray-400 text-base sm:text-lg leading-relaxed">
              Professional-grade hydraulic seals, crane components, and seal kits compatible with Liebherr, Tadano, XCMG, Sany, and more.
            </p>
          </div>
          <div className="flex gap-3">
            <Link
              href="/products"
              className="inline-flex items-center gap-2 bg-white text-black hover:bg-gray-100 px-6 py-3 rounded-xl font-semibold text-sm transition-all hover:scale-[1.02]"
            >
              Browse Catalog
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </motion.div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {products.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.06 }}
              className="group"
            >
              <div className="bg-[#141414] border border-white/[0.06] rounded-2xl sm:rounded-[20px] overflow-hidden hover:border-white/10 transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_20px_40px_rgba(0,0,0,0.4)] flex flex-col h-full">
                <div className="relative h-56 sm:h-60 overflow-hidden">
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#141414] via-transparent to-transparent" />
                  
                  <div className="absolute top-4 left-4 flex gap-2">
                    <span className="bg-[#0a0a0a]/80 backdrop-blur-md border border-white/10 text-white text-[11px] font-medium px-3 py-1 rounded-full">
                      {product.category}
                    </span>
                  </div>
                  <div className="absolute top-4 right-4">
                    <span className="bg-orange-500 text-white text-[10px] font-bold tracking-wider uppercase px-2.5 py-1 rounded-full">
                      {product.partNo}
                    </span>
                  </div>

                  {/* Quick action on hover */}
                  <div className="absolute bottom-4 left-4 right-4 flex gap-2 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                    <a
                      href={getWhatsAppProductLink(product.name, product.partNo)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 bg-[#25D366] hover:bg-[#128C7E] text-white text-xs font-semibold px-3 py-2.5 rounded-xl text-center transition-colors"
                    >
                      WhatsApp Enquiry
                    </a>
                    <Link
                      href={`/products/${product.id}`}
                      className="bg-white/10 backdrop-blur-md border border-white/20 hover:bg-white hover:text-black text-white text-xs font-semibold px-3 py-2.5 rounded-xl transition-all text-center"
                    >
                      Details
                    </Link>
                  </div>
                </div>

                <div className="p-5 sm:p-6 flex flex-col flex-1">
                  <h3 className="text-base sm:text-lg font-semibold text-white mb-2 group-hover:text-orange-400 transition-colors leading-tight line-clamp-2">
                    {product.name}
                  </h3>
                  <p className="text-gray-400 text-sm leading-relaxed mb-4 line-clamp-2 flex-1">
                    {product.description}
                  </p>

                  <div className="flex items-center justify-between pt-4 border-t border-white/[0.06]">
                    <div className="flex items-center gap-1.5 text-[11px] text-gray-500">
                      <div className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse" />
                      In Stock • Fast Shipping
                    </div>
                    <Link
                      href={`/products/${product.id}`}
                      className="text-white/60 hover:text-white text-xs font-medium inline-flex items-center gap-1 group/link"
                    >
                      View
                      <svg className="w-3 h-3 group-hover/link:translate-x-0.5 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </Link>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Mobile CTA */}
        <div className="mt-8 sm:hidden">
          <Link
            href="/products"
            className="w-full bg-white text-black px-6 py-4 rounded-xl font-semibold text-center flex items-center justify-center gap-2"
          >
            View All Products
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}
