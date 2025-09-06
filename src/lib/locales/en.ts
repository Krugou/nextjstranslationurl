export default {
  common: {
    home: 'Home',
    about: 'About',
    help: 'Help',
    onboarding: 'Onboarding',
    profile: 'Profile',
    language: 'Language',
    welcome: 'Welcome',
  },
  pages: {
    home: {
      title: 'Welcome to Next.js i18n',
      description: 'This is a Next.js application with internationalization support.',
    },
    about: {
      title: 'About Us',
      description: 'Learn more about our company and mission.',
      content: 'We are a technology company focused on creating amazing web applications.',
    },
    help: {
      title: 'Help Center',
      description: 'Find answers to frequently asked questions.',
      content: 'Browse through our help documentation to find solutions to common issues.',
    },
    onboarding: {
      title: 'Get Started',
      description: 'Welcome! Let us help you get started.',
      content: 'Follow these steps to complete your setup and start using our platform.',
    },
    profile: {
      title: 'User Profile',
      description: 'Manage your account settings and preferences.',
      content: 'Update your personal information and account preferences here.',
    },
  },
} as const;