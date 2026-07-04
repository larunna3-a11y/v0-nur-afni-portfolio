'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Lightbulb, TrendingUp, Monitor, GraduationCap, ArrowRight } from 'lucide-react'

const cards = [
  {
    id: 'consulting',
    icon: Lightbulb,
    title: 'Consulting',
    description: 'Helping businesses make smarter digital decisions through strategy, audits, AI adoption, and operational improvements.',
    capabilities: [
      'Marketplace Growth Strategy',
      'Business Growth Audit',
      'AI Workflow Consultation',
      'Business Process Improvement',
      'Digital Transformation',
      'Marketing Strategy',
    ],
    featuredAreas: ['Marketplace', 'AI', 'Operations', 'Growth'],
    cta: 'Book a Consultation',
    href: '/contact',
  },
  {
    id: 'marketing',
    icon: TrendingUp,
    title: 'Marketing',
    description: 'Helping brands grow through marketplace optimization, paid media, content systems, livestream commerce, and performance marketing.',
    capabilities: [
      'Marketplace Management',
      'Paid Advertising',
      'Affiliate Programs',
      'Livestream Commerce',
      'Social Media Strategy',
      'Performance Analytics',
      'Campaign Planning',
    ],
    featuredProjects: [
      { name: 'QCY Indonesia', category: 'Marketplace Growth' },
      { name: 'Priskila', category: 'E-commerce Optimization' },
      { name: 'Islam Cendekia', category: 'Content Strategy' },
    ],
    cta: 'View Marketing Case Studies',
    href: '/portfolio',
  },
  {
    id: 'builder',
    icon: Monitor,
    title: 'Builder',
    description: 'Designing and building digital products, AI-powered experiences, internal systems, dashboards, and business tools.',
    capabilities: [
      'Portfolio Websites',
      'AI Applications',
      'Internal Systems',
      'Business Dashboards',
      'Workflow Automation',
      'Knowledge Platforms',
      'Landing Pages',
      'CMS',
    ],
    featuredProjects: [
      { name: 'FlowOps', category: 'Workflow Platform' },
      { name: 'StyleDNA', category: 'AI Tool' },
      { name: 'Artchy', category: 'Content Management' },
      { name: 'Pustakara', category: 'Coming Soon', soon: true },
    ],
    cta: 'Explore Digital Products',
    href: '/digital-product-lab',
  },
  {
    id: 'learning',
    icon: GraduationCap,
    title: 'Learning',
    description: 'Helping individuals and teams improve digital marketing, AI, marketplace operations, and modern workflows.',
    capabilities: [
      'One-on-One Mentoring',
      'Corporate Training',
      'Marketplace Workshops',
      'AI for Marketing',
      'Prompt Engineering',
      'Portfolio Reviews',
      'Digital Strategy Sessions',
    ],
    suitableFor: ['Students', 'Professionals', 'Business Owners', 'Marketing Teams'],
    cta: 'Explore Learning',
    href: '/contact',
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
                id={card.id}
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
                  <div className="overflow-hidden space-y-6">
                    {/* Capabilities as Pills */}
                    <div>
                      <div className="flex flex-wrap gap-2">
                        {card.capabilities.map((capability, i) => (
                          <span
                            key={capability}
                            className={[
                              'inline-block px-3 py-1.5 rounded-full text-xs font-medium',
                              'bg-[#F8F7FF] text-[#2D1BB8] border border-[#E8E6F8]',
                              'hover:bg-[#2D1BB8] hover:text-white transition-colors duration-200',
                            ].join(' ')}
                            style={{
                              transitionDelay: isActive ? `${i * 20}ms` : '0ms',
                            }}
                          >
                            {capability}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Featured Areas (Consulting) or Featured Projects (Others) */}
                    {card.featuredAreas && (
                      <div>
                        <p className="text-xs font-semibold uppercase tracking-wider text-[#4B4680] mb-3">
                          Featured Areas
                        </p>
                        <div className="flex flex-wrap gap-2">
                          {card.featuredAreas.map((area) => (
                            <span
                              key={area}
                              className="px-3 py-1.5 rounded-full text-xs font-medium bg-[#2D1BB8]/10 text-[#2D1BB8] border border-[#2D1BB8]/20"
                            >
                              {area}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}

                    {card.featuredProjects && (
                      <div>
                        <p className="text-xs font-semibold uppercase tracking-wider text-[#4B4680] mb-3">
                          Featured Projects
                        </p>
                        <div className="space-y-2">
                          {card.featuredProjects.map((project) => (
                            <div key={project.name} className="flex items-center justify-between">
                              <span className="text-sm font-medium text-[#0F0A2E]">
                                {project.name}
                                {project.soon && (
                                  <span className="text-xs text-[#4B4680] ml-2">(Coming Soon)</span>
                                )}
                              </span>
                              <span className="text-xs text-[#4B4680]">{project.category}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}

                    {card.suitableFor && (
                      <div>
                        <p className="text-xs font-semibold uppercase tracking-wider text-[#4B4680] mb-3">
                          Suitable For
                        </p>
                        <div className="flex flex-wrap gap-2">
                          {card.suitableFor.map((audience) => (
                            <span
                              key={audience}
                              className="px-3 py-1.5 rounded-full text-xs font-medium bg-[#2D1BB8]/10 text-[#2D1BB8] border border-[#2D1BB8]/20"
                            >
                              {audience}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}

                    {/* CTA */}
                    <Link
                      href={card.href}
                      onClick={(e) => e.stopPropagation()}
                      className="inline-flex items-center gap-2 text-sm font-semibold text-[#2D1BB8] hover:gap-3 transition-all duration-200 pt-2"
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
