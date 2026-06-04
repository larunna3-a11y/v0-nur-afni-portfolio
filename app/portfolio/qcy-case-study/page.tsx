'use client'

import { useState } from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import {
  LineChart,
  Line,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  AreaChart,
  Area,
} from 'recharts'
import { ChevronLeft, ChevronRight, TrendingUp } from 'lucide-react'

// Shopee monthly data
const shopeeMonthlyData = [
  { month: 'May 25', revenue: 91.8, orders: 1205, conversion: 2.43, growth: null },
  { month: 'Jun 25', revenue: 84.2, orders: 1089, conversion: 2.35, growth: -8.3 },
  { month: 'Jul 25', revenue: 101.5, orders: 1342, conversion: 2.56, growth: 20.5 },
  { month: 'Aug 25', revenue: 115.3, orders: 1523, conversion: 2.71, growth: 13.6 },
  { month: 'Sep 25', revenue: 102.4, orders: 1358, conversion: 2.48, growth: -11.2 },
]

// TikTok Shop monthly data
const tiktokMonthlyData = [
  { month: 'May 25', revenue: 52.6, orders: 687, conversion: 2.18, growth: null },
  { month: 'Jun 25', revenue: 68.4, orders: 892, conversion: 2.34, growth: 30.0 },
  { month: 'Jul 25', revenue: 75.9, orders: 991, conversion: 2.41, growth: 11.0 },
  { month: 'Aug 25', revenue: 89.2, orders: 1163, conversion: 2.58, growth: 17.4 },
  { month: 'Sep 25', revenue: 94.1, orders: 1227, conversion: 2.63, growth: 5.5 },
]

// Tokopedia monthly data
const tokopediaMonthlyData = [
  { month: 'May 25', revenue: 77.1, orders: 1089, conversion: 1.98, growth: null },
  { month: 'Jun 25', revenue: 82.3, orders: 1156, conversion: 2.12, growth: 6.8 },
  { month: 'Jul 25', revenue: 88.5, orders: 1243, conversion: 2.28, growth: 7.5 },
  { month: 'Aug 25', revenue: 95.6, orders: 1342, conversion: 2.41, growth: 8.0 },
  { month: 'Sep 25', revenue: 100.4, orders: 1408, conversion: 2.56, growth: 5.0 },
]

