'use client'

import { useRef } from 'react'
import { Download } from 'lucide-react'

interface ResumeDropdownProps {
  isOpen: boolean
  onClose: () => void
}

const resumeOptions = [
  {
    title: 'Digital Marketing',
    href: '/resumes/Resume-General-Digital-Marketing-Specialist-Nur-Afni.pdf',
  },
  {
    title: 'Social Media Specialist',
    href: '/resumes/Resume-Social-Media-Brand-Paid-Social-Nur-Afni.pdf',
  },
  {
    title: 'E-Commerce Specialist',
    href: '/resumes/Resume-Product-Ecommerce-Growth-Specialist-Nur-Afni.pdf',
  },
]

export function ResumeDropdown({ isOpen, onClose }: ResumeDropdownProps) {
  const dropdownRef = useRef<HTMLDivElement>(null)

  return (
    <div
      ref={dropdownRef}
      className={[
        'absolute top-full left-0 mt-2 w-72 bg-white rounded-lg border border-[#E8E6F8] shadow-lg',
        'transition-all duration-300 ease-out origin-top',
        isOpen
          ? 'opacity-100 visible translate-y-0'
          : 'opacity-0 invisible -translate-y-2 pointer-events-none',
      ].join(' ')}
    >
      <div className="p-3 space-y-1">
        {resumeOptions.map((option) => (
          <a
            key={option.href}
            href={option.href}
            download
            className="flex items-center justify-between px-4 py-3 rounded-lg text-[#4B4680] hover:text-[#2D1BB8] hover:bg-[#F5F3FF] transition-all duration-200 text-sm font-medium group"
          >
            <span>{option.title}</span>
            <Download size={16} className="opacity-60 group-hover:opacity-100 transition-opacity" />
          </a>
        ))}
      </div>
    </div>
  )
}
