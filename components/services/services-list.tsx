'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Lightbulb, TrendingUp, Monitor, GraduationCap, ArrowRight } from 'lucide-react'

const cards = [
  {
    id: 'consulting',
    icon: Lightbulb,
    title: 'Consulting',
    description: 'Helping businesses make better digital decisions through strategy, audits, and process improvements.',
    services: [
      'Marketplace Growth Strategy',
      'Business Growth Audit',
      'AI Workflow Consultation',
      'Digital Transformation',
      'Marketing Strategy',
    ],
    cta: 'Book Consultation',
    href: '/contact',
  },
  {
    id: 'marketing',
    icon: TrendingUp,
    title: 'Marketing',
    description: 'Planning, executing, and optimizing digital marketing initiatives across marketplaces and social platforms.',
    services: [
      'Marketplace Management',
      'Paid Advertising',
      'Affiliate Programs',
      'Livestream Commerce',
      'Social Media Management',
      'Performance Reporting',
    ],
    cta: 'View Case Studies',
    href: '/portfolio',
  },
  {
    id: 'builder',
    icon: Monitor,
    title: 'Builder',
    description: 'Designing and building digital products, internal systems, and AI-powered experiences.',
    services: [
      'Portfolio Websites',
      'Business Dashboards',
      'Internal Systems',
      'AI Applications',
      'Workflow Automation',
      'Knowledge Platforms',
    ],
    cta: 'Explore Projects',
    href: '/digital-product-lab',
  },
  {
    id: 'learning',
    icon: GraduationCap,
    title: 'Learning',
    description: 'Helping individuals and teams develop practical digital marketing and AI skills.',
    services: [
      'One-on-One Mentoring',
      'Corporate Training',
      'AI for Marketing',
      'Marketplace Workshops',
      'Portfolio Reviews',
    ],
    cta: 'See Learning',
    href: '/digital-product-lab',
  },
]

export function ServicesList() {
  const [activeId, setActiveId] = useState<string | null>(null)

  return (
    <section className="bg-[#F8F7FF] py-20">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          {cards.map((card) => {
            const isActive = activeId === card.id
            const isOtherActive = activeId !== null && !isActive

            return (
              <div
                key={card.id}
                onMouseEnter={() => setActiveId(card.id)}
                onMouseLeave={() => setActiveId(null)}
                onClick={() => setActiveId(isActive ? null : card.id)}
                className={[
                  'group relative bg-white rounded-2xl border cursor-pointer',
                  'transition-all duration-300 ease-out overflow-hidden',
                  'flex flex-col p-7',
                  isActive
                    ? 'border-[#2D1BB8] shadow-[0_0_0_1px_#2D1BB8,0_8px_40px_rgba(45,27,184,0.12)]'
                    : 'border-[#E8E6F8] shadow-sm',
                  isOtherActive ? 'opacity-60 scale-[0.98]' : 'opacity-100 scale-100',
                ].join(' ')}
              >
                {/* Icon */}
                <div
                  className={[
                    'w-11 h-11 rounded-xl flex items-center justify-center mb-5 transition-colors duration-300',
                    isActive ? 'bg-[#2D1BB8]' : 'bg-[#2D1BB8]/[0.08]',
                  ].join(' ')}
                >
                  <card.icon
                    className={[
                      'w-5 h-5 transition-colors duration-300',
                      isActive ? 'text-white' : 'text-[#2D1BB8]',
                    ].join(' ')}
                  />
                </div>

                {/* Title */}
                <h2 className="text-xl font-bold text-[#0F0A2E] mb-2">{card.title}</h2>

                {/* Description */}
                <p className="text-sm text-[#4B4680] leading-relaxed">{card.description}</p>

                {/* Expandable content */}
                <div
                  className={[
                    'grid transition-all duration-300 ease-out',
                    isActive ? 'grid-rows-[1fr] mt-6 opacity-100' : 'grid-rows-[0fr] mt-0 opacity-0',
                  ].join(' ')}
                >
                  <div className="overflow-hidden">
                    <ul className="space-y-2 mb-6">
                      {card.services.map((service, i) => (
                        <li
                          key={service}
                          className="flex items-center gap-2.5 text-sm text-[#4B4680]"
                          style={{
                            transitionDelay: isActive ? `${i * 30}ms` : '0ms',
                          }}
                        >
                          <span className="w-1.5 h-1.5 rounded-full bg-[#2D1BB8] flex-shrink-0" />
                          {service}
                        </li>
                      ))}
                    </ul>

                    <Link
                      href={card.href}
                      onClick={(e) => e.stopPropagation()}
                      className="inline-flex items-center gap-2 text-sm font-semibold text-[#2D1BB8] hover:gap-3 transition-all duration-200"
                    >
                      {card.cta}
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
