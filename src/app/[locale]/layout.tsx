import { isValidLocale, type Locale } from '@/lib/i18n'
import { notFound } from 'next/navigation'
import Navigation from '@/components/Navigation'

interface LocaleLayoutProps {
  children: React.ReactNode
  params: Promise<{ locale: string }>
}

export async function generateStaticParams() {
  const { locales } = await import('@/lib/i18n')
  return locales.map((locale) => ({
    locale,
  }))
}

export default async function LocaleLayout({
  children,
  params,
}: LocaleLayoutProps) {
  const { locale } = await params
  
  if (!isValidLocale(locale)) {
    notFound()
  }

  return (
    <html lang={locale}>
      <body>
        <div className="min-h-screen bg-gray-50">
          <Navigation locale={locale as Locale} />
          <main className="container mx-auto px-4 py-8">
            {children}
          </main>
        </div>
      </body>
    </html>
  )
}