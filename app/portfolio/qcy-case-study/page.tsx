'use client'

import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { ArrowRight, TrendingUp, ShoppingCart, Target, Calendar, Zap, Users, BarChart3 } from 'lucide-react'
import { useState } from 'react'

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 }
}

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
}

export default function QCYCaseStudy() {
  const [activeTimeline, setActiveTimeline] = useState(0)

  const kpiCards = [
    { label: 'Peak Monthly Revenue', value: 'Rp100M+', icon: TrendingUp },
    { label: 'Total Orders', value: '373', icon: ShoppingCart },
    { label: 'Marketplaces', value: '3', icon: Target },
    { label: 'Marketing Channels', value: '6+', icon: Zap },
  ]

  const overviewCards = [
    { title: 'Campaign Duration', content: '6 Months', icon: Calendar },
    { title: 'Platforms', content: 'Shopee, Tokopedia, TikTok Shop', icon: Target },
    { title: 'Channels', content: 'Social Media, Affiliate, LIVE, Ads', icon: Zap },
    { title: 'Role', content: 'Digital Marketing & E-Commerce Specialist', icon: Users },
  ]

  const timeline = [
    {
      month: 'April 2025',
      title: 'Campaign Kickoff',
      description: 'Launched integrated campaign strategy across all platforms with initial product optimization and creative asset setup.',
    },
    {
      month: 'June 2025',
      title: '6.6 Mega Campaign',
      description: 'Major promotional push combining flash sales, vouchers, and affiliate partnerships to drive marketplace visibility.',
    },
    {
      month: 'July 2025',
      title: '7.7 Flash Sale Campaign',
      description: 'Strategic flash sale campaigns with optimized product placement and social media amplification.',
    },
    {
      month: 'August 2025',
      title: 'Growth Optimization',
      description: 'Refined campaign mechanics based on performance data, improved conversion rates, and marketplace efficiency.',
    },
    {
      month: 'September 2025',
      title: 'End of Season Campaign',
      description: 'Final campaign push combining seasonal promotions with affiliate networks and livestream commerce.',
    },
  ]

  const responsibilities = [
    { icon: '📊', label: 'Campaign Strategy' },
    { icon: '🛍️', label: 'Marketplace Management' },
    { icon: '🚀', label: 'Product Launch Planning' },
    { icon: '📅', label: 'Promotional Calendar' },
    { icon: '📹', label: 'TikTok LIVE Support' },
    { icon: '📱', label: 'Social Media Planning' },
    { icon: '⚙️', label: 'Marketplace Optimization' },
    { icon: '🎨', label: 'Creative Asset Design' },
    { icon: '📈', label: 'Performance Reporting' },
  ]

  const marketplaces = [
    {
      name: 'Shopee',
      activities: ['Flash Sale Participation', 'Voucher Activation', 'Product Optimization', 'Campaign Setup'],
      color: 'from-red-500 to-red-600',
    },
    {
      name: 'Tokopedia',
      activities: ['Store Optimization', 'Campaign Participation', 'Product Maintenance', 'Promotional Setup'],
      color: 'from-green-500 to-green-600',
    },
    {
      name: 'TikTok Shop',
      activities: ['Affiliate Activation', 'Campaign Support', 'Product Showcase', 'Sales Optimization'],
      color: 'from-black to-gray-800',
    },
  ]

  const learnings = [
    {
      title: 'Integrated Commerce',
      description: 'Combining marketplace, content, affiliate and paid media improves conversion and maximizes reach across channels.',
    },
    {
      title: 'Consistent Activation',
      description: 'Monthly strategic campaigns build sustainable growth momentum and maintain customer engagement.',
    },
    {
      title: 'Multi-Channel Execution',
      description: 'Cross-platform activation increases visibility, drives redundancy in traffic, and maximizes revenue potential.',
    },
  ]

  const results = [
    { metric: 'Rp100M+', label: 'Peak Revenue', subtext: 'Highest monthly revenue achieved' },
    { metric: '373', label: 'Total Orders', subtext: 'Across 6-month campaign' },
    { metric: '3', label: 'Active Marketplaces', subtext: 'Shopee, Tokopedia, TikTok Shop' },
    { metric: '6+', label: 'Marketing Channels', subtext: 'Integrated execution' },
  ]

  return (
    <div className="min-h-screen bg-[#F8F7FF]">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-[#6D4AFF] to-[#2D1BB8] text-white py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div variants={staggerContainer} initial="initial" animate="animate" className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div variants={fadeIn}>
              <div className="inline-block mb-4 px-4 py-2 bg-white/20 rounded-full text-sm font-medium">
                E-Commerce Campaign
              </div>
              <h1 className="text-4xl lg:text-5xl font-bold mb-4 leading-tight">
                QCY Indonesia Marketplace Growth Campaign
              </h1>
              <p className="text-lg text-white/80 mb-6">
                6-Month Multi-Channel E-Commerce Growth & Brand Activation
              </p>
              <p className="text-white/70 leading-relaxed mb-8">
                Executed integrated campaigns across Shopee, Tokopedia, TikTok Shop, TikTok LIVE, affiliate marketing, social media, and paid advertising to drive marketplace growth and product visibility.
              </p>
              <div className="text-sm text-white/60">
                <p className="font-medium text-white/80">Campaign Period: April – September 2025</p>
              </div>
            </motion.div>

            {/* KPI Cards */}
            <motion.div variants={fadeIn} className="grid grid-cols-2 gap-4">
              {kpiCards.map((card, i) => {
                const Icon = card.icon
                return (
                  <div key={i} className="bg-white/10 backdrop-blur rounded-xl p-6 border border-white/20">
                    <Icon className="w-6 h-6 mb-3 text-white/80" />
                    <div className="text-2xl font-bold mb-1">{card.value}</div>
                    <div className="text-sm text-white/70">{card.label}</div>
                  </div>
                )
              })}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Project Overview */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div variants={staggerContainer} initial="initial" whileInView="animate" viewport={{ once: true }}>
            <motion.h2 variants={fadeIn} className="text-3xl font-bold mb-12 text-center text-[#0F0A2E]">
              Project Overview
            </motion.h2>
            <motion.div variants={staggerContainer} className="grid md:grid-cols-4 gap-6">
              {overviewCards.map((card, i) => {
                const Icon = card.icon
                return (
                  <motion.div
                    key={i}
                    variants={fadeIn}
                    className="bg-white rounded-xl p-8 border border-[#E8E6F8] hover:shadow-lg transition-shadow"
                  >
                    <Icon className="w-8 h-8 text-[#6D4AFF] mb-4" />
                    <h3 className="font-bold text-[#0F0A2E] mb-2">{card.title}</h3>
                    <p className="text-sm text-[#4B4680]">{card.content}</p>
                  </motion.div>
                )
              })}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Business Challenge */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div variants={staggerContainer} initial="initial" whileInView="animate" viewport={{ once: true }} className="max-w-3xl">
            <motion.h2 variants={fadeIn} className="text-3xl font-bold mb-8 text-[#0F0A2E]">
              Business Challenge
            </motion.h2>
            <motion.div variants={fadeIn} className="bg-gradient-to-br from-[#6D4AFF]/10 to-[#2D1BB8]/10 border border-[#6D4AFF]/20 rounded-2xl p-8 lg:p-12">
              <p className="text-lg text-[#4B4680] leading-relaxed">
                QCY Indonesia needed stronger marketplace visibility, better product launch execution, improved sales performance, and consistent communication across multiple channels. The brand required an integrated approach combining paid ads, affiliate marketing, social media strategy, and marketplace optimization to achieve sustainable growth during a competitive market period.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Responsibilities */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div variants={staggerContainer} initial="initial" whileInView="animate" viewport={{ once: true }}>
            <motion.h2 variants={fadeIn} className="text-3xl font-bold mb-12 text-center text-[#0F0A2E]">
              My Responsibilities
            </motion.h2>
            <motion.div variants={staggerContainer} className="grid md:grid-cols-3 lg:grid-cols-3 gap-6 max-w-4xl mx-auto">
              {responsibilities.map((resp, i) => (
                <motion.div
                  key={i}
                  variants={fadeIn}
                  className="bg-white rounded-xl p-6 border border-[#E8E6F8] text-center hover:shadow-md transition-shadow"
                >
                  <div className="text-3xl mb-2">{resp.icon}</div>
                  <p className="text-sm font-medium text-[#0F0A2E]">{resp.label}</p>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Campaign Timeline */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div variants={staggerContainer} initial="initial" whileInView="animate" viewport={{ once: true }}>
            <motion.h2 variants={fadeIn} className="text-3xl font-bold mb-12 text-center text-[#0F0A2E]">
              Campaign Timeline
            </motion.h2>
            <motion.div variants={staggerContainer} className="space-y-4">
              {timeline.map((event, i) => (
                <motion.div
                  key={i}
                  variants={fadeIn}
                  onClick={() => setActiveTimeline(i)}
                  className={`cursor-pointer rounded-xl p-6 border-2 transition-all ${
                    activeTimeline === i
                      ? 'border-[#6D4AFF] bg-[#6D4AFF]/5'
                      : 'border-[#E8E6F8] bg-[#F8F7FF] hover:border-[#6D4AFF]/30'
                  }`}
                >
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0">
                      <div className={`w-4 h-4 rounded-full mt-2 ${activeTimeline === i ? 'bg-[#6D4AFF]' : 'bg-[#E8E6F8]'}`}></div>
                    </div>
                    <div className="flex-1">
                      <h3 className="font-bold text-[#0F0A2E]">{event.title}</h3>
                      <p className="text-sm text-[#6D4AFF] font-medium mt-1">{event.month}</p>
                      {activeTimeline === i && (
                        <p className="text-sm text-[#4B4680] mt-3 leading-relaxed">{event.description}</p>
                      )}
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Marketplace Execution */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div variants={staggerContainer} initial="initial" whileInView="animate" viewport={{ once: true }}>
            <motion.h2 variants={fadeIn} className="text-3xl font-bold mb-12 text-center text-[#0F0A2E]">
              Marketplace Execution
            </motion.h2>
            <motion.div variants={staggerContainer} className="grid md:grid-cols-3 gap-8">
              {marketplaces.map((mp, i) => (
                <motion.div
                  key={i}
                  variants={fadeIn}
                  className={`bg-gradient-to-br ${mp.color} rounded-2xl p-8 text-white overflow-hidden group hover:shadow-lg transition-shadow`}
                >
                  <h3 className="text-2xl font-bold mb-6">{mp.name}</h3>
                  <ul className="space-y-3">
                    {mp.activities.map((activity, j) => (
                      <li key={j} className="flex items-start gap-3 text-sm">
                        <span className="text-white/60 font-bold">•</span>
                        <span className="text-white/90">{activity}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Key Learnings */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div variants={staggerContainer} initial="initial" whileInView="animate" viewport={{ once: true }}>
            <motion.h2 variants={fadeIn} className="text-3xl font-bold mb-12 text-center text-[#0F0A2E]">
              Key Learnings
            </motion.h2>
            <motion.div variants={staggerContainer} className="grid md:grid-cols-3 gap-8">
              {learnings.map((learning, i) => (
                <motion.div
                  key={i}
                  variants={fadeIn}
                  className="bg-gradient-to-br from-[#6D4AFF]/10 to-[#2D1BB8]/10 border border-[#6D4AFF]/20 rounded-2xl p-8 hover:shadow-md transition-shadow"
                >
                  <h3 className="font-bold text-[#0F0A2E] mb-3">{learning.title}</h3>
                  <p className="text-sm text-[#4B4680] leading-relaxed">{learning.description}</p>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Final Results */}
      <section className="relative py-20 bg-gradient-to-br from-[#6D4AFF] to-[#2D1BB8] text-white overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-white rounded-full blur-3xl"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div variants={staggerContainer} initial="initial" whileInView="animate" viewport={{ once: true }}>
            <motion.div variants={fadeIn} className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold mb-4">
                Driving Marketplace Growth Through Integrated Digital Marketing
              </h2>
              <p className="text-lg text-white/80 max-w-2xl mx-auto">
                Strategic execution across multiple platforms and channels delivered measurable results and sustainable growth.
              </p>
            </motion.div>

            <motion.div variants={staggerContainer} className="grid md:grid-cols-4 gap-6">
              {results.map((result, i) => (
                <motion.div
                  key={i}
                  variants={fadeIn}
                  className="bg-white/10 backdrop-blur rounded-xl p-8 border border-white/20 text-center hover:bg-white/20 transition-colors"
                >
                  <div className="text-3xl lg:text-4xl font-bold mb-2">{result.metric}</div>
                  <div className="font-semibold mb-1">{result.label}</div>
                  <div className="text-sm text-white/70">{result.subtext}</div>
                </motion.div>
              ))}
            </motion.div>

            <motion.div variants={fadeIn} className="mt-12 flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/portfolio"
                className="inline-flex items-center justify-center gap-2 bg-white text-[#6D4AFF] px-8 py-3 rounded-lg font-medium hover:bg-white/90 transition-colors"
              >
                View More Projects
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="/"
                className="inline-flex items-center justify-center gap-2 border border-white text-white px-8 py-3 rounded-lg font-medium hover:bg-white/10 transition-colors"
              >
                Back to Portfolio
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
