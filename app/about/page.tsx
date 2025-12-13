import type { Metadata } from 'next'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { ArrowLeft } from 'lucide-react'

export const metadata: Metadata = {
  title: 'About - StyloFront Theme Generator',
  description: 'Learn about StyloFront Theme Generator and our mission to help developers create better design systems.',
  keywords: ['about stylofront', 'theme generator about', 'design system tool', 'developer tools'],
  openGraph: {
    title: 'About - StyloFront Theme Generator',
    description: 'Learn about StyloFront Theme Generator and our mission to help developers create better design systems.',
  },
}

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-16">
        <Link href="/">
          <Button variant="ghost" className="mb-8">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Home
          </Button>
        </Link>

        <div className="prose prose-slate dark:prose-invert max-w-none">
          <h1 className="text-4xl font-bold font-heading mb-4">About StyloFront</h1>
          
          <p className="text-lg text-muted-foreground mb-8">
            StyloFront Theme Generator is a developer-first tool designed to help you create 
            production-ready design systems and themes in seconds, not hours.
          </p>

          <h2 className="text-2xl font-bold font-heading mt-12 mb-4">Our Mission</h2>
          <p className="mb-4">
            We believe that creating design systems shouldn't be a time-consuming, repetitive task. 
            Developers should be able to generate professional themes with visual controls and export 
            them in the format that works best for their stack.
          </p>

          <h2 className="text-2xl font-bold font-heading mt-12 mb-4">What We Offer</h2>
          <ul className="list-disc pl-6 space-y-2 mb-4">
            <li>Visual theme builder with real-time preview</li>
            <li>Complete design token system (colors, typography, spacing, shadows, etc.)</li>
            <li>Light and dark mode support</li>
            <li>Multiple export formats (CSS, SCSS, SASS, JSON)</li>
            <li>No sign-up required - start creating instantly</li>
            <li>Local storage - your work is saved in your browser</li>
          </ul>

          <h2 className="text-2xl font-bold font-heading mt-12 mb-4">Built for Developers</h2>
          <p className="mb-4">
            StyloFront is built with modern web technologies including Next.js, React, and WebAssembly 
            for fast, reliable theme generation. We prioritize developer experience and code quality.
          </p>

          <h2 className="text-2xl font-bold font-heading mt-12 mb-4">Contact</h2>
          <p className="mb-4">
            Built by hitesh odedara. For questions, feedback, or support, please reach out through 
            our GitHub repository or contact channels.
          </p>

          <div className="mt-12">
            <Link href="/generator">
              <Button size="lg">
                Try Theme Generator
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
