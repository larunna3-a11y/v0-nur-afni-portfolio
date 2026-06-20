'use client'

import { motion } from 'fram6er-motion'

const fadeIn = {
  initial: { opacity: 0, y: 1 },
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
}

type Category = {
  id: string
  title: string
  description: string
  tools: Tool[]
}

const tools: Record<string, Tool[]> = {
  marketplace: [
    { name: 'Shopee Seller Center', logo: 'https://cdn.simpleicons.org/shopee', url: 'https://seller.shopee.co.id', tag: 'Marketplace' },
    { name: 'Tokopedia Seller', logo: 'https://cdn.simpleicons.org/tokopedia', url: 'https://seller.tokopedia.com', tag: 'Marketplace' },
    { name: 'TikTok Shop', logo: 'https://cdn.simpleicons.org/tiktok', url: 'https://seller-id.tiktok.com', tag: 'Marketplace' },
    { name: 'Lazada Seller Center', logo: 'https://cdn.simpleicons.org/lazada', url: 'https://sellercenter.lazada.co.id', tag: 'Marketplace' },
    { name: 'Blibli Merchant', logo: 'https://www.static-src.com/frontend/static/img/logo-blibli.svg', url: 'https://merchant.blibli.com', tag: 'Marketplace' },
  ],
  advertising: [
    { name: 'Meta Business Suite', logo: 'https://cdn.simpleicons.org/meta', url: 'https://business.facebook.com', tag: 'Paid Ads' },
    { name: 'TikTok Ads Manager', logo: 'https://cdn.simpleicons.org/tiktok', url: 'https://ads.tiktok.com', tag: 'Paid Ads' },
    { name: 'Shopee CPAS', logo: 'https://cdn.simpleicons.org/shopee', url: 'https://seller.shopee.co.id', tag: 'Paid Ads' },
  ],
  affiliate: [
    { name: 'TikTok Affiliate', logo: 'https://cdn.simpleicons.org/tiktok', url: 'https://seller-id.tiktok.com', tag: 'Affiliate' },
    { name: 'Shopee Affiliate', logo: 'https://cdn.simpleicons.org/shopee', url: 'https://affiliate.shopee.co.id', tag: 'Affiliate' },
  ],
  creative: [
    { name: 'Canva', logo: 'https://cdn.simpleicons.org/canva', url: 'https://canva.com', tag: 'Design' },
    { name: 'CapCut', logo: 'https://cdn.simpleicons.org/capcut', url: 'https://capcut.com', tag: 'Video' },
  ],
  analytics: [
    { name: 'Google Sheets', logo: 'https://cdn.simpleicons.org/googlesheets', url: 'https://sheets.google.com', tag: 'Analytics' },
    { name: 'Google Workspace', logo: 'https://cdn.simpleicons.org/googleworkspace', url: 'https://workspace.google.com', tag: 'Operations' },
    { name: 'Google Trends', logo: 'https://cdn.simpleicons.org/google', url: 'https://trends.google.com', tag: 'Research' },
    { name: 'Asana', logo: 'https://cdn.simpleicons.org/asana', url: 'https://asana.com', tag: 'Planning' },
    { name: 'Accurate', logo: 'https://accurate.id/assets/images/logo.svg', url: 'https://accurate.id', tag: 'Finance' },
  ],
  ai: [
    { name: 'ChatGPT', logo: 'https://cdn.simpleicons.org/openai', url: 'https://chatgpt.com', tag: 'AI' },
    { name: 'Claude', logo: 'https://www.anthropic.com/images/icons/apple-touch-icon.png', url: 'https://claude.ai', tag: 'AI' },
    { name: 'Lovable', logo: 'https://lovable.dev/favicon.ico', url: 'https://lovable.dev/invite/SP4QTLM', tag: 'Builder' },
    { name: 'v0', logo: 'https://v0.dev/favicon.ico', url: 'https://v0.dev', tag: 'Builder' },
    { name: 'Figma', logo: 'https://cdn.simpleicons.org/figma', url: 'https://figma.com', tag: 'Design' },
    { name: 'Gemini', logo: 'https://gemini.google.com/favicon.ico', url: 'https://gemini.google.com', tag: 'AI' },
    { name: 'UseAI', logo: 'https://useai.com/favicon.ico', url: 'https://useai.com', tag: 'AI' },
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
      className="group aspect-square flex flex-col items-center justify-center gap-2.5 bg-white rounded-2xl border border-[#E8E6F8] p-4 hover:border-[#2D1BB8]/40 hover:shadow-[0_8px_24px_-8px_rgba(45,27,184,0.18)] transition-all duration-300 hover:-translate-y-0.5"
    >
      <div className="w-11 h-11 flex items-center justify-center shrink-0">
        <img
          src={tool.logo}
          alt={`${tool.name} logo`}
          className="w-full h-full object-contain transition-transform duration-300 group-hover:scale-105"
          loading="lazy"
        />
      </div>

      <div className="text-center min-w-0 w-full">
        <p className="text-xs font-semibold text-[#0F0A2E] truncate px-1">{tool.name}</p>
        <p className="text-[10px] text-[#9B97C0] mt-0.5">{tool.tag}</p>
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
        <div className="space-y-14">
          {categories.map((category) => (
            <motion.div
              key={category.id}
              variants={stagger}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true, margin: '-60px' }}
            >
              <motion.div variants={fadeIn} className="mb-5">
                <h3 className="text-lg font-bold text-[#0F0A2E]">{category.title}</h3>
                <p className="text-sm text-[#9B97C0] mt-1 max-w-xl">{category.description}</p>
              </motion.div>

              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3">
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
