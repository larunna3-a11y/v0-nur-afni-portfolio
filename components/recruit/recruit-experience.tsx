'use client'

import { motion } from 'framer-motion'

const experiences = [
  {
    role: 'Digital Marketing Specialist',
    company: 'PT Ecotech Teknologi',
    period: 'Nov 2023 – Present',
    description: 'Managing digital campaigns for QCY, Choetech, and Priskila across social media, paid ads, and marketplace platforms.',
    achievements: [
      'Increased marketplace revenue from Rp95.7M to Rp180.4M within 4 months through integrated campaign strategy',
      'Generated Rp286M in peak sales through paid ads, voucher, affiliate, and promotional campaigns',
      'Managed campaign budgets of Rp100–500M across Meta Ads, TikTok Ads, affiliate, and marketplace channels',
      'Achieved ROAS up to 16.2 through voucher campaigns, 24 through Meta CPAS, and 14.7 through affiliate programs',
      'Improved TikTok Ads performance from 2.28 ROAS to 11.05 ROAS through optimization and budget reallocation',
    ],
  },
  {
    role: 'Social Media Strategist (Jr. Officer)',
    company: 'Digital Krew',
    period: 'Jul 2023 – Jan 2024',
    description: 'Grew social media presence and managed content planning for multiple brands on Instagram and TikTok.',
    achievements: [
      'Grew Instagram followers from 6.7K to 17K within 4 months (+189% growth)',
      'Increased engagement rate by +81.3% and impressions by +62.9%',
      'Generated over 2M engagement through social media campaigns and short-form content',
      'Managed content planning and performance reporting across 3 brands',
    ],
  },
  {
    role: 'Social Media Planner Intern',
    company: 'Tukangtulis.co (PT Hendrawan Media Artha)',
    period: 'May 2023 – Jul 2023',
    description: 'Created content strategies and managed social media planning for client accounts.',
    achievements: [
      'Created content calendars and platform-specific social media strategies',
      'Conducted trend research and monitored campaign performance',
      'Built foundation for content-driven digital marketing approaches',
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
