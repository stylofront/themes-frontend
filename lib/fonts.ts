import { GoogleFont, GoogleFontsResponse } from './types'

const GOOGLE_FONTS_API = 'https://www.googleapis.com/webfonts/v1/webfonts'
const CACHE_KEY = 'themes-frontend-fonts-cache'
const CACHE_DURATION = 7 * 24 * 60 * 60 * 1000 // 7 days

interface CachedFonts {
  data: GoogleFont[]
  timestamp: number
}

export async function fetchGoogleFonts(): Promise<GoogleFont[]> {
  try {
    // Check cache first
    const cached = getCachedFonts()
    if (cached && Date.now() - cached.timestamp < CACHE_DURATION) {
      return cached.data
    }

    // Fetch from API
    const response = await fetch(`${GOOGLE_FONTS_API}?key=${process.env.NEXT_PUBLIC_GOOGLE_FONTS_API_KEY || ''}&sort=popularity`)
    if (!response.ok) {
      throw new Error('Failed to fetch fonts')
    }

    const data: GoogleFontsResponse = await response.json()
    
    // Cache the result
    cacheFonts(data.items)
    
    return data.items
  } catch (error) {
    console.error('Error fetching Google Fonts:', error)
    // Return cached data even if expired, or fallback to common fonts
    const cached = getCachedFonts()
    if (cached) {
      return cached.data
    }
    return getFallbackFonts()
  }
}

function getCachedFonts(): CachedFonts | null {
  try {
    const data = localStorage.getItem(CACHE_KEY)
    return data ? JSON.parse(data) : null
  } catch {
    return null
  }
}

function cacheFonts(fonts: GoogleFont[]): void {
  try {
    const cache: CachedFonts = {
      data: fonts,
      timestamp: Date.now()
    }
    localStorage.setItem(CACHE_KEY, JSON.stringify(cache))
  } catch (error) {
    console.error('Failed to cache fonts:', error)
  }
}

function getFallbackFonts(): GoogleFont[] {
  // Common fallback fonts
  return [
    {
      family: 'Inter',
      variants: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
      subsets: ['latin'],
      category: 'sans-serif',
      files: {}
    },
    {
      family: 'JetBrains Mono',
      variants: ['100', '200', '300', '400', '500', '600', '700', '800'],
      subsets: ['latin'],
      category: 'monospace',
      files: {}
    },
    {
      family: 'Roboto',
      variants: ['100', '300', '400', '500', '700', '900'],
      subsets: ['latin'],
      category: 'sans-serif',
      files: {}
    },
    {
      family: 'Open Sans',
      variants: ['300', '400', '500', '600', '700', '800'],
      subsets: ['latin'],
      category: 'sans-serif',
      files: {}
    }
  ]
}

export function generateFontImportUrl(fontFamily: string, weights: string[] = ['400', '500', '600', '700']): string {
  const family = fontFamily.replace(/\s+/g, '+')
  const weightStr = weights.join(';')
  return `https://fonts.googleapis.com/css2?family=${family}:wght@${weightStr}&display=swap`
}

export function searchFonts(fonts: GoogleFont[], query: string): GoogleFont[] {
  if (!query.trim()) return fonts
  const lowerQuery = query.toLowerCase()
  return fonts.filter(font => 
    font.family.toLowerCase().includes(lowerQuery) ||
    font.category.toLowerCase().includes(lowerQuery)
  )
}

