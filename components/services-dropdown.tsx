'use client'

import Link from 'next/link'
import { useRef } from 'react'

interface ServicesDropdownProps {
  isOpen: boolean
  onClose: () => void
}

export function ServicesDropdown({ isOpen, onClose }: ServicesDropdownProps) {
  const dropdownRef = useRef<HTMLDivElement>(null)

  const servicesLinks = [
    { href: '/services/Marketing', label: 'Marketing' },
    { href: '/services/builder', label: 'Builder' },
    { href: '/services/Consulting', label: 'Consulting' },
    { href: '/services/Learning', label: 'Learning' },
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
        {servicesLinks.map((link) => (
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
          href="/services"
          onClick={onClose}
          className="inline-flex items-center gap-2 text-xs font-semibold text-[#2D1BB8] hover:gap-3 transition-all"
        >
          Explore services
          <span>→</span>
        </Link>
      </div>
    </div>
  )
}
