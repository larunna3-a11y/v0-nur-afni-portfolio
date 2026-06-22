'use client'

import Link from 'next/link'
import { useState, useRef, useEffect } from 'react'
import { Menu, X } from 'lucide-react'

const navLinks = [
  { href: '/about', label: 'About' },
  { href: '/services', label: 'Services' },
  { href: '/portfolio', label: 'Portfolio' },
  { href: '/contact', label: 'Contact' },
]

const labDropdownLinks = [
  { href: '/digital-product-lab/prototype', label: 'Prototype' },
  { href: '/digital-product-lab/modul', label: 'Modul' },
]

export function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [labOpen, setLabOpen] = useState(false)
  const [mobileLabOpen, setMobileLabOpen] = useState(false)
  const dropdownRef = useRef<HTMLDivElement>(null)

  // Close dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setLabOpen(false)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
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
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-[#4B4680] hover:text-[#2D1BB8] transition-colors text-sm font-medium"
              >
                {link.label}
              </Link>
            ))}

            {/* Lab Dropdown */}
            <div className="relative" ref={dropdownRef}>
              <button
                type="button"
                className="flex items-center text-[#4B4680] hover:text-[#2D1BB8] transition-colors text-sm font-medium"
                onClick={() => setLabOpen(!labOpen)}
                aria-expanded={labOpen}
                aria-haspopup="true"
              >
                Lab
              </button>

              {labOpen && (
                <div className="absolute top-full right-0 mt-2 w-40 bg-white rounded-xl shadow-lg border border-[#E8E6F8] py-1 overflow-hidden">
                  {labDropdownLinks.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      className="block px-4 py-2.5 text-sm text-[#4B4680] hover:text-[#2D1BB8] hover:bg-[#F4F3FD] transition-colors font-medium"
                      onClick={() => setLabOpen(false)}
                    >
                      {link.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>
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
            <div className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-[#4B4680] hover:text-[#2D1BB8] transition-colors text-sm font-medium py-2"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {link.label}
                </Link>
              ))}

              {/* Mobile Lab Accordion */}
              <div>
                <button
                  type="button"
                  className="flex items-center text-[#4B4680] hover:text-[#2D1BB8] transition-colors text-sm font-medium py-2 w-full text-left"
                  onClick={() => setMobileLabOpen(!mobileLabOpen)}
                  aria-expanded={mobileLabOpen}
                >
                  Lab
                </button>

                {mobileLabOpen && (
                  <div className="pl-4 flex flex-col gap-2 mt-1 border-l-2 border-[#E8E6F8]">
                    {labDropdownLinks.map((link) => (
                      <Link
                        key={link.href}
                        href={link.href}
                        className="text-[#4B4680] hover:text-[#2D1BB8] transition-colors text-sm font-medium py-1.5"
                        onClick={() => {
                          setMobileLabOpen(false)
                          setMobileMenuOpen(false)
                        }}
                      >
                        {link.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}