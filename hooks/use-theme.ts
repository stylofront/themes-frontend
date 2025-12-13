"use client"

import { useState, useEffect, useCallback } from "react"
import { Theme } from "@/lib/types"
import { defaultTheme } from "@/lib/default-theme"
import { saveThemeDraft, getLastTheme } from "@/lib/storage"
import { useDebounce } from "./use-debounce"

export function useTheme() {
  // Always start with defaultTheme to avoid hydration mismatch
  // localStorage is only available on the client, so we load saved theme after mount
  const [theme, setTheme] = useState<Theme>(defaultTheme)
  const [isMounted, setIsMounted] = useState(false)

  // Load saved theme from localStorage after mount (client-side only)
  useEffect(() => {
    setIsMounted(true)
    const lastTheme = getLastTheme()
    if (lastTheme) {
      setTheme(lastTheme)
    }
  }, [])

  // Debounce theme changes for auto-save
  const debouncedTheme = useDebounce(theme, 300)

  useEffect(() => {
    // Auto-save theme to localStorage (only after mount to avoid hydration issues)
    if (isMounted && debouncedTheme) {
      saveThemeDraft(debouncedTheme)
    }
  }, [debouncedTheme, isMounted])

  const updateTheme = useCallback((updates: Partial<Theme>) => {
    setTheme(prev => ({ ...prev, ...updates }))
  }, [])

  const updateColor = useCallback((
    mode: 'light' | 'dark',
    colorKey: keyof Theme['colors']['light'],
    value: string
  ) => {
    setTheme(prev => ({
      ...prev,
      colors: {
        ...prev.colors,
        [mode]: {
          ...prev.colors[mode],
          [colorKey]: value,
        },
      },
    }))
  }, [])

  const addCustomColor = useCallback((mode: 'light' | 'dark', name: string, value: string) => {
    setTheme(prev => ({
      ...prev,
      colors: {
        ...prev.colors,
        [mode]: {
          ...prev.colors[mode],
          custom: [...prev.colors[mode].custom, { name, value }],
        },
      },
    }))
  }, [])

  const removeCustomColor = useCallback((mode: 'light' | 'dark', index: number) => {
    setTheme(prev => ({
      ...prev,
      colors: {
        ...prev.colors,
        [mode]: {
          ...prev.colors[mode],
          custom: prev.colors[mode].custom.filter((_, i) => i !== index),
        },
      },
    }))
  }, [])

  const addCustomShadow = useCallback((name: string, value: string) => {
    setTheme(prev => ({
      ...prev,
      shadows: {
        ...prev.shadows,
        custom: [...prev.shadows.custom, { name, value }],
      },
    }))
  }, [])

  const removeCustomShadow = useCallback((index: number) => {
    setTheme(prev => ({
      ...prev,
      shadows: {
        ...prev.shadows,
        custom: prev.shadows.custom.filter((_, i) => i !== index),
      },
    }))
  }, [])

  const addCustomSpacing = useCallback((name: string, value: string) => {
    setTheme(prev => ({
      ...prev,
      baseTokens: {
        ...prev.baseTokens,
        spacing: [...prev.baseTokens.spacing, { name, value }],
      },
    }))
  }, [])

  const removeCustomSpacing = useCallback((index: number) => {
    setTheme(prev => ({
      ...prev,
      baseTokens: {
        ...prev.baseTokens,
        spacing: prev.baseTokens.spacing.filter((_, i) => i !== index),
      },
    }))
  }, [])

  const addCustomRadius = useCallback((name: string, value: string) => {
    setTheme(prev => ({
      ...prev,
      baseTokens: {
        ...prev.baseTokens,
        radius: [...prev.baseTokens.radius, { name, value }],
      },
    }))
  }, [])

  const removeCustomRadius = useCallback((index: number) => {
    setTheme(prev => ({
      ...prev,
      baseTokens: {
        ...prev.baseTokens,
        radius: prev.baseTokens.radius.filter((_, i) => i !== index),
      },
    }))
  }, [])

  const addCustomFontSize = useCallback((name: string, value: string) => {
    setTheme(prev => ({
      ...prev,
      baseTokens: {
        ...prev.baseTokens,
        typography: {
          ...prev.baseTokens.typography,
          fontSizes: [...prev.baseTokens.typography.fontSizes, { name, value }],
        },
      },
    }))
  }, [])

  const removeCustomFontSize = useCallback((index: number) => {
    setTheme(prev => ({
      ...prev,
      baseTokens: {
        ...prev.baseTokens,
        typography: {
          ...prev.baseTokens.typography,
          fontSizes: prev.baseTokens.typography.fontSizes.filter((_, i) => i !== index),
        },
      },
    }))
  }, [])

  const updateFont = useCallback((type: 'sans' | 'mono', font: { name: string; importUrl: string; weights?: string[] }) => {
    setTheme(prev => ({
      ...prev,
      fonts: {
        ...prev.fonts,
        [type]: font,
      },
    }))
  }, [])

  return {
    theme,
    setTheme,
    updateTheme,
    updateColor,
    addCustomColor,
    removeCustomColor,
    addCustomShadow,
    removeCustomShadow,
    addCustomSpacing,
    removeCustomSpacing,
    addCustomRadius,
    removeCustomRadius,
    addCustomFontSize,
    removeCustomFontSize,
    updateFont,
    isMounted, // Expose mounted state for components that need to wait for hydration
  }
}

