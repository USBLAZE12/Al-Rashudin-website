"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const services = [
  {
    code: "HS",
    number: "Service 01",
    title: "Hydraulic Seal Manufacturing & Machining",
    category: "Custom Machining",
    description:
      "On-demand CNC machining of non-standard and obsolete seal profiles using high-grade polyurethane, Viton, NBR, and PTFE. Perfect for urgent plant breakdowns and legacy crane systems.",
    image: "/images/seal-kits.jpg",
  },
  {
    code: "SK",
    number: "Service 02",
    title: "Seal Kit Assembly & OEM Kitting",
    category: "Custom Kits",
    description:
      "Comprehensive custom packaging of complete cylinder overhaul seal sets. Each kit is individually labeled and tagged with OEM cross-references for rapid field installation.",
    image: "/images/o-ring-seals.jpg",
  },
  {
    code: "HC",
    number: "Service 03",
    title: "Hydraulic Cylinder Repair & Honing",
    category: "Overhaul & Testing",
    description:
      "Full teardown, barrel internal honing, hard chrome rod re-plating or manufacturing, new seal fitting, and hydrostatic pressure testing up to 450 bar before signoff.",
    image: "/images/hydraulic-cylinder.jpg",
  },
  {
    code: "HP",
    number: "Service 04",
    title: "Hydraulic Pump & Motor Servicing",
    category: "Rotary Equipment",
    description:
      "Overhaul of axial piston, vane, and gear pumps for leading machinery brands. We lap valve plates, replace rotary shaft seals, inspect swashplates, and dyno test volumetric output.",
    image: "/images/hydraulic-pump.jpg",
  },
  {
    code: "CC",
    number: "Service 05",
    title: "Crane Component Supply & Turntables",
    category: "Component Sourcing",
    description:
      "Direct sourcing and technical verification of crane slewing bearings, outrigger jacks, telescopic section wear pads, sheaves, and counterbalance valves.",
    image: "/images/crane-parts.jpg",
  },
  {
    code: "CS",
    number: "Service 06",
    title: "Bespoke Heavy Machining Solutions",
    category: "Precision Engineering",
    description:
      "Heavy lathe turning, milling, bronze bushing fabrication, and metallurgical advice for severe industrial equipment operating in extreme Middle East conditions.",
    image: "/images/workshop.jpg",
  },
];

export default function ServicesList() {
  return (
    <section className="py-24 bg-slate-50 border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-16">
          {services.map((service, index) => (
            <motion.div
              key={service.code}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center bg-white border border-slate-200/90 rounded-3xl p-6 sm:p-10 shadow-xs hover:border-red-300 hover:shadow-xl transition-all duration-300"
            >
              {/* Image */}
              <div
                className={`relative h-[300px] sm:h-[360px] rounded-2xl overflow-hidden bg-slate-100 ${
                  index % 2 === 1 ? "lg:order-2" : ""
                }`}
              >
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-red-600 text-white text-xs font-bold px-3 py-1.5 rounded-full uppercase tracking-wider shadow-sm">
                    {service.category}
                  </span>
                </div>
                <div className="absolute top-4 right-4">
                  <span className="bg-white/95 backdrop-blur-xs text-slate-900 border border-slate-200 text-xs font-bold px-3 py-1.5 rounded-full shadow-xs">
                    {service.code} · {service.number}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className={`${index % 2 === 1 ? "lg:order-1" : ""}`}>
                <span className="text-red-600 text-xs font-bold uppercase tracking-wider inline-block bg-red-50 border border-red-100 px-3 py-1 rounded-md mb-3">
                  Engineering Capability
                </span>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mb-4 tracking-tight">
                  {service.title}
                </h3>
                <p className="text-slate-600 leading-relaxed mb-6 text-base">
                  {service.description}
                </p>
                <div className="flex flex-wrap gap-4 items-center">
                  <Link
                    href={`/contact?subject=${encodeURIComponent(
                      service.title
                    )}#inquiry`}
                    className="inline-flex items-center space-x-2 bg-red-600 hover:bg-red-700 text-white font-bold text-sm px-6 py-3 rounded-xl transition-all shadow-sm shadow-red-500/20"
                  >
                    <span>Request This Service</span>
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

                  <a
                    href={`https://wa.me/${
                      process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "971542478662"
                    }?text=${encodeURIComponent(
                      `Hello, I would like to inquire about your ${service.title} service.`
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center space-x-1.5 text-emerald-700 hover:text-emerald-800 font-bold text-sm px-4 py-3 bg-emerald-50 hover:bg-emerald-100 rounded-xl transition-colors border border-emerald-200"
                  >
                    <span>WhatsApp Inquiry</span>
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
