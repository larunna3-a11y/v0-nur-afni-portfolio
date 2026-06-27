'use client'

import Link from 'next/link'
import { useParams } from 'next/navigation'
import { TrendingUp, Zap, Brain, Target } from 'lucide-react'
import { getTranslation } from '@/lib/use-translations'

const serviceIcons = {
  marketing: TrendingUp,
  operations: Zap,
  'ai-101': Brain,
  strategy: Target,
}

export default function ServicesPage() {
  const params = useParams()
  const lang = (params.lang as string) || 'en'

  const t = (key: string) => getTranslation(lang as any, key)

  const services = [
    {
      id: 'marketing',
      title: t('services.marketing.title'),
      subtitle: t('services.marketing.subtitle'),
      description: t('services.marketing.heroDescription'),
      href: `/${lang}/services/marketing`,
    },
    {
      id: 'operations',
      title: t('services.operations.title'),
      subtitle: t('services.operations.subtitle'),
      description: t('services.operations.heroDescription'),
      href: `/${lang}/services/operations`,
    },
    {
      id: 'ai-101',
      title: t('services.ai101.title'),
      subtitle: t('services.ai101.subtitle'),
      description: t('services.ai101.heroDescription'),
      href: `/${lang}/services/ai-101`,
    },
    {
      id: 'strategy',
      title: t('services.strategy.title'),
      subtitle: t('services.strategy.subtitle'),
      description: t('services.strategy.heroDescription'),
      href: `/${lang}/services/strategy`,
    },
  ]

  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-[#F8F7FF] py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl sm:text-5xl font-bold text-[#0F0A2E] mb-4">
            {t('services.marketing.title') === 'Marketing' ? 'Practice Areas' : 'Area Praktik'}
          </h1>
          <p className="text-lg text-[#4B4680] max-w-3xl leading-relaxed">
            {lang === 'en'
              ? 'I help businesses grow by designing scalable systems across marketing, operations, artificial intelligence, and business strategy. Every engagement is tailored to solve real business challenges through practical execution and measurable outcomes.'
              : 'Saya membantu bisnis berkembang dengan mendesain sistem scalable di seluruh marketing, operasi, artificial intelligence, dan strategi bisnis. Setiap engagement disesuaikan untuk menyelesaikan tantangan bisnis nyata melalui eksekusi praktis dan hasil yang terukur.'}
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service) => {
              const Icon = serviceIcons[service.id as keyof typeof serviceIcons]
              return (
                <Link
                  key={service.id}
                  href={service.href}
                  className="group bg-white border border-[#E8E6F8] rounded-xl p-6 hover:shadow-lg transition-all duration-300"
                >
                  <div className="w-10 h-10 rounded-lg bg-[#2D1BB8]/[0.08] flex items-center justify-center mb-4">
                    <Icon className="w-5 h-5 text-[#2D1BB8]" />
                  </div>

                  <h3 className="text-lg font-bold text-[#0F0A2E] mb-1">
                    {service.title}
                  </h3>

                  <p className="text-xs font-medium text-[#2D1BB8] uppercase tracking-wider mb-3">
                    {service.subtitle}
                  </p>

                  <p className="text-sm text-[#4B4680] leading-relaxed mb-6">
                    {service.description}
                  </p>

                  <div className="inline-flex items-center gap-2 text-[#2D1BB8] font-medium text-sm group-hover:underline">
                    {t('common.exploreService')}
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </div>
                </Link>
              )
            })}
          </div>
        </div>
      </section>
    </main>
  )
}
