'use client'

import Image from 'next/image'
import { useEffect, useRef, useState } from 'react'
import { ChevronLeft, ChevronRight, Image as ImageIcon, Smartphone, Box } from 'lucide-react'

type CreativeSlide = { src: string; title: string; brand: string; description: string }
type Category = { label: string; description: string; icon: typeof ImageIcon; slides: CreativeSlide[] }

const marketplaceSlides: CreativeSlide[] = [
  { src: '/design-creative/1.png', title: 'Giant Sale Campaign', brand: 'QCY & Choetech', description: 'Marketplace campaign banner created for a high-impact promotional moment.' },
  { src: '/design-creative/2.png', title: 'Promotional Campaign Visual', brand: 'QCY Indonesia', description: 'Promotional visual balancing product focus, offer messaging, and strong hierarchy.' },
  { src: '/design-creative/3.png', title: 'Product Campaign Banner', brand: 'Choetech Indonesia', description: 'Product-led campaign creative designed for marketplace visibility.' },
  { src: '/design-creative/4.png', title: 'Brand Promotion Visual', brand: 'Choetech Indonesia', description: 'A clean promotional composition built around brand and product storytelling.' },
  { src: '/design-creative/12.12 Choetech.png', title: '12.12 Choetech Campaign', brand: 'Choetech Indonesia', description: 'Seasonal marketplace banner for a major shopping campaign.' },
  { src: '/design-creative/12.12 QCY.png', title: '12.12 QCY Campaign', brand: 'QCY Indonesia', description: 'Seasonal campaign visual combining product presentation and promotional messaging.' },
  { src: '/design-creative/CHoetech cuci gudang 1.png', title: 'Clearance Campaign', brand: 'Choetech Indonesia', description: 'Clearance campaign banner with direct offer-led communication.' },
]

const socialMediaSlides: CreativeSlide[] = [
  { src: '/design-social/1.png', title: 'QCY Product Story', brand: 'QCY Indonesia', description: 'Square social media creative presenting product value through a clear, campaign-led visual story.' },
  { src: '/design-social/2.png', title: 'Choetech Product Feature', brand: 'Choetech Indonesia', description: 'Product-focused social content designed to make technical features easy to understand.' },
  { src: '/design-social/3.png', title: 'Lifestyle Product Visual', brand: 'QCY Indonesia', description: 'Lifestyle-led campaign content connecting the product with everyday listening moments.' },
  { src: '/design-social/4-1.png', title: 'Campaign Carousel Series', brand: 'Choetech Indonesia', description: 'A multi-slide social series combining education, product benefits, and visual consistency.' },
  { src: '/design-social/4-2.png', title: 'Product Benefits Carousel', brand: 'Choetech Indonesia', description: 'Educational carousel content that turns product specifications into approachable messaging.' },
  { src: '/design-social/4-3.png', title: 'Feature Education Post', brand: 'Choetech Indonesia', description: 'Informative social design with a strong hierarchy for fast mobile reading.' },
  { src: '/design-social/4-4.png', title: 'Social Campaign Detail', brand: 'Choetech Indonesia', description: 'Supporting campaign visual built to keep a product story cohesive across a feed.' },
  { src: '/design-social/4-5.png', title: 'Campaign Closing Visual', brand: 'Choetech Indonesia', description: 'Final carousel frame reinforcing the campaign message and product recall.' },
  { src: '/design-social/27-1.png', title: 'Seasonal Social Campaign', brand: 'QCY Indonesia', description: 'Seasonal feed design balancing promotional messaging with a recognizable brand look.' },
  { src: '/design-social/27-2.png', title: 'Social Product Highlight', brand: 'QCY Indonesia', description: 'A focused product highlight created for consistent campaign storytelling.' },
]

const categories: Category[] = [
  { label: 'Marketplace Banner', description: 'Campaign & promotional visuals', icon: ImageIcon, slides: marketplaceSlides },
  { label: 'Social Media Design', description: 'Educational & campaign content', icon: Smartphone, slides: socialMediaSlides },
  { label: 'Product Storefront', description: 'Etalase, product listing & catalog', icon: Box, slides: [] },
]

