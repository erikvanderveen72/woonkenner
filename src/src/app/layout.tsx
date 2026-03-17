import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const inter = Inter({ variable: '--font-inter', subsets: ['latin'], display: 'swap' });

export const metadata: Metadata = {
  title: { template: '%s | Woonkenner.nl', default: 'Woonkenner.nl - Jouw Gids voor Wonen in Nederland 2026' },
  description: 'Vergelijk hypotheken, bereken je woningwaarde, ontdek verduurzamingssubsidies en check huurprijzen. Onafhankelijk en 100% gratis.',
  keywords: ['hypotheek vergelijken', 'woningwaarde berekenen', 'verduurzaming subsidie', 'huurprijs berekenen', 'wonen nederland 2026'],
  metadataBase: new URL('https://woonkenner.nl'),
  openGraph: { type: 'website', locale: 'nl_NL', url: 'https://woonkenner.nl', siteName: 'Woonkenner.nl', images: [{ url: '/og-image.png', width: 1200, height: 630, alt: 'Woonkenner.nl - Jouw Gids voor Wonen in Nederland' }] },
  twitter: { card: 'summary_large_image', images: ['/og-image.png'] },
  alternates: { canonical: 'https://woonkenner.nl', languages: { 'nl-NL': 'https://woonkenner.nl' } },
  robots: { index: true, follow: true, 'max-snippet': -1, 'max-image-preview': 'large' as const },
  verification: {
    google: 'jpxAgd0ANUWBGqt8OQ0BnfswLXhUF4RbJ5mBgudpiDo',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="nl">
      <head>
        {/* Google Analytics 4 */}
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-7ZNES8VXQQ" />
        <script dangerouslySetInnerHTML={{ __html: `
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-7ZNES8VXQQ');
        ` }} />
        <meta name="geo.country" content="NL" />
        <meta name="geo.placename" content="Netherlands" />
        <meta name="geo.position" content="52.3676;4.9041" />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
          '@context': 'https://schema.org',
          '@graph': [
            { '@type': 'WebSite', name: 'Woonkenner.nl', url: 'https://woonkenner.nl', description: 'Onafhankelijk woonplatform voor hypotheken, woningwaarde, energie en huurprijzen' },
            { '@type': 'Organization', name: 'Woonkenner.nl', url: 'https://woonkenner.nl', contactPoint: { '@type': 'ContactPoint', contactType: 'Customer Service', availableLanguage: 'Dutch' } }
          ]
        }) }} />
      </head>
      <body className={`${inter.variable} antialiased bg-surface`}>
        <Navbar />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
