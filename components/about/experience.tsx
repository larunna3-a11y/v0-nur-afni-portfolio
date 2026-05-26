const experiences = [
  {
    period: 'Nov 2023 – Present',
    role: 'Digital Marketing Specialist',
    company: 'PT Ecotech Teknologi',
    bullets: [
      'Grew marketplace revenue from Rp95.7M to Rp180.4M within 4 months',
      'Generated Rp286M sales during major campaign periods',
      'Improved TikTok Ads ROAS from 2.28 to 11.05 through campaign restructuring',
      'Achieved peak ROAS of 96.2 via voucher campaigns',
      'Managed budgets in the Rp100–500M range across Meta Ads, TikTok Ads, and marketplace campaigns',
      'Led QCY HT15 & C30 product launch generating Rp91.8M on day one, 576 orders',
      'Managed affiliate campaigns: 200 orders, Rp36.2M GMV, 14.7 ROAS',
      'Achieved +19.37% conversion growth for QCY, +35.29% for Choetech',
      'Meta CPAS ROAS up to 24, GMV Rp26.9M',
    ],
  },
  {
    period: 'Jul 2023 – Jan 2024',
    role: 'Social Media Strategist (Jr. Officer)',
    company: 'Digital Krew',
    bullets: [
      'Grew @islamcendekia.id from 6.7K to 17K followers in 4 months (+189%)',
      'Generated 2M+ engagement through short-form content strategy',
      'Increased engagement rate +81.3%, impressions +62.9%',
      'Managed content planning and reporting for 3 brands',
    ],
  },
  {
    period: 'May 2023 – Jul 2023',
    role: 'Social Media Planner Intern',
    company: 'Tukangtulis.co (PT Hendrawan Media Artha)',
    bullets: [
      'Created content calendars and platform-specific strategies for Instagram and TikTok',
      'Conducted trend research and monitored campaign performance',
    ],
  },
]

export function Experience() {
  return (
    <section className="bg-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-[#0F0A2E]">Experience</h2>
        </div>
        
        {/* Timeline */}
        <div className="max-w-3xl mx-auto">
          <div className="border-l-2 border-[#2D1BB8] pl-8 space-y-12">
            {experiences.map((exp) => (
              <div key={exp.role} className="relative">
                {/* Dot */}
                <div className="absolute -left-[41px] top-0 w-4 h-4 bg-[#2D1BB8] rounded-full border-4 border-white" />
                
                {/* Content */}
                <p className="text-sm text-[#9B97C0]">{exp.period}</p>
                <h3 className="mt-1 text-xl font-bold text-[#0F0A2E]">{exp.role}</h3>
                <p className="text-[#F97316] font-medium">{exp.company}</p>
                
                {/* Bullets */}
                <ul className="mt-4 space-y-2">
                  {exp.bullets.map((bullet, index) => (
                    <li key={index} className="text-sm text-[#4B4680] flex items-start gap-2">
                      <span className="w-1.5 h-1.5 bg-[#2D1BB8] rounded-full mt-2 flex-shrink-0" />
                      {bullet}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
