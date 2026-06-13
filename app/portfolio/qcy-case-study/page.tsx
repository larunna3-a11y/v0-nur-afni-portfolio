'use client'

import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { ArrowRight, TrendingUp, ShoppingCart, Target, Calendar, Zap, Users, BarChart3, PieChart, Activity, LineChart, Eye, Briefcase, Clock, Zap as ZapIcon, MessageSquare, Search, ChevronLeft, ChevronRight } from 'lucide-react'
import { useState } from 'react'
import { LineChart as RechartsLineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts'

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

// Monthly data for charts
const monthlyChartData = {
  shopee: [
    { month: 'Apr', sales: 93.01, orders: 394, conversion: 1.62 },
    { month: 'May', sales: 87.18, orders: 433, conversion: 1.35 },
    { month: 'Jun', sales: 84.54, orders: 343, conversion: 1.30 },
    { month: 'Jul', sales: 105.86, orders: 392, conversion: 1.29 },
    { month: 'Aug', sales: 114.04, orders: 384, conversion: 1.82 },
    { month: 'Sep', sales: 110.97, orders: 410, conversion: 1.75 },
  ],
  tiktok: [
    { month: 'Jun', sales: 13.02, orders: 45, conversion: 2.07 },
    { month: 'Jul', sales: 11.52, orders: 43, conversion: 1.98 },
    { month: 'Aug', sales: 18.56, orders: 62, conversion: 2.86 },
    { month: 'Sep', sales: 18.02, orders: 67, conversion: 3.09 },
  ],
  tokopedia: [
    { month: 'Jun', sales: 20.06, orders: 71, conversion: 2.15 },
    { month: 'Jul', sales: 26.37, orders: 92, conversion: 2.31 },
    { month: 'Aug', sales: 40.00, orders: 112, conversion: 2.58 },
    { month: 'Sep', sales: 34.40, orders: 107, conversion: 2.42 },
  ],
}

export default function QCYCaseStudy() {
  const [activeTab, setActiveTab] = useState('shopee')
  const [activeTimeline, setActiveTimeline] = useState(0)
  const [monthlySlide, setMonthlySlide] = useState(0)
  const [activeAnalytics, setActiveAnalytics] = useState("overview")
 
  const shopeeOverviewScreenshots = [
    {
      month: 'April 2025',
      description: 'Campaign Launch & Initial Growth',
      image: '/qcy-shopee-overview/april 2025.png',
    },
    {
      month: 'May 2025',
      description: 'Audience Acquisition Phase',
      image: '/qcy-shopee-overview/may 2025.png',
    },
    {
      month: 'June 2025',
      description: 'Traffic Optimization & Scaling',
      image: '/qcy-shopee-overview/june 2025.png',
    },
    {
      month: 'July 2025',
      description: 'Launch Month Peak Performance',
      image: '/qcy-shopee-overview/July 2025.png',
    },
    {
      month: 'August 2025',
      description: 'Revenue Recovery & Expansion',
      image: '/qcy-shopee-overview/Agustus 2025.png',
    },
    {
      month: 'September 2025',
      description: 'Sustained Growth & Store Stability',
      image: '/qcy-shopee-overview/September 2025.png',
    },
  ]

  const shopeeLiveScreenshots = [
  {
    month: 'April 2025',
    description: 'Shopee Live Launch Phase',
    image: '/qcy-shopee-overview/qcy-shopee-live/Live-April-2025.png',
  },
  {
    month: 'May 2025',
    description: 'Audience Building Through Livestream',
    image: '/qcy-shopee-overview/qcy-shopee-live/Live-Mei-2025.png',
  },
  {
    month: 'June 2025',
    description: 'Campaign Activation via Shopee Live',
    image: '/qcy-shopee-overview/qcy-shopee-live/Live-Juni-2025.png',
  },
  {
    month: 'July 2025',
    description: 'Livestream Traffic Growth',
    image: '/qcy-shopee-overview/qcy-shopee-live/Live-Juli-2025.png',
  },
  {
    month: 'August 2025',
    description: 'Peak Livestream Performance',
    image: '/qcy-shopee-overview/qcy-shopee-live/Live-Agust-2025.png',
  },
  {
    month: 'September 2025',
    description: 'Campaign Closing Livestream Performance',
    image: '/qcy-shopee-overview/qcy-shopee-live/Live-September-2025.png',
  },
]
const shopeeAdsScreenshots = [
  {
    month: 'April 2025',
    description: 'Campaign Launch & Traffic Acquisition',
    image: '/qcy-shopee-overview/QCY-Shopee-ADS/QCY-ADS-April-2025.png',
  },
  {
    month: 'May 2025',
    description: 'Scaling Ads Performance',
    image: '/qcy-shopee-overview/QCY-Shopee-ADS/QCY-ADS-Mei-2025.png',
  },
  {
    month: 'June 2025',
    description: 'ROAS Optimization Phase',
    image: '/qcy-shopee-overview/QCY-Shopee-ADS/QCY-ADS-juni-2025.png',
  },
  {
    month: 'July 2025',
    description: 'High Volume Traffic Growth',
    image: '/qcy-shopee-overview/QCY-Shopee-ADS/QCY-ADS-Juli-2025.png',
  },
  {
    month: 'August 2025',
    description: 'Conversion Efficiency Improvement',
    image: '/qcy-shopee-overview/QCY-Shopee-ADS/QCY-ADS-Agust-2025.png',
  },
  {
    month: 'September 2025',
    description: 'Sustained Performance Campaign',
    image: '/qcy-shopee-overview/QCY-Shopee-ADS/QCY-ADS-Sep-2025.png',
  },
]
const tiktokOverviewScreenshots = [
  {
    month: 'June 2025',
    description: 'TikTok Shop Launch Performance',
    image: '/qcy-shopee-overview/qcy-Overview-tiktok-June-2025.png',
  },
  {
    month: 'July 2025',
    description: 'Audience Growth & Order Increase',
    image: '/qcy-shopee-overview/qcy-Overview-tiktok-July-2025.png',
  },
  {
    month: 'August 2025',
    description: 'Peak Content Commerce Performance',
    image: '/qcy-shopee-overview/qcy-Overview-tiktok-agust-2025.png',
  },
  {
    month: 'September 2025',
    description: 'Campaign Closing & Revenue Consolidation',
    image: '/qcy-shopee-overview/qcy-Overview-tiktok-sep-2025.png',
  },
]
 const currentScreenshots =
  activeTab === "shopee"
    ? (
        activeAnalytics === "overview"
          ? shopeeOverviewScreenshots
          : activeAnalytics === "livestream"
          ? shopeeLiveScreenshots
          : shopeeAdsScreenshots
      )
    : activeTab === "tiktok"
    ? tiktokOverviewScreenshots
    : tokopediaOverviewScreenshots

  
  const kpiCards = [
    { label: 'Total Revenue (Apr-Sep)', value: 'Rp837.29M', icon: TrendingUp },
    { label: 'Total Orders', value: '3,120+', icon: ShoppingCart },
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
      description: 'Refined campaign mechanics based on performance data. Achieved Rp91.8M revenue with 3,120+ total orders through optimized ads (Rp8.2M GMV), affiliate activation (Rp38.5M GMV), voucher campaigns (Rp75.8M), and multi-platform execution.',
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
        { label: 'Total Sales (Apr-Sep)', value: 'Rp595.61M', change: 'Rp3.25M/day avg', icon: TrendingUp },
        { label: 'Total Orders', value: '2,356', change: '12.9/day avg', icon: ShoppingCart },
        { label: 'Peak Month (Aug)', value: 'Rp114.04M', change: '+7.7% vs Jul', icon: Activity },
        { label: 'Total Buyers', value: '2,117', change: '+5.7% vs Apr', icon: Users },
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
        { label: 'Total GMV (Jun-Sep)', value: 'Rp55.23M', change: '+137.29%', icon: TrendingUp },
        { label: 'Total Orders', value: '217', change: '+117%', icon: ShoppingCart },
        { label: 'Peak Month (Sep)', value: 'Rp18.02M', change: '67 orders', icon: Activity },
        { label: 'Total Customers', value: '214', change: '+114%', icon: Users },
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
        { label: 'Total GMV (Jun-Sep)', value: 'Rp120.84M', change: '+363.83%', icon: TrendingUp },
        { label: 'Total Orders', value: '547', change: '+218.33%', icon: ShoppingCart },
        { label: 'Peak Month (Aug)', value: 'Rp40.00M', change: '+51.7% vs Jul', icon: Activity },
        { label: 'Total Customers', value: '380', change: '+216.67%', icon: Users },
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
        'Paid Ads: Rp4.2M/Month spend, 2,3522 orders, Rp49M GMV (ROI 10.6x)',
        'Livestreaming: Rp402K spend, 53 sessions, Rp15M GMV (ROI 37.3x)',
        'Flash Sales: Rp360K spend, 7 events, Rp2.5M GMV (ROI 7x)',
        'Vouchers: Rp788K spend, 222 activations, Rp75.8M GMV (ROI 3,120+)',
        'Affiliate: Rp2.4M spend, 139 partners, Rp36.2M GMV (ROI 14.7x)',
      ],
      color: 'from-red-500 to-red-600',
    },
    {
      name: 'TikTok Shop',
      activities: [
        'June 2025: Rp13.02M revenue, 45 orders, 44 customers (Platform Entry)',
        'July 2025: Rp11.52M revenue, 43 orders, 42 customers (-11.5% MoM)',
        'August 2025: Rp18.56M revenue, 62 orders, 62 customers (+61.1% recovery)',
        'September 2025: Rp18.02M revenue, 67 orders, 66 customers (Sustained Growth)',
        'Total Period: Rp61.12M gross revenue, +137.29% vs previous period',
      ],
      color: 'from-black to-gray-800',
    },
    {
      name: 'Tokopedia',
      activities: [
        'June 2025: Rp20.06M revenue, 71 orders, 70 customers (Platform Entry)',
        'July 2025: Rp26.37M revenue, 92 orders, 91 customers (+31.4% MoM)',
        'August 2025: Rp40.00M revenue, 112 orders, 111 customers (+51.7% growth)',
        'September 2025: Rp34.40M revenue, 107 orders, 107 customers (Stable)',
        'Total Period: Rp120.84M gross revenue, +363.83% vs previous period',
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
    { metric: '3,120+', label: 'Total Orders (Ap-Sep)', subtext: 'Multi-platform execution' },
    { metric: 'Rp837.29M', label: 'Total Revenue (Apr-Sep)', subtext: 'Highest performing channel' },
  ]

  return (
    <div className="min-h-screen bg-[#F8F7FF]">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-[#6D4AFF] to-[#2D1BB8] text-white py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div variants={staggerContainer} initial="initial" animate="animate" className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div variants={fadeIn}>
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="px-3 py-1 bg-white/10 text-white rounded-full text-xs font-medium">E-Commerce</span>
                <span className="px-3 py-1 bg-white/10 text-white rounded-full text-xs font-medium">Consumer Electronics</span>
                <span className="px-3 py-1 bg-white/10 text-white rounded-full text-xs font-medium">Product Launch</span>
              </div>
              <h1 className="text-4xl lg:text-5xl font-bold mb-4 leading-tight">
                QCY Indonesia Marketplace Product Launch
              </h1>
              <p className="text-lg text-white/80 mb-6">
                6 Month Multi Channel E-Commerce Growth & Brand Activation
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
            <motion.h2 variants={fadeIn} className="text-3xl font-bold mb-8 text-center text-[#0F0A2E]">
              Channel Performance Report
            </motion.h2>

            {/* Channel Tabs */}
            <motion.div variants={fadeIn} className="flex gap-2 mb-12 border-b border-gray-200">
              {['shopee', 'tiktok', 'tokopedia'].map((channel) => (
                <button
                  key={channel}
                  onClick={() => setActiveTab(channel)}
                  className={`px-6 py-3 font-medium transition-all ${activeTab === channel
                    ? `border-b-2 border-${channel === 'shopee' ? 'red' : channel === 'tiktok' ? 'gray' : 'green'}-500 text-${channel === 'shopee' ? 'red' : channel === 'tiktok' ? 'gray' : 'green'}-600`
                    : 'text-gray-500 hover:text-gray-700'
                    }`}
                >
                  {channelData[channel].name}
                </button>
              ))}
            </motion.div>

            {/* Performance Breakdown - Top Section */}
            <motion.div variants={fadeIn} className="mb-12">
              <h3 className="text-2xl font-bold text-[#0F0A2E] mb-6">Campaign Performance Breakdown</h3>
              <div className="grid md:grid-cols-4 gap-4">
                {channelData[activeTab].metrics.map((metric, i) => {
                  const Icon = metric.icon
                  return (
                    <motion.div
                      key={i}
                      variants={fadeIn}
                      className={`${channelData[activeTab].bgColor} border ${channelData[activeTab].borderColor} rounded-xl p-6`}
                    >
                      <div className="flex items-center gap-3 mb-2">
                        <Icon className={`w-5 h-5 text-${activeTab === 'shopee' ? 'red' : activeTab === 'tiktok' ? 'gray' : 'green'}-500`} />
                        <p className="text-sm text-gray-600">{metric.label}</p>
                      </div>
                      <p className="text-2xl font-bold text-[#0F0A2E] mb-1">{metric.value}</p>
                      <p className="text-xs text-gray-500">{metric.change}</p>
                    </motion.div>
                  )
                })}
              </div>
            </motion.div>

            {/* Performance Graph with Chart */}
            <motion.div variants={fadeIn} className="mb-12">
              <h3 className="text-xl font-bold text-[#0F0A2E] mb-6">Monthly Performance Graph</h3>
              <div className="bg-white rounded-2xl border border-gray-200 overflow-hidden shadow-sm p-6">
                {/* Line Chart */}
                <div className="w-full h-80">
                  <ResponsiveContainer width="100%" height="100%">
                    <RechartsLineChart data={monthlyChartData[activeTab]}>
                      <CartesianGrid strokeDasharray="3 3" stroke="#E0E0E0" />
                      <XAxis dataKey="month" stroke="#666" />
                      <YAxis stroke="#666" />
                      <Tooltip
                        contentStyle={{
                          backgroundColor: '#fff',
                          border: '1px solid #ccc',
                          borderRadius: '8px',
                          padding: '8px'
                        }}
                        formatter={(value) => `Rp${value.toFixed(2)}M`}
                      />
                      <Line
                        type="monotone"
                        dataKey="sales"
                        stroke={activeTab === 'shopee' ? '#EF4444' : activeTab === 'tiktok' ? '#1F2937' : '#22C55E'}
                        strokeWidth={3}
                        dot={{ fill: activeTab === 'shopee' ? '#EF4444' : activeTab === 'tiktok' ? '#1F2937' : '#22C55E', r: 6 }}
                        activeDot={{ r: 8 }}
                        name="Sales (Rp M)"
                      />
                    </RechartsLineChart>
                  </ResponsiveContainer>
                </div>

                {/* Legend */}
                <div className="mt-6 pt-6 border-t border-gray-200">
                  <p className="text-sm text-gray-600">
                    <span className="font-semibold">Showing:</span> Monthly sales revenue for {channelData[activeTab].name}
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Additional Analytics */}
            <motion.div variants={fadeIn} className="mb-16">
              <div className="bg-[#1B1464] rounded-3xl p-8">

                <div className="mb-8">
                  <h2 className="text-4xl font-bold text-white mb-4">
                  {activeTab === "shopee"
                    ? "QCY Official Store — Shopee Analytics"
                    : activeTab === "tiktok"
                    ? "QCY Official Store — TikTok Shop Analytics"
                    : "QCY Official Store — Tokopedia Analytics"}
                </h2>

                 <p className="text-white/70">
                  {activeTab === "shopee"
                    ? "Store performance covering sales, advertising, and livestream growth on Shopee."
                    : activeTab === "tiktok"
                    ? "TikTok Shop performance covering GMV growth, content commerce, and conversion trends."
                    : "Marketplace growth and operational performance on Tokopedia."}
                </p>

                 <div className="flex gap-3 mb-6">
                  <button
                    onClick={() => setActiveAnalytics("overview")}
                    className={`px-5 py-2 rounded-full ${
                      activeAnalytics === "overview"
                        ? "bg-orange-500 text-white"
                        : "bg-white text-gray-700"
                    }`}
                  >
                    Overview Sales
                  </button>

                  <button
                    onClick={() => setActiveAnalytics("livestream")}
                    className={`px-5 py-2 rounded-full ${
                      activeAnalytics === "livestream"
                        ? "bg-orange-500 text-white"
                        : "bg-white text-gray-700"
                    }`}
                  >
                    Shopee Live
                  </button>

                  <button
                    onClick={() => setActiveAnalytics("ads")}
                    className={`px-5 py-2 rounded-full ${
                      activeAnalytics === "ads"
                        ? "bg-orange-500 text-white"
                        : "bg-white text-gray-700"
                    }`}
                  >
                    Ads Performance
                  </button>
                </div>
                </div>

                {/* Main Screenshot Area */}
                <div className="bg-white rounded-2xl p-6 mb-6">

                  <div className="flex justify-between items-center mb-4">
                    <div>
                      <h3 className="text-xl font-bold">
                        {currentScreenshots[monthlySlide].month}
                      </h3>

                      <p className="text-gray-500">
                        {currentScreenshots[monthlySlide].description}
                      </p>
                    </div>

                    <span className="bg-orange-500 text-white px-4 py-2 rounded-full text-sm">
                      {monthlySlide === 0
                        ? "Starting Point"
                        : monthlySlide === currentScreenshots.length - 1
                          ? "End Point"
                          : "Growth Phase"}
                    </span>
                  </div>

                  <img
                    src={currentScreenshots[monthlySlide].image}
                    alt=""
                    className="w-full rounded-xl border"
                  />

                </div>

                {/* Month Navigation */}
                <div className="flex gap-2 overflow-x-auto pb-2">

                  {currentScreenshots.map((month, index) => (
                    <button
                      key={index}
                      onClick={() => setMonthlySlide(index)}
                      className={`px-4 py-2 rounded-lg whitespace-nowrap transition-all ${monthlySlide === index
                          ? "bg-orange-500 text-white"
                          : "bg-white/10 text-white"
                        }`}
                    >
                      {month.month}
                    </button>
                  ))}

                </div>

              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Sales by Platform Breakdown */}
      <section className="py-20 bg-gradient-to-br from-purple-50 via-white to-purple-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div variants={staggerContainer} initial="initial" whileInView="animate" viewport={{ once: true }}>
            <motion.h2 variants={fadeIn} className="text-3xl font-bold mb-2 text-[#0F0A2E]">
              Overall Performance Summary
            </motion.h2>
            <motion.p variants={fadeIn} className="text-gray-600 mb-12">
              Total contribution across all platforms and campaigns (Apr-Sep 2025)
            </motion.p>

            <motion.div variants={fadeIn} className="grid md:grid-cols-3 gap-6 mb-12">
              {/* Shopee Card */}
              <div className="bg-white rounded-2xl p-8 border-2 border-red-100 hover:shadow-lg transition-shadow">
                <h3 className="text-lg font-semibold text-red-600 mb-6">Shopee</h3>
                <div className="space-y-4">
                  <div>
                    <p className="text-4xl font-bold text-[#0F0A2E]">2,356</p>
                    <p className="text-gray-600 text-sm">Total Orders</p>
                  </div>
                  <div className="pt-2 border-t border-gray-200">
                    <p className="text-2xl font-bold text-red-600">Rp595.61M</p>
                    <p className="text-gray-600 text-sm">Total Revenue (Apr-Sep)</p>
                  </div>
                </div>
              </div>

              {/* TikTok Shop Card */}
              <div className="bg-white rounded-2xl p-8 border-2 border-gray-300 hover:shadow-lg transition-shadow">
                <h3 className="text-lg font-semibold text-gray-700 mb-6">TikTok Shop</h3>
                <div className="space-y-4">
                  <div>
                    <p className="text-4xl font-bold text-[#0F0A2E]">217</p>
                    <p className="text-gray-600 text-sm">Total Orders</p>
                  </div>
                  <div className="pt-2 border-t border-gray-200">
                    <p className="text-2xl font-bold text-gray-700">Rp55.23M</p>
                    <p className="text-gray-600 text-sm">Total Revenue (Jun-Sep)</p>
                  </div>
                </div>
              </div>

              {/* Tokopedia Card */}
              <div className="bg-white rounded-2xl p-8 border-2 border-green-100 hover:shadow-lg transition-shadow">
                <h3 className="text-lg font-semibold text-green-600 mb-6">Tokopedia</h3>
                <div className="space-y-4">
                  <div>
                    <p className="text-4xl font-bold text-[#0F0A2E]">547</p>
                    <p className="text-gray-600 text-sm">Total Orders</p>
                  </div>
                  <div className="pt-2 border-t border-gray-200">
                    <p className="text-2xl font-bold text-green-600">Rp120.84M</p>
                    <p className="text-gray-600 text-sm">Total Revenue (Jun-Sep)</p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Total Summary Card */}
            <motion.div variants={fadeIn} className="bg-gradient-to-r from-[#6D4AFF] to-[#2D1BB8] rounded-2xl p-8 text-white">
              <div className="grid md:grid-cols-3 gap-8">
                <div>
                  <p className="text-white/80 text-sm mb-2">Total Revenue</p>
                  <p className="text-4xl font-bold">Rp837.29M</p>
                </div>
                <div>
                  <p className="text-white/80 text-sm mb-2">Total Orders</p>
                  <p className="text-4xl font-bold">3,120+</p>
                </div>
                <div>
                  <p className="text-white/80 text-sm mb-2">Campaign Duration</p>
                  <p className="text-4xl font-bold">6 Months</p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>


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
                  className={`cursor-pointer rounded-xl p-6 border-2 transition-all ${activeTimeline === i
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
           <h2 className="text-4xl font-bold">
            {activeTab === "shopee"
              ? "Shopee Growth Analysis"
              : activeTab === "tiktok"
              ? "TikTok Shop Growth Analysis"
              : "Tokopedia Growth Analysis"}
          </h2>

            {/* Shopee Performance */}
            <motion.div variants={fadeIn} className="mb-12 bg-gradient-to-br from-red-50 to-red-100/50 border border-red-200 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-red-900 mb-8">Shopee Performance</h3>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <div className="space-y-4">
                    <div className="bg-white rounded-lg p-4 border border-red-100">
                      <div className="text-sm text-red-600 font-medium">Paid Ads</div>
                      <div className="text-2xl font-bold text-red-900 mt-1">2,322 Orders</div>
                      <div className="text-sm text-red-700 mt-2">Rp49M GMV • Rp4.2M/Month Cost • 10.6x ROI</div>
                    </div>
                    <div className="bg-white rounded-lg p-4 border border-red-100">
                      <div className="text-sm text-red-600 font-medium">Voucher Campaign</div>
                      <div className="text-2xl font-bold text-red-900 mt-1">222 Activations</div>
                      <div className="text-sm text-red-700 mt-2">Rp75.8M GMV • Rp788K Cost • 3,120+ ROI</div>
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
