'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { ArrowRight, Download } from 'lucide-react'

export function RecruitHero() {
  return (
    <section className="bg-gradient-to-b from-[#2D1BB8] to-[#1A0F7A] text-white py-20 lg:py-28">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="space-y-6"
        >
          {/* Breadcrumb */}
          <div className="flex items-center gap-2 text-sm text-white/70">
            <Link href="/" className="hover:text-white transition-colors">
              Home
            </Link>
            <span>/</span>
            <span>Recruit Me</span>
          </div>

          {/* Main Heading */}
          <div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-balance mb-4">
              Digital Marketing Strategist & Product Builder
            </h1>
            <p className="text-lg text-white/80 text-balance max-w-2xl">
              I design scalable growth systems that bridge marketing, operations, and technology—turning business challenges into measurable results.
            </p>
          </div>

          {/* Key Metrics */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-8">
            {[
              { label: 'Years Experience', value: '5+' },
              { label: 'Projects Shipped', value: '20+' },
              { label: 'Revenue Managed', value: '$50M+' },
              { label: 'Team Size Led', value: '15+' },
            ].map((metric) => (
              <motion.div
                key={metric.label}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
                className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg p-4"
              >
                <div className="text-2xl font-bold">{metric.value}</div>
                <div className="text-xs text-white/70 mt-1">{metric.label}</div>
              </motion.div>
            ))}
          </div>

          {/* CTAs */}
          <div className="flex flex-wrap gap-4 pt-8">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-white text-[#2D1BB8] px-6 py-3 rounded-lg font-semibold hover:bg-white/90 transition-all duration-200"
            >
              Let's Talk
              <ArrowRight className="w-4 h-4" />
            </Link>
            <button
              onClick={() => {
                // In production, this would download the actual resume
                const link = document.createElement('a')
                link.href = '/resume-nur-afni.pdf'
                link.download = 'Nur-Afni-Resume.pdf'
                link.click()
              }}
              className="inline-flex items-center gap-2 border border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white/10 transition-all duration-200"
            >
              <Download className="w-4 h-4" />
              Download Resume
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
