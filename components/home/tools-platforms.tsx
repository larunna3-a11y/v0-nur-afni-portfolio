const tools = [
  'Meta Business Suite',
  'TikTok Ads Manager',
  'Shopee Seller Center',
  'TikTok Shop',
  'Tokopedia',
  'Lazada',
  'Blibli',
  'Shopee CPAS',
  'TikTok Affiliate',
  'Shopee Affiliate',
  'Canva',
  'CapCut',
  'Google Sheets',
  'Google Workspace',
  'Google Trends',
]

export function ToolsPlatforms() {
  return (
    <section className="bg-[#F8F7FF] py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-[#0F0A2E]">Tools & Platforms</h2>
          <p className="mt-4 text-[#4B4680]">The stack I work with daily.</p>
        </div>
        
        {/* Tools Grid */}
        <div className="flex flex-wrap justify-center gap-3">
          {tools.map((tool) => (
            <span
              key={tool}
              className="px-4 py-2 bg-[#E8E6F8] text-[#4B4680] rounded-full text-sm font-medium"
            >
              {tool}
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}
