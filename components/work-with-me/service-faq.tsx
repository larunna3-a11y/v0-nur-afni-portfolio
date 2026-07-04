'use client'

import { useState } from 'react'
import { Plus, Minus } from 'lucide-react'

export interface FAQItem {
  question: string
  answer: string
}

const defaultFAQs: FAQItem[] = [
  {
    question: 'Can projects be customized?',
    answer: 'Yes. Every engagement starts with a discovery conversation to understand your specific needs, goals, and budget. Packages are starting points, not rigid contracts.',
  },
  {
    question: 'Do you work remotely?',
    answer: 'Primarily yes. All collaboration happens via Zoom, Google Meet, WhatsApp, or Notion. For Jakarta-based clients, in-person sessions can be arranged on request.',
  },
  {
    question: 'Can you collaborate with internal teams?',
    answer: 'Absolutely. I am experienced working alongside internal marketing, operations, and tech teams — whether as a strategic lead, execution partner, or consultant.',
  },
  {
    question: 'How does payment work?',
    answer: 'For project-based work, a 50% deposit is required before work begins and the remainder on delivery. Monthly retainers are invoiced at the start of each month. Payment is via bank transfer.',
  },
  {
    question: 'How long does a project usually take?',
    answer: 'It depends on scope. A strategy session can happen within days. A full growth audit typically takes 1–2 weeks. Build projects range from 2 weeks to 3 months depending on complexity.',
  },
  {
    question: 'Do you provide ongoing support?',
    answer: 'Yes. Post-delivery support is available as a monthly retainer or hourly support package. I recommend at least a 30-day check-in after any project handover.',
  },
]

interface ServiceFAQProps {
  faqs?: FAQItem[]
}

export function ServiceFAQ({ faqs = defaultFAQs }: ServiceFAQProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  return (
    <div>
      <h2 className="text-2xl font-bold text-[#0F0A2E] mb-8">Frequently Asked Questions</h2>
      <div className="space-y-3">
        {faqs.map((item, i) => {
          const isOpen = openIndex === i
          return (
            <div
              key={i}
              className="bg-white border border-[#E8E6F8] rounded-xl overflow-hidden transition-shadow duration-200 hover:shadow-sm"
            >
              <button
                onClick={() => setOpenIndex(isOpen ? null : i)}
                className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left"
                aria-expanded={isOpen}
              >
                <span className="text-sm font-semibold text-[#0F0A2E]">{item.question}</span>
                <span className="flex-shrink-0 w-6 h-6 rounded-full border border-[#E8E6F8] flex items-center justify-center text-[#2D1BB8]">
                  {isOpen ? <Minus className="w-3.5 h-3.5" /> : <Plus className="w-3.5 h-3.5" />}
                </span>
              </button>
              <div
                className={[
                  'grid transition-all duration-300 ease-out',
                  isOpen ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]',
                ].join(' ')}
              >
                <div className="overflow-hidden">
                  <p className="px-6 pb-5 text-sm text-[#4B4680] leading-relaxed">{item.answer}</p>
                </div>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}
