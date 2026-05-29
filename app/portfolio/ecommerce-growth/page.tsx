'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
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
import { ChevronLeft, ChevronRight, TrendingUp, ShoppingCart, Target, Calendar } from 'lucide-react'

// Monthly data extracted from screenshots (chronological order)
const shopeeMonthlyData = [
  { month: 'Sep 24', revenue: 24.03, orders: 482, conversion: 2.06, growth: null },
  { month: 'Oct 24', revenue: 54.97, orders: 1263, conversion: 2.38, growth: 128.8 },
  { month: 'Nov 24', revenue: 64.54, orders: 1577, conversion: 2.29, growth: 17.4 },
  { month: 'Dec 24', revenue: 56.82, orders: 1396, conversion: 2.84, growth: -11.95 },
  { month: 'Jan 25', revenue: 50.03, orders: 1207, conversion: 3.23, growth: -11.96 },
  { month: 'Feb 25', revenue: 75.76, orders: 2237, conversion: 4.10, growth: 51.42 },
  { month: 'Mar 25', revenue: 88.22, orders: 2325, conversion: 3.99, growth: 16.45 },
  { month: 'Apr 25', revenue: 92.36, orders: 2305, conversion: 3.73, growth: 4.69 },
  { month: 'May 25', revenue: 88.88, orders: 2192, conversion: 3.82, growth: -3.76 },
  { month: 'Jun 25', revenue: 96.89, orders: 2472, conversion: 3.91, growth: 9.01 },
  { month: 'Jul 25', revenue: 134.81, orders: 3515, conversion: 4.30, growth: 39.14 },
  { month: 'Aug 25', revenue: 168.33, orders: 4390, conversion: 4.24, growth: 24.87 },
  { month: 'Sep 25', revenue: 214.75, orders: 5723, conversion: 4.12, growth: 27.58 },
  { month: 'Oct 25', revenue: 346.84, orders: 9432, conversion: 4.11, growth: 61.51 },
  { month: 'Nov 25', revenue: 296.94, orders: 7706, conversion: 3.29, growth: -14.39 },
  { month: 'Dec 25', revenue: 329.57, orders: 8921, conversion: 3.80, growth: 10.99 },
  { month: 'Feb 26', revenue: 553.53, orders: 16566, conversion: 4.68, growth: 53.94 },
  { month: 'Mar 26', revenue: 566.89, orders: 16609, conversion: 4.61, growth: 2.41 },
  { month: 'Apr 26', revenue: 760.53, orders: 21607, conversion: 4.64, growth: 34.16 },
  { month: 'May 26', revenue: 982.57, orders: 27393, conversion: 4.54, growth: 42.39 },
]

