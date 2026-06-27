import { TrendingUp, Zap, Brain, Target } from 'lucide-react'

const services = [
  {
    id: 'marketing',
    icon: TrendingUp,
    title: 'Marketing',
    subtitle: 'End-to-End Digital Marketing & Marketplace Growth',
    description: 'Develop scalable marketing systems that connect content, marketplaces, paid campaigns, customer journeys, analytics, and business growth into one integrated strategy.',
    buttonText: 'Explore Marketing',
    href: '/services/marketing',
  },
  {
    id: 'operations',
    icon: Zap,
    title: 'Operations',
    subtitle: 'Business Operations & Workflow Optimization',
    description: 'Design efficient operational systems including SOPs, reporting dashboards, warehouse workflows, KPI frameworks, and process improvements that support sustainable growth.',
    buttonText: 'Explore Operations',
    href: '/services/operations',
  },
  {
    id: 'ai-101',
    icon: Brain,
    title: 'AI 101',
    subtitle: 'AI Training & Team Enablement',
    description: 'Practical AI workshops designed for businesses that want to integrate ChatGPT and modern AI tools into marketing, operations, documentation, reporting, and daily productivity.',
    buttonText: 'Explore AI 101',
    href: '/services/ai-101',
  },
  {
    id: 'strategy',
    icon: Target,
    title: 'Strategy',
    subtitle: 'Business Strategy & Decision Support',
    description: 'Transform complex business challenges into actionable strategies by connecting marketing, operations, finance, customer experience, and data into clear executive decisions.',
    buttonText: 'Explore Strategy',
    href: '/services/strategy',
  },
]

import Link from 'next/link'

export function ServicesList() {
  return (
    <section className="bg-[#F8F7FF] py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-[#0F0A2E]">Practice Areas</h2>
          <p className="mt-4 text-[#4B4680] max-w-2xl mx-auto">
            I help businesses grow by designing scalable systems across marketing, operations, artificial intelligence, and business strategy. Every engagement is tailored to solve real business challenges through practical execution and measurable outcomes.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service) => (
            <div
              key={service.id}
              className="bg-white border border-[#E8E6F8] rounded-xl p-6 hover:shadow-lg transition-all duration-300 group flex flex-col"
            >
              <div className="w-10 h-10 rounded-lg bg-[#2D1BB8]/[0.08] flex items-center justify-center mb-4">
                <service.icon className="w-5 h-5 text-[#2D1BB8]" />
              </div>
              
              <h3 className="text-lg font-bold text-[#0F0A2E] mb-1">
                {service.title}
              </h3>
              
              <p className="text-xs font-medium text-[#2D1BB8] uppercase tracking-wider mb-3">
                {service.subtitle}
              </p>
              
              <p className="text-sm text-[#4B4680] leading-relaxed mb-6 flex-grow">
                {service.description}
              </p>
              
              <Link
                href={service.href}
                className="inline-flex items-center gap-2 text-[#2D1BB8] font-medium text-sm hover:underline"
              >
                {service.buttonText}
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
