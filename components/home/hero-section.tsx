const stats = [
  { value: 'Rp1,8B', label: 'Peak Revenue' },
  { value: '31x', label: 'Revenue Growth' },
  { value: '+189%', label: 'Follower Growth' },
]

export function HeroSection() {
  return (
    <section className="relative bg-[#2D1BB8] overflow-hidden">
      {/* Glow effects */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#F97316] rounded-full blur-3xl opacity-20 translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#4A35D4] rounded-full blur-3xl opacity-30 -translate-x-1/2 translate-y-1/2" />
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-8 lg:px-8 py-6 lg:py-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Column */}
          <div className="order-2 lg:order-1">
            {/* Availability Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[#Ffffff] bg-transparent mb-6">
              <span className="w-2 h-2 bg-[#06D001] rounded-full animate-pulse" />
              <span className="text-[#06D001] text-sm font-medium">Available for Projects</span>
            </div>
            
            {/* Heading */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight">
              {"Hi, I'm "}
              <span className="text-[#F97316]">Nur Afni</span>
            </h1>
            
            {/* Subtitle */}
            <p className="mt-4 text-xl text-[#E8E6F8]">
              Helping brands grow through social media, e-commerce, and data-driven marketing.
            </p>
            
            {/* Bio */}
            <p className="mt-6 text-[#9B97C0] leading-relaxed max-w-lg">
              Currently managing brands while building side projects and sharing insights on growth, systems, and creativity.
            </p>
            
            {/* Stats Cards */}
            <div className="mt-10 grid grid-cols-3 gap-4">
              {stats.map((stat) => (
                <div
                  key={stat.label}
                  className="glass-card rounded-xl p-4 text-center"
                >
                  <div className="text-xl sm:text-2xl font-bold text-white">{stat.value}</div>
                  <div className="text-xs text-[#9B97C0] mt-1">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column - Profile Image with floating labels */}
          <div className="order-1 lg:order-2 flex justify-center lg:justify-end">
            <div className="relative w-72 h-72 sm:w-80 sm:h-80 lg:w-[400px] lg:h-[400px]">

              {/* Subtle border frame connecting the four corners */}
              <div className="absolute inset-8 border border-white/15 rounded-none" />

              {/* Top-left label */}
              <div className="absolute top-0 left-0 flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/20 rounded-full px-3 py-2 z-10">
                <span className="text-blue-300 text-sm">📈</span>
                <span className="text-white text-xs font-medium whitespace-nowrap">Marketplace Growth</span>
              </div>

              {/* Top-right label */}
              <div className="absolute top-0 right-0 flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/20 rounded-full px-3 py-2 z-10">
                <span className="text-purple-300 text-sm">🤖</span>
                <span className="text-white text-xs font-medium whitespace-nowrap">AI Product Builder</span>
              </div>

              {/* Bottom-left label */}
              <div className="absolute bottom-0 left-0 flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/20 rounded-full px-3 py-2 z-10">
                <span className="text-sky-300 text-sm">💻</span>
                <span className="text-white text-xs font-medium whitespace-nowrap">Digital Systems</span>
              </div>

              {/* Bottom-right label */}
              <div className="absolute bottom-0 right-0 flex items-center gap-2 bg-[#1a0f6e]/80 backdrop-blur-md border border-white/20 rounded-full px-3 py-2 z-10">
                <span className="bg-red-500 text-white text-[10px] font-bold px-1.5 py-0.5 rounded">ID</span>
                <span className="text-white text-xs font-medium whitespace-nowrap">Based in Indonesia</span>
              </div>

              {/* Center portrait */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-44 h-44 sm:w-52 sm:h-52 lg:w-60 lg:h-60 rounded-full overflow-hidden border-4 border-white/25 shadow-2xl flex-shrink-0">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src="/images/nur-afni-hero.png"
                    alt="Nur Afni"
                    className="w-full h-full object-cover object-top"
                  />
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
