'use client'

import { useState } from 'react'

const categories = ['All', 'Social Media', 'E-Commerce', 'Paid Ads', 'KOL']

const caseStudies = [
  {
    id: 1,
    categories: ['E-Commerce', 'Paid Ads'],
    brand: 'QCY & Choetech — PT Ecotech Teknologi',
    result: 'Rp95.7M → Rp180.4M in 4 months',
    description: 'Integrated marketplace and paid ads strategy driving consistent month-over-month revenue growth across Shopee, TikTok Shop, and Tokopedia.',
    metrics: ['88.5% revenue growth', 'ROAS up to 24 (Meta CPAS)', 'Rp100–500M budget managed'],
  },
  {
    id: 2,
    categories: ['E-Commerce', 'Paid Ads'],
    brand: 'QCY HT15 & C30',
    result: 'Rp91.8M revenue · 576 orders on day one',
    description: 'Multi-marketplace product launch campaign combining paid ads, flash sale, voucher, and affiliate strategy for maximum launch-day impact.',
    metrics: ['Rp91.8M day-one revenue', '576 orders', 'Multi-platform execution'],
  },
  {
    id: 3,
    categories: ['Paid Ads'],
    brand: 'TikTok Ads — Ecotech Brands',
    result: 'ROAS 2.28 → 11.05',
    description: 'Full campaign restructuring on TikTok Ads — new creative direction, audience segmentation, and budget reallocation drove a 4x improvement in ROAS.',
    metrics: ['11.05 ROAS achieved', '4x improvement', 'Product-focused creatives'],
  },
  {
    id: 4,
    categories: ['Paid Ads', 'E-Commerce'],
    brand: 'Voucher & Livestream Campaigns',
    result: 'Peak ROAS 96.2 (voucher) · 37.3 (livestream)',
    description: 'Voucher and livestream commerce campaigns achieving exceptional ROAS through strategic discount mechanics and live selling.',
    metrics: ['96.2 ROAS', '37.3 livestream ROAS', '14.7 affiliate ROAS'],
  },
  {
    id: 5,
    categories: ['Social Media'],
    brand: 'Islamcendekia.id — Digital Krew',
    result: '6.7K → 17K followers in 4 months',
    description: 'Organic Instagram growth through short-form content strategy, trend-based posting, and campaign-period content spikes.',
    metrics: ['+189% follower growth', '+81.3% engagement rate', '+62.9% impressions', '2M+ total engagement'],
  },
  {
    id: 6,
    categories: ['KOL'],
    brand: 'Affiliate Campaign — Ecotech Brands',
    result: '200 orders · Rp36.2M GMV · 14.7 ROAS',
    description: 'Creator and affiliate campaign managed end-to-end — from brief to performance report — across TikTok Affiliate and Shopee Affiliate.',
    metrics: ['200 orders', 'Rp36.2M GMV', '14.7 ROAS', '139 tracked orders'],
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
                <button className="mt-6 text-[#2D1BB8] text-sm font-medium hover:underline">
                  View Case Study →
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
