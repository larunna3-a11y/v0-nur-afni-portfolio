'use client'

import Link from 'next/link'
import { useState } from 'react'
import { Menu, X, ChevronDown } from 'lucide-react'
import { useRouter, usePathname } from 'next/navigation'

const navLinks = [
  { href: '/about', label: 'About' },
  { label: 'Services', isDropdown: true },
  { href: '/portfolio', label: 'Portfolio' },
  { href: '/digital-product-lab', label: 'Lab' },
  { href: '/contact', label: 'Contact' },
]

const serviceOptions = [
  { href: '/services/marketing', label: 'Marketing', subtitle: 'End-to-End Digital Marketing' },
  { href: '/services/operations', label: 'Operations', subtitle: 'Business Operations & Optimization' },
  { href: '/services/ai-101', label: 'AI 101', subtitle: 'AI Training & Team Enablement' },
  { href: '/services/strategy', label: 'Strategy', subtitle: 'Business Strategy & Decisions' },
]

export function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [servicesOpen, setServicesOpen] = useState(false)
  const [language, setLanguage] = useState<'en' | 'id'>('en')
  const router = useRouter()
  const pathname = usePathname()

  const handleLanguageSwitch = (lang: 'en' | 'id') => {
    setLanguage(lang)
    // Extract the current path without language prefix
    const pathWithoutLang = pathname.replace(/^\/(en|id)/, '') || '/'
    router.push(`/${lang}${pathWithoutLang}`)
  }

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
              <div key={link.label} className="relative group">
                {link.isDropdown ? (
                  <>
                    <button className="flex items-center gap-1 text-[#4B4680] hover:text-[#2D1BB8] transition-colors text-sm font-medium">
                      {link.label}
                      <ChevronDown className="w-4 h-4" />
                    </button>
                    
                    {/* Services Dropdown */}
                    <div className="absolute left-0 mt-0 w-56 bg-white border border-[#E8E6F8] rounded-xl shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 pt-2">
                      {serviceOptions.map((service) => (
                        <Link
                          key={service.href}
                          href={service.href}
                          className="block px-4 py-3 hover:bg-[#F8F7FF] first:rounded-t-[11px] last:rounded-b-[11px]"
                        >
                          <div className="text-sm font-semibold text-[#2D1BB8] hover:text-[#0F0A2E]">
                            {service.label}
                          </div>
                          <div className="text-xs text-[#4B4680] mt-1">
                            {service.subtitle}
                          </div>
                        </Link>
                      ))}
                    </div>
                  </>
                ) : (
                  <Link
                    href={link.href}
                    className="text-[#4B4680] hover:text-[#2D1BB8] transition-colors text-sm font-medium"
                  >
                    {link.label}
                  </Link>
                )}
              </div>
            ))}
          </div>

          {/* Right Section - Language Switcher */}
          <div className="hidden md:flex items-center gap-4">
            <div className="flex items-center gap-2 bg-[#F8F7FF] rounded-full p-1">
              <button
                onClick={() => handleLanguageSwitch('en')}
                className={`px-3 py-1 rounded-full text-xs font-medium transition-all ${
                  language === 'en'
                    ? 'bg-[#2D1BB8] text-white'
                    : 'text-[#4B4680] hover:text-[#2D1BB8]'
                }`}
              >
                EN
              </button>
              <button
                onClick={() => handleLanguageSwitch('id')}
                className={`px-3 py-1 rounded-full text-xs font-medium transition-all ${
                  language === 'id'
                    ? 'bg-[#2D1BB8] text-white'
                    : 'text-[#4B4680] hover:text-[#2D1BB8]'
                }`}
              >
                ID
              </button>
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
            <div className="flex flex-col gap-2">
              {navLinks.map((link) => (
                <div key={link.label}>
                  {link.isDropdown ? (
                    <>
                      <button
                        onClick={() => setServicesOpen(!servicesOpen)}
                        className="w-full text-left text-[#4B4680] hover:text-[#2D1BB8] transition-colors text-sm font-medium py-2 flex items-center justify-between"
                      >
                        {link.label}
                        <ChevronDown className={`w-4 h-4 transition-transform ${servicesOpen ? 'rotate-180' : ''}`} />
                      </button>
                      {servicesOpen && (
                        <div className="ml-4 mt-2 space-y-2 border-l-2 border-[#E8E6F8] pl-4">
                          {serviceOptions.map((service) => (
                            <Link
                              key={service.href}
                              href={service.href}
                              className="block text-[#2D1BB8] hover:text-[#0F0A2E] text-sm font-medium py-1"
                              onClick={() => setMobileMenuOpen(false)}
                            >
                              {service.label}
                            </Link>
                          ))}
                        </div>
                      )}
                    </>
                  ) : (
                    <Link
                      href={link.href}
                      className="text-[#4B4680] hover:text-[#2D1BB8] transition-colors text-sm font-medium py-2 block"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {link.label}
                    </Link>
                  )}
                </div>
              ))}

              {/* Mobile Language Switcher */}
              <div className="mt-4 pt-4 border-t border-[#E8E6F8]">
                <p className="text-xs font-semibold uppercase text-[#4B4680] mb-2">Language</p>
                <div className="flex gap-2">
                  <button
                    onClick={() => {
                      handleLanguageSwitch('en')
                      setMobileMenuOpen(false)
                    }}
                    className={`px-3 py-1 rounded-full text-xs font-medium transition-all ${
                      language === 'en'
                        ? 'bg-[#2D1BB8] text-white'
                        : 'bg-[#F8F7FF] text-[#4B4680]'
                    }`}
                  >
                    English
                  </button>
                  <button
                    onClick={() => {
                      handleLanguageSwitch('id')
                      setMobileMenuOpen(false)
                    }}
                    className={`px-3 py-1 rounded-full text-xs font-medium transition-all ${
                      language === 'id'
                        ? 'bg-[#2D1BB8] text-white'
                        : 'bg-[#F8F7FF] text-[#4B4680]'
                    }`}
                  >
                    Indonesia
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}