// Screenshots data with source URLs (chronological order)
const screenshots = [
  { month: 'September 2024', url: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202026-05-25%20at%2017.33.04-sfLUQUo6UWAaO2kzUdmcEnLLZuvHic.png', revenue: 'Rp24.03M', highlight: 'Starting Point' },
  { month: 'October 2024', url: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202026-05-25%20at%2017.33.13-WXtC0ypmKSYo9rN65ZnreJ3yqz4PQe.png', revenue: 'Rp54.97M', highlight: '+128.8% Growth' },
  { month: 'November 2024', url: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202026-05-25%20at%2017.33.23-Qr4jJwvCrzTfaJkkOfhJCwiQnMFg86.png', revenue: 'Rp64.54M', highlight: 'Momentum Building' },
  { month: 'December 2024', url: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202026-05-25%20at%2017.33.32-ZPiYpdqIKutllbLu9PIQRpv3ts0rbn.png', revenue: 'Rp56.82M', highlight: 'Year-End Adjustment' },
  { month: 'January 2025', url: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202026-05-25%20at%2017.33.50-bN4RMQac7I0RvE7xwhotSva7OO3hhs.png', revenue: 'Rp50.03M', highlight: 'New Year Reset' },
  { month: 'February 2025', url: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202026-05-25%20at%2017.33.58-Y6QW4msLx9P5Azmte2ydCvnQm6Bhnv.png', revenue: 'Rp75.76M', highlight: '+51.4% Recovery' },
  { month: 'March 2025', url: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202026-05-25%20at%2017.34.05-r9ewZXMxh4RDLimRSJ5nV2vpfrzjFL.png', revenue: 'Rp88.22M', highlight: 'Promo Optimization' },
  { month: 'April 2025', url: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202026-05-25%20at%2017.34.12-RDrH6jpQk1t5UeVFbyMUZKwHP7J3GQ.png', revenue: 'Rp92.36M', highlight: 'Steady Growth' },
  { month: 'May 2025', url: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202026-05-25%20at%2017.34.18-BYcCpebaSggkm17qzTGZrOLaxLlXFW.png', revenue: 'Rp88.88M', highlight: 'Consolidation' },
  { month: 'June 2025', url: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202026-05-25%20at%2017.34.25-awEyxlFN5puFijN8ndnCM3s6Sf23yV.png', revenue: 'Rp96.89M', highlight: 'Mid-Year Push' },
  { month: 'July 2025', url: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202026-05-25%20at%2017.34.31-VYKJ6ErdhQhzYIQYbwUNIAUoR2SBRX.png', revenue: 'Rp134.81M', highlight: '+39% Breakthrough' },
  { month: 'August 2025', url: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202026-05-25%20at%2017.34.37-GnYtRbeB8OicPBPmLIEAhFEroJTGM5.png', revenue: 'Rp168.33M', highlight: 'Scale-Up Phase' },
  { month: 'September 2025', url: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202026-05-25%20at%2017.34.43-qdCdVye0tujrJ7F1ETyfVTVsHdXvJb.png', revenue: 'Rp214.75M', highlight: 'Breaking Rp200M' },
  { month: 'October 2025', url: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202026-05-25%20at%2017.34.49-xLW9Sk8rYmYCs317MFdEC5J9fv2iDP.png', revenue: 'Rp346.84M', highlight: '+61.5% Peak Campaign' },
  { month: 'November 2025', url: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202026-05-25%20at%2017.35.14-uOix7ZDM2A0q9F1VM2bOencvUGJdPE.png', revenue: 'Rp296.94M', highlight: 'Post-Campaign' },
  { month: 'December 2025', url: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202026-05-25%20at%2017.35.21-cYQoXbuuyapYRkNUMQ5x5LoZvC9Lzy.png', revenue: 'Rp329.57M', highlight: 'Year-End Strong' },
  { month: 'February 2026', url: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202026-05-25%20at%2017.35.34-obfCmkvnepxFLCcPI3spacDZ8Xuvt4.png', revenue: 'Rp553.53M', highlight: '+53.9% New Year Push' },
  { month: 'March 2026', url: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202026-05-25%20at%2017.35.40-tZRlfsQPw3njIhQcQcQYU7frzHvw5s.png', revenue: 'Rp566.89M', highlight: 'Ramadhan Campaign' },
  { month: 'April 2026', url: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202026-05-25%20at%2017.35.45-WvSL57nJyYoeCIBcK35jCfgLbXgJau.png', revenue: 'Rp760.53M', highlight: '+34% New growth Peak' },
  { month: 'May 2026', url: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202026-05-25%20at%2017.35.45-WvSL57nJyYoeCIBcK35jCfgLbXgJau.png', revenue: 'Rp982.57M', highlight: '+42.39% Q2 New Peak' },
]

const tiktokScreenshots = [
  { month: 'June 2025', url: '/screenshots-growth-ecommerce/tiktokshop Jun 2025.png', revenue: 'Rp28.4M', highlight: 'Starting Point' },
  { month: 'July 2025', url: '/screenshots-growth-ecommerce/tiktokshop jul 2025.png', revenue: 'Rp38.7M', highlight: '+35.6% Early Growth' },
  { month: 'August 2025', url: '/screenshots-growth-ecommerce/tiktokshop agust 2025.png', revenue: 'Rp70.8M', highlight: '+83.06% Scale-Up' },
  { month: 'September 2025', url: '/screenshots-growth-ecommerce/tiktokshop sep 2025.png', revenue: 'Rp89.7M', highlight: '+30.56% Momentum' },
  { month: 'October 2025', url: '/screenshots-growth-ecommerce/tiktokshop okt 2025.png', revenue: 'Rp137.7M', highlight: '+49.03% Campaign Boost' },
  { month: 'November 2025', url: '/screenshots-growth-ecommerce/tiktokshop nov 2025.png', revenue: 'Rp220M', highlight: '+63.68% Breakthrough' },
  { month: 'December 2025', url: '/screenshots-growth-ecommerce/tiktokshop des 2025.png', revenue: 'Rp625.1M', highlight: '+169.4% Viral Peak' },
  { month: 'January 2026', url: '/screenshots-growth-ecommerce/tiktokshop januari 2026.png', revenue: 'Rp244.7M', highlight: 'Post-Holiday Reset' },
  { month: 'February 2026', url: '/screenshots-growth-ecommerce/tiktokshop februari 2026.png', revenue: 'Rp317.6M', highlight: '+47.3% Recovery' },
  { month: 'March 2026', url: '/screenshots-growth-ecommerce/tiktokshop maret 2026.png', revenue: 'Rp539.3M', highlight: '+56.66% Ramadhan Push' },
  { month: 'April 2026', url: '/screenshots-growth-ecommerce/tiktokshop april 2026.png', revenue: 'Rp736M', highlight: '+43.69% Expansion' },
  { month: 'May 2026', url: '/screenshots-growth-ecommerce/shopee may 2026.jpeg', revenue: 'Rp760.1M', highlight: 'Highest Monthly GMV' }
]

const lazadaScreenshots = [
  { month: 'May 2025', url: '/ss-growth-lazada-pris/Laz Mei 2025.png', revenue: 'Rp7.3M', highlight: 'Marketplace Launch' },
  { month: 'June 2025', url: '/ss-growth-lazada-pris/Laz Juni 2025.png', revenue: 'Rp12.6M', highlight: '+72.38% Early Growth' },
  { month: 'July 2025', url: '/ss-growth-lazada-pris/Laz Juli 2025.png', revenue: 'Rp18.2M', highlight: '+44.77% Expansion' },
  { month: 'August 2025', url: '/ss-growth-lazada-pris/Laz Agust 2025.png', revenue: 'Rp37.8M', highlight: '+107.21% Breakthrough Month' },
  { month: 'September 2025', url: '/ss-growth-lazada-pris/Laz sep 2025.png', revenue: 'Rp45.8M', highlight: '+21.21% Momentum Growth' },
  { month: 'October 2025', url: '/ss-growth-lazada-pris/Laz Okt 2025.png', revenue: 'Rp52.9M', highlight: '+15.54% Conversion Peak' },
  { month: 'November 2025', url: '/ss-growth-lazada-pris/Laz nov 2025.png', revenue: 'Rp65.9M', highlight: '+24.43% 11.11 Campaign Success' },
  { month: 'December 2025', url: '/ss-growth-lazada-pris/Laz des 2025.png', revenue: 'Rp65.0M', highlight: 'Stable Holiday Performance' },
  { month: 'January 2026', url: '/ss-growth-lazada-pris/Laz Jan 2026.png', revenue: 'Rp76.0M', highlight: 'Highest Revenue Record' },
  { month: 'February 2026', url: '/ss-growth-lazada-pris/Laz Feb 2026.png', revenue: 'Rp66.3M', highlight: 'Post-Holiday Retention' },
  { month: 'March 2026', url: '/ss-growth-lazada-pris/Laz Mar 2026.png', revenue: 'Rp60.3M', highlight: 'Operational Stabilization' },
  { month: 'April 2026', url: '/ss-growth-lazada-pris/Laz Apr 2026.png', revenue: 'Rp73.3M', highlight: '+21.71% Recovery Peak' }
]

const tiktokMonthlyData = [
  { month: 'Jun 25', revenue: 28.43, orders: 761, conversion: 2.10, growth: null },
  { month: 'Jul 25', revenue: 38.69, orders: 1074, conversion: 2.35, growth: 35.56 },
  { month: 'Aug 25', revenue: 70.83, orders: 1978, conversion: 2.88, growth: 83.06 },
  { month: 'Sep 25', revenue: 89.66, orders: 2626, conversion: 3.12, growth: 30.56 },
  { month: 'Oct 25', revenue: 137.69, orders: 4094, conversion: 3.48, growth: 49.03 },
  { month: 'Nov 25', revenue: 219.95, orders: 6758, conversion: 3.91, growth: 63.68 },
  { month: 'Dec 25', revenue: 625.13, orders: 16721, conversion: 4.42, growth: 169.40 },
  { month: 'Jan 26', revenue: 244.67, orders: 7766, conversion: 3.55, growth: -60.86 },
  { month: 'Feb 26', revenue: 317.63, orders: 11611, conversion: 3.89, growth: 47.30 },
  { month: 'Mar 26', revenue: 539.25, orders: 19747, conversion: 4.31, growth: 56.66 },
  { month: 'Apr 26', revenue: 736.01, orders: 26861, conversion: 4.54, growth: 43.69 },
  { month: 'May 26', revenue: 760.16, orders: 31027, conversion: 4.54, growth: 9.16 },
]

const lazadaMonthlyData = [
  { month: 'May 2025', revenue: 7.3, orders: 132, conversion: 6.22, growth: null },
  { month: 'Jun 2025', revenue: 12.6, orders: 235, conversion: 4.16, growth: 72.38 },
  { month: 'Jul 2025', revenue: 18.2, orders: 322, conversion: 6.06, growth: 44.77 },
  { month: 'Aug 2025', revenue: 37.8, orders: 712, conversion: 7.23, growth: 107.21 },
  { month: 'Sep 2025', revenue: 45.8, orders: 807, conversion: 5.53, growth: 21.21 },
  { month: 'Oct 2025', revenue: 52.9, orders: 939, conversion: 7.34, growth: 15.54 },
  { month: 'Nov 2025', revenue: 65.9, orders: 1117, conversion: 5.12, growth: 24.43 },
  { month: 'Dec 2025', revenue: 65.0, orders: 1090, conversion: 5.21, growth: -1.33 },
  { month: 'Jan 2026', revenue: 76.0, orders: 1199, conversion: 5.52, growth: 16.97 },
  { month: 'Feb 2026', revenue: 66.3, orders: 1137, conversion: 5.84, growth: -12.74 },
  { month: 'Mar 2026', revenue: 60.3, orders: 1080, conversion: 5.81, growth: -9.15 },
  { month: 'Apr 2026', revenue: 73.3, orders: 1264, conversion: 5.31, growth: 21.71 }
]

// Growth phases for narrative
const shopeeGrowthPhases = [
  {
    phase: 'Phase 1: Foundation',
    period: 'Sep - Dec 2024',
    description: 'Initial setup and market testing. Started from Rp24M baseline, quickly doubled revenue through aggressive marketplace optimization and promotional campaigns.',
    keyActions: ['Product listing optimization', 'Voucher strategy implementation', 'Initial paid ads setup'],
    result: 'Revenue grew from Rp24M to Rp64.5M (+168%)',
  },
  {
    phase: 'Phase 2: Recovery & Optimization',
    period: 'Jan - Jun 2025',
    description: 'After year-end dip, implemented refined promotional strategies. Focused on conversion rate improvement and cost-efficient advertising.',
    keyActions: ['CPAS campaign optimization', 'Flash sale timing improvements', 'Affiliate program launch'],
    result: 'Conversion rate improved from 2.84% to 3.91%',
  },
  {
    phase: 'Phase 3: Scale-Up',
    period: 'Jul - Oct 2025',
    description: 'Breakthrough period with aggressive scaling. Increased ad spend with proven ROAS, expanded to more marketplace features including livestream commerce.',
    keyActions: ['Budget scaling with maintained ROAS', 'Livestream commerce integration', 'Multi-channel synchronization'],
    result: 'Revenue jumped from Rp96M to Rp346M (+260%)',
  },
  {
    phase: 'Phase 4: Dominance',
    period: 'Nov 2025 - Apr 2026',
    description: 'Sustained high-volume operations with continuous optimization. Ramadhan and holiday campaigns drove record-breaking numbers.',
    keyActions: ['Seasonal campaign mastery', 'Premium placement strategies', 'Full-funnel attribution'],
    result: 'Reached Rp760M monthly revenue (31x from start)',
  },
]

const tiktokGrowthPhases = [
  {
    phase: 'Phase 1: Foundation',
    period: 'Jun - Aug 2025',
    description:
      'Initial TikTok Shop setup focused on product visibility and marketplace adaptation. Early growth was driven mainly by product-card traffic and initial video exposure.',
    keyActions: [
      'Product listing optimization',
      'Short video consistency',
      'Marketplace traffic testing',
    ],
    result:
      'Revenue scaled from Rp28.4M to Rp70.8M (+149%) with product-card traffic dominating GMV contribution.',
  },

  {
    phase: 'Phase 2: Momentum Building',
    period: 'Sep - Oct 2025',
    description:
      'Traffic sources became more balanced as video performance and affiliate exposure improved. Conversion quality increased while GMV crossed Rp100M.',
    keyActions: [
      'Affiliate activation',
      'Video content scaling',
      'Campaign synchronization',
    ],
    result:
      'Revenue reached Rp137.7M with stronger contribution from video commerce and affiliate traffic.',
  },

  {
    phase: 'Phase 3: Viral Expansion',
    period: 'Nov - Dec 2025',
    description:
      'Major campaign breakthrough period. LIVE commerce and affiliate-driven sales accelerated rapidly, creating the first large-scale viral GMV spike.',
    keyActions: [
      'LIVE commerce scaling',
      'Affiliate campaign push',
      'Peak season optimization',
    ],
    result:
      'Monthly GMV surged from Rp220M to Rp625M (+169%) driven heavily by LIVE and affiliate contribution.',
  },

  {
    phase: 'Phase 4: Stabilization & Recovery',
    period: 'Jan - Feb 2026',
    description:
      'After the holiday peak correction, strategy shifted toward stabilizing repeat purchases, rebuilding conversion efficiency, and maintaining traffic quality.',
    keyActions: [
      'Retention optimization',
      'Traffic efficiency control',
      'Conversion recovery',
    ],
    result:
      'Business stabilized above Rp300M monthly GMV while maintaining healthy order growth.',
  },

  {
    phase: 'Phase 5: Ramadhan Scale-Up',
    period: 'Mar - May 2026',
    description:
      'Ramadhan campaigns and stronger LIVE-video integration created another acceleration phase. Product-card traffic remained dominant while LIVE contribution expanded significantly.',
    keyActions: [
      'Ramadhan campaign execution',
      'LIVE + video integration',
      'High-volume promotional scaling',
    ],
    result:
      'GMV climbed to Rp760M+ with sustained multi-channel contribution from LIVE, video, affiliate, and marketplace traffic.',
  },
]

const lazadaGrowthPhases = [
  {
    phase: 'Phase 1: Foundation',
    period: 'May - Jul 2025',
    description: 'Built marketplace visibility and established early sales traction through Lazada promotional tools, with Free Shipping Max becoming the primary revenue driver.',
    keyActions: [
      'Free Shipping Max activation',
      'Voucher setup & testing',
      'Store and product optimization'
    ],
    result: 'Revenue grew from Rp7.3M to Rp18.2M (+149%)'
  },

  {
    phase: 'Phase 2: Scale-Up Acceleration',
    period: 'Aug - Nov 2025',
    description: 'Expanded promotional coverage and campaign participation, leveraging Free Shipping Max, Bonus Dadakan, and Flash Sale programs to rapidly increase traffic and orders.',
    keyActions: [
      'Free Shipping Max scaling',
      'Bonus Dadakan optimization',
      'Mega campaign participation'
    ],
    result: 'Revenue increased from Rp37.8M to Rp65.9M (+74%)'
  },

  {
    phase: 'Phase 3: Peak Performance',
    period: 'Dec 2025 - Jan 2026',
    description: 'Maximized year-end marketplace demand through aggressive promotional visibility and campaign execution, achieving the highest revenue milestone.',
    keyActions: [
      'Holiday campaign execution',
      'Voucher optimization',
      'High-volume Free Shipping strategy'
    ],
    result: 'Achieved record revenue of Rp76.0M'
  },

  {
    phase: 'Phase 4: Recovery & Sustainability',
    period: 'Feb - Apr 2026',
    description: 'Maintained strong promotional efficiency despite post-holiday normalization, recovering revenue through consistent traffic acquisition and conversion optimization.',
    keyActions: [
      'Free Shipping Max retention',
      'Promotion mix optimization',
      'Traffic recovery strategy'
    ],
    result: 'Revenue recovered to Rp73.3M with 1,264 monthly orders'
  }
]

export default function EcommerceGrowthCaseStudy() {

  const [currentSlide, setCurrentSlide] = useState(0)
  const [selectedPlatform, setSelectedPlatform] = useState('shopee')
  const platformData = {
    shopee: {
      monthlyData: shopeeMonthlyData,
      screenshots: screenshots,
      growthPhases: shopeeGrowthPhases
    },

    'tiktok shop': {
      monthlyData: tiktokMonthlyData,
      screenshots: tiktokScreenshots,
      growthPhases: tiktokGrowthPhases
    },

    lazada: {
      monthlyData: lazadaMonthlyData,
      screenshots: lazadaScreenshots,
      growthPhases: lazadaGrowthPhases
    }
  }

  const activeScreenshots =
    platformData[selectedPlatform as keyof typeof platformData].screenshots

  const activeGrowthPhases =
    platformData[selectedPlatform as keyof typeof platformData].growthPhases

  const activePlatform =
    platformData[selectedPlatform as keyof typeof platformData]

  const platformStats = {
    shopee: {
      growth: '+3,065%',
      orders: '27,393',
      conversion: '4.68%',
      duration: 'Sep 24 - May 26'
    },

    'tiktok shop': {
      growth: '+2,574%',
      orders: '31,027',
      conversion: '4.54%',
      duration: 'Jun 25 - May 26'
    },

    lazada: {
      growth: '+904%',
      orders: '1,264',
      conversion: '7.34%',
      duration: 'May 25 - Apr 26'
    }
  }

  const activeStats =
    platformStats[selectedPlatform as keyof typeof platformStats]

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % activeScreenshots.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + activeScreenshots.length) % activeScreenshots.length)
  }

  const formatRupiah = (value: number) => {
    return `Rp${value.toFixed(0)}M`
  }

  return (
    <div className="pt-16 bg-[#F8F7FF]">
      {/* Header */}
      <section className="bg-[#2D1BB8] py-16 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#F97316] rounded-full blur-3xl opacity-20" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#4A35D4] rounded-full blur-3xl opacity-30" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <Link href="/portfolio" className="inline-flex items-center gap-2 text-[#9B97C0] hover:text-white mb-6">
            <ChevronLeft className="w-4 h-4" />
            Back to Portfolio
          </Link>

          <div className="flex flex-wrap gap-2 mb-4">
            <span className="px-3 py-1 bg-white/10 text-white rounded-full text-xs font-medium">E-Commerce</span>
            <span className="px-3 py-1 bg-white/10 text-white rounded-full text-xs font-medium">Beauty & Perfumery</span>
            <span className="px-3 py-1 bg-white/10 text-white rounded-full text-xs font-medium">Marketplace</span>
          </div>
          <div className="flex gap-6 mt-8 mb-6 text-sm font-medium">
            {['shopee', 'tiktok shop', 'lazada'].map((platform) => (
              <button
                key={platform}
                onClick={() => setSelectedPlatform(platform)}
                className={`transition-all ${selectedPlatform === platform
                  ? 'text-white border-b-2 border-white'
                  : 'text-[#B9B7C0] hover:text-white'
                  }`}
              >
                {platform === 'tiktok shop'
                  ? 'TikTok Shop'
                  : platform.charAt(0).toUpperCase() + platform.slice(1)}
              </button>
            ))}
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white">
            E-Commerce Growth Journey
          </h1>
          <p className="mt-2 text-xl text-[#9B97C0]">Priskila — Beauty & Perfumery Products</p>
          <p className="mt-1 text-sm text-[#9B97C0]">Brands: Casablanca, Bellagio, Regazza, Camellia, Marie Jose, Excello</p>

          <div className="mt-8 flex flex-wrap gap-6">
            <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-4">
              <p className="text-3xl font-bold text-[#ffffff]">31x</p>
              <p className="text-sm text-[#9B97C0]">Revenue Growth</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-4">
              <p className="text-3xl font-bold text-[#F97316]">Rp24M → Rp982M</p>
              <p className="text-sm text-[#9B97C0]">Monthly Revenue</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-4">
              <p className="text-3xl font-bold text-[#ffffff]">20 Months</p>
              <p className="text-sm text-[#9B97C0]">Progress Period</p>
            </div>
          </div>
        </div>
      </section>

      {/* Key Metrics Cards */}
      <section className="py-12 bg-white border-b border-[#E8E6F8]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="text-center p-6">
              <TrendingUp className="w-8 h-8 text-[#2D1BB8] mx-auto mb-2" />
              <p className="text-2xl font-bold text-[#0F0A2E]">{activeStats.growth}</p>
              <p className="text-sm text-[#9B97C0]">Total Revenue Growth</p>
            </div>
            <div className="text-center p-6">
              <ShoppingCart className="w-8 h-8 text-[#2D1BB8] mx-auto mb-2" />
              <p className="text-2xl font-bold text-[#0F0A2E]">{activeStats.orders}</p>
              <p className="text-sm text-[#9B97C0]">Peak Monthly Orders</p>
            </div>
            <div className="text-center p-6">
              <Target className="w-8 h-8 text-[#2D1BB8] mx-auto mb-2" />
              <p className="text-2xl font-bold text-[#0F0A2E]">{activeStats.conversion}</p>
              <p className="text-sm text-[#9B97C0]">Best Conversion Rate</p>
            </div>
            <div className="text-center p-6">
              <Calendar className="w-8 h-8 text-[#2D1BB8] mx-auto mb-2" />
              <p className="text-2xl font-bold text-[#0F0A2E]">{activeStats.duration}</p>
              <p className="text-sm text-[#9B97C0]">Progress Duration</p>
            </div>
          </div>
        </div>
      </section>

      {/* Revenue Growth Chart */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-[#0F0A2E] mb-2">Revenue Growth Over Time</h2>
          <p className="text-[#4B4680] mb-8">Monthly revenue progression from Rp24M to Rp982M</p>

          <div className="bg-white rounded-2xl border border-[#E8E6F8] p-6">
            <ResponsiveContainer width="100%" height={400}>
              <AreaChart data={activePlatform.monthlyData}>
                <defs>
                  <linearGradient id="revenueGradient" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#2D1BB8" stopOpacity={0.3} />
                    <stop offset="95%" stopColor="#2D1BB8" stopOpacity={0} />
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" stroke="#E8E6F8" />
                <XAxis dataKey="month" tick={{ fill: '#4B4680', fontSize: 12 }} />
                <YAxis tick={{ fill: '#4B4680', fontSize: 12 }} tickFormatter={(v) => `Rp${v}M`} />
                <Tooltip
                  contentStyle={{ backgroundColor: '#fff', border: '1px solid #E8E6F8', borderRadius: '8px' }}
                  formatter={(value: number) => [`Rp${value.toFixed(2)}M`, 'Revenue']}
                />
                <Area type="monotone" dataKey="revenue" stroke="#2D1BB8" strokeWidth={3} fill="url(#revenueGradient)" />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>
      </section>

      {/* Orders & Conversion Chart */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-8">
            {/* Orders Chart */}
            <div>
              <h2 className="text-2xl font-bold text-[#0F0A2E] mb-2">Monthly Orders</h2>
              <p className="text-[#4B4680] mb-6">Order volume growth from 482 to 27,393</p>

              <div className="bg-[#F8F7FF] rounded-2xl border border-[#E8E6F8] p-6">
                <ResponsiveContainer width="100%" height={300}>
                  <BarChart data={activePlatform.monthlyData}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#E8E6F8" />
                    <XAxis dataKey="month" tick={{ fill: '#4B4680', fontSize: 10 }} angle={-45} textAnchor="end" height={60} />
                    <YAxis tick={{ fill: '#4B4680', fontSize: 12 }} />
                    <Tooltip
                      contentStyle={{ backgroundColor: '#fff', border: '1px solid #E8E6F8', borderRadius: '8px' }}
                      formatter={(value: number) => [value.toLocaleString(), 'Orders']}
                    />
                    <Bar dataKey="orders" fill="#F97316" radius={[4, 4, 0, 0]} />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </div>

            {/* Conversion Rate Chart */}
            <div>
              <h2 className="text-2xl font-bold text-[#0F0A2E] mb-2">Conversion Rate</h2>
              <p className="text-[#4B4680] mb-6">Conversion optimization from 2.06% to 4.64%</p>

              <div className="bg-[#F8F7FF] rounded-2xl border border-[#E8E6F8] p-6">
                <ResponsiveContainer width="100%" height={300}>
                  <LineChart data={activePlatform.monthlyData}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#E8E6F8" />
                    <XAxis dataKey="month" tick={{ fill: '#4B4680', fontSize: 10 }} angle={-45} textAnchor="end" height={60} />
                    <YAxis tick={{ fill: '#4B4680', fontSize: 12 }} tickFormatter={(v) => `${v}%`} domain={[0, 5]} />
                    <Tooltip
                      contentStyle={{ backgroundColor: '#fff', border: '1px solid #E8E6F8', borderRadius: '8px' }}
                      formatter={(value: number) => [`${value.toFixed(2)}%`, 'Conversion Rate']}
                    />
                    <Line type="monotone" dataKey="conversion" stroke="#4A35D4" strokeWidth={2} dot={{ fill: '#4A35D4', strokeWidth: 2 }} />
                  </LineChart>
                </ResponsiveContainer>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Screenshot Slideshow */}
      <section className="py-16 bg-[#1A0F7A]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-white mb-2">Monthly Progress Screenshots</h2>
          <p className="text-[#9B97C0] mb-8">Actual Shopee Seller Center data showing the growth journey</p>

          <div className="relative">
            {/* Main Slide */}
            <div className="bg-white rounded-2xl overflow-hidden shadow-2xl">
              <div className="bg-[#2D1BB8] px-6 py-4 flex items-center justify-between">
                <div>
                  <p className="text-white font-bold">{activeScreenshots[currentSlide].month}</p>
                  <p className="text-[#9B97C0] text-sm">{activeScreenshots[currentSlide].revenue}</p>
                </div>
                <span className="px-3 py-1 bg-[#F97316] text-white rounded-full text-sm font-medium">
                  {activeScreenshots[currentSlide].highlight}
                </span>
              </div>

              <div className={`relative bg-gray-100 ${selectedPlatform === 'tiktok shop' ? 'aspect-[16/15]' : 'aspect-[16/10]'}`}>
                <Image
                  src={activeScreenshots[currentSlide].url}
                  alt={`Dashboard ${activeScreenshots[currentSlide].month}`}
                  fill
                  className="object-contain"
                  priority
                />
              </div>
            </div>

            {/* Navigation Buttons */}
            <button
              onClick={prevSlide}
              className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/90 rounded-full flex items-center justify-center shadow-lg hover:bg-white transition-colors"
            >
              <ChevronLeft className="w-6 h-6 text-[#2D1BB8]" />
            </button>
            <button
              onClick={nextSlide}
              className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/90 rounded-full flex items-center justify-center shadow-lg hover:bg-white transition-colors"
            >
              <ChevronRight className="w-6 h-6 text-[#2D1BB8]" />
            </button>

            {/* Slide Indicators */}
            <div className="flex justify-center gap-2 mt-6">
              {activeScreenshots.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`w-2 h-2 rounded-full transition-colors ${index === currentSlide ? 'bg-[#F97316] w-6' : 'bg-white/40 hover:bg-white/60'
                    }`}
                />
              ))}
            </div>

            {/* Timeline Navigation */}
            <div className="mt-8 overflow-x-auto pb-4">
              <div className="flex gap-2 min-w-max">
                {activeScreenshots.map((shot, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentSlide(index)}
                    className={`px-3 py-2 rounded-lg text-xs font-medium whitespace-nowrap transition-colors ${index === currentSlide
                      ? 'bg-[#F97316] text-white'
                      : 'bg-white/10 text-white/70 hover:bg-white/20'
                      }`}
                  >
                    {shot.month.split(' ')[0]} {shot.month.split(' ')[1]}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Growth Phases */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-[#0F0A2E] mb-2">Growth Strategy Breakdown</h2>
          <p className="text-[#4B4680] mb-12">How promotional improvements drove consistent revenue growth</p>

          <div className="space-y-8">
            {activeGrowthPhases.map((phase, index) => (
              <div key={index} className="bg-white rounded-2xl border border-[#E8E6F8] p-8 hover:shadow-lg transition-shadow">
                <div className="flex flex-col lg:flex-row lg:items-start gap-6">
                  <div className="lg:w-1/3">
                    <span className="inline-block px-3 py-1 bg-[#2D1BB8] text-white rounded-full text-xs font-medium mb-2">
                      {phase.phase}
                    </span>
                    <p className="text-[#9B97C0] text-sm">{phase.period}</p>
                  </div>

                  <div className="lg:w-2/3">
                    <p className="text-[#4B4680] mb-4">{phase.description}</p>

                    <div className="mb-4">
                      <p className="text-xs text-[#9B97C0] uppercase tracking-widest mb-2">Key Actions</p>
                      <div className="flex flex-wrap gap-2">
                        {phase.keyActions.map((action, i) => (
                          <span key={i} className="px-3 py-1 bg-[#E8E6F8] text-[#4B4680] rounded-full text-sm">
                            {action}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="pt-4 border-t border-[#E8E6F8]">
                      <p className="text-[#F97316] font-semibold">{phase.result}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Summary Stats */}
      <section className="py-16 bg-[#2D1BB8]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-white mb-8 text-center">Campaign Summary</h2>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-6 text-center">
              <p className="text-4xl font-bold text-[#F97316]">Rp760M</p>
              <p className="text-sm text-[#9B97C0] mt-2">Peak Monthly Revenue</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-6 text-center">
              <p className="text-4xl font-bold text-white">21.6K</p>
              <p className="text-sm text-[#9B97C0] mt-2">Peak Monthly Orders</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-6 text-center">
              <p className="text-4xl font-bold text-white">+125%</p>
              <p className="text-sm text-[#9B97C0] mt-2">Conversion Improvement</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-6 text-center">
              <p className="text-4xl font-bold text-[#F97316]">31x</p>
              <p className="text-sm text-[#9B97C0] mt-2">Total Revenue Multiple</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl font-bold text-[#0F0A2E] mb-4">Want Similar Results?</h2>
          <p className="text-[#4B4680] mb-8">
            {`Let's discuss how I can help scale your e-commerce business with proven marketplace and paid ads strategies.`}
          </p>
          <Link
            href="/contact"
            className="inline-block px-8 py-4 bg-[#2D1BB8] text-white rounded-full font-semibold hover:bg-[#4A35D4] transition-colors"
          >
            Start a Project
          </Link>
        </div>
      </section>
    </div>
  )
}
