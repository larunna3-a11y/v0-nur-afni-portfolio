'use client'

import { useState } from 'react'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'
import { Lightbulb, TrendingUp, Monitor, GraduationCap, ArrowRight, ChevronDown, Check } from 'lucide-react'

// ─── Data ────────────────────────────────────────────────────────────────────

const categories = [
  {
    id: 'consulting',
    icon: Lightbulb,
    title: 'Consulting',
    description: 'Helping businesses make smarter digital decisions through strategy, audits, AI adoption, and operational improvements.',
    packages: [
      {
        name: 'Strategy Session',
        description: 'A focused consultation to unpack your current challenges and identify quick wins.',
        price: 'Starting from Rp750K',
        features: [
          '60–90 minute consultation',
          'Marketplace review',
          'Growth opportunities',
          'Q&A session',
          'Written summary',
        ],
        cta: 'Book Consultation',
        href: '/contact',
      },
      {
        name: 'Growth Audit',
        description: 'A deep-dive analysis of your marketing funnel, marketplace presence, and competitive landscape.',
        price: 'Starting from Rp3M',
        features: [
          'Marketplace audit',
          'Competitor analysis',
          'Marketing funnel review',
          'Prioritized roadmap',
          '30-day action plan',
        ],
        cta: 'Request Audit',
        href: '/contact',
      },
      {
        name: 'Fractional Digital Lead',
        description: 'Ongoing strategic leadership — like having a CMO or digital director on retainer.',
        price: 'Starting from Rp8M/month',
        features: [
          'Weekly strategy meetings',
          'Campaign supervision',
          'KPI monitoring',
          'Team direction',
        ],
        cta: "Let's Discuss",
        href: '/contact',
      },
    ],
    featuredProjects: [
      { name: 'QCY Indonesia', category: 'Marketplace Strategy', href: '/portfolio/qcy-case-study', status: 'Completed' },
      { name: 'Islam Cendekia', category: 'Content Growth', href: '/portfolio/islam-cendekia', status: 'Completed' },
    ],
    process: ['Discovery', 'Research', 'Planning', 'Execution', 'Optimization', 'Delivery'],
    faqs: [
      { q: 'Can you work remotely?', a: 'Yes, all consulting engagements are conducted remotely via video call, shared documents, and async communication tools.' },
      { q: 'Can you collaborate with internal teams?', a: 'Absolutely. I often work alongside in-house marketing, operations, and product teams as an embedded strategic partner.' },
      { q: 'Do you provide ongoing support after a project?', a: 'Yes, I offer retainer-based support for clients who need continued strategic guidance after the initial engagement.' },
      { q: 'How does payment work?', a: 'Projects are billed 50% upfront and 50% upon completion. Monthly retainers are invoiced at the start of each period.' },
    ],
  },
  {
    id: 'marketing',
    icon: TrendingUp,
    title: 'Marketing',
    description: 'Helping brands grow through marketplace optimization, paid media, content systems, livestream commerce, and performance marketing.',
    packages: [
      {
        name: 'Marketplace Launch',
        description: 'Full setup and activation across major Indonesian marketplaces from day one.',
        price: 'Starting from Rp5M',
        features: [
          'Shopee, Tokopedia, TikTok Shop',
          'Store setup & branding',
          'Product listing optimization',
          'Campaign planning',
        ],
        cta: 'Launch My Store',
        href: '/contact',
      },
      {
        name: 'Marketplace Growth',
        description: 'Ongoing management and optimization to scale your marketplace revenue month over month.',
        price: 'Starting from Rp10M/month',
        features: [
          'Campaign optimization',
          'Marketplace ads management',
          'Affiliate strategy',
          'LIVE commerce coordination',
          'Monthly reporting',
        ],
        cta: 'Grow My Business',
        href: '/contact',
        badge: 'Most Popular',
      },
      {
        name: 'Full Digital Marketing',
        description: 'End-to-end digital marketing across every channel — built around your growth goals.',
        price: 'Custom Quote',
        features: [
          'Marketplace management',
          'Social Media strategy',
          'Paid Ads (Meta & TikTok)',
          'Content strategy',
          'Performance reporting',
        ],
        cta: 'Contact Me',
        href: '/contact',
      },
    ],
    featuredProjects: [
      { name: 'QCY Indonesia', category: 'Marketplace Growth', href: '/portfolio/qcy-case-study', status: 'Completed' },
      { name: 'Islam Cendekia', category: 'Content Strategy', href: '/portfolio/islam-cendekia', status: 'Completed' },
      { name: 'Ecommerce Growth', category: 'E-commerce Optimization', href: '/portfolio/ecommerce-growth', status: 'Completed' },
    ],
    process: ['Discovery', 'Research', 'Planning', 'Execution', 'Optimization', 'Delivery'],
    faqs: [
      { q: 'Which marketplaces do you manage?', a: 'I work across Shopee, Tokopedia, TikTok Shop, Lazada, and Blibli — with deep expertise in Shopee and TikTok Shop.' },
      { q: 'Do you run paid ads as part of marketing?', a: 'Yes, paid ads including Meta Ads, TikTok Ads, and Shopee CPAS can be included in marketing packages.' },
      { q: 'How do you measure success?', a: 'I set clear KPIs at the start of each engagement — typically GMV, ROAS, orders, and organic reach — and report monthly.' },
      { q: 'Can projects be customized?', a: 'Yes, every engagement is scoped based on your specific goals, budget, and business context.' },
    ],
  },
  {
    id: 'builder',
    icon: Monitor,
    title: 'Builder',
    description: 'Designing and building digital products, AI-powered experiences, internal systems, dashboards, and business tools.',
    packages: [
      {
        name: 'Landing Page',
        description: 'A fast, modern, conversion-focused landing page built with Next.js.',
        price: 'Starting from Rp2M',
        features: [
          'Fully responsive',
          'SEO ready',
          'Modern UI/UX',
          'Built with Next.js',
        ],
        cta: 'Build Landing Page',
        href: '/contact',
      },
      {
        name: 'Dashboard',
        description: 'Custom data dashboards for reporting, analytics, and internal decision-making.',
        price: 'Starting from Rp5M',
        features: [
          'KPI dashboard',
          'Analytics integration',
          'Reporting views',
          'Admin panel',
        ],
        cta: 'Build Dashboard',
        href: '/contact',
      },
      {
        name: 'Internal System',
        description: 'Bespoke business systems for warehouse, inventory, CRM, and workflow automation.',
        price: 'Starting from Rp15M',
        features: [
          'Warehouse management',
          'Inventory tracking',
          'CRM integration',
          'Workflow automation',
        ],
        cta: 'Discuss Project',
        href: '/contact',
      },
      {
        name: 'AI Prototype',
        description: 'Rapid prototyping of AI-powered tools, assistants, dashboards, and knowledge bases.',
        price: 'Custom Quote',
        features: [
          'AI workflow integration',
          'AI dashboard',
          'AI assistant',
          'Prompt system design',
          'Knowledge base',
        ],
        cta: 'Build with AI',
        href: '/contact',
        badge: 'Enterprise',
      },
    ],
    featuredProjects: [
      { name: 'FlowOps', category: 'Workflow Platform', href: '/digital-product-lab', status: 'Completed' },
      { name: 'StyleDNA', category: 'AI Styling Platform', href: '/digital-product-lab', status: 'In Progress' },
      { name: 'Artchy', category: 'Digital Art Museum', href: '/digital-product-lab', status: 'Live' },
      { name: 'Pustaka Hukum Indonesia', category: 'Legal Knowledge Platform', href: '/digital-product-lab', status: 'Coming Soon' },
    ],
    process: ['Discovery', 'Research', 'Planning', 'Execution', 'Optimization', 'Delivery'],
    faqs: [
      { q: 'What technologies do you build with?', a: 'I primarily build with Next.js, React, TypeScript, and Tailwind CSS. AI integrations use OpenAI and Vercel AI SDK.' },
      { q: 'Do you handle design as well as development?', a: 'Yes, I handle both UI/UX design and frontend development. For complex projects I collaborate with trusted designers.' },
      { q: 'Do you provide ongoing support after launch?', a: 'Yes, I offer maintenance and support packages for all digital products post-launch.' },
      { q: 'Can projects be customized to my budget?', a: 'Yes, project scope is always discussed upfront to align deliverables with your budget and timeline.' },
    ],
  },
  {
    id: 'learning',
    icon: GraduationCap,
    title: 'Learning',
    description: 'Helping individuals and teams develop practical digital marketing, AI, and marketplace skills.',
    packages: [
      {
        name: '1-on-1 Mentoring',
        description: 'Focused private sessions tailored to your specific career or business goals.',
        price: 'Rp300K/hour',
        features: [
          'Marketplace operations',
          'Digital marketing fundamentals',
          'Career & portfolio review',
          'AI tools for business',
        ],
        cta: 'Book Session',
        href: '/contact',
      },
      {
        name: 'Workshop',
        description: 'Practical, hands-on workshops for small businesses, universities, and communities.',
        price: 'Starting from Rp3M',
        features: [
          'Perfect for SMEs',
          'University programs',
          'Communities & teams',
          'Custom curriculum',
        ],
        cta: 'Request Workshop',
        href: '/contact',
      },
      {
        name: 'Corporate Training',
        description: 'Structured training programs for marketing, operations, and productivity teams.',
        price: 'Custom Quote',
        features: [
          'AI productivity',
          'Marketplace operations',
          'Digital marketing',
          'Workflow automation',
        ],
        cta: 'Book Training',
        href: '/contact',
      },
      {
        name: 'Speaking',
        description: 'Keynotes, panels, and guest lectures on digital marketing, AI, and marketplace growth.',
        price: 'Custom Quote',
        features: [
          'Webinar & seminar',
          'Guest lecture',
          'Panel discussion',
          'Podcast appearance',
        ],
        cta: 'Invite Me',
        href: '/contact',
      },
    ],
    featuredProjects: [
      { name: 'Digital Marketing 101', category: 'Workshop Module', href: '/digital-product-lab', status: 'Live' },
      { name: 'AI for Business', category: 'Training Program', href: '/contact', status: 'Available' },
    ],
    process: ['Discovery', 'Research', 'Planning', 'Execution', 'Optimization', 'Delivery'],
    faqs: [
      { q: 'Are sessions conducted online or offline?', a: 'Both options are available. Online sessions via Google Meet or Zoom; offline sessions available in Jabodetabek area.' },
      { q: 'Can training be customized to our industry?', a: 'Yes, all workshop and training content is tailored to your industry, team size, and specific learning goals.' },
      { q: 'Do you provide training materials?', a: 'Yes, all sessions include slides, worksheets, and a written summary. Recordings available on request.' },
      { q: 'How far in advance should we book?', a: 'I recommend booking workshops and corporate training at least 2 weeks in advance to allow proper preparation.' },
    ],
  },
]

