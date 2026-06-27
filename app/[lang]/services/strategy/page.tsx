'use client'

import Link from 'next/link'
import { useParams } from 'next/navigation'
import { Target, ArrowRight, Check } from 'lucide-react'
import { getTranslation } from '@/lib/use-translations'

export default function StrategyPage() {
  const params = useParams()
  const lang = (params.lang as string) || 'en'

  const t = (key: string) => getTranslation(lang as any, key)

  const services = [
    t('services.strategy.services.0'),
    t('services.strategy.services.1'),
    t('services.strategy.services.2'),
    t('services.strategy.services.3'),
    t('services.strategy.services.4'),
    t('services.strategy.services.5'),
    t('services.strategy.services.6'),
    t('services.strategy.services.7'),
  ]

  const processSteps = [
    {
      title: t('services.strategy.processSteps.0.title'),
      description: t('services.strategy.processSteps.0.description'),
    },
    {
      title: t('services.strategy.processSteps.1.title'),
      description: t('services.strategy.processSteps.1.description'),
    },
    {
      title: t('services.strategy.processSteps.2.title'),
      description: t('services.strategy.processSteps.2.description'),
    },
    {
      title: t('services.strategy.processSteps.3.title'),
      description: t('services.strategy.processSteps.3.description'),
    },
  ]

  const metrics = [
    t('services.strategy.metrics.0'),
    t('services.strategy.metrics.1'),
    t('services.strategy.metrics.2'),
    t('services.strategy.metrics.3'),
    t('services.strategy.metrics.4'),
  ]

  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-[#F8F7FF] py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-12 rounded-lg bg-[#2D1BB8]/[0.08] flex items-center justify-center">
              <Target className="w-6 h-6 text-[#2D1BB8]" />
            </div>
            <Link
              href={`/${lang}/services`}
              className="text-[#2D1BB8] font-medium hover:underline flex items-center gap-1 text-sm"
            >
              ← {t('common.back')}
            </Link>
          </div>

          <h1 className="text-4xl sm:text-5xl font-bold text-[#0F0A2E] mb-4">
            {t('services.strategy.title')}
          </h1>
          <p className="text-lg text-[#2D1BB8] font-semibold mb-4">
            {t('services.strategy.subtitle')}
          </p>
          <p className="text-lg text-[#4B4680] max-w-3xl leading-relaxed">
            {t('services.strategy.heroDescription')}
          </p>
        </div>
      </section>

      {/* Main Description */}
      <section className="py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-12 mb-16">
            <div className="lg:col-span-2">
              <h2 className="text-3xl font-bold text-[#0F0A2E] mb-6">
                {t('services.strategy.whyChoose')}
              </h2>
              <p className="text-lg text-[#4B4680] leading-relaxed mb-6">
                {t('services.strategy.whyDescription')}
              </p>
              <p className="text-[#4B4680] leading-relaxed">
                {t('services.strategy.description')}
              </p>
            </div>

            {/* Ideal For */}
            <div className="bg-[#F8F7FF] rounded-xl p-8">
              <h3 className="text-sm font-semibold uppercase tracking-wider text-[#2D1BB8] mb-4">
                Ideal For
              </h3>
              <p className="text-[#0F0A2E] font-semibold mb-3">
                {t('services.strategy.idealFor')}
              </p>
              <Link
                href={`/${lang}/contact`}
                className="inline-flex items-center gap-2 bg-[#2D1BB8] text-white px-4 py-2 rounded-lg font-medium hover:bg-[#1f0b80] transition-colors"
              >
                {t('common.contactUs')}
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

          {/* Services */}
          <div className="bg-[#F8F7FF] rounded-xl p-8 sm:p-12 mb-16">
            <h2 className="text-2xl font-bold text-[#0F0A2E] mb-8">Strategic Services</h2>
            <div className="grid sm:grid-cols-2 gap-6">
              {services.map((service, idx) => (
                <div key={idx} className="flex gap-3">
                  <Check className="w-5 h-5 text-[#2D1BB8] flex-shrink-0 mt-0.5" />
                  <span className="text-[#4B4680]">{service}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Process */}
          <div className="mb-16">
            <h2 className="text-2xl font-bold text-[#0F0A2E] mb-8">
              {t('services.strategy.processTitle')}
            </h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {processSteps.map((step, idx) => (
                <div key={idx} className="border border-[#E8E6F8] rounded-lg p-6 hover:shadow-lg transition-shadow">
                  <div className="w-8 h-8 rounded-full bg-[#2D1BB8] text-white flex items-center justify-center font-bold mb-4">
                    {idx + 1}
                  </div>
                  <h3 className="font-bold text-[#0F0A2E] mb-2">{step.title}</h3>
                  <p className="text-sm text-[#4B4680]">{step.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Metrics */}
          <div className="bg-[#F8F7FF] rounded-xl p-8 sm:p-12">
            <h2 className="text-2xl font-bold text-[#0F0A2E] mb-8">
              {t('services.strategy.metricsTitle')}
            </h2>
            <div className="grid sm:grid-cols-2 gap-6">
              {metrics.map((metric, idx) => (
                <div key={idx} className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-[#2D1BB8] rounded-full mt-2 flex-shrink-0" />
                  <span className="text-[#4B4680]">{metric}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-[#2D1BB8] text-white py-16 sm:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">
            Ready to Transform Your Strategy?
          </h2>
          <p className="text-lg text-blue-100 mb-8">
            Let&apos;s build a data-driven growth strategy that compounds over time.
          </p>
          <Link
            href={`/${lang}/contact`}
            className="inline-flex items-center gap-2 bg-white text-[#2D1BB8] px-8 py-3 rounded-lg font-bold hover:bg-blue-50 transition-colors"
          >
            {t('common.contactUs')}
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </main>
  )
}
