'use client'

import Link from 'next/link'
import { useState } from 'react'
import { Menu, X, ChevronDown } from 'lucide-react'
import { WorkWithMeDropdown } from './work-with-me-dropdown'

const otherNavLinks = [
  { href: '/about', label: 'About' },
  { href: '/portfolio', label: 'Portfolio' },
  { href: '/digital-product-lab', label: 'Lab' },
  { href: '/contact', label: 'Contact' },
]

const workWithMeCategories = [
  { id: 'consulting', label: 'Consulting' },
  { id: 'marketing', label: 'Marketing' },
  { id: 'builder', label: 'Builder' },
  { id: 'learning', label: 'Learning' },
]

export function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [workWithMeOpen, setWorkWithMeOpen] = useState(false)
  const [mobileWorkWithMeOpen, setMobileWorkWithMeOpen] = useState(false)

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

            {/* Work With Me - Desktop */}
            <div className="relative group">
              <button
                onClick={() => setWorkWithMeOpen(!workWithMeOpen)}
                onMouseEnter={() => setWorkWithMeOpen(true)}
                className="flex items-center gap-1.5 text-[#4B4680] hover:text-[#2D1BB8] transition-colors text-sm font-medium"
              >
                Work With Me
                <ChevronDown className="w-4 h-4" />
              </button>
              <div
                onMouseEnter={() => setWorkWithMeOpen(true)}
                onMouseLeave={() => setWorkWithMeOpen(false)}
                className="absolute left-0 top-full pt-2"
              >
                <WorkWithMeDropdown isOpen={workWithMeOpen} onClose={() => setWorkWithMeOpen(false)} />
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

              {/* Work With Me - Mobile Accordion */}
              <div className="py-2">
                <button
                  onClick={() => setMobileWorkWithMeOpen(!mobileWorkWithMeOpen)}
                  className="flex items-center justify-between w-full text-[#4B4680] hover:text-[#2D1BB8] transition-colors text-sm font-medium px-2"
                >
                  Work With Me
                  <ChevronDown
                    className={`w-4 h-4 transition-transform ${mobileWorkWithMeOpen ? 'rotate-180' : ''}`}
                  />
                </button>

                {mobileWorkWithMeOpen && (
                  <div className="ml-4 mt-2 space-y-1 border-l-2 border-[#E8E6F8] pl-3">
                    {workWithMeCategories.map((category) => (
                      <Link
                        key={category.id}
                        href={`/services#${category.id}`}
                        className="block text-[#2D1BB8] hover:text-[#0F0A2E] text-sm font-medium py-1.5"
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        {category.label}
                      </Link>
                    ))}
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
