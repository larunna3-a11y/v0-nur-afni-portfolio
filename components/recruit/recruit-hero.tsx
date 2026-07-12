'use client'

import { useState, useRef, useEffect } from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { Download, Linkedin, Mail, ChevronDown } from 'lucide-react'
import { ResumeDropdown } from './resume-dropdown'

const fadeUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
}

export function RecruitHero() {
  const [resumeDropdownOpen, setResumeDropdownOpen] = useState(false)
  const resumeButtonRef = useRef<HTMLDivElement>(null)

  // Close dropdown on Escape
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && resumeDropdownOpen) {
        setResumeDropdownOpen(false)
      }
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [resumeDropdownOpen])

  // Close dropdown on click outside
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (resumeButtonRef.current && !resumeButtonRef.current.contains(e.target as Node)) {
        setResumeDropdownOpen(false)
      }
    }

    if (resumeDropdownOpen) {
      document.addEventListener('click', handleClickOutside)
      return () => document.removeEventListener('click', handleClickOutside)
    }
  }, [resumeDropdownOpen])

  return (
    <section className="relative bg-[#2D1BB8] overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#F97316] rounded-full blur-3xl opacity-10 translate-x-1/3 -translate-y-1/3 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-[#4A35D4] rounded-full blur-3xl opacity-20 -translate-x-1/3 translate-y-1/3 pointer-events-none" />

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28">
        <motion.div
          variants={fadeUp}
          initial="initial"
          animate="animate"
          transition={{ duration: 0.5 }}
        >
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/20 bg-white/5 text-[#9B97C0] text-sm font-medium mb-6">
            <span className="w-1.5 h-1.5 bg-[#06D001] rounded-full animate-pulse" />
            Open to Opportunities
          </span>
        </motion.div>

        <motion.h1
          variants={fadeUp}
          initial="initial"
          animate="animate"
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight text-balance"
        >
          Digital Marketing Specialist & Marketplace Growth Expert
        </motion.h1>

        <motion.p
          variants={fadeUp}
          initial="initial"
          animate="animate"
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-6 text-lg text-[#9B97C0] max-w-2xl leading-relaxed"
        >
          Digital Marketing Specialist with 3+ years scaling revenue across Shopee, TikTok Shop, Lazada, and Tokopedia. I design marketplace growth strategies, manage multi-million rupiah ad budgets, and drive sustainable business results through data-driven campaigns.
        </motion.p>

        <motion.div
          variants={fadeUp}
          initial="initial"
          animate="animate"
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-8 flex flex-wrap gap-4"
        >
          {/* Resume Dropdown */}
          <div
            className="relative"
            ref={resumeButtonRef}
            onMouseEnter={() => setResumeDropdownOpen(true)}
            onMouseLeave={() => setResumeDropdownOpen(false)}
          >
            <button
              onClick={() => setResumeDropdownOpen(!resumeDropdownOpen)}
              className="inline-flex items-center gap-2 px-6 py-3 bg-[#F97316] text-white rounded-lg font-medium hover:bg-[#EA8509] transition-colors"
            >
              <Download size={18} />
              Download Resume
              <ChevronDown
                size={16}
                className={`transition-transform duration-300 ${
                  resumeDropdownOpen ? 'rotate-180' : ''
                }`}
              />
            </button>
            <ResumeDropdown
              isOpen={resumeDropdownOpen}
              onClose={() => setResumeDropdownOpen(false)}
            />
          </div>
          <a
            href="https://www.linkedin.com/in/nour-afni/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 border border-white/30 text-white rounded-lg font-medium hover:bg-white/10 transition-colors"
          >
            <Linkedin size={18} />
            LinkedIn Profile
          </a>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-6 py-3 border border-white/30 text-white rounded-lg font-medium hover:bg-white/10 transition-colors"
          >
            <Mail size={18} />
            Contact Me
          </Link>
        </motion.div>

        <motion.div
          variants={fadeUp}
          initial="initial"
          animate="animate"
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-10 flex flex-wrap gap-4 text-sm text-[#9B97C0]"
        >
          <span>📍 Jakarta, Indonesia</span>
          <span>•</span>
          <span>💼 3+ Years Experience</span>
          <span>•</span>
          <span>🌐 Remote Available</span>
        </motion.div>
      </div>
    </section>
  )
}