// ─── Sub-components ───────────────────────────────────────────────────────────

function PricingCard({ pkg }: { pkg: typeof categories[0]['packages'][0] }) {
  return (
    <motion.div
      whileHover={{ y: -4 }}
      transition={{ duration: 0.2, ease: 'easeOut' }}
      className="relative bg-white border border-[#E8E6F8] rounded-xl p-6 flex flex-col gap-4 hover:border-[#2D1BB8]/30 hover:shadow-md transition-colors duration-200"
    >
      {pkg.badge && (
        <span className="absolute top-4 right-4 text-[10px] font-semibold uppercase tracking-wider text-[#2D1BB8] bg-[#2D1BB8]/10 border border-[#2D1BB8]/20 px-2.5 py-1 rounded-full">
          {pkg.badge}
        </span>
      )}
      <div>
        <h4 className="text-base font-bold text-[#0F0A2E]">{pkg.name}</h4>
        <p className="mt-1 text-sm text-[#4B4680] leading-relaxed">{pkg.description}</p>
      </div>
      <p className="text-lg font-bold text-[#2D1BB8]">{pkg.price}</p>
      <ul className="space-y-2 flex-1">
        {pkg.features.map((f) => (
          <li key={f} className="flex items-start gap-2.5 text-sm text-[#4B4680]">
            <Check className="w-3.5 h-3.5 text-[#2D1BB8] mt-0.5 flex-shrink-0" />
            {f}
          </li>
        ))}
      </ul>
      <Link
        href={pkg.href}
        className="mt-2 inline-flex items-center justify-center gap-2 w-full py-2.5 px-4 rounded-lg border border-[#2D1BB8] text-[#2D1BB8] text-sm font-semibold hover:bg-[#2D1BB8] hover:text-white transition-all duration-200 group"
      >
        {pkg.cta}
        <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform duration-200" />
      </Link>
    </motion.div>
  )
}

