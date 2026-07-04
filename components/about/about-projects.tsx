'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'

const projects = [
  {
    title: 'QCY Indonesia',
    category: 'Marketplace Growth',
    status: 'Case Study',
    statusColor: 'bg-[#2D1BB8]/10 text-[#2D1BB8]',
    bg: 'bg-[#2D1BB8]',
    href: '/portfolio/qcy-case-study',
  },
  {
    title: 'Priskila Ecotech',
    category: 'E-Commerce Optimization',
    status: 'Case Study',
    statusColor: 'bg-[#2D1BB8]/10 text-[#2D1BB8]',
    bg: 'bg-[#1A0F7A]',
    href: '/portfolio/ecommerce-growth',
  },
  {
    title: 'Islam Cendekia',
    category: 'Content Strategy',
    status: 'Case Study',
    statusColor: 'bg-[#2D1BB8]/10 text-[#2D1BB8]',
    bg: 'bg-[#4A35D4]',
    href: '/portfolio/islam-cendekia',
  },
  {
    title: 'FlowOps',
    category: 'Workflow Platform',
    status: 'Live',
    statusColor: 'bg-green-50 text-green-700',
    bg: 'bg-[#0F0A2E]',
    href: '/digital-product-lab',
  },
  {
    title: 'StyleDNA',
    category: 'AI Styling Tool',
    status: 'Live',
    statusColor: 'bg-green-50 text-green-700',
    bg: 'bg-[#F97316]',
    href: '/digital-product-lab',
  },
  {
    title: 'Artchy',
    category: 'Art Discovery Platform',
    status: 'Live',
    statusColor: 'bg-green-50 text-green-700',
    bg: 'bg-[#374151]',
    href: '/digital-product-lab',
  },
  {
    title: 'Pustaka Hukum Indonesia',
    category: 'AI Legal Knowledge',
    status: 'Coming Soon',
    statusColor: 'bg-amber-50 text-amber-700',
    bg: 'bg-[#6B4E3D]',
    href: '/digital-product-lab',
  },
]

export function AboutProjects() {
  return (
    <section className="bg-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-12"
        >
          <div>
            <span className="inline-block text-xs font-semibold tracking-widest text-[#2D1BB8] uppercase mb-3">
              Work
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-[#0F0A2E]">Featured Projects</h2>
          </div>
          <Link
            href="/portfolio"
            className="inline-flex items-center gap-2 text-sm font-semibold text-[#2D1BB8] hover:gap-3 transition-all shrink-0"
          >
            View all work <ArrowRight className="w-4 h-4" />
          </Link>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.06 }}
            >
              <Link
                href={project.href}
                className="group block rounded-2xl overflow-hidden border border-[#E8E6F8] hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300"
              >
                {/* Color block */}
                <div className={`${project.bg} h-32 flex items-end p-4`}>
                  <span className={`inline-block px-2.5 py-1 rounded-full text-xs font-medium ${project.statusColor}`}>
                    {project.status}
                  </span>
                </div>
                {/* Info */}
                <div className="bg-white p-4">
                  <p className="text-xs text-[#9B97C0] font-medium">{project.category}</p>
                  <h3 className="mt-1 text-sm font-bold text-[#0F0A2E]">{project.title}</h3>
                  <div className="mt-3 flex items-center gap-1.5 text-xs font-semibold text-[#2D1BB8] group-hover:gap-2.5 transition-all">
                    View Project <ArrowRight className="w-3 h-3" />
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
