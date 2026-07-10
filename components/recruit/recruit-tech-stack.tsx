'use client'

import { motion } from 'framer-motion'

const techStack = [
  {
    category: 'Platform & Operations',
    items: ['Google Analytics', 'Shopify', 'Notion', 'Airtable', 'Zapier', 'Make'],
  },
  {
    category: 'Advertising & Marketing',
    items: ['Facebook Business Manager', 'TikTok Ads Manager', 'Google Ads', 'Seller Central Tools', 'Klaviyo'],
  },
  {
    category: 'Design & Prototyping',
    items: ['Figma', 'Adobe Creative Suite', 'Framer', 'UI/UX Design'],
  },
  {
    category: 'Development & AI',
    items: ['Next.js', 'React', 'TypeScript', 'Supabase', 'Claude', 'ChatGPT'],
  },
  {
    category: 'Analytics & BI',
    items: ['Google Sheets', 'Excel', 'Tableau', 'Data Visualization'],
  },
]

export function RecruitTechStack() {
  return (
    <section className="py-20 lg:py-28 bg-[#F8F7FF]">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="space-y-12"
        >
          <div>
            <h2 className="text-3xl font-bold text-[#0F0A2E] mb-2">Tools & Technologies</h2>
            <p className="text-[#4B4680] text-balance">Proficient with modern marketing, operations, and development tools.</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {techStack.map((group, i) => (
              <motion.div
                key={group.category}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
                className="bg-white p-6 rounded-lg border border-[#E8E6F8]"
              >
                <h3 className="font-semibold text-[#0F0A2E] mb-4">{group.category}</h3>
                <div className="flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <span
                      key={item}
                      className="text-xs px-3 py-1.5 rounded-full bg-[#F8F7FF] text-[#4B4680] border border-[#E8E6F8]"
                    >
                      {item}
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
