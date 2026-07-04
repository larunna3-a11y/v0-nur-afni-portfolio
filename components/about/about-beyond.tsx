'use client'

import { motion } from 'framer-motion'

const cards = [
  { icon: '⚖️', label: 'Law Graduate', detail: 'Foundation in structured thinking and analysis' },
  { icon: '🤖', label: 'AI Enthusiast', detail: 'Exploring how AI reshapes work and creativity' },
  { icon: '📚', label: 'Lifelong Learner', detail: 'Always in the middle of a new book or course' },
  { icon: '☕', label: 'Coffee & Deep Work', detail: 'Best thinking happens in long, uninterrupted sessions' },
  { icon: '🎨', label: 'Product Design Explorer', detail: 'Interested in the intersection of design and function' },
  { icon: '🧩', label: 'Systems Thinker', detail: 'Drawn to understanding how things connect and scale' },
]

export function AboutBeyond() {
  return (
    <section className="bg-[#F8F7FF] py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <span className="inline-block text-xs font-semibold tracking-widest text-[#2D1BB8] uppercase mb-3">
            Personal
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-[#0F0A2E]">Beyond Work</h2>
          <p className="mt-4 text-[#4B4680] max-w-lg mx-auto leading-relaxed">
            A few things that shape how I think and what I care about.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
          {cards.map((card, i) => (
            <motion.div
              key={card.label}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.35, delay: i * 0.06 }}
              className="bg-white border border-[#E8E6F8] rounded-2xl p-5 text-center hover:border-[#2D1BB8]/30 hover:shadow-sm transition-all duration-300"
            >
              <span className="text-2xl block mb-3">{card.icon}</span>
              <h3 className="text-xs font-bold text-[#0F0A2E] leading-snug">{card.label}</h3>
              <p className="mt-1.5 text-xs text-[#9B97C0] leading-relaxed hidden sm:block">{card.detail}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
