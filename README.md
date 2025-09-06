# Next.js i18n Translation Example

This is a [Next.js](https://nextjs.org) project with internationalization (i18n) support, showcasing URL translation for multiple languages.

## Features

- **Multi-language support**: English (en), Finnish (fi), Swedish (sv)
- **URL routing**: Each language has its own URL path structure (e.g., `/en/about`, `/fi/tietoa`, `/sv/om-oss`)
- **Automatic language detection**: Root URL redirects to default language
- **Language switching**: Switch languages while maintaining current page context
- **Responsive design**: Built with Tailwind CSS

## Supported Routes

All routes are available in three languages:

| English | Finnish | Swedish |
|---------|---------|---------|
| `/en` | `/fi` | `/sv` |
| `/en/about` | `/fi/about` | `/sv/about` |
| `/en/help` | `/fi/help` | `/sv/help` |
| `/en/onboarding` | `/fi/onboarding` | `/sv/onboarding` |
| `/en/profile` | `/fi/profile` | `/sv/profile` |

## Project Structure

```
src/
├── app/
│   ├── [locale]/          # Dynamic locale routing
│   │   ├── about/         # About page
│   │   ├── help/          # Help page
│   │   ├── onboarding/    # Onboarding page
│   │   ├── profile/       # Profile page
│   │   ├── layout.tsx     # Locale-specific layout
│   │   └── page.tsx       # Home page
│   ├── layout.tsx         # Root layout
│   └── page.tsx           # Root redirect
├── components/
│   └── Navigation.tsx     # Navigation with language switcher
├── lib/
│   ├── i18n.ts           # i18n configuration and helpers
│   └── locales/          # Translation files
│       ├── en.ts         # English translations
│       ├── fi.ts         # Finnish translations
│       └── sv.ts         # Swedish translations
└── middleware.ts          # Route middleware for language detection
```

## Getting Started

1. Install dependencies:
```bash
npm install
```

2. Run the development server:
```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) with your browser
   - You'll be automatically redirected to `/en` (default language)

4. Test language switching using the language selector in the navigation

## Building for Production

```bash
npm run build
npm start
```

## How It Works

1. **Middleware**: Detects and redirects to appropriate language URLs
2. **Dynamic Routes**: Uses `[locale]` folder structure for language-specific pages
3. **Translation System**: Simple key-based translation lookup system
4. **Language Persistence**: Language switching preserves the current page context

## Adding New Languages

1. Create a new translation file in `src/lib/locales/`
2. Add the locale to the `locales` array in `src/lib/i18n.ts`
3. Import and add the translations to the `translations` object

## Technologies Used

- **Next.js 15.5.2** with App Router
- **TypeScript** for type safety
- **Tailwind CSS** for styling
- **Custom i18n system** (no external libraries)

This project demonstrates the latest Next.js i18n capabilities using the App Router architecture.
