import type { Metadata } from 'next'
import Script from 'next/script'
import { Outfit, Space_Grotesk } from 'next/font/google'
import './globals.css'
import { ThemeProvider } from '@/components/providers/theme-provider'
import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'
import { Toaster } from 'sonner'
import { ConditionalFooter } from '@/components/layout/ConditionalFooter'

const outfit = Outfit({
  subsets: ['latin'],
  variable: '--font-outfit',
  weight: ['400', '500', '600', '700', '800', '900'],
  display: 'swap',
  preload: true,
})

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-space-grotesk',
  weight: ['400', '500', '600', '700'],
  display: 'swap',
  preload: true,
})

// Helper to safely get the base URL
function getBaseUrl(): string {
  const url = process.env.NEXT_PUBLIC_SITE_URL?.trim()
  if (!url) return 'https://stylofront.com'
  
  // Validate URL format
  try {
    const parsed = new URL(url)
    return parsed.origin
  } catch {
    // If invalid, return default
    return 'https://stylofront.com'
  }
}

export const metadata: Metadata = {
  metadataBase: new URL(getBaseUrl()),
  title: {
    default: 'StyloFront Theme Generator - Create Design Systems in Seconds',
    template: '%s | StyloFront Theme Generator',
  },
  description: 'Developer-first UI theme generator. Create production-ready design systems with visual controls. Export CSS, SCSS, SASS, or JSON. No sign-up required. Build themes for light and dark modes instantly.',
  keywords: [
    'theme generator',
    'design system generator',
    'CSS theme generator',
    'SCSS theme generator',
    'design tokens',
    'UI theme builder',
    'color palette generator',
    'typography generator',
    'design system builder',
    'theme creator',
    'CSS variables generator',
    'design system tool',
    'theme builder',
    'UI design system',
    'design tokens generator',
    'frontend theme generator',
    'web theme generator',
    'theme export tool',
    'design system creator',
    'theme configuration tool',
  ],
  authors: [{ name: 'hitesh odedara' }],
  creator: 'hitesh odedara',
  publisher: 'StyloFront',
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
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: process.env.NEXT_PUBLIC_SITE_URL || 'https://stylofront.com',
    siteName: 'StyloFront Theme Generator',
    title: 'StyloFront Theme Generator - Create Design Systems in Seconds',
    description: 'Developer-first UI theme generator. Create production-ready design systems with visual controls. Export CSS, SCSS, SASS, or JSON.',
    images: [
      {
        url: 'https://theme.stylofront.site/ogimage.png',
        width: 1200,
        height: 630,
        alt: 'StyloFront Theme Generator',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'StyloFront Theme Generator - Create Design Systems in Seconds',
    description: 'Developer-first UI theme generator. Create production-ready design systems with visual controls.',
    images: ['https://theme.stylofront.site/ogimage.png'],
    creator: '@stylofront',
  },
  icons: {
    icon: [
      { url: '/logo2.png', sizes: '32x32', type: 'image/png' },
      { url: '/logo2.png', sizes: '16x16', type: 'image/png' },
    ],
    apple: [
      { url: '/logo2.png', sizes: '180x180', type: 'image/png' },
    ],
  },
  manifest: '/manifest.json',
  alternates: {
    canonical: process.env.NEXT_PUBLIC_SITE_URL || 'https://stylofront.com',
  },
  verification: {
    google: process.env.GOOGLE_SITE_VERIFICATION,
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning className={`${outfit.variable} ${spaceGrotesk.variable}`}>
      <head>
        <link rel="icon" href="/logo2.png" type="image/png" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="manifest" href="/manifest.json" />
      </head>
      <body className={`${spaceGrotesk.className} antialiased`}>
        {/* Google Analytics */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-N9E3L7KHPN"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-N9E3L7KHPN');
          `}
        </Script>
        
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <div className="flex min-h-screen flex-col">
            <Header />
            <main className="flex-1">{children}</main>
            <ConditionalFooter />
          </div>
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  )
}

