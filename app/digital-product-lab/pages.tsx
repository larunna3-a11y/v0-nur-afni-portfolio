'use client'

import { useMemo, useState } from 'react'
import { motion } from 'framer-motion'
import {
  ArrowRight,
  BookOpen,
  Check,
  ChevronRight,
  Clock3,
  Download,
  FileText,
  FolderOpen,
  GraduationCap,
  Grid2X2,
  List,
  Play,
  Presentation,
  Search,
  SlidersHorizontal,
  Sparkles,
} from 'lucide-react'

type MaterialType = 'PDF' | 'PPT'
type MaterialLevel = 'Beginner' | 'Intermediate' | 'Advanced'

type Material = {
  id: number
  title: string
  description: string
  category: string
  type: MaterialType
  level: MaterialLevel
  duration: string
  pages: string
  progress: number
  featured?: boolean
  updated: string
  href: string
  accent: string
}

const fadeIn = {
  initial: { opacity: 0, y: 18 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 },
}

const stagger = {
  animate: {
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.1,
    },
  },
}

const materials: Material[] = [
  {
    id: 1,
    title: 'Marketplace Operations Fundamentals',
    description:
      'A practical introduction to daily marketplace operations, store health, order flow, and the metrics that matter.',
    category: 'Operations',
    type: 'PDF',
    level: 'Beginner',
    duration: '35 min',
    pages: '42 pages',
    progress: 68,
    featured: true,
    updated: 'Updated 2 days ago',
    href: '#',
    accent: 'from-violet-500 to-indigo-700',
  },
  {
    id: 2,
    title: 'Campaign Planning Playbook',
    description:
      'Plan stronger campaigns with a repeatable structure for objectives, mechanics, assets, timelines, and reporting.',
    category: 'Marketing',
    type: 'PPT',
    level: 'Intermediate',
    duration: '45 min',
    pages: '38 slides',
    progress: 25,
    featured: true,
    updated: 'Updated 1 week ago',
    href: '#',
    accent: 'from-fuchsia-500 to-purple-700',
  },
  {
    id: 3,
    title: 'Excel Reporting Essentials',
    description:
      'Learn the formulas, clean-up habits, and reporting layouts used to turn raw data into clear weekly insights.',
    category: 'Analytics',
    type: 'PDF',
    level: 'Beginner',
    duration: '30 min',
    pages: '28 pages',
    progress: 100,
    updated: 'Updated 3 days ago',
    href: '#',
    accent: 'from-emerald-500 to-teal-700',
  },
  {
    id: 4,
    title: 'Customer Experience Standards',
    description:
      'Response principles, escalation paths, and simple frameworks for creating a consistent customer experience.',
    category: 'Customer Care',
    type: 'PPT',
    level: 'Beginner',
    duration: '25 min',
    pages: '24 slides',
    progress: 0,
    updated: 'Updated 2 weeks ago',
    href: '#',
    accent: 'from-sky-500 to-blue-700',
  },
  {
    id: 5,
    title: 'Advanced Performance Analysis',
    description:
      'Go beyond surface-level metrics and diagnose conversion, traffic, product, and campaign performance.',
    category: 'Analytics',
    type: 'PDF',
    level: 'Advanced',
    duration: '55 min',
    pages: '61 pages',
    progress: 0,
    updated: 'Updated yesterday',
    href: '#',
    accent: 'from-orange-500 to-rose-600',
  },
  {
    id: 6,
    title: 'Product Listing Optimization',
    description:
      'A visual guide to improving product titles, images, descriptions, attributes, and search discoverability.',
    category: 'Operations',
    type: 'PPT',
    level: 'Intermediate',
    duration: '40 min',
    pages: '33 slides',
    progress: 12,
    updated: 'Updated 5 days ago',
    href: '#',
    accent: 'from-amber-400 to-orange-600',
  },
]

const categories = ['All materials', ...Array.from(new Set(materials.map((item) => item.category)))]

export default function ModulesPage() {
  const [query, setQuery] = useState('')
  const [activeCategory, setActiveCategory] = useState('All materials')
  const [activeType, setActiveType] = useState<'All' | MaterialType>('All')
  const [view, setView] = useState<'grid' | 'list'>('grid')

  const filteredMaterials = useMemo(() => {
    const normalizedQuery = query.trim().toLowerCase()

    return materials.filter((material) => {
      const matchesQuery =
        !normalizedQuery ||
        material.title.toLowerCase().includes(normalizedQuery) ||
        material.description.toLowerCase().includes(normalizedQuery) ||
        material.category.toLowerCase().includes(normalizedQuery)
      const matchesCategory =
        activeCategory === 'All materials' || material.category === activeCategory
      const matchesType = activeType === 'All' || material.type === activeType

      return matchesQuery && matchesCategory && matchesType
    })
  }, [activeCategory, activeType, query])

  const featuredMaterials = materials.filter((material) => material.featured)

  return (
    <main className="min-h-screen bg-[#F7F7FB] text-[#130D33]">
      <section className="relative overflow-hidden bg-gradient-to-br from-[#7454FF] via-[#5D3FE8] to-[#2D1A9B] text-white">
        <div className="absolute -right-24 -top-24 h-80 w-80 rounded-full bg-white/10 blur-3xl" />
        <div className="absolute -bottom-28 left-1/3 h-72 w-72 rounded-full bg-fuchsia-400/20 blur-3xl" />

        <div className="relative mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
          <motion.div
            variants={stagger}
            initial="initial"
            animate="animate"
            className="grid items-center gap-12 lg:grid-cols-[1.25fr_.75fr]"
          >
            <motion.div variants={fadeIn}>
              <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm text-white/90 backdrop-blur">
                <Sparkles className="h-4 w-4" />
                Learning & resource center
              </div>
              <h1 className="max-w-3xl text-4xl font-bold leading-tight tracking-tight sm:text-5xl lg:text-6xl">
                Build your skills, one module at a time.
              </h1>