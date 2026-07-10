'use client'

import Link from 'next/link'
import { useState, useRef, useEffect } from 'react'
import { Menu, X } from 'lucide-react'
import { WorkDropdown } from './work-dropdown'

const otherNavLinks = [
  { href: '/about', label: 'About' },
  { href: '/digital-product-lab', label: 'Lab' },
  { href: '/contact', label: 'Contact' },
]

export function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [workWithMeOpen, setWorkWithMeOpen] = useState(false)
  const [mobileWorkWithMeOpen, setMobileWorkWithMeOpen] = useState(false)
  const dropdownRef = useRef<HTMLDivElement>(null)

  // Close dropdown on Escape
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && workWithMeOpen) {
        setWorkWithMeOpen(false)
      }
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [workWithMeOpen])

  // Close dropdown on click outside
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setWorkWithMeOpen(false)
      }
    }

    if (workWithMeOpen) {
      document.addEventListener('click', handleClickOutside)
      return () => document.removeEventListener('click', handleClickOutside)
    }
  }, [workWithMeOpen])

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md border-b border-[#E8E6F8]">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="text-[#2D1BB8] font-bold text-xl">
            Home
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {otherNavLinks.slice(0, 1).map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-[#4B4680] hover:text-[#2D1BB8] transition-colors text-sm font-medium"
              >
                {link.label}
              </Link>
            ))}

            {/* Work - Desktop */}
            <div className="relative" ref={dropdownRef}>
              <button
                onClick={() => setWorkWithMeOpen(!workWithMeOpen)}
                onMouseEnter={() => setWorkWithMeOpen(true)}
                className={[
                  'relative text-sm font-medium transition-colors duration-200',
                  workWithMeOpen ? 'text-[#2D1BB8]' : 'text-[#4B4680] hover:text-[#2D1BB8]',
                ].join(' ')}
              >
                Work
                {/* Animated underline */}
                <span
                  className={[
                    'absolute bottom-0 left-0 right-0 h-0.5 bg-[#2D1BB8] transition-all duration-300 origin-left',
                    workWithMeOpen ? 'scale-x-100' : 'scale-x-0',
                  ].join(' ')}
                />
              </button>
              <div
                onMouseEnter={() => setWorkWithMeOpen(true)}
                onMouseLeave={() => setWorkWithMeOpen(false)}
                className="absolute left-0 top-full pt-3"
              >
                <WorkDropdown isOpen={workWithMeOpen} onClose={() => setWorkWithMeOpen(false)} />
              </div>
            </div>

            {otherNavLinks.slice(1).map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-[#4B4680] hover:text-[#2D1BB8] transition-colors text-sm font-medium"
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            type="button"
            className="md:hidden p-2 text-[#4B4680] hover:text-[#2D1BB8] transition-colors"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-[#E8E6F8]">
            <div className="flex flex-col gap-2">
              {otherNavLinks.slice(0, 1).map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-[#4B4680] hover:text-[#2D1BB8] transition-colors text-sm font-medium py-2 px-2"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {link.label}
                </Link>
              ))}

              {/* Work - Mobile Accordion */}
              <div className="py-2">
                <button
                  onClick={() => setMobileWorkWithMeOpen(!mobileWorkWithMeOpen)}
                  className={[
                    'w-full text-left text-sm font-medium px-2 py-2 transition-colors duration-200',
                    mobileWorkWithMeOpen ? 'text-[#2D1BB8]' : 'text-[#4B4680] hover:text-[#2D1BB8]',
                  ].join(' ')}
                >
                  Work
                </button>

                {mobileWorkWithMeOpen && (
                  <div className="ml-4 mt-2 space-y-1 border-l-2 border-[#E8E6F8] pl-3">
                    <Link
                      href="/hire-me"
                      className="block text-[#2D1BB8] hover:text-[#0F0A2E] text-sm font-medium py-1.5"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      Hire Me
                    </Link>
                    <Link
                      href="/recruit-me"
                      className="block text-[#2D1BB8] hover:text-[#0F0A2E] text-sm font-medium py-1.5"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      Recruit Me
                    </Link>
                    <Link
                      href="/portfolio"
                      className="block text-[#2D1BB8] hover:text-[#0F0A2E] text-sm font-medium py-1.5"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      Case Studies
                    </Link>
                  </div>
                )}
              </div>

              {otherNavLinks.slice(1).map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-[#4B4680] hover:text-[#2D1BB8] transition-colors text-sm font-medium py-2 px-2"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}
