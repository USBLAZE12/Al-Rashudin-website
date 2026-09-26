"use client";

import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

const heroSlides = [
  {
    id: 1,
    image: "/images/hero-slide-1.jpg",
    badge: "Precision Hydraulic Engineering • Sharjah, UAE",
    title: "Custom Hydraulic Seals & Precision Manufacturing",
    description:
      "Al Rashudin Equipment specializes in manufacturing hydraulic and heavy-vehicle seals in custom sizes, while also supplying standard-size seals and a range of hydraulic components such as bladder accumulators, hydraulic pumps, and related parts.",
    tag: "Custom Seals Manufacturing",
  },
  {
    id: 2,
    image: "/images/hero-slide-2.jpg",
    badge: "Heavy Equipment & Crane Cylinder Specialists",
    title: "Crane Parts & Cylinder Reconditioning Overhaul",
    description:
      "Full teardown, chrome piston rod repair, and complete hydraulic cylinder rebuilding for mobile cranes, excavators, and heavy machinery fleets across the UAE.",
    tag: "Cylinder Rebuild & Crane Parts",
  },
  {
    id: 3,
    image: "/images/hero-slide-3.jpg",
    badge: "Hydraulic Pumps, Motors & Accumulators",
    title: "Hydraulic Components & Bladder Accumulators",
    description: "Supplying high-pressure hydraulic pumps, bladder accumulators, control valves, and precision heavy-vehicle replacement parts with OEM specifications.",
    tag: "Hydraulic Power Solutions",
  },
  {
    id: 4,
    image: "/images/hero-slide-4.jpg",
    badge: "Custom Sizes & Standard Seals Stock",
    title: "Heavy-Vehicle Seals & Complete Seal Kits",
    description:
      "Immediate workshop availability of O-ring kits, piston seals, wiper seals, rod seals, and bespoke sealing solutions engineered for extreme pressure applications.",
    tag: "Heavy-Vehicle Seals Stock",
  },
  {
    id: 5,
    image: "/images/hero-slide-5.jpg",
    badge: "Sharjaa Workshop & On-Site Engineering Support",
    title: "Crane Structural Repair & Mechanical Maintenance",
    description:
      "Comprehensive crane boom repair, structural inspection, and hydraulic system troubleshooting combining workshop precision with expert technical guidance.",
    tag: "Crane Maintenance Bay",
  },
];

