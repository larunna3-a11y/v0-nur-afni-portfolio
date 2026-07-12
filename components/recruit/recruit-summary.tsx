'use client'

import { motion } from 'framer-motion'

const highlights = [
  'Managed marketplace campaigns across Shopee, TikTok Shop, Lazada, and Tokopedia with budgets up to Rp500M',
  'Achieved 31x revenue growth (Rp24M → Rp982M) through integrated paid ads, affiliate, and marketplace strategy',
  'Optimized ad performance from 2.28 ROAS to 11.05 ROAS through data-driven campaign restructuring',
  'Generated Rp286M+ in peak campaign periods through coordinated multi-channel paid ads, vouchers, and affiliate programs',
  'Managed 50+ influencer and affiliate partnerships generating 139 orders and Rp36.2M in GMV',
  'Collaborated with product, warehouse, and finance teams to align growth strategies with profitability targets',
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
