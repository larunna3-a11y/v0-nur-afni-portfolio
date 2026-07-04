import Link from 'next/link'
import { Check, ArrowRight } from 'lucide-react'
import { ServiceHero } from '@/components/work-with-me/service-hero'
import { ServiceCTA } from '@/components/work-with-me/service-cta'
import { ServiceProcess } from '@/components/work-with-me/service-process'
import { ServiceFAQ } from '@/components/work-with-me/service-faq'

export const metadata = {
  title: 'Training, Mentoring & Knowledge Sharing — Nur Afni',
  description: 'Helping individuals, teams, and organizations develop practical digital marketing and AI skills.',
}

const packages = [
  {
    name: 'Personal Mentoring',
    price: 'Rp300K / hour',
    description: 'Focused one-on-one sessions tailored entirely to your goals — career, business, or skill development.',
    includes: [
      'Personalized session agenda',
      'Marketplace operations & strategy',
      'Digital marketing career guidance',
      'Portfolio review & feedback',
      'Interview preparation',
      'AI productivity coaching',
    ],
    deliverables: ['Session notes', 'Recommendations', 'Resources & reading list'],
    cta: 'Book a Session',
    badge: null,
    suitableFor: null,
  },
  {
    name: 'Workshop',
    price: 'Starting from Rp3M',
    description: 'Practical, hands-on workshops designed for small groups — universities, communities, and SMEs.',
    includes: [
      'Customized curriculum',
      'Slide deck & materials',
      'Hands-on practice activities',
      'Q&A and group discussion',
      'Follow-up resources',
    ],
    deliverables: ['Workshop materials', 'Summary slides', 'Q&A notes', 'Certificates (optional)'],
    cta: 'Request Workshop',
    badge: null,
    suitableFor: ['Universities', 'SMEs', 'Communities', 'Organizations'],
  },
  {
    name: 'Corporate Training',
    price: 'Custom Quote',
    description: 'Structured training programs for marketing, operations, and productivity teams — delivered remotely or on-site.',
    includes: [
      'Custom training curriculum',
      'Pre-training needs assessment',
      'Facilitator-led sessions',
      'Team activities & exercises',
      'Post-training evaluation',
    ],
    deliverables: ['Training materials', 'Completion certificates', 'Assessment report', 'Recommendations'],
    cta: 'Request Proposal',
    badge: null,
    suitableFor: ['Marketing teams', 'Operations teams', 'SME organizations', 'Corporate teams'],
  },
  {
    name: 'Speaking',
    price: 'Custom Quote',
    description: 'Keynotes, panels, and guest lectures on digital marketing, AI adoption, and marketplace growth.',
    includes: [
      'Custom talk preparation',
      'Slide deck design',
      'Live presentation',
      'Q&A facilitation',
    ],
    deliverables: ['Presentation slides', 'Key takeaways document'],
    cta: 'Invite Me to Speak',
    badge: null,
    suitableFor: ['Seminars', 'Webinars', 'Guest lectures', 'Panel discussions', 'Company events'],
  },
]

const topics = [
  'Marketplace operations (Shopee, TikTok Shop)',
  'Digital marketing fundamentals',
  'AI tools for business productivity',
  'Prompt engineering for teams',
  'Workflow automation with AI',
  'Analytics & performance reporting',
  'Portfolio development & career planning',
  'Custom curriculum for SMEs & universities',
]

const featuredExperience = [
  { name: 'Digital Marketing 101', category: 'Workshop Module', href: '/digital-product-lab', status: 'Live' },
  { name: 'AI for Business Teams', category: 'Corporate Training', href: '/contact', status: 'Available' },
  { name: 'Portfolio Reviews', category: 'Mentoring Format', href: '/contact', status: 'Available' },
]

const audiences = [
  'Students & fresh graduates',
  'Business owners & entrepreneurs',
  'Marketing teams',
  'SME operators',
  'Corporate teams',
  'University programs',
]

