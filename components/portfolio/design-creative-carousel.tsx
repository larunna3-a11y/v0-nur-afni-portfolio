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
  { src: '/design-creative/7.png', title: '7.7 Musical Campaign with spotify', brand: 'QCY Indonesia', description: 'Promotional 7.7 Sale special with free gift.' },
]

const socialMediaSlides: CreativeSlide[] = [
  ['6-16.png', 'QCY Offline Store', "Product launch creative highlighting of the products it's here close yout doorstep from our offlinr distributor with new-arrival positioning."],
  ['48.png', 'Choetech ECN TWS new feature', 'Promotional social creative highlighting the compact 65W charger and offer messaging.'],
  ['H010.png', 'QCY Playlist — Armageddon', "Lifestyle-driven social creative connecting QCY's audio products with music and playlist culture."],
  ['49.png', 'Choetech Product Feature', 'Product feature creative presenting the featured Choetech device through clear visual storytelling.'],
  ['8.png', 'QCY Audio Product Story', 'Brand storytelling creative focused on QCY listening and audio-product culture.'],
  ['14.png', 'QCY Campaign Promotion', 'Campaign creative combining QCY product imagery with promotional communication.'],
  ['10-4.png', 'QCY Product Highlight', 'Product-focused social creative presenting a QCY device and its visual identity.'],
  ['B651 (2).png', 'Choetech Charging Solution', 'Product feature creative centered on a Choetech charging accessory.'],
  ['29.png', 'QCY Lifestyle Visual', 'Lifestyle social creative connecting an audio product with an everyday visual concept.'],
  ['15.png', 'QCY Product Promotion', 'Promotional social creative built around QCY product presentation and campaign messaging.'],
  ['12.png', 'QCY Audio Campaign', 'Campaign visual presenting QCY audio products in a bold social-first composition.'],
  ['10-2.png', 'QCY Product Feature', 'Feature-led social creative highlighting a QCY product through concise visual communication.'],
  ['10-3.png', 'QCY Product Detail', 'Product detail creative using focused composition to support product understanding.'],
  ['13.png', 'QCY Brand Story', 'Brand storytelling creative built around QCY products and listening culture.'],
  ['11.png', 'QCY Music Lifestyle', 'Lifestyle-driven creative linking QCY audio products with music-focused content.'],
  ['B651 (3).png', 'Choetech Accessory Feature', 'Product feature creative presenting a Choetech accessory and its campaign context.'],
  ['10-1.png', 'QCY Product Campaign', 'Product campaign visual communicating a QCY offering through social storytelling.'],
  ['10.png', 'QCY Product Launch', 'Launch-oriented social creative introducing a QCY product with a clear visual hierarchy.'],
  ['4 (2).png', 'QCY Audio Promotion', 'Promotional creative focused on QCY audio products and campaign messaging.'],
  ['Photo product  H067.png', 'QCY Product Showcase', 'Product showcase visual presenting the QCY device as the central campaign subject.'],
  ['21.png', 'QCY Campaign Story', 'Social campaign creative combining QCY product imagery with brand-led storytelling.'],
  ['XCC-1036.png', 'QCY Product Feature', 'Feature-focused creative presenting the product through a clean social media composition.'],
  ['20.png', 'QCY Lifestyle Campaign', 'Lifestyle campaign visual connecting the product with an everyday usage story.'],
  ['22.png', 'QCY Product Promotion', 'Promotional social creative emphasizing the product through concise campaign messaging.'],
  ['27.png', 'QCY Audio Visual', 'Audio-focused brand visual presenting a QCY product for social media engagement.'],
  ['21 2.png', 'QCY Campaign Variation', 'Campaign variation extending the QCY visual story across the social feed.'],
  ['24.png', 'QCY Product Story', 'Product storytelling creative using a focused visual composition for social content.'],
  ['25.png', 'QCY Feature Promotion', 'Feature-led promotional creative presenting a QCY product and its campaign message.'],
  ['3-3.png', 'QCY Audio Campaign', 'Audio campaign creative built around QCY product presentation and visual storytelling.'],
  ['4.png', 'QCY Product Highlight', 'Product highlight creative placing the QCY device at the center of the social visual.'],
  ['5.png', 'QCY Lifestyle Story', 'Lifestyle storytelling creative connecting QCY products with an everyday experience.'],
  ['3-2.png', 'QCY Product Campaign', 'Product campaign visual designed to communicate a QCY offering in-feed.'],
  ['7.png', 'QCY Music Campaign', 'Music-led campaign creative connecting QCY audio products with listening culture.'],
  ['6.png', 'QCY Product Feature', 'Product feature visual presenting a QCY device through clear social storytelling.'],
  ['3-1.png', 'QCY Brand Promotion', 'Brand promotion creative using QCY product imagery and campaign-focused composition.'],
  ['3-4.png', 'QCY Product Story', 'Product story creative extending the QCY campaign across a consistent visual series.'],
  ['B651.png', 'Choetech Product Promotion', 'Promotional social creative focused on a Choetech accessory and product presentation.'],
  ['47.png', 'QCY Product Visual', 'Product-led social creative presenting QCY imagery in a concise campaign format.'],
  ['T200-F.png', 'QCY T200 Product Feature', 'Product feature creative highlighting the QCY T200 through social visual storytelling.'],
].map(([filename, title, description]) => ({
  src: `/design-social-new/QCY%20Catalog%20Instagaram-2024/${encodeURIComponent(filename)}`,
  title,
  brand: title.startsWith('Choetech') ? 'Choetech Indonesia' : 'QCY Indonesia',
  description,
}))

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
            <div className={`relative mx-auto w-full max-w-6xl ${isSocialMedia ? 'h-[300px] sm:h-[420px] lg:h-[520px]' : 'h-[220px] sm:h-[330px] lg:h-[460px]'}`}>
              {slides.map((slide, index) => {
                const offset = getOffset(index, activeIndex, slides.length)
                const visible = Math.abs(offset) <= 2
                const active = offset === 0
                return <button key={slide.src} type="button" aria-label={`Show ${slide.title}`} aria-pressed={active} onClick={() => goTo(index)} className={`absolute left-1/2 top-1/2 overflow-hidden rounded-2xl border border-[#E8E6F8] bg-white shadow-lg transition-[transform,opacity,filter] duration-600 ease-out ${visible ? 'pointer-events-auto' : 'pointer-events-none'}`} style={{ width: isSocialMedia ? 'min(68vw, 520px)' : 'min(78vw, 820px)', aspectRatio: isSocialMedia ? '1 / 1' : undefined, height: isSocialMedia ? 'auto' : '100%', zIndex: active ? 30 : 20 - Math.abs(offset), opacity: active ? 1 : visible ? 0.4 : 0, transform: `translate(-50%, -50%) translateX(calc(${offset} * ${isSocialMedia ? 'min(42vw, 430px)' : 'min(60vw, 570px)'})) scale(${active ? 1 : 0.78})`, filter: active ? 'none' : 'saturate(0.7)' }}>
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
          <div className="mt-8"><h3 className="mb-4 text-lg font-bold text-[#0F0A2E]">More {category.label}</h3><div className="grid grid-cols-2 gap-3 sm:grid-cols-4 lg:grid-cols-7">{slides.map((slide, index) => <button key={slide.src} type="button" onClick={() => goTo(index)} className={`overflow-hidden rounded-xl border-2 bg-white text-left ${activeIndex === index ? 'border-[#2D1BB8]' : 'border-transparent'}`}><div className={`relative ${isSocialMedia ? 'aspect-square' : 'aspect-[16/9]'}`}><Image src={slide.src} alt={slide.title} fill sizes="160px" className="object-cover" /></div><span className="block truncate px-2 py-2 text-xs text-[#4B4680]">{slide.title}</span></button>)}</div></div>
        </> : <div className="mt-10 rounded-2xl border border-dashed border-[#C9C6E6] bg-white p-10 text-center text-[#4B4680]">This showcase is coming soon. New work will be added here.</div>}
      </div>
    </section>
  )
}