// Screenshot data
const shopeeScreenshots = [
  { month: 'May 2025', url: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202026-06-02%20at%2012.36.15-Vdb6TwycvS4Eux1waWkxwAPIe2jLrl.png', revenue: 'Rp91.8M', highlight: 'Launch Phase' },
  { month: 'June 2025', url: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202026-06-02%20at%2012.36.24-b39pzaz5s50rnMAfb3cKDqrL7GFF3z.png', revenue: 'Rp84.2M', highlight: 'Adjustment' },
  { month: 'July 2025', url: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202026-06-02%20at%2012.36.33-LNzD4k2v1gOHdyxNtN5LOKGlIRe9zY.png', revenue: 'Rp101.5M', highlight: '+20.5% Growth' },
  { month: 'August 2025', url: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202026-06-02%20at%2012.36.41-LId8GNCBxjUi6bm2gVVb3RaZmgfix7.png', revenue: 'Rp115.3M', highlight: 'Peak' },
  { month: 'September 2025', url: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202026-06-02%20at%2017.04.30-4Wa0xsHtk7VY3SzCvpA2dEuaYbcLff.png', revenue: 'Rp102.4M', highlight: 'Stable' },
]

const tiktokScreenshots = [
  { month: 'May 2025', url: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202026-06-02%20at%2014.08.28-DkXBAPIi3otnuNeJOhiI720dCAKEJa.png', revenue: 'Rp52.6M', highlight: 'Launch' },
  { month: 'June 2025', url: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202026-06-02%20at%2014.09.08-VSDiqQ4QCbltmOxaHLLsDVBXFexhCH.png', revenue: 'Rp68.4M', highlight: '+30%' },
  { month: 'July 2025', url: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202026-06-02%20at%2014.09.41-sspyrgovKQoW1N0TgVrlsGm4aAstcu.png', revenue: 'Rp75.9M', highlight: 'Growth' },
  { month: 'August 2025', url: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202026-06-02%20at%2014.10.02-bOwrFODGg0FcX0KLO8I42k87WJisGr.png', revenue: 'Rp89.2M', highlight: '+17.4%' },
  { month: 'September 2025', url: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202026-06-02%20at%2014.10.49-crpcRxhRmwtZtrRNlNmw63BeAY4HL0.png', revenue: 'Rp94.1M', highlight: 'Peak' },
]

const tokopediaScreenshots = [
  { month: 'May 2025', url: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202026-06-02%20at%2017.04.39-EIxdy7gMkVB6nMtXCJrqk1ku5G4Jq2.png', revenue: 'Rp77.1M', highlight: 'Launch' },
  { month: 'June 2025', url: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202026-06-02%20at%2017.05.11-8GtGmeFi0uSE8Z8PJPBCnaiffNGOGp.png', revenue: 'Rp82.3M', highlight: '+6.8%' },
  { month: 'July 2025', url: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202026-06-02%20at%2017.05.20-GxJlmG0xXnebzLsZdLUUlyStkPyieZ.png', revenue: 'Rp88.5M', highlight: 'Growth' },
  { month: 'August 2025', url: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202026-06-02%20at%2014.04.30-4oZCmeLlt2jvz4REe8epUBlTr9GSik.png', revenue: 'Rp95.6M', highlight: '+8%' },
  { month: 'September 2025', url: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202026-06-02%20at%2014.05.09-WKKRqtNpRKXgbPdT6RE17x0NxHMKY9.png', revenue: 'Rp100.4M', highlight: 'Peak' },
]

// Growth phases
const shopeeGrowthPhases = [
  {
    phase: 'Phase 1: Launch & Foundation',
    period: 'May 2025',
    description: 'Initial product launch across Shopee marketplace with comprehensive optimization. Established listings, promotional strategies, and integrated paid advertising campaigns to maximize launch visibility.',
    keyActions: ['Product listing optimization', 'Voucher strategy implementation', 'Paid ads setup', 'Flash sale execution'],
    result: 'Rp91.8M launch revenue with 1,205 orders',
  },
  {
    phase: 'Phase 2: Optimization & Recovery',
    period: 'Jun - Jul 2025',
    description: 'Refined promotional calendar and marketplace placements. Implemented data-driven A/B testing and campaign optimization to improve conversion rates and ROI across all channels.',
    keyActions: ['Campaign optimization', 'Conversion rate improvement', 'Budget reallocation', 'Affiliate activation'],
    result: 'Revenue grew to Rp101.5M (+20.5% growth)',
  },
  {
    phase: 'Phase 3: Scale & Peak',
    period: 'Aug - Sep 2025',
    description: 'Aggressive scaling with proven strategies and increased budget allocation. Integrated livestream commerce and expanded affiliate partnerships while maintaining strong ROI metrics.',
    keyActions: ['Budget scaling', 'Livestream integration', 'Multi-channel sync', 'Performance optimization'],
    result: 'Peak revenue of Rp115.3M with 2.71% conversion rate',
  },
]

const tiktokGrowthPhases = [
  {
    phase: 'Phase 1: Platform Establishment',
    period: 'May 2025',
    description: 'TikTok Shop marketplace entry with focus on product visibility and platform-native strategies. Established initial traffic through marketplace optimization and content-first approach.',
    keyActions: ['Product listing setup', 'Video content strategy', 'Marketplace optimization', 'Initial campaign testing'],
    result: 'Rp52.6M launch revenue with 687 orders',
  },
  {
    phase: 'Phase 2: Acceleration & Content',
    period: 'Jun - Jul 2025',
    description: 'Accelerated content strategy with influencer partnerships and LIVE commerce integration. Leveraged TikTok\'s algorithm for organic reach while scaling paid visibility campaigns.',
    keyActions: ['Content scaling', 'Influencer collaboration', 'LIVE commerce setup', 'Engagement optimization'],
    result: 'Revenue grew to Rp75.9M (+44% total growth)',
  },
  {
    phase: 'Phase 3: Viral Scale & Dominance',
    period: 'Aug - Sep 2025',
    description: 'Breakthrough period with viral content campaigns and sophisticated LIVE commerce operations. Multi-channel content strategy and affiliate partnerships drove exponential performance gains.',
    keyActions: ['Viral campaign execution', 'LIVE streaming scaling', 'Affiliate expansion', 'Peak season optimization'],
    result: 'Revenue reached Rp94.1M (+79% from launch)',
  },
]

const tokopediaGrowthPhases = [
  {
    phase: 'Phase 1: Marketplace Entry',
    period: 'May 2025',
    description: 'Tokopedia marketplace launch with emphasis on product catalog optimization and marketplace feature utilization. Established initial traction through promotional programs and voucher strategies.',
    keyActions: ['Product catalog setup', 'Voucher programs', 'Marketplace placement', 'Initial visibility drive'],
    result: 'Rp77.1M launch revenue with 1,089 orders',
  },
  {
    phase: 'Phase 2: Campaign Development',
    period: 'Jun - Jul 2025',
    description: 'Developed sophisticated promotional calendar leveraging Tokopedia\'s seasonal campaigns and flash sale events. Implemented conversion optimization and customer retention strategies.',
    keyActions: ['Seasonal campaign planning', 'Flash sale optimization', 'Conversion tracking', 'Customer segmentation'],
    result: 'Revenue grew to Rp88.5M (+15% growth)',
  },
  {
    phase: 'Phase 3: Sustained Growth',
    period: 'Aug - Sep 2025',
    description: 'Continuous market expansion with focus on customer lifetime value and repeat purchases. Integrated loyalty programs and advanced targeting to maintain momentum and profitability.',
    keyActions: ['Retention programs', 'Loyalty initiatives', 'Repeat purchase optimization', 'Customer experience enhancement'],
    result: 'Revenue reached Rp100.4M (+30% from launch)',
  },
]

const platformStats = {
  shopee: {
    growth: '+25.7%',
    orders: '6,517',
    conversion: '2.71%',
    duration: 'May - Sep 2025',
  },
  'tiktok shop': {
    growth: '+78.9%',
    orders: '5,060',
    conversion: '2.63%',
    duration: 'May - Sep 2025',
  },
  tokopedia: {
    growth: '+30.2%',
    orders: '6,238',
    conversion: '2.56%',
    duration: 'May - Sep 2025',
  },
}

export default function QCYCaseStudy() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [selectedPlatform, setSelectedPlatform] = useState('shopee')

  const platformData = {
    shopee: {
      monthlyData: shopeeMonthlyData,
      screenshots: shopeeScreenshots,
      growthPhases: shopeeGrowthPhases,
      color: 'from-red-500 to-red-600',
    },
    'tiktok shop': {
      monthlyData: tiktokMonthlyData,
      screenshots: tiktokScreenshots,
      growthPhases: tiktokGrowthPhases,
      color: 'from-black to-gray-800',
    },
    tokopedia: {
      monthlyData: tokopediaMonthlyData,
      screenshots: tokopediaScreenshots,
      growthPhases: tokopediaGrowthPhases,
      color: 'from-green-500 to-green-600',
    },
  }

  const activeScreenshots = platformData[selectedPlatform as keyof typeof platformData].screenshots
  const activeGrowthPhases = platformData[selectedPlatform as keyof typeof platformData].growthPhases
  const activePlatform = platformData[selectedPlatform as keyof typeof platformData]
  const activeStats = platformStats[selectedPlatform as keyof typeof platformStats]

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % activeScreenshots.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + activeScreenshots.length) % activeScreenshots.length)
  }

  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-[#6D4AFF] to-[#2D1BB8]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Link href="/portfolio" className="text-white/80 hover:text-white transition-colors flex items-center gap-2 mb-6">
              <ChevronLeft className="w-4 h-4" />
              Back to Portfolio
            </Link>

            <h1 className="text-5xl font-bold text-white mb-4">
              QCY Indonesia Multi-Platform Growth
            </h1>
            <p className="text-xl text-white/90 max-w-2xl">
              Rp91.8M → Rp115.3M (26% growth) - Scaling HT15 & C30 audio products across Shopee, TikTok Shop & Tokopedia
            </p>
          </motion.div>
        </div>
      </section>

      {/* Platform Selector - Sticky */}
      <section className="sticky top-0 z-40 bg-white border-b border-gray-200 backdrop-blur bg-white/95">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex gap-0">
            {['shopee', 'tiktok shop', 'tokopedia'].map((platform) => (
              <button
                key={platform}
                onClick={() => {
                  setSelectedPlatform(platform)
                  setCurrentSlide(0)
                }}
                className={`px-6 py-4 font-medium border-b-2 transition-all capitalize ${
                  selectedPlatform === platform
                    ? 'border-[#6D4AFF] text-[#6D4AFF]'
                    : 'border-transparent text-gray-500 hover:text-gray-700'
                }`}
              >
                {platform}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Platform Stats */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="grid md:grid-cols-4 gap-4 mb-16"
          >
            <div className="bg-gradient-to-br from-[#6D4AFF]/10 to-[#2D1BB8]/10 rounded-lg p-6 border border-[#6D4AFF]/20">
              <p className="text-gray-600 text-sm mb-2">Total Growth</p>
              <p className="text-3xl font-bold text-[#6D4AFF]">{activeStats.growth}</p>
            </div>
            <div className="bg-gradient-to-br from-blue-500/10 to-blue-600/10 rounded-lg p-6 border border-blue-200">
              <p className="text-gray-600 text-sm mb-2">Total Orders</p>
              <p className="text-3xl font-bold text-blue-600">{activeStats.orders}</p>
            </div>
            <div className="bg-gradient-to-br from-green-500/10 to-green-600/10 rounded-lg p-6 border border-green-200">
              <p className="text-gray-600 text-sm mb-2">Conversion Rate</p>
              <p className="text-3xl font-bold text-green-600">{activeStats.conversion}</p>
            </div>
            <div className="bg-gradient-to-br from-orange-500/10 to-orange-600/10 rounded-lg p-6 border border-orange-200">
              <p className="text-gray-600 text-sm mb-2">Campaign Period</p>
              <p className="text-sm font-bold text-orange-600">{activeStats.duration}</p>
            </div>
          </motion.div>

          {/* Screenshot Carousel */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="mb-16 bg-gray-50 rounded-2xl overflow-hidden shadow-lg"
          >
            <div className="relative h-96 md:h-[500px] bg-gradient-to-br from-gray-100 to-gray-200">
              <img
                src={activeScreenshots[currentSlide].url}
                alt={activeScreenshots[currentSlide].month}
                className="w-full h-full object-cover"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent p-8">
                <h3 className="text-2xl font-bold text-white mb-1">
                  {activeScreenshots[currentSlide].month}
                </h3>
                <p className="text-white/90">{activeScreenshots[currentSlide].highlight}</p>
              </div>

              {/* Navigation Arrows */}
              <button
                onClick={prevSlide}
                className="absolute left-4 top-1/2 -translate-y-1/2 z-10 bg-white/20 hover:bg-white/40 backdrop-blur rounded-full p-2 transition-colors"
              >
                <ChevronLeft className="w-6 h-6 text-white" />
              </button>
              <button
                onClick={nextSlide}
                className="absolute right-4 top-1/2 -translate-y-1/2 z-10 bg-white/20 hover:bg-white/40 backdrop-blur rounded-full p-2 transition-colors"
              >
                <ChevronRight className="w-6 h-6 text-white" />
              </button>
            </div>

            {/* Dots Navigation */}
            <div className="flex justify-center gap-2 py-6 bg-white border-t border-gray-200">
              {activeScreenshots.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`h-2 rounded-full transition-all ${
                    index === currentSlide ? 'w-8 bg-[#6D4AFF]' : 'w-2 bg-gray-300 hover:bg-gray-400'
                  }`}
                />
              ))}
            </div>

            {/* Month Navigation */}
            <div className="bg-[#6D4AFF] px-8 py-4 overflow-x-auto">
              <div className="flex gap-2 min-w-min">
                {activeScreenshots.map((screenshot, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentSlide(index)}
                    className={`px-4 py-2 rounded-full font-medium whitespace-nowrap transition-all ${
                      index === currentSlide
                        ? 'bg-orange-500 text-white'
                        : 'bg-[#5237D9] text-white/80 hover:text-white hover:bg-[#4220C1]'
                    }`}
                  >
                    {screenshot.month.split(' ')[0]}
                  </button>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Chart Section */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <h2 className="text-2xl font-bold text-[#0F0A2E] mb-6">Monthly Performance Trend</h2>
            <div className="bg-white rounded-2xl border border-gray-200 p-8">
              <ResponsiveContainer width="100%" height={400}>
                <AreaChart data={activePlatform.monthlyData}>
                  <defs>
                    <linearGradient id="colorRevenue" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#6D4AFF" stopOpacity={0.3} />
                      <stop offset="95%" stopColor="#6D4AFF" stopOpacity={0} />
                    </linearGradient>
                  </defs>
                  <CartesianGrid strokeDasharray="3 3" stroke="#E5E7EB" />
                  <XAxis dataKey="month" stroke="#9CA3AF" />
                  <YAxis stroke="#9CA3AF" />
                  <Tooltip
                    contentStyle={{
                      backgroundColor: '#0F0A2E',
                      border: 'none',
                      borderRadius: '8px',
                      color: '#fff',
                    }}
                  />
                  <Area
                    type="monotone"
                    dataKey="revenue"
                    stroke="#6D4AFF"
                    strokeWidth={2}
                    fillOpacity={1}
                    fill="url(#colorRevenue)"
                  />
                </AreaChart>
              </ResponsiveContainer>
            </div>
          </motion.div>

          {/* Growth Phases */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl font-bold text-[#0F0A2E] mb-8">Growth Strategy Phases</h2>
            <div className="space-y-6">
              {activeGrowthPhases.map((phase, index) => (
                <div
                  key={index}
                  className="border-l-4 border-[#6D4AFF] bg-gradient-to-r from-[#6D4AFF]/5 to-transparent p-6 rounded-r-lg"
                >
                  <div className="flex items-start justify-between mb-3">
                    <div>
                      <h3 className="text-xl font-bold text-[#0F0A2E]">{phase.phase}</h3>
                      <p className="text-sm text-gray-500">{phase.period}</p>
                    </div>
                    <span className="text-xs font-semibold bg-[#6D4AFF] text-white px-3 py-1 rounded-full">
                      Phase {index + 1}
                    </span>
                  </div>
                  <p className="text-gray-700 mb-4">{phase.description}</p>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <p className="text-xs text-gray-500 mb-2 font-semibold">Key Actions</p>
                      <ul className="space-y-1">
                        {phase.keyActions.map((action, i) => (
                          <li key={i} className="text-sm text-gray-600 flex items-center gap-2">
                            <span className="w-1.5 h-1.5 bg-[#6D4AFF] rounded-full" />
                            {action}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="bg-white rounded-lg p-4 border border-[#6D4AFF]/20">
                      <p className="text-xs text-gray-500 mb-2 font-semibold">Result</p>
                      <p className="text-lg font-bold text-[#6D4AFF]">{phase.result}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  )
}
