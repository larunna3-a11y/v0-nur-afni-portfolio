'use client'

import { motion } from 'framer-motion'

const languages = [
  { name: 'Indonesian', proficiency: 'Native', level: 100 },
  { name: 'English', proficiency: 'Fluent', level: 90 },
]

const fadeUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
}

export function RecruitLanguages() {
  return (
    <section className="bg-[#F8F7FF] py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={fadeUp}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-8"
        >
          <h3 className="text-xl font-bold text-[#0F0A2E] mb-6">Languages</h3>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {languages.map((lang, idx) => (
            <motion.div
              key={idx}
              variants={fadeUp}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
              className="bg-white border border-[#E8E6F8] rounded-xl p-6"
            >
              <div className="flex items-center justify-between mb-3">
                <h4 className="font-semibold text-[#0F0A2E]">{lang.name}</h4>
                <span className="text-sm font-medium text-[#2D1BB8]">{lang.proficiency}</span>
              </div>
              <div className="w-full bg-[#E8E6F8] rounded-full h-2">
                <div
                  className="bg-[#2D1BB8] h-2 rounded-full transition-all"
                  style={{ width: `${lang.level}%` }}
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
