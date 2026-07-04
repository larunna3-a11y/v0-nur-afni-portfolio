import Link from 'next/link'
import { Check, ArrowRight } from 'lucide-react'
import { ServiceHero } from '@/components/work-with-me/service-hero'
import { ServiceCTA } from '@/components/work-with-me/service-cta'

export const metadata = {
  title: 'Builder — Work With Me — Nur Afni',
  description: 'Building websites, dashboards, internal systems, AI workflows, and digital products.',
}

const services = [
  { name: 'Landing Page', description: 'A fast, modern, conversion-focused landing page built with Next.js.', price: 'Starting from Rp2M' },
  { name: 'Dashboard', description: 'Custom data dashboards for reporting, analytics, and internal decision-making.', price: 'Starting from Rp5M' },
  { name: 'Internal System', description: 'Bespoke systems for warehouse, inventory, CRM, and workflow automation.', price: 'Starting from Rp15M' },
  { name: 'AI Prototype', description: 'Rapid prototyping of AI-powered tools, assistants, and knowledge bases.', price: 'Custom Quote', badge: 'Enterprise' },
]

const highlights = [
  'Next.js & React (TypeScript)',
  'Tailwind CSS UI/UX design',
  'AI integrations (OpenAI, Vercel AI SDK)',
  'Custom dashboards & admin panels',
  'Warehouse & inventory systems',
  'Workflow automation tools',
  'Post-launch maintenance & support',
]

const featuredProjects = [
  { name: 'FlowOps', category: 'Workflow Platform', href: '/digital-product-lab', status: 'Completed' },
  { name: 'StyleDNA', category: 'AI Styling Platform', href: '/digital-product-lab', status: 'In Progress' },
  { name: 'Artchy', category: 'Digital Art Museum', href: '/digital-product-lab', status: 'Live' },
  { name: 'Pustaka Hukum Indonesia', category: 'Legal Knowledge Platform', href: '/digital-product-lab', status: 'Coming Soon' },
]

const statusColor: Record<string, string> = {
  Completed: 'text-emerald-600 bg-emerald-50 border-emerald-200',
  Live: 'text-emerald-600 bg-emerald-50 border-emerald-200',
  'In Progress': 'text-amber-600 bg-amber-50 border-amber-200',
  'Coming Soon': 'text-[#4B4680] bg-[#F8F7FF] border-[#E8E6F8]',
}

export default function BuilderPage() {
  return (
    <div className="pt-16">
      <ServiceHero
        title="Builder"
        subtitle="Designing and building digital products, AI-powered experiences, internal systems, dashboards, and business tools."
        primaryCta={{ label: 'Discuss Your Project', href: '/contact' }}
        secondaryCta={{ label: 'Explore Digital Products', href: '/digital-product-lab' }}
      />

      {/* Services */}
      <section className="bg-[#F8F7FF] py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">

          {/* Service packages */}
          <div>
            <h2 className="text-2xl font-bold text-[#0F0A2E] mb-8">What I Build</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {services.map((s) => (
                <div key={s.name} className="relative bg-white border border-[#E8E6F8] rounded-xl p-6 flex flex-col gap-4 hover:border-[#2D1BB8]/30 hover:shadow-md transition-all duration-200">
                  {s.badge && (
                    <span className="absolute top-4 right-4 text-[10px] font-semibold uppercase tracking-wider text-[#2D1BB8] bg-[#2D1BB8]/10 border border-[#2D1BB8]/20 px-2.5 py-1 rounded-full">
                      {s.badge}
                    </span>
                  )}
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

          {/* Tech + projects */}
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-2xl font-bold text-[#0F0A2E] mb-6">Tech & Capabilities</h2>
              <ul className="space-y-3">
                {highlights.map((h) => (
                  <li key={h} className="flex items-start gap-3 text-sm text-[#4B4680]">
                    <Check className="w-4 h-4 text-[#2D1BB8] mt-0.5 flex-shrink-0" />
                    {h}
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-[#0F0A2E] mb-6">Featured Projects</h2>
              <div className="space-y-3">
                {featuredProjects.map((p) => (
                  <Link key={p.name} href={p.href} className="flex items-center justify-between py-3 px-4 rounded-lg bg-white border border-[#E8E6F8] hover:border-[#2D1BB8]/30 hover:shadow-sm transition-all duration-200 group">
                    <div>
                      <p className="text-sm font-semibold text-[#0F0A2E] group-hover:text-[#2D1BB8] transition-colors">{p.name}</p>
                      <p className="text-xs text-[#4B4680] mt-0.5">{p.category}</p>
                    </div>
                    <span className={`text-[10px] font-semibold uppercase tracking-wider px-2.5 py-1 rounded-full border ${statusColor[p.status] ?? 'text-[#4B4680] bg-[#F8F7FF] border-[#E8E6F8]'}`}>
                      {p.status}
                    </span>
                  </Link>
                ))}
              </div>
            </div>
          </div>

          {/* Pricing placeholder */}
          <div className="bg-white border border-[#E8E6F8] rounded-2xl p-8 text-center">
            <p className="text-xs font-semibold uppercase tracking-widest text-[#9B97C0] mb-3">Pricing</p>
            <h3 className="text-lg font-bold text-[#0F0A2E]">Full pricing details coming soon</h3>
            <p className="mt-2 text-sm text-[#4B4680]">Project scope and pricing are always discussed upfront to align with your budget and timeline.</p>
            <Link href="/contact" className="mt-5 inline-flex items-center gap-2 bg-[#2D1BB8] text-white text-sm font-semibold px-5 py-2.5 rounded-lg hover:bg-[#2418A0] transition-colors duration-200">
              Contact Me
            </Link>
          </div>
        </div>
      </section>

      <ServiceCTA
        heading="Have a product idea or system to build?"
        body="Let's scope your project and figure out the best approach. Reach out with your brief."
        primaryCta={{ label: 'Discuss Your Project', href: '/contact' }}
        secondaryCta={{ label: 'View All Services', href: '/work-with-me' }}
      />
    </div>
  )
}
