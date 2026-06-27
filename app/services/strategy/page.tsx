import { Target, Compass, Briefcase, TrendingUp } from 'lucide-react'
import Link from 'next/link'

const services = [
  'Business Audit',
  'Marketplace Strategy',
  'Growth Roadmap',
  'Process Review',
  'Operational Analysis',
  'AI Integration Planning',
  'Performance Review',
  'Decision Workshops',
]

const bestFor = [
  'Business Owners',
  'Directors',
  'Startups',
  'Management Teams',
]

export default function StrategyService() {
  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-[#F8F7FF] to-white py-20 sm:py-28">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="w-14 h-14 rounded-xl bg-[#2D1BB8]/[0.08] flex items-center justify-center mb-8">
            <Target className="w-7 h-7 text-[#2D1BB8]" />
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-[#0F0A2E] leading-tight">
            From Problems to Decisions
          </h1>
          <p className="mt-6 text-xl text-[#4B4680] leading-relaxed max-w-3xl">
            Businesses rarely struggle because they lack ideas. More often, they struggle because information is scattered across departments. Strategy sessions connect marketing, operations, finance, and customer experience into actionable decisions supported by data and business context.
          </p>
        </div>
      </section>

      {/* Services Offered */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-[#0F0A2E] mb-12">What's Included</h2>
          <div className="grid sm:grid-cols-2 gap-4">
            {services.map((service) => (
              <div
                key={service}
                className="flex items-start gap-3 p-4 bg-[#F8F7FF] rounded-lg border border-[#E8E6F8] hover:border-[#2D1BB8] transition-colors"
              >
                <Compass className="w-5 h-5 text-[#2D1BB8] flex-shrink-0 mt-0.5" />
                <span className="text-[#0F0A2E] font-medium">{service}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Best For */}
      <section className="py-20 bg-[#F8F7FF]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-[#0F0A2E] mb-12">Best For</h2>
          <div className="grid sm:grid-cols-2 gap-6">
            {bestFor.map((item) => (
              <div
                key={item}
                className="flex items-center gap-4 p-6 bg-white rounded-xl border border-[#E8E6F8]"
              >
                <Briefcase className="w-6 h-6 text-[#2D1BB8] flex-shrink-0" />
                <span className="text-lg text-[#0F0A2E] font-medium">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-[#0F0A2E] mb-12">The Strategy Process</h2>
          <div className="space-y-6">
            {[
              {
                step: '01',
                title: 'Deep Discovery',
                description: 'Understand your business context, market position, customer insights, operations, and strategic goals.'
              },
              {
                step: '02',
                title: 'Analysis & Mapping',
                description: 'Connect data across departments to identify patterns, bottlenecks, and opportunities.'
              },
              {
                step: '03',
                title: 'Strategic Workshops',
                description: 'Facilitate cross-functional sessions that align teams around clear decisions and priorities.'
              },
              {
                step: '04',
                title: 'Roadmap & Implementation',
                description: 'Define clear next steps, resource allocation, timelines, and accountability for execution.'
              },
            ].map((item) => (
              <div key={item.step} className="flex gap-6 items-start">
                <div className="w-12 h-12 rounded-lg bg-[#2D1BB8] text-white flex items-center justify-center flex-shrink-0 font-bold">
                  {item.step}
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-[#0F0A2E] mb-2">{item.title}</h3>
                  <p className="text-[#4B4680]">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Deliverables */}
      <section className="py-20 bg-[#F8F7FF]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-[#0F0A2E] mb-12">Deliverables</h2>
          <div className="grid sm:grid-cols-2 gap-6">
            {[
              { title: 'Business Audit Report', description: 'Comprehensive analysis of current state, strengths, and gaps' },
              { title: 'Strategic Roadmap', description: 'Clear priorities, initiatives, and timeline for next 12-24 months' },
              { title: 'Decision Framework', description: 'Guidelines for ongoing strategic decision-making' },
              { title: 'Implementation Plan', description: 'Specific actions, owners, and success metrics' },
            ].map((item) => (
              <div key={item.title} className="bg-white p-6 rounded-xl border border-[#E8E6F8]">
                <p className="text-lg font-semibold text-[#0F0A2E] mb-2">{item.title}</p>
                <p className="text-[#4B4680]">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Strategy Matters */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-[#0F0A2E] mb-12">Why Business Strategy Matters</h2>
          <div className="grid sm:grid-cols-2 gap-8">
            {[
              { title: 'Clear Direction', icon: TrendingUp, description: 'Everyone knows what success looks like and why' },
              { title: 'Resource Alignment', icon: Target, description: 'Money and effort go to what matters most' },
              { title: 'Data-Driven', icon: Compass, description: 'Decisions based on facts, not assumptions' },
              { title: 'Competitive Edge', icon: Briefcase, description: 'Strategic clarity creates advantage' },
            ].map((item) => {
              const Icon = item.icon
              return (
                <div key={item.title} className="space-y-3">
                  <Icon className="w-8 h-8 text-[#2D1BB8]" />
                  <h3 className="text-lg font-semibold text-[#0F0A2E]">{item.title}</h3>
                  <p className="text-[#4B4680]">{item.description}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-[#F8F7FF]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-[#0F0A2E] mb-4">Every Business Problem Has a System Behind It</h2>
          <p className="text-lg text-[#4B4680] mb-8 max-w-2xl mx-auto">
            Let's find yours. Together, we'll turn scattered information into clear strategy and measurable decisions.
          </p>
          <Link
            href="/contact"
            className="inline-block px-8 py-4 bg-[#2D1BB8] text-white font-semibold rounded-lg hover:bg-[#1f0f7d] transition-colors"
          >
            Schedule a Strategy Session
          </Link>
        </div>
      </section>

      {/* Back to Services */}
      <div className="text-center py-8 border-t border-[#E8E6F8]">
        <Link href="/services" className="text-[#2D1BB8] hover:underline font-medium">
          ← Back to all services
        </Link>
      </div>
    </div>
  )
}