function FeaturedProject({ project }: { project: typeof categories[0]['featuredProjects'][0] }) {
  const statusColor: Record<string, string> = {
    Completed: 'text-emerald-600 bg-emerald-50 border-emerald-200',
    Live: 'text-emerald-600 bg-emerald-50 border-emerald-200',
    'In Progress': 'text-amber-600 bg-amber-50 border-amber-200',
    'Coming Soon': 'text-[#4B4680] bg-[#F8F7FF] border-[#E8E6F8]',
    Available: 'text-[#2D1BB8] bg-[#2D1BB8]/5 border-[#2D1BB8]/20',
  }

  return (
    <motion.div
      whileHover={{ y: -2 }}
      transition={{ duration: 0.2 }}
    >
      <Link
        href={project.href}
        className="flex items-center justify-between py-3 px-4 rounded-lg hover:bg-[#F8F7FF] border border-transparent hover:border-[#E8E6F8] transition-all duration-200 group"
      >
        <div>
          <span className="text-sm font-semibold text-[#0F0A2E] group-hover:text-[#2D1BB8] transition-colors">
            {project.name}
          </span>
          <p className="text-xs text-[#4B4680] mt-0.5">{project.category}</p>
        </div>
        <span className={`text-[10px] font-semibold uppercase tracking-wider px-2.5 py-1 rounded-full border ${statusColor[project.status] ?? 'text-[#4B4680] bg-[#F8F7FF] border-[#E8E6F8]'}`}>
          {project.status}
        </span>
      </Link>
    </motion.div>
  )
}

