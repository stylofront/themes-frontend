import type { Metadata } from 'next'
import { Hero } from "@/components/landing/Hero"
import { WhatIs } from "@/components/landing/WhatIs"
import { Problems } from "@/components/landing/Problems"
import { HowItWorks } from "@/components/landing/HowItWorks"
import { TokensOverview } from "@/components/landing/TokensOverview"
import { DarkMode } from "@/components/landing/DarkMode"
import { ExportFormats } from "@/components/landing/ExportFormats"
import { ExampleOutput } from "@/components/landing/ExampleOutput"
import { WhoIsFor } from "@/components/landing/WhoIsFor"
import { CTA } from "@/components/landing/CTA"
import { StructuredData } from "@/components/landing/StructuredData"

export const metadata: Metadata = {
  title: 'Developer-First UI Theme Generator - Create Design Systems Instantly',
  description: 'Create production-ready design systems in seconds. Visual theme builder with real-time preview. Export CSS, SCSS, SASS, or JSON. Light and dark mode support. No sign-up required.',
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
    'free theme generator',
    'online theme builder',
    'design system maker',
    'CSS custom properties generator',
    'SCSS variables generator',
  ],
  openGraph: {
    title: 'StyloFront Theme Generator - Create Design Systems in Seconds',
    description: 'Developer-first UI theme generator. Create production-ready design systems with visual controls. Export CSS, SCSS, SASS, or JSON.',
    url: '/',
    siteName: 'StyloFront Theme Generator',
    images: [
      {
        url: '/ogimage.png',
        width: 1200,
        height: 630,
        alt: 'StyloFront Theme Generator',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'StyloFront Theme Generator - Create Design Systems in Seconds',
    description: 'Developer-first UI theme generator. Create production-ready design systems with visual controls.',
    images: ['/ogimage.png'],
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
      <WhatIs />
      <Problems />
      <HowItWorks />
      <TokensOverview />
      <DarkMode />
      <ExportFormats />
      <ExampleOutput />
      <WhoIsFor />
      <CTA />
    </>
  )
}
