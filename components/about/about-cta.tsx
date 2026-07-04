'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'

export function AboutCTA() {
  return (
    <section className="bg-[#0F0A2E] py-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <span className="inline-block text-xs font-semibold tracking-widest text-[#9B97C0] uppercase mb-6">
            Let&apos;s Connect
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white text-balance leading-tight mb-6">
            Let&apos;s Build Something{' '}
            <span className="text-[#F97316]">Meaningful</span>{' '}
            Together
          </h2>
          <p className="text-[#9B97C0] text-lg leading-relaxed max-w-2xl mx-auto mb-10 text-pretty">
            Whether you&apos;re looking to grow your business, improve your digital operations, develop an AI-powered product, or simply exchange ideas, I&apos;d love to hear from you.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/work-with-me"
              className="inline-flex items-center gap-2 px-6 py-3 bg-[#F97316] hover:bg-[#ea6b0e] text-white rounded-xl font-semibold transition-colors"
            >
              Work With Me
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-6 py-3 border border-white/20 hover:border-white/40 text-white rounded-xl font-semibold transition-colors"
            >
              Get in Touch
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
