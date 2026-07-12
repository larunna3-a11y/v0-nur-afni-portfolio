'use client'

import Link from 'next/link'
import { useState, useRef, useEffect } from 'react'
import { Menu, X } from 'lucide-react'
import { PortfolioDropdown } from './portfolio-dropdown'
import { ServicesDropdown } from './services-dropdown'

const otherNavLinks = [
  { href: '/about', label: 'About' },
  { href: '/digital-product-lab', label: 'Lab' },
  { href: '/contact', label: 'Contact' },
]

const servicesMenuLinks = [
  { href: '/services/Marketing', label: 'Marketing' },
  { href: '/services/builder', label: 'Builder' },
  { href: '/services/Consulting', label: 'Consulting' },
  { href: '/services/Learning', label: 'Learning' },
]

const portfolioDropdownLinks = [
  { href: '/portfolio/case-studies', label: 'Case Studies' },
  { href: '/portfolio/recruit-me', label: 'Recruit Me' },
  { href: '/portfolio/hire-me', label: 'Hire Me' },
]

export function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [servicesOpen, setServicesOpen] = useState(false)
  const [portfolioOpen, setPortfolioOpen] = useState(false)
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false)
  const [mobilePortfolioOpen, setMobilePortfolioOpen] = useState(false)
  const dropdownRef = useRef<HTMLDivElement>(null)

  // Close dropdown on Escape
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        if (servicesOpen) setServicesOpen(false)
        if (portfolioOpen) setPortfolioOpen(false)
      }
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [servicesOpen, portfolioOpen])

  // Close dropdown on click outside
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setServicesOpen(false)
        setPortfolioOpen(false)
      }
    }

    if (servicesOpen || portfolioOpen) {
      document.addEventListener('click', handleClickOutside)
      return () => document.removeEventListener('click', handleClickOutside)
    }
  }, [servicesOpen, portfolioOpen])

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md border-b border-[#E8E6F8]">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="text-[#2D1BB8] font-bold text-xl">
            Home
          </Link>

          {/* Desktop Navigation */}
          <div
            className="hidden md:flex items-center gap-8"
            onMouseLeave={() => {
              setServicesOpen(false)
              setPortfolioOpen(false)
            }}
          >
            {otherNavLinks.slice(0, 1).map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-[#4B4680] hover:text-[#2D1BB8] transition-colors text-sm font-medium"
              >
                {link.label}
              </Link>
            ))}

            {/* Services Dropdown - Desktop */}
            <div className="relative">
              <button
                onClick={() => setServicesOpen(!servicesOpen)}
                onMouseEnter={() => {
                  setServicesOpen(true)
                  setPortfolioOpen(false)
                }}
                className={[
                  'relative text-sm font-medium transition-colors duration-200',
                  servicesOpen ? 'text-[#2D1BB8]' : 'text-[#4B4680] hover:text-[#2D1BB8]',
                ].join(' ')}
              >
                Services
                {/* Animated underline */}
                <span
                  className={[
                    'absolute bottom-0 left-0 right-0 h-0.5 bg-[#2D1BB8] transition-all duration-300 origin-left',
                    servicesOpen ? 'scale-x-100' : 'scale-x-0',
                  ].join(' ')}
                />
              </button>
              <div
                onMouseEnter={() => setServicesOpen(true)}
                onMouseLeave={() => setServicesOpen(false)}
                className="absolute left-0 top-full pt-3"
              >
                <ServicesDropdown isOpen={servicesOpen} onClose={() => setServicesOpen(false)} />
              </div>
            </div>

            {/* Portfolio Dropdown - Desktop */}
            <div className="relative">
              <button
                onClick={() => setPortfolioOpen(!portfolioOpen)}
                onMouseEnter={() => {
                  setPortfolioOpen(true)
                  setServicesOpen(false)
                }}
                className={[
                  'relative text-sm font-medium transition-colors duration-200',
                  portfolioOpen ? 'text-[#2D1BB8]' : 'text-[#4B4680] hover:text-[#2D1BB8]',
                ].join(' ')}
              >
                Portfolio
                {/* Animated underline */}
                <span
                  className={[
                    'absolute bottom-0 left-0 right-0 h-0.5 bg-[#2D1BB8] transition-all duration-300 origin-left',
                    portfolioOpen ? 'scale-x-100' : 'scale-x-0',
                  ].join(' ')}
                />
              </button>
              <div
                onMouseEnter={() => setPortfolioOpen(true)}
                onMouseLeave={() => setPortfolioOpen(false)}
                className="absolute left-0 top-full pt-3"
              >
                <PortfolioDropdown isOpen={portfolioOpen} onClose={() => setPortfolioOpen(false)} />
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

              {/* Services - Mobile Accordion */}
              <div className="py-2">
                <button
                  onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
                  className={[
                    'w-full text-left text-sm font-medium px-2 py-2 transition-colors duration-200',
                    mobileServicesOpen ? 'text-[#2D1BB8]' : 'text-[#4B4680] hover:text-[#2D1BB8]',
                  ].join(' ')}
                >
                  Services
                </button>

                {mobileServicesOpen && (
                  <div className="ml-4 mt-2 space-y-1 border-l-2 border-[#E8E6F8] pl-3">
                    {servicesMenuLinks.map((link) => (
                      <Link
                        key={link.href}
                        href={link.href}
                        className="block text-[#2D1BB8] hover:text-[#0F0A2E] text-sm font-medium py-1.5"
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        {link.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              {/* Portfolio - Mobile Accordion */}
              <div className="py-2">
                <button
                  onClick={() => setMobilePortfolioOpen(!mobilePortfolioOpen)}
                  className={[
                    'w-full text-left text-sm font-medium px-2 py-2 transition-colors duration-200',
                    mobilePortfolioOpen ? 'text-[#2D1BB8]' : 'text-[#4B4680] hover:text-[#2D1BB8]',
                  ].join(' ')}
                >
                  Portfolio
                </button>

                {mobilePortfolioOpen && (
                  <div className="ml-4 mt-2 space-y-1 border-l-2 border-[#E8E6F8] pl-3">
                    {portfolioDropdownLinks.map((link) => (
                      <Link
                        key={link.href}
                        href={link.href}
                        className="block text-[#2D1BB8] hover:text-[#0F0A2E] text-sm font-medium py-1.5"
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        {link.label}
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
