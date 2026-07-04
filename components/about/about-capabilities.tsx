'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { BarChart2, TrendingUp, Monitor, GraduationCap, ArrowRight } from 'lucide-react'

const capabilities = [
  {
    icon: BarChart2,
    title: 'Strategy',
    skills: ['Marketplace Strategy', 'Growth Planning', 'Business Process', 'Digital Transformation'],
    href: '/work-with-me/consulting',
    cta: 'Consulting',
  },
  {
    icon: TrendingUp,
    title: 'Marketing',
    skills: ['Marketplace Management', 'Performance Marketing', 'Affiliate', 'Livestream', 'Campaign Planning'],
    href: '/work-with-me/marketing',
    cta: 'Marketing',
  },
  {
    icon: Monitor,
    title: 'Builder',
    skills: ['Web Applications', 'Internal Systems', 'Dashboards', 'AI Solutions', 'Workflow Automation'],
    href: '/work-with-me/builder',
    cta: 'Builder',
  },
  {
    icon: GraduationCap,
    title: 'Education',
    skills: ['Mentoring', 'Workshops', 'Corporate Training', 'Speaking'],
    href: '/work-with-me/learning',
    cta: 'Learning',
  },
]

const fadeUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
}

export function AboutCapabilities() {
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
            Expertise
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-[#0F0A2E]">What I Do</h2>
          <p className="mt-4 text-[#4B4680] max-w-xl mx-auto leading-relaxed">
            Four practice areas that span strategy, execution, product development, and education.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {capabilities.map((cap, i) => (
            <motion.div
              key={cap.title}
              variants={fadeUp}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className="group bg-[#F8F7FF] border border-[#E8E6F8] rounded-2xl p-6 hover:border-[#2D1BB8]/40 hover:shadow-md transition-all duration-300 flex flex-col"
            >
              {/* Icon */}
              <div className="w-10 h-10 rounded-xl bg-[#2D1BB8]/10 flex items-center justify-center mb-4">
                <cap.icon className="w-5 h-5 text-[#2D1BB8]" />
              </div>

              {/* Title */}
              <h3 className="text-base font-bold text-[#0F0A2E] mb-3">{cap.title}</h3>

              {/* Skills list */}
              <ul className="space-y-1.5 flex-1 mb-5">
                {cap.skills.map((skill) => (
                  <li key={skill} className="flex items-center gap-2 text-sm text-[#4B4680]">
                    <span className="w-1 h-1 rounded-full bg-[#2D1BB8]/40 flex-shrink-0" />
                    {skill}
                  </li>
                ))}
              </ul>

              {/* CTA */}
              <Link
                href={cap.href}
                className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#2D1BB8] group-hover:gap-2.5 transition-all duration-200"
              >
                {cap.cta}
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
