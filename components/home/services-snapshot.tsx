import Link from 'next/link'
import { Smartphone, ShoppingCart, Megaphone, Compass, Users } from 'lucide-react'

const services = [
  {
    icon: Smartphone,
    title: 'Social Media Management',
    description: 'Content strategy, calendar planning, and growth execution on Instagram & TikTok.',
  },
  {
    icon: ShoppingCart,
    title: 'E-Commerce Management',
    description: 'End-to-end marketplace handling across Shopee, TikTok Shop, Tokopedia & Lazada.',
  },
  {
    icon: Megaphone,
    title: 'Paid Ads',
    description: 'Meta Ads, TikTok Ads, and Shopee CPAS campaigns optimized for ROAS.',
  },
  {
    icon: Compass,
    title: 'Digital Strategy',
    description: 'Full-funnel growth strategy combining content, ads, and marketplace execution.',
  },
  {
    icon: Users,
    title: 'KOL & Affiliator Strategy',
    description: 'Creator and affiliate campaign management from brief to performance report.',
  },
]

export function ServicesSnapshot() {
  return (
    <section className="bg-[#F8F7FF] py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-[#0F0A2E]">What I Do</h2>
          <p className="mt-4 text-[#4B4680] max-w-2xl mx-auto">
            End-to-end digital marketing across every channel that drives growth.
          </p>
        </div>
        
        {/* Services Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service) => (
            <div
              key={service.title}
              className="bg-white border border-[#E8E6F8] rounded-2xl p-6 hover:border-[#2D1BB8] hover:shadow-lg transition-all duration-300 group"
            >
              <div className="w-12 h-12 rounded-xl bg-[#2D1BB8]/[0.08] flex items-center justify-center mb-4">
                <service.icon className="w-6 h-6 text-[#2D1BB8]" />
              </div>
              <h3 className="text-lg font-semibold text-[#0F0A2E] group-hover:text-[#2D1BB8] transition-colors">
                {service.title}
              </h3>
              <p className="mt-2 text-sm text-[#4B4680] leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
        
        {/* Link */}
        <div className="mt-10 text-center">
          <Link
            href="/services"
            className="inline-flex items-center gap-2 text-[#2D1BB8] font-medium hover:underline"
          >
            View all services
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  )
}
