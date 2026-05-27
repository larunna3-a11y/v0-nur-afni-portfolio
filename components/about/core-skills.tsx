const skillCategories = [
  {
    category: 'Strategy',
    skills: ['Digital Marketing Strategy', 'Campaign Planning & Execution', 'Product Growth Strategy', 'Full-Funnel Strategy', 'Conversion Rate Optimization'],
  },
  {
    category: 'Social & Content',
    skills: ['Instagram & TikTok Growth', 'Content Planning & Calendar', 'Reels & Short-Form Video', 'Copywriting', 'Trend Research'],
  },
  {
    category: 'Paid Ads',
    skills: ['Meta Ads', 'TikTok Ads', 'Shopee CPAS', 'Meta CPAS', 'Budget Allocation', 'ROAS / ROI Analysis'],
  },
  {
    category: 'E-Commerce',
    skills: ['Marketplace Optimization', 'Product Launch Campaigns', 'Flash Sale & Seasonal Campaigns', 'Voucher Strategy', 'Livestream Commerce'],
  },
  {
    category: 'KOL & Affiliate & Affiliate',
    skills: ['KOL & Affiliate & Influencer Campaigns', 'Affiliate Campaign Strategy', 'TikTok Affiliate', 'Shopee Affiliate', 'Creator Briefs'],
  },
]

export function CoreSkills() {
  return (
    <section className="bg-[#F8F7FF] py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-[#0F0A2E]">Core Skills</h2>
        </div>

        {/* Skills Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((cat) => (
            <div
              key={cat.category}
              className="bg-white border border-[#E8E6F8] rounded-2xl p-6"
            >
              <h3 className="text-xs font-semibold uppercase tracking-widest text-[#2D1BB8] mb-4">
                {cat.category}
              </h3>
              <div className="flex flex-wrap gap-2">
                {cat.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1 bg-[#E8E6F8] text-[#4B4680] rounded-full text-sm"
                  >
                    {skill}
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