function ProcessStep({ steps }: { steps: string[] }) {
  return (
    <div className="flex flex-wrap items-center gap-2">
      {steps.map((step, i) => (
        <div key={step} className="flex items-center gap-2">
          <span className="text-sm font-medium text-[#0F0A2E]">{step}</span>
          {i < steps.length - 1 && (
            <span className="text-[#9B97C0] text-sm select-none">→</span>
          )}
        </div>
      ))}
    </div>
  )
}

function FAQItem({ faq }: { faq: { q: string; a: string } }) {
  const [open, setOpen] = useState(false)

  return (
    <div className="border-b border-[#E8E6F8] last:border-none">
      <button
        onClick={() => setOpen(!open)}
        className="flex items-center justify-between w-full py-4 text-left gap-4"
      >
        <span className="text-sm font-semibold text-[#0F0A2E]">{faq.q}</span>
        <motion.div
          animate={{ rotate: open ? 180 : 0 }}
          transition={{ duration: 0.2 }}
          className="flex-shrink-0"
        >
          <ChevronDown className="w-4 h-4 text-[#4B4680]" />
        </motion.div>
      </button>
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            key="faq-body"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: 'easeOut' }}
            className="overflow-hidden"
          >
            <p className="pb-4 text-sm text-[#4B4680] leading-relaxed">{faq.a}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

// ─── Main Component ───────────────────────────────────────────────────────────

