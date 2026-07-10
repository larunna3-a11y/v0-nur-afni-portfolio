'use client'

import { motion } from 'framer-motion'

const skillCategories = [
  {
    category: 'Marketplace Growth',
    skills: ['Shopee', 'TikTok Shop', 'Lazada', 'Tokopedia', 'Seller Central Management', 'Promotion Strategy'],
  },
  {
    category: 'Digital Marketing',
    skills: ['Performance Marketing', 'Facebook Ads', 'TikTok Ads', 'Social Commerce', 'Affiliate Marketing', 'SEO/SEM'],
  },
  {
    category: 'Operations & Systems',
    skills: ['Warehouse Operations', 'Order Management', 'Inventory Planning', 'Cross-Functional Leadership', 'Process Optimization', 'Systems Design'],
  },
  {
    category: 'Product & Technology',
    skills: ['Product Strategy', 'User Research', 'Information Architecture', 'No-code Development', 'AI Integration', 'Database Design'],
  },
  {
    category: 'Business Intelligence',
    skills: ['Financial Planning', 'Revenue Forecasting', 'Data Analysis', 'KPI Tracking', 'Performance Reporting', 'Strategic Planning'],
  },
]

export function RecruitSkills() {
  return (
    <section className="py-20 lg:py-28">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="space-y-12"
        >
          <div>
            <h2 className="text-3xl font-bold text-[#0F0A2E] mb-2">Core Skills & Expertise</h2>
            <p className="text-[#4B4680] text-balance">Strategic and technical capabilities across marketing, operations, and product.</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {skillCategories.map((group, i) => (
              <motion.div
                key={group.category}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
              >
                <h3 className="font-semibold text-[#0F0A2E] mb-4">{group.category}</h3>
                <div className="flex flex-wrap gap-2">
                  {group.skills.map((skill) => (
                    <span
                      key={skill}
                      className="inline-block px-3 py-1.5 rounded-full text-xs font-medium bg-[#F8F7FF] text-[#2D1BB8] border border-[#E8E6F8] hover:bg-[#2D1BB8] hover:text-white transition-colors duration-200"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
