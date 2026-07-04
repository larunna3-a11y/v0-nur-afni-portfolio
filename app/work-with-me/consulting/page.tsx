import Link from 'next/link'
import { Check, ArrowRight } from 'lucide-react'
import { ServiceHero } from '@/components/work-with-me/service-hero'
import { ServiceCTA } from '@/components/work-with-me/service-cta'

export const metadata = {
  title: 'Consulting — Work With Me — Nur Afni',
  description: 'Strategic consulting for businesses looking to improve marketplace performance, digital operations, and long-term growth.',
}

const services = [
  { name: 'Strategy Session', description: 'A focused 60–90 min consultation to identify quick wins and priorities.', price: 'Starting from Rp750K' },
  { name: 'Growth Audit', description: 'A deep-dive analysis of your marketing funnel, marketplace, and competitive landscape.', price: 'Starting from Rp3M' },
  { name: 'Fractional Digital Lead', description: 'Ongoing strategic leadership on retainer — like having a CMO part-time.', price: 'Starting from Rp8M/month' },
]

const highlights = [
  'Marketplace growth strategy',
  'Business & funnel audits',
  'AI workflow consultation',
  'Operational process improvement',
  'Digital transformation planning',
  'Marketing strategy & roadmapping',
]

const featuredProjects = [
  { name: 'QCY Indonesia', category: 'Marketplace Strategy', href: '/portfolio/qcy-case-study' },
  { name: 'Islam Cendekia', category: 'Content & Growth', href: '/portfolio/islam-cendekia' },
]

export default function ConsultingPage() {
  return (
    <div className="pt-16">
      <ServiceHero
        title="Consulting"
        subtitle="Strategic guidance for businesses looking to improve marketplace performance, digital operations, and long-term growth."
        primaryCta={{ label: 'Book a Consultation', href: '/contact' }}
        secondaryCta={{ label: 'View Portfolio', href: '/portfolio' }}
      />

      {/* Services */}
      <section className="bg-[#F8F7FF] py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">

          {/* Service packages */}
          <div>
            <h2 className="text-2xl font-bold text-[#0F0A2E] mb-8">Service Packages</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {services.map((s) => (
                <div key={s.name} className="bg-white border border-[#E8E6F8] rounded-xl p-6 flex flex-col gap-4 hover:border-[#2D1BB8]/30 hover:shadow-md transition-all duration-200">
                  <h3 className="text-base font-bold text-[#0F0A2E]">{s.name}</h3>
                  <p className="text-sm text-[#4B4680] leading-relaxed flex-1">{s.description}</p>
                  <p className="text-base font-bold text-[#2D1BB8]">{s.price}</p>
                  <Link href="/contact" className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#2D1BB8] group hover:gap-2.5 transition-all duration-200">
                    Get Started <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform duration-200" />
                  </Link>
                </div>
              ))}
            </div>
          </div>

          {/* What I cover */}
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-2xl font-bold text-[#0F0A2E] mb-6">What I Cover</h2>
              <ul className="space-y-3">
                {highlights.map((h) => (
                  <li key={h} className="flex items-start gap-3 text-sm text-[#4B4680]">
                    <Check className="w-4 h-4 text-[#2D1BB8] mt-0.5 flex-shrink-0" />
                    {h}
                  </li>
                ))}
              </ul>
            </div>

            {/* Featured work */}
            <div>
              <h2 className="text-2xl font-bold text-[#0F0A2E] mb-6">Featured Work</h2>
              <div className="space-y-3">
                {featuredProjects.map((p) => (
                  <Link key={p.name} href={p.href} className="flex items-center justify-between py-3 px-4 rounded-lg bg-white border border-[#E8E6F8] hover:border-[#2D1BB8]/30 hover:shadow-sm transition-all duration-200 group">
                    <div>
                      <p className="text-sm font-semibold text-[#0F0A2E] group-hover:text-[#2D1BB8] transition-colors">{p.name}</p>
                      <p className="text-xs text-[#4B4680] mt-0.5">{p.category}</p>
                    </div>
                    <ArrowRight className="w-4 h-4 text-[#9B97C0] group-hover:text-[#2D1BB8] group-hover:translate-x-0.5 transition-all duration-200" />
                  </Link>
                ))}
              </div>
            </div>
          </div>

          {/* Pricing placeholder */}
          <div className="bg-white border border-[#E8E6F8] rounded-2xl p-8 text-center">
            <p className="text-xs font-semibold uppercase tracking-widest text-[#9B97C0] mb-3">Pricing</p>
            <h3 className="text-lg font-bold text-[#0F0A2E]">Full pricing details coming soon</h3>
            <p className="mt-2 text-sm text-[#4B4680]">In the meantime, reach out and we can scope a package that fits your budget.</p>
            <Link href="/contact" className="mt-5 inline-flex items-center gap-2 bg-[#2D1BB8] text-white text-sm font-semibold px-5 py-2.5 rounded-lg hover:bg-[#2418A0] transition-colors duration-200">
              Contact Me
            </Link>
          </div>
        </div>
      </section>

      <ServiceCTA
        heading="Ready to improve your digital strategy?"
        body="Let's start with a conversation. Book a strategy session or request a growth audit."
        primaryCta={{ label: 'Book a Consultation', href: '/contact' }}
        secondaryCta={{ label: 'View All Services', href: '/work-with-me' }}
      />
    </div>
  )
}
