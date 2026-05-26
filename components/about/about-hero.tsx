export function AboutHero() {
  return (
    <section className="bg-[#2D1BB8] py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Left Column */}
          <div>
            <span className="inline-block px-3 py-1 text-sm text-[#F97316] border border-[#F97316] rounded-full mb-4">
              About Me
            </span>
            <h1 className="text-4xl sm:text-5xl font-bold text-white">Nur Afni</h1>
            <p className="mt-2 text-xl text-[#E8E6F8]">
              Digital Marketing Specialist · Jakarta, Indonesia
            </p>
          </div>
          
          {/* Right Column */}
          <div className="space-y-6 text-[#ffffff] leading-relaxed">
            <p>
              {"I'm a Digital Marketing Specialist with 3+ years of experience helping consumer, tech, and education brands grow across social media, paid ads, and marketplace platforms."}
            </p>
            <p>
              {"My work sits at the intersection of strategy and execution — I don't just plan campaigns, I run them end-to-end, optimize in real time, and report on what actually matters: revenue, ROAS, and sustainable growth."}
            </p>
            <p>
              {"Based in Jakarta, I've worked across Shopee, TikTok Shop, Tokopedia, Lazada, Meta Ads, and TikTok Ads — managing budgets up to Rp500M and campaigns that have driven Rp286M in a single season."}
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
