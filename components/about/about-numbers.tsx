'use client'

import { useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'

const stats = [
  { value: 4, suffix: '+', label: 'Years Experience' },
  { prefix: 'Rp', value: 1, suffix: 'B+', label: 'Marketplace Revenue Managed' },
  { value: 30, suffix: '+', label: 'Projects Completed' },
  { value: 6, suffix: '+', label: 'Digital Products Built' },
  { value: 10, suffix: '+', label: 'AI Platforms Used' },
  { value: 4, suffix: '', label: 'Industries Served' },
]

function AnimatedNumber({ value, suffix, prefix }: { value: number; suffix: string; prefix?: string }) {
  const [count, setCount] = useState(0)
  const ref = useRef<HTMLSpanElement>(null)
  const hasStarted = useRef(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasStarted.current) {
          hasStarted.current = true
          const duration = 1400
          const steps = 40
          const increment = value / steps
          let current = 0
          const timer = setInterval(() => {
            current += increment
            if (current >= value) {
              setCount(value)
              clearInterval(timer)
            } else {
              setCount(Math.floor(current))
            }
          }, duration / steps)
        }
      },
      { threshold: 0.3 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [value])

  return (
    <span ref={ref}>
      {prefix || ''}{count}{suffix}
    </span>
  )
}

const fadeUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
}

export function AboutNumbers() {
  return (
    <section className="bg-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={fadeUp}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-14"
        >
          <span className="inline-block text-xs font-semibold tracking-widest text-[#2D1BB8] uppercase mb-3">
            Impact
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-[#0F0A2E]">Numbers That Matter</h2>
          <p className="mt-4 text-[#4B4680] max-w-xl mx-auto leading-relaxed">
            Real outcomes from real work — across marketplaces, campaigns, products, and businesses.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              variants={fadeUp}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.07 }}
              className="bg-[#F8F7FF] border border-[#E8E6F8] rounded-2xl p-6 sm:p-8 text-center hover:border-[#2D1BB8]/30 hover:shadow-sm transition-all"
            >
              <div className="text-3xl sm:text-4xl font-bold text-[#2D1BB8]">
                <AnimatedNumber value={stat.value} suffix={stat.suffix} prefix={stat.prefix} />
              </div>
              <div className="mt-2 text-sm text-[#4B4680] font-medium">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
