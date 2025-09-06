import type { Metadata } from "next";
import { headers } from 'next/headers'
import { defaultLocale, isValidLocale } from '@/lib/i18n'
import "./globals.css";

export const metadata: Metadata = {
  title: "Next.js i18n Translation Example",
  description: "Next.js application with internationalization for URL translation",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const headersList = await headers()
  const pathname = headersList.get('x-pathname') || '/'
  
  // Extract locale from pathname
  const segments = pathname.split('/')
  const localeSegment = segments[1]
  const locale = isValidLocale(localeSegment) ? localeSegment : defaultLocale

  return (
    <html lang={locale}>
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}