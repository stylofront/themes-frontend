import type { Metadata } from 'next'
import { Hero } from "@/components/landing/Hero"
import { Showcase } from "@/components/landing/Showcase"
import { HowItWorks } from "@/components/landing/HowItWorks"
import { CTA } from "@/components/landing/CTA"
import { StructuredData } from "@/components/landing/StructuredData"

export const metadata: Metadata = {
  title: 'Developer-First UI Theme Generator - Create Design Systems Instantly',
  description: 'Create production-ready design systems in seconds. Visual theme builder with real-time preview. Export to Tailwind CSS, CSS, SCSS, SASS, or JSON. Light and dark mode support. No sign-up required.',
  keywords: [
    'theme generator',
    'design system generator',
    'Tailwind CSS theme generator',
    'Tailwind theme generator',
    'Tailwind CSS v4 theme',
    'Tailwind @theme generator',
    'Tailwind design system',
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
    'free theme generator',
    'online theme builder',
    'design system maker',
    'CSS custom properties generator',
    'SCSS variables generator',
    'Tailwind config generator',
    'Tailwind CSS variables',
    'Tailwind theme builder',
    'Tailwind design tokens',
    'Tailwind color generator',
    'Tailwind CSS theme creator',
  ],
  openGraph: {
    title: 'StyloFront Theme Generator - Create Design Systems in Seconds',
    description: 'Developer-first UI theme generator. Create production-ready design systems with visual controls. Export to Tailwind CSS, CSS, SCSS, SASS, or JSON. Zero code required.',
    url: '/',
    siteName: 'StyloFront Theme Generator',
    images: [
      {
        url: 'https://theme.stylofront.com/ogimage.png',
        width: 1200,
        height: 630,
        alt: 'StyloFront Theme Generator - Tailwind CSS Theme Builder',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'StyloFront Theme Generator - Create Design Systems in Seconds',
    description: 'Developer-first UI theme generator. Create production-ready design systems with visual controls. Export to Tailwind CSS, CSS, SCSS, SASS, or JSON.',
    images: ['https://theme.stylofront.com/ogimage.png'],
  },
  alternates: {
    canonical: '/',
  },
}

export default function Home() {
  return (
    <>
      <StructuredData />
      <Hero />
      <Showcase />
      {/* <HowItWorks /> */}
      <CTA />
    </>
  )
}
