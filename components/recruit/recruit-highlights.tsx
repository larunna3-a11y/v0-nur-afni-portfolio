'use client'

import { motion } from 'framer-motion'
import { TrendingUp, Zap, Users, Lightbulb } from 'lucide-react'

const highlights = [
  {
    icon: TrendingUp,
    title: 'Revenue Growth',
    metric: '$50M+',
    description: 'Managed and scaled revenue across multiple marketplace and social commerce channels.',
  },
  {
    icon: Zap,
    title: 'Operational Efficiency',
    metric: '60%',
    description: 'Reduced operational bottlenecks through system design and workflow automation.',
  },
  {
    icon: Users,
    title: 'Team Leadership',
    metric: '15+',
    description: 'Led cross-functional teams across warehouse, customer service, and creative departments.',
  },
  {
    icon: Lightbulb,
    title: 'Products Built',
    metric: '3',
    description: 'Designed and shipped digital products that solved real business and user problems.',
  },
]

export function RecruitHighlights() {
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
            <h2 className="text-3xl font-bold text-[#0F0A2E] mb-2">Career Highlights</h2>
            <p className="text-[#4B4680] text-balance">Measurable impact across marketing, operations, and product.</p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {highlights.map((item, i) => {
              const Icon = item.icon
              return (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                  viewport={{ once: true }}
                  className="group bg-gradient-to-br from-[#F8F7FF] to-white border border-[#E8E6F8] rounded-xl p-6 hover:border-[#2D1BB8] transition-all duration-300"
                >
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-[#2D1BB8]/10 rounded-lg group-hover:bg-[#2D1BB8]/20 transition-colors">
                      <Icon className="w-6 h-6 text-[#2D1BB8]" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-[#0F0A2E] text-lg mb-1">{item.title}</h3>
                      <div className="text-2xl font-bold text-[#2D1BB8] mb-2">{item.metric}</div>
                      <p className="text-sm text-[#4B4680]">{item.description}</p>
                    </div>
                  </div>
                </motion.div>
              )
            })}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
