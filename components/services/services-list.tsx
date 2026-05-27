import { Smartphone, ShoppingCart, Megaphone, Compass, Users } from 'lucide-react'

const services = [
  {
    id: 'social-media',
    icon: Smartphone,
    title: 'Social Media Management',
    description: 'Full Instagram and TikTok management — from strategy and content calendar to posting, community engagement, and monthly performance reporting.',
    deliverables: [
      'Monthly content calendar',
      'Platform-specific creative direction',
      'Reels & short-form video strategy',
      'Community management',
      'Monthly performance report',
    ],
    tools: ['Meta Business Suite', 'TikTok Creative Center', 'Canva', 'CapCut', 'Google Sheets'],
    idealFor: 'Brands building organic presence on Instagram and TikTok',
  },
  {
    id: 'ecommerce',
    icon: ShoppingCart,
    title: 'E-Commerce End-to-End Management',
    description: 'Complete marketplace management across Shopee, TikTok Shop, Tokopedia, Lazada, and Blibli — from product listing optimization to campaign execution and revenue reporting.',
    deliverables: [
      'Product listing optimization',
      'Flash sale & seasonal campaign planning',
      'Voucher and discount strategy',
      'Livestream commerce coordination',
      'Monthly GMV & revenue report',
    ],
    tools: ['Shopee Seller Center', 'TikTok Shop Seller Center', 'Tokopedia', 'Lazada Seller Center', 'Blibli', 'Google Sheets'],
    idealFor: 'Brands selling on Indonesian marketplaces who need a dedicated growth partner',
  },
  {
    id: 'paid-ads',
    icon: Megaphone,
    title: 'Paid Ads (Social & Marketplace)',
    description: 'Performance-driven ad campaigns on Meta, TikTok, and Shopee CPAS — built to maximize ROAS and minimize wasted spend.',
    deliverables: [
      'Campaign structure & audience setup',
      'Creative direction & ad copy',
      'A/B testing & optimization',
      'Budget allocation strategy',
      'Weekly and monthly ROAS reports',
    ],
    tools: ['Meta Business Suite', 'TikTok Ads Manager', 'Shopee CPAS', 'TikTok Creative Center'],
    idealFor: 'Brands with ad budget who want measurable return, not just impressions',
  },
  {
    id: 'strategy',
    icon: Compass,
    title: 'Digital Strategy',
    description: 'A clear, data-informed growth plan that connects your social media, paid ads, marketplace, and creator strategy into one cohesive funnel.',
    deliverables: [
      'Full-funnel strategy deck',
      'Channel prioritization',
      'Campaign calendar',
      'KPI framework',
      'Quarterly review and optimization plan',
    ],
    tools: ['Google Trends', 'TikTok Creative Center', 'Google Sheets', 'Google Workspace'],
    idealFor: 'Brands launching a new product or entering a new platform and need a roadmap',
  },
  {
    id: 'KOL & Affiliate',
    icon: Users,
    title: 'KOL & Affiliate & Affiliator Strategy',
    description: 'End-to-end creator and affiliate campaign management — from identifying the right creators to tracking GMV and ROAS per campaign.',
    deliverables: [
      'KOL & Affiliate/creator shortlisting & briefs',
      'Campaign concept & talking points',
      'Posting schedule coordination',
      'Affiliate link/voucher setup',
      'Performance report (GMV, orders, ROAS)',
    ],
    tools: ['TikTok Affiliate', 'Shopee Affiliate', 'TikTok Creative Center', 'Canva'],
    idealFor: 'Brands wanting to leverage creators for conversion, not just awareness',
  },
]

export function ServicesList() {
  return (
    <section>
      {services.map((service, index) => (
        <div
          key={service.id}
          id={service.id}
          className={index % 2 === 0 ? 'bg-white' : 'bg-[#F8F7FF]'}
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
            <div className="grid lg:grid-cols-2 gap-12 items-start">
              {/* Left - Info */}
              <div>
                <div className="w-14 h-14 rounded-xl bg-[#2D1BB8]/[0.08] flex items-center justify-center mb-6">
                  <service.icon className="w-7 h-7 text-[#2D1BB8]" />
                </div>
                <h2 className="text-2xl font-bold text-[#0F0A2E]">{service.title}</h2>
                <p className="mt-4 text-[#4B4680] leading-relaxed">{service.description}</p>
                <p className="mt-6 text-sm italic text-[#9B97C0]">
                  <span className="font-medium">Ideal for:</span> {service.idealFor}
                </p>
              </div>

              {/* Right - Deliverables & Tools */}
              <div className="space-y-8">
                {/* Deliverables */}
                <div>
                  <h3 className="text-sm font-semibold uppercase tracking-wider text-[#2D1BB8] mb-4">
                    Deliverables
                  </h3>
                  <ul className="space-y-2">
                    {service.deliverables.map((item) => (
                      <li key={item} className="flex items-start gap-3 text-[#4B4680]">
                        <span className="w-2 h-2 bg-[#2D1BB8] rounded-full mt-2 flex-shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Tools */}
                <div>
                  <h3 className="text-sm font-semibold uppercase tracking-wider text-[#2D1BB8] mb-4">
                    Tools
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {service.tools.map((tool) => (
                      <span
                        key={tool}
                        className="px-3 py-1 bg-[#E8E6F8] text-[#4B4680] rounded-full text-sm"
                      >
                        {tool}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </section>
  )
}
