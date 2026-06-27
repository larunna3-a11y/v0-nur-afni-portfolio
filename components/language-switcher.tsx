'use client'

import { useParams, usePathname } from 'next/navigation'
import Link from 'next/link'

export function LanguageSwitcher() {
  const params = useParams()
  const pathname = usePathname()
  const currentLang = (params.lang as string) || 'en'

  const switchLanguage = (newLang: string) => {
    // Replace the language segment in the pathname
    const segments = pathname.split('/')
    segments[1] = newLang
    return segments.join('/')
  }

  const otherLang = currentLang === 'en' ? 'id' : 'en'
  const otherLangLabel = otherLang === 'en' ? 'English' : 'Indonesia'

  return (
    <Link
      href={switchLanguage(otherLang)}
      className="inline-flex items-center gap-2 px-3 py-1 text-sm font-medium text-[#2D1BB8] hover:bg-[#F8F7FF] rounded-lg transition-colors"
    >
      {otherLangLabel}
    </Link>
  )
}
