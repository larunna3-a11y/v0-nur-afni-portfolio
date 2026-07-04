import { Search, Lightbulb, Map, Zap, BarChart2, CheckCircle } from 'lucide-react'

const steps = [
  { icon: Search,       label: 'Discovery',    description: 'Understanding your goals, challenges, and context.' },
  { icon: Lightbulb,   label: 'Research',     description: 'Competitor analysis, data review, and market mapping.' },
  { icon: Map,          label: 'Planning',     description: 'Scope, timeline, deliverables, and strategy alignment.' },
  { icon: Zap,          label: 'Execution',    description: 'Building, launching, and activating the agreed plan.' },
  { icon: BarChart2,   label: 'Optimization', description: 'Monitoring results and refining based on performance.' },
  { icon: CheckCircle, label: 'Delivery',     description: 'Final handover with documentation and recommendations.' },
]

export function ServiceProcess() {
  return (
    <div>
      <h2 className="text-2xl font-bold text-[#0F0A2E] mb-10">Working Process</h2>

      {/* Desktop horizontal timeline */}
      <div className="hidden md:block relative">
        {/* Connecting line */}
        <div className="absolute top-8 left-0 right-0 h-px bg-[#E8E6F8]" aria-hidden="true" />

        <div className="grid grid-cols-6 gap-4 relative">
          {steps.map((step, i) => {
            const Icon = step.icon
            return (
              <div key={step.label} className="flex flex-col items-center text-center gap-3">
                {/* Node */}
                <div className="relative z-10 w-16 h-16 rounded-full bg-white border-2 border-[#E8E6F8] flex items-center justify-center group hover:border-[#2D1BB8] hover:bg-[#F8F7FF] transition-colors duration-200">
                  <Icon className="w-6 h-6 text-[#2D1BB8]" />
                  <span className="absolute -top-1 -right-1 w-5 h-5 rounded-full bg-[#2D1BB8] text-white text-[10px] font-bold flex items-center justify-center">
                    {i + 1}
                  </span>
                </div>
                <p className="text-sm font-semibold text-[#0F0A2E]">{step.label}</p>
                <p className="text-xs text-[#4B4680] leading-relaxed">{step.description}</p>
              </div>
            )
          })}
        </div>
      </div>

      {/* Mobile vertical timeline */}
      <div className="md:hidden space-y-6">
        {steps.map((step, i) => {
          const Icon = step.icon
          return (
            <div key={step.label} className="flex items-start gap-4">
              <div className="relative flex-shrink-0 w-10 h-10 rounded-full bg-white border-2 border-[#E8E6F8] flex items-center justify-center">
                <Icon className="w-4 h-4 text-[#2D1BB8]" />
                <span className="absolute -top-1 -right-1 w-4 h-4 rounded-full bg-[#2D1BB8] text-white text-[9px] font-bold flex items-center justify-center">
                  {i + 1}
                </span>
              </div>
              <div>
                <p className="text-sm font-semibold text-[#0F0A2E]">{step.label}</p>
                <p className="text-xs text-[#4B4680] mt-1 leading-relaxed">{step.description}</p>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}
