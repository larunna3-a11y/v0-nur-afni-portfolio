import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

interface ServiceHeroProps {
  title: string
  subtitle: string
  primaryCta: { label: string; href: string }
  secondaryCta?: { label: string; href: string }
}

export function ServiceHero({ title, subtitle, primaryCta, secondaryCta }: ServiceHeroProps) {
  return (
    <section className="bg-[#2D1BB8] py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <p className="text-[#9B97C0] text-sm font-medium uppercase tracking-widest mb-4">
          Work With Me
        </p>
        <h1 className="text-4xl sm:text-5xl font-bold text-white text-balance">{title}</h1>
        <p className="mt-6 text-[#9B97C0] max-w-2xl mx-auto leading-relaxed text-pretty text-lg">
          {subtitle}
        </p>
        <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
          <Link
            href={primaryCta.href}
            className="inline-flex items-center gap-2 bg-white text-[#2D1BB8] font-semibold px-6 py-3 rounded-lg hover:bg-[#F8F7FF] transition-colors duration-200 group"
          >
            {primaryCta.label}
            <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform duration-200" />
          </Link>
          {secondaryCta && (
            <Link
              href={secondaryCta.href}
              className="inline-flex items-center gap-2 border border-white/30 text-white/80 font-medium px-6 py-3 rounded-lg hover:bg-white/10 hover:text-white transition-all duration-200"
            >
              {secondaryCta.label}
            </Link>
          )}
        </div>
      </div>
    </section>
  )
}
