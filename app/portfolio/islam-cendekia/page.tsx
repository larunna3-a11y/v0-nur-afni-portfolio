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
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-0">
          <div className="flex flex-col lg:flex-row lg:items-stretch gap-8">

            {/* Left: info */}
            <div className="lg:w-[42%] lg:py-16 lg:pr-8 flex-shrink-0">
              <h1 className="text-4xl lg:text-5xl font-bold text-[#0F0A2E] mb-2">
                Islam Cendekia
              </h1>
              <p className="text-[#2D1BB8] font-semibold text-lg mb-6">
                Social Media Management<br />& Content Strategy
              </p>

              {/* Platforms */}
              <div className="flex items-center gap-3 mb-6">
                <div className="flex items-center gap-2 px-3 py-1.5 border border-[#E8E6F8] rounded-full text-sm font-medium text-[#0F0A2E]">
                  <Instagram className="w-4 h-4 text-pink-500" />
                  Instagram
                </div>
                <div className="flex items-center gap-2 px-3 py-1.5 border border-[#E8E6F8] rounded-full text-sm font-medium text-[#0F0A2E]">
                  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1V9.01a6.34 6.34 0 00-.79-.05 6.34 6.34 0 00-6.34 6.34 6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.33-6.34V8.69a8.17 8.17 0 004.78 1.52V6.76a4.85 4.85 0 01-1.01-.07z"/>
                  </svg>
                  TikTok
                </div>
              </div>

              {/* Duration */}
              <div className="flex items-center gap-2 text-[#4B4680] text-sm mb-6">
                <Clock className="w-4 h-4" />
                Jul 2023 – Dec 2023 (6 Months)
              </div>

              {/* Description */}
              <p className="text-[#4B4680] leading-relaxed text-sm max-w-sm">
                Islam Cendekia is an Islamic education media platform that shares Quranic verses, hadith, and Islamic knowledge through short-form content on Instagram and TikTok.
              </p>
            </div>

            {/* Right: phone + fanned content cards */}
            <div className="lg:flex-1 relative flex items-end justify-start min-h-[420px] lg:min-h-[500px]">

              {/* ── Fanned content cards (behind phone, peeking right) ── */}

              {/* Card 1 – top-right, slight rotate right */}
              <div
                className="absolute hidden lg:block rounded-2xl overflow-hidden shadow-xl"
                style={{ width: 160, top: 20, right: 0, transform: 'rotate(6deg)', zIndex: 1 }}
              >
                <div className="bg-[#1a2744] p-3" style={{ height: 200 }}>
                  <div className="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center mb-2">
                    <span className="text-white text-[7px] font-bold">IC</span>
                  </div>
                  <p className="text-white text-[9px] font-bold leading-tight">Rata - rata orang yang sukses, mereka melakukan hal berikut</p>
                  <div className="absolute bottom-2 left-3 right-3">
                    <div className="w-full h-10 bg-[#0d1f45] rounded opacity-70" />
                  </div>
                </div>
              </div>

              {/* Card 2 – mid-right, slight rotate left */}
              <div
                className="absolute hidden lg:block rounded-2xl overflow-hidden shadow-xl"
                style={{ width: 155, top: 60, right: 40, transform: 'rotate(-3deg)', zIndex: 2 }}
              >
                <div className="bg-[#F97316] p-3" style={{ height: 190 }}>
                  <div className="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center mb-2">
                    <span className="text-white text-[7px] font-bold">IC</span>
                  </div>
                  <p className="text-white text-[9px] font-bold leading-tight">Amalan Rezeki Diamalkan setelah Magrib</p>
                </div>
              </div>

              {/* Card 3 – lower right, tilted */}
              <div
                className="absolute hidden lg:block rounded-2xl overflow-hidden shadow-xl"
                style={{ width: 148, top: 10, right: 180, transform: 'rotate(4deg)', zIndex: 1 }}
              >
                <div className="p-3" style={{ height: 185, background: 'linear-gradient(135deg,#1a3a6b,#2d4a8a)' }}>
                  <div className="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center mb-2">
                    <span className="text-white text-[7px] font-bold">IC</span>
                  </div>
                  <p className="text-white text-[9px] font-bold leading-tight">MENOLONG SESAMA Kebaikan yang Balik ke Diri Sendiri</p>
                </div>
              </div>

              {/* Card 4 – far right, tall, slight tilt */}
              <div
                className="absolute hidden lg:block rounded-2xl overflow-hidden shadow-xl"
                style={{ width: 145, top: 30, right: -10, transform: 'rotate(8deg)', zIndex: 0 }}
              >
                <div className="bg-white border border-gray-100 p-3" style={{ height: 210 }}>
                  <div className="w-6 h-6 rounded-full bg-[#2D1BB8]/10 flex items-center justify-center mb-2">
                    <span className="text-[#2D1BB8] text-[7px] font-bold">IC</span>
                  </div>
                  <p className="text-[#2D1BB8] text-[9px] font-bold leading-tight mb-1">Q.S Ali Imran : 159</p>
                  <p className="text-gray-500 text-[8px] leading-tight">Maka, berkat rahmat Allah, kamu berlaku lemah lembut terhadap mereka.</p>
                </div>
              </div>

              {/* ── Phone mockup (foreground) ── */}
              <div
                className="relative z-10 flex-shrink-0"
                style={{ marginBottom: 0 }}
              >
                {/* Phone shell */}
                <div
                  className="relative bg-[#111] shadow-2xl"
                  style={{
                    width: 240,
                    borderRadius: 36,
                    padding: '10px 8px',
                    boxShadow: '0 30px 80px rgba(0,0,0,0.35)',
                  }}
                >
                  {/* Notch */}
                  <div className="absolute top-[10px] left-1/2 -translate-x-1/2 w-16 h-4 bg-black rounded-full z-20" />

                  {/* Screen */}
                  <div className="bg-white overflow-hidden" style={{ borderRadius: 28 }}>
                    {/* Status bar */}
                    <div className="flex items-center justify-between px-4 pt-4 pb-1">
                      <span className="text-[10px] font-semibold text-[#0F0A2E]">9:41</span>
                      <div className="flex gap-1 items-center">
                        <div className="w-3 h-2 border border-gray-400 rounded-sm relative"><div className="absolute inset-0.5 bg-gray-400 rounded-sm w-2/3" /></div>
                        <div className="w-2.5 h-2.5 text-gray-400">
                          <svg viewBox="0 0 24 24" fill="currentColor"><path d="M1 9l2 2c4.97-4.97 13.03-4.97 18 0l2-2C16.93 2.93 7.08 2.93 1 9zm8 8l3 3 3-3c-1.65-1.66-4.34-1.66-6 0zm-4-4l2 2c2.76-2.76 7.24-2.76 10 0l2-2C15.14 9.14 8.87 9.14 5 13z"/></svg>
                        </div>
                      </div>
                    </div>

                    {/* Nav bar */}
                    <div className="flex items-center justify-between px-3 pb-2">
                      <div className="flex items-center gap-1">
                        <svg className="w-3 h-3 text-gray-600" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M15 18l-6-6 6-6"/></svg>
                        <span className="text-[10px] font-bold text-[#0F0A2E]">islamcendekia</span>
                      </div>
                      <div className="flex gap-2">
                        <svg className="w-3.5 h-3.5 text-gray-600" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.35-4.35"/></svg>
                        <svg className="w-3.5 h-3.5 text-gray-600" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M3 12h18M3 6h18M3 18h18"/></svg>
                      </div>
                    </div>

                    {/* Profile section */}
                    <div className="px-3 pb-2">
                      {/* Avatar + stats */}
                      <div className="flex items-center gap-3 mb-2">
                        {/* Avatar with gradient ring */}
                        <div className="relative flex-shrink-0">
                          <div className="w-14 h-14 rounded-full p-[2px]" style={{ background: 'linear-gradient(135deg,#f97316,#2D1BB8)' }}>
                            <div className="w-full h-full rounded-full bg-white flex items-center justify-center">
                              <div className="w-11 h-11 rounded-full bg-gradient-to-br from-[#2D1BB8] to-[#1a0f7a] flex items-center justify-center">
                                <span className="text-white text-[9px] font-black">IC</span>
                              </div>
                            </div>
                          </div>
                        </div>
                        {/* Stats */}
                        <div className="flex gap-3 flex-1 justify-around">
                          <div className="text-center">
                            <div className="text-[11px] font-bold text-[#0F0A2E]">761</div>
                            <div className="text-[8px] text-gray-500">Posts</div>
                          </div>
                          <div className="text-center">
                            <div className="text-[11px] font-bold text-[#0F0A2E]">17.3K</div>
                            <div className="text-[8px] text-gray-500">Followers</div>
                          </div>
                          <div className="text-center">
                            <div className="text-[11px] font-bold text-[#0F0A2E]">17</div>
                            <div className="text-[8px] text-gray-500">Following</div>
                          </div>
                        </div>
                      </div>

                      {/* Bio */}
                      <div className="mb-1">
                        <p className="text-[10px] font-bold text-[#0F0A2E] leading-tight">Islam Cendekia</p>
                        <p className="text-[8.5px] text-gray-500 leading-tight">Education</p>
                        <p className="text-[8.5px] text-gray-600 leading-tight mt-0.5">Media edukasi Islami<br/>Membumikan Al-Qur'an dan Sunnah<br/>dalam kehidupan sehari-hari.</p>
                        <p className="text-[8.5px] text-[#2D1BB8] mt-0.5">🔗 linktr.ee/islamcendekia</p>
                      </div>

                      {/* Buttons */}
                      <div className="flex gap-1.5 mt-2">
                        <div className="flex-1 py-1 bg-[#2D1BB8] text-white text-[9px] font-semibold text-center rounded-lg">Follow</div>
                        <div className="flex-1 py-1 bg-gray-100 text-gray-700 text-[9px] font-semibold text-center rounded-lg">Message</div>
                        <div className="w-6 py-1 bg-gray-100 text-gray-600 text-[9px] text-center rounded-lg flex items-center justify-center">▾</div>
                      </div>
                    </div>

                    {/* Highlights row */}
                    <div className="px-3 pb-2">
                      <div className="flex gap-2 overflow-x-hidden">
                        {["Qur'an","Hadits","Reminder","Doa Harian","Kisah"].map((h) => (
                          <div key={h} className="flex flex-col items-center gap-0.5 flex-shrink-0">
                            <div className="w-8 h-8 rounded-full border border-gray-200 bg-gray-50 flex items-center justify-center">
                              <div className="w-6 h-6 rounded-full bg-gradient-to-br from-[#E8E6F8] to-[#2D1BB8]/20" />
                            </div>
                            <span className="text-[6.5px] text-gray-500 whitespace-nowrap">{h}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Tab icons */}
                    <div className="border-t border-gray-100 flex justify-around py-1.5 px-3">
                      <svg className="w-4 h-4 text-[#0F0A2E]" fill="currentColor" viewBox="0 0 24 24"><rect x="3" y="3" width="7" height="7" rx="1"/><rect x="14" y="3" width="7" height="7" rx="1"/><rect x="3" y="14" width="7" height="7" rx="1"/><rect x="14" y="14" width="7" height="7" rx="1"/></svg>
                      <svg className="w-4 h-4 text-gray-300" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><rect x="2" y="2" width="20" height="20" rx="2"/><path d="m7 2 5 10 5-10"/></svg>
                      <svg className="w-4 h-4 text-gray-300" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><circle cx="12" cy="8" r="4"/><path d="M20 21a8 8 0 1 0-16 0"/></svg>
                    </div>

                    {/* Photo grid */}
                    <div className="grid grid-cols-3 gap-[1px] bg-gray-200">
                      {[
                        { bg: 'bg-[#1a2744]', text: 'Amalan Rezeki Diamalkan setelah Magrib', textColor: 'text-white' },
                        { bg: 'bg-[#2a3a50]', text: 'Sony vlog camera...', textColor: 'text-white' },
                        { bg: 'bg-[#1a2744]', text: '', textColor: 'text-white' },
                      ].map((cell, i) => (
                        <div key={i} className={`aspect-square ${cell.bg} relative flex items-end p-1`}>
                          <span className={`${cell.textColor} text-[5px] leading-tight opacity-80`}>{cell.text}</span>
                        </div>
                      ))}
                    </div>
                  </div>
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

      {/* ── Best Time to Post ── */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">

            {/* Best Times */}
            <div>
              <h2 className="text-sm font-bold uppercase tracking-wide text-[#2D1BB8] mb-6">
                BEST TIME TO POST (WIB)
              </h2>

              <div className="grid sm:grid-cols-2 gap-6">
                {/* Islam Cendekia */}
                <div>
                  <p className="font-bold text-[#0F0A2E] text-sm mb-3">Islam Cendekia</p>
                  <div className="space-y-1.5">
                    {bestTimes.islamCendekia.map((row) => (
                      <div key={row.day} className="flex items-center gap-2 text-xs">
                        <span className="w-14 font-medium text-[#4B4680]">{row.day}</span>
                        <span className="text-[#0F0A2E]">{row.times}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Krew */}
                <div>
                  <p className="font-bold text-[#0F0A2E] text-sm mb-3">Krew (Digital Krew)</p>
                  <div className="space-y-1.5">
                    {bestTimes.krew.map((row) => (
                      <div key={row.day} className="flex items-center gap-2 text-xs">
                        <span className="w-14 font-medium text-[#4B4680]">{row.day}</span>
                        <span className="text-[#0F0A2E]">{row.times}</span>
                      </div>
                    ))}
                  </div>
                  <p className="text-[9px] text-[#9B97C0] mt-3 italic">*Berdasarkan analisis performa konten.</p>
                </div>
              </div>
            </div>

            {/* Clock visual */}
            <div className="flex items-center justify-center">
              <div className="relative w-40 h-40">
                <svg viewBox="0 0 100 100" className="w-full h-full">
                  <circle cx="50" cy="50" r="45" fill="none" stroke="#E8E6F8" strokeWidth="3" />
                  {/* Hour markers */}
                  {[0,1,2,3,4,5,6,7,8,9,10,11].map(h => {
                    const angle = (h * 30 - 90) * Math.PI / 180
                    const x1 = 50 + 38 * Math.cos(angle)
                    const y1 = 50 + 38 * Math.sin(angle)
                    const x2 = 50 + 42 * Math.cos(angle)
                    const y2 = 50 + 42 * Math.sin(angle)
                    return <line key={h} x1={x1} y1={y1} x2={x2} y2={y2} stroke="#9B97C0" strokeWidth="1.5" />
                  })}
                  {/* Hour hand ~5pm */}
                  <line x1="50" y1="50" x2="50" y2="25" stroke="#2D1BB8" strokeWidth="3" strokeLinecap="round" transform="rotate(150 50 50)" />
                  {/* Minute hand */}
                  <line x1="50" y1="50" x2="50" y2="18" stroke="#F97316" strokeWidth="2" strokeLinecap="round" transform="rotate(0 50 50)" />
                  <circle cx="50" cy="50" r="3" fill="#2D1BB8" />
                </svg>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center mt-6">
                    <p className="text-xs font-bold text-[#2D1BB8]">Peak</p>
                    <p className="text-xs text-[#9B97C0]">17.00–20.00</p>
                  </div>
                </div>
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
