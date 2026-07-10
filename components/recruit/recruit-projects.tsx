'use client'

import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { motion } from 'framer-motion'

const projects = [
  {
    title: 'Priskila Prima Makmur',
    result: 'Rp24M → Rp982M',
    description: 'Multi-brand marketplace growth spanning 5 beauty brands. Developed integrated strategy across Shopee, TikTok Shop, and Lazada with focus on sustainable profitability and operational excellence.',
    impact: '31x revenue growth over 20 months',
    link: '/portfolio/ecommerce-growth',
  },
  {
    title: 'QCY Indonesia',
    result: 'Rp91.8M in revenue on day one',
    description: 'Coordinated new product launch across 5 marketplaces with synchronized paid advertising, flash sales, affiliate programs, and promotional mechanics.',
    impact: '576 orders in first 24 hours',
    link: '/portfolio/qcy-case-study',
  },
  {
    title: 'Choetech Indonesia',
    result: 'ROAS 2.28 → 11.05',
    description: 'Full campaign restructuring on TikTok and Shopee Ads with new creative direction, audience segmentation, and strategic budget reallocation.',
    impact: '4.85x ROAS improvement',
    link: '/portfolio/ecommerce-growth',
  },
]

export function RecruitProjects() {
  return (
    <section className="py-20 bg-[#F8F7FF]">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-16"
        >
          <span className="inline-block text-xs font-semibold tracking-widest text-[#2D1BB8] uppercase mb-3">
            Portfolio Highlights
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-[#0F0A2E] mb-2">Featured Case Studies</h2>
          <p className="text-[#4B4680]">Selected projects showcasing strategic impact and measurable business outcomes</p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {projects.map((project, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
            >
              <Link
                href={project.link}
                className="group bg-white border border-[#E8E6F8] rounded-2xl p-6 hover:border-[#2D1BB8]/30 hover:shadow-lg transition-all duration-200 block h-full"
              >
              <div className="flex items-start justify-between mb-4">
                <h3 className="text-lg font-bold text-[#0F0A2E] group-hover:text-[#2D1BB8] transition-colors">
                  {project.title}
                </h3>
                <ArrowRight className="w-5 h-5 text-[#9B97C0] group-hover:text-[#2D1BB8] transition-colors translate-x-0 group-hover:translate-x-1" />
              </div>

              <p className="text-sm font-semibold text-[#F97316] mb-3">{project.result}</p>

              <p className="text-sm text-[#4B4680] leading-relaxed mb-4">{project.description}</p>

              <div className="pt-4 border-t border-[#E8E6F8]">
                <p className="text-xs font-semibold text-[#2D1BB8] uppercase tracking-wider">{project.impact}</p>
              </div>
              </Link>
            </motion.div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Link
            href="/portfolio"
            className="inline-flex items-center gap-2 px-6 py-3 bg-[#2D1BB8] text-white rounded-xl font-semibold hover:shadow-lg transition-all"
          >
            View All Case Studies
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  )
}
