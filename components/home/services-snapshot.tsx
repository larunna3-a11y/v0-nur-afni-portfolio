import Link from 'next/link'
import { useTranslations } from 'next-intl'
import { Smartphone, ShoppingCart, Megaphone, Compass, Users } from 'lucide-react'

const services = [
  { icon: Smartphone, key: 'socialMedia' },
  { icon: ShoppingCart, key: 'ecommerce' },
  { icon: Megaphone, key: 'paidAds' },
  { icon: Compass, key: 'strategy' },
  { icon: Users, key: 'kol' },
]

export function ServicesSnapshot() {
  const t = useTranslations('home.servicesSnapshot')
  return (
    <section className="bg-[#F8F7FF] py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-[#0F0A2E]">{t('title')}</h2>
          <p className="mt-4 text-[#4B4680] max-w-2xl mx-auto">
            {t('subtitle')}
          </p>
        </div>
        
        {/* Services Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service) => (
            <div
              key={service.key}
              className="bg-white border border-[#E8E6F8] rounded-2xl p-6 hover:border-[#2D1BB8] hover:shadow-lg transition-all duration-300 group"
            >
              <div className="w-12 h-12 rounded-xl bg-[#2D1BB8]/[0.08] flex items-center justify-center mb-4">
                <service.icon className="w-6 h-6 text-[#2D1BB8]" />
              </div>
              <h3 className="text-lg font-semibold text-[#0F0A2E] group-hover:text-[#2D1BB8] transition-colors">
                {t(`items.${service.key}.title`)}
              </h3>
              <p className="mt-2 text-sm text-[#4B4680] leading-relaxed">
                {t(`items.${service.key}.description`)}
              </p>
            </div>
          ))}
        </div>
        
        {/* Link */}
        <div className="mt-10 text-center">
          <Link
            href="/services"
            className="inline-flex items-center gap-2 text-[#2D1BB8] font-medium hover:underline"
          >
            {t('viewAll')}
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  )
}
