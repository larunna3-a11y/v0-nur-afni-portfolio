'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'

const floatingCards = [
  { label: 'Marketplace Growth', icon: '📈', delay: 0 },
  { label: 'AI Product Builder', icon: '🤖', delay: 0.15 },
  { label: 'Digital Systems', icon: '💻', delay: 0.3 },
  { label: 'Based in Indonesia', icon: '🇮🇩', delay: 0.45 },
]

const fadeUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
}

export function AboutHero() {
  return (
    <section className="relative bg-[#2D1BB8] overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#F97316] rounded-full blur-3xl opacity-10 translate-x-1/3 -translate-y-1/3 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-[#4A35D4] rounded-full blur-3xl opacity-20 -translate-x-1/3 translate-y-1/3 pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">

          {/* Left Column */}
          <div className="order-2 lg:order-1">
            <motion.div
              variants={fadeUp}
              initial="initial"
              animate="animate"
              transition={{ duration: 0.5 }}
            >
              <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/20 bg-white/5 text-[#9B97C0] text-sm font-medium mb-6">
                <span className="w-1.5 h-1.5 bg-[#06D001] rounded-full animate-pulse" />
                Available for Projects
              </span>
            </motion.div>

            <motion.h1
              variants={fadeUp}
              initial="initial"
              animate="animate"
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight text-balance"
            >
              {"Hi, I'm "}
              <span className="text-[#F97316]">Nur Afni.</span>
            </motion.h1>

            <motion.p
              variants={fadeUp}
              initial="initial"
              animate="animate"
              transition={{ duration: 0.5, delay: 0.2 }}
              className="mt-4 text-lg text-[#9B97C0] font-medium"
            >
              Digital Marketing Strategist, Marketplace Growth Specialist, and AI Product Builder.
            </motion.p>

            <motion.p
              variants={fadeUp}
              initial="initial"
              animate="animate"
              transition={{ duration: 0.5, delay: 0.3 }}
              className="mt-6 text-[#9B97C0] leading-relaxed max-w-lg"
            >
              I help businesses grow through digital marketing, marketplace strategy, AI-powered workflows, and digital product development. My work combines business thinking, marketing execution, and technology to create practical solutions that deliver measurable impact.
            </motion.p>

            <motion.div
              variants={fadeUp}
              initial="initial"
              animate="animate"
              transition={{ duration: 0.5, delay: 0.4 }}
              className="mt-8 flex flex-wrap gap-3"
            >
              <Link
                href="/portfolio"
                className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#F97316] hover:bg-[#ea6b0e] text-white rounded-xl text-sm font-semibold transition-colors"
              >
                View My Work
              </Link>
              <Link
                href="/work-with-me"
                className="inline-flex items-center gap-2 px-5 py-2.5 border border-white/20 hover:border-white/40 text-white rounded-xl text-sm font-semibold transition-colors"
              >
                Work With Me
              </Link>
            </motion.div>
          </div>

          {/* Right Column — Image + floating cards */}
          <div className="order-1 lg:order-2 flex justify-center lg:justify-end">
            <div className="relative w-72 h-72 sm:w-80 sm:h-80 lg:w-96 lg:h-96">

              {/* Profile image */}
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="absolute inset-0 rounded-3xl overflow-hidden border border-white/10 shadow-2xl"
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/images/nur-afni-hero.png"
                  alt="Nur Afni"
                  className="w-full h-full object-cover object-top"
                />
                {/* Subtle overlay gradient at bottom */}
                <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-[#1A0F7A]/60 to-transparent" />
              </motion.div>

              {/* Floating stat cards */}
              {floatingCards.map((card, i) => {
                const positions = [
                  '-top-4 -left-8 sm:-left-12',
                  '-top-4 -right-8 sm:-right-12',
                  '-bottom-4 -left-8 sm:-left-12',
                  '-bottom-4 -right-8 sm:-right-12',
                ]
                return (
                  <motion.div
                    key={card.label}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.4, delay: 0.5 + card.delay }}
                    className={`absolute ${positions[i]} glass-card rounded-xl px-3 py-2 flex items-center gap-2 whitespace-nowrap`}
                    style={{
                      animation: `float-${i % 2 === 0 ? 'a' : 'b'} 4s ease-in-out infinite`,
                      animationDelay: `${i * 0.5}s`,
                    }}
                  >
                    <span className="text-base">{card.icon}</span>
                    <span className="text-xs font-medium text-white">{card.label}</span>
                  </motion.div>
                )
              })}
            </div>
          </div>

        </div>
      </div>

      {/* Float keyframes injected as a style tag */}
      <style>{`
        @keyframes float-a {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-6px); }
        }
        @keyframes float-b {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(6px); }
        }
      `}</style>
    </section>
  )
}