export default function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const whatsappNumber =
    process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "971542478662";

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
  }, []);

  const prevSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev - 1 + heroSlides.length) % heroSlides.length);
  }, []);

  // Auto-advance slideshow every 5 seconds
  useEffect(() => {
    if (!isAutoPlaying) return;
    const interval = setInterval(() => {
      nextSlide();
    }, 5000);
    return () => clearInterval(interval);
  }, [isAutoPlaying, nextSlide]);

  return (
    <section
      className="relative min-h-[92vh] lg:min-h-screen flex items-center overflow-hidden bg-slate-950 pt-20"
      onMouseEnter={() => setIsAutoPlaying(false)}
      onMouseLeave={() => setIsAutoPlaying(true)}
    >
      {/* Background Slideshow with Crossfade */}
      <div className="absolute inset-0 z-0">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentSlide}
            initial={{ opacity: 0, scale: 1.05 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
            className="absolute inset-0"
          >
            <Image
              src={heroSlides[currentSlide].image}
              alt={heroSlides[currentSlide].title}
              fill
              className="object-cover object-center"
              priority
            />
          </motion.div>
        </AnimatePresence>

        {/* High-Contrast Gradient Overlay for Legibility */}
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950/90 via-slate-950/75 to-slate-950/40 z-10" />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-slate-950/30 z-10" />
      </div>

      {/* Hero Content */}
      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32 w-full">
        <div className="max-w-3xl">
          {/* Tag / Badge */}
          <AnimatePresence mode="wait">
            <motion.div
              key={`badge-${currentSlide}`}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.4 }}
              className="inline-flex items-center space-x-2.5 bg-red-600/90 backdrop-blur-md border border-red-500/50 rounded-full px-4 py-2 mb-6 shadow-lg"
            >
              <span className="w-2.5 h-2.5 bg-white rounded-full animate-pulse" />
              <span className="text-white text-xs sm:text-sm font-bold uppercase tracking-wider">
                {heroSlides[currentSlide].badge}
              </span>
            </motion.div>
          </AnimatePresence>

          {/* Heading */}
          <AnimatePresence mode="wait">
            <motion.h1
              key={`title-${currentSlide}`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4, delay: 0.05 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-black text-white leading-[1.12] mb-6 tracking-tight drop-shadow-md"
            >
              {heroSlides[currentSlide].title.split("&").map((part, index, array) => (
                <span key={index}>
                  {part}
                  {index < array.length - 1 && (
                    <span className="text-red-500 font-black"> &</span>
                  )}
                </span>
              ))}
            </motion.h1>
          </AnimatePresence>

          {/* Description */}
          <AnimatePresence mode="wait">
            <motion.p
              key={`desc-${currentSlide}`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4, delay: 0.1 }}
              className="text-base sm:text-lg md:text-xl text-slate-200 mb-8 leading-relaxed max-w-2xl font-normal drop-shadow-sm"
            >
              {heroSlides[currentSlide].description}
            </motion.p>
          </AnimatePresence>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 mb-10"
          >
            <Link
              href="/products"
              className="bg-red-600 hover:bg-red-700 text-white px-8 py-4 rounded-xl text-base font-bold transition-all shadow-lg shadow-red-600/40 hover:shadow-red-600/60 inline-flex items-center justify-center group"
            >
              Explore Products
              <svg
                className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform"
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

            <Link
              href="/contact"
              className="bg-slate-900/80 hover:bg-slate-900 text-white border-2 border-slate-600 hover:border-red-500 px-8 py-4 rounded-xl text-base font-bold transition-all shadow-md backdrop-blur-sm inline-flex items-center justify-center"
            >
              Request a Quote
            </Link>
          </motion.div>

          {/* Social Quick Connect */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex items-center space-x-4 pt-4 border-t border-slate-800/80"
          >
            <span className="text-slate-400 text-xs font-semibold uppercase tracking-wider">
              Quick Connect:
            </span>
            <div className="flex space-x-2">
              <a
                href={`https://wa.me/${whatsappNumber}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-slate-900/90 border border-slate-700 hover:bg-emerald-600 hover:text-white hover:border-emerald-600 rounded-xl flex items-center justify-center text-slate-300 transition-colors shadow-sm"
                aria-label="WhatsApp"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
              </a>
              <a
                href="tel:+9710542478662"
                className="w-10 h-10 bg-slate-900/90 border border-slate-700 hover:bg-red-600 hover:text-white hover:border-red-600 rounded-xl flex items-center justify-center text-slate-300 transition-colors shadow-sm"
                aria-label="Call Us"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </a>
            </div>
            <span className="text-slate-300 font-bold text-xs sm:text-sm">
              +971 054 247 8662
            </span>
          </motion.div>
        </div>
      </div>

      {/* Slideshow Controls Bar at Bottom Right */}
      <div className="absolute bottom-8 right-4 sm:right-8 lg:right-12 z-20 flex flex-col items-end space-y-3">
        {/* Navigation Arrows & Counter */}
        <div className="flex items-center space-x-3 bg-slate-900/80 backdrop-blur-md border border-slate-800 p-2 rounded-2xl shadow-2xl">
          <button
            onClick={prevSlide}
            className="p-2.5 rounded-xl text-slate-300 hover:text-white hover:bg-red-600 transition-colors"
            aria-label="Previous image"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          <span className="text-xs font-mono font-bold text-white px-2">
            0{currentSlide + 1} / 0{heroSlides.length}
          </span>

          <button
            onClick={nextSlide}
            className="p-2.5 rounded-xl text-slate-300 hover:text-white hover:bg-red-600 transition-colors"
            aria-label="Next image"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>

        {/* Thumbnail Dots */}
        <div className="flex space-x-2 bg-slate-900/60 backdrop-blur-md border border-slate-800/80 px-3 py-2 rounded-full">
          {heroSlides.map((slide, idx) => (
            <button
              key={slide.id}
              onClick={() => setCurrentSlide(idx)}
              className={`h-2.5 rounded-full transition-all duration-300 ${
                currentSlide === idx ? "w-8 bg-red-600" : "w-2.5 bg-slate-600 hover:bg-slate-400"
              }`}
              aria-label={`Go to slide ${idx + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
