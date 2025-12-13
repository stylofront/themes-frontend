"use client"

import { useState, useEffect } from "react"

interface WasmModule {
  generate_css: (theme_json: string) => string
  generate_scss: (theme_json: string) => string
  generate_sass: (theme_json: string) => string
  generate_json: (theme_json: string) => string
}

export function useWasm() {
  const [wasm, setWasm] = useState<WasmModule | null>(null)
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState<Error | null>(null)

  useEffect(() => {
    async function loadWasm() {
      try {
        if (typeof window === 'undefined') {
          throw new Error("WASM can only be loaded in browser")
        }

        // Try to load WASM module
        // Next.js 16 with Turbopack doesn't support absolute paths starting with '/' in dynamic imports
        // We construct the path dynamically using runtime values to prevent static analysis
        const protocol = window.location.protocol
        const host = window.location.host
        const wasmPath = `${protocol}//${host}/wasm/theme_generator_wasm.js`
        
        // Dynamic import with runtime-constructed URL to bypass Turbopack's static analysis
        // Using Function constructor prevents the bundler from statically analyzing the import path
        // eslint-disable-next-line @typescript-eslint/no-implied-eval
        const importFn = new Function('specifier', 'return import(specifier)')
        const wasmModule = await importFn(wasmPath)
        await wasmModule.default()
        
        setWasm(wasmModule as unknown as WasmModule)
        setIsLoading(false)
      } catch (wasmError) {
        console.warn('WASM loading failed, using JS fallback:', wasmError)
        // Use JS fallback
        setWasm({
          generate_css: generateCssJS,
          generate_scss: generateScssJS,
          generate_sass: generateSassJS,
          generate_json: generateJsonJS,
        })
        setIsLoading(false)
      }
    }

    loadWasm()
  }, [])

  const generateCss = (themeJson: string): string => {
    if (wasm) {
      return wasm.generate_css(themeJson)
    }
    return generateCssJS(themeJson)
  }

  const generateScss = (themeJson: string): string => {
    if (wasm) {
      return wasm.generate_scss(themeJson)
    }
    return generateScssJS(themeJson)
  }

  const generateSass = (themeJson: string): string => {
    if (wasm) {
      return wasm.generate_sass(themeJson)
    }
    return generateSassJS(themeJson)
  }

  const generateJson = (themeJson: string): string => {
    if (wasm) {
      return wasm.generate_json(themeJson)
    }
    return generateJsonJS(themeJson)
  }

  return {
    wasm,
    isLoading,
    error,
    generateCss,
    generateScss,
    generateSass,
    generateJson,
  }
}

// JS Fallback implementations
function generateCssJS(themeJson: string): string {
  try {
    const theme = JSON.parse(themeJson)
    // Simple JS implementation - for now just return a placeholder
    // In production, you'd implement the full CSS generation logic
    return `/* CSS generated from theme: ${theme.name || 'Untitled'} */\n:root { /* ... */ }`
  } catch {
    return '/* Invalid theme JSON */'
  }
}

function generateScssJS(themeJson: string): string {
  try {
    const theme = JSON.parse(themeJson)
    return `// SCSS generated from theme: ${theme.name || 'Untitled'}`
  } catch {
    return '// Invalid theme JSON'
  }
}

function generateSassJS(themeJson: string): string {
  try {
    const theme = JSON.parse(themeJson)
    return `// SASS generated from theme: ${theme.name || 'Untitled'}`
  } catch {
    return '// Invalid theme JSON'
  }
}

function generateJsonJS(themeJson: string): string {
  try {
    const theme = JSON.parse(themeJson)
    return JSON.stringify(theme, null, 2)
  } catch {
    return '{}'
  }
}

