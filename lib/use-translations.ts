import { useParams } from 'next/navigation'
import en from './translations/en.json'
import id from './translations/id.json'

const translations = {
  en,
  id,
} as const

export type Language = keyof typeof translations
export type TranslationKeys = typeof en

export function useTranslations() {
  const params = useParams()
  const lang = (params.lang as Language) || 'en'

  const t = (key: string): string => {
    const keys = key.split('.')
    let value: any = translations[lang]

    for (const k of keys) {
      value = value?.[k]
    }

    // Fallback to English if translation not found
    if (value === undefined) {
      value = translations.en
      for (const k of keys) {
        value = value?.[k]
      }
    }

    return value || key
  }

  return { t, lang }
}

export function getTranslation(lang: Language, key: string): string {
  const keys = key.split('.')
  let value: any = translations[lang]

  for (const k of keys) {
    value = value?.[k]
  }

  if (value === undefined) {
    value = translations.en
    for (const k of keys) {
      value = value?.[k]
    }
  }

  return value || key
}
