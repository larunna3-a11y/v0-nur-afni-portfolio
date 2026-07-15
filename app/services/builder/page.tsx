import Link from 'next/link'
import { Check, ArrowRight } from 'lucide-react'
import { ServiceHero } from '@/components/work-with-me/service-hero'
import { ServiceCTA } from '@/components/work-with-me/service-cta'
import { ServiceProcess } from '@/components/work-with-me/service-process'
import { ServiceFAQ } from '@/components/work-with-me/service-faq'

export const metadata = {
  title: 'Digital Product & Internal System Development — Nur Afni',
  description: 'Building websites, dashboards, AI-powered workflows, and internal business systems that improve efficiency.',
}

const packages = [
  {
    name: 'Landing Page',
    price: 'Starting from Rp2M',
    description: 'A fast, modern, conversion-focused landing page built with Next.js and deployed to production.',
    includes: [
      'Responsive mobile-first design',
      'Modern UI with your brand identity',
      'SEO-ready structure',
      'Performance optimized',
      'Deployment included',
    ],
    deliverables: ['Live URL', 'Source code', 'Basic analytics setup'],
    cta: 'Start a Project',
    badge: null,
    examples: null,
  },
  {
    name: 'Dashboard & Analytics',
    price: 'Starting from Rp5M',
    description: 'Custom data dashboards for business reporting, KPI monitoring, and internal decision-making.',
    includes: [
      'Business or KPI dashboard',
      'Data visualizations & charts',
      'Analytics integration',
      'Reporting views',
      'Admin panel (if required)',
    ],
    deliverables: ['Live dashboard', 'Source code', 'Admin access', 'Documentation'],
    cta: 'Discuss Requirements',
    badge: null,
    examples: null,
  },
  {
    name: 'Internal System',
    price: 'Starting from Rp15M',
    description: 'Bespoke business systems built for warehouse management, inventory, CRM, workflow automation, or operations.',
    includes: [
      'Custom system design',
      'Full-stack development',
      'Database architecture',
      'User roles & permissions',
      'Deployment & hosting setup',
    ],
    deliverables: ['Full system', 'Admin panel', 'Source code', 'Documentation', 'Training session'],
    cta: 'Request Proposal',
    badge: null,
    examples: ['Warehouse system', 'Inventory tracker', 'CRM', 'Workflow system', 'Operations portal'],
  },
  {
    name: 'AI Workflow & Prototype',
    price: 'Custom Quote',
    description: 'Rapid prototyping of AI-powered tools, assistants, knowledge bases, and business workflow automations.',
    includes: [
      'AI assistant or chatbot',
      'Knowledge base integration',
      'Prompt library design',
      'Workflow automation',
      'RAG prototype (if applicable)',
    ],
    deliverables: ['Working prototype', 'Source code', 'Implementation guide'],
    cta: 'Explore AI Solutions',
    badge: 'Enterprise',
    examples: ['AI assistant', 'Knowledge base', 'Prompt library', 'AI dashboard', 'RAG prototype'],
  },
]

const featuredProjects = [
  { name: 'FlowOps', category: 'Workflow Platform', href: '/digital-product-lab', status: 'Completed' },
  { name: 'StyleDNA', category: 'AI Styling Tool', href: '/digital-product-lab', status: 'In Progress' },
  { name: 'Artchy', category: 'Digital Art Museum', href: '/digital-product-lab', status: 'Live' },
  { name: 'PUSTAKARA', category: 'Legal Knowledge Platform', href: '/digital-product-lab', status: 'Live' },
]

const statusColor: Record<string, string> = {
  Completed: 'text-emerald-600 bg-emerald-50 border-emerald-200',
  Live:       'text-emerald-600 bg-emerald-50 border-emerald-200',
  'In Progress': 'text-amber-600 bg-amber-50 border-amber-200',
  'Coming Soon': 'text-[#4B4680] bg-[#F8F7FF] border-[#E8E6F8]',
}

export default function BuilderPage() {
  return (
    <div className="pt-16">
      <ServiceHero
        title="Digital Product & Internal System Development"
        subtitle="Building websites, dashboards, AI-powered workflows, and internal business systems that improve efficiency and decision-making."
        primaryCta={{ label: 'Start a Project', href: '/contact' }}
        secondaryCta={{ label: 'View Products', href: '/digital-product-lab' }}
      />

      <section className="bg-[#F8F7FF] py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20">

          {/* Introduction */}
          <div className="max-w-2xl">
            <p className="text-xs font-semibold uppercase tracking-widest text-[#2D1BB8] mb-3">Who This Is For</p>
            <p className="text-[#4B4680] leading-relaxed text-base">
              This service is for businesses that need a reliable partner to design and build digital products or internal tools. Whether you need a professional web presence, an internal system to replace spreadsheets, or an AI-powered prototype to test a new idea — Builder provides end-to-end product development with a focus on practical outcomes over unnecessary complexity.
            </p>
          </div>

          {/* Service Packages */}
          <div>
            <h2 className="text-2xl font-bold text-[#0F0A2E] mb-8">What I Build</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {packages.map((pkg) => (
                <div
                  key={pkg.name}
                  className="relative bg-white border border-[#E8E6F8] rounded-xl p-6 flex flex-col gap-5 hover:border-[#2D1BB8]/30 hover:shadow-md transition-all duration-200"
                >
                  {pkg.badge && (
                    <span className="absolute top-4 right-4 text-[10px] font-semibold uppercase tracking-wider text-[#2D1BB8] bg-[#2D1BB8]/10 border border-[#2D1BB8]/20 px-2.5 py-1 rounded-full">
                      {pkg.badge}
                    </span>
                  )}

                  <div>
                    <h3 className="text-base font-bold text-[#0F0A2E] pr-16">{pkg.name}</h3>
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

                  {pkg.examples && (
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-wider text-[#9B97C0] mb-3">Examples</p>
                      <div className="flex flex-wrap gap-1.5">
                        {pkg.examples.map((ex) => (
                          <span key={ex} className="px-2.5 py-1 rounded-full text-xs bg-[#F8F7FF] border border-[#E8E6F8] text-[#4B4680]">
                            {ex}
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

          {/* Relevant Experience */}
          <div>
            <h2 className="text-2xl font-bold text-[#0F0A2E] mb-6">Relevant Experience</h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {featuredProjects.map((p) => (
                <Link
                  key={p.name}
                  href={p.href}
                  className="flex flex-col gap-3 py-4 px-5 rounded-xl bg-white border border-[#E8E6F8] hover:border-[#2D1BB8]/30 hover:shadow-sm transition-all duration-200 group"
                >
                  <div>
                    <p className="text-sm font-semibold text-[#0F0A2E] group-hover:text-[#2D1BB8] transition-colors">{p.name}</p>
                    <p className="text-xs text-[#4B4680] mt-0.5">{p.category}</p>
                  </div>
                  <span className={`self-start text-[10px] font-semibold uppercase tracking-wider px-2.5 py-1 rounded-full border ${statusColor[p.status] ?? 'text-[#4B4680] bg-[#F8F7FF] border-[#E8E6F8]'}`}>
                    {p.status}
                  </span>
                </Link>
              ))}
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
        body="Whether you're building an internal platform, improving your digital operations, or prototyping an AI-powered idea — I'd love to help. Let's start with a conversation."
        primaryCta={{ label: 'Schedule a Discovery Call', href: '/contact' }}
        secondaryCta={{ label: 'View My Portfolio', href: '/portfolio' }}
      />
    </div>
  )
}
