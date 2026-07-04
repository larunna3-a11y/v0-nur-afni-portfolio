import Link from 'next/link'
import { Check, ArrowRight } from 'lucide-react'
import { ServiceHero } from '@/components/work-with-me/service-hero'
import { ServiceCTA } from '@/components/work-with-me/service-cta'

export const metadata = {
  title: 'Learning — Work With Me — Nur Afni',
  description: 'Mentoring, workshops, corporate training, and public speaking on digital marketing, AI, and marketplace operations.',
}

const services = [
  { name: '1-on-1 Mentoring', description: 'Focused private sessions tailored to your specific career or business goals.', price: 'Rp300K/hour' },
  { name: 'Workshop', description: 'Practical, hands-on workshops for small businesses, universities, and communities.', price: 'Starting from Rp3M' },
  { name: 'Corporate Training', description: 'Structured training programs for marketing, operations, and productivity teams.', price: 'Custom Quote' },
  { name: 'Speaking', description: 'Keynotes, panels, and guest lectures on digital marketing, AI, and marketplace growth.', price: 'Custom Quote' },
]

const highlights = [
  'Marketplace operations (Shopee, TikTok Shop)',
  'Digital marketing fundamentals',
  'AI tools for business & productivity',
  'Prompt engineering for teams',
  'Career & portfolio review sessions',
  'Custom curriculum for SMEs & universities',
  'Online (Zoom/Meet) & offline available',
]

const audiences = ['Students & fresh graduates', 'Business owners & entrepreneurs', 'Marketing teams', 'SME operators', 'Corporate teams', 'University programs']

const featuredModules = [
  { name: 'Digital Marketing 101', category: 'Workshop Module', href: '/digital-product-lab', status: 'Live' },
  { name: 'AI for Business', category: 'Training Program', href: '/contact', status: 'Available' },
]

export default function LearningPage() {
  return (
    <div className="pt-16">
      <ServiceHero
        title="Learning"
        subtitle="Helping individuals and teams develop practical digital marketing, AI, and marketplace skills through mentoring, workshops, and corporate training."
        primaryCta={{ label: 'Book a Session', href: '/contact' }}
        secondaryCta={{ label: 'View Digital Products', href: '/digital-product-lab' }}
      />

      {/* Services */}
      <section className="bg-[#F8F7FF] py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">

          {/* Service packages */}
          <div>
            <h2 className="text-2xl font-bold text-[#0F0A2E] mb-8">Learning Formats</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {services.map((s) => (
                <div key={s.name} className="bg-white border border-[#E8E6F8] rounded-xl p-6 flex flex-col gap-4 hover:border-[#2D1BB8]/30 hover:shadow-md transition-all duration-200">
                  <h3 className="text-base font-bold text-[#0F0A2E]">{s.name}</h3>
                  <p className="text-sm text-[#4B4680] leading-relaxed flex-1">{s.description}</p>
                  <p className="text-base font-bold text-[#2D1BB8]">{s.price}</p>
                  <Link href="/contact" className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#2D1BB8] group hover:gap-2.5 transition-all duration-200">
                    Book Now <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform duration-200" />
                  </Link>
                </div>
              ))}
            </div>
          </div>

          {/* Topics + audiences */}
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-2xl font-bold text-[#0F0A2E] mb-6">Topics I Teach</h2>
              <ul className="space-y-3">
                {highlights.map((h) => (
                  <li key={h} className="flex items-start gap-3 text-sm text-[#4B4680]">
                    <Check className="w-4 h-4 text-[#2D1BB8] mt-0.5 flex-shrink-0" />
                    {h}
                  </li>
                ))}
              </ul>
            </div>

            <div className="space-y-10">
              <div>
                <h2 className="text-2xl font-bold text-[#0F0A2E] mb-6">Who It&apos;s For</h2>
                <div className="flex flex-wrap gap-2">
                  {audiences.map((a) => (
                    <span key={a} className="px-3 py-1.5 rounded-full text-xs font-medium bg-white border border-[#E8E6F8] text-[#4B4680]">
                      {a}
                    </span>
                  ))}
                </div>
              </div>

              <div>
                <h2 className="text-xl font-bold text-[#0F0A2E] mb-4">Featured Modules</h2>
                <div className="space-y-3">
                  {featuredModules.map((p) => (
                    <Link key={p.name} href={p.href} className="flex items-center justify-between py-3 px-4 rounded-lg bg-white border border-[#E8E6F8] hover:border-[#2D1BB8]/30 hover:shadow-sm transition-all duration-200 group">
                      <div>
                        <p className="text-sm font-semibold text-[#0F0A2E] group-hover:text-[#2D1BB8] transition-colors">{p.name}</p>
                        <p className="text-xs text-[#4B4680] mt-0.5">{p.category}</p>
                      </div>
                      <span className="text-[10px] font-semibold uppercase tracking-wider px-2.5 py-1 rounded-full border text-emerald-600 bg-emerald-50 border-emerald-200">
                        {p.status}
                      </span>
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Pricing placeholder */}
          <div className="bg-white border border-[#E8E6F8] rounded-2xl p-8 text-center">
            <p className="text-xs font-semibold uppercase tracking-widest text-[#9B97C0] mb-3">Pricing</p>
            <h3 className="text-lg font-bold text-[#0F0A2E]">Full pricing details coming soon</h3>
            <p className="mt-2 text-sm text-[#4B4680]">I recommend booking workshops and corporate training at least 2 weeks in advance. Reach out to discuss availability.</p>
            <Link href="/contact" className="mt-5 inline-flex items-center gap-2 bg-[#2D1BB8] text-white text-sm font-semibold px-5 py-2.5 rounded-lg hover:bg-[#2418A0] transition-colors duration-200">
              Book a Session
            </Link>
          </div>
        </div>
      </section>

      <ServiceCTA
        heading="Ready to learn or bring training to your team?"
        body="Book a mentoring session, request a workshop, or invite me to speak at your event."
        primaryCta={{ label: 'Book a Session', href: '/contact' }}
        secondaryCta={{ label: 'View All Services', href: '/work-with-me' }}
      />
    </div>
  )
}
