"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const projects = [
  {
    title: "Liebherr LTM1500 Boom Cylinder Seal Overhaul",
    category: "Mobile Cranes",
    description:
      "Complete boom cylinder teardown, telescopic stage seal kit fitting, and high-pressure load holding testing for a 500-ton all-terrain crane operating in UAE infrastructure works.",
    image: "/images/project1.jpg",
  },
  {
    title: "Tadano ATF 220G Luffing Ram Restoration",
    category: "Cylinder Overhaul",
    description:
      "Emergency turnaround of leaking luffing cylinders. Includes rod micro-polishing, customized polyurethane chevron packing, and 24-hour return-to-service.",
    image: "/images/project2.jpg",
  },
  {
    title: "Excavator Main Pump & Valve Block Rebuild",
    category: "Heavy Earthmoving",
    description:
      "Precision lapping of axial piston swashplates, complete Viton seal replacement, and flow performance validation on test bench for high-duty dredging equipment.",
    image: "/images/project3.jpg",
  },
  {
    title: "Custom High-Tear Polyurethane Seal Machining",
    category: "Custom Manufacturing",
    description:
      "Rapid reverse-engineering of obsolete hydraulic piston and gland seals for specialized European piling rigs without factory parts availability.",
    image: "/images/seal-kits.jpg",
  },
  {
    title: "Fleet Maintenance Seal Kitting Supply",
    category: "Bulk Supply",
    description:
      "Scheduled preventive maintenance packaging of 200+ customized seal kits for a leading regional crane rental conglomerate.",
    image: "/images/o-ring-seals.jpg",
  },
  {
    title: "Port Container Reach Stacker Cylinder Overhaul",
    category: "Harbor Equipment",
    description:
      "Total rebuild of heavy spreader hoist cylinders including induction-hardened rod re-chroming and extreme-duty dual-wiper contamination shields.",
    image: "/images/crane-parts.jpg",
  },
];

export default function ProjectsGrid() {
  return (
    <section className="py-20 bg-slate-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              className="group bg-white border border-slate-200/90 rounded-2xl overflow-hidden hover:border-red-300 hover:shadow-xl transition-all duration-300 flex flex-col"
            >
              <div className="relative h-64 overflow-hidden bg-slate-100">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-108"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-red-600 text-white text-xs font-bold px-3 py-1.5 rounded-full uppercase tracking-wider shadow-sm">
                    {project.category}
                  </span>
                </div>
              </div>
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-red-600 transition-colors leading-snug">
                    {project.title}
                  </h3>
                  <p className="text-slate-600 text-sm leading-relaxed mb-4">
                    {project.description}
                  </p>
                </div>
                <div className="pt-4 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
                  <span className="font-semibold text-emerald-600 flex items-center">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 mr-1.5" />
                    Completed & Tested
                  </span>
                  <span className="text-red-600 font-bold group-hover:translate-x-1 transition-transform inline-flex items-center">
                    Engineering Report →
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
