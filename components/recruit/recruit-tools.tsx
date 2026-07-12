'use client'

const toolCategories = [
  {
    category: 'Paid Ads & Analytics',
    tools: ['Meta Business Suite', 'TikTok Ads Manager', 'Google Trends', 'TikTok Creative Center'],
  },
  {
    category: 'Marketplace Platforms',
    tools: ['Shopee Seller Center', 'TikTok Shop Seller Center', 'Tokopedia', 'Lazada Seller Center'],
  },
  {
    category: 'Content & Creative',
    tools: ['Canva', 'CapCut'],
  },
  {
    category: 'Reporting & Collaboration',
    tools: ['Google Sheets', 'Google Workspace'],
  },
  {
    category: 'Affiliate & Marketplace',
    tools: ['Shopee Affiliate', 'TikTok Affiliate'],
  },
]

export function RecruitTools() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-[#0F0A2E] mb-2">Tools & Platforms</h2>
          <p className="text-[#4B4680]">Proficient across industry-standard and emerging platforms</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {toolCategories.map((cat, idx) => (
            <div key={idx}>
              <h3 className="text-lg font-bold text-[#0F0A2E] mb-4">{cat.category}</h3>
              <div className="flex flex-wrap gap-2">
                {cat.tools.map((tool, tidx) => (
                  <span
                    key={tidx}
                    className="px-3 py-1.5 bg-[#2D1BB8]/10 border border-[#2D1BB8]/20 rounded-lg text-sm font-medium text-[#2D1BB8]"
                  >
                    {tool}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
