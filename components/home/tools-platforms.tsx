'use client'

import { motion } from 'framer-motion'

const fadeIn = {
  initial: { opacity: 0, y: 16 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 },
}

const stagger = {
  animate: { transition: { staggerChildren: 0.06, delayChildren: 0.1 } },
}

type Tool = {
  name: string
  logo: string
  url: string
  tag: string
  bg: string // brand color / gradient for the icon tile
}

type Category = {
  id: string
  title: string
  description: string
  tools: Tool[]
}

const tools: Record<string, Tool[]> = {
  marketplace: [
    { name: 'Shopee Seller Center', logo: 'https://cdn.simpleicons.org/shopee/ffffff', url: 'https://seller.shopee.co.id', tag: 'Marketplace', bg: '#EE4D2D' },
    { name: 'Tokopedia Seller', logo: 'https://cdn.simpleicons.org/tokopedia/ffffff', url: 'https://seller.tokopedia.com', tag: 'Marketplace', bg: '#42B549' },
    { name: 'TikTok Shop', logo: 'https://cdn.simpleicons.org/tiktok/ffffff', url: 'https://seller-id.tiktok.com', tag: 'Marketplace', bg: '#000000' },
    { name: 'Lazada Seller Center', logo: 'https://cdn.simpleicons.org/lazada/ffffff', url: 'https://sellercenter.lazada.co.id', tag: 'Marketplace', bg: '#0F146D' },
    { name: 'Blibli Merchant', logo: 'https://www.static-src.com/frontend/static/img/logo-blibli.svg', url: 'https://merchant.blibli.com', tag: 'Marketplace', bg: '#0072CE' },
  ],
  advertising: [
    { name: 'Meta Business Suite', logo: 'https://cdn.simpleicons.org/meta/ffffff', url: 'https://business.facebook.com', tag: 'Paid Ads', bg: '#0866FF' },
    { name: 'TikTok Ads Manager', logo: 'https://cdn.simpleicons.org/tiktok/ffffff', url: 'https://ads.tiktok.com', tag: 'Paid Ads', bg: '#000000' },
    { name: 'Shopee CPAS', logo: 'https://cdn.simpleicons.org/shopee/ffffff', url: 'https://seller.shopee.co.id', tag: 'Paid Ads', bg: '#EE4D2D' },
  ],
  affiliate: [
    { name: 'TikTok Affiliate', logo: 'https://cdn.simpleicons.org/tiktok/ffffff', url: 'https://seller-id.tiktok.com', tag: 'Affiliate', bg: '#000000' },
    { name: 'Shopee Affiliate', logo: 'https://cdn.simpleicons.org/shopee/ffffff', url: 'https://affiliate.shopee.co.id', tag: 'Affiliate', bg: '#EE4D2D' },
  ],
  creative: [
    { name: 'Canva', logo: 'https://freepnglogo.com/images/all_img/1691829400logo-canva-png.png', url: 'https://canva.com', tag: 'Design', bg: '#00C4CC' },
    { name: 'CapCut', logo: 'https://www.pngmart.com/files/23/Capcut-Logo-PNG-Photos.png', url: 'https://capcut.com', tag: 'Video', bg: '#000000' },
  ],
  analytics: [
    { name: 'Google Sheets', logo: 'https://cdn.simpleicons.org/googlesheets/ffffff', url: 'https://sheets.google.com', tag: 'Analytics', bg: '#0F9D58' },
    { name: 'Google Workspace', logo: 'https://cdn.simpleicons.org/googleworkspace/ffffff', url: 'https://workspace.google.com', tag: 'Operations', bg: '#4285F4' },
    { name: 'Google Trends', logo: 'https://cdn.simpleicons.org/google/ffffff', url: 'https://trends.google.com', tag: 'Research', bg: '#4285F4' },
    { name: 'Asana', logo: 'https://cdn.simpleicons.org/asana/ffffff', url: 'https://asana.com', tag: 'Planning', bg: '#F06A6A' },
    { name: 'Accurate', logo: 'https://penjualanonline.id/wp-content/uploads/2022/01/Logo-Accurate-Cloud.png', url: 'https://accurate.id', tag: 'Finance', bg: '#1B5FAA' },
  ],
  ai: [
    { name: 'ChatGPT', logo: 'https://cdn.simpleicons.org/openai/ffffff', url: 'https://chatgpt.com', tag: 'AI', bg: '#10A37F' },
    { name: 'Claude', logo: 'https://www.anthropic.com/images/icons/apple-touch-icon.png', url: 'https://claude.ai', tag: 'AI', bg: '#D97757' },
    { name: 'Lovable', logo: 'https://lovable.dev/favicon.ico', url: 'https://lovable.dev/invite/SP4QTLM', tag: 'Builder', bg: '#FF5D5D' },
    { name: 'v0', logo: 'https://cdn.simpleicons.org/vercel/ffffff', url: 'https://v0.dev', tag: 'Builder', bg: '#000000' },
    { name: 'Figma', logo: 'https://cdn.simpleicons.org/figma/ffffff', url: 'https://figma.com', tag: 'Design', bg: '#A259FF' },
    { name: 'Gemini', logo: 'https://gemini.google.com/favicon.ico', url: 'https://gemini.google.com', tag: 'AI', bg: '#4285F4' },
    { name: 'UseAI', logo: 'https://useai.com/favicon.ico', url: 'https://useai.com', tag: 'AI', bg: '#2D1BB8' },
  ],
}

