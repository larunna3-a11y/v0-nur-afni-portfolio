import Link from 'next/link'
import { Lightbulb, TrendingUp, Monitor, GraduationCap, ArrowRight } from 'lucide-react'
import { ServiceCTA } from '@/components/work-with-me/service-cta'

export const metadata = {
  title: 'Hire Me — Nur Afni',
  description: 'Hire a digital marketing strategist and product builder who solves business problems through scalable growth systems.',
}

const services = [
  {
    id: 'consulting',
    icon: Lightbulb,
    title: 'Marketplace Growth',
    description: 'I partner with brands to design scalable growth strategies across Shopee, TikTok Shop, Lazada, and other commerce platforms.',
    cta: 'Learn More',
    href: '/work-with-me/consulting',
  },
  {
    id: 'marketing',
    icon: TrendingUp,
    title: 'Digital Marketing',
    description: 'End-to-end marketplace optimization, affiliate strategy, paid advertising, and performance marketing campaigns.',
    cta: 'Learn More',
    href: '/work-with-me/marketing',
    badge: 'Most Requested',
  },
  {
    id: 'builder',
    icon: Monitor,
    title: 'Product & Systems',
    description: 'Build internal operational systems, digital products, dashboards, and AI workflows that solve real business problems.',
    cta: 'Learn More',
    href: '/work-with-me/builder',
  },
  {
    id: 'consulting',
    icon: Lightbulb,
    title: 'Operations Strategy',
    description: 'Improve cross-functional workflows, warehouse efficiency, order management, and operational profitability.',
    cta: 'Learn More',
    href: '/work-with-me/consulting',
  },
]

export default function HireMePage() {
  return (
    <div className="pt-16">
      {/* Hero */}
      <section className="bg-gradient-to-b from-[#2D1BB8] to-[#1A0F7A] py-24">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl font-bold text-white text-balance">
            Helping Ambitious Brands Scale
          </h1>
          <p className="mt-6 text-white/80 max-w-2xl mx-auto leading-relaxed text-pretty text-lg">
            I partner with founders, startups, and brands that want more than campaigns. Together, we build repeatable growth systems that connect marketing, operations, and technology—turning strategic ideas into measurable business results.
          </p>
        </div>
      </section>

      {/* Services */}
      <section className="bg-[#F8F7FF] py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-[#0F0A2E] text-center mb-4">How I Can Help</h2>
            <p className="text-center text-[#4B4680] max-w-2xl mx-auto">
              Whether you need strategic consulting, growth optimization, product development, or operational improvement, I adapt my approach to match your specific business needs.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {services.map((service) => {
              const Icon = service.icon
              return (
                <div
                  key={`${service.id}-${service.title}`}
                  className="relative bg-white border border-[#E8E6F8] rounded-2xl p-8 flex flex-col gap-5 hover:border-[#2D1BB8]/30 hover:shadow-lg hover:-translate-y-1 transition-all duration-200"
                >
                  {service.badge && (
                    <span className="absolute top-5 right-5 text-[10px] font-semibold uppercase tracking-wider text-[#2D1BB8] bg-[#2D1BB8]/10 border border-[#2D1BB8]/20 px-2.5 py-1 rounded-full">
                      {service.badge}
                    </span>
                  )}

                  <div className="w-11 h-11 rounded-xl bg-[#2D1BB8]/[0.08] flex items-center justify-center">
                    <Icon className="w-5 h-5 text-[#2D1BB8]" />
                  </div>

                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-[#0F0A2E]">{service.title}</h3>
                    <p className="mt-2 text-sm text-[#4B4680] leading-relaxed">{service.description}</p>
                  </div>

                  <Link
                    href={service.href}
                    className="inline-flex items-center gap-2 text-sm font-semibold text-[#2D1BB8] group hover:gap-3 transition-all duration-200"
                  >
                    {service.cta}
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform duration-200" />
                  </Link>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-[#0F0A2E] mb-4">How I Work</h2>
            <p className="text-[#4B4680] max-w-2xl mx-auto">
              A straightforward process focused on understanding your business, designing strategic solutions, and delivering measurable impact.
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-6">
            {[
              { step: '01', title: 'Understand', description: 'Deep dive into your business challenges, goals, and market context.' },
              { step: '02', title: 'Strategy', description: 'Design a custom growth system tailored to your specific needs.' },
              { step: '03', title: 'Execute', description: 'Implement the strategy with clear milestones and accountability.' },
              { step: '04', title: 'Optimize', description: 'Measure results, iterate, and continuously improve performance.' },
            ].map((phase) => (
              <div key={phase.step} className="text-center">
                <div className="text-4xl font-bold text-[#2D1BB8] mb-3">{phase.step}</div>
                <h3 className="font-semibold text-[#0F0A2E] mb-2">{phase.title}</h3>
                <p className="text-sm text-[#4B4680]">{phase.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <ServiceCTA />
    </div>
  )
}
