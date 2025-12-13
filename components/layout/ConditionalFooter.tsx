"use client"

import { usePathname } from 'next/navigation'
import { Footer } from './Footer'

export function ConditionalFooter() {
  const pathname = usePathname()
  
  // Only show footer on landing page (home page)
  if (pathname === '/') {
    return <Footer />
  }
  
  return null
}
