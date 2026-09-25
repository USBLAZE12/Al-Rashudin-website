"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { companyInfo } from "@/lib/company";

export default function RecentProjects() {
  const projects = companyInfo.projects.slice(0, 3);

  return (
    <section className="py-20 sm:py-28 bg-[#0a0a0a] relative">
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
            <div className="inline-flex items-center gap-2 bg-orange-500/10 border border-orange-500/20 rounded-full px-3 py-1 mb-4">
              <span className="text-orange-400 text-[11px] font-semibold uppercase tracking-widest">Showcase</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight leading-[0.95] mb-4">
              Recent Engineering
              <br />
              <span className="text-gray-500">Projects</span>
            </h2>
            <p className="text-gray-400 text-base sm:text-lg leading-relaxed">
              Real projects from our workshop - crane boom repairs, slewing bearing replacements, and hydraulic overhauls.
            </p>
          </div>
          <Link
            href="/projects"
            className="hidden lg:inline-flex items-center gap-2 border border-white/10 hover:border-white/20 bg-white/[0.03] hover:bg-white/[0.06] text-white px-6 py-3 rounded-xl font-semibold text-sm transition-all"
          >
            View All Projects
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
            >
              <Link
                href="/projects"
                className="group block relative rounded-2xl sm:rounded-[20px] overflow-hidden bg-[#141414] border border-white/[0.06] hover:border-orange-500/20 transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_20px_40px_rgba(0,0,0,0.4)]"
              >
                <div className="relative h-[320px] sm:h-[380px] overflow-hidden">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
                  <div className="absolute inset-0 bg-gradient-to-t from-orange-600/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                  {/* Top badge */}
                  <div className="absolute top-4 left-4">
                    <span className="bg-[#0a0a0a]/80 backdrop-blur-md border border-white/10 text-white text-[11px] font-medium px-3 py-1.5 rounded-full">
                      {project.category}
                    </span>
                  </div>

                  {/* Arrow */}
                  <div className="absolute top-4 right-4 w-9 h-9 bg-white text-black rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-300">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 17L17 7M17 7H7m10 0v10" />
                    </svg>
                  </div>

                  {/* Content */}
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <h3 className="text-lg sm:text-xl font-semibold text-white mb-2 group-hover:text-orange-400 transition-colors leading-tight line-clamp-2">
                      {project.title}
                    </h3>
                    <p className="text-gray-300 text-sm leading-relaxed line-clamp-2 mb-3">
                      {project.description}
                    </p>
                    <div className="flex items-center gap-2 text-xs text-gray-400">
                      <span className="w-1.5 h-1.5 bg-green-500 rounded-full" />
                      {project.details.duration} • {project.details.year}
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* Mobile CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-center mt-8 lg:hidden"
        >
          <Link
            href="/projects"
            className="inline-flex items-center gap-2 bg-white text-black hover:bg-gray-100 px-6 py-3 rounded-xl font-semibold text-sm transition-all"
          >
            View All Projects
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
