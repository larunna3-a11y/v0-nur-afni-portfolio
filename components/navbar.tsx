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

  // Each dropdown "group" (trigger button + panel) gets its own ref so click-outside
  // detection can tell whether a click landed inside that specific group.
  const servicesGroupRef = useRef<HTMLDivElement>(null)
  const portfolioGroupRef = useRef<HTMLDivElement>(null)

  // Close delay: keeps the dropdown alive briefly while the cursor travels
  // between the trigger and the panel, so it doesn't feel like it "slams shut".
  const CLOSE_DELAY = 200

  const servicesCloseTimeoutRef = useRef<NodeJS.Timeout | null>(null)
  const portfolioCloseTimeoutRef = useRef<NodeJS.Timeout | null>(null)

  // Helper to clear timeouts and open dropdown
  const openServices = () => {
    if (servicesCloseTimeoutRef.current) clearTimeout(servicesCloseTimeoutRef.current)
    if (portfolioCloseTimeoutRef.current) clearTimeout(portfolioCloseTimeoutRef.current)
    setServicesOpen(true)
    setPortfolioOpen(false)
  }

  const closeServices = () => {
    if (servicesCloseTimeoutRef.current) clearTimeout(servicesCloseTimeoutRef.current)
    servicesCloseTimeoutRef.current = setTimeout(() => {
      setServicesOpen(false)
    }, CLOSE_DELAY)
  }

  const toggleServices = () => {
    if (servicesCloseTimeoutRef.current) clearTimeout(servicesCloseTimeoutRef.current)
    if (portfolioCloseTimeoutRef.current) clearTimeout(portfolioCloseTimeoutRef.current)
    setServicesOpen((prev) => !prev)
    setPortfolioOpen(false)
  }

  const openPortfolio = () => {
    if (portfolioCloseTimeoutRef.current) clearTimeout(portfolioCloseTimeoutRef.current)
    if (servicesCloseTimeoutRef.current) clearTimeout(servicesCloseTimeoutRef.current)
    setPortfolioOpen(true)
    setServicesOpen(false)
  }

  const closePortfolio = () => {
    if (portfolioCloseTimeoutRef.current) clearTimeout(portfolioCloseTimeoutRef.current)
    portfolioCloseTimeoutRef.current = setTimeout(() => {
      setPortfolioOpen(false)
    }, CLOSE_DELAY)
  }

  const togglePortfolio = () => {
    if (portfolioCloseTimeoutRef.current) clearTimeout(portfolioCloseTimeoutRef.current)
    if (servicesCloseTimeoutRef.current) clearTimeout(servicesCloseTimeoutRef.current)
    setPortfolioOpen((prev) => !prev)
    setServicesOpen(false)
  }

  const closeAllImmediately = () => {
    if (servicesCloseTimeoutRef.current) clearTimeout(servicesCloseTimeoutRef.current)
    if (portfolioCloseTimeoutRef.current) clearTimeout(portfolioCloseTimeoutRef.current)
    setServicesOpen(false)
    setPortfolioOpen(false)
  }

  // Close dropdown on Escape
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && (servicesOpen || portfolioOpen)) {
        closeAllImmediately()
      }
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [servicesOpen, portfolioOpen])

  // Close dropdown on click outside (checks both groups individually,
  // since a click inside one group's panel shouldn't close that same group)
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      const target = e.target as Node
      const insideServices = servicesGroupRef.current?.contains(target)
      const insidePortfolio = portfolioGroupRef.current?.contains(target)
      if (!insideServices && !insidePortfolio) {
        closeAllImmediately()
      }
    }

    if (servicesOpen || portfolioOpen) {
      document.addEventListener('click', handleClickOutside)
      return () => document.removeEventListener('click', handleClickOutside)
    }
  }, [servicesOpen, portfolioOpen])

  // Cleanup timeouts on unmount
  useEffect(() => {
    return () => {
      if (servicesCloseTimeoutRef.current) clearTimeout(servicesCloseTimeoutRef.current)
      if (portfolioCloseTimeoutRef.current) clearTimeout(portfolioCloseTimeoutRef.current)
    }
  }, [])

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

            {/* Services Dropdown - Desktop */}
            <div
              ref={servicesGroupRef}
              className="relative"
              onMouseEnter={openServices}
              onMouseLeave={closeServices}
            >
              <button
                onClick={toggleServices}
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
              <div className="absolute left-0 top-full pt-3 pointer-events-none" style={{ pointerEvents: servicesOpen ? 'auto' : 'none' }}>
                <ServicesDropdown isOpen={servicesOpen} onClose={() => setServicesOpen(false)} />
              </div>
            </div>

            {/* Portfolio Dropdown - Desktop */}
            <div
              ref={portfolioGroupRef}
              className="relative"
              onMouseEnter={openPortfolio}
              onMouseLeave={closePortfolio}
            >
              <button
                onClick={togglePortfolio}
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
              <div className="absolute left-0 top-full pt-3 pointer-events-none" style={{ pointerEvents: portfolioOpen ? 'auto' : 'none' }}>
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