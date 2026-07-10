'use client'

import { motion } from 'framer-motion'

const experiences = [
  {
    role: 'Marketing Director / Growth Lead',
    company: 'Priskila Prima Makmur',
    period: '2024 - Present',
    description: 'Leading marketplace growth strategy and paid advertising for 5 beauty brands (Casablanca, Bellagio, Regazza, Camellia, Excello).',
    achievements: [
      'Scaled revenue from Rp24M to Rp982M (31x growth over 20 months)',
      'Managed Rp500M+ advertising budget across Shopee, TikTok Shop, and Lazada',
      'Achieved 27,393 peak monthly orders with 60%+ cost optimization',
      'Built and managed affiliate and influencer programs with 50+ partners',
      'Collaborated with warehouse, finance, and product teams for cross-functional alignment',
    ],
  },
  {
    role: 'E-Commerce Strategist',
    company: 'QCY Indonesia',
    period: '2023 - 2024',
    description: 'Designed and executed multi-marketplace product launch campaigns with coordinated paid ads, flash sales, and affiliate strategies.',
    achievements: [
      'Achieved Rp91.8M revenue on launch day with 576 orders',
      'Coordinated 5 marketplace platforms with optimized timing and creative strategy',
      'Sustained growth to 31x monthly revenue through continued campaign optimization',
      'Managed affiliate programs and negotiated marketplace promotional space',
    ],
  },
  {
    role: 'Digital Marketing Specialist',
    company: 'Multiple Brands (Choetech, Islamcendekia.id, Digital Krew)',
    period: '2022 - 2023',
    description: 'Managed social media growth, paid advertising, and content strategy for consumer brands and educational platforms.',
    achievements: [
      'Achieved 4x ROAS improvement for Choetech through campaign restructuring (2.28 → 11.05)',
      'Grew Islamcendekia.id from 6K to 17.3K followers (+188%) with organic content strategy',
      'Generated 2.2M viral views and 984K account reaches through data-driven content planning',
      'Managed campaigns with budgets up to Rp300M+ with consistent profitability',
    ],
  },
]

const fadeUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
}

export function RecruitExperience() {
  return (
    <section className="bg-white py-20">
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
            Career Path
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-[#0F0A2E]">Professional Experience</h2>
        </motion.div>

        <div className="space-y-8">
          {experiences.map((exp, idx) => (
            <motion.div
              key={idx}
              variants={fadeUp}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
              className="border-l-4 border-[#2D1BB8] pl-6 pb-8"
            >
              <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-2 mb-2">
                <div>
                  <h3 className="text-xl font-bold text-[#0F0A2E]">{exp.role}</h3>
                  <p className="text-[#2D1BB8] font-medium">{exp.company}</p>
                </div>
                <span className="text-sm text-[#4B4680] font-medium">{exp.period}</span>
              </div>

              <p className="text-[#4B4680] mb-4 leading-relaxed">{exp.description}</p>

              <div className="space-y-2">
                {exp.achievements.map((achievement, aidx) => (
                  <div key={aidx} className="flex gap-3 items-start">
                    <span className="text-[#F97316] font-bold mt-0.5">→</span>
                    <p className="text-sm text-[#4B4680]">{achievement}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
