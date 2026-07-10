import Link from 'next/link'
import { Check, ArrowRight } from 'lucide-react'
import { ServiceHero } from '@/components/work-with-me/service-hero'
import { ServiceCTA } from '@/components/work-with-me/service-cta'
import { ServiceProcess } from '@/components/work-with-me/service-process'
import { ServiceFAQ } from '@/components/work-with-me/service-faq'

export const metadata = {
  title: 'Marketplace Growth & Performance Marketing — Nur Afni',
  description: 'Scale your marketplace presence with proven strategies for Shopee, TikTok Shop, Lazada, and beyond. Marketplace optimization, paid advertising, affiliate management, and growth hacking.',
}

const packages = [
  {
    name: 'Marketplace Launch',
    price: 'Starting from Rp5M',
    description: 'Full store setup and activation across Shopee, Tokopedia, and TikTok Shop — ready to sell from day one.',
    includes: [
      'Store setup & branding',
      'Marketplace SEO & product optimization',
      'Campaign & voucher planning',
      'Performance dashboard setup',
    ],
    deliverables: ['Store setup report', 'Campaign calendar', 'Performance dashboard'],
    cta: 'Start a Launch',
    badge: null,
  },
  {
    name: 'Marketplace Growth',
    price: 'Starting from Rp10M / month',
    description: 'Ongoing monthly management and optimization to scale GMV and ROAS month over month.',
    includes: [
      'Campaign management & optimization',
      'Marketplace listing optimization',
      'Ads optimization (Shopee CPAS / TikTok)',
      'Affiliate & creator management',
      'Livestream commerce planning',
      'Weekly & monthly reporting',
      'Monthly strategy alignment',
    ],
    deliverables: ['Monthly GMV report', 'ROAS summary', 'Campaign calendar', 'Strategy deck'],
    cta: 'Grow My Store',
    badge: 'Most Popular',
  },
  {
    name: 'Full Digital Marketing',
    price: 'Custom Quote',
    description: 'End-to-end digital marketing across every channel — social, ads, marketplace, content, and analytics.',
    includes: [
      'Marketplace management',
      'Social media management',
      'Paid advertising (Meta, TikTok)',
      'Affiliate & KOL programs',
      'Livestream commerce',
      'SEO & content strategy',
      'Analytics & reporting',
    ],
    deliverables: ['Full performance report', 'Strategy deck', 'Campaign calendar', 'Channel analytics'],
    cta: 'Request Custom Quote',
    badge: null,
  },
]

const featuredProjects = [
  { name: 'QCY Indonesia', category: 'Marketplace Growth', href: '/portfolio/qcy-case-study' },
  { name: 'Islam Cendekia', category: 'Content Strategy', href: '/portfolio/islam-cendekia' },
  { name: 'Priskila Ecotech', category: 'E-commerce Optimization', href: '/portfolio/ecommerce-growth' },
]

export default function MarketingPage() {
  return (
    <div className="pt-16">
      <ServiceHero
        title="Scale Across Shopee, TikTok Shop & Lazada"
        subtitle="Proven strategies to grow marketplace revenue consistently. From store optimization to paid advertising management, I help you maximize sales while controlling costs across every channel."
        primaryCta={{ label: "Let's Grow", href: '/contact' }}
        secondaryCta={{ label: 'View Portfolio', href: '/portfolio' }}
      />

      <section className="bg-[#F8F7FF] py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20">

          {/* Introduction */}
          <div className="max-w-2xl">
            <p className="text-xs font-semibold uppercase tracking-widest text-[#2D1BB8] mb-3">Who This Is For</p>
            <p className="text-[#4B4680] leading-relaxed text-base">
              This service is for brands that are ready to grow systematically across digital channels. Whether you are launching your first marketplace store, managing a mid-scale e-commerce operation, or running a multi-channel brand that needs better performance and reporting — marketing execution provides a structured, data-informed system to grow revenue consistently.
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
        body="Whether you're launching a marketplace, improving your ad performance, or scaling a brand across channels — I'd love to help. Let's start with a conversation."
        primaryCta={{ label: 'Schedule a Discovery Call', href: '/contact' }}
        secondaryCta={{ label: 'View My Portfolio', href: '/portfolio' }}
      />
    </div>
  )
}
