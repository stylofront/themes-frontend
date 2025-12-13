const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  name: 'StyloFront Theme Generator',
  applicationCategory: 'DeveloperApplication',
  operatingSystem: 'Web',
  offers: {
    '@type': 'Offer',
    price: '0',
    priceCurrency: 'USD',
  },
  description: 'Developer-first UI theme generator. Create production-ready design systems with visual controls. Export CSS, SCSS, SASS, or JSON.',
  featureList: [
    'Visual theme builder',
    'Real-time preview',
    'Multiple export formats',
    'Light and dark mode support',
    'Design tokens generation',
  ],
  aggregateRating: {
    '@type': 'AggregateRating',
    ratingValue: '5',
    ratingCount: '1',
  },
}

export function StructuredData() {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  )
}
