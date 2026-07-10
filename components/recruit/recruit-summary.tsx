'use client'

import { motion } from 'framer-motion'

export function RecruitSummary() {
  return (
    <section className="py-20 lg:py-28 bg-[#F8F7FF]">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="space-y-6"
        >
          <div>
            <h2 className="text-3xl font-bold text-[#0F0A2E] mb-4">Professional Summary</h2>
            <p className="text-lg text-[#4B4680] text-balance leading-relaxed">
              I&apos;m a digital marketing strategist and product builder who solves complex business problems through systematic thinking and cross-functional collaboration. Over the past 5+ years, I&apos;ve helped multiple businesses scale from zero to millions in revenue by designing repeatable growth systems that connect marketing, operations, and technology.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-[#0F0A2E] mb-3">What I Bring</h3>
            <div className="grid md:grid-cols-2 gap-4">
              {[
                {
                  title: 'Strategic Thinking',
                  description: 'Move beyond tactics to design scalable, profitable growth systems.',
                },
                {
                  title: 'Cross-Functional Leadership',
                  description: 'Bridge marketing, operations, finance, and technology teams for aligned execution.',
                },
                {
                  title: 'Product Mindset',
                  description: 'Build digital products and internal systems that solve real operational bottlenecks.',
                },
                {
                  title: 'Measurable Impact',
                  description: 'Focus on business outcomes: revenue growth, efficiency gains, and market expansion.',
                },
              ].map((item, i) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white p-5 rounded-lg border border-[#E8E6F8]"
                >
                  <h4 className="font-semibold text-[#0F0A2E] mb-2">{item.title}</h4>
                  <p className="text-sm text-[#4B4680]">{item.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
