'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { Download, Linkedin, Mail } from 'lucide-react'

const fadeUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
}

export function RecruitHero() {
  return (
    <section className="relative bg-[#2D1BB8] overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#F97316] rounded-full blur-3xl opacity-10 translate-x-1/3 -translate-y-1/3 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-[#4A35D4] rounded-full blur-3xl opacity-20 -translate-x-1/3 translate-y-1/3 pointer-events-none" />

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28">
        <motion.div
          variants={fadeUp}
          initial="initial"
          animate="animate"
          transition={{ duration: 0.5 }}
        >
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/20 bg-white/5 text-[#9B97C0] text-sm font-medium mb-6">
            <span className="w-1.5 h-1.5 bg-[#06D001] rounded-full animate-pulse" />
            Open to Opportunities
          </span>
        </motion.div>

        <motion.h1
          variants={fadeUp}
          initial="initial"
          animate="animate"
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight text-balance"
        >
          Digital Marketing Specialist & Marketplace Growth Expert
        </motion.h1>

        <motion.p
          variants={fadeUp}
          initial="initial"
          animate="animate"
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-6 text-lg text-[#9B97C0] max-w-2xl leading-relaxed"
        >
          I build marketplace growth systems, manage high-performing advertising campaigns, and optimize digital ecosystems for sustainable business results. 4+ years of proven experience scaling revenue from 0 to 1B+ across Shopee, TikTok Shop, and Lazada.
        </motion.p>

        <motion.div
          variants={fadeUp}
          initial="initial"
          animate="animate"
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-8 flex flex-wrap gap-4"
        >
          <a
            href="/Nur_Afni_Resume.pdf"
            download
            className="inline-flex items-center gap-2 px-6 py-3 bg-[#F97316] text-white rounded-lg font-medium hover:bg-[#EA8509] transition-colors"
          >
            <Download size={18} />
            Download Resume
          </a>
          <a
            href="https://www.linkedin.com/in/nour-afni/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 border border-white/30 text-white rounded-lg font-medium hover:bg-white/10 transition-colors"
          >
            <Linkedin size={18} />
            LinkedIn Profile
          </a>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-6 py-3 border border-white/30 text-white rounded-lg font-medium hover:bg-white/10 transition-colors"
          >
            <Mail size={18} />
            Contact Me
          </Link>
        </motion.div>

        <motion.div
          variants={fadeUp}
          initial="initial"
          animate="animate"
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-10 flex flex-wrap gap-4 text-sm text-[#9B97C0]"
        >
          <span>📍 Based in Indonesia</span>
          <span>•</span>
          <span>💼 4+ Years Experience</span>
          <span>•</span>
          <span>🌐 Remote Available</span>
        </motion.div>
      </div>
    </section>
  )
}
