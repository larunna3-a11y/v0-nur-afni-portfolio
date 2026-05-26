import { Target, ClipboardList, BarChart3, RefreshCw } from 'lucide-react'

const features = [
  {
    icon: Target,
    title: 'Creator Matching',
    description: 'Finding the right KOL/affiliator for your product category, audience, and budget',
  },
  {
    icon: ClipboardList,
    title: 'Campaign Briefs',
    description: 'Clear, conversion-focused briefs that get creators performing on-brand',
  },
  {
    icon: BarChart3,
    title: 'Performance Tracking',
    description: 'GMV, orders, ROAS, and engagement tracked per creator per campaign',
  },
  {
    icon: RefreshCw,
    title: 'End-to-End Management',
    description: 'From shortlisting to posting schedule to final report',
  },
]

const platforms = [
  {
    name: 'TikTok Affiliate',
    description: 'Short-form video commerce, product links, live selling',
  },
  {
    name: 'Shopee Affiliate',
    description: 'Marketplace-integrated affiliate with voucher and flash sale support',
  },
  {
    name: 'Instagram KOL',
    description: 'Brand awareness and engagement campaigns via Reels and Stories',
  },
]

const highlights = [
  {
    bg: 'bg-[#F97316]',
    label: 'Affiliate Campaign',
    stat: '200 Orders · Rp36.2M GMV',
    result: '14.7 ROAS',
  },
  {
    bg: 'bg-[#2D1BB8]',
    label: 'Multi-Platform KOL',
    stat: '2M+ Engagement',
    result: 'Instagram & TikTok',
  },
  {
    bg: 'bg-[#1A0F7A]',
    label: 'Creator-Led Launch',
    stat: '576 Orders on Day One',
    result: 'QCY Product Launch',
  },
]

const steps = ['Brief', 'Creator Match', 'Activate', 'Track', 'Report']

export default function KOLNetworkPage() {
  return (
    <div className="pt-16">
      {/* Header */}
      <section className="bg-[#2D1BB8] py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl font-bold text-white">KOL & Affiliator Strategy</h1>
          <p className="mt-4 text-[#9B97C0] max-w-2xl mx-auto">
            Connecting brands with the right creators — from brief to measurable results.
          </p>
        </div>
      </section>

      {/* What I Offer */}
      <section className="bg-[#F8F7FF] py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-[#0F0A2E] text-center mb-10">What I Offer</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature) => (
              <div
                key={feature.title}
                className="bg-white border border-[#E8E6F8] rounded-2xl p-6 text-center"
              >
                <div className="w-12 h-12 mx-auto rounded-xl bg-[#2D1BB8]/[0.08] flex items-center justify-center mb-4">
                  <feature.icon className="w-6 h-6 text-[#2D1BB8]" />
                </div>
                <h3 className="font-semibold text-[#0F0A2E] mb-2">{feature.title}</h3>
                <p className="text-sm text-[#4B4680]">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Platform Coverage */}
      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-[#0F0A2E] text-center mb-10">Platform Coverage</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {platforms.map((platform) => (
              <div
                key={platform.name}
                className="border border-[#E8E6F8] rounded-2xl p-6"
              >
                <h3 className="font-semibold text-[#2D1BB8] mb-2">{platform.name}</h3>
                <p className="text-sm text-[#4B4680]">{platform.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Campaign Highlights */}
      <section className="bg-[#F8F7FF] py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-[#0F0A2E] text-center mb-10">Campaign Highlights</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {highlights.map((item) => (
              <div
                key={item.label}
                className={`${item.bg} rounded-2xl p-8 text-white text-center`}
              >
                <p className="text-sm uppercase tracking-wider opacity-70">{item.label}</p>
                <p className="mt-3 text-2xl font-bold">{item.stat}</p>
                <p className="mt-2 text-[#F97316] font-semibold">{item.result}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-[#0F0A2E] text-center mb-10">How It Works</h2>
          <div className="flex flex-wrap justify-center items-center gap-4">
            {steps.map((step, index) => (
              <div key={step} className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-[#2D1BB8] text-white flex items-center justify-center font-bold">
                  {index + 1}
                </div>
                <span className="font-medium text-[#0F0A2E]">{step}</span>
                {index < steps.length - 1 && (
                  <svg className="w-6 h-6 text-[#E8E6F8] hidden sm:block" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
