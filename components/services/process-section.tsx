const steps = [
  {
    number: '01',
    title: 'Brief',
    description: 'You share your goals, budget, and timeline',
  },
  {
    number: '02',
    title: 'Strategy',
    description: 'I build a campaign plan tailored to your brand',
  },
  {
    number: '03',
    title: 'Execute',
    description: 'I run the campaigns across all agreed platforms',
  },
  {
    number: '04',
    title: 'Report',
    description: 'Weekly/monthly reports with real numbers',
  },
  {
    number: '05',
    title: 'Optimize',
    description: 'We improve based on what the data shows',
  },
]

export function ProcessSection() {
  return (
    <section className="bg-[#0F0A2E] py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-white">How We Work Together</h2>
        </div>
        
        {/* Steps */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-6">
          {steps.map((step) => (
            <div key={step.number} className="text-center">
              <div className="text-4xl font-bold text-[#F97316] mb-2">{step.number}</div>
              <h3 className="text-lg font-semibold text-white mb-2">{step.title}</h3>
              <p className="text-sm text-[#9B97C0]">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
