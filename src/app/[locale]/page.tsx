import { redirect } from 'next/navigation'
import { type Locale, locales } from '@/lib/i18n'
import { getLocalizedSlug } from '@/lib/routeTranslations'

interface PageProps {
  params: Promise<{ locale: string }>
}

export async function generateStaticParams() {
  return locales.map((locale) => ({
    locale,
  }))
}

export default async function LocalePage({ params }: PageProps) {
  const { locale } = await params
  
  // Redirect to the localized home page
  redirect(`/${locale}/${getLocalizedSlug('home', locale as Locale)}`)
}