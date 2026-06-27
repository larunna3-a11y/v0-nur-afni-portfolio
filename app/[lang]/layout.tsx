import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import '@/app/globals.css'
import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter'
})

export const metadata: Metadata = {
  title: 'Nur Afni | Digital Marketing Specialist',
  description: 'Digital Marketing Specialist based in Jakarta, Indonesia. 3+ years scaling brands across social media, paid ads, and marketplaces.',
  keywords: ['Digital Marketing', 'Social Media', 'Paid Ads', 'E-Commerce', 'Jakarta', 'Indonesia'],
}

export const viewport = {
  themeColor: '#2D1BB8',
}

export async function generateStaticParams() {
  return [{ lang: 'en' }, { lang: 'id' }]
}

export default function LocalizedLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode
  params: { lang: string }
}>) {
  return (
    <html lang={params.lang} className="bg-[#F8F7FF]">
      <body className={`${inter.variable} font-sans antialiased`}>
        <Navbar />
        <main>{children}</main>
        <Footer />
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
