"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const projects = [
  {
    title: "Liebherr LTM1500 Boom Repair",
    category: "Industrial Support",
    description:
      "Complete boom repair and seal replacement for a 500-ton Liebherr mobile crane. Our team provided hydraulic seal kits and technical support for the telescopic boom cylinders.",
    image: "/images/project1.jpg",
  },
  {
    title: "Crane Hydraulic Cylinder Overhaul",
    category: "Seal Replacement",
    description:
      "Full overhaul of hydraulic cylinders including seal replacement, rod reconditioning, and performance testing for a fleet of mobile cranes.",
    image: "/images/project2.jpg",
  },
  {
    title: "Hydraulic System Restoration",
    category: "Component Repair",
    description:
      "Complete restoration of hydraulic systems for heavy construction equipment, including pump seal kits and cylinder seal solutions.",
    image: "/images/project3.jpg",
  },
  {
    title: "Custom Seal Kit Manufacturing",
    category: "Custom Solutions",
    description:
      "Design and manufacturing of custom seal kits for specialized hydraulic applications in the crane and construction industry.",
    image: "/images/seal-kits.jpg",
  },
  {
    title: "Bulk Order - Industrial Seals",
    category: "Bulk Supply",
    description:
      "Large-scale supply of industrial hydraulic seals and O-rings for a major construction fleet maintenance program.",
    image: "/images/o-ring-seals.jpg",
  },
  {
    title: "Crane Boom Seal Solutions",
    category: "Crane Components",
    description:
      "Specialized seal solutions for crane telescopic boom systems, ensuring reliable performance under extreme conditions.",
    image: "/images/crane-parts.jpg",
  },
];

export default function ProjectsGrid() {
  return (
    <section className="py-16 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group"
            >
              <div className="relative h-64 rounded-xl overflow-hidden mb-6">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute bottom-4 left-4">
                  <span className="bg-primary/90 text-white text-xs font-medium px-3 py-1 rounded-full">
                    {project.category}
                  </span>
                </div>
              </div>
              <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-primary transition-colors">
                {project.title}
              </h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                {project.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}