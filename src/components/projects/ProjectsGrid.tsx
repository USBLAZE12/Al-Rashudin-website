"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { companyInfo, getWhatsAppLink } from "@/lib/company";

export default function ProjectsGrid() {
  return (
    <section className="py-8 sm:py-12 bg-[#0a0a0a]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          {companyInfo.projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.06 }}
              className="group"
            >
              <div className="bg-[#141414] border border-white/[0.06] rounded-2xl sm:rounded-[20px] overflow-hidden hover:border-orange-500/20 hover:bg-[#1a1a1a] transition-all duration-500 hover:-translate-y-1 flex flex-col h-full">
                <div className="relative h-[260px] sm:h-[300px] overflow-hidden">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#141414] via-[#141414]/40 to-transparent" />
                  
                  <div className="absolute top-4 left-4 right-4 flex justify-between items-start">
                    <span className="bg-[#0a0a0a]/80 backdrop-blur-md border border-white/10 text-white text-[11px] font-medium px-3 py-1.5 rounded-full">
                      {project.category}
                    </span>
                    <span className="bg-white text-black text-[11px] font-bold px-2.5 py-1 rounded-full">
                      {project.details.year}
                    </span>
                  </div>

                  <div className="absolute bottom-4 left-4 right-4">
                    <div className="flex items-center gap-2 text-xs">
                      <span className="bg-[#25D366] text-white px-2.5 py-1 rounded-full font-medium flex items-center gap-1">
                        <span className="w-1.5 h-1.5 bg-white rounded-full animate-pulse" />
                        Completed
                      </span>
                      <span className="bg-black/50 backdrop-blur-md border border-white/10 text-white/80 px-2.5 py-1 rounded-full">
                        {project.details.duration}
                      </span>
                    </div>
                  </div>
                </div>

                <div className="p-6 flex flex-col flex-1">
                  <h3 className="text-lg sm:text-xl font-semibold text-white mb-3 group-hover:text-orange-400 transition-colors leading-tight">
                    {project.title}
                  </h3>
                  <p className="text-gray-400 text-sm leading-relaxed mb-6 flex-1">
                    {project.description}
                  </p>

                  <div className="space-y-3 p-4 rounded-xl bg-[#0a0a0a] border border-white/[0.04]">
                    {[
                      { label: "Client", value: project.details.client },
                      { label: "Equipment", value: project.details.crane },
                      { label: "Scope", value: project.details.scope },
                    ].map((detail, i) => (
                      <div key={i} className="flex justify-between gap-4 text-xs">
                        <span className="text-gray-500 uppercase tracking-wider font-medium flex-shrink-0">{detail.label}</span>
                        <span className="text-gray-300 text-right truncate">{detail.value}</span>
                      </div>
                    ))}
                  </div>

                  <div className="mt-6 flex gap-2">
                    <a
                      href={getWhatsAppLink(`Hello, I'm interested in similar project: ${project.title}`)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 bg-white text-black hover:bg-gray-100 px-4 py-3 rounded-xl font-semibold text-sm text-center transition-colors"
                    >
                      Similar Project Quote
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
