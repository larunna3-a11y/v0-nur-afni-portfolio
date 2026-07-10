'use client'

import { motion } from 'framer-motion'

const metrics = [
  { label: 'Revenue Managed', value: 'Rp1B+' },
  { label: 'ROAS Peak', value: '11.05x' },
  { label: 'Revenue Growth', value: '31x' },
  { label: 'Peak Monthly Orders', value: '27.3K' },
  { label: 'Marketplace Platforms', value: '4+' },
  { label: 'Campaigns Managed', value: '50+' },
  { label: 'Follower Growth Peak', value: '188%' },
  { label: 'Years of Experience', value: '4+' },
]

const fadeUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
}

export function RecruitSnapshot() {
  return (
    <section className="bg-white py-20">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={fadeUp}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-14"
        >
          <span className="inline-block text-xs font-semibold tracking-widest text-[#2D1BB8] uppercase mb-3">
            Career Snapshot
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-[#0F0A2E]">Proven Track Record</h2>
          <p className="mt-4 text-[#4B4680] max-w-xl mx-auto leading-relaxed">
            Real metrics from marketplace campaigns and digital projects — verified across multiple brands and channels.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
          {metrics.map((metric, i) => (
            <motion.div
              key={metric.label}
              variants={fadeUp}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              className="bg-[#F8F7FF] border border-[#E8E6F8] rounded-2xl p-6 text-center hover:border-[#2D1BB8]/30 hover:shadow-sm transition-all"
            >
              <div className="text-2xl sm:text-3xl font-bold text-[#2D1BB8]">{metric.value}</div>
              <div className="mt-2 text-xs sm:text-sm text-[#4B4680] font-medium">{metric.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
