import type { Metadata, Viewport } from 'next'
import './globals.css'
import { Providers } from '@/components/providers'
import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'

export const metadata: Metadata = {
  title: {
    default: 'ChinaGateway - Your Trusted Gateway to China',
    template: '%s | ChinaGateway',
  },
  description: 'Travel & Healthcare Made Simple. Plan your trip to China or access world-class medical care at a fraction of the cost.',
  keywords: ['China travel', 'medical tourism', 'visa-free transit', 'healthcare', 'Shanghai', 'Beijing'],
  authors: [{ name: 'ChinaGateway' }],
  creator: 'ChinaGateway',
  publisher: 'ChinaGateway',
  robots: 'index, follow',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://chinagateway.it.com',
    siteName: 'ChinaGateway',
    title: 'ChinaGateway - Your Trusted Gateway to China',
    description: 'Travel & Healthcare Made Simple. Plan your trip to China or access world-class medical care.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'ChinaGateway - Your Trusted Gateway to China',
    description: 'Travel & Healthcare Made Simple.',
  },
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  themeColor: '#667eea',
  viewportFit: 'cover',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="manifest" href="/manifest.json" />
        <link rel="apple-touch-icon" href="/icons/icon-192x192.png" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="apple-mobile-web-app-title" content="ChinaGateway" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="application-name" content="ChinaGateway" />
        <meta name="msapplication-TileColor" content="#667eea" />
        <meta name="msapplication-tap-highlight" content="no" />
      </head>
      <body className="antialiased bg-white text-slate-700">
        <Providers>
          <div className="relative flex flex-col min-h-screen">
            <Navbar />
            <main id="main-content" className="flex-1" role="main">
              {children}
            </main>
            <Footer />
          </div>
        </Providers>
      </body>
    </html>
  )
}
