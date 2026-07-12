'use client'

import { motion } from 'framer-motion'

const skillCategories = [
  {
    category: 'Digital Marketing Strategy',
    skills: ['Campaign Planning & Execution', 'Digital Marketing Strategy', 'Trend Research & Audience Analysis', 'Budget Allocation & Reporting'],
  },
  {
    category: 'Performance Marketing',
    skills: ['Meta Ads & TikTok Ads', 'Paid Social Optimization', 'ROAS / ROI Analysis', 'Conversion Rate Optimization', 'Performance Tracking'],
  },
  {
    category: 'E-Commerce & Marketplace',
    skills: ['Shopee, TikTok Shop, Tokopedia, Lazada', 'E-Commerce & Marketplace Marketing', 'Marketplace Optimization', 'Seller Dashboard Management'],
  },
  {
    category: 'Social Media Marketing',
    skills: ['Instagram & TikTok Strategy', 'Content Planning & Content Calendar', 'KOL & Influencer Campaigns', 'Social Media Marketing'],
  },
  {
    category: 'Campaign Management',
    skills: ['Affiliate Marketing', 'Campaign Optimization', 'Multi-channel Coordination', 'Flash Sales & Promotional Campaigns'],
  },
]

const fadeUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
}

export function RecruitSkills() {
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
            Expertise
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-[#0F0A2E]">Core Competencies</h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {skillCategories.map((cat, idx) => (
            <motion.div
              key={idx}
              variants={fadeUp}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.06 }}
            >
              <h3 className="text-lg font-bold text-[#0F0A2E] mb-4">{cat.category}</h3>
              <div className="flex flex-wrap gap-2">
                {cat.skills.map((skill, sidx) => (
                  <span
                    key={sidx}
                    className="px-3 py-1.5 bg-white border border-[#2D1BB8]/20 rounded-lg text-sm font-medium text-[#2D1BB8] hover:border-[#2D1BB8] transition-colors"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
