import { Brain, BookOpen, Cpu, Users } from 'lucide-react'
import Link from 'next/link'

const services = [
  'Understanding AI',
  'Prompt Engineering',
  'AI for Marketing',
  'AI for Operations',
  'AI for Excel',
  'AI for Research',
  'AI Workflow Design',
  'Responsible AI Usage',
]

const bestFor = [
  'Corporate Teams',
  'Marketing Teams',
  'Operations Teams',
  'Business Owners',
]

export default function AI101Service() {
  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-[#F8F7FF] to-white py-20 sm:py-28">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="w-14 h-14 rounded-xl bg-[#2D1BB8]/[0.08] flex items-center justify-center mb-8">
            <Brain className="w-7 h-7 text-[#2D1BB8]" />
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-[#0F0A2E] leading-tight">
            Helping Teams Actually Use AI
          </h1>
          <p className="mt-6 text-xl text-[#4B4680] leading-relaxed max-w-3xl">
            AI 101 focuses on practical adoption instead of technical theory. Participants learn how to use AI for research, documentation, analysis, content creation, reporting, and productivity using real business scenarios.
          </p>
        </div>
      </section>

      {/* Services Offered */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-[#0F0A2E] mb-12">Topics Covered</h2>
          <div className="grid sm:grid-cols-2 gap-4">
            {services.map((service) => (
              <div
                key={service}
                className="flex items-start gap-3 p-4 bg-[#F8F7FF] rounded-lg border border-[#E8E6F8] hover:border-[#2D1BB8] transition-colors"
              >
                <Cpu className="w-5 h-5 text-[#2D1BB8] flex-shrink-0 mt-0.5" />
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
                <Users className="w-6 h-6 text-[#2D1BB8] flex-shrink-0" />
                <span className="text-lg text-[#0F0A2E] font-medium">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Training Format */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-[#0F0A2E] mb-12">How It Works</h2>
          <div className="space-y-6">
            {[
              {
                step: '01',
                title: 'Foundation Workshop',
                description: 'Understand what AI is, how it works, and why it matters for your business. No coding required.'
              },
              {
                step: '02',
                title: 'Applied Training',
                description: 'Learn practical techniques for your specific role - marketing, operations, finance, or general business.'
              },
              {
                step: '03',
                title: 'Hands-On Practice',
                description: 'Work through real business scenarios using ChatGPT and AI tools to solve actual problems.'
              },
              {
                step: '04',
                title: 'Workflow Design',
                description: 'Build sustainable AI workflows that your team can use daily to boost productivity.'
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

      {/* Learning Outcomes */}
      <section className="py-20 bg-[#F8F7FF]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-[#0F0A2E] mb-12">What You&apos;ll Learn</h2>
          <div className="grid sm:grid-cols-2 gap-6">
            {[
              'How to write effective AI prompts',
              'Using AI for research and analysis',
              'Creating content with AI assistance',
              'Automating repetitive tasks',
              'Building AI into your workflow',
              'Ethical AI usage in business',
            ].map((outcome) => (
              <div key={outcome} className="bg-white p-6 rounded-xl border border-[#E8E6F8]">
                <BookOpen className="w-6 h-6 text-[#2D1BB8] mb-3" />
                <p className="text-[#0F0A2E] font-medium">{outcome}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-[#0F0A2E] mb-4">Teach Your Team How to Think With AI</h2>
          <p className="text-lg text-[#4B4680] mb-8 max-w-2xl mx-auto">
            Not just ask AI. AI adoption is about building a new way of working—one that enhances your team&apos;s capabilities and creates competitive advantage.
          </p>
          <Link
            href="/contact"
            className="inline-block px-8 py-4 bg-[#2D1BB8] text-white font-semibold rounded-lg hover:bg-[#1f0f7d] transition-colors"
          >
            Schedule a Workshop
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
