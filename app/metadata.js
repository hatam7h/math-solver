const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://math-solver-app.com';
const siteName = 'Math Solver';
const siteDescription = 'Your comprehensive platform for exploring mathematical concepts, solving problems, and expanding your knowledge through interactive tools and insightful articles.';
const siteKeywords = 'math solver, mathematics, calculator, math blog, learn math, math tools, algebra, calculus, trigonometry';

const defaultMetadata = {
  title: {
    default: siteName,
    template: `%s | ${siteName}`
  },
  description: siteDescription,
  keywords: siteKeywords,
  metadataBase: new URL(siteUrl),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: siteName,
    description: siteDescription,
    url: siteUrl,
    siteName,
    locale: 'en_US',
    type: 'website',
    images: [
      {
        url: `${siteUrl}/og-image.jpg`,
        width: 1200,
        height: 630,
        alt: siteName,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: siteName,
    description: siteDescription,
    creator: '@mathsolver',
    images: [`${siteUrl}/twitter-image.jpg`],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: [
      { url: '/favicon.ico' },
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
    ],
    apple: [
      { url: '/apple-touch-icon.png' },
    ],
    other: [
      { rel: 'mask-icon', url: '/safari-pinned-tab.svg', color: '#3b82f6' },
    ],
  },
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#111827' },
    { media: '(prefers-color-scheme: dark)', color: '#1f2937' },
  ],
  manifest: '/site.webmanifest',
  verification: {
    google: 'YOUR_GOOGLE_SEARCH_CONSOLE_CODE',
    yandex: 'YANDEX_VERIFICATION_CODE',
    yahoo: 'YAHOO_VERIFICATION_CODE',
    other: {
      'msvalidate.01': 'BING_WEBMASTER_CODE',
    },
  },
};

// Page-specific metadata
export const metadataByRoute = {
  '/': {
    title: 'Home',
    description: 'Your comprehensive platform for exploring mathematical concepts and solving problems',
  },
  '/calculator': {
    title: 'Calculator',
    description: 'Perform basic to advanced mathematical calculations with our powerful online calculator',
  },
  '/mathsolver': {
    title: 'Math Solver',
    description: 'Solve complex mathematical problems with step-by-step solutions',
  },
  '/blog': {
    title: 'Math Blog',
    description: 'Explore articles and tutorials about various mathematical concepts and theories',
  },
};

export default defaultMetadata;
