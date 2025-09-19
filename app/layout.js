import { Inter } from "next/font/google";
import "./globals.css";
import defaultMetadata, { metadataByRoute } from './metadata';

const inter = Inter({ subsets: ['latin'] });

// Generate metadata for each route
export async function generateMetadata({ params }) {
  const route = `/${params?.segments?.join('/') || ''}`;
  const routeMetadata = metadataByRoute[route] || {};
  
  return {
    ...defaultMetadata,
    title: {
      ...defaultMetadata.title,
      default: routeMetadata.title || defaultMetadata.title.default,
    },
    description: routeMetadata.description || defaultMetadata.description,
    openGraph: {
      ...defaultMetadata.openGraph,
      title: routeMetadata.title || defaultMetadata.openGraph.title,
      description: routeMetadata.description || defaultMetadata.openGraph.description,
    },
    twitter: {
      ...defaultMetadata.twitter,
      title: routeMetadata.title || defaultMetadata.twitter.title,
      description: routeMetadata.description || defaultMetadata.twitter.description,
    },
  };
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="canonical" href={process.env.NEXT_PUBLIC_SITE_URL} />
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=5.0, viewport-fit=cover" />
        
        {/* Structured Data for Rich Results */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'WebApplication',
              name: 'Math Solver',
              url: process.env.NEXT_PUBLIC_SITE_URL,
              description: defaultMetadata.description,
              applicationCategory: 'EducationalApplication',
              operatingSystem: 'Web',
              offers: {
                '@type': 'Offer',
                price: '0',
                priceCurrency: 'USD',
              },
            }),
          }}
        />
      </head>
      <body className={`${inter.className} bg-gray-900 text-white flex flex-col min-h-screen`}>
        <main className="flex-grow">
          {children}
        </main>
        <footer className="bg-gray-900/30 backdrop-blur-lg border-t border-gray-800/50">
          <div className="max-w-7xl mx-auto px-4 py-4">
            <p className="text-center text-gray-300 text-xs sm:text-sm">
              © {new Date().getFullYear()} 
              <a 
                href="https://hatamh.com" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="mx-1 text-blue-400 hover:text-blue-300 transition-colors duration-200 font-medium"
              >
                Hatamh.com
              </a> 
              <span className="text-gray-400">All rights reserved.</span>
            </p>
          </div>
        </footer>
      </body>
    </html>
  );
}