export default function LearningPage() {
  return (
    <div className="pt-16">
      <ServiceHero
        title="Training, Mentoring & Knowledge Sharing"
        subtitle="Helping individuals, teams, and organizations develop practical digital marketing and AI skills through mentoring, workshops, and corporate training."
        primaryCta={{ label: 'Book Training', href: '/contact' }}
        secondaryCta={{ label: 'View Topics', href: '#topics' }}
      />

      <section className="bg-[#F8F7FF] py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20">

          {/* Introduction */}
          <div className="max-w-2xl">
            <p className="text-xs font-semibold uppercase tracking-widest text-[#2D1BB8] mb-3">Who This Is For</p>
            <p className="text-[#4B4680] leading-relaxed text-base">
              This service is for individuals and organizations that want to develop real, practical digital skills — not just theory. Whether you are a student building your portfolio, a marketing team wanting to understand AI tools, or a company looking to run a structured digital training program, Learning provides structured, hands-on knowledge transfer that produces measurable skill improvement.
            </p>
          </div>

          {/* Packages */}
          <div>
            <h2 className="text-2xl font-bold text-[#0F0A2E] mb-8">Learning Formats</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {packages.map((pkg) => (
                <div
                  key={pkg.name}
                  className="bg-white border border-[#E8E6F8] rounded-xl p-6 flex flex-col gap-5 hover:border-[#2D1BB8]/30 hover:shadow-md transition-all duration-200"
                >
                  <div>
                    <h3 className="text-base font-bold text-[#0F0A2E]">{pkg.name}</h3>
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

                  {pkg.suitableFor && (
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-wider text-[#9B97C0] mb-3">Suitable For</p>
                      <div className="flex flex-wrap gap-1.5">
                        {pkg.suitableFor.map((s) => (
                          <span key={s} className="px-2.5 py-1 rounded-full text-xs bg-[#F8F7FF] border border-[#E8E6F8] text-[#4B4680]">
                            {s}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}

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

          {/* Topics + Audiences */}
          <div id="topics" className="grid md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-2xl font-bold text-[#0F0A2E] mb-6">Topics I Teach</h2>
              <ul className="space-y-3">
                {topics.map((t) => (
                  <li key={t} className="flex items-start gap-3 text-sm text-[#4B4680]">
                    <Check className="w-4 h-4 text-[#2D1BB8] mt-0.5 flex-shrink-0" />
                    {t}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h2 className="text-2xl font-bold text-[#0F0A2E] mb-6">Who It&apos;s For</h2>
              <div className="flex flex-wrap gap-2 mb-10">
                {audiences.map((a) => (
                  <span key={a} className="px-3 py-1.5 rounded-full text-xs font-medium bg-white border border-[#E8E6F8] text-[#4B4680]">
                    {a}
                  </span>
                ))}
              </div>

              <h2 className="text-xl font-bold text-[#0F0A2E] mb-4">Relevant Experience</h2>
              <div className="space-y-3">
                {featuredExperience.map((p) => (
                  <Link
                    key={p.name}
                    href={p.href}
                    className="flex items-center justify-between py-3 px-4 rounded-xl bg-white border border-[#E8E6F8] hover:border-[#2D1BB8]/30 hover:shadow-sm transition-all duration-200 group"
                  >
                    <div>
                      <p className="text-sm font-semibold text-[#0F0A2E] group-hover:text-[#2D1BB8] transition-colors">{p.name}</p>
                      <p className="text-xs text-[#4B4680] mt-0.5">{p.category}</p>
                    </div>
                    <span className="text-[10px] font-semibold uppercase tracking-wider px-2.5 py-1 rounded-full border text-emerald-600 bg-emerald-50 border-emerald-200 flex-shrink-0">
                      {p.status}
                    </span>
                  </Link>
                ))}
              </div>
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
        body="Whether you're growing your own skills, helping your team learn, or looking for a speaker for your next event — I'd love to help. Let's start with a conversation."
        primaryCta={{ label: 'Schedule a Discovery Call', href: '/contact' }}
        secondaryCta={{ label: 'View My Portfolio', href: '/portfolio' }}
      />
    </div>
  )
}