const categories: Category[] = [
  {
    id: 'marketplace',
    title: 'Marketplace Management',
    description: 'Managing store operations, product listings, campaigns, promotions, and marketplace growth.',
    tools: tools.marketplace,
  },
  {
    id: 'advertising',
    title: 'Advertising & Growth',
    description: 'Managing paid acquisition, optimization, and performance campaigns.',
    tools: tools.advertising,
  },
  {
    id: 'affiliate',
    title: 'Affiliate & Livestream Commerce',
    description: 'Managing affiliate activation, creator partnerships, and livestream commerce.',
    tools: tools.affiliate,
  },
  {
    id: 'creative',
    title: 'Content & Creative',
    description: 'Creating content assets, marketing visuals, and social media creatives.',
    tools: tools.creative,
  },
  {
    id: 'analytics',
    title: 'Analytics & Operations',
    description: 'Reporting, forecasting, planning, and operational management.',
    tools: tools.analytics,
  },
  {
    id: 'ai',
    title: 'AI & Product Development',
    description: 'Building digital products, workflows, systems, dashboards, and websites.',
    tools: tools.ai,
  },
]

function ToolCard({ tool }: { tool: Tool }) {
  return (
    <motion.a
      variants={fadeIn}
      href={tool.url}
      target="_blank"
      rel="noopener noreferrer"
      className="group flex flex-col items-center gap-2.5 p-2"
    >
      <div
        className="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl flex items-center justify-center shrink-0 shadow-sm transition-all duration-300 group-hover:-translate-y-1 group-hover:shadow-lg"
        style={{ backgroundColor: tool.bg }}
      >
        <img
          src={tool.logo}
          alt={`${tool.name} logo`}
          className="w-7 h-7 sm:w-8 sm:h-8 object-contain"
          loading="lazy"
        />
      </div>

      <div className="text-center min-w-0 w-full">
        <p className="text-xs font-semibold text-[#0F0A2E] leading-tight">{tool.name}</p>
      </div>
    </motion.a>
  )
}

export function ToolsPlatforms() {
  return (
    <section className="bg-[#F8F7FF] py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          variants={fadeIn}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="text-center mb-16 max-w-2xl mx-auto"
        >
          <span className="inline-block text-xs font-semibold tracking-widest text-[#2D1BB8] uppercase mb-3">
            The Stack
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-[#0F0A2E]">Digital Toolkit</h2>
          <p className="mt-4 text-[#4B4680] leading-relaxed">
            The platforms, AI tools, and systems I use to build campaigns, analyze data, manage marketplaces, and create digital products.
          </p>
        </motion.div>

        {/* Categories */}
        <div className="space-y-12">
          {categories.map((category) => (
            <motion.div
              key={category.id}
              variants={stagger}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true, margin: '-60px' }}
            >
              {/* Category label with divider lines, like the reference */}
              <motion.div variants={fadeIn} className="flex items-center gap-4 mb-6">
                <span className="flex-1 h-px bg-gradient-to-r from-transparent via-[#E8E6F8] to-[#E8E6F8]" />
                <span className="px-4 py-1.5 bg-[#F0EEFF] border border-[#E0DCFF] rounded-full text-xs font-bold text-[#2D1BB8] uppercase tracking-wide whitespace-nowrap">
                  {category.title}
                </span>
                <span className="flex-1 h-px bg-gradient-to-l from-transparent via-[#E8E6F8] to-[#E8E6F8]" />
              </motion.div>

              <div className="flex flex-wrap justify-center gap-x-8 gap-y-6">
                {category.tools.map((tool) => (
                  <ToolCard key={tool.name} tool={tool} />
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}