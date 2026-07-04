'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'

const projects = [
  {
    name: 'FlowOps',
    description: 'Warehouse workflow platform for managing inbound, outbound, and inventory operations.',
    status: 'Active Development',
    statusColor: 'bg-green-50 text-green-700 border-green-200',
    dot: 'bg-green-500',
    href: '/digital-product-lab',
  },
  {
    name: 'StyleDNA',
    description: 'AI-powered personal styling platform that recommends outfits based on style identity.',
    status: 'Active Development',
    statusColor: 'bg-green-50 text-green-700 border-green-200',
    dot: 'bg-green-500',
    href: '/digital-product-lab',
  },
  {
    name: 'Artchy',
    description: 'Digital art discovery platform connecting Indonesian art enthusiasts with creators.',
    status: 'Live',
    statusColor: 'bg-blue-50 text-blue-700 border-blue-200',
    dot: 'bg-blue-500',
    href: '/digital-product-lab',
  },
  {
    name: 'Pustaka Hukum Indonesia',
    description: 'AI-assisted legal knowledge platform making Indonesian law accessible and understandable.',
    status: 'Concept & Research',
    statusColor: 'bg-amber-50 text-amber-700 border-amber-200',
    dot: 'bg-amber-400',
    href: '/digital-product-lab',
  },
]

export function AboutBuilding() {
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
              Now
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-[#0F0A2E]">Currently Building</h2>
          </div>
          <Link
            href="/digital-product-lab"
            className="inline-flex items-center gap-2 text-sm font-semibold text-[#2D1BB8] hover:gap-3 transition-all shrink-0"
          >
            Digital Product Lab <ArrowRight className="w-4 h-4" />
          </Link>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {projects.map((project, i) => (
            <motion.div
              key={project.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
            >
              <Link
                href={project.href}
                className="group flex flex-col bg-[#F8F7FF] border border-[#E8E6F8] rounded-2xl p-6 h-full hover:border-[#2D1BB8]/30 hover:shadow-md hover:-translate-y-0.5 transition-all duration-300"
              >
                {/* Status badge */}
                <span className={`self-start inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium border ${project.statusColor} mb-4`}>
                  <span className={`w-1.5 h-1.5 rounded-full ${project.dot}`} />
                  {project.status}
                </span>

                <h3 className="text-base font-bold text-[#0F0A2E] mb-2">{project.name}</h3>
                <p className="text-sm text-[#4B4680] leading-relaxed flex-1">{project.description}</p>

                <div className="mt-4 inline-flex items-center gap-1.5 text-xs font-semibold text-[#2D1BB8] group-hover:gap-2.5 transition-all">
                  Learn more <ArrowRight className="w-3 h-3" />
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
