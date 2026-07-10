'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { ArrowRight, Mail } from 'lucide-react'

export function RecruitCTA() {
  return (
    <section className="bg-gradient-to-b from-[#2D1BB8] to-[#1A0F7A] text-white py-20 lg:py-28">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="space-y-8"
        >
          <div className="space-y-4">
            <h2 className="text-4xl font-bold text-balance">Ready to work together?</h2>
            <p className="text-lg text-white/80 text-balance">
              I&apos;m open to full-time roles, contract opportunities, and strategic consulting positions with teams building scalable, profitable businesses.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row justify-center gap-4 pt-4">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 bg-white text-[#2D1BB8] px-8 py-3 rounded-lg font-semibold hover:bg-white/90 transition-all duration-200"
            >
              <Mail className="w-4 h-4" />
              Get In Touch
              <ArrowRight className="w-4 h-4" />
            </Link>
            <button
              onClick={() => {
                const link = document.createElement('a')
                link.href = '/resume-nur-afni.pdf'
                link.download = 'Nur-Afni-Resume.pdf'
                link.click()
              }}
              className="inline-flex items-center justify-center gap-2 border border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white/10 transition-all duration-200"
            >
              Download Resume
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          <p className="text-sm text-white/60 pt-4">
            Email: hello@nurafni.com • Location: Indonesia • Open to Remote Opportunities
          </p>
        </motion.div>
      </div>
    </section>
  )
}
