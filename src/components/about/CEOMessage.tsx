"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function CEOMessage() {
  return (
    <section className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="relative"
          >
            <div className="relative h-[500px] rounded-xl overflow-hidden">
              <Image
                src="/images/ceo.jpg"
                alt="CEO"
                fill
                className="object-cover"
              />
            </div>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <span className="text-primary text-sm font-medium uppercase tracking-wider">
              Leadership
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-white mt-4 mb-6">
              CEO&apos;s Message
            </h2>

            <div className="space-y-4">
              <div className="relative">
                <svg
                  className="absolute -top-4 -left-4 w-12 h-12 text-primary/20"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10H14.017zM0 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151C7.546 6.068 5.983 8.789 5.983 11h4v10H0z" />
                </svg>
                <p className="text-gray-300 text-lg leading-relaxed italic pl-8">
                  Since 2002, Al Rashudin Engineering has been built on
                  precision, responsibility, and hands-on engineering. From
                  being among the early workshops to work directly on hydraulic
                  systems and crane components to delivering reliable
                  machining and repairs today, our focus has always been on
                  doing the job right and standing behind our work.
                </p>
              </div>

              <div className="mt-8">
                <p className="text-white font-semibold text-lg">Hamid Ali Qureshi</p>
                <p className="text-primary text-sm">Founder & CEO</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}