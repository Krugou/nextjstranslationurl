'use client'

import Link from 'next/link'
import { locales, type Locale, t } from '@/lib/i18n'
import { usePathname } from 'next/navigation'
import { getLocalizedSlug, getRouteKeyFromSlug, getRouteKeys } from '@/lib/routeTranslations'

interface NavigationProps {
  locale: Locale
}

export default function Navigation({ locale }: NavigationProps) {
  const pathname = usePathname()

  // Use route keys and localized slugs from centralized translations
  const routeKeys = getRouteKeys()
  const routes = routeKeys.map((key) => ({
    href: `/${locale}/${getLocalizedSlug(key, locale)}`,
    label: t(locale, `common.${key}`),
  }))

  const switchLocale = (newLocale: Locale) => {
    // Find current route key by matching pathname with current locale's slugs
    const currentSlug = pathname.split('/')[2]
    if (!currentSlug) return `/${newLocale}/${getLocalizedSlug('home', newLocale)}`
    
    const routeKey = getRouteKeyFromSlug(currentSlug, locale)
    if (!routeKey) return `/${newLocale}/${getLocalizedSlug('home', newLocale)}`
    
    // Use new locale's slug for the same route
    return `/${newLocale}/${getLocalizedSlug(routeKey, newLocale)}`
  }

  return (
    <nav className="bg-white shadow-sm border-b">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <div className="flex space-x-8">
            {routes.map((route) => (
              <Link
                key={route.href}
                href={route.href}
                className={`text-gray-600 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                  pathname === route.href
                    ? 'bg-gray-100 text-gray-900'
                    : ''
                }`}
              >
                {route.label}
              </Link>
            ))}
          </div>

          <div className="flex items-center space-x-4">
            <span className="text-sm text-gray-500">{t(locale, 'common.language')}:</span>
            <div className="flex space-x-2">
              {locales.map((loc) => (
                <Link
                  key={loc}
                  href={switchLocale(loc)}
                  className={`px-2 py-1 text-sm rounded transition-colors ${
                    locale === loc
                      ? 'bg-blue-100 text-blue-800'
                      : 'text-gray-600 hover:text-gray-900 hover:bg-gray-100'
                  }`}
                >
                  {loc.toUpperCase()}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}
