'use client'

import { useState, useRef, useEffect } from 'react'
import Link from 'next/link'
import { Lightbulb, TrendingUp, Monitor, GraduationCap, ChevronRight } from 'lucide-react'

const categories = [
  {
    id: 'consulting',
    icon: Lightbulb,
    title: 'Consulting',
    description: 'Strategy & Growth',
  },
  {
    id: 'marketing',
    icon: TrendingUp,
    title: 'Marketing',
    description: 'Marketplace & Ads',
  },
  {
    id: 'builder',
    icon: Monitor,
    title: 'Builder',
    description: 'Websites & AI Systems',
  },
  {
    id: 'learning',
    icon: GraduationCap,
    title: 'Learning',
    description: 'Workshops & Mentoring',
  },
]

interface WorkWithMeDropdownProps {
  isOpen: boolean
  onClose: () => void
}

export function WorkWithMeDropdown({ isOpen, onClose }: WorkWithMeDropdownProps) {
  const [hoveredId, setHoveredId] = useState<string | null>(null)
  const dropdownRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!isOpen) return

    const handleMouseLeave = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        onClose()
      }
    }

    document.addEventListener('mouseleave', handleMouseLeave)
    return () => document.removeEventListener('mouseleave', handleMouseLeave)
  }, [isOpen, onClose])

  return (
    <div
      ref={dropdownRef}
      className={[
        'absolute top-full left-0 w-80 bg-white rounded-xl border border-[#E8E6F8] shadow-lg',
        'transition-all duration-300 ease-out origin-top',
        isOpen
          ? 'opacity-100 visible translate-y-0'
          : 'opacity-0 invisible -translate-y-2 pointer-events-none',
      ].join(' ')}
      onMouseLeave={onClose}
    >
      {/* Header */}
      <div className="px-5 pt-5 pb-3 border-b border-[#E8E6F8]">
        <h3 className="text-sm font-semibold text-[#0F0A2E]">Work With Me</h3>
      </div>

      {/* Categories */}
      <div className="p-3 space-y-2">
        {categories.map((category) => {
          const Icon = category.icon
          const isHovered = hoveredId === category.id

          return (
            <Link
              key={category.id}
              href={`/work-with-me/${category.id}`}
              onMouseEnter={() => setHoveredId(category.id)}
              onMouseLeave={() => setHoveredId(null)}
              onClick={onClose}
              className={[
                'flex items-start gap-3 px-3 py-2.5 rounded-lg transition-all duration-200',
                isHovered ? 'bg-[#F8F7FF]' : 'hover:bg-[#F8F7FF]/50',
              ].join(' ')}
            >
              {/* Icon */}
              <div className="mt-0.5">
                <Icon
                  className={[
                    'w-5 h-5 transition-colors duration-200',
                    isHovered ? 'text-[#2D1BB8]' : 'text-[#4B4680]',
                  ].join(' ')}
                />
              </div>

              {/* Content */}
              <div className="flex-1 min-w-0">
                <div className="text-sm font-semibold text-[#0F0A2E]">{category.title}</div>
                <div className="text-xs text-[#4B4680] mt-0.5">{category.description}</div>
              </div>

              {/* Arrow */}
              <div className="mt-0.5">
                <ChevronRight
                  className={[
                    'w-4 h-4 transition-all duration-200',
                    isHovered ? 'text-[#2D1BB8] translate-x-1' : 'text-[#E8E6F8]',
                  ].join(' ')}
                />
              </div>
            </Link>
          )
        })}
      </div>

      {/* Footer CTA */}
      <div className="px-5 py-3 border-t border-[#E8E6F8]">
        <Link
          href="/work-with-me"
          onClick={onClose}
          className="inline-flex items-center gap-2 text-xs font-semibold text-[#2D1BB8] hover:gap-3 transition-all"
        >
          Explore all
          <ChevronRight className="w-3.5 h-3.5" />
        </Link>
      </div>
    </div>
  )
}
