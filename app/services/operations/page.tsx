import { Zap, CheckCircle, BarChart3, Workflow } from 'lucide-react'
import Link from 'next/link'

const services = [
  'Warehouse Workflow',
  'SOP Development',
  'KPI Design',
  'Dashboard & Reporting',
  'Marketplace Operations',
  'Claim & Return Analysis',
  'Process Optimization',
  'Cross-functional Documentation',
]

const bestFor = [
  'Warehouse Teams',
  'E-commerce Businesses',
  'Fulfillment Operations',
  'Marketplace Sellers',
]

export default function OperationsService() {
  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-[#F8F7FF] to-white py-20 sm:py-28">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="w-14 h-14 rounded-xl bg-[#2D1BB8]/[0.08] flex items-center justify-center mb-8">
            <Zap className="w-7 h-7 text-[#2D1BB8]" />
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-[#0F0A2E] leading-tight">
            Operations That Scale With Your Business
          </h1>
          <p className="mt-6 text-xl text-[#4B4680] leading-relaxed max-w-3xl">
            Growth creates complexity. Without operational systems, successful campaigns become warehouse bottlenecks, reporting issues, and communication problems. I help businesses improve workflows by designing practical systems that reduce repetitive work and improve decision-making.
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
                <CheckCircle className="w-5 h-5 text-[#2D1BB8] flex-shrink-0 mt-0.5" />
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
                <Workflow className="w-6 h-6 text-[#2D1BB8] flex-shrink-0" />
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
                title: 'Process Assessment',
                description: 'Map current workflows, identify inefficiencies, bottlenecks, and opportunities for automation.'
              },
              {
                step: '02',
                title: 'System Design',
                description: 'Design SOPs, KPI frameworks, dashboards, and workflows optimized for your specific operation.'
              },
              {
                step: '03',
                title: 'Implementation',
                description: 'Set up tools, create documentation, establish reporting systems, and train your team.'
              },
              {
                step: '04',
                title: 'Ongoing Support',
                description: 'Monitor KPIs, refine processes, and provide guidance as your team scales operations.'
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
          <h2 className="text-3xl font-bold text-[#0F0A2E] mb-12">What You Get</h2>
          <div className="grid sm:grid-cols-2 gap-6">
            {[
              { title: 'Standard Operating Procedures', description: 'Clear, step-by-step documentation for all key processes' },
              { title: 'KPI Framework', description: 'Measurable indicators aligned with business goals' },
              { title: 'Automated Dashboards', description: 'Real-time visibility into operational performance' },
              { title: 'Training Materials', description: 'Documentation and guidance for your team' },
            ].map((item) => (
              <div key={item.title} className="bg-white p-6 rounded-xl border border-[#E8E6F8]">
                <p className="text-lg font-semibold text-[#0F0A2E] mb-2">{item.title}</p>
                <p className="text-[#4B4680]">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-[#0F0A2E] mb-4">Good Operations Make Growth Sustainable</h2>
          <p className="text-lg text-[#4B4680] mb-8 max-w-2xl mx-auto">
            Without operational systems, growth becomes chaos. Let's build processes that scale with your business.
          </p>
          <Link
            href="/contact"
            className="inline-block px-8 py-4 bg-[#2D1BB8] text-white font-semibold rounded-lg hover:bg-[#1f0f7d] transition-colors"
          >
            Let's Improve Your Operations
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
