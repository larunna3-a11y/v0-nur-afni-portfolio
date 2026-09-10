'use client'

import Image from 'next/image'
import { useEffect, useState } from 'react'
import { ChevronLeft, ChevronRight, Image as ImageIcon } from 'lucide-react'

const slides = [
  { src: '/design-creative/1.png', title: 'Marketplace Campaign Banner', category: 'Giant Sale Campaign' },
  { src: '/design-creative/2.png', title: 'Promotional Campaign Visual', category: 'Marketplace Creative' },
  { src: '/design-creative/3.png', title: 'Product Campaign Banner', category: 'E-Commerce Creative' },
  { src: '/design-creative/4.png', title: 'Brand Promotion Visual', category: 'Social Commerce' },
  { src: '/design-creative/12.12 Choetech.png', title: '12.12 Choetech Campaign', category: 'Marketplace Banner' },
  { src: '/design-creative/12.12 QCY.png', title: '12.12 QCY Campaign', category: 'Marketplace Banner' },
  { src: '/design-creative/CHoetech cuci gudang 1.png', title: 'Clearance Campaign', category: 'Promotional Banner' },
]

function getOffset(index: number, activeIndex: number) {
  let offset = index - activeIndex
  if (offset > slides.length / 2) offset -= slides.length
  if (offset < -slides.length / 2) offset += slides.length
  return offset
}

export function DesignCreativeCarousel() {
  const [activeIndex, setActiveIndex] = useState(0)

  const goTo = (index: number) => {
    setActiveIndex((index + slides.length) % slides.length)
  }

  useEffect(() => {
    const timer = window.setInterval(() => {
      setActiveIndex((current) => (current + 1) % slides.length)
    }, 6000)

    return () => window.clearInterval(timer)
  }, [])

  return (
    <section className="bg-[#F8F7FF] py-16" aria-labelledby="design-creative-heading">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[#2D1BB8]">Design &amp; Creative</p>
            <h2 id="design-creative-heading" className="mt-3 text-3xl font-bold text-[#0F0A2E] sm:text-4xl">
              Campaign visuals built to get noticed.
            </h2>
            <p className="mt-4 text-[#4B4680] leading-relaxed">
              A selection of marketplace banners and promotional creative designed for real campaign moments across QCY and Choetech.
            </p>
          </div>
          <div className="flex items-center gap-3 rounded-2xl border border-[#E8E6F8] bg-white px-4 py-3 text-sm text-[#4B4680]">
            <ImageIcon className="h-5 w-5 text-[#2D1BB8]" aria-hidden="true" />
            <span>Marketplace banner collection</span>
          </div>
        </div>

        <div className="relative mt-12 overflow-hidden pb-8 pt-4">
          <div className="relative mx-auto h-[220px] w-full max-w-5xl sm:h-[300px] lg:h-[390px]">
            {slides.map((slide, index) => {
              const offset = getOffset(index, activeIndex)
              const isActive = offset === 0
              const isVisible = Math.abs(offset) <= 2

              return (
                <button
                  key={slide.src}
                  type="button"
                  aria-label={`Show ${slide.title}`}
                  aria-pressed={isActive}
                  onClick={() => goTo(index)}
                  className={`absolute left-1/2 top-1/2 overflow-hidden rounded-2xl border border-[#E8E6F8] bg-white shadow-lg transition-[transform,opacity,filter] duration-500 ease-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2D1BB8] focus-visible:ring-offset-4 ${isVisible ? 'pointer-events-auto' : 'pointer-events-none'}`}
                  style={{
                    width: 'min(76vw, 720px)',
                    height: '100%',
                    zIndex: isActive ? 30 : 20 - Math.abs(offset),
                    opacity: isActive ? 1 : isVisible ? 0.42 : 0,
                    transform: `translate(-50%, -50%) translateX(calc(${offset} * min(58vw, 510px))) scale(${isActive ? 1 : 0.78})`,
                    filter: isActive ? 'none' : 'saturate(0.72)',
                  }}
                >
                  <Image src={slide.src} alt={slide.title} fill sizes="(max-width: 768px) 76vw, 720px" className="object-cover" />
                  {!isActive && <span className="absolute inset-0 bg-[#0F0A2E]/10" aria-hidden="true" />}
                </button>
              )
            })}

            <button
              type="button"
              aria-label="Previous creative"
              onClick={() => goTo(activeIndex - 1)}
              className="absolute left-1/2 top-1/2 z-40 flex h-11 w-11 -translate-x-[calc(50%+min(38vw,355px))] -translate-y-1/2 items-center justify-center rounded-full bg-white text-[#2D1BB8] shadow-md transition-transform hover:scale-105 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2D1BB8] focus-visible:ring-offset-2 sm:h-12 sm:w-12"
            >
              <ChevronLeft className="h-5 w-5" aria-hidden="true" />
            </button>
            <button
              type="button"
              aria-label="Next creative"
              onClick={() => goTo(activeIndex + 1)}
              className="absolute left-1/2 top-1/2 z-40 flex h-11 w-11 -translate-x-[calc(50%-min(38vw,355px))] -translate-y-1/2 items-center justify-center rounded-full bg-white text-[#2D1BB8] shadow-md transition-transform hover:scale-105 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2D1BB8] focus-visible:ring-offset-2 sm:h-12 sm:w-12"
            >
              <ChevronRight className="h-5 w-5" aria-hidden="true" />
            </button>
          </div>

          <div className="mt-5 flex justify-center gap-2" role="tablist" aria-label="Creative slides">
            {slides.map((slide, index) => (
              <button
                key={slide.src}
                type="button"
                role="tab"
                aria-selected={activeIndex === index}
                aria-label={`Go to ${slide.title}`}
                onClick={() => goTo(index)}
                className={`h-2.5 rounded-full transition-all duration-300 ${activeIndex === index ? 'w-7 bg-[#2D1BB8]' : 'w-2.5 bg-[#C9C6E6] hover:bg-[#9B97C0]'}`}
              />
            ))}
          </div>
        </div>

        <div className="mt-8 rounded-2xl border border-[#E8E6F8] bg-white p-6 sm:p-8">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#2D1BB8]">{slides[activeIndex].category}</p>
          <div className="mt-2 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <h3 className="text-2xl font-bold text-[#0F0A2E]">{slides[activeIndex].title}</h3>
            <span className="text-sm text-[#4B4680]">{activeIndex + 1} / {slides.length}</span>
          </div>
          <p className="mt-3 max-w-3xl text-[#4B4680] leading-relaxed">
            Promotional creative with clear visual hierarchy, campaign-led messaging, and product-focused composition for stronger marketplace visibility.
          </p>
        </div>
      </div>
    </section>
  )
}
