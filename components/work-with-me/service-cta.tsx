import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

interface ServiceCTAProps {
  heading?: string
  body?: string
  primaryCta?: { label: string; href: string }
  secondaryCta?: { label: string; href: string }
}

export function ServiceCTA({
  heading = "Ready to get started?",
  body = "Let's build something meaningful together. Reach out and we can find the best collaboration format for your goals.",
  primaryCta = { label: 'Get in Touch', href: '/contact' },
  secondaryCta = { label: 'View Portfolio', href: '/portfolio' },
}: ServiceCTAProps) {
  return (
    <section className="bg-[#0F0A2E] py-20">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl sm:text-4xl font-bold text-white text-balance">{heading}</h2>
        <p className="mt-4 text-[#9B97C0] leading-relaxed text-pretty">{body}</p>
        <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
          <Link
            href={primaryCta.href}
            className="inline-flex items-center gap-2 bg-[#2D1BB8] text-white font-semibold px-6 py-3 rounded-lg hover:bg-[#2418A0] transition-colors duration-200 group"
          >
            {primaryCta.label}
            <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform duration-200" />
          </Link>
          <Link
            href={secondaryCta.href}
            className="inline-flex items-center gap-2 border border-white/20 text-white/70 font-medium px-6 py-3 rounded-lg hover:bg-white/10 hover:text-white transition-all duration-200"
          >
            {secondaryCta.label}
          </Link>
        </div>
      </div>
    </section>
  )
}