export function ServicesList() {
  const [activeId, setActiveId] = useState<string | null>(null)

  const handleToggle = (id: string) => {
    setActiveId(prev => (prev === id ? null : id))
  }

  return (
    <>
      {/* Category tabs */}
      <section className="bg-[#F8F7FF] py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
          {categories.map((cat) => {
            const isOpen = activeId === cat.id
            const Icon = cat.icon

            return (
              <div
                key={cat.id}
                id={cat.id}
                className={[
                  'bg-white rounded-2xl border overflow-hidden transition-colors duration-200',
                  isOpen ? 'border-[#2D1BB8]/40 shadow-md' : 'border-[#E8E6F8] shadow-sm',
                ].join(' ')}
              >
                {/* Category header — always visible */}
                <button
                  onClick={() => handleToggle(cat.id)}
                  className="flex items-center gap-5 w-full px-7 py-6 text-left"
                >
                  <div
                    className={[
                      'w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 transition-colors duration-200',
                      isOpen ? 'bg-[#2D1BB8]' : 'bg-[#2D1BB8]/[0.08]',
                    ].join(' ')}
                  >
                    <Icon className={['w-5 h-5 transition-colors duration-200', isOpen ? 'text-white' : 'text-[#2D1BB8]'].join(' ')} />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h2 className="text-lg font-bold text-[#0F0A2E]">{cat.title}</h2>
                    <p className="text-sm text-[#4B4680] mt-0.5 leading-relaxed">{cat.description}</p>
                  </div>
                  <motion.div
                    animate={{ rotate: isOpen ? 180 : 0 }}
                    transition={{ duration: 0.25 }}
                    className="flex-shrink-0 ml-2"
                  >
                    <ChevronDown className="w-5 h-5 text-[#4B4680]" />
                  </motion.div>
                </button>

                {/* Expanded content */}
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      key={`${cat.id}-body`}
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.35, ease: [0.4, 0, 0.2, 1] }}
                      className="overflow-hidden"
                    >
                      <div className="px-7 pb-10 space-y-12">
                        {/* Divider */}
                        <div className="border-t border-[#E8E6F8]" />

                        {/* Service Packages */}
                        <div>
                          <h3 className="text-xs font-semibold uppercase tracking-widest text-[#9B97C0] mb-6">
                            Service Packages
                          </h3>
                          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                            {cat.packages.map((pkg) => (
                              <PricingCard key={pkg.name} pkg={pkg} />
                            ))}
                          </div>
                        </div>

                        {/* Featured Projects */}
                        {cat.featuredProjects.length > 0 && (
                          <div>
                            <h3 className="text-xs font-semibold uppercase tracking-widest text-[#9B97C0] mb-4">
                              Featured Projects
                            </h3>
                            <div className="space-y-1">
                              {cat.featuredProjects.map((project) => (
                                <FeaturedProject key={project.name} project={project} />
                              ))}
                            </div>
                          </div>
                        )}

                        {/* Process */}
                        <div>
                          <h3 className="text-xs font-semibold uppercase tracking-widest text-[#9B97C0] mb-4">
                            My Process
                          </h3>
                          <ProcessStep steps={cat.process} />
                        </div>

                        {/* FAQ */}
                        <div>
                          <h3 className="text-xs font-semibold uppercase tracking-widest text-[#9B97C0] mb-2">
                            Frequently Asked Questions
                          </h3>
                          <div>
                            {cat.faqs.map((faq) => (
                              <FAQItem key={faq.q} faq={faq} />
                            ))}
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            )
          })}
        </div>
      </section>

      {/* Final CTA */}
      <section className="bg-[#2D1BB8] py-24">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white text-balance leading-tight">
            {"Let's Build Something Meaningful Together"}
          </h2>
          <p className="mt-5 text-[#9B97C0] text-base leading-relaxed text-pretty max-w-xl mx-auto">
            Whether you need growth strategy, marketplace execution, a custom internal system, or AI-powered workflows, I&apos;d love to hear about your project.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-7 py-3.5 bg-white text-[#2D1BB8] font-semibold text-sm rounded-xl hover:bg-[#F8F7FF] transition-colors duration-200 group"
            >
              Schedule a Call
              <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform duration-200" />
            </Link>
            <Link
              href="/portfolio"
              className="inline-flex items-center gap-2 px-7 py-3.5 border border-white/30 text-white font-semibold text-sm rounded-xl hover:border-white/60 hover:bg-white/5 transition-all duration-200"
            >
              View Portfolio
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
