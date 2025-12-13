"use client"

import { useState, useEffect } from "react"
import { fetchGoogleFonts, searchFonts, generateFontImportUrl } from "@/lib/fonts"
import { GoogleFont } from "@/lib/types"

export function useGoogleFonts() {
  const [fonts, setFonts] = useState<GoogleFont[]>([])
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState<Error | null>(null)
  const [searchQuery, setSearchQuery] = useState("")

  useEffect(() => {
    async function loadFonts() {
      try {
        setIsLoading(true)
        const fetchedFonts = await fetchGoogleFonts()
        setFonts(fetchedFonts)
        setError(null)
      } catch (err) {
        setError(err instanceof Error ? err : new Error('Failed to load fonts'))
        console.error('Error loading fonts:', err)
      } finally {
        setIsLoading(false)
      }
    }

    loadFonts()
  }, [])

  const filteredFonts = searchQuery
    ? searchFonts(fonts, searchQuery)
    : fonts

  return {
    fonts: filteredFonts,
    allFonts: fonts,
    isLoading,
    error,
    searchQuery,
    setSearchQuery,
    generateFontImportUrl,
  }
}

