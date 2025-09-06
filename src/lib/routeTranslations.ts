import type { Locale } from './i18n'

// Central mapping of route keys to localized slugs
export const routeTranslations: Record<string, Record<Locale, string>> = {
  home: {
    en: 'home',
    fi: 'koti',
    sv: 'hem',
  },
  about: {
    en: 'about',
    fi: 'tietoa',
    sv: 'om',
  },
  help: {
    en: 'help',
    fi: 'apua',
    sv: 'hjälp',
  },
  onboarding: {
    en: 'onboarding',
    fi: 'aloitus',
    sv: 'introduktion',
  },
  profile: {
    en: 'profile',
    fi: 'profiili',
    sv: 'profil',
  },
}

// Helper function to get localized slug for a route
export function getLocalizedSlug(routeKey: string, locale: Locale): string {
  return routeTranslations[routeKey]?.[locale] || routeKey
}

// Helper function to get route key from localized slug
export function getRouteKeyFromSlug(slug: string, locale: Locale): string | null {
  for (const [routeKey, translations] of Object.entries(routeTranslations)) {
    if (translations[locale] === slug) {
      return routeKey
    }
  }
  return null
}

// Get all available route keys
export function getRouteKeys(): string[] {
  return Object.keys(routeTranslations)
}