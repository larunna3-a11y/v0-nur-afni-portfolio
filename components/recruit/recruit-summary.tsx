'use client'

import { motion } from 'framer-motion'

const highlights = [
  'Designed and executed marketplace growth strategies across Shopee, TikTok Shop, Lazada, and Tokopedia',
  'Managed high-performance paid advertising campaigns with budgets up to Rp500M+ with consistent ROI optimization',
  'Scaled revenue from Rp24M to Rp982M (31x growth) through integrated marketing and marketplace optimization',
  'Built cross-functional teams managing affiliate programs, flash sales, livestream commerce, and seasonal campaigns',
  'Utilized AI-assisted tools and custom dashboards for data-driven decision making and campaign optimization',
  'Mentored junior team members and collaborated with product, warehouse, and finance teams to align growth with profitability',
]

const fadeUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
}

export function RecruitSummary() {
  return (
    <section className="bg-[#F8F7FF] py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={fadeUp}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-12"
        >
          <span className="inline-block text-xs font-semibold tracking-widest text-[#2D1BB8] uppercase mb-3">
            Professional Summary
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-[#0F0A2E]">What I Bring to the Table</h2>
        </motion.div>

        <div className="space-y-4">
          {highlights.map((highlight, i) => (
            <motion.div
              key={i}
              variants={fadeUp}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              className="flex gap-4 items-start"
            >
              <div className="flex-shrink-0 w-6 h-6 rounded-full bg-[#2D1BB8] flex items-center justify-center mt-1">
                <span className="text-white text-sm font-bold">✓</span>
              </div>
              <p className="text-[#4B4680] leading-relaxed">{highlight}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
