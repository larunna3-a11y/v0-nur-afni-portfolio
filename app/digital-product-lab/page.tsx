'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { ArrowRight, Zap, Lightbulb, Code, Palette, Layers, ExternalLink, ArrowUpRight, FileText, Presentation, Download } from 'lucide-react'
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
    { label: 'Projects Shipped', value: '3+', suffix: '' },
    { label: 'Ideas in Progress', value: '4', suffix: '' },
    { label: 'Self-Taught', value: '100%', suffix: '' },
    { label: 'Always Building', value: '✦', suffix: '' },
  ]

  const aiWorkflow = [
    {
      tool: 'ChatGPT',
      description: 'Where it starts — brainstorming, researching, and mapping out what the thing should actually do',
      icon: Lightbulb,
      color: 'from-green-500 to-green-600',
    },
    {
      tool: 'Claude',
      description: 'Thinking partner for shaping the idea, writing clearer briefs, and figuring out what I actually want to build',
      icon: Zap,
      color: 'from-amber-500 to-amber-600',
    },
    {
      tool: 'Figma AI',
      description: 'Exploring how it could look before committing to anything — fast, low-stakes visual thinking',
      icon: Palette,
      color: 'from-purple-500 to-purple-600',
    },
    {
      tool: 'V0',
      description: 'Where the idea becomes a real, clickable thing — no coding background required',
      icon: Code,
      color: 'from-blue-500 to-blue-600',
    },
    {
      tool: 'Lovable',
      description: 'Turning prompts into full working web apps — my go-to when I want something that actually runs, not just looks good',
      icon: Zap,
      color: 'from-pink-500 to-rose-600',
    },
    {
      tool: 'UseAi',
      description: 'Sketching out UI concepts fast — great for when the idea is clear in my head but I need to get it on screen quickly',
      icon: Palette,
      color: 'from-cyan-500 to-cyan-600',
    },
    {
      tool: 'Stitch',
      description: 'Pulling together design pieces and experimenting with how different elements can work together in one place',
      icon: Lightbulb,
      color: 'from-violet-500 to-violet-600',
    },
  ]

  const projects = [
    {
      id: 1,
      name: 'Excel Template Bank',
      description: 'Started because I kept making the same spreadsheets over and over. Now it\'s a proper library of ready-to-use templates for business ops, finance, and project tracking.',
      tools: ['V0', 'Claude', 'ChatGPT', 'Figma AI'],
      status: 'Webite',
      statusColor: 'from-green-500 to-green-600',
      thumbnail: '/images/excel-template-bank.png',
      link: 'https://v0-react-project-review-three.vercel.app/',
    },
    {
      id: 2,
      name: 'WorkflowOS',
      description: 'Built out of frustration with messy group projects. A structured workspace where tasks actually get done — with checkpoints, approvals, and clear roles.',
      tools: ['ChatGPT', 'Claude', 'LovableDev'],
      status: 'Projects Task',
      statusColor: 'from-pink-500 to-pink-600',
      thumbnail: '/images/WorkflowOS-dashboard.png',
      link: 'https://stepbystep-app.lovable.app/'
    },
    {
      id: 3,
      name: 'ArtChy',
      description: 'A passion project born from late-night Wikipedia rabbit holes. A digital space that connects artworks, artists, and the stories behind them.',
      tools: ['Lovable', 'Claude', 'ChatGPT'],
      status: 'Art Galery',
      statusColor: 'from-cyan-500 to-teal-600',
      thumbnail: '/images/Artchy.png',
      link: 'https://curious-canvas-cosmos.lovable.app/'
    },
    {
      id: 4,
      name: 'FlowOp warehouse manager',
      description: 'FlowOps unifies packing, scanning, returns and reporting in a single workspace built for e-commerce brands, marketplace sellers and warehouse teams.',
      tools: ['Lovable', 'chatGPT', 'Claude', 'bolt'],
      status: 'Website Apps',
      statusColor: 'from-blue-500 to-blue-600',
      thumbnail: '/images/flowops.png',
       link:'https://flow-ops-hq.lovable.app/'
    },
    {
      id: 5,
      name: 'Design System UI Kit',
      description: 'Building a personal design system so every future project starts with a consistent, polished foundation.',
      tools: ['Figma AI', 'V0'],
      status: 'Ongoing',
      statusColor: 'from-amber-500 to-amber-600',
      thumbnail: '/placeholder.svg?height=300&width=400',
    },
    {
      id: 6,
      name: 'Learning Platform',
      description: 'What if learning something new online didn\'t feel like a chore? Exploring what a genuinely enjoyable course platform could look like.',
      tools: ['ChatGPT', 'V0', 'Figma AI'],
      status: 'Concept',
      statusColor: 'from-purple-500 to-purple-600',
      thumbnail: '/placeholder.svg?height=300&width=400',
    },
  ]

  // Mock data — swap `cover`, `pdfUrl`, and `pptxUrl` for the real files later.
  // Files should live in /public (e.g. /public/files/digital-marketing-101.pdf)
  // so the `download` attribute can fetch them same-origin.
  const modules = [
    {
      id: 1,
      title: 'Digital Marketing 101',
      level: 'Beginner & Business Practitioners',
      description: 'Understanding how a business earns attention, customers, and sales in the digital era.',
      cover: '/moduel/digimar101.png',
      pdfUrl: '/moduel/Digital-Marketing-101.pdf',
      pptxUrl: '/moduel/Digital-Marketing-101.pptx',
    },
    {
      id: 2,
      title: 'Content Strategy Playbook',
      level: 'Intermediate',
      description: 'A practical framework for planning content that supports real business goals, not just a calendar.',
      cover: '/placeholder.svg?height=300&width=400',
      pdfUrl: '/files/content-strategy-playbook.pdf',
      pptxUrl: '/files/content-strategy-playbook.pptx',
    },
    {
      id: 3,
      title: 'Social Ads Crash Course',
      level: 'Beginner',
      description: 'The basics of running paid social campaigns that find an audience before they burn the budget.',
      cover: '/placeholder.svg?height=300&width=400',
      pdfUrl: '/files/social-ads-crash-course.pdf',
      pptxUrl: '/files/social-ads-crash-course.pptx',
    },
    {
      id: 4,
      title: 'Email Marketing Fundamentals',
      level: 'Beginner',
      description: 'Building lists, writing subject lines people open, and setting up flows that work while you sleep.',
      cover: '/placeholder.svg?height=300&width=400',
      pdfUrl: '/files/email-marketing-fundamentals.pdf',
      pptxUrl: '/files/email-marketing-fundamentals.pptx',
    },
  ]

  const upcomingExperiments = [
    { name: 'Mobile App Prototype', description: 'What would this feel like on a phone? Exploring the same ideas in a smaller, more personal format.' },
    { name: 'AI Assistant Interface', description: 'Designing a smarter, warmer way to interact with AI — less robotic, more like talking to someone useful.' },
    { name: 'Data Visualization Suite', description: 'Because numbers don\'t tell stories on their own. Building tools that make data actually make sense.' },
    { name: 'E-Commerce Toolkit', description: 'A practical suite of tools for marketplace sellers — built from years of managing shops firsthand.' },
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
              <h1 className="text-4xl lg:text-5xl font-bold mb-6 leading-tight">The Lab</h1>
              <p className="text-lg text-white/90 mb-8 leading-relaxed">
                What happens when a marketer gets curious and refuses to stop at "that's not my job"? This. A personal space where ideas become real things — tools, products, and websites built out of genuine curiosity and a habit of figuring things out.
              </p>
              <div className="flex flex-wrap gap-4">
                <button className="bg-white text-[#6D4AFF] px-6 py-3 rounded-lg font-semibold hover:bg-white/90 transition-colors flex items-center gap-2">
                  See What I've Built <ArrowRight className="w-4 h-4" />
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
              <h2 className="text-3xl lg:text-4xl font-bold text-[#0F0A2E] mb-4">How I Actually Build These</h2>
              <p className="text-gray-600 max-w-3xl">
                I'm not a developer. But I've learned that curiosity + the right tools can take you surprisingly far. Here's the honest breakdown of how I go from "what if this existed?" to something you can actually click on.
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

      {/* Featured Projects Section */}
      <section className="py-20 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div variants={staggerContainer} initial="initial" whileInView="animate" viewport={{ once: true }}>
            <motion.div variants={fadeIn} className="mb-12">
              <h2 className="text-3xl lg:text-4xl font-bold text-[#0F0A2E] mb-4">Things I've Built</h2>
              <p className="text-gray-600">Each one started as a problem I noticed, a gap I wanted to fill, or just a question I couldn't stop thinking about.</p>
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

      {/* Modules Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div variants={staggerContainer} initial="initial" whileInView="animate" viewport={{ once: true }}>
            <motion.div variants={fadeIn} className="mb-12">
              <h2 className="text-3xl lg:text-4xl font-bold text-[#0F0A2E] mb-4">Modules You Can Download</h2>
              <p className="text-gray-600 max-w-2xl">Guides I've put together along the way — free to grab as a PDF or PowerPoint, whichever you'll actually use.</p>
            </motion.div>

            <motion.div variants={staggerContainer} className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {modules.map((mod) => (
                <motion.div
                  key={mod.id}
                  variants={fadeIn}
                  className="bg-white rounded-2xl overflow-hidden border border-gray-200 hover:shadow-xl transition-shadow flex flex-col"
                >
                  {/* Cover */}
                  <div className="relative h-40 bg-gray-100 overflow-hidden">
                    <img
                      src={mod.cover}
                      alt={mod.title}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  {/* Info */}
                  <div className="p-6 flex flex-col flex-1">
                    <div className="text-xs font-semibold text-[#6D4AFF] mb-2 uppercase tracking-wide">{mod.level}</div>
                    <h3 className="text-lg font-bold text-[#0F0A2E] mb-2">{mod.title}</h3>
                    <p className="text-sm text-gray-600 mb-6 flex-1">{mod.description}</p>

                    {/* Downloads */}
                    <div className="space-y-2">
                      <a
                        href={mod.pdfUrl}
                        download
                        className="flex items-center gap-3 bg-red-50 hover:bg-red-100 transition-colors rounded-xl px-3 py-2.5"
                      >
                        <div className="w-8 h-8 rounded-lg bg-red-500 flex items-center justify-center flex-shrink-0">
                          <FileText className="w-4 h-4 text-white" />
                        </div>
                        <span className="text-sm font-semibold text-[#0F0A2E] flex-1">PDF</span>
                        <Download className="w-4 h-4 text-gray-400" />
                      </a>
                      <a
                        href={mod.pptxUrl}
                        download
                        className="flex items-center gap-3 bg-orange-50 hover:bg-orange-100 transition-colors rounded-xl px-3 py-2.5"
                      >
                        <div className="w-8 h-8 rounded-lg bg-orange-500 flex items-center justify-center flex-shrink-0">
                          <Presentation className="w-4 h-4 text-white" />
                        </div>
                        <span className="text-sm font-semibold text-[#0F0A2E] flex-1">PPTX</span>
                        <Download className="w-4 h-4 text-gray-400" />
                      </a>
                    </div>
                  </div>
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
              <h2 className="text-3xl lg:text-4xl font-bold text-[#0F0A2E] mb-4">What's Coming Next</h2>
              <p className="text-gray-600">Ideas living rent-free in my head. Some are half-sketched, some are just a question I haven't answered yet.</p>
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
              Got an idea you can't stop thinking about?
            </motion.h2>
            <motion.p variants={fadeIn} className="text-lg text-white/90 mb-8 max-w-2xl mx-auto">
              So do I — constantly. If you want to collaborate, need a fresh perspective, or just want to talk through something, I&apos;m always up for it.
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