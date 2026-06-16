import Link from 'next/link'

const works = [
  {
    category: 'E-Commerce Management',
    brand: 'Priskila',
    result: 'Rp24M → Rp982M (31x growth)',
    bg: 'bg-[#2D1BB8]',
    link: '/portfolio/ecommerce-growth',
  },
  {
    category: 'Product Launch',
    brand: 'QCY HT15 & C30',
    result: 'Rp91.8M revenue on launch day',
    bg: 'bg-[#F97316]',
    link: '/portfolio/qcy-case-study',
  },
  {
    category: 'Social Media',
    brand: 'Islamcendekia.id',
    result: '+189% follower growth in 4 months',
    bg: 'bg-[#1A0F7A]',
    link: '/portfolio/islam-cendekia',
  },
]

export function SelectedWork() {
  return (
    <section className="bg-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-[#0F0A2E]">Selected Work</h2>
          <p className="mt-4 text-[#4B4680]">Real campaigns. Real numbers.</p>
        </div>

        {/* Works Grid */}
        <div className="grid md:grid-cols-3 gap-6">
          {works.map((work) => {
            const content = (
              <>
                <p className="text-sm uppercase tracking-wider opacity-70">{work.category}</p>
                <h3 className="mt-3 text-xl font-bold">{work.brand}</h3>
                <p className="mt-2 text-[#ffffffb6] font-semibold">{work.result}</p>
              </>
            )

            return work.link ? (
              <Link
                key={work.brand}
                href={work.link}
                className={`${work.bg} rounded-2xl p-8 text-white hover:scale-105 transition-transform`}
              >
                {content}
              </Link>
            ) : (
              <div
                key={work.brand}
                className={`${work.bg} rounded-2xl p-8 text-white`}
              >
                {content}
              </div>
            )
          })}
        </div>

        {/* Link */}
        <div className="mt-10 text-center">
          <Link
            href="/portfolio"
            className="inline-flex items-center gap-2 text-[#2D1BB8] font-medium hover:underline"
          >
            View full portfolio
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  )
}
