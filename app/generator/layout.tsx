import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Theme Generator - Create Design Systems',
  description: 'Visual theme builder with real-time preview. Create production-ready design systems. Export CSS, SCSS, SASS, or JSON.',
  robots: {
    index: true,
    follow: true,
  },
}

export default function GeneratorLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
