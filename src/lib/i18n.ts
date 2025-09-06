import en from './locales/en'
import fi from './locales/fi'
import sv from './locales/sv'

export const locales = ['en', 'fi', 'sv'] as const
export type Locale = typeof locales[number]
export const defaultLocale: Locale = 'en'

const translations = { en, fi, sv }

export function isValidLocale(locale: string): locale is Locale {
  return locales.includes(locale as Locale)
}

export function getTranslations(locale: Locale) {
  return translations[locale]
}

function getNestedValue(obj: Record<string, unknown>, path: string): string {
  const keys = path.split('.')
  let current = obj
  
  for (const key of keys) {
    if (current && typeof current === 'object' && key in current) {
      current = current[key] as Record<string, unknown>
    } else {
      return path
    }
  }
  
  return typeof current === 'string' ? current : path
}

export function t(locale: Locale, key: string): string {
  const translation = getTranslations(locale)
  return getNestedValue(translation as Record<string, unknown>, key)
}