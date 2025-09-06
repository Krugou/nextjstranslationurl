import { t, type Locale } from '@/lib/i18n'

interface PageProps {
  params: Promise<{ locale: string }>
}

export default async function HomePage({ params }: PageProps) {
  const { locale } = await params

  return (
    <div className="max-w-4xl mx-auto">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          {t(locale as Locale, 'pages.home.title')}
        </h1>
        <p className="text-xl text-gray-600 mb-8">
          {t(locale as Locale, 'pages.home.description')}
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
          <div className="bg-white p-6 rounded-lg shadow-sm border">
            <h3 className="text-lg font-semibold text-gray-900 mb-2">
              {t(locale as Locale, 'common.about')}
            </h3>
            <p className="text-gray-600 text-sm mb-4">
              {t(locale as Locale, 'pages.about.description')}
            </p>
            <a
              href={`/${locale}/about`}
              className="text-blue-600 hover:text-blue-800 text-sm font-medium"
            >
              Visit page →
            </a>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-sm border">
            <h3 className="text-lg font-semibold text-gray-900 mb-2">
              {t(locale as Locale, 'common.help')}
            </h3>
            <p className="text-gray-600 text-sm mb-4">
              {t(locale as Locale, 'pages.help.description')}
            </p>
            <a
              href={`/${locale}/help`}
              className="text-blue-600 hover:text-blue-800 text-sm font-medium"
            >
              Visit page →
            </a>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-sm border">
            <h3 className="text-lg font-semibold text-gray-900 mb-2">
              {t(locale as Locale, 'common.onboarding')}
            </h3>
            <p className="text-gray-600 text-sm mb-4">
              {t(locale as Locale, 'pages.onboarding.description')}
            </p>
            <a
              href={`/${locale}/onboarding`}
              className="text-blue-600 hover:text-blue-800 text-sm font-medium"
            >
              Visit page →
            </a>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-sm border">
            <h3 className="text-lg font-semibold text-gray-900 mb-2">
              {t(locale as Locale, 'common.profile')}
            </h3>
            <p className="text-gray-600 text-sm mb-4">
              {t(locale as Locale, 'pages.profile.description')}
            </p>
            <a
              href={`/${locale}/profile`}
              className="text-blue-600 hover:text-blue-800 text-sm font-medium"
            >
              Visit page →
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}