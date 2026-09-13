'use client'

import { useLocale } from 'next-intl'
import { useRouter } from 'next/navigation'
import { useTransition } from 'react'

const LOCALE_COOKIE = 'NEXT_LOCALE'

export function LanguageSwitcher() {
  const locale = useLocale()
  const router = useRouter()
  const [isPending, startTransition] = useTransition()

  const setLocale = (next: 'en' | 'id') => {
    if (next === locale) return
    document.cookie = `${LOCALE_COOKIE}=${next}; path=/; max-age=31536000`
    startTransition(() => {
      router.refresh()
    })
  }

  return (
    <div
      className="flex items-center gap-1 rounded-full border border-[#E8E6F8] bg-white p-1 text-xs font-semibold"
      role="group"
      aria-label="Language switcher"
    >
      <button
        type="button"
        onClick={() => setLocale('id')}
        disabled={isPending}
        aria-pressed={locale === 'id'}
        className={`rounded-full px-2.5 py-1 transition-colors ${locale === 'id' ? 'bg-[#2D1BB8] text-white' : 'text-[#4B4680] hover:text-[#2D1BB8]'}`}
      >
        ID
      </button>
      <button
        type="button"
        onClick={() => setLocale('en')}
        disabled={isPending}
        aria-pressed={locale === 'en'}
        className={`rounded-full px-2.5 py-1 transition-colors ${locale === 'en' ? 'bg-[#2D1BB8] text-white' : 'text-[#4B4680] hover:text-[#2D1BB8]'}`}
      >
        EN
      </button>
    </div>
  )
}
