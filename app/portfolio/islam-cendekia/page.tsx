'use client'

import Link from 'next/link'
import { useRef } from 'react'
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
  ChevronLeft,
  BookOpen,
  Lightbulb,
  Settings,
} from 'lucide-react'

// ── Data ──────────────────────────────────────────────────────────────────────

const kpiCards = [
  {
    icon: Users,
    value: '6K → 17.3K',
    label: 'Followers',
    sub: '+188%',
    subColor: 'text-emerald-400',
  },
  {
    icon: Eye,
    value: '984,160',
    label: 'Accounts Reached',
    sub: '1,073,118 Impressions',
    subColor: 'text-blue-300',
  },
  {
    icon: Users,
    value: '73,355',
    label: 'Accounts Engaged',
    sub: '+453% Followers · +1,015% Non-followers',
    subColor: 'text-emerald-400',
  },
  {
    icon: Heart,
    value: '89,643',
    label: 'Content Interactions',
    sub: '+924% vs prev. period',
    subColor: 'text-emerald-400',
  },
]

const topContent = [
  {
    title: 'Rata - rata orang yang sukses, mereka melakukan hal berikut',
    caption: 'Kesuksesan mereka bukan hanya hasil kerja keras, tetapi juga hasil dari hubungan yang kuat dengan spiritualitas dan keyakinan mereka.',
    views: '2.2M',
    likes: '53K',
    comments: '152',
    saves: '21K',
    date: '26 Oct 2023',
    image: '/ic-sukses.png',
    gradient: 'linear-gradient(180deg, #1a2f6b 0%, #2a4a8a 40%, #0d1f45 100%)',
    textColor: 'white',
    accent: '#7ab3f0',
  },
  {
    title: 'Amalan untuk dilakukan Di Sepertiga Malam',
    caption: 'Doa yang mengalun dari hati, harapkan hidangan dari langit sebagai kebahagiaan dan hari raya bagi semua.',
    views: '360,969',
    likes: '8,462',
    comments: '61',
    saves: '8,102',
    date: '28 Dec 2023',
    image: '/ic-sepertiga-malam.png',
    gradient: 'linear-gradient(180deg, #2a1a10 0%, #3d1f0d 40%, #1a0a05 100%)',
    textColor: 'white',
    accent: '#7ab3f0',
  },
  {
    title: 'Amalan Rezeki Diamalkan setelah Magrib',
    caption: 'Rezeki datangnya dari Allah, maka mintalah pada Allah sang maha pemberi rezeki.',
    views: '20,582',
    likes: '286',
    comments: '0',
    saves: '33',
    date: '14 Dec 2023',
    image: '/ic-magrib.png',
    gradient: 'linear-gradient(180deg, #c87820 0%, #d4921c 40%, #3d1a05 100%)',
    textColor: 'white',
    accent: '#7ab3f0',
  },
  {
    title: 'Doa - doa Harian',
    caption: 'Percaya dan yakinlah bahwa Allah akan memberikan kemudahan jalan pada setiap hambanya yang senantiasa berserah diri hanya kepada-Nya.',
    views: '18,396',
    likes: '112',
    comments: '0',
    saves: '11',
    date: '19 Oct 2023',
    image: '/ic-doa-harian.png',
    gradient: 'linear-gradient(180deg, #2a1a0a 0%, #4a2a10 40%, #1a0f05 100%)',
    textColor: 'white',
    accent: '#ffffff',
  },
  {
    title: 'Lakukan selama 21 Hari\nInsya Allah Hidupmu akan Berubah',
    caption: 'Kenikmatan dalam beribadah bisa kita dapatkan jika kita memantapkan diri untuk beristiqomah.',
    views: '55,748',
    likes: '1,370',
    comments: '0',
    saves: '118',
    date: '7 Sep 2023',
    image: '/ic-21hari.png',
    gradient: 'linear-gradient(180deg, #1a1a1a 0%, #2a2a2a 40%, #0a0a0a 100%)',
    textColor: 'white',
    accent: '#7ab3f0',
  },
  {
    title: 'Kisah Pertarungan Iblis dan Malaikat Pada Perang Badr',
    caption: 'Penipuan dan penyamaran tidak akan pernah berhasil tersembunyi dari Allah. Taatlah kepada Allah, karena Dia Maha Mengetahui segala sesuatu.',
    views: '94,680',
    likes: '2,030',
    comments: '13',
    saves: '255',
    date: '27 Sep 2023',
    image: '/ic-perang-badr.png',
    gradient: 'linear-gradient(180deg, #0d1f3d 0%, #1a3060 40%, #0a1520 100%)',
    textColor: 'white',
    accent: '#7ab3f0',
  },
  {
    title: 'Petani memimpikan Firaun di neraka karena tidak Sholat',
    caption: 'Meskipun pekerjaan dan status sosial bisa terlihat sepele, namun ketidakpedulian terhadap kualitas ibadah bisa membawa konsekuensi besar di akhirat.',
    views: '57,873',
    likes: '890',
    comments: '5',
    saves: '31',
    date: '29 Nov 2023',
    image: '/ic-firaun.png',
    gradient: 'linear-gradient(180deg, #2a1a0a 0%, #3d2510 40%, #1a0f05 100%)',
    textColor: 'white',
    accent: '#7ab3f0',
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
  {
    name: 'ChatGPT',
    bg: '#000000',
    logo: (
      <svg viewBox="0 0 41 41" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-6 h-6">
        <path d="M37.532 16.87a9.963 9.963 0 0 0-.856-8.184 10.078 10.078 0 0 0-10.855-4.835 9.964 9.964 0 0 0-6.651-2.458 10.079 10.079 0 0 0-9.618 6.977 9.967 9.967 0 0 0-6.651 4.834 10.08 10.08 0 0 0 1.24 11.817 9.965 9.965 0 0 0 .856 8.185 10.079 10.079 0 0 0 10.855 4.835 9.965 9.965 0 0 0 6.651 2.458 10.079 10.079 0 0 0 9.618-6.977 9.967 9.967 0 0 0 6.651-4.834 10.079 10.079 0 0 0-1.24-11.818zm-15.113 21.348a7.474 7.474 0 0 1-4.799-1.735c.061-.033.168-.091.237-.134l7.964-4.6a1.294 1.294 0 0 0 .655-1.134V19.054l3.366 1.944a.12.12 0 0 1 .066.092v9.299a7.505 7.505 0 0 1-7.49 7.829zm-16.134-6.876a7.471 7.471 0 0 1-.894-5.023c.06.036.162.099.237.141l7.964 4.6a1.297 1.297 0 0 0 1.308 0l9.724-5.614v3.888a.12.12 0 0 1-.048.103l-8.051 4.649a7.504 7.504 0 0 1-10.24-2.744zm-2.09-17.496a7.47 7.47 0 0 1 3.897-3.286c0 .068-.004.19-.004.274v9.201a1.294 1.294 0 0 0 .654 1.132l9.723 5.614-3.366 1.944a.12.12 0 0 1-.114.012L10.948 23.84a7.504 7.504 0 0 1-7.752-9.994zm27.556 6.437l-9.724-5.615 3.367-1.943a.121.121 0 0 1 .114-.012l8.048 4.648a7.498 7.498 0 0 1-1.158 13.528v-9.476a1.293 1.293 0 0 0-.647-1.13zm3.35-5.043c-.059-.037-.162-.099-.236-.141l-7.965-4.6a1.298 1.298 0 0 0-1.308 0l-9.723 5.614v-3.888a.12.12 0 0 1 .048-.103l8.05-4.645a7.497 7.497 0 0 1 11.135 7.763zm-21.063 6.929l-3.367-1.944a.12.12 0 0 1-.065-.092v-9.299a7.497 7.497 0 0 1 12.293-5.756 6.94 6.94 0 0 0-.236.134l-7.965 4.6a1.294 1.294 0 0 0-.654 1.132l-.006 11.225zm1.829-3.943l4.33-2.501 4.332 2.497v4.998l-4.331 2.5-4.331-2.5V18.24z" fill="white"/>
      </svg>
    ),
  },
  {
    name: 'Google Trends',
    bg: '#4285F4',
    logo: (
      <svg viewBox="0 0 24 24" className="w-6 h-6" fill="none">
        <path d="M3 17l4-4 4 4 4-6 4 2" stroke="white" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"/>
        <circle cx="3" cy="17" r="1.5" fill="white"/>
        <circle cx="7" cy="13" r="1.5" fill="white"/>
        <circle cx="11" cy="17" r="1.5" fill="white"/>
        <circle cx="15" cy="11" r="1.5" fill="white"/>
        <circle cx="19" cy="13" r="1.5" fill="white"/>
      </svg>
    ),
  },
  {
    name: 'TikTok Creative Center',
    bg: '#000000',
    logo: (
      <svg viewBox="0 0 24 24" fill="white" className="w-6 h-6">
        <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1V9.01a6.34 6.34 0 00-.79-.05 6.34 6.34 0 00-6.34 6.34 6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.33-6.34V8.69a8.17 8.17 0 004.78 1.52V6.76a4.85 4.85 0 01-1.01-.07z"/>
      </svg>
    ),
  },
  {
    name: 'Auris AI',
    bg: '#7C3AED',
    logo: (
      <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6">
        <path d="M12 3a9 9 0 0 1 9 9v3.5A3.5 3.5 0 0 1 17.5 19H16a2 2 0 0 1-2-2v-4a2 2 0 0 1 2-2h2.93A7 7 0 0 0 5.07 11H8a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2H6.5A3.5 3.5 0 0 1 3 15.5V12a9 9 0 0 1 9-9z" stroke="white" strokeWidth="1.8"/>
      </svg>
    ),
  },
  {
    name: 'Copy.ai',
    bg: '#6D28D9',
    logo: (
      <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6">
        <rect x="9" y="9" width="13" height="13" rx="2" stroke="white" strokeWidth="1.8"/>
        <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" stroke="white" strokeWidth="1.8"/>
        <path d="M13 13h5M13 17h5" stroke="white" strokeWidth="1.8" strokeLinecap="round"/>
      </svg>
    ),
  },
  {
    name: 'Pake.ai',
    bg: '#0EA5E9',
    logo: (
      <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6">
        <circle cx="12" cy="12" r="3" fill="white"/>
        <path d="M12 2v3M12 19v3M2 12h3M19 12h3M5.64 5.64l2.12 2.12M16.24 16.24l2.12 2.12M5.64 18.36l2.12-2.12M16.24 7.76l2.12-2.12" stroke="white" strokeWidth="2" strokeLinecap="round"/>
      </svg>
    ),
  },
  {
    name: 'Google Sheets',
    bg: '#0F9D58',
    logo: (
      <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6">
        <rect x="4" y="2" width="16" height="20" rx="2" stroke="white" strokeWidth="1.8"/>
        <path d="M8 10h8M8 14h8M8 18h5" stroke="white" strokeWidth="1.8" strokeLinecap="round"/>
        <path d="M8 2v4h8" stroke="white" strokeWidth="1.8" strokeLinecap="round"/>
      </svg>
    ),
  },
  {
    name: 'Google Docs',
    bg: '#4285F4',
    logo: (
      <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6">
        <rect x="4" y="2" width="16" height="20" rx="2" stroke="white" strokeWidth="1.8"/>
        <path d="M8 10h8M8 14h8M8 18h5" stroke="white" strokeWidth="1.8" strokeLinecap="round"/>
        <path d="M14 2v5h6" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
  },
  {
    name: 'Google Drive',
    bg: '#FBBC04',
    logo: (
      <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6">
        <path d="M12 3L3 19h6l3-5 3 5h6L12 3z" stroke="white" strokeWidth="1.8" strokeLinejoin="round"/>
        <path d="M7 14h10" stroke="white" strokeWidth="1.8" strokeLinecap="round"/>
      </svg>
    ),
  },
]

// ── Component ─────────────────────────────────────────────────────────────────

export default function IslamCendekiaCaseStudy() {
  const scrollRef = useRef<HTMLDivElement>(null)

  const scroll = (dir: 'left' | 'right') => {
    if (!scrollRef.current) return
    scrollRef.current.scrollBy({ left: dir === 'right' ? 480 : -480, behavior: 'smooth' })
  }

  return (
    <div className="min-h-screen bg-[#F8F7FF] pt-16">

      {/* ── Back nav ── */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 pb-4">
        <Link
          href="/portfolio"
          className="inline-flex items-center gap-2 text-sm text-[#4B4680] hover:text-[#2D1BB8] transition-colors font-medium"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Portfolio
        </Link>
      </div>

      {/* ── Hero ── */}
      <section className="bg-white border-b border-[#E8E6F8] overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-0">
          <div className="flex flex-col lg:flex-row lg:items-stretch gap-8">

            {/* Left: info */}
            <div className="lg:w-[45%] lg:py-16 lg:pr-8 flex-shrink-0 flex flex-col justify-center">
              <h1 className="text-5xl lg:text-6xl font-black text-[#0F0A2E] mb-3 leading-tight">
                Islam Cendekia
              </h1>
              <p className="text-[#2D1BB8] font-bold text-xl lg:text-2xl mb-8 leading-snug">
                Social Media Management<br />& Content Strategy
              </p>

              {/* Platforms */}
              <div className="flex items-center gap-3 mb-6">
                <div className="flex items-center gap-2 px-4 py-2 border border-[#E8E6F8] rounded-full text-sm font-semibold text-[#0F0A2E] bg-white shadow-sm">
                  <Instagram className="w-4 h-4 text-pink-500" />
                  Instagram
                </div>
                <div className="flex items-center gap-2 px-4 py-2 border border-[#E8E6F8] rounded-full text-sm font-semibold text-[#0F0A2E] bg-white shadow-sm">
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
            <div className="lg:flex-1 relative flex items-end justify-start min-h-[560px] lg:min-h-[640px]">

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
                    height: 520,
                    borderRadius: 36,
                    padding: '10px 8px',
                    boxShadow: '0 30px 80px rgba(0,0,0,0.35)',
                  }}
                >
                  {/* Notch */}
                  <div className="absolute top-[10px] left-1/2 -translate-x-1/2 w-16 h-4 bg-black rounded-full z-20" />

                  {/* Screen */}
                  <div className="bg-white overflow-hidden h-full" style={{ borderRadius: 28 }}>
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
                    <div className="grid grid-cols-3 gap-[1px] bg-gray-200 flex-1">
                      {[
                        { bg: 'bg-[#1a2744]', text: 'Amalan Rezeki Diamalkan setelah Magrib', textColor: 'text-white' },
                        { bg: 'bg-[#2a3a50]', text: 'Sony vlog camera...', textColor: 'text-white' },
                        { bg: 'bg-[#1a2744]', text: '', textColor: 'text-white' },
                        { bg: 'bg-[#7a3a1a]', text: 'Amalan Rezeki', textColor: 'text-white' },
                        { bg: 'bg-[#e8f4ff]', text: 'Kebaikan', textColor: 'text-[#0F0A2E]' },
                        { bg: 'bg-[#1a2a1a]', text: 'Q.S Ali Imran', textColor: 'text-white' },
                      ].map((cell, i) => (
                        <div key={i} className={`${cell.bg} relative flex items-end p-1`} style={{ height: 72 }}>
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
          <h2 className="text-sm font-bold text-[#2D1BB8] mb-2 uppercase tracking-wide">
            KEY RESULTS
          </h2>
          <p className="text-xs text-[#9B97C0] mb-8">Sep 20 – Dec 18, 2023 · Last 90 days of management</p>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
            {kpiCards.map((card, i) => {
              const Icon = card.icon
              return (
                <div key={i} className="bg-[#1A3A6B] rounded-2xl p-6 text-white">
                  <Icon className="w-7 h-7 mb-3 text-blue-300" />
                  <div className="text-2xl font-bold mb-0.5">{card.value}</div>
                  <div className="text-sm text-blue-200 mb-1">{card.label}</div>
                  {card.sub && (
                    <div className={`text-[11px] font-semibold leading-tight ${card.subColor}`}>{card.sub}</div>
                  )}
                </div>
              )
            })}
          </div>

          {/* Breakdown stats row */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-6">
            {[
              { label: 'Reels Interactions', value: '89,594', delta: '+933%', color: 'text-emerald-600' },
              { label: 'Likes', value: '53,212', delta: null, color: '' },
              { label: 'Saves', value: '23,723', delta: null, color: '' },
              { label: 'Shares', value: '12,463', delta: null, color: '' },
            ].map((stat, i) => (
              <div key={i} className="bg-white border border-[#E8E6F8] rounded-xl px-4 py-3">
                <p className="text-[11px] text-[#9B97C0] mb-1">{stat.label}</p>
                <p className="text-lg font-bold text-[#0F0A2E]">{stat.value}</p>
                {stat.delta && <p className={`text-[11px] font-semibold ${stat.color}`}>{stat.delta} vs prev. period</p>}
              </div>
            ))}
          </div>

          {/* Impact callout */}
          <div className="bg-white border border-[#E8E6F8] rounded-2xl p-6">
            <p className="text-sm font-bold text-[#2D1BB8] mb-3 uppercase tracking-wide">The Impact</p>
            <div className="grid sm:grid-cols-3 gap-4 text-sm text-[#4B4680] leading-relaxed">
              <div className="flex gap-3">
                <div className="w-1 rounded-full bg-[#2D1BB8] flex-shrink-0" />
                <p>Grew reach to <span className="font-bold text-[#0F0A2E]">984,160 accounts</span> with <span className="font-bold text-[#0F0A2E]">1,073,118 impressions</span> — 980K of which were non-followers, showing strong organic discovery.</p>
              </div>
              <div className="flex gap-3">
                <div className="w-1 rounded-full bg-[#2D1BB8] flex-shrink-0" />
                <p>Drove <span className="font-bold text-[#0F0A2E]">89,643 content interactions</span> (+924%) with Reels alone generating <span className="font-bold text-[#0F0A2E]">23,723 saves</span> and <span className="font-bold text-[#0F0A2E]">12,463 shares</span>.</p>
              </div>
              <div className="flex gap-3">
                <div className="w-1 rounded-full bg-[#2D1BB8] flex-shrink-0" />
                <p>Profile visits reached <span className="font-bold text-[#0F0A2E]">6,879</span> (+445%) with <span className="font-bold text-[#0F0A2E]">34 external link taps</span> (+385%), converting content views into real audience interest.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Top Performing Content ── */}
      <section className="py-16 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-2">
            <h2 className="text-sm font-bold text-[#2D1BB8] uppercase tracking-wide">
              TOP PERFORMING CONTENT
            </h2>
            {/* Prev / Next buttons */}
            <div className="flex items-center gap-2">
              <button
                onClick={() => scroll('left')}
                className="w-8 h-8 rounded-full border border-[#E8E6F8] bg-white flex items-center justify-center text-[#4B4680] hover:bg-[#2D1BB8] hover:text-white hover:border-[#2D1BB8] transition-all shadow-sm"
                aria-label="Previous"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              <button
                onClick={() => scroll('right')}
                className="w-8 h-8 rounded-full border border-[#E8E6F8] bg-white flex items-center justify-center text-[#4B4680] hover:bg-[#2D1BB8] hover:text-white hover:border-[#2D1BB8] transition-all shadow-sm"
                aria-label="Next"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
          <p className="text-xs text-[#9B97C0] mb-6">Top Reels by reach & engagement. The #1 reel alone hit <span className="font-semibold text-[#4B4680]">2.2M views</span> and <span className="font-semibold text-[#4B4680]">53K likes</span> — consistently outperforming across Instagram &amp; TikTok.</p>
        </div>

        {/* Scroll container */}
        <div
          ref={scrollRef}
          className="flex gap-4 overflow-x-auto pb-4 px-4 sm:px-6 lg:px-8 scroll-smooth"
          style={{
            scrollSnapType: 'x mandatory',
            WebkitOverflowScrolling: 'touch',
            msOverflowStyle: 'none',
            scrollbarWidth: 'none',
          }}
        >
          {topContent.map((item, i) => (
            <div
              key={i}
              className="flex-shrink-0 rounded-2xl overflow-hidden border border-[#E8E6F8] bg-white shadow-sm hover:shadow-lg transition-all hover:-translate-y-1"
              style={{ width: 220, scrollSnapAlign: 'start' }}
            >
              {/* Thumbnail */}
              <div
                className="relative flex flex-col justify-between p-4"
                style={{ height: 280, overflow: 'hidden' }}
              >
                {/* Background: real screenshot image */}
                {item.image ? (
                  <img
                    src={item.image}
                    alt={item.title}
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                ) : (
                  <div className="absolute inset-0" style={{ background: item.gradient }} />
                )}
                {/* Dark overlay for readability */}
                <div className="absolute inset-0 bg-black/30" />

                {/* IC logo badge */}
                <div className="relative flex items-center gap-1.5">
                  <div className="w-5 h-5 rounded-full bg-white/20 flex items-center justify-center">
                    <span className="text-white text-[6px] font-black">IC</span>
                  </div>
                  <span className="text-white/70 text-[8px] font-medium">Islam Cendekia</span>
                </div>

                {/* Title */}
                <div className="relative">
                  {item.title.split('\n').map((line, li) => (
                    <p key={li} className="font-bold leading-tight text-[13px]" style={{ color: li > 0 ? item.accent : 'white' }}>
                      {line}
                    </p>
                  ))}
                </div>

                {/* View count badge */}
                <div className="absolute top-3 right-3 bg-black/40 backdrop-blur-sm rounded-full px-2 py-0.5 flex items-center gap-1">
                  <Eye className="w-2.5 h-2.5 text-white/80" />
                  <span className="text-white text-[9px] font-bold">{item.views}</span>
                </div>
              </div>

              {/* Stats row */}
              <div className="px-3 py-2.5 flex items-center gap-2.5 border-b border-[#F0EEF8]">
                <div className="flex items-center gap-1 text-[11px] text-[#4B4680]">
                  <Heart className="w-3 h-3 text-rose-400" />
                  <span className="font-semibold">{item.likes}</span>
                </div>
                <div className="flex items-center gap-1 text-[11px] text-[#4B4680]">
                  <MessageCircle className="w-3 h-3 text-blue-400" />
                  <span className="font-semibold">{item.comments}</span>
                </div>
                <div className="flex items-center gap-1 text-[11px] text-[#4B4680]">
                  <svg className="w-3 h-3 text-emerald-400" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M5 5v14l7-4 7 4V5a2 2 0 0 0-2-2H7a2 2 0 0 0-2 2z"/></svg>
                  <span className="font-semibold">{item.saves}</span>
                </div>
                <span className="ml-auto text-[10px] text-[#9B97C0] whitespace-nowrap">{item.date}</span>
              </div>

              {/* Caption */}
              <div className="px-3 py-3">
                <p className="text-[11px] text-[#4B4680] leading-relaxed line-clamp-3">{item.caption}</p>
              </div>
            </div>
          ))}

          <div className="flex-shrink-0 w-8" aria-hidden="true" />
        </div>

        <style>{`
          .overflow-x-auto::-webkit-scrollbar { display: none; }
        `}</style>
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
                  <div key={tool.name} className="bg-white border border-[#E8E6F8] rounded-xl p-3 flex flex-col items-center gap-2 hover:shadow-sm transition-shadow">
                    <div
                      className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
                      style={{ backgroundColor: tool.bg }}
                    >
                      {tool.logo}
                    </div>
                    <p className="text-[10px] font-medium text-[#4B4680] text-center leading-tight">{tool.name}</p>
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
