'use client'

import Link from 'next/link'
import { Mail, Linkedin, Download } from 'lucide-react'
import { motion } from 'framer-motion'

const fadeUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
}

export function RecruitCTA() {
  return (
    <section className="py-24 bg-gradient-to-b from-[#2D1BB8] to-[#4A35D4]">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.h2
          variants={fadeUp}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-4xl sm:text-5xl font-bold text-white text-balance mb-6"
        >
          Interested in Discussing Opportunities?
        </motion.h2>

        <motion.p
          variants={fadeUp}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-lg text-[#D0CFF5] mb-12 leading-relaxed"
        >
          Let's connect and explore how I can contribute to your team or organization.
        </motion.p>

        {/* Contact Options */}
        <motion.div
          variants={fadeUp}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="grid md:grid-cols-3 gap-6 mb-12"
        >
          {/* Email */}
          <a
            href="mailto:nur.afni@example.com"
            className="bg-white/10 border border-white/20 rounded-xl p-6 hover:bg-white/20 transition-colors group"
          >
            <div className="w-12 h-12 rounded-lg bg-white/10 flex items-center justify-center mx-auto mb-4 group-hover:bg-white/20 transition-colors">
              <Mail className="w-6 h-6 text-white" />
            </div>
            <h3 className="font-semibold text-white mb-1">Email</h3>
            <p className="text-sm text-[#9B97C0]">nur@example.com</p>
          </a>

          {/* LinkedIn */}
          <a
            href="https://linkedin.com/in/nurafni"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white/10 border border-white/20 rounded-xl p-6 hover:bg-white/20 transition-colors group"
          >
            <div className="w-12 h-12 rounded-lg bg-white/10 flex items-center justify-center mx-auto mb-4 group-hover:bg-white/20 transition-colors">
              <Linkedin className="w-6 h-6 text-white" />
            </div>
            <h3 className="font-semibold text-white mb-1">LinkedIn</h3>
            <p className="text-sm text-[#9B97C0]">@nurafni</p>
          </a>

          {/* Resume */}
          <a
            href="/resume.pdf"
            className="bg-white/10 border border-white/20 rounded-xl p-6 hover:bg-white/20 transition-colors group"
          >
            <div className="w-12 h-12 rounded-lg bg-white/10 flex items-center justify-center mx-auto mb-4 group-hover:bg-white/20 transition-colors">
              <Download className="w-6 h-6 text-white" />
            </div>
            <h3 className="font-semibold text-white mb-1">Resume</h3>
            <p className="text-sm text-[#9B97C0]">Download PDF</p>
          </a>
        </motion.div>

        {/* Primary CTA */}
        <motion.div
          variants={fadeUp}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
        <Link
          href="/contact"
          className="inline-flex items-center gap-2 px-8 py-4 bg-white text-[#2D1BB8] rounded-xl font-semibold hover:shadow-lg transition-all"
        >
          Schedule a Call
        </Link>
        </motion.div>
      </div>
    </section>
  )
}
