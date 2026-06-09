'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { ArrowRight, Zap, Lightbulb, Code, Palette, Layers, ExternalLink, ArrowUpRight } from 'lucide-react'
import { useState } from 'react'

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 }
}

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
}

export default function DigitalProductLab() {
  const [hoveredProject, setHoveredProject] = useState<number | null>(null)

  const statCards = [
    { label: '10+ Projects', value: '10', suffix: '' },
    { label: '4 AI Tools', value: '4', suffix: '' },
    { label: 'Product Design', value: '100%', suffix: '' },
    { label: 'UI/UX Prototyping', value: 'Active', suffix: '' },
  ]

  const aiWorkflow = [
    {
      tool: 'ChatGPT',
      description: 'Research, planning, storytelling, and structure',
      icon: Lightbulb,
      color: 'from-green-500 to-green-600',
    },
    {
      tool: 'Claude',
      description: 'Refining requirements and creating detailed prompts',
      icon: Zap,
      color: 'from-amber-500 to-amber-600',
    },
    {
      tool: 'Figma AI',
      description: 'Rapid design exploration and iterations',
      icon: Palette,
      color: 'from-purple-500 to-purple-600',
    },
    {
      tool: 'V0',
      description: 'Transforming ideas into functional website prototypes',
      icon: Code,
      color: 'from-blue-500 to-blue-600',
    },
  ]

  const projects = [
    {
      id: 1,
      name: 'Excel Template Bank',
      description: 'Comprehensive library of pre-built Excel templates for business operations, finance, and project management',
      tools: ['V0', 'Claude', 'ChatGPT', 'Figma AI'],
      status: 'Web Prototype',
      statusColor: 'from-green-500 to-green-600',
      thumbnail: '/images/excel-template-bank.png',
      link: 'https://v0-react-project-review-three.vercel.app/',
    },
    {
      id: 2,
      name: 'E-Commerce Marketplace',
      description: 'Multi-vendor marketplace with advanced filtering and search',
      tools: ['V0', 'Claude', 'Figma AI'],
      status: 'Prototype',
      statusColor: 'from-green-500 to-green-600',
      thumbnail: '/placeholder.svg?height=300&width=400',
    },
    {
      id: 3,
      name: 'AI Content Generator',
      description: 'Content creation tool with multiple templates and customization',
      tools: ['ChatGPT', 'V0', 'Claude'],
      status: 'Concept',
      statusColor: 'from-purple-500 to-purple-600',
      thumbnail: '/placeholder.svg?height=300&width=400',
    },
    {
      id: 4,
      name: 'Project Management App',
      description: 'Collaborative workspace for teams with real-time updates',
      tools: ['V0', 'Figma AI', 'Claude'],
      status: 'Prototype',
      statusColor: 'from-blue-500 to-blue-600',
      thumbnail: '/placeholder.svg?height=300&width=400',
    },
    {
      id: 5,
      name: 'Design System UI Kit',
      description: 'Comprehensive component library and design tokens',
      tools: ['Figma AI', 'V0'],
      status: 'Ongoing',
      statusColor: 'from-amber-500 to-amber-600',
      thumbnail: '/placeholder.svg?height=300&width=400',
    },
    {
      id: 6,
      name: 'Learning Platform',
      description: 'Interactive course platform with progress tracking',
      tools: ['ChatGPT', 'V0', 'Figma AI'],
      status: 'Concept',
      statusColor: 'from-purple-500 to-purple-600',
      thumbnail: '/placeholder.svg?height=300&width=400',
    },
  ]

  const timelineEvents = [
    { year: 2024, quarter: 'Q1', projects: 2, focus: 'Foundational experiments' },
    { year: 2024, quarter: 'Q2', projects: 3, focus: 'MVP development' },
    { year: 2024, quarter: 'Q3', projects: 4, focus: 'Design systems' },
    { year: 2024, quarter: 'Q4', projects: 5, focus: 'Advanced prototypes' },
  ]

  const upcomingExperiments = [
    { name: 'Mobile App Prototype', description: 'Cross-platform mobile experience' },
    { name: 'AI Assistant Interface', description: 'Conversational UI design' },
    { name: 'Data Visualization Suite', description: 'Complex data storytelling' },
    { name: 'Web3 Dashboard', description: 'Blockchain integration exploration' },
  ]

  return (
    <main className="bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-[#6D4AFF] to-[#2D1BB8] text-white py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div variants={staggerContainer} initial="initial" animate="animate" className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div variants={fadeIn}>
              <Link href="/portfolio" className="inline-flex items-center gap-2 text-white/80 hover:text-white transition-colors text-sm mb-6">
                ← Back to Portfolio
              </Link>
              <h1 className="text-4xl lg:text-5xl font-bold mb-6 leading-tight">Digital Product Lab</h1>
              <p className="text-lg text-white/90 mb-8 leading-relaxed">
                A collection of website designs, portfolio projects, marketplace concepts, and digital product prototypes created through AI-assisted workflows.
              </p>
              <div className="flex flex-wrap gap-4">
                <button className="bg-white text-[#6D4AFF] px-6 py-3 rounded-lg font-semibold hover:bg-white/90 transition-colors flex items-center gap-2">
                  Explore Projects <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </motion.div>

            <motion.div variants={fadeIn} className="grid grid-cols-2 gap-4">
              {statCards.map((stat, i) => (
                <div key={i} className="bg-white/10 backdrop-blur rounded-xl p-6 border border-white/20 text-center">
                  <div className="text-2xl font-bold mb-2">{stat.value}{stat.suffix}</div>
                  <div className="text-sm text-white/80">{stat.label}</div>
                </div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* About Section - AI Workflow */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div variants={staggerContainer} initial="initial" whileInView="animate" viewport={{ once: true }}>
            <motion.div variants={fadeIn} className="mb-12">
              <h2 className="text-3xl lg:text-4xl font-bold text-[#0F0A2E] mb-4">The AI Workflow</h2>
              <p className="text-gray-600 max-w-3xl">
                Our methodology combines AI tools in a structured workflow to rapidly transform ideas into functional prototypes. Each tool plays a specific role in the development process.
              </p>
            </motion.div>

            <motion.div variants={staggerContainer} className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {aiWorkflow.map((item, i) => {
                const Icon = item.icon
                return (
                  <motion.div
                    key={i}
                    variants={fadeIn}
                    className="bg-gradient-to-br from-white to-gray-50 rounded-2xl p-8 border border-gray-200 hover:shadow-lg transition-shadow"
                  >
                    <div className={`w-12 h-12 bg-gradient-to-br ${item.color} rounded-lg flex items-center justify-center mb-4`}>
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-lg font-bold text-[#0F0A2E] mb-2">{item.tool}</h3>
                    <p className="text-gray-600 text-sm">{item.description}</p>
                  </motion.div>
                )
              })}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Project Gallery Section */}
      <section className="py-20 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div variants={staggerContainer} initial="initial" whileInView="animate" viewport={{ once: true }}>
            <motion.div variants={fadeIn} className="mb-12">
              <h2 className="text-3xl lg:text-4xl font-bold text-[#0F0A2E] mb-4">Project Gallery</h2>
              <p className="text-gray-600">Explore our collection of prototypes and experiments</p>
            </motion.div>

            <motion.div variants={staggerContainer} className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {projects.map((project, i) => (
                <motion.div
                  key={project.id}
                  variants={fadeIn}
                  onHoverStart={() => setHoveredProject(i)}
                  onHoverEnd={() => setHoveredProject(null)}
                  className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-shadow"
                >
                  {/* Project Thumbnail */}
                  <div className="relative h-48 bg-gray-200 overflow-hidden">
                    <img
                      src={project.thumbnail}
                      alt={project.name}
                      className="w-full h-full object-cover"
                    />
                    <div className={`absolute top-4 right-4 bg-gradient-to-r ${project.statusColor} text-white px-3 py-1 rounded-full text-xs font-semibold`}>
                      {project.status}
                    </div>
                  </div>

                  {/* Project Info */}
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-[#0F0A2E] mb-2">{project.name}</h3>
                    <p className="text-gray-600 text-sm mb-4">{project.description}</p>

                    {/* Tools Used */}
                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.tools.map((tool, i) => (
                        <span key={i} className="text-xs bg-gray-100 text-gray-700 px-3 py-1 rounded-full">
                          {tool}
                        </span>
                      ))}
                    </div>

                    {/* View Button */}
                    {project.link ? (
                      <a href={project.link} target="_blank" rel="noopener noreferrer" className="w-full bg-gradient-to-r from-[#6D4AFF] to-[#2D1BB8] text-white py-2 rounded-lg font-semibold hover:shadow-lg transition-shadow flex items-center justify-center gap-2">
                        View Project <ExternalLink className="w-4 h-4" />
                      </a>
                    ) : (
                      <button className="w-full bg-gradient-to-r from-[#6D4AFF] to-[#2D1BB8] text-white py-2 rounded-lg font-semibold hover:shadow-lg transition-shadow flex items-center justify-center gap-2">
                        View Project <ExternalLink className="w-4 h-4" />
                      </button>
                    )}
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div variants={staggerContainer} initial="initial" whileInView="animate" viewport={{ once: true }}>
            <motion.div variants={fadeIn} className="mb-12">
              <h2 className="text-3xl lg:text-4xl font-bold text-[#0F0A2E] mb-4">Growth Timeline</h2>
              <p className="text-gray-600">Evolution of the Digital Product Lab throughout 2024</p>
            </motion.div>

            <motion.div variants={staggerContainer} className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {timelineEvents.map((event, i) => (
                <motion.div
                  key={i}
                  variants={fadeIn}
                  className="bg-gradient-to-br from-white to-gray-50 rounded-2xl p-6 border border-gray-200 hover:shadow-lg transition-shadow"
                >
                  <div className="text-sm font-semibold text-[#6D4AFF] mb-2">{event.year} {event.quarter}</div>
                  <div className="text-3xl font-bold text-[#0F0A2E] mb-2">{event.projects}</div>
                  <div className="text-sm text-gray-600 mb-3">Projects Created</div>
                  <p className="text-xs text-gray-500 italic">{event.focus}</p>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Future Experiments Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div variants={staggerContainer} initial="initial" whileInView="animate" viewport={{ once: true }}>
            <motion.div variants={fadeIn} className="mb-12">
              <h2 className="text-3xl lg:text-4xl font-bold text-[#0F0A2E] mb-4">Future Experiments</h2>
              <p className="text-gray-600">Upcoming projects in development and planning</p>
            </motion.div>

            <motion.div variants={staggerContainer} className="grid md:grid-cols-2 gap-6">
              {upcomingExperiments.map((exp, i) => (
                <motion.div
                  key={i}
                  variants={fadeIn}
                  className="bg-white rounded-2xl p-8 border-2 border-dashed border-gray-300 hover:border-[#6D4AFF] transition-colors"
                >
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h3 className="text-xl font-bold text-[#0F0A2E] mb-2">{exp.name}</h3>
                      <p className="text-gray-600">{exp.description}</p>
                    </div>
                    <ArrowUpRight className="w-5 h-5 text-gray-400" />
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-[#6D4AFF] to-[#2D1BB8] text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div variants={staggerContainer} initial="initial" whileInView="animate" viewport={{ once: true }}>
            <motion.h2 variants={fadeIn} className="text-3xl lg:text-4xl font-bold mb-6">
              Interested in Rapid Prototyping?
            </motion.h2>
            <motion.p variants={fadeIn} className="text-lg text-white/90 mb-8 max-w-2xl mx-auto">
              Let&apos;s discuss how AI-assisted development can accelerate your product innovation and bring ideas to life faster.
            </motion.p>
            <motion.div variants={fadeIn}>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 bg-white text-[#6D4AFF] px-8 py-4 rounded-full font-semibold hover:bg-white/90 transition-colors"
              >
                Start a Project <ArrowRight className="w-4 h-4" />
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </main>
  )
}
