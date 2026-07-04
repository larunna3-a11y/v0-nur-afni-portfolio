'use client'

import { motion } from 'framer-motion'
import { Scale, PenLine, ShoppingCart, TrendingUp, Bot, Briefcase } from 'lucide-react'

const milestones = [
  {
    year: '2019–2021',
    icon: Scale,
    role: 'Law Graduate',
    description: 'Graduated with a law degree, building a foundation in structured thinking, document analysis, and professional communication.',
    accent: false,
  },
  {
    year: '2021',
    icon: PenLine,
    role: 'Content Strategist',
    description: 'Moved into digital content, developing brand voice, social media content systems, and content calendars for growing businesses.',
    accent: false,
  },
  {
    year: '2022',
    icon: ShoppingCart,
    role: 'Marketplace Specialist',
    description: 'Took ownership of end-to-end marketplace operations across Shopee, TikTok Shop, Tokopedia, and Lazada — managing listings, campaigns, and GMV growth.',
    accent: false,
  },
  {
    year: '2022–2023',
    icon: TrendingUp,
    role: 'Digital Marketing Manager',
    description: 'Scaled into full-funnel digital marketing — paid ads, affiliate programs, livestream commerce, and performance reporting across multiple brands.',
    accent: true,
  },
  {
    year: '2024',
    icon: Bot,
    role: 'AI Product Builder',
    description: 'Started building AI-powered digital products — exploring how AI tools can solve real business problems in marketing, operations, and knowledge management.',
    accent: false,
  },
  {
    year: '2025–Present',
    icon: Briefcase,
    role: 'Independent Consultant',
    description: 'Now working independently — helping businesses grow through consulting, marketing execution, digital product development, and AI enablement.',
    accent: true,
  },
]

export function AboutJourney() {
  return (
    <section className="bg-[#F8F7FF] py-20">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <span className="inline-block text-xs font-semibold tracking-widest text-[#2D1BB8] uppercase mb-3">
            Background
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-[#0F0A2E]">My Journey</h2>
          <p className="mt-4 text-[#4B4680] leading-relaxed">
            From law school to digital marketing to building AI products — a non-linear path shaped by curiosity and execution.
          </p>
        </motion.div>

        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-6 top-0 bottom-0 w-px bg-[#E8E6F8] sm:left-8" />

          <div className="space-y-10">
            {milestones.map((m, i) => (
              <motion.div
                key={m.role}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.4, delay: i * 0.07 }}
                className="relative flex gap-5 sm:gap-8"
              >
                {/* Icon node */}
                <div className={`relative z-10 flex-shrink-0 w-12 h-12 sm:w-16 sm:h-16 rounded-2xl flex items-center justify-center shadow-sm border ${m.accent ? 'bg-[#2D1BB8] border-[#2D1BB8]' : 'bg-white border-[#E8E6F8]'}`}>
                  <m.icon className={`w-5 h-5 sm:w-6 sm:h-6 ${m.accent ? 'text-white' : 'text-[#2D1BB8]'}`} />
                </div>

                {/* Content */}
                <div className="flex-1 pb-2">
                  <span className="text-xs font-semibold text-[#9B97C0] uppercase tracking-wider">{m.year}</span>
                  <h3 className={`mt-1 text-lg font-bold ${m.accent ? 'text-[#2D1BB8]' : 'text-[#0F0A2E]'}`}>
                    {m.role}
                  </h3>
                  <p className="mt-2 text-sm text-[#4B4680] leading-relaxed">{m.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
