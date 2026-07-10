'use client'

import Link from 'next/link'
import { useRef, useEffect } from 'react'

interface PortfolioDropdownProps {
  isOpen: boolean
  onClose: () => void
}

export function PortfolioDropdown({ isOpen, onClose }: PortfolioDropdownProps) {
  const dropdownRef = useRef<HTMLDivElement>(null)

  const portfolioLinks = [
    { href: '/portfolio/case-studies', label: 'Case Studies' },
    { href: '/portfolio/recruit-me', label: 'Recruit Me' },
    { href: '/portfolio/hire-me', label: 'Hire Me' },
  ]

  return (
    <div
      ref={dropdownRef}
      className={[
        'absolute top-full left-0 mt-2 w-80 bg-white rounded-xl border border-[#E8E6F8] shadow-lg',
        'transition-all duration-300 ease-out origin-top',
        isOpen
          ? 'opacity-100 visible translate-y-0'
          : 'opacity-0 invisible -translate-y-2 pointer-events-none',
      ].join(' ')}
    >
      <div className="p-4 space-y-2">
        {portfolioLinks.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            onMouseEnter={() => {}}
            className="flex items-center gap-3 px-4 py-3 rounded-lg text-[#4B4680] hover:text-[#2D1BB8] hover:bg-[#F5F3FF] transition-all duration-200 text-sm font-medium"
          >
            {link.label}
          </Link>
        ))}
      </div>
      <div className="px-4 py-3 border-t border-[#E8E6F8]">
        <Link
          href="/portfolio/case-studies"
          onClick={onClose}
          className="inline-flex items-center gap-2 text-xs font-semibold text-[#2D1BB8] hover:gap-3 transition-all"
        >
          Explore portfolio
          <span>→</span>
        </Link>
      </div>
    </div>
  )
}
