import Image from 'next/image'

const stats = [
  { value: 'Rp760M', label: 'Peak Revenue' },
  { value: '31x', label: 'Revenue Growth' },
  { value: '+189%', label: 'Follower Growth' },
]

export function HeroSection() {
  return (
    <section className="relative bg-[#2D1BB8] overflow-hidden">
      {/* Glow effects */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#F97316] rounded-full blur-3xl opacity-20 translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#4A35D4] rounded-full blur-3xl opacity-30 -translate-x-1/2 translate-y-1/2" />
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Column */}
          <div className="order-2 lg:order-1">
            {/* Availability Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[#F97316] bg-transparent mb-6">
              <span className="w-2 h-2 bg-[#F97316] rounded-full animate-pulse" />
              <span className="text-[#F97316] text-sm font-medium">Available for Projects</span>
            </div>
            
            {/* Heading */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight">
              {"Hi, I'm "}
              <span className="text-[#F97316]">Nur Afni</span>
            </h1>
            
            {/* Subtitle */}
            <p className="mt-4 text-xl text-[#E8E6F8]">
              Digital Marketing Specialist
            </p>
            
            {/* Bio */}
            <p className="mt-6 text-[#9B97C0] leading-relaxed max-w-lg">
              3+ years scaling brands across social media, paid ads, and marketplaces. I turn campaigns into measurable growth — from Rp24M to Rp760M in 19 months (31x).
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
          
          {/* Right Column - Profile Image */}
          <div className="order-1 lg:order-2 flex justify-center lg:justify-end">
            <div className="relative">
              {/* Purple glow halo */}
              <div className="absolute inset-0 bg-[#4A35D4] rounded-full blur-2xl opacity-50 scale-110" />
              <div className="relative w-64 h-64 sm:w-72 sm:h-72 lg:w-80 lg:h-80 rounded-full border-4 border-white/13 overflow-hidden">
                <Image
                  src="public/nurafni.jpg"
                  alt="Nur Afni - Digital Marketing Specialist"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
