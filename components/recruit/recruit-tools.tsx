'use client'

const toolCategories = [
  {
    category: 'Marketplace Platforms',
    tools: ['Shopee Ads', 'TikTok Shop', 'Lazada Ads', 'Marketplace APIs', 'Affiliate Platforms'],
  },
  {
    category: 'Marketing & Advertising',
    tools: ['Meta Ads Manager', 'Google Ads', 'TikTok Ads Manager', 'Affilitracks', 'Influencer Networks'],
  },
  {
    category: 'Analytics & Tracking',
    tools: ['Google Analytics', 'Looker Studio', 'Excel/Sheets', 'Custom Dashboards', 'ROAS Tracking'],
  },
  {
    category: 'Creative Tools',
    tools: ['Figma', 'Canva', 'Adobe Suite', 'Video Editing (CapCut)', 'Design Systems'],
  },
  {
    category: 'Project & Collaboration',
    tools: ['Notion', 'Google Workspace', 'Monday.com', 'Slack', 'Airtable'],
  },
  {
    category: 'AI & Automation',
    tools: ['ChatGPT', 'AI Content Tools', 'Zapier', 'IFTTT', 'Custom API Integration'],
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
