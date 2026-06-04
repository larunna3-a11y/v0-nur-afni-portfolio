'use client'

import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { ArrowRight, TrendingUp, ShoppingCart, Target, Calendar, Zap, Users, BarChart3, PieChart, Activity, LineChart, Eye, Briefcase, Clock, Zap as ZapIcon, MessageSquare, Search } from 'lucide-react'
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
    { label: 'August Revenue', value: 'Rp91.8M', icon: TrendingUp },
    { label: 'Total Orders', value: '576+', icon: ShoppingCart },
    { label: 'Active Marketplaces', value: '3', icon: Target },
    { label: 'Marketing Channels', value: '5', icon: Zap },
  ]

  const overviewCards = [
    { title: 'Campaign Duration', content: '6 Months', icon: Calendar },
    { title: 'Platforms', content: 'Shopee, Tokopedia, TikTok Shop', icon: Target },
    { title: 'Channels', content: 'Social Media, Affiliate, LIVE, Ads', icon: Zap },
    { title: 'Role', content: 'Digital Marketing & E-Commerce Specialist', icon: Users },
  ]

  const timeline = [
    {
      month: 'May 2025',
      title: 'Campaign Kickoff - HT15 & C30',
      description: 'Launched integrated campaign for QCY HT15 & C30 products across Shopee, with Rp91.8M launch day revenue and 250+ orders through combined paid ads, flash sales, vouchers, and affiliate strategy.',
    },
    {
      month: 'June 2025',
      title: 'Multi-Platform Expansion',
      description: 'Expanded to TikTok Shop and Tokopedia with platform-specific campaigns, affiliate partnerships, and marketplace optimization strategies.',
    },
    {
      month: 'July 2025',
      title: '7.7 Flash Sale Campaign',
      description: 'Strategic flash sale campaigns combining livestream commerce, flash deals, voucher activation, and influencer partnerships to drive category awareness.',
    },
    {
      month: 'August 2025',
      title: 'Performance Optimization & Scaling',
      description: 'Refined campaign mechanics based on performance data. Achieved Rp91.8M revenue with 576+ total orders through optimized ads (Rp8.2M GMV), affiliate activation (Rp38.5M GMV), voucher campaigns (Rp75.8M), and multi-platform execution.',
    },
    {
      month: 'September 2025',
      title: 'Seasonal Campaign & Consolidation',
      description: 'End-of-season promotional push combining marketplace mechanics, affiliate networks, livestream commerce, and final product push before new releases.',
    },
  ]

  const responsibilities = [
    { icon: BarChart3, label: 'Campaign Strategy', color: 'text-blue-500' },
    { icon: ShoppingCart, label: 'Marketplace Management', color: 'text-purple-500' },
    { icon: TrendingUp, label: 'Product Launch Planning', color: 'text-orange-500' },
    { icon: Calendar, label: 'Promotional Calendar', color: 'text-pink-500' },
    { icon: Activity, label: 'TikTok LIVE Support', color: 'text-cyan-500' },
    { icon: MessageSquare, label: 'Social Media Planning', color: 'text-indigo-500' },
    { icon: Search, label: 'Marketplace Optimization', color: 'text-green-500' },
    { icon: Eye, label: 'Creative Asset Design', color: 'text-red-500' },
    { icon: LineChart, label: 'Performance Reporting', color: 'text-teal-500' },
  ]

  const channelData = {
    shopee: {
      name: 'Shopee',
      color: 'from-red-500 to-red-600',
      bgColor: 'bg-red-50',
      borderColor: 'border-red-200',
      metrics: [
        { label: 'Paid Ads GMV', value: 'Rp49M', change: '10.6x ROI', icon: TrendingUp },
        { label: 'Voucher GMV', value: 'Rp75.8M', change: '96.2x ROI', icon: ShoppingCart },
        { label: 'Livestream GMV', value: 'Rp15M', change: '37.3x ROI', icon: Activity },
        { label: 'Affiliate GMV', value: 'Rp36.2M', change: '14.7x ROI', icon: Users },
      ],
      graphImage: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202026-06-02%20at%2012.36.24-b39pzaz5s50rnMAfb3cKDqrL7GFF3z.png',
      analyticsImages: [
        'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202026-06-02%20at%2012.36.07-XjDfsVbLo5893RlsMLLT7b9Qbqkery.png',
        'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202026-06-02%20at%2012.36.33-LNzD4k2v1gOHdyxNtN5LOKGlIRe9zY.png',
        'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202026-06-02%20at%2012.36.41-LId8GNCBxjUi6bm2gVVb3RaZmgfix7.png',
      ],
    },
    tiktok: {
      name: 'TikTok Shop',
      color: 'from-black to-gray-800',
      bgColor: 'bg-gray-50',
      borderColor: 'border-gray-300',
      metrics: [
        { label: 'Platform Ads GMV', value: 'Rp43M', change: '12x ROI', icon: TrendingUp },
        { label: 'Shop Campaign GMV', value: 'Rp52.6M', change: '5.5x ROI', icon: ShoppingCart },
        { label: 'LIVE Streams GMV', value: 'Rp3.4M', change: 'Multi-channel', icon: Activity },
        { label: 'Affiliate GMV', value: 'Rp2.2M', change: '5.29x ROI', icon: Users },
      ],
      graphImage: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202026-06-02%20at%2014.08.28-DkXBAPIi3otnuNeJOhiI720dCAKEJa.png',
      analyticsImages: [
        'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202026-06-02%20at%2014.09.08-VSDiqQ4QCbltmOxaHLLsDVBXFexhCH.png',
      ],
    },
    tokopedia: {
      name: 'Tokopedia',
      color: 'from-green-500 to-green-600',
      bgColor: 'bg-green-50',
      borderColor: 'border-green-200',
      metrics: [
        { label: 'Organic GMV', value: 'Rp26.4Jt', change: '+10.22%', icon: TrendingUp },
        { label: 'Conversion Rate', value: '1.43%', change: 'Optimized', icon: Target },
        { label: 'Total Orders', value: '95+', change: '+5.56%', icon: ShoppingCart },
        { label: 'Campaign Reach', value: 'Wide', change: 'Multi-tier', icon: Users },
      ],
      graphImage: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202026-06-02%20at%2014.09.41-sspyrgovKQoW1N0TgVrlsGm4aAstcu.png',
      analyticsImages: [
        'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202026-06-02%20at%2014.10.02-bOwrFODGg0FcX0KLO8I42k87WJisGr.png',
        'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202026-06-02%20at%2014.10.49-crpcRxhRmwtZtrRNlNmw63BeAY4HL0.png',
      ],
    },
  }

  const marketplaces = [
    {
      name: 'Shopee',
      activities: [
        'Paid Ads: Rp4.2M spend, 13,344 orders, Rp49M GMV (ROI 10.6x)',
        'Livestreaming: Rp402K spend, 53 sessions, Rp15M GMV (ROI 37.3x)',
        'Flash Sales: Rp360K spend, 7 events, Rp2.5M GMV (ROI 7x)',
        'Vouchers: Rp788K spend, 222 activations, Rp75.8M GMV (ROI 96.2x)',
        'Affiliate: Rp2.4M spend, 139 partners, Rp36.2M GMV (ROI 14.7x)',
      ],
      color: 'from-red-500 to-red-600',
    },
    {
      name: 'TikTok Shop',
      activities: [
        'Platform Ads: Rp3.5M spend, 228 orders, Rp43M GMV (ROI 12x)',
        'Shop Campaign: Rp9.4M spend, 99 campaigns, Rp52.6M GMV (ROI 5.5x)',
        'Marketing Tools: Rp2.2M spend, 44 activations, Rp11.9M GMV (ROI 5.29x)',
        'Affiliate Program: Rp174K spend, 13 partners, Rp2.2M GMV (ROI 5.29x)',
        'Livestream Support & Community Engagement',
      ],
      color: 'from-black to-gray-800',
    },
    {
      name: 'Tokopedia',
      activities: [
        'Integrated Campaign Participation',
        'Product Listing Optimization',
        'Promotional Calendar Management',
        'Customer Service & Response Management',
        'Seasonal Campaign Coordination',
      ],
      color: 'from-green-500 to-green-600',
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
    { metric: 'Rp91.8M', label: 'Launch Day Revenue', subtext: 'May 2025 campaign' },
    { metric: '250+', label: 'Launch Orders', subtext: 'Day-one performance' },
    { metric: '576+', label: 'Total Orders (Aug)', subtext: 'Multi-platform execution' },
    { metric: '96.2x', label: 'Voucher ROI', subtext: 'Highest performing channel' },
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

      {/* Channel Performance Report */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div variants={staggerContainer} initial="initial" whileInView="animate" viewport={{ once: true }}>
            <motion.h2 variants={fadeIn} className="text-3xl font-bold mb-12 text-center text-[#0F0A2E]">
              Channel Performance Report
            </motion.h2>

            {/* Shopee Channel */}
            <motion.div variants={fadeIn} className="mb-16 pb-12 border-b border-gray-200">
              <h3 className={`text-2xl font-bold mb-8 bg-gradient-to-r from-red-500 to-red-600 bg-clip-text text-transparent`}>
                Shopee
              </h3>
              
              {/* Performance Breakdown */}
              <div className="mb-8">
                <h4 className="text-lg font-semibold text-[#0F0A2E] mb-4">Campaign Performance Breakdown</h4>
                <div className="grid md:grid-cols-4 gap-4">
                  {channelData.shopee.metrics.map((metric, i) => {
                    const Icon = metric.icon
                    return (
                      <motion.div
                        key={i}
                        variants={fadeIn}
                        className={`${channelData.shopee.bgColor} border ${channelData.shopee.borderColor} rounded-xl p-6`}
                      >
                        <div className="flex items-center gap-3 mb-2">
                          <Icon className="w-5 h-5 text-red-500" />
                          <p className="text-sm text-gray-600">{metric.label}</p>
                        </div>
                        <p className="text-2xl font-bold text-[#0F0A2E] mb-1">{metric.value}</p>
                        <p className="text-xs text-gray-500">{metric.change}</p>
                      </motion.div>
                    )
                  })}
                </div>
              </div>

              {/* Monthly Performance Graph */}
              <div className="mb-8">
                <h4 className="text-lg font-semibold text-[#0F0A2E] mb-4">Monthly Performance Graph</h4>
                <div className="bg-white rounded-2xl border border-gray-200 overflow-hidden shadow-sm">
                  <img 
                    src={channelData.shopee.graphImage} 
                    alt="Shopee Performance Graph"
                    className="w-full h-auto"
                  />
                </div>
              </div>

              {/* Detailed Analytics */}
              <div>
                <h4 className="text-lg font-semibold text-[#0F0A2E] mb-4">Detailed Analytics</h4>
                <div className="grid md:grid-cols-2 gap-6">
                  {channelData.shopee.analyticsImages.map((image, i) => (
                    <div key={i} className="bg-white rounded-2xl border border-gray-200 overflow-hidden shadow-sm hover:shadow-lg transition-shadow">
                      <img src={image} alt={`Shopee Analytics ${i + 1}`} className="w-full h-auto" />
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* TikTok Shop Channel */}
            <motion.div variants={fadeIn} className="mb-16 pb-12 border-b border-gray-200">
              <h3 className={`text-2xl font-bold mb-8 bg-gradient-to-r from-black to-gray-800 bg-clip-text text-transparent`}>
                TikTok Shop
              </h3>
              
              {/* Performance Breakdown */}
              <div className="mb-8">
                <h4 className="text-lg font-semibold text-[#0F0A2E] mb-4">Campaign Performance Breakdown</h4>
                <div className="grid md:grid-cols-4 gap-4">
                  {channelData.tiktok.metrics.map((metric, i) => {
                    const Icon = metric.icon
                    return (
                      <motion.div
                        key={i}
                        variants={fadeIn}
                        className={`${channelData.tiktok.bgColor} border ${channelData.tiktok.borderColor} rounded-xl p-6`}
                      >
                        <div className="flex items-center gap-3 mb-2">
                          <Icon className="w-5 h-5 text-gray-600" />
                          <p className="text-sm text-gray-600">{metric.label}</p>
                        </div>
                        <p className="text-2xl font-bold text-[#0F0A2E] mb-1">{metric.value}</p>
                        <p className="text-xs text-gray-500">{metric.change}</p>
                      </motion.div>
                    )
                  })}
                </div>
              </div>

              {/* Monthly Performance Graph */}
              <div className="mb-8">
                <h4 className="text-lg font-semibold text-[#0F0A2E] mb-4">Monthly Performance Graph</h4>
                <div className="bg-white rounded-2xl border border-gray-200 overflow-hidden shadow-sm">
                  <img 
                    src={channelData.tiktok.graphImage} 
                    alt="TikTok Shop Performance Graph"
                    className="w-full h-auto"
                  />
                </div>
              </div>

              {/* Detailed Analytics */}
              <div>
                <h4 className="text-lg font-semibold text-[#0F0A2E] mb-4">Detailed Analytics</h4>
                <div className="grid md:grid-cols-2 gap-6">
                  {channelData.tiktok.analyticsImages.map((image, i) => (
                    <div key={i} className="bg-white rounded-2xl border border-gray-200 overflow-hidden shadow-sm hover:shadow-lg transition-shadow">
                      <img src={image} alt={`TikTok Shop Analytics ${i + 1}`} className="w-full h-auto" />
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Tokopedia Channel */}
            <motion.div variants={fadeIn} className="mb-16">
              <h3 className={`text-2xl font-bold mb-8 bg-gradient-to-r from-green-500 to-green-600 bg-clip-text text-transparent`}>
                Tokopedia
              </h3>
              
              {/* Performance Breakdown */}
              <div className="mb-8">
                <h4 className="text-lg font-semibold text-[#0F0A2E] mb-4">Campaign Performance Breakdown</h4>
                <div className="grid md:grid-cols-4 gap-4">
                  {channelData.tokopedia.metrics.map((metric, i) => {
                    const Icon = metric.icon
                    return (
                      <motion.div
                        key={i}
                        variants={fadeIn}
                        className={`${channelData.tokopedia.bgColor} border ${channelData.tokopedia.borderColor} rounded-xl p-6`}
                      >
                        <div className="flex items-center gap-3 mb-2">
                          <Icon className="w-5 h-5 text-green-600" />
                          <p className="text-sm text-gray-600">{metric.label}</p>
                        </div>
                        <p className="text-2xl font-bold text-[#0F0A2E] mb-1">{metric.value}</p>
                        <p className="text-xs text-gray-500">{metric.change}</p>
                      </motion.div>
                    )
                  })}
                </div>
              </div>

              {/* Monthly Performance Graph */}
              <div className="mb-8">
                <h4 className="text-lg font-semibold text-[#0F0A2E] mb-4">Monthly Performance Graph</h4>
                <div className="bg-white rounded-2xl border border-gray-200 overflow-hidden shadow-sm">
                  <img 
                    src={channelData.tokopedia.graphImage} 
                    alt="Tokopedia Performance Graph"
                    className="w-full h-auto"
                  />
                </div>
              </div>

              {/* Detailed Analytics */}
              <div>
                <h4 className="text-lg font-semibold text-[#0F0A2E] mb-4">Detailed Analytics</h4>
                <div className="grid md:grid-cols-2 gap-6">
                  {channelData.tokopedia.analyticsImages.map((image, i) => (
                    <div key={i} className="bg-white rounded-2xl border border-gray-200 overflow-hidden shadow-sm hover:shadow-lg transition-shadow">
                      <img src={image} alt={`Tokopedia Analytics ${i + 1}`} className="w-full h-auto" />
                    </div>
                  ))}
                </div>
              </div>
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
              {responsibilities.map((resp, i) => {
                const Icon = resp.icon
                return (
                  <motion.div
                    key={i}
                    variants={fadeIn}
                    className="bg-white rounded-xl p-6 border border-[#E8E6F8] text-center hover:shadow-md transition-shadow"
                  >
                    <div className={`${resp.color} mb-3 flex justify-center`}>
                      <Icon className="w-8 h-8" />
                    </div>
                    <p className="text-sm font-medium text-[#0F0A2E]">{resp.label}</p>
                  </motion.div>
                )
              })}
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

      {/* Detailed Performance Metrics */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div variants={staggerContainer} initial="initial" whileInView="animate" viewport={{ once: true }}>
            <motion.h2 variants={fadeIn} className="text-3xl font-bold mb-12 text-center text-[#0F0A2E]">
              Campaign Performance Breakdown
            </motion.h2>

            {/* Shopee Performance */}
            <motion.div variants={fadeIn} className="mb-12 bg-gradient-to-br from-red-50 to-red-100/50 border border-red-200 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-red-900 mb-8">Shopee Performance</h3>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <div className="space-y-4">
                    <div className="bg-white rounded-lg p-4 border border-red-100">
                      <div className="text-sm text-red-600 font-medium">Paid Ads</div>
                      <div className="text-2xl font-bold text-red-900 mt-1">13,344 Orders</div>
                      <div className="text-sm text-red-700 mt-2">Rp49M GMV • Rp4.2M Cost • 10.6x ROI</div>
                    </div>
                    <div className="bg-white rounded-lg p-4 border border-red-100">
                      <div className="text-sm text-red-600 font-medium">Voucher Campaign</div>
                      <div className="text-2xl font-bold text-red-900 mt-1">222 Activations</div>
                      <div className="text-sm text-red-700 mt-2">Rp75.8M GMV • Rp788K Cost • 96.2x ROI</div>
                    </div>
                  </div>
                </div>
                <div>
                  <div className="space-y-4">
                    <div className="bg-white rounded-lg p-4 border border-red-100">
                      <div className="text-sm text-red-600 font-medium">Livestreaming</div>
                      <div className="text-2xl font-bold text-red-900 mt-1">53 Sessions</div>
                      <div className="text-sm text-red-700 mt-2">Rp15M GMV • Rp402K Cost • 37.3x ROI</div>
                    </div>
                    <div className="bg-white rounded-lg p-4 border border-red-100">
                      <div className="text-sm text-red-600 font-medium">Affiliate Network</div>
                      <div className="text-2xl font-bold text-red-900 mt-1">139 Partners</div>
                      <div className="text-sm text-red-700 mt-2">Rp36.2M GMV • Rp2.4M Cost • 14.7x ROI</div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* TikTok Shop Performance */}
            <motion.div variants={fadeIn} className="mb-12 bg-gradient-to-br from-gray-900 to-gray-800 border border-gray-700 rounded-2xl p-8 text-white">
              <h3 className="text-2xl font-bold mb-8">TikTok Shop Performance</h3>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <div className="space-y-4">
                    <div className="bg-white/10 backdrop-blur rounded-lg p-4 border border-white/20">
                      <div className="text-sm text-white/70 font-medium">Platform Ads</div>
                      <div className="text-2xl font-bold mt-1">228 Orders</div>
                      <div className="text-sm text-white/60 mt-2">Rp43M GMV • Rp3.5M Cost • 12x ROI</div>
                    </div>
                    <div className="bg-white/10 backdrop-blur rounded-lg p-4 border border-white/20">
                      <div className="text-sm text-white/70 font-medium">Marketing Tools</div>
                      <div className="text-2xl font-bold mt-1">143 Campaigns</div>
                      <div className="text-sm text-white/60 mt-2">Rp64.5M GMV • Rp11.7M Cost • 5.5x ROI</div>
                    </div>
                  </div>
                </div>
                <div>
                  <div className="space-y-4">
                    <div className="bg-white/10 backdrop-blur rounded-lg p-4 border border-white/20">
                      <div className="text-sm text-white/70 font-medium">Livestream & Shop Campaign</div>
                      <div className="text-2xl font-bold mt-1">Combined Activation</div>
                      <div className="text-sm text-white/60 mt-2">TikTok LIVE integration, shop optimization, social media amplification</div>
                    </div>
                    <div className="bg-white/10 backdrop-blur rounded-lg p-4 border border-white/20">
                      <div className="text-sm text-white/70 font-medium">Affiliate Program</div>
                      <div className="text-2xl font-bold mt-1">13 Active Partners</div>
                      <div className="text-sm text-white/60 mt-2">Rp2.2M GMV • Rp174K Cost • 5.29x ROI</div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Sales by Channel */}
            <motion.div variants={fadeIn} className="bg-gradient-to-br from-purple-50 to-indigo-50 border border-purple-200 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-purple-900 mb-8">Sales by Channel (August 2025)</h3>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="bg-white rounded-lg p-6 border border-purple-100">
                  <div className="text-sm text-purple-600 font-medium">Shopee</div>
                  <div className="text-3xl font-bold text-purple-900 mt-2">375</div>
                  <div className="text-sm text-purple-700 mt-1">Orders</div>
                  <div className="text-lg font-semibold text-purple-900 mt-3">Rp54.9M</div>
                  <div className="text-xs text-purple-600">Gross Revenue</div>
                </div>
                <div className="bg-white rounded-lg p-6 border border-purple-100">
                  <div className="text-sm text-purple-600 font-medium">TikTok Shop</div>
                  <div className="text-3xl font-bold text-purple-900 mt-2">199</div>
                  <div className="text-sm text-purple-700 mt-1">Orders</div>
                  <div className="text-lg font-semibold text-purple-900 mt-3">Rp35.5M</div>
                  <div className="text-xs text-purple-600">Gross Revenue</div>
                </div>
                <div className="bg-white rounded-lg p-6 border border-purple-100">
                  <div className="text-sm text-purple-600 font-medium">Lazada</div>
                  <div className="text-3xl font-bold text-purple-900 mt-2">21</div>
                  <div className="text-sm text-purple-700 mt-1">Orders</div>
                  <div className="text-lg font-semibold text-purple-900 mt-3">Rp1.2M</div>
                  <div className="text-xs text-purple-600">Gross Revenue</div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Marketplace Execution */}
      <section className="py-20 bg-gradient-to-b from-white to-purple-50">
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
                Rp91.8M Launch Day Revenue Through Integrated Digital Marketing
              </h2>
              <p className="text-lg text-white/80 max-w-2xl mx-auto">
                Executed multi-channel campaign across Shopee, TikTok Shop, and Tokopedia combining paid ads, affiliate marketing, voucher campaigns, and livestream commerce for maximum launch-day impact.
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
