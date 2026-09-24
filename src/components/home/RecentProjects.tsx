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
    <section className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <span className="text-primary text-sm font-medium uppercase tracking-wider">
            Showcase
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-white mt-4 mb-4">
            Recent Projects
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            A quick overview of our recent engineering projects and component
            supply work for heavy equipment and crane systems.
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
              transition={{ duration: 0.5, delay: index * 0.15 }}
            >
              <Link
                href={project.href}
                className="group block relative h-80 rounded-xl overflow-hidden card-hover"
              >
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <span className="text-primary text-xs font-medium uppercase tracking-wider">
                    {project.category}
                  </span>
                  <h3 className="text-xl font-semibold text-white mt-2 group-hover:text-primary transition-colors">
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
          transition={{ duration: 0.5, delay: 0.5 }}
          className="text-center mt-12"
        >
          <Link
            href="/projects"
            className="inline-flex items-center text-primary hover:text-primary-dark font-medium transition-colors"
          >
            View All Projects
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
        </motion.div>
      </div>
    </section>
  );
}