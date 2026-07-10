'use client'

import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

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
        <div className="mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-[#0F0A2E] mb-2">Featured Projects</h2>
          <p className="text-[#4B4680]">Selected case studies showcasing strategic impact and business outcomes</p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {projects.map((project, idx) => (
            <Link
              key={idx}
              href={project.link}
              className="group bg-white border border-[#E8E6F8] rounded-2xl p-6 hover:border-[#2D1BB8]/30 hover:shadow-lg transition-all duration-200"
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