function getOffset(index: number, active: number, length: number) {
  let offset = index - active
  if (offset > length / 2) offset -= length
  if (offset < -length / 2) offset += length
  return offset
}

export function DesignCreativeCarousel() {
  const [categoryIndex, setCategoryIndex] = useState(0)
  const [activeIndex, setActiveIndex] = useState(0)
  const [dragStart, setDragStart] = useState<number | null>(null)
  const category = categories[categoryIndex]
  const slides = category.slides
  const isSocialMedia = category.label === 'Social Media Design'
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null)

  const goTo = (index: number) => setActiveIndex((index + slides.length) % slides.length)
  const selectCategory = (index: number) => {
    setCategoryIndex(index)
    setActiveIndex(0)
  }

  useEffect(() => {
    if (!slides.length) return
    timerRef.current = setInterval(() => setActiveIndex((current) => (current + 1) % slides.length), 6000)
    return () => { if (timerRef.current) clearInterval(timerRef.current) }
  }, [slides.length, categoryIndex])

  return (
    <section className="bg-[#F8F7FF] py-20" aria-labelledby="design-creative-heading">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[#2D1BB8]">DESIGN &amp; CREATIVE</p>
            <h2 id="design-creative-heading" className="mt-3 text-3xl font-bold text-[#0F0A2E] sm:text-4xl">Design &amp; Creative</h2>
            <p className="mt-4 text-[#4B4680] leading-relaxed">A collection of visual work created across marketplace, social media, and e-commerce storefronts.</p>
          </div>
          <div className="rounded-2xl border border-[#E8E6F8] bg-white px-5 py-4 text-sm text-[#4B4680]">Ideas into impact through visual storytelling.</div>
        </div>

        <div className="mt-10 grid gap-3 md:grid-cols-3" role="tablist" aria-label="Creative categories">
          {categories.map((item, index) => {
            const Icon = item.icon
            const selected = categoryIndex === index
            return <button key={item.label} type="button" role="tab" aria-selected={selected} onClick={() => selectCategory(index)} className={`flex items-center gap-4 rounded-2xl border px-5 py-4 text-left transition-colors ${selected ? 'border-[#2D1BB8] bg-[#2D1BB8] text-white' : 'border-[#E8E6F8] bg-white text-[#0F0A2E] hover:border-[#9B97C0]'}`}>
              <span className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-xl ${selected ? 'bg-white/15' : 'bg-[#E8E6F8]'}`}><Icon className={`h-5 w-5 ${selected ? 'text-white' : 'text-[#2D1BB8]'}`} /></span>
              <span><span className="block font-semibold">{item.label}</span><span className={`mt-1 block text-sm ${selected ? 'text-white/75' : 'text-[#6D6A91]'}`}>{item.description}</span></span>
            </button>
          })}
        </div>

        {slides.length ? <>
          <div className="relative mt-12 overflow-hidden pb-8 pt-4" onPointerDown={(event) => setDragStart(event.clientX)} onPointerUp={(event) => { if (dragStart === null) return; const delta = event.clientX - dragStart; if (Math.abs(delta) > 50) goTo(activeIndex + (delta < 0 ? 1 : -1)); setDragStart(null) }}>
            <div className={`relative mx-auto w-full max-w-6xl ${isSocialMedia ? 'h-[360px] sm:h-[500px] lg:h-[620px]' : 'h-[220px] sm:h-[330px] lg:h-[460px]'}`}>
              {slides.map((slide, index) => {
                const offset = getOffset(index, activeIndex, slides.length)
                const visible = Math.abs(offset) <= 2
                const active = offset === 0
                return <button key={slide.src} type="button" aria-label={`Show ${slide.title}`} aria-pressed={active} onClick={() => goTo(index)} className={`absolute left-1/2 top-1/2 overflow-hidden rounded-2xl border border-[#E8E6F8] bg-white shadow-lg transition-[transform,opacity,filter] duration-600 ease-out ${visible ? 'pointer-events-auto' : 'pointer-events-none'}`} style={{ width: isSocialMedia ? 'min(62vw, 496px)' : 'min(78vw, 820px)', aspectRatio: isSocialMedia ? '4 / 5' : undefined, height: isSocialMedia ? 'auto' : '100%', zIndex: active ? 30 : 20 - Math.abs(offset), opacity: active ? 1 : visible ? 0.4 : 0, transform: `translate(-50%, -50%) translateX(calc(${offset} * ${isSocialMedia ? 'min(42vw, 430px)' : 'min(60vw, 570px)'})) scale(${active ? 1 : 0.78})`, filter: active ? 'none' : 'saturate(0.7)' }}>
                  <Image src={slide.src} alt={slide.title} fill sizes="(max-width: 768px) 78vw, 820px" className="object-cover" />
                  {!active && <span className="absolute inset-0 bg-[#0F0A2E]/10" aria-hidden="true" />}
                </button>
              })}
              <button type="button" aria-label="Previous banner" onClick={() => goTo(activeIndex - 1)} className="absolute left-1/2 top-1/2 z-40 flex h-11 w-11 -translate-x-[calc(50%+min(40vw,400px))] -translate-y-1/2 items-center justify-center rounded-full bg-white text-[#2D1BB8] shadow-md hover:scale-105"><ChevronLeft className="h-5 w-5" /></button>
              <button type="button" aria-label="Next banner" onClick={() => goTo(activeIndex + 1)} className="absolute left-1/2 top-1/2 z-40 flex h-11 w-11 -translate-x-[calc(50%-min(40vw,400px))] -translate-y-1/2 items-center justify-center rounded-full bg-white text-[#2D1BB8] shadow-md hover:scale-105"><ChevronRight className="h-5 w-5" /></button>
            </div>
            <div className="mt-5 flex justify-center gap-2" role="tablist" aria-label={`${category.label} slides`}>{slides.map((slide, index) => <button key={slide.src} type="button" aria-label={`Go to ${slide.title}`} aria-selected={activeIndex === index} onClick={() => goTo(index)} className={`h-2.5 rounded-full transition-all duration-300 ${activeIndex === index ? 'w-7 bg-[#2D1BB8]' : 'w-2.5 bg-[#C9C6E6] hover:bg-[#9B97C0]'}`} />)}</div>
          </div>
          <div className="rounded-2xl border border-[#E8E6F8] bg-white p-6 sm:p-8"><p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#2D1BB8]">{category.label}</p><div className="mt-2 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between"><h3 className="text-2xl font-bold text-[#0F0A2E]">{slides[activeIndex].title}</h3><span className="text-sm text-[#4B4680]">{activeIndex + 1} / {slides.length}</span></div><p className="mt-3 max-w-3xl text-[#4B4680] leading-relaxed">{slides[activeIndex].description}</p><p className="mt-2 text-sm font-medium text-[#6D4AFF]">{slides[activeIndex].brand}</p></div>
          <div className="mt-8"><h3 className="mb-4 text-lg font-bold text-[#0F0A2E]">More {category.label}</h3><div className="grid grid-cols-2 gap-3 sm:grid-cols-4 lg:grid-cols-7">{slides.map((slide, index) => <button key={slide.src} type="button" onClick={() => goTo(index)} className={`overflow-hidden rounded-xl border-2 bg-white text-left ${activeIndex === index ? 'border-[#2D1BB8]' : 'border-transparent'}`}><div className={`relative ${isSocialMedia ? 'aspect-[4/5]' : 'aspect-[16/9]'}`}><Image src={slide.src} alt={slide.title} fill sizes="160px" className="object-cover" /></div><span className="block truncate px-2 py-2 text-xs text-[#4B4680]">{slide.title}</span></button>)}</div></div>
        </> : <div className="mt-10 rounded-2xl border border-dashed border-[#C9C6E6] bg-white p-10 text-center text-[#4B4680]">This showcase is coming soon. New work will be added here.</div>}
      </div>
    </section>
  )
}
