"use client"

import { useState, useMemo, useEffect, memo, useCallback } from "react"
import { Theme } from "@/lib/types"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList } from "@/components/ui/tabs"
import { ExpandableTabTrigger } from "@/components/ui/expandable-tab-trigger"
import { Monitor, Smartphone, Moon, Sun, Download, Type, MoveHorizontal, CornerUpRight, Box, Layers, Palette } from "lucide-react"
import { hexToHsl } from "@/lib/colors"

interface ThemePreviewProps {
  theme: Theme
  onExport: () => void
}

export const ThemePreview = memo(function ThemePreview({ theme, onExport }: ThemePreviewProps) {
  const [viewMode, setViewMode] = useState<'desktop' | 'mobile'>('desktop')
  const [darkMode, setDarkMode] = useState(false)

  const mode = darkMode ? 'dark' : 'light'
  const colors = useMemo(() => theme.colors[mode], [theme.colors, mode])

  // Memoized callbacks for button handlers
  const handleDesktopView = useCallback(() => setViewMode('desktop'), [])
  const handleMobileView = useCallback(() => setViewMode('mobile'), [])
  const handleLightMode = useCallback(() => setDarkMode(false), [])
  const handleDarkMode = useCallback(() => setDarkMode(true), [])

  // Load fonts - memoized to prevent unnecessary re-renders
  const fontUrls = useMemo(() => ({
    sans: theme.fonts.sans.importUrl,
    mono: theme.fonts.mono.importUrl,
  }), [theme.fonts.sans.importUrl, theme.fonts.mono.importUrl])

  useEffect(() => {
    if (fontUrls.sans) {
      // Check if link already exists
      const existingLink = document.querySelector(`link[href="${fontUrls.sans}"]`)
      if (!existingLink) {
        const link = document.createElement('link')
        link.rel = 'stylesheet'
        link.href = fontUrls.sans
        document.head.appendChild(link)
      }
    }
    if (fontUrls.mono) {
      // Check if link already exists
      const existingLink = document.querySelector(`link[href="${fontUrls.mono}"]`)
      if (!existingLink) {
        const link = document.createElement('link')
        link.rel = 'stylesheet'
        link.href = fontUrls.mono
        document.head.appendChild(link)
      }
    }
  }, [fontUrls])

  // Inject isolated CSS to prevent main theme from affecting preview
  useEffect(() => {
    const styleId = 'theme-preview-isolation'
    let styleElement = document.getElementById(styleId) as HTMLStyleElement | null

    if (!styleElement) {
      styleElement = document.createElement('style')
      styleElement.id = styleId
      document.head.appendChild(styleElement)
    }

    // Helper to convert color to HSL format (space-separated, no hsl() wrapper)
    // Handles both hex (#3b82f6) and HSL (hsl(221.2 83.2% 53.3%) or "221.2 83.2% 53.3%") formats
    const getHslValue = (color: string): string => {
      if (!color) return '0 0% 0%'
      
      // If it's already in HSL format without hsl() wrapper (space-separated)
      if (/^\d+\.?\d*\s+\d+\.?\d*%\s+\d+\.?\d*%$/.test(color.trim())) {
        return color.trim()
      }
      
      // If it's in hsl() format, extract the values
      if (color.startsWith('hsl(')) {
        return color.slice(4, -1).trim()
      }
      
      // If it's a hex color, convert to HSL
      if (color.startsWith('#')) {
        return hexToHsl(color)
      }
      
      // Default fallback
      return color
    }

    // Inject CSS that overrides Tailwind variables ONLY within preview container
    // Tailwind v4 uses base variables (--card, --primary) that get mapped to --color-* in @theme
    // We override both the base variables and the color variables for maximum compatibility
    const css = `
      /* Isolate preview theme - override Tailwind CSS variables */
      [data-preview-theme] {
        /* Override base variables (used by @theme directive) - these should be HSL values without hsl() wrapper */
        --card: ${getHslValue(colors.surface)} !important;
        --card-foreground: ${getHslValue(colors.text)} !important;
        --primary: ${getHslValue(colors.primary)} !important;
        --primary-foreground: ${getHslValue(colors.primaryFg)} !important;
        --secondary: ${getHslValue(colors.secondary)} !important;
        --secondary-foreground: ${getHslValue(colors.secondaryFg)} !important;
        --background: ${getHslValue(colors.background)} !important;
        --foreground: ${getHslValue(colors.text)} !important;
        --muted: ${getHslValue(colors.surface)} !important;
        --muted-foreground: ${getHslValue(colors.mutedText)} !important;
        --border: ${getHslValue(colors.border)} !important;
        --input: ${getHslValue(colors.border)} !important;
        --ring: ${getHslValue(colors.primary)} !important;
        --destructive: ${getHslValue(colors.error)} !important;
        --destructive-foreground: ${getHslValue(colors.text)} !important;
        --accent: ${getHslValue(colors.secondary)} !important;
        --accent-foreground: ${getHslValue(colors.secondaryFg)} !important;
        
        /* Also override the --color-* variables directly (these use hsl() wrapper) */
        --color-card: hsl(var(--card)) !important;
        --color-card-foreground: hsl(var(--card-foreground)) !important;
        --color-primary: hsl(var(--primary)) !important;
        --color-primary-foreground: hsl(var(--primary-foreground)) !important;
        --color-secondary: hsl(var(--secondary)) !important;
        --color-secondary-foreground: hsl(var(--secondary-foreground)) !important;
        --color-background: hsl(var(--background)) !important;
        --color-foreground: hsl(var(--foreground)) !important;
        --color-muted: hsl(var(--muted)) !important;
        --color-muted-foreground: hsl(var(--muted-foreground)) !important;
        --color-border: hsl(var(--border)) !important;
        --color-input: hsl(var(--input)) !important;
        --color-ring: hsl(var(--ring)) !important;
        --color-destructive: hsl(var(--destructive)) !important;
        --color-destructive-foreground: hsl(var(--destructive-foreground)) !important;
        --color-accent: hsl(var(--accent)) !important;
        --color-accent-foreground: hsl(var(--accent-foreground)) !important;
      }
    `

    styleElement.textContent = css

    return () => {
      const element = document.getElementById(styleId)
      if (element) {
        element.remove()
      }
    }
  }, [colors])

  // Apply theme variables dynamically
  const themeStyle = useMemo(() => {
    const style: React.CSSProperties & Record<string, string> = {
      // Colors - these will be overridden by injected CSS
      '--color-primary': colors.primary,
      '--color-primary-fg': colors.primaryFg,
      '--color-secondary': colors.secondary,
      '--color-secondary-fg': colors.secondaryFg,
      '--color-background': colors.background,
      '--color-surface': colors.surface,
      '--color-text': colors.text,
      '--color-muted-text': colors.mutedText,
      '--color-border': colors.border,
      '--color-success': colors.success,
      '--color-warning': colors.warning,
      '--color-error': colors.error,
      // Fonts
      '--font-sans': theme.fonts.sans.name,
      '--font-mono': theme.fonts.mono.name,
    }
    
    // Spacing tokens
    theme.baseTokens.spacing.forEach(token => {
      style[`--space-${token.name}`] = token.value
    })
    
    // Radius tokens
    theme.baseTokens.radius.forEach(token => {
      style[`--radius-${token.name}`] = token.value
    })
    
    // Typography tokens
    theme.baseTokens.typography.fontSizes.forEach(token => {
      style[`--text-${token.name}`] = token.value
    })
    theme.baseTokens.typography.lineHeights.forEach(token => {
      style[`--leading-${token.name}`] = token.value
    })
    theme.baseTokens.typography.fontWeights.forEach(token => {
      style[`--font-${token.name}`] = token.value
    })
    
    // Shadow tokens
    theme.shadows.default.forEach(token => {
      style[`--shadow-${token.name}`] = token.value
    })
    
    return style
  }, [colors, theme.fonts, theme.baseTokens, theme.shadows])

  // Helper functions to get token values - memoized for performance
  const tokenMaps = useMemo(() => {
    const spacingMap = new Map(theme.baseTokens.spacing.map(s => [s.name, s.value]))
    const radiusMap = new Map(theme.baseTokens.radius.map(r => [r.name, r.value]))
    const fontSizeMap = new Map(theme.baseTokens.typography.fontSizes.map(f => [f.name, f.value]))
    const lineHeightMap = new Map(theme.baseTokens.typography.lineHeights.map(l => [l.name, l.value]))
    const fontWeightMap = new Map(theme.baseTokens.typography.fontWeights.map(w => [w.name, w.value]))
    const shadowMap = new Map(theme.shadows.default.map(s => [s.name, s.value]))
    
    return {
      spacing: spacingMap,
      radius: radiusMap,
      fontSize: fontSizeMap,
      lineHeight: lineHeightMap,
      fontWeight: fontWeightMap,
      shadow: shadowMap,
    }
  }, [theme.baseTokens, theme.shadows.default])

  const getSpacing = useCallback((name: string) => tokenMaps.spacing.get(name) || '0px', [tokenMaps.spacing])
  const getRadius = useCallback((name: string) => tokenMaps.radius.get(name) || '0px', [tokenMaps.radius])
  const getFontSize = useCallback((name: string) => tokenMaps.fontSize.get(name) || '16px', [tokenMaps.fontSize])
  const getLineHeight = useCallback((name: string) => tokenMaps.lineHeight.get(name) || '1.5', [tokenMaps.lineHeight])
  const getFontWeight = useCallback((name: string) => tokenMaps.fontWeight.get(name) || '400', [tokenMaps.fontWeight])
  const getShadow = useCallback((name: string) => tokenMaps.shadow.get(name) || 'none', [tokenMaps.shadow])

  return (
    <div className="h-full">
      {/* Header with fixed styles - not affected by theme */}
      <div className="sticky top-0 z-10 bg-background/95 backdrop-blur-md border-b shadow-sm p-4 flex items-center justify-between">
        <div className="space-y-1">
          <h2 className="text-xl font-bold font-heading bg-linear-to-r from-foreground to-foreground/70 bg-clip-text text-transparent">Live Preview</h2>
          <p className="text-sm text-muted-foreground">See your theme changes in real-time</p>
        </div>
        <div className="flex items-center gap-2">
          <Button 
            onClick={onExport}
            className="shadow-md hover:shadow-lg transition-shadow"
            size="sm"
          >
            <Download className="mr-2 h-4 w-4" />
            Export
          </Button>
          <div className="flex items-center gap-1 bg-muted rounded-lg p-1">
            <Button
              variant={viewMode === 'desktop' ? 'default' : 'ghost'}
              size="sm"
              onClick={handleDesktopView}
              className="h-8"
            >
              <Monitor className="h-4 w-4" />
            </Button>
            <Button
              variant={viewMode === 'mobile' ? 'default' : 'ghost'}
              size="sm"
              onClick={handleMobileView}
              className="h-8"
            >
              <Smartphone className="h-4 w-4" />
            </Button>
          </div>
          <div className="flex items-center gap-1 bg-muted rounded-lg p-1">
            <Button
              variant={!darkMode ? 'default' : 'ghost'}
              size="sm"
              onClick={handleLightMode}
              className="h-8"
            >
              <Sun className="h-4 w-4" />
            </Button>
            <Button
              variant={darkMode ? 'default' : 'ghost'}
              size="sm"
              onClick={handleDarkMode}
              className="h-8"
            >
              <Moon className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>

      {/* Preview content with theme styles */}
      <div className={`p-6 overflow-y-auto max-h-[76vh] ${viewMode === 'mobile' ? 'max-w-md mx-auto' : 'mx-auto max-w-7xl'}`}>
        {/* Tabs outside theme style scope to use project theme */}
        <Tabs defaultValue="typography" className="w-full">
          <TabsList className="flex w-full gap-2 flex-wrap mb-6 bg-muted/50 backdrop-blur-sm border border-border">
            <ExpandableTabTrigger value="typography" icon={Type} label="Typography" />
            <ExpandableTabTrigger value="spacing" icon={MoveHorizontal} label="Spacing" />
            <ExpandableTabTrigger value="radius" icon={CornerUpRight} label="Radius" />
            <ExpandableTabTrigger value="components" icon={Box} label="Components" />
            <ExpandableTabTrigger value="shadows" icon={Layers} label="Shadows" />
            <ExpandableTabTrigger value="colors" icon={Palette} label="Colors" />
          </TabsList>

          {/* Content with theme styles - isolated from main theme */}
          <div 
            data-preview-theme
            className="space-y-6" 
            style={{
              ...themeStyle, 
              backgroundColor: `var(--color-background)`,
              color: `var(--color-text)`,
              fontFamily: `${theme.fonts.sans.name}, system-ui, sans-serif`,
            }}>
            {/* Typography Section */}
            <TabsContent value="typography" className="mt-0">
          <Card style={{ 
            backgroundColor: `var(--color-surface)`,
            borderColor: `var(--color-border)`,
            borderRadius: getRadius('lg'),
            padding: getSpacing('lg'),
          }}>
            <CardHeader>
              <CardTitle style={{ 
                fontSize: getFontSize('lg'),
                fontWeight: getFontWeight('semibold'),
                lineHeight: getLineHeight('tight'),
              }}>Typography</CardTitle>
              <CardDescription style={{ color: `var(--color-muted-text)` }}>
                Test all typography tokens including font sizes, weights, and line heights
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                {theme.baseTokens.typography.fontSizes.map((size) => (
                  <p 
                    key={size.name}
                    style={{ 
                      fontSize: size.value,
                      lineHeight: getLineHeight('normal'),
                      fontFamily: `${theme.fonts.sans.name}, system-ui, sans-serif`,
                      color: `var(--color-text)`,
                    }}
                  >
                    Font Size {size.name}: {size.value} - The quick brown fox jumps over the lazy dog
                  </p>
                ))}
              </div>
              <div className="space-y-2">
                {theme.baseTokens.typography.fontWeights.map((weight) => (
                  <p 
                    key={weight.name}
                    style={{ 
                      fontSize: getFontSize('md'),
                      fontWeight: weight.value,
                      fontFamily: `${theme.fonts.sans.name}, system-ui, sans-serif`,
                      color: `var(--color-text)`,
                    }}
                  >
                    Font Weight {weight.name}: {weight.value} - The quick brown fox jumps over the lazy dog
                  </p>
                ))}
              </div>
              <div className="p-4 rounded" style={{ 
                backgroundColor: `var(--color-background)`,
                border: `1px solid var(--color-border)`,
                borderRadius: getRadius('md'),
                fontFamily: `${theme.fonts.mono.name}, monospace`,
                fontSize: getFontSize('sm'),
                color: `var(--color-text)`,
              }}>
                Monospace Font: {theme.fonts.mono.name} - const example = "Hello World";
              </div>
            </CardContent>
          </Card>
            </TabsContent>

            {/* Spacing Section */}
            <TabsContent value="spacing" className="mt-0">
              <Card style={{ 
            backgroundColor: `var(--color-surface)`,
            borderColor: `var(--color-border)`,
            borderRadius: getRadius('lg'),
            padding: getSpacing('lg'),
          }}>
            <CardHeader>
              <CardTitle>Spacing Tokens</CardTitle>
              <CardDescription style={{ color: `var(--color-muted-text)` }}>
                Visual representation of spacing values
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-3">
              {theme.baseTokens.spacing.map((spacing) => (
                <div key={spacing.name} className="flex items-center gap-4">
                  <div className="w-20 text-sm font-medium">{spacing.name}</div>
                  <div className="flex-1 h-8 rounded" style={{ 
                    backgroundColor: `var(--color-primary)`,
                    width: spacing.value,
                    opacity: 0.7,
                    borderRadius: getRadius('sm'),
                  }} />
                  <div className="text-xs" style={{ color: `var(--color-muted-text)` }}>{spacing.value}</div>
                </div>
              ))}
            </CardContent>
              </Card>
            </TabsContent>

            {/* Radius Section */}
            <TabsContent value="radius" className="mt-0">
              <Card style={{ 
                backgroundColor: `var(--color-surface)`,
                borderColor: `var(--color-border)`,
                borderRadius: getRadius('lg'),
                padding: getSpacing('lg'),
              }}>
            <CardHeader>
              <CardTitle>Border Radius Tokens</CardTitle>
              <CardDescription style={{ color: `var(--color-muted-text)` }}>
                Different border radius values applied to squares
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-4">
                {theme.baseTokens.radius.map((radius) => (
                  <div key={radius.name} className="text-center">
                    <div 
                      className="w-20 h-20 mx-auto mb-2"
                      style={{ 
                        backgroundColor: `var(--color-primary)`,
                        borderRadius: radius.value,
                      }}
                    />
                    <div className="text-xs font-medium">{radius.name}</div>
                    <div className="text-xs" style={{ color: `var(--color-muted-text)` }}>{radius.value}</div>
                  </div>
                ))}
              </div>
            </CardContent>
              </Card>
            </TabsContent>

            {/* Components Section */}
            <TabsContent value="components" className="mt-0 space-y-6">
          {/* Sample Cards */}
          <div className="grid gap-4 md:grid-cols-2">
            <Card style={{ 
              backgroundColor: `var(--color-surface)`,
              borderColor: `var(--color-border)`,
              borderRadius: getRadius('md'),
              boxShadow: getShadow('sm'),
              padding: getSpacing('lg'),
            }}>
              <CardHeader>
                <CardTitle>Card with Small Shadow</CardTitle>
                <CardDescription style={{ color: `var(--color-muted-text)` }}>
                  This card uses spacing, radius, and shadow tokens
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p style={{ fontSize: getFontSize('sm') }}>Card content with custom spacing and typography</p>
              </CardContent>
            </Card>

            <Card style={{ 
              backgroundColor: `var(--color-surface)`,
              borderColor: `var(--color-border)`,
                  borderRadius: getRadius('lg'),
                  boxShadow: getShadow('md'),
                  padding: getSpacing('xl'),
            }}>
              <CardHeader>
                <CardTitle>Card with Medium Shadow</CardTitle>
                <CardDescription style={{ color: `var(--color-muted-text)` }}>
                      Different radius and shadow values
                </CardDescription>
              </CardHeader>
              <CardContent>
                    <p style={{ fontSize: getFontSize('sm') }}>Card content with larger spacing</p>
              </CardContent>
            </Card>
          </div>

          {/* Buttons */}
              <Card style={{ 
                backgroundColor: `var(--color-surface)`,
                borderColor: `var(--color-border)`,
                borderRadius: getRadius('lg'),
                padding: getSpacing('lg'),
              }}>
                <CardHeader>
                  <CardTitle>Buttons</CardTitle>
                  <CardDescription style={{ color: `var(--color-muted-text)` }}>
                    Different button styles with theme colors
                  </CardDescription>
                </CardHeader>
                <CardContent>
          <div className="flex flex-wrap gap-4">
            <Button style={{ 
              backgroundColor: `var(--color-primary)`,
              color: `var(--color-primary-fg)`,
                      borderRadius: getRadius('md'),
                      padding: `${getSpacing('sm')} ${getSpacing('lg')}`,
                      fontFamily: `${theme.fonts.sans.name}, system-ui, sans-serif`,
            }}>
              Primary Button
            </Button>
            <Button variant="outline" style={{ 
              borderColor: `var(--color-border)`,
                      borderRadius: getRadius('md'),
                      padding: `${getSpacing('sm')} ${getSpacing('lg')}`,
            }}>
              Outline Button
            </Button>
            <Button variant="secondary" style={{ 
              backgroundColor: `var(--color-secondary)`,
              color: `var(--color-secondary-fg)`,
                      borderRadius: getRadius('md'),
                      padding: `${getSpacing('sm')} ${getSpacing('lg')}`,
            }}>
              Secondary Button
            </Button>
          </div>
                </CardContent>
              </Card>

              {/* Form Elements */}
              <Card style={{ 
                backgroundColor: `var(--color-surface)`,
                borderColor: `var(--color-border)`,
                borderRadius: getRadius('lg'),
                padding: getSpacing('lg'),
              }}>
                <CardHeader>
                  <CardTitle>Form Elements</CardTitle>
                  <CardDescription style={{ color: `var(--color-muted-text)` }}>
                    Input fields with different radius values
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-3">
                  <Input 
                    placeholder="Sample input field"
                    style={{ 
                      borderColor: `var(--color-border)`,
                      borderRadius: getRadius('md'),
                      padding: `${getSpacing('sm')} ${getSpacing('md')}`,
                      fontFamily: `${theme.fonts.sans.name}, system-ui, sans-serif`,
                    }}
                  />
                  <Input 
                    placeholder="Input with different radius"
                    style={{ 
                      borderColor: `var(--color-border)`,
                      borderRadius: getRadius('lg'),
                      padding: `${getSpacing('sm')} ${getSpacing('md')}`,
                      fontFamily: `${theme.fonts.sans.name}, system-ui, sans-serif`,
                    }}
                  />
                </CardContent>
              </Card>
            </TabsContent>

            {/* Shadows Section */}
            <TabsContent value="shadows" className="mt-0 space-y-6">
              {/* Status Colors & Shadows */}
              <Card style={{ 
                backgroundColor: `var(--color-surface)`,
                borderColor: `var(--color-border)`,
                borderRadius: getRadius('lg'),
                padding: getSpacing('lg'),
              }}>
                <CardHeader>
                  <CardTitle>Status Colors & Default Shadows</CardTitle>
                  <CardDescription style={{ color: `var(--color-muted-text)` }}>
                    Status badges and shadow examples
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
          <div className="flex flex-wrap gap-4">
            <Badge style={{ 
              backgroundColor: `var(--color-success)`,
              color: `var(--color-text)`,
                      borderRadius: getRadius('md'),
                      padding: `${getSpacing('xs')} ${getSpacing('sm')}`,
            }}>
              Success
            </Badge>
            <Badge style={{ 
              backgroundColor: `var(--color-warning)`,
              color: `var(--color-text)`,
                      borderRadius: getRadius('md'),
                      padding: `${getSpacing('xs')} ${getSpacing('sm')}`,
            }}>
              Warning
            </Badge>
            <Badge style={{ 
              backgroundColor: `var(--color-error)`,
              color: `var(--color-text)`,
                      borderRadius: getRadius('md'),
                      padding: `${getSpacing('xs')} ${getSpacing('sm')}`,
            }}>
              Error
            </Badge>
          </div>

                  {/* Default Shadows */}
                  <div className="space-y-3">
                    <h4 className="text-sm font-semibold">Default Shadows</h4>
                    <div className="grid gap-4 md:grid-cols-2">
                      {theme.shadows.default.map((shadow) => (
                        <Card 
                          key={shadow.name}
              style={{ 
                            boxShadow: shadow.value,
                            backgroundColor: `var(--color-background)`,
                borderColor: `var(--color-border)`,
                            borderRadius: getRadius('md'),
                          }}
                        >
                          <CardContent className="p-4">
                            <p className="text-sm font-medium">{shadow.name}</p>
                            <p className="text-xs mt-1" style={{ color: `var(--color-muted-text)` }}>{shadow.value}</p>
                          </CardContent>
                        </Card>
                ))}
              </div>
            </div>
                </CardContent>
              </Card>

          {/* Custom Shadows */}
          {theme.shadows.custom.length > 0 && (
                <Card style={{ 
                  backgroundColor: `var(--color-surface)`,
                  borderColor: `var(--color-border)`,
                  borderRadius: getRadius('lg'),
                  padding: getSpacing('lg'),
                }}>
                  <CardHeader>
                    <CardTitle>Custom Shadows</CardTitle>
                    <CardDescription style={{ color: `var(--color-muted-text)` }}>
                      Your custom shadow tokens
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
              <div className="grid gap-4 md:grid-cols-2">
                {theme.shadows.custom.map((shadow, index) => (
                        <Card 
                          key={index} 
                          style={{ 
                            boxShadow: shadow.value,
                            backgroundColor: `var(--color-background)`,
                            borderColor: `var(--color-border)`,
                            borderRadius: getRadius('md'),
                          }}
                        >
                    <CardContent className="p-4">
                      <p className="text-sm font-medium">{shadow.name}</p>
                            <p className="text-xs mt-1" style={{ color: `var(--color-muted-text)` }}>{shadow.value}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
                  </CardContent>
                </Card>
              )}
            </TabsContent>

            {/* Colors Section */}
            <TabsContent value="colors" className="mt-0 space-y-6">
              {/* Custom Colors */}
              {colors.custom.length > 0 ? (
                <Card style={{ 
                  backgroundColor: `var(--color-surface)`,
                  borderColor: `var(--color-border)`,
                  borderRadius: getRadius('lg'),
                  padding: getSpacing('lg'),
                }}>
                  <CardHeader>
                    <CardTitle>Custom Colors</CardTitle>
                    <CardDescription style={{ color: `var(--color-muted-text)` }}>
                      Your custom color tokens
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-3">
                      {colors.custom.map((color, index) => (
                        <div key={index} className="text-center">
                          <div
                            className="h-20 w-20 rounded border-2 mb-2"
                            style={{ 
                              backgroundColor: color.value,
                              borderColor: `var(--color-border)`,
                              borderRadius: getRadius('md'),
                            }}
                            title={color.name}
                          />
                          <div className="text-xs font-medium">{color.name}</div>
                        </div>
                      ))}
            </div>
                  </CardContent>
                </Card>
              ) : (
                <Card style={{ 
                  backgroundColor: `var(--color-surface)`,
                  borderColor: `var(--color-border)`,
                  borderRadius: getRadius('lg'),
                  padding: getSpacing('lg'),
                }}>
                  <CardContent className="text-center py-8">
                    <p className="text-muted-foreground">No custom colors added yet</p>
                  </CardContent>
                </Card>
          )}
            </TabsContent>
        </div>
        </Tabs>
      </div>
    </div>
  )
})

