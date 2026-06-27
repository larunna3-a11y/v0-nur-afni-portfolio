import { TrendingUp, Target, BarChart3, Zap } from 'lucide-react'
import Link from 'next/link'

const services = [
  'Marketplace Growth Strategy',
  'Shopee, TikTok Shop & Lazada Optimization',
  'Campaign Planning',
  'Digital Marketing Audit',
  'Social Media Strategy',
  'Performance Analysis',
  'Reporting Dashboard',
  'AI-assisted Marketing Workflow',
]

const bestFor = [
  'SMEs',
  'Growing Brands',
  'Marketplace Sellers',
  'Startups',
]

export default function MarketingService() {
  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-[#F8F7FF] to-white py-20 sm:py-28">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="w-14 h-14 rounded-xl bg-[#2D1BB8]/[0.08] flex items-center justify-center mb-8">
            <TrendingUp className="w-7 h-7 text-[#2D1BB8]" />
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-[#0F0A2E] leading-tight">
            End-to-End Digital Marketing & Marketplace Growth
          </h1>
          <p className="mt-6 text-xl text-[#4B4680] leading-relaxed max-w-3xl">
            Marketing is more than content and advertising. Sustainable growth happens when strategy, operations, and data work together. I help businesses build marketing systems that improve visibility, increase conversions, and support long-term growth across marketplaces and social media. Every recommendation is based on measurable business outcomes rather than trends.
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
                <Zap className="w-5 h-5 text-[#2D1BB8] flex-shrink-0 mt-0.5" />
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
                <Target className="w-6 h-6 text-[#2D1BB8] flex-shrink-0" />
                <span className="text-lg text-[#0F0A2E] font-medium">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-[#0F0A2E] mb-12">How It Works</h2>
          <div className="space-y-6">
            {[
              {
                step: '01',
                title: 'Audit & Strategy',
                description: 'Analyze current performance across channels, identify gaps, and develop a data-informed growth roadmap.'
              },
              {
                step: '02',
                title: 'System Design',
                description: 'Build integrated marketing systems connecting content, ads, marketplace operations, and customer journey.'
              },
              {
                step: '03',
                title: 'Implementation & Training',
                description: 'Execute campaigns, set up dashboards, and train your team on systems you can manage independently.'
              },
              {
                step: '04',
                title: 'Monitoring & Optimization',
                description: 'Track performance against KPIs, optimize continuously, and provide monthly strategic reviews.'
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

      {/* Key Metrics */}
      <section className="py-20 bg-[#F8F7FF]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-[#0F0A2E] mb-12">What We Measure</h2>
          <div className="grid sm:grid-cols-2 gap-6">
            {[
              { metric: 'Revenue Growth', icon: BarChart3 },
              { metric: 'Conversion Rate', icon: Target },
              { metric: 'Marketing ROI', icon: TrendingUp },
              { metric: 'Customer Acquisition Cost', icon: Zap },
            ].map((item) => {
              const Icon = item.icon
              return (
                <div key={item.metric} className="bg-white p-6 rounded-xl border border-[#E8E6F8]">
                  <Icon className="w-8 h-8 text-[#2D1BB8] mb-3" />
                  <p className="text-lg font-semibold text-[#0F0A2E]">{item.metric}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-[#0F0A2E] mb-4">Ready to Build a Marketing System?</h2>
          <p className="text-lg text-[#4B4680] mb-8 max-w-2xl mx-auto">
            Let's build a marketing system, not just another campaign. Sustainable growth happens when strategy, operations, and data work together.
          </p>
          <Link
            href="/contact"
            className="inline-block px-8 py-4 bg-[#2D1BB8] text-white font-semibold rounded-lg hover:bg-[#1f0f7d] transition-colors"
          >
            Start a Conversation
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
