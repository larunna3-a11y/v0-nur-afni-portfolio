'use client'

import { useState } from 'react'
import Link from 'next/link'

const categories = ['All', 'Social Media', 'E-Commerce', 'Paid Ads', 'KOL & Affiliate', 'Livestream']

const caseStudies = [
  {
    id: 1,
    categories: ['E-Commerce', 'Paid Ads'],
    brand: 'Priskila Prima Makmur',
    result: 'Rp24M → Rp760M in 19 months (31x growth)',
    description: 'Projects on Casablanca, Bellagio, Regazza, Camellia, Marie Jose, Excello. Integrated marketplace and paid ads strategy driving consistent month-over-month revenue growth across Shopee, TikTok Shop, and Tokopedia.',
    metrics: ['31x revenue growth', '21.6K peak monthly orders', '+125% conversion improvement'],
    link: '/portfolio/ecommerce-growth',
  },
  {
    id: 2,
    categories: ['E-Commerce', 'Paid Ads'],
    brand: 'QCY Indonesia',
    result: 'Rp92M revenue · 250+ orders on Launch day',
    description: 'New Release projects and multi-marketplace product launch campaign combining paid ads, flash sale, voucher, and affiliate strategy for maximum launch-day impact.',
    metrics: ['Rp92M day-one revenue', '250+ orders', 'Multi-platform execution'],
  },
  {
    id: 3,
    categories: ['Paid Ads', 'E-Commerce'],
    brand: 'Choetech Indonesia',
    result: 'ROAS 2.28 → 11.05',
    description: 'Full campaign restructuring on E-commerce platform specifically on TikTok and Shopee Ads new creative direction, audience segmentation, and budget reallocation drove a 4x improvement in ROAS.',
    metrics: ['11.05 ROAS achieved', '4x improvement', 'Product-focused creatives'],
  },
  {
    id: 4,
    categories: ['Livestream', 'E-Commerce'],
    brand: 'Priskila Official Store',
    result: 'ROAS 2.43 → 7.52',
    description: 'Transformation set up projects for Priskila livestream commerce campaigns restructuring set and achieving exceptional ROAS through strategic discount mechanics, creative set up and live selling. aLSO Sustaining livestream frequency average30–50 streams/month consistently',
    metrics: ['Peak Revenue Rp89M', '90–105 → 1.2K–1.6K orders', '2.5K → 82K+ visitors'],
  },
  {
    id: 5,
    categories: ['Social Media'],
    brand: 'Islamcendekia.id',
    result: '6.7K → 17K followers in 4 months',
    description: 'Organic Instagram growth through short-form content strategy, trend-based posting, and campaign-period content spikes.',
    metrics: ['+189% follower growth', '+81.3% engagement rate', '+62.9% impressions', '2M+ total engagement'],
  },
  {
    id: 6,
    categories: ['Social Media'],
    brand: 'Digital Krew',
    result: '4.1K → 6.3K followers in 3 months',
    description: 'Organic Instagram growth through short-form content strategy, trend-based posting, and campaign-period content spikes.',
    metrics: ['+22% follower growth', '5K+ engagement rate', '10K+ impressions'],
  },
  {
    id: 7,
    categories: ['KOL & Affiliate'],
    brand: 'QCY Indonesia',
    result: '200+ orders · Rp36.2M GMV · 14.7 ROAS',
    description: 'KOL Creators and affiliate campaign managed end-to-end. From brief to performance report, across TikTok Affiliate and Shopee Affiliate.',
    metrics: ['250+ orders', 'Rp36.2M GMV', '14.7 ROAS'],
  },
]

export default function PortfolioPage() {
  const [activeFilter, setActiveFilter] = useState('All')

  const filteredStudies = activeFilter === 'All'
    ? caseStudies
    : caseStudies.filter((study) => study.categories.includes(activeFilter))

  return (
    <div className="pt-16">
      {/* Header */}
      <section className="bg-[#2D1BB8] py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl font-bold text-white">Portfolio</h1>
          <p className="mt-4 text-[#9B97C0]">Real campaigns. Real numbers.</p>
        </div>
      </section>

      {/* Filter & Cards */}
      <section className="bg-[#F8F7FF] py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Filter Pills */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveFilter(cat)}
                className={`px-5 py-2 rounded-full text-sm font-medium transition-colors ${
                  activeFilter === cat
                    ? 'bg-[#2D1BB8] text-white'
                    : 'bg-[#E8E6F8] text-[#4B4680] hover:bg-[#2D1BB8] hover:text-white'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Case Studies Grid */}
          <div className="grid md:grid-cols-2 gap-6">
            {filteredStudies.map((study) => (
              <div
                key={study.id}
                className="bg-white border border-[#E8E6F8] rounded-2xl p-8 hover:shadow-lg transition-shadow"
              >
                {/* Category Pills */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {study.categories.map((cat) => (
                    <span
                      key={cat}
                      className="px-3 py-1 bg-[#E8E6F8] text-[#4B4680] rounded-full text-xs font-medium"
                    >
                      {cat}
                    </span>
                  ))}
                </div>

                {/* Brand */}
                <h3 className="text-lg font-bold text-[#0F0A2E]">{study.brand}</h3>

                {/* Result */}
                <p className="mt-2 text-[#F97316] font-semibold">{study.result}</p>

                {/* Description */}
                <p className="mt-4 text-sm text-[#4B4680] leading-relaxed">{study.description}</p>

                {/* Metrics */}
                <div className="mt-4 flex flex-wrap gap-2">
                  {study.metrics.map((metric) => (
                    <span
                      key={metric}
                      className="px-2 py-1 bg-[#F8F7FF] text-[#2D1BB8] rounded text-xs font-medium"
                    >
                      {metric}
                    </span>
                  ))}
                </div>

                {/* Link */}
                {study.link ? (
                  <Link href={study.link} className="mt-6 inline-block text-[#2D1BB8] text-sm font-medium hover:underline">
                    View Case Study →
                  </Link>
                ) : (
                  <button className="mt-6 text-[#2D1BB8] text-sm font-medium hover:underline">
                    View Case Study →
                  </button>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
