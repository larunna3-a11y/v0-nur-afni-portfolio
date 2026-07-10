'use client'

import { motion } from 'framer-motion'

const skillCategories = [
  {
    category: 'Marketplace Strategy',
    skills: ['Marketplace Optimization', 'Multi-platform Strategy', 'Seller Dashboard Management', 'Competitive Analysis', 'Pricing Strategy'],
  },
  {
    category: 'Performance Marketing',
    skills: ['Paid Advertising', 'Campaign Optimization', 'ROAS Maximization', 'Budget Allocation', 'A/B Testing', 'Conversion Rate Optimization'],
  },
  {
    category: 'Growth & Analytics',
    skills: ['Growth Strategy', 'Data Analysis', 'Customer Acquisition', 'Retention Optimization', 'Dashboard Development', 'KPI Tracking'],
  },
  {
    category: 'Campaign Management',
    skills: ['Flash Sales', 'Seasonal Campaigns', 'Product Launches', 'Affiliate Management', 'Influencer Partnerships', 'Cross-channel Coordination'],
  },
  {
    category: 'Digital Marketing',
    skills: ['Social Media Marketing', 'Content Strategy', 'Email Marketing', 'Storytelling', 'Community Engagement', 'Brand Positioning'],
  },
  {
    category: 'Team & Operations',
    skills: ['Team Leadership', 'Cross-functional Collaboration', 'Project Management', 'Process Optimization', 'Mentoring', 'Vendor Management'],
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
