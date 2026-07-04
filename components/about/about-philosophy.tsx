'use client'

import { motion } from 'framer-motion'

export function AboutPhilosophy() {
  return (
    <section className="bg-[#F8F7FF] py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <span className="inline-block text-xs font-semibold tracking-widest text-[#2D1BB8] uppercase mb-6">
            Philosophy
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-[#0F0A2E] mb-8 text-balance">
            How I Approach Every Project
          </h2>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="text-xl text-[#4B4680] leading-relaxed font-light text-pretty"
        >
          I enjoy solving complex business problems through thoughtful strategy, data-driven marketing, and practical digital solutions. Whether optimizing marketplace performance, building internal systems, or experimenting with AI-powered products, my goal is always the same: create solutions that are useful, scalable, and designed around real user needs.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, scaleX: 0 }}
          whileInView={{ opacity: 1, scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-12 mx-auto w-16 h-1 bg-[#2D1BB8] rounded-full"
        />
      </div>
    </section>
  )
}
