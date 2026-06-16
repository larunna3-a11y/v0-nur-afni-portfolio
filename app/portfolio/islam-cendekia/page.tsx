'use client'

import Link from 'next/link'
import { useState } from 'react'
import {
  ArrowLeft,
  Instagram,
  Users,
  Eye,
  Heart,
  MessageCircle,
  BarChart3,
  Target,
  TrendingUp,
  FileText,
  Clock,
  ChevronRight,
  BookOpen,
  Lightbulb,
  Settings,
  PieChart,
} from 'lucide-react'

// ── Data ──────────────────────────────────────────────────────────────────────

const kpiCards = [
  {
    icon: Users,
    value: '6K → 17.3K',
    label: 'Followers',
    sub: '(+188%)',
    subColor: 'text-emerald-400',
    bg: 'bg-[#1A3A6B]',
  },
  {
    icon: Eye,
    value: '984K',
    label: 'Accounts Reached',
    bg: 'bg-[#1A3A6B]',
  },
  {
    icon: Users,
    value: '73.3K',
    label: 'Accounts Engaged',
    bg: 'bg-[#1A3A6B]',
  },
  {
    icon: Heart,
    value: '89.6K',
    label: 'Content Interactions',
    bg: 'bg-[#1A3A6B]',
  },
]

const topContent = [
  {
    title: 'Rata - rata orang yang sukses, mereka melakukan hal berikut',
    views: '2.2M',
    likes: '55K',
    comments: '21K',
    saves: '152',
    date: '26 Oct 2023',
    bg: 'bg-[#1a2744]',
  },
  {
    title: 'Tanggal 1 Muharam, Berbagai Momen Penting Umat Islam',
    views: '793K',
    likes: '20K',
    comments: '140',
    saves: '18',
    date: '19 Jul 2023',
    bg: 'bg-[#2a4a2a]',
  },
  {
    title: 'Amalan Rezeki Diamalkan setelah Magrib',
    views: '21K',
    likes: '286',
    comments: '33',
    saves: '0',
    date: '14 Dec 2023',
    bg: 'bg-[#7a3a1a]',
  },
  {
    title: 'MENOLONG SESAMA Kebaikan yang Balik ke Diri Sendiri',
    views: '25K',
    likes: '3',
    comments: '1',
    saves: '0',
    date: '26 Nov 2023',
    bg: 'bg-[#e8f4ff]',
    dark: false,
  },
  {
    title: 'Q.S Ali Imran : 159',
    views: '6.2K',
    likes: '902',
    comments: '429',
    saves: '67',
    date: '12 Aug 2023',
    bg: 'bg-[#1a2a1a]',
  },
]

const responsibilities = [
  {
    icon: FileText,
    title: 'Content Development',
    desc: 'Developed content from briefs: researched verses, translations, references, and curated trending audio.',
  },
  {
    icon: Target,
    title: 'Content Strategy',
    desc: 'Planned and executed short-form content strategy focused on Islamic education and reminders.',
  },
  {
    icon: Settings,
    title: 'Publishing & Optimization',
    desc: 'Determined best posting times, wrote captions, and implemented 4-3-2 hashtag framework.',
  },
  {
    icon: BarChart3,
    title: 'Analytics & Reporting',
    desc: 'Monitored performance daily, weekly, monthly and delivered actionable insights.',
  },
]

const workflowSteps = [
  { label: 'Research', desc: 'Trends, references, audience insights' },
  { label: 'Develop', desc: 'Script, translation, caption, hashtag' },
  { label: 'Audio & Trend', desc: 'Find suitable audio (TikTok / IG)' },
  { label: 'Design Brief', desc: 'Brief to designer for visual' },
  { label: 'Publish', desc: 'Schedule & publish at best time' },
]

