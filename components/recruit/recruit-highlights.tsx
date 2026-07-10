'use client'

import { motion } from 'framer-motion'
import { TrendingUp, Zap, Target, Users } from 'lucide-react'

const highlights = [
  {
    icon: TrendingUp,
    title: 'Marketplace Growth',
    description: 'Scaled revenue from Rp24M to Rp982M (31x growth) across multiple brands within 20 months through strategic marketplace optimization.',
  },
  {
    icon: Zap,
    title: 'Performance Marketing',
    description: 'Managed Rp1B+ in revenue with peak ROAS of 11.05x through integrated paid advertising, affiliate programs, and flash sales.',
  },
  {
    icon: Target,
    title: 'Strategic Planning',
    description: 'Designed and executed multi-channel campaigns resulting in 576 orders on launch day and sustained month-over-month growth.',
  },
  {
    icon: Users,
    title: 'Cross-Functional Leadership',
    description: 'Collaborated with warehouse, finance, creative, and product teams to align business goals and optimize operations at scale.',
  },
]

const fadeUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
}

export function RecruitHighlights() {
  return (
    <section className="bg-[#F8F7FF] py-20">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={fadeUp}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-14"
        >
          <span className="inline-block text-xs font-semibold tracking-widest text-[#2D1BB8] uppercase mb-3">
            Core Strengths
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-[#0F0A2E]">What I Bring to Your Team</h2>
          <p className="mt-4 text-[#4B4680] max-w-2xl mx-auto leading-relaxed">
            A combination of strategic thinking, hands-on execution, and proven ability to deliver measurable business results.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {highlights.map((highlight, idx) => {
            const Icon = highlight.icon
            return (
              <motion.div
                key={highlight.title}
                variants={fadeUp}
                initial="initial"
                whileInView="animate"
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
                className="bg-white border border-[#E8E6F8] rounded-2xl p-8 hover:border-[#2D1BB8]/30 hover:shadow-lg transition-all"
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg bg-[#2D1BB8]/10 flex items-center justify-center flex-shrink-0">
                    <Icon className="w-6 h-6 text-[#2D1BB8]" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-[#0F0A2E] mb-2">{highlight.title}</h3>
                    <p className="text-sm text-[#4B4680] leading-relaxed">{highlight.description}</p>
                  </div>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
