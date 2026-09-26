"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

const projects = [
  {
    title: "Liebherr LTM1500 Boom Repair",
    category: "Industrial Support",
    image: "/images/project1.jpg",
    href: "/projects",
  },
  {
    title: "Crane Hydraulic Cylinder Overhaul",
    category: "Seal Replacement",
    image: "/images/project2.jpg",
    href: "/projects",
  },
  {
    title: "Hydraulic System Restoration",
    category: "Component Repair",
    image: "/images/project3.jpg",
    href: "/projects",
  },
];

export default function RecentProjects() {
  return (
    <section className="py-24 bg-white border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <span className="text-red-600 text-xs sm:text-sm font-bold uppercase tracking-wider inline-block bg-red-50 border border-red-100 px-3.5 py-1.5 rounded-full mb-3">
            Case Studies & Work
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mb-4">
            Recent Engineering Projects
          </h2>
          <p className="text-slate-600 max-w-2xl mx-auto text-base">
            A quick overview of our recent engineering projects and component
            supply work for heavy equipment and crane systems across the region.
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.12 }}
            >
              <Link
                href={project.href}
                className="group block relative h-84 rounded-2xl overflow-hidden card-hover shadow-sm border border-slate-200"
              >
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-108"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-slate-950/30 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <span className="inline-block bg-red-600 text-white text-[11px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-md mb-2">
                    {project.category}
                  </span>
                  <h3 className="text-xl font-bold text-white group-hover:text-red-400 transition-colors leading-snug">
                    {project.title}
                  </h3>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* View All */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-center mt-12"
        >
          <Link
            href="/projects"
            className="inline-flex items-center space-x-2 bg-red-50 hover:bg-red-600 text-red-700 hover:text-white border border-red-200 hover:border-red-600 px-6 py-3.5 rounded-xl font-bold text-sm transition-all shadow-xs"
          >
            <span>View All Engineering Case Studies</span>
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
        </motion.div>
      </div>
    </section>
  );
}