const bestTimes = {
  islamCendekia: [
    { day: 'Sabtu', times: '16.30, 19.22' },
    { day: 'Jumat', times: '16.20, 20.45' },
    { day: 'Senin', times: '17.30' },
    { day: 'Selasa', times: '17.00, 18.00' },
    { day: 'Kamis', times: '17.10, 20.36' },
    { day: 'Rabu', times: '17.11, 20.26' },
  ],
  krew: [
    { day: 'Senin', times: '17.05' },
    { day: 'Kamis', times: '18.30' },
    { day: 'Rabu', times: '20.33' },
  ],
}

const tools = [
  'ChatGPT',
  'Google Trends',
  'TikTok Creative Center',
  'app.aurisai.io',
  'copy.ai',
  'pake.ai',
  'Google Sheets',
  'Google Docs',
  'Google Drive',
]

// ── Component ─────────────────────────────────────────────────────────────────

export default function IslamCendekiaCaseStudy() {
  const [expandedContent, setExpandedContent] = useState<number | null>(null)

  return (
    <div className="min-h-screen bg-[#F8F7FF] pt-16">

      {/* ── Back nav ── */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 pb-4">
        <Link
          href="/portfolio"
          className="inline-flex items-center gap-2 text-sm text-[#4B4680] hover:text-[#2D1BB8] transition-colors font-medium"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Work
        </Link>
      </div>

      {/* ── Hero ── */}
      <section className="bg-white border-b border-[#E8E6F8] overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row lg:items-center" style={{ minHeight: 440 }}>

            {/* Left: info — narrow column, vertically centered */}
            <div className="lg:w-[38%] flex-shrink-0 py-12 lg:py-16 pr-0 lg:pr-12">
              <h1 className="text-5xl lg:text-[56px] font-black text-[#0F0A2E] mb-3 leading-[1.05] tracking-tight">
                Islam Cendekia
              </h1>
              <p className="text-[#2D1BB8] font-bold text-xl lg:text-[22px] mb-7 leading-snug">
                Social Media Management<br />& Content Strategy
              </p>

              {/* Platforms */}
              <div className="flex items-center gap-3 mb-5">
                <div className="flex items-center gap-2 px-4 py-1.5 border border-gray-200 rounded-full text-sm font-semibold text-[#0F0A2E] bg-white">
                  <Instagram className="w-4 h-4 text-pink-500" />
                  Instagram
                </div>
                <div className="flex items-center gap-2 px-4 py-1.5 border border-gray-200 rounded-full text-sm font-semibold text-[#0F0A2E] bg-white">
                  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1V9.01a6.34 6.34 0 00-.79-.05 6.34 6.34 0 00-6.34 6.34 6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.33-6.34V8.69a8.17 8.17 0 004.78 1.52V6.76a4.85 4.85 0 01-1.01-.07z"/>
                  </svg>
                  TikTok
                </div>
              </div>

              {/* Duration */}
              <div className="flex items-center gap-2 text-[#4B4680] text-sm mb-5">
                <Clock className="w-4 h-4 flex-shrink-0" />
                Jul 2023 – Dec 2023 (6 Months)
              </div>

              {/* Description */}
              <p className="text-[#4B4680] leading-relaxed text-sm max-w-[340px]">
                Islam Cendekia is an Islamic education media platform that shares Quranic verses, hadith, and Islamic knowledge through short-form content on Instagram and TikTok.
              </p>
            </div>

            {/* Right: phone (center) + fanned cards (right) — flush to bottom, overflows section */}
            <div className="lg:flex-1 relative hidden lg:flex items-end justify-start" style={{ height: 480 }}>

              {/* ── Phone mockup — centered in right half ── */}
              <div
                className="relative z-10 flex-shrink-0"
                style={{ marginLeft: 60 }}
              >
                {/* Phone outer shell — tall, dark, no bottom border radius (bleeds off) */}
                <div
                  className="relative bg-[#0a0a0a]"
                  style={{
                    width: 270,
                    height: 540,
                    borderRadius: '34px 34px 0 0',
                    padding: '12px 9px 0',
                    boxShadow: '0 -8px 60px rgba(0,0,0,0.4), 0 0 0 1px rgba(255,255,255,0.08)',
                  }}
                >
                  {/* Side buttons */}
                  <div className="absolute left-[-3px] top-[100px] w-[3px] h-8 bg-[#222] rounded-l" />
                  <div className="absolute left-[-3px] top-[150px] w-[3px] h-14 bg-[#222] rounded-l" />
                  <div className="absolute right-[-3px] top-[120px] w-[3px] h-16 bg-[#222] rounded-r" />

                  {/* Dynamic island */}
                  <div className="absolute top-[14px] left-1/2 -translate-x-1/2 w-[70px] h-[22px] bg-black rounded-full z-20" />

                  {/* Screen — dark Instagram */}
                  <div
                    className="bg-white overflow-hidden h-full flex flex-col"
                    style={{ borderRadius: '26px 26px 0 0' }}
                  >
                    {/* Status bar — white bg */}
                    <div className="flex items-center justify-between px-4 pt-5 pb-1 bg-white flex-shrink-0">
                      <span className="text-[10px] font-bold text-[#0F0A2E]">9:01</span>
                      <div className="flex gap-1.5 items-center">
                        <svg className="w-3 h-3 text-gray-600" viewBox="0 0 24 24" fill="currentColor"><path d="M1 9l2 2c4.97-4.97 13.03-4.97 18 0l2-2C16.93 2.93 7.08 2.93 1 9zm8 8l3 3 3-3c-1.65-1.66-4.34-1.66-6 0zm-4-4l2 2c2.76-2.76 7.24-2.76 10 0l2-2C15.14 9.14 8.87 9.14 5 13z"/></svg>
                        <div className="flex gap-[1px] items-end h-3">
                          {[2,3,4,4].map((h,i) => <div key={i} className="w-[2px] bg-gray-600 rounded-sm" style={{height:`${h*3}px`}}/>)}
                        </div>
                        <div className="w-[18px] h-[10px] border border-gray-400 rounded-[2px] relative">
                          <div className="absolute inset-[1.5px] bg-gray-600 rounded-[1px]" style={{width:'65%'}} />
                          <div className="absolute right-[-3px] top-1/2 -translate-y-1/2 w-[2px] h-[5px] bg-gray-400 rounded-r" />
                        </div>
                      </div>
                    </div>

                    {/* Nav bar */}
                    <div className="flex items-center justify-between px-3 pb-2 bg-white flex-shrink-0">
                      <div className="flex items-center gap-1">
                        <svg className="w-3.5 h-3.5 text-gray-700" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24"><path d="M15 18l-6-6 6-6"/></svg>
                        <span className="text-[11px] font-bold text-[#0F0A2E]">islamcendekia</span>
                      </div>
                      <div className="flex gap-2">
                        <svg className="w-4 h-4 text-gray-700" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.35-4.35"/></svg>
                        <svg className="w-4 h-4 text-gray-700" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M3 12h18M3 6h18M3 18h18"/></svg>
                      </div>
                    </div>

                    {/* Profile section */}
                    <div className="px-3 pb-2 bg-white flex-shrink-0">
                      {/* Avatar + stats */}
                      <div className="flex items-center gap-2 mb-2">
                        <div className="w-[54px] h-[54px] rounded-full p-[2px] flex-shrink-0" style={{ background: 'linear-gradient(135deg,#e1306c,#833ab4,#fcaf45)' }}>
                          <div className="w-full h-full rounded-full bg-white p-[2px]">
                            <div className="w-full h-full rounded-full bg-gradient-to-br from-[#1a2f6b] to-[#0d1f45] flex items-center justify-center">
                              <span className="text-white text-[8px] font-black">IC</span>
                            </div>
                          </div>
                        </div>
                        <div className="flex gap-2 flex-1 justify-around">
                          <div className="text-center">
                            <div className="text-[11px] font-bold text-[#0F0A2E] leading-tight">761</div>
                            <div className="text-[8px] text-gray-500">Posts</div>
                          </div>
                          <div className="text-center">
                            <div className="text-[11px] font-bold text-[#0F0A2E] leading-tight">17.3K</div>
                            <div className="text-[8px] text-gray-500">Followers</div>
                          </div>
                          <div className="text-center">
                            <div className="text-[11px] font-bold text-[#0F0A2E] leading-tight">17</div>
                            <div className="text-[8px] text-gray-500">Following</div>
                          </div>
                        </div>
                      </div>

                      {/* Bio */}
                      <p className="text-[10px] font-bold text-[#0F0A2E] leading-tight">Islam Cendekia</p>
                      <p className="text-[8px] text-gray-500 leading-tight">Education</p>
                      <p className="text-[8px] text-gray-600 leading-tight mt-0.5">Media edukasi Islami<br/>Membumikan Al-Qur'an dan Sunnah<br/>dalam kehidupan sehari-hari.</p>
                      <p className="text-[8px] text-[#2D1BB8] mt-0.5">🔗 linktr.ee/islamcendekia</p>

                      {/* Buttons */}
                      <div className="flex gap-1 mt-2">
                        <div className="flex-1 py-[5px] bg-[#3797EF] text-white text-[9px] font-bold text-center rounded-lg">Follow</div>
                        <div className="flex-1 py-[5px] bg-gray-100 text-gray-700 text-[9px] font-semibold text-center rounded-lg">Message</div>
                        <div className="w-7 py-[5px] bg-gray-100 text-gray-600 text-[10px] text-center rounded-lg flex items-center justify-center">▾</div>
                      </div>
                    </div>

                    {/* Highlights row */}
                    <div className="px-3 pb-2 bg-white flex-shrink-0">
                      <div className="flex gap-3 overflow-x-hidden">
                        {["Qur'an","Hadits","Reminder","Doa Harian","Kisah"].map((h) => (
                          <div key={h} className="flex flex-col items-center gap-0.5 flex-shrink-0">
                            <div className="w-[34px] h-[34px] rounded-full border-[1.5px] border-gray-300 bg-gray-50 flex items-center justify-center">
                              <div className="w-[26px] h-[26px] rounded-full bg-gradient-to-br from-[#c8c0f0] to-[#2D1BB8]/30" />
                            </div>
                            <span className="text-[6px] text-gray-500 whitespace-nowrap">{h}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Tab icons */}
                    <div className="border-t border-gray-200 flex justify-around py-1.5 px-3 bg-white flex-shrink-0">
                      <svg className="w-[15px] h-[15px] text-[#0F0A2E]" fill="currentColor" viewBox="0 0 24 24"><rect x="3" y="3" width="7" height="7" rx="1"/><rect x="14" y="3" width="7" height="7" rx="1"/><rect x="3" y="14" width="7" height="7" rx="1"/><rect x="14" y="14" width="7" height="7" rx="1"/></svg>
                      <svg className="w-[15px] h-[15px] text-gray-300" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><rect x="2" y="2" width="20" height="20" rx="2"/><path d="m7 2 5 10 5-10"/></svg>
                      <svg className="w-[15px] h-[15px] text-gray-300" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><circle cx="12" cy="8" r="4"/><path d="M20 21a8 8 0 1 0-16 0"/></svg>
                    </div>

                    {/* Photo grid — fills remaining space */}
                    <div className="grid grid-cols-3 gap-[1.5px] bg-gray-200 flex-1">
                      {[
                        { bg: '#1a2744', label: 'Amalan Rezeki\nDiamalkan setelah\nMagrib', light: false },
                        { bg: '#2a3a52', label: 'Sony vlog\ncamera...', light: false },
                        { bg: '#1e2c50', label: '', light: false },
                        { bg: '#c8901a', label: '', light: false },
                        { bg: '#e8f4ff', label: '', light: true },
                        { bg: '#1a2a1a', label: '', light: false },
                      ].map((cell, i) => (
                        <div key={i} className="relative flex items-end p-1" style={{ backgroundColor: cell.bg, height: 66 }}>
                          {i === 0 && (
                            <div className="absolute inset-0 flex flex-col p-1.5">
                              <div className="flex items-center gap-1 mb-1">
                                <div className="w-[14px] h-[14px] rounded-full bg-white/20 flex items-center justify-center"><span className="text-white text-[4px] font-bold">IC</span></div>
                                <span className="text-white text-[5px] font-semibold opacity-80">Islam Cendekia</span>
                              </div>
                              <p className="text-white text-[6px] font-bold leading-tight">{cell.label}</p>
                            </div>
                          )}
                          {i === 1 && (
                            <p className="text-white text-[5.5px] font-medium leading-tight opacity-80">{cell.label}</p>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* ── Content cards fanning to the RIGHT of phone ── */}

              {/* Card A — top right, rotated slightly CW — dark navy city skyline style */}
              <div
                className="absolute rounded-2xl overflow-hidden shadow-2xl"
                style={{ width: 130, height: 210, top: 20, right: 80, transform: 'rotate(5deg)', zIndex: 3 }}
              >
                <div className="w-full h-full p-3 flex flex-col" style={{ background: 'linear-gradient(180deg,#0d1b3e 0%,#1a2f5a 60%,#0a0f20 100%)' }}>
                  <div className="flex items-center gap-1 mb-2">
                    <div className="w-[14px] h-[14px] rounded-full bg-white/20 flex items-center justify-center"><span className="text-white text-[4px] font-bold">IC</span></div>
                    <span className="text-white/60 text-[5px]">Islam Cendekia</span>
                  </div>
                  <p className="text-white text-[8px] font-bold leading-tight mt-auto">Rata - rata orang yang sukses, mereka melakukan hal berikut</p>
                </div>
              </div>

              {/* Card B — second from right, tilted CCW — warm golden */}
              <div
                className="absolute rounded-2xl overflow-hidden shadow-2xl"
                style={{ width: 124, height: 200, top: 30, right: 195, transform: 'rotate(-2deg)', zIndex: 4 }}
              >
                <div className="w-full h-full p-3 flex flex-col" style={{ background: 'linear-gradient(160deg,#b8760a 0%,#d4921c 50%,#8a5500 100%)' }}>
                  <div className="flex items-center gap-1 mb-1">
                    <div className="w-[14px] h-[14px] rounded-full bg-white/20 flex items-center justify-center"><span className="text-white text-[4px] font-bold">IC</span></div>
                    <span className="text-white/60 text-[5px]">Islam Cendekia</span>
                  </div>
                  <div className="flex-1 flex items-center justify-center">
                    <p className="text-white text-[8px] font-black text-center leading-tight">Amalan Rezeki<br/>Diamalkan setelah<br/>Magrib</p>
                  </div>
                </div>
              </div>

              {/* Card C — third, slight CW tilt — light card (MENOLONG SESAMA) */}
              <div
                className="absolute rounded-2xl overflow-hidden shadow-xl"
                style={{ width: 118, height: 192, top: 10, right: 305, transform: 'rotate(3deg)', zIndex: 3 }}
              >
                <div className="w-full h-full p-3 flex flex-col bg-white border border-gray-100">
                  <div className="flex items-center gap-1 mb-2">
                    <div className="w-[14px] h-[14px] rounded-full bg-[#2D1BB8]/15 flex items-center justify-center"><span className="text-[#2D1BB8] text-[4px] font-bold">IC</span></div>
                    <span className="text-gray-400 text-[5px]">Islam Cendekia</span>
                  </div>
                  <p className="text-[#1a1a2e] text-[7px] font-black leading-tight uppercase">MENOLONG<br/>SESAMA</p>
                  <p className="text-gray-500 text-[6px] leading-tight mt-1">Kebaikan yang Balik<br/>ke Diri Sendiri</p>
                  <div className="mt-auto">
                    <div className="w-full h-[52px] rounded-lg overflow-hidden bg-gradient-to-br from-amber-100 to-amber-200 flex items-center justify-center">
                      <span className="text-2xl">🤝</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Card D — rightmost, most rotated — Q.S card */}
              <div
                className="absolute rounded-2xl overflow-hidden shadow-xl"
                style={{ width: 114, height: 185, top: 0, right: -10, transform: 'rotate(8deg)', zIndex: 2 }}
              >
                <div className="w-full h-full p-3 flex flex-col" style={{ background: 'linear-gradient(160deg,#0f3460 0%,#16213e 100%)' }}>
                  <div className="flex items-center gap-1 mb-2">
                    <div className="w-[14px] h-[14px] rounded-full bg-white/20 flex items-center justify-center"><span className="text-white text-[4px] font-bold">IC</span></div>
                    <span className="text-white/50 text-[5px]">Islam Cendekia</span>
                  </div>
                  <p className="text-white text-[8px] font-black leading-tight">Q.S Ali Imran : 159</p>
                  <p className="text-white/60 text-[6.5px] leading-tight mt-1">Maka, berkat rahmat Allah, kamu berlaku lemah lembut terhadap mereka.</p>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* ── Key Results ── */}
      <section className="py-16 bg-[#F8F7FF]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-[#2D1BB8] mb-8 tracking-wide uppercase text-sm">
            KEY RESULTS
          </h2>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
            {kpiCards.map((card, i) => {
              const Icon = card.icon
              return (
                <div key={i} className="bg-[#1A3A6B] rounded-2xl p-6 text-white">
                  <Icon className="w-7 h-7 mb-3 text-blue-300" />
                  <div className="text-2xl font-bold mb-0.5">{card.value}</div>
                  <div className="text-sm text-blue-200">{card.label}</div>
                  {card.sub && (
                    <div className={`text-sm font-semibold mt-1 ${card.subColor}`}>{card.sub}</div>
                  )}
                </div>
              )
            })}
          </div>

          {/* Impact callout */}
          <div className="bg-white border border-[#E8E6F8] rounded-2xl p-6">
            <p className="text-sm font-bold text-[#2D1BB8] mb-2 uppercase tracking-wide">The Impact</p>
            <p className="text-[#4B4680] text-sm leading-relaxed">
              Scaled the account's audience organically and built a consistent content system that drives high reach, engagement, and saves.
            </p>
          </div>
        </div>
      </section>

      {/* ── Top Performing Content ── */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-[#2D1BB8] mb-2 uppercase text-sm tracking-wide">
            TOP PERFORMING CONTENT
          </h2>
          <p className="text-xs text-[#9B97C0] mb-8">During my management, more than 10 pieces of content achieved 10K+ impressions with high engagement consistently across Instagram &amp; TikTok.</p>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 mb-4">
            {topContent.map((item, i) => (
              <div
                key={i}
                className={`${item.bg} rounded-xl p-3 aspect-[3/4] flex flex-col justify-between cursor-pointer hover:scale-105 transition-transform`}
                onClick={() => setExpandedContent(expandedContent === i ? null : i)}
              >
                <div className={`text-[10px] font-bold leading-tight ${item.dark === false ? 'text-[#0F0A2E]' : 'text-white'}`}>
                  {item.title}
                </div>
                <div className={`space-y-0.5 text-[9px] ${item.dark === false ? 'text-gray-600' : 'text-white/70'}`}>
                  <div className="flex items-center gap-1"><Eye className="w-2.5 h-2.5" />{item.views}</div>
                  <div className="flex items-center gap-1"><Heart className="w-2.5 h-2.5" />{item.likes}</div>
                  <div className="flex items-center gap-1"><MessageCircle className="w-2.5 h-2.5" />{item.comments}</div>
                  <div className="text-[8px] opacity-60 mt-1">{item.date}</div>
                </div>
              </div>
            ))}

            {/* Add more card */}
            <div className="border-2 border-dashed border-[#C8C4E8] rounded-xl aspect-[3/4] flex flex-col items-center justify-center gap-2 cursor-pointer hover:border-[#2D1BB8] hover:bg-[#F0EEFF] transition-all group">
              <div className="w-8 h-8 rounded-full bg-[#E8E6F8] group-hover:bg-[#2D1BB8] flex items-center justify-center transition-colors">
                <ChevronRight className="w-5 h-5 text-[#2D1BB8] group-hover:text-white transition-colors" />
              </div>
              <span className="text-[10px] font-semibold text-[#9B97C0] group-hover:text-[#2D1BB8] text-center leading-tight transition-colors">Add<br/>Content</span>
            </div>
          </div>
        </div>
      </section>

      {/* ── Roles & Approach (two-column) ── */}
      <section className="py-16 bg-[#F8F7FF]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">

            {/* My Role & Responsibilities */}
            <div>
              <h2 className="text-sm font-bold uppercase tracking-wide text-[#2D1BB8] mb-6">
                MY ROLE &amp; RESPONSIBILITIES
              </h2>
              <div className="space-y-5">
                {responsibilities.map((r, i) => {
                  const Icon = r.icon
                  return (
                    <div key={i} className="flex gap-4">
                      <div className="w-8 h-8 rounded-lg bg-[#E8E6F8] flex items-center justify-center flex-shrink-0">
                        <Icon className="w-4 h-4 text-[#2D1BB8]" />
                      </div>
                      <div>
                        <p className="font-bold text-sm text-[#2D1BB8] mb-0.5">{r.title}</p>
                        <p className="text-xs text-[#4B4680] leading-relaxed">{r.desc}</p>
                      </div>
                    </div>
                  )
                })}
              </div>
            </div>

            {/* My Approach + Hashtag */}
            <div>
              <h2 className="text-sm font-bold uppercase tracking-wide text-[#2D1BB8] mb-6">
                MY APPROACH
              </h2>

              {/* Workflow steps */}
              <div className="flex items-start gap-1 mb-6 overflow-x-auto pb-2">
                {workflowSteps.map((step, i) => (
                  <div key={i} className="flex items-start gap-1">
                    <div className="text-center min-w-[80px]">
                      <div className="w-10 h-10 rounded-lg bg-[#2D1BB8] flex items-center justify-center mx-auto mb-2">
                        {i === 0 && <BookOpen className="w-4 h-4 text-white" />}
                        {i === 1 && <FileText className="w-4 h-4 text-white" />}
                        {i === 2 && <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24"><path d="M12 3v10.55c-.59-.34-1.27-.55-2-.55-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4V7h4V3h-6z"/></svg>}
                        {i === 3 && <Lightbulb className="w-4 h-4 text-white" />}
                        {i === 4 && <TrendingUp className="w-4 h-4 text-white" />}
                      </div>
                      <p className="text-[10px] font-bold text-[#0F0A2E] mb-0.5">{step.label}</p>
                      <p className="text-[9px] text-[#9B97C0] leading-tight">{step.desc}</p>
                    </div>
                    {i < workflowSteps.length - 1 && (
                      <ChevronRight className="w-4 h-4 text-[#9B97C0] mt-3 flex-shrink-0" />
                    )}
                  </div>
                ))}
              </div>

              {/* Hashtag Framework */}
              <div className="bg-white border border-[#E8E6F8] rounded-2xl p-6">
                <p className="text-sm font-bold text-[#0F0A2E] mb-4 uppercase tracking-wide">
                  HASHTAG FRAMEWORK (4-3-2)
                </p>
                <div className="flex gap-4 mb-4">
                  <div className="text-center flex-1">
                    <div className="text-3xl font-black text-[#2D1BB8]">4</div>
                    <div className="text-[10px] text-[#4B4680] leading-tight">Topik Utama<br/>(Spesifik Konten)</div>
                  </div>
                  <div className="text-center flex-1">
                    <div className="text-3xl font-black text-[#2D1BB8]">3</div>
                    <div className="text-[10px] text-[#4B4680] leading-tight">Topik Tema<br/>(Theme Konten)</div>
                  </div>
                  <div className="text-center flex-1">
                    <div className="text-3xl font-black text-[#2D1BB8]">2</div>
                    <div className="text-[10px] text-[#4B4680] leading-tight">Topik Akun<br/>(Brand / Account)</div>
                  </div>
                </div>
                <p className="text-xs text-[#4B4680] italic">Meningkatkan jangkauan tanpa mengorbankan relevansi.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Mentorship & Tools (two-column) ── */}
      <section className="py-16 bg-[#F8F7FF]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-8">

            {/* Mentorship */}
            <div className="lg:col-span-1">
              <h2 className="text-sm font-bold uppercase tracking-wide text-[#2D1BB8] mb-6">
                MENTORSHIP &amp; LEADERSHIP
              </h2>
              <p className="text-sm text-[#4B4680] mb-4 leading-relaxed">
                Mentored and supervised a 5-member Kampus Merdeka team for 6 weeks (Oct–Nov 2023).
              </p>
              <div className="space-y-2">
                {[
                  'Created onboarding guide & SOP (roles, tools, workflow)',
                  'Delegated tasks & supervised deliverables',
                  'Conducted weekly reviews every Monday (online)',
                  'Coordinated with design, ads, video, and article teams',
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-2 text-xs text-[#4B4680]">
                    <div className="w-4 h-4 rounded-full bg-emerald-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <svg className="w-2.5 h-2.5 text-emerald-600" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    {item}
                  </div>
                ))}
              </div>
              <div className="mt-4 bg-[#E8E6F8] rounded-xl p-3">
                <p className="text-[10px] font-bold text-[#2D1BB8] italic">Like a mini team lead experience!</p>
              </div>
            </div>

            {/* Tools */}
            <div className="lg:col-span-1">
              <h2 className="text-sm font-bold uppercase tracking-wide text-[#2D1BB8] mb-6">
                TOOLS &amp; RESOURCES
              </h2>
              <div className="grid grid-cols-3 gap-3">
                {tools.map((tool) => (
                  <div key={tool} className="bg-white border border-[#E8E6F8] rounded-xl p-3 text-center">
                    <p className="text-[10px] font-medium text-[#4B4680] leading-tight">{tool}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* What My Leader Said */}
            <div className="lg:col-span-1">
              <h2 className="text-sm font-bold uppercase tracking-wide text-[#2D1BB8] mb-6">
                WHAT MY LEADER SAID
              </h2>
              <div className="bg-white border border-[#E8E6F8] rounded-2xl p-6">
                <div className="text-4xl text-[#2D1BB8] font-serif leading-none mb-3">"</div>
                <p className="text-sm text-[#4B4680] italic leading-relaxed mb-4">
                  Just handle them, assign their work and you supervise..
                </p>
                <div className="flex items-center gap-3 pt-4 border-t border-[#E8E6F8]">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#F97316] to-[#2D1BB8] flex items-center justify-center text-white text-xs font-bold flex-shrink-0">
                    KF
                  </div>
                  <div>
                    <p className="text-xs font-bold text-[#0F0A2E]">Kak Fadhlan</p>
                    <p className="text-[10px] text-[#9B97C0]">CEO & Senior Social Media<br/>Digital Krew</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Key Takeaway ── */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-r from-[#2D1BB8] to-[#6D4AFF] rounded-2xl p-8 flex items-start gap-4">
            <div className="text-2xl">🏆</div>
            <div>
              <p className="text-[10px] font-bold text-white/60 uppercase tracking-wider mb-2">KEY TAKEAWAY</p>
              <p className="text-white font-medium leading-relaxed text-sm">
                I helped scale an Islamic education media account organically through content strategy, data-driven decisions, and team collaboration.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Footer CTA ── */}
      <section className="py-16 bg-[#F8F7FF]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/portfolio"
            className="inline-flex items-center justify-center gap-2 bg-[#2D1BB8] text-white px-8 py-3 rounded-lg font-medium hover:bg-[#1A0F7A] transition-colors text-sm"
          >
            View More Projects
          </Link>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center gap-2 border border-[#2D1BB8] text-[#2D1BB8] px-8 py-3 rounded-lg font-medium hover:bg-[#E8E6F8] transition-colors text-sm"
          >
            Work With Me
          </Link>
        </div>
      </section>
    </div>
  )
}
