"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const services = [
  {
    code: "HS",
    number: "Service 01",
    title: "Hydraulic Seal Manufacturing",
    category: "Custom Manufacturing",
    description:
      "Custom hydraulic seal manufacturing for cylinders, pumps, and motors. We produce high-quality seals using premium materials for optimal performance and longevity.",
    image: "/images/seal-kits.jpg",
  },
  {
    code: "SK",
    number: "Service 02",
    title: "Seal Kit Assembly",
    category: "Kit Solutions",
    description:
      "Complete seal kit assembly services for various equipment types. We provide comprehensive kits including all necessary seals, O-rings, and backup rings for cylinder overhaul.",
    image: "/images/o-ring-seals.jpg",
  },
  {
    code: "HC",
    number: "Service 03",
    title: "Hydraulic Cylinder Repair",
    category: "Repair & Overhaul",
    description:
      "Inspection, dismantling, and overhaul of hydraulic cylinders including seal replacement, rod reconditioning, tube honing, and functional testing.",
    image: "/images/hydraulic-cylinder.jpg",
  },
  {
    code: "HP",
    number: "Service 04",
    title: "Hydraulic Pump Service",
    category: "Pump Solutions",
    description:
      "Complete hydraulic pump repair and overhaul services including seal replacement, component inspection, and performance testing for various pump types.",
    image: "/images/hydraulic-pump.jpg",
  },
  {
    code: "CC",
    number: "Service 05",
    title: "Crane Component Supply",
    category: "Component Supply",
    description:
      "Sourcing and supply of specialized crane components including slewing bearings, boom jacks, outrigger cylinders, and related hydraulic parts.",
    image: "/images/crane-parts.jpg",
  },
  {
    code: "CS",
    number: "Service 06",
    title: "Custom Solutions",
    category: "Engineering Solutions",
    description:
      "Custom engineering solutions for unique hydraulic and sealing challenges. We work with clients to develop specialized components for specific applications.",
    image: "/images/workshop.jpg",
  },
];

export default function ServicesList() {
  return (
    <section className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-16">
          {services.map((service, index) => (
            <motion.div
              key={index}
              id={service.code.toLowerCase()}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                index % 2 === 1 ? "lg:flex-row-reverse" : ""
              }`}
            >
              {/* Image */}
              <div
                className={`relative ${
                  index % 2 === 1 ? "lg:order-2" : ""
                }`}
              >
                <div className="relative h-[400px] rounded-xl overflow-hidden">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/40 to-transparent" />
                </div>
                <div className="absolute top-4 left-4 flex space-x-2">
                  <span className="bg-primary/90 text-white text-xs font-medium px-3 py-1 rounded-full">
                    {service.category}
                  </span>
                </div>
                <div className="absolute top-4 right-4">
                  <span className="bg-card/90 backdrop-blur-sm text-white text-xs font-medium px-3 py-1 rounded-full">
                    {service.code} · {service.number}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div
                className={`${
                  index % 2 === 1 ? "lg:order-1" : ""
                }`}
              >
                <span className="text-primary text-xs font-medium uppercase tracking-wider">
                  Engineering Service
                </span>
                <h3 className="text-2xl md:text-3xl font-bold text-white mt-3 mb-4">
                  {service.title}
                </h3>
                <p className="text-gray-400 leading-relaxed mb-6">
                  {service.description}
                </p>
                <Link
                  href="/contact"
                  className="inline-flex items-center text-primary hover:text-primary-dark font-medium transition-colors"
                >
                  Request This Service
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
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}