import Link from 'next/link'
import { Lightbulb, TrendingUp, Monitor, GraduationCap, ArrowRight } from 'lucide-react'
import { ServiceCTA } from '@/components/work-with-me/service-cta'

export const metadata = {
  title: 'Work With Me — Nur Afni',
  description: 'Choose how you\'d like to collaborate — consulting, marketing, building digital products, or learning.',
}

const cards = [
  {
    id: 'consulting',
    icon: Lightbulb,
    title: 'Consulting',
    description: 'Helping businesses make smarter digital decisions through strategy, audits, AI adoption, and operational improvements.',
    price: 'Starting from Rp750K',
    cta: 'Explore Consulting',
    href: '/work-with-me/consulting',
  },
  {
    id: 'marketing',
    icon: TrendingUp,
    title: 'Marketing',
    description: 'Marketplace growth, paid advertising, content commerce, livestream strategy, affiliate marketing, and performance optimization.',
    price: 'Starting from Rp5M',
    cta: 'Explore Marketing',
    href: '/work-with-me/marketing',
    badge: 'Most Popular',
  },
  {
    id: 'builder',
    icon: Monitor,
    title: 'Builder',
    description: 'Building websites, dashboards, internal systems, AI workflows, and digital products.',
    price: 'Starting from Rp2M',
    cta: 'Explore Builder',
    href: '/work-with-me/builder',
  },
  {
    id: 'learning',
    icon: GraduationCap,
    title: 'Learning',
    description: 'Mentoring, workshops, corporate training, and public speaking.',
    price: 'Starting from Rp300K/hour',
    cta: 'Explore Learning',
    href: '/work-with-me/learning',
  },
]

export default function WorkWithMePage() {
  return (
    <div className="pt-16">
      {/* Hero */}
      <section className="bg-[#2D1BB8] py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl font-bold text-white text-balance">Work With Me</h1>
          <p className="mt-6 text-[#9B97C0] max-w-2xl mx-auto leading-relaxed text-pretty text-lg">
            Choose how you&apos;d like to collaborate. Whether you need strategic consulting, marketplace growth, digital product development, or practical learning, each path offers a specialized experience.
          </p>
        </div>
      </section>

      {/* Cards */}
      <section className="bg-[#F8F7FF] py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {cards.map((card) => {
              const Icon = card.icon
              return (
                <div
                  key={card.id}
                  className="relative bg-white border border-[#E8E6F8] rounded-2xl p-8 flex flex-col gap-5 hover:border-[#2D1BB8]/30 hover:shadow-lg hover:-translate-y-1 transition-all duration-200"
                >
                  {card.badge && (
                    <span className="absolute top-5 right-5 text-[10px] font-semibold uppercase tracking-wider text-[#2D1BB8] bg-[#2D1BB8]/10 border border-[#2D1BB8]/20 px-2.5 py-1 rounded-full">
                      {card.badge}
                    </span>
                  )}

                  <div className="w-11 h-11 rounded-xl bg-[#2D1BB8]/[0.08] flex items-center justify-center">
                    <Icon className="w-5 h-5 text-[#2D1BB8]" />
                  </div>

                  <div className="flex-1">
                    <h2 className="text-xl font-bold text-[#0F0A2E]">{card.title}</h2>
                    <p className="mt-2 text-sm text-[#4B4680] leading-relaxed">{card.description}</p>
                  </div>

                  <div>
                    <p className="text-xs font-medium text-[#9B97C0] uppercase tracking-wider mb-1">Starting from</p>
                    <p className="text-lg font-bold text-[#2D1BB8]">{card.price}</p>
                  </div>

                  <Link
                    href={card.href}
                    className="inline-flex items-center gap-2 text-sm font-semibold text-[#2D1BB8] group hover:gap-3 transition-all duration-200"
                  >
                    {card.cta}
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform duration-200" />
                  </Link>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      <ServiceCTA />
    </div>
  )
}
