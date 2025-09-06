import { notFound } from 'next/navigation'
import { t, type Locale, locales } from '@/lib/i18n'
import { getRouteKeyFromSlug, getRouteKeys, getLocalizedSlug } from '@/lib/routeTranslations'

interface PageProps {
  params: Promise<{ locale: string; slug: string }>
}

export async function generateStaticParams() {
  const params = []
  
  for (const locale of locales) {
    const routeKeys = getRouteKeys()
    for (const routeKey of routeKeys) {
      const slug = getLocalizedSlug(routeKey, locale)
      params.push({
        locale,
        slug,
      })
    }
  }
  
  return params
}

// Page components for each route
const HomeComponent = ({ locale }: { locale: Locale }) => (
  <div className="max-w-4xl mx-auto">
    <div className="bg-white rounded-lg shadow-sm border p-8">
      <h1 className="text-3xl font-bold text-gray-900 mb-4">
        {t(locale, 'pages.home.title')}
      </h1>
      <p className="text-lg text-gray-600 mb-6">
        {t(locale, 'pages.home.description')}
      </p>
    </div>
  </div>
)

const AboutComponent = ({ locale }: { locale: Locale }) => (
  <div className="max-w-4xl mx-auto">
    <div className="bg-white rounded-lg shadow-sm border p-8">
      <h1 className="text-3xl font-bold text-gray-900 mb-4">
        {t(locale, 'pages.about.title')}
      </h1>
      <p className="text-lg text-gray-600 mb-6">
        {t(locale, 'pages.about.description')}
      </p>
      <div className="prose max-w-none">
        <p className="text-gray-700 leading-relaxed">
          {t(locale, 'pages.about.content')}
        </p>
      </div>
    </div>
  </div>
)

const HelpComponent = ({ locale }: { locale: Locale }) => (
  <div className="max-w-4xl mx-auto">
    <div className="bg-white rounded-lg shadow-sm border p-8">
      <h1 className="text-3xl font-bold text-gray-900 mb-4">
        {t(locale, 'pages.help.title')}
      </h1>
      <p className="text-lg text-gray-600 mb-6">
        {t(locale, 'pages.help.description')}
      </p>
    </div>
  </div>
)

const OnboardingComponent = ({ locale }: { locale: Locale }) => (
  <div className="max-w-4xl mx-auto">
    <div className="bg-white rounded-lg shadow-sm border p-8">
      <h1 className="text-3xl font-bold text-gray-900 mb-4">
        {t(locale, 'pages.onboarding.title')}
      </h1>
      <p className="text-lg text-gray-600 mb-6">
        {t(locale, 'pages.onboarding.description')}
      </p>
    </div>
  </div>
)

const ProfileComponent = ({ locale }: { locale: Locale }) => (
  <div className="max-w-4xl mx-auto">
    <div className="bg-white rounded-lg shadow-sm border p-8">
      <h1 className="text-3xl font-bold text-gray-900 mb-4">
        {t(locale, 'pages.profile.title')}
      </h1>
      <p className="text-lg text-gray-600 mb-6">
        {t(locale, 'pages.profile.description')}
      </p>
    </div>
  </div>
)

// Component mapping
const pageComponents = {
  home: HomeComponent,
  about: AboutComponent,
  help: HelpComponent,
  onboarding: OnboardingComponent,
  profile: ProfileComponent,
} as const

export default async function DynamicPage({ params }: PageProps) {
  const { locale, slug } = await params

  // Decode slug to handle URL-encoded characters
  const decodedSlug = decodeURIComponent(slug)

  // Get the route key from the localized slug
  const routeKey = getRouteKeyFromSlug(decodedSlug, locale as Locale)

  if (!routeKey || !(routeKey in pageComponents)) {
    notFound()
  }

  const Component = pageComponents[routeKey as keyof typeof pageComponents]

  return <Component locale={locale as Locale} />
}
