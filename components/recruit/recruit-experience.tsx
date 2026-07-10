'use client'

import { motion } from 'framer-motion'

const experiences = [
  {
    role: 'Founder & Digital Strategist',
    company: 'Selbst',
    period: 'Jan 2021 – Present',
    location: 'Indonesia',
    achievements: [
      'Built and scaled digital marketing and consulting services, working with 10+ brands',
      'Designed marketplace growth strategies resulting in $50M+ revenue managed',
      'Developed internal operational systems reducing manual processes by 60%',
      'Created AI-powered products (StyleDNA, FlowOps) solving real business problems',
    ],
  },
  {
    role: 'Marketplace Growth Specialist',
    company: 'QCY Indonesia',
    period: 'Mar 2020 – Dec 2022',
    location: 'Jakarta, Indonesia',
    achievements: [
      'Grew monthly revenue from $24M to $982M across 20 months (+31x growth)',
      'Managed marketplace operations across Shopee, TikTok Shop, Lazada, Tokopedia',
      'Led affiliate program scaling to 100+ active partners',
      'Improved marketplace ratings and reduced refund rates through optimization',
    ],
  },
  {
    role: 'Digital Marketing Specialist',
    company: 'Priskila Beauty',
    period: 'Jan 2019 – Feb 2020',
    location: 'Jakarta, Indonesia',
    achievements: [
      'Managed paid advertising campaigns across Facebook, Instagram, TikTok',
      'Developed marketplace growth strategy across Shopee, Tokopedia, Lazada',
      'Coordinated with warehouse, finance, and customer service teams',
      'Grew social media following from 0 to 50K+ followers in 12 months',
    ],
  },
]

export function RecruitExperience() {
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
            <h2 className="text-3xl font-bold text-[#0F0A2E] mb-2">Work Experience</h2>
            <p className="text-[#4B4680] text-balance">Strategic roles combining marketing, operations, and product development.</p>
          </div>

          <div className="space-y-8">
            {experiences.map((exp, i) => (
              <motion.div
                key={exp.company}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
                className="bg-white border border-[#E8E6F8] rounded-xl p-6 hover:shadow-lg transition-shadow"
              >
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-xl font-semibold text-[#0F0A2E]">{exp.role}</h3>
                    <p className="text-[#2D1BB8] font-medium">{exp.company}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-sm text-[#4B4680]">{exp.period}</p>
                    <p className="text-sm text-[#4B4680]">{exp.location}</p>
                  </div>
                </div>

                <ul className="space-y-2">
                  {exp.achievements.map((achievement, j) => (
                    <li key={j} className="flex gap-3 text-[#4B4680]">
                      <span className="text-[#2D1BB8] font-bold flex-shrink-0">•</span>
                      <span className="text-sm">{achievement}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
