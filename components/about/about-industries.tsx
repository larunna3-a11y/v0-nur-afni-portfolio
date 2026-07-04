'use client'

import { motion } from 'framer-motion'
import { Cpu, Sparkles, BookOpen, ShoppingBag, Settings, Bot } from 'lucide-react'

const industries = [
  {
    icon: Cpu,
    name: 'Consumer Electronics',
    description: 'Marketplace growth and product launch campaigns for tech hardware brands.',
  },
  {
    icon: Sparkles,
    name: 'Beauty & Lifestyle',
    description: 'End-to-end e-commerce management and social content for lifestyle brands.',
  },
  {
    icon: BookOpen,
    name: 'Education',
    description: 'Social media strategy and content systems for Islamic education platforms.',
  },
  {
    icon: ShoppingBag,
    name: 'Retail & E-Commerce',
    description: 'Multi-channel marketplace strategy, promotions, and GMV growth.',
  },
  {
    icon: Settings,
    name: 'Internal Operations',
    description: 'SOP design, dashboard builds, and workflow automation for operations teams.',
  },
  {
    icon: Bot,
    name: 'AI Products',
    description: 'Designing and building AI-powered tools for marketing, styling, and knowledge management.',
  },
]

export function AboutIndustries() {
  return (
    <section className="bg-[#F8F7FF] py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-14"
        >
          <span className="inline-block text-xs font-semibold tracking-widest text-[#2D1BB8] uppercase mb-3">
            Experience
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-[#0F0A2E]">Industries</h2>
          <p className="mt-4 text-[#4B4680] max-w-xl mx-auto leading-relaxed">
            I have worked across diverse industries, applying the same rigorous thinking and execution-first mindset.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {industries.map((industry, i) => (
            <motion.div
              key={industry.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.07 }}
              className="group bg-white border border-[#E8E6F8] rounded-2xl p-6 hover:border-[#2D1BB8]/30 hover:shadow-md hover:-translate-y-0.5 transition-all duration-300"
            >
              <div className="w-10 h-10 rounded-xl bg-[#2D1BB8]/8 flex items-center justify-center mb-4">
                <industry.icon className="w-5 h-5 text-[#2D1BB8]" />
              </div>
              <h3 className="text-base font-bold text-[#0F0A2E] mb-2">{industry.name}</h3>
              <p className="text-sm text-[#4B4680] leading-relaxed">{industry.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
