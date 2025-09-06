# Next.js i18n Translation Example

This is a [Next.js](https://nextjs.org) project with internationalization (i18n) support, showcasing URL translation for multiple languages.

## Features

- **Multi-language support**: English (en), Finnish (fi), Swedish (sv)
- **Localized URL paths**: Each language has its own URL path structure (e.g., `/en/about`, `/fi/tietoa`, `/sv/om`)
- **Automatic language detection**: Root URL redirects to default language
- **Language switching**: Switch languages while maintaining current page context
- **Static export support**: Optimized for GitHub Pages deployment
- **Responsive design**: Built with Tailwind CSS

## Supported Routes

All routes are available in three languages with localized paths:

| English | Finnish | Swedish | Description |
|---------|---------|---------|-------------|
| `/en/home` | `/fi/koti` | `/sv/hem` | Home page |
| `/en/about` | `/fi/tietoa` | `/sv/om` | About page |
| `/en/help` | `/fi/apua` | `/sv/hjälp` | Help page |
| `/en/onboarding` | `/fi/aloitus` | `/sv/introduktion` | Onboarding page |
| `/en/profile` | `/fi/profiili` | `/sv/profil` | Profile page |

## Project Structure

```
src/
├── app/
│   ├── [locale]/          # Dynamic locale routing
│   │   ├── [slug]/        # Dynamic slug routing for localized paths
│   │   │   └── page.tsx   # All page components
│   │   ├── layout.tsx     # Locale-specific layout
│   │   └── page.tsx       # Locale home redirect
│   ├── layout.tsx         # Root layout
│   └── page.tsx           # Root redirect
├── components/
│   └── Navigation.tsx     # Navigation with language switcher
├── lib/
│   ├── i18n.ts           # i18n configuration and helpers
│   ├── routeTranslations.ts # Centralized route slug translations
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
   - You'll be automatically redirected to `/en/home` (default language)

4. Test language switching using the language selector in the navigation

## Building for Production

For standard deployment:
```bash
npm run build
npm start
```

For static export (GitHub Pages):
```bash
npm run build
# Output will be in the 'out' directory
```

## GitHub Pages Deployment

This project is configured for automatic deployment to GitHub Pages using GitHub Actions.

### Setup Instructions

1. **Enable GitHub Pages** in your repository settings:
   - Go to Settings > Pages
   - Set Source to "GitHub Actions"

2. **Push to main branch** - the workflow will automatically:
   - Build the Next.js application as a static export
   - Deploy to GitHub Pages
   - Make it available at `https://[username].github.io/[repository-name]`

### Workflow Details

The deployment workflow (`.github/workflows/deploy.yml`):
- Triggers on pushes to `main` branch
- Builds the app with static export
- Deploys the `out` directory to GitHub Pages
- Supports all localized routes and paths

## How It Works

1. **Middleware**: Detects and redirects to appropriate language URLs
2. **Dynamic Routes**: Uses `[locale]/[slug]` structure for localized paths
3. **Route Translation**: Centralized mapping of route keys to localized slugs
4. **Static Generation**: Pre-renders all localized pages during build
5. **Language Persistence**: Language switching preserves the current page context

## Route Translation System

Routes are defined once and automatically translated:

```typescript
// lib/routeTranslations.ts
export const routeTranslations = {
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
  // ... more routes
}
```

## Adding New Languages

1. Create a new translation file in `src/lib/locales/`
2. Add the locale to the `locales` array in `src/lib/i18n.ts`
3. Add route translations in `src/lib/routeTranslations.ts`
4. Import and add the translations to the `translations` object

## Adding New Routes

1. Add the route key and localized slugs to `routeTranslations.ts`
2. Add the page component to `src/app/[locale]/[slug]/page.tsx`
3. Add navigation links in `Navigation.tsx`
4. Add translations for the page content

## Technologies Used

- **Next.js 15.5.2** with App Router
- **TypeScript** for type safety
- **Tailwind CSS** for styling
- **GitHub Actions** for automated deployment
- **Custom i18n system** (no external libraries)

This project demonstrates modern Next.js i18n capabilities with static export support for GitHub Pages deployment.
