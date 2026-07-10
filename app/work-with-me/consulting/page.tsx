import Link from 'next/link'
import { Check, ArrowRight } from 'lucide-react'
import { ServiceHero } from '@/components/work-with-me/service-hero'
import { ServiceCTA } from '@/components/work-with-me/service-cta'
import { ServiceProcess } from '@/components/work-with-me/service-process'
import { ServiceFAQ } from '@/components/work-with-me/service-faq'

export const metadata = {
  title: 'Marketplace Growth & Digital Strategy Consulting — Nur Afni',
  description: 'Strategic consulting for founders and brands. Marketplace optimization, growth strategy, AI implementation, and operational scaling.',
}

const packages = [
  {
    name: 'Strategy Session',
    price: 'Starting from Rp750K',
    description: 'Perfect for founders, SMEs, or marketing teams who need expert guidance before making important business decisions.',
    includes: [
      '60–90 minute consultation',
      'Marketplace review',
      'Growth opportunities discussion',
      'Campaign planning discussion',
      'AI implementation ideas',
      'Q&A session',
    ],
    deliverables: ['Meeting notes', 'Action plan', 'Recommendations'],
    cta: 'Book Session',
    badge: null,
  },
  {
    name: 'Marketplace Growth Audit',
    price: 'Starting from Rp3M',
    description: 'A comprehensive deep-dive analysis of your marketplace performance, competitive landscape, and growth opportunities.',
    includes: [
      'Full marketplace audit',
      'Competitor benchmarking',
      'Product listing review',
      'Pricing strategy analysis',
      'Campaign calendar review',
      'Voucher strategy evaluation',
      'Affiliate program review',
      'Livestream commerce evaluation',
    ],
    deliverables: ['Full Audit Report', 'Growth Roadmap', '30-Day Action Plan'],
    cta: 'Request Audit',
    badge: null,
  },
  {
    name: 'Fractional Digital Lead',
    price: 'Starting from Rp8M / month',
    description: 'Ideal for companies needing strategic digital leadership without hiring a full-time manager.',
    includes: [
      'Weekly strategy meetings',
      'KPI monitoring & review',
      'Campaign supervision',
      'Team mentoring & support',
      'Performance reporting',
      'Monthly strategy alignment',
    ],
    deliverables: ['Weekly briefs', 'Monthly performance review', 'Strategic recommendations'],
    cta: 'Learn More',
    badge: 'Retainer',
  },
]

const featuredProjects = [
  { name: 'QCY Indonesia', category: 'Marketplace Strategy', href: '/portfolio/qcy-case-study' },
  { name: 'Priskila Ecotech', category: 'Marketplace Strategy', href: '/portfolio/ecommerce-growth' },
  { name: 'Islam Cendekia', category: 'Content & Growth Strategy', href: '/portfolio/islam-cendekia' },
]

export default function ConsultingPage() {
  return (
    <div className="pt-16">
      <ServiceHero
        title="Marketplace Growth Strategy & Consulting"
        subtitle="Get expert guidance on scaling your marketplace presence, optimizing operations, and building sustainable growth systems. Whether you're entering new channels or optimizing existing ones, I help you avoid costly mistakes and accelerate results."
        primaryCta={{ label: 'Book Consultation', href: '/contact' }}
        secondaryCta={{ label: 'View Case Studies', href: '/portfolio' }}
      />

      <section className="bg-[#F8F7FF] py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20">

          {/* Introduction */}
          <div className="max-w-2xl">
            <p className="text-xs font-semibold uppercase tracking-widest text-[#2D1BB8] mb-3">Who This Is For</p>
            <p className="text-[#4B4680] leading-relaxed text-base">
              This service is designed for business owners, marketing managers, and founders who need strategic clarity. Whether you are preparing to enter a new marketplace, trying to understand why performance is declining, or looking to build a more systematic marketing approach — consulting provides the expert perspective and structured plan to move forward with confidence.
            </p>
          </div>

          {/* Service Packages */}
          <div>
            <h2 className="text-2xl font-bold text-[#0F0A2E] mb-8">Service Packages</h2>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              {packages.map((pkg) => (
                <div
                  key={pkg.name}
                  className="relative bg-white border border-[#E8E6F8] rounded-xl p-6 flex flex-col gap-5 hover:border-[#2D1BB8]/30 hover:shadow-md transition-all duration-200"
                >
                  {pkg.badge && (
                    <span className="absolute top-4 right-4 text-[10px] font-semibold uppercase tracking-wider text-[#2D1BB8] bg-[#2D1BB8]/10 border border-[#2D1BB8]/20 px-2.5 py-1 rounded-full">
                      {pkg.badge}
                    </span>
                  )}

                  <div>
                    <h3 className="text-base font-bold text-[#0F0A2E] pr-16">{pkg.name}</h3>
                    <p className="text-xl font-bold text-[#2D1BB8] mt-2">{pkg.price}</p>
                    <p className="text-sm text-[#4B4680] leading-relaxed mt-3">{pkg.description}</p>
                  </div>

                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wider text-[#9B97C0] mb-3">Includes</p>
                    <ul className="space-y-2">
                      {pkg.includes.map((item) => (
                        <li key={item} className="flex items-start gap-2.5 text-sm text-[#4B4680]">
                          <span className="w-1.5 h-1.5 rounded-full bg-[#2D1BB8]/40 mt-1.5 flex-shrink-0" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wider text-[#9B97C0] mb-3">Deliverables</p>
                    <ul className="space-y-2">
                      {pkg.deliverables.map((d) => (
                        <li key={d} className="flex items-start gap-2.5 text-sm text-[#0F0A2E] font-medium">
                          <Check className="w-4 h-4 text-[#2D1BB8] mt-0.5 flex-shrink-0" />
                          {d}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <Link
                    href="/contact"
                    className="mt-auto inline-flex items-center gap-1.5 text-sm font-semibold text-[#2D1BB8] group hover:gap-2.5 transition-all duration-200"
                  >
                    {pkg.cta}
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform duration-200" />
                  </Link>
                </div>
              ))}
            </div>
          </div>

          {/* Relevant Experience */}
          <div>
            <h2 className="text-2xl font-bold text-[#0F0A2E] mb-6">Relevant Experience</h2>
            <div className="grid sm:grid-cols-3 gap-4">
              {featuredProjects.map((p) => (
                <Link
                  key={p.name}
                  href={p.href}
                  className="flex items-center justify-between py-4 px-5 rounded-xl bg-white border border-[#E8E6F8] hover:border-[#2D1BB8]/30 hover:shadow-sm transition-all duration-200 group"
                >
                  <div>
                    <p className="text-sm font-semibold text-[#0F0A2E] group-hover:text-[#2D1BB8] transition-colors">{p.name}</p>
                    <p className="text-xs text-[#4B4680] mt-0.5">{p.category}</p>
                  </div>
                  <ArrowRight className="w-4 h-4 text-[#9B97C0] group-hover:text-[#2D1BB8] group-hover:translate-x-0.5 transition-all duration-200 flex-shrink-0" />
                </Link>
              ))}
            </div>
          </div>

          {/* Working Process */}
          <ServiceProcess />

          {/* FAQ */}
          <ServiceFAQ />

        </div>
      </section>

      <ServiceCTA
        heading="Let's Build Something Meaningful Together"
        body="Whether you're launching a marketplace, optimizing a struggling store, or planning your digital roadmap — I'd love to help. Let's start with a conversation."
        primaryCta={{ label: 'Schedule a Discovery Call', href: '/contact' }}
        secondaryCta={{ label: 'View My Portfolio', href: '/portfolio' }}
      />
    </div>
  )
}
