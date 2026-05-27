const stats = [
  { value: 'Rp760M', label: 'Peak Revenue' },
  { value: '31x', label: 'Revenue Growth' },
  { value: '21.6K', label: 'Peak Orders' },
  { value: '2M+', label: 'Total Engagement' },
  { value: 'Rp500M+', label: 'Budget Managed' },
]

export function StatsBar() {
  return (
    <section className="bg-white border-y border-[#E8E6F8] py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-2xl font-bold text-[#2D1BB8]">{stat.value}</div>
              <div className="text-xs text-[#9B97C0] mt-1 uppercase tracking-wider">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
