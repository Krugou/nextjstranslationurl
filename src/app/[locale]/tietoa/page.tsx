import { t, type Locale } from '@/lib/i18n'

interface PageProps {
  params: Promise<{ locale: string }>
}

export default async function AboutPage({ params }: PageProps) {
  const { locale } = await params

  return (
    <div className="max-w-4xl mx-auto">
      <div className="bg-white rounded-lg shadow-sm border p-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-4">
          {t(locale as Locale, 'pages.about.title')}
        </h1>
        <p className="text-lg text-gray-600 mb-6">
          {t(locale as Locale, 'pages.about.description')}
        </p>
        <div className="prose max-w-none">
          <p className="text-gray-700 leading-relaxed">
            {t(locale as Locale, 'pages.about.content')}
          </p>
        </div>
      </div>
    </div>
  )
}
