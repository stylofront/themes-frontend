"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"
import { 
  Palette, 
  Type, 
  Ruler, 
  Circle, 
  Box, 
  Layers,
  Zap,
  Download,
  Moon,
  Sun,
  Code,
  FileCode,
  FileJson,
  Sparkles,
  Copy,
  CheckCircle2,
  TrendingUp,
  Star,
  Wind,
  Play,
  Check
} from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"
import { useState } from "react"
import { toast } from "sonner"

const features = [
  {
    icon: Zap,
    title: "Real-Time Preview",
    description: "See your theme changes instantly as you customize colors, spacing, and typography.",
    color: "text-yellow-500",
    bgColor: "bg-yellow-500/10",
    borderColor: "border-yellow-500/20",
    stat: "Instant",
  },
  {
    icon: Download,
    title: "5 Export Formats",
    description: "Download as CSS, SCSS, SASS, Tailwind, or JSON. Ready to use in any project.",
    color: "text-blue-500",
    bgColor: "bg-blue-500/10",
    borderColor: "border-blue-500/20",
    stat: "5 Formats",
  },
  {
    icon: Moon,
    title: "Light & Dark Mode",
    description: "Design themes for both light and dark modes with separate color palettes.",
    color: "text-purple-500",
    bgColor: "bg-purple-500/10",
    borderColor: "border-purple-500/20",
    stat: "Dual Mode",
  },
  {
    icon: Palette,
    title: "Custom Tokens",
    description: "Add custom colors, shadows, spacing, and typography tokens to match your needs.",
    color: "text-pink-500",
    bgColor: "bg-pink-500/10",
    borderColor: "border-pink-500/20",
    stat: "Unlimited",
  },
]

const tokenCategories = [
  {
    icon: Palette,
    title: "Colors",
    description: "Primary, secondary, background, surface, text, and custom colors",
    count: "12+ tokens",
    gradient: "from-red-500/20 to-orange-500/20",
  },
  {
    icon: Type,
    title: "Typography",
    description: "Font families, sizes, weights, line heights, and letter spacing",
    count: "20+ tokens",
    gradient: "from-blue-500/20 to-cyan-500/20",
  },
  {
    icon: Ruler,
    title: "Spacing",
    description: "Consistent spacing scale from xs to 2xl",
    count: "10 tokens",
    gradient: "from-green-500/20 to-emerald-500/20",
  },
  {
    icon: Circle,
    title: "Border Radius",
    description: "Rounded corners for buttons, cards, and UI elements",
    count: "6 tokens",
    gradient: "from-purple-500/20 to-pink-500/20",
  },
  {
    icon: Box,
    title: "Shadows",
    description: "Elevation and depth with multiple shadow presets",
    count: "8 tokens",
    gradient: "from-indigo-500/20 to-violet-500/20",
  },
  {
    icon: Layers,
    title: "Custom Tokens",
    description: "Add your own custom design tokens",
    count: "Unlimited",
    gradient: "from-amber-500/20 to-yellow-500/20",
  },
]

const exportFormats = [
  {
    icon: Wind,
    title: "Tailwind",
    extension: ".css",
    color: "from-cyan-500 to-blue-500",
    code: `/* =====================================================
   StyloFront Theme: Midnight Blue
   Tailwind v4 Global Theme
   ===================================================== */

@import "tailwindcss";

/* -----------------------------
   Design Tokens
----------------------------- */
:root {
  --sf-primary: #3b82f6;
  --sf-primary-fg: #ffffff;
  --sf-secondary: #8b5cf6;
  --sf-secondary-fg: #ffffff;
  --sf-bg: #ffffff;
  --sf-surface: #f8fafc;
  --sf-text: #1f2937;
  --sf-muted-text: #64748b;
  --sf-border: #e2e8f0;
  --sf-success: #22c55e;
  --sf-warning: #f59e0b;
  --sf-error: #ef4444;

  /* Spacing */
  --sf-space-xs: 4px;
  --sf-space-sm: 8px;
  --sf-space-md: 12px;
  --sf-space-lg: 16px;
  --sf-space-xl: 24px;

  /* Radius */
  --sf-radius-sm: 4px;
  --sf-radius-md: 8px;
  --sf-radius-lg: 12px;

  /* Fonts */
  --sf-font-sans: Inter, system-ui, sans-serif;
  --sf-font-mono: "JetBrains Mono", monospace;

  /* Shadows */
  --sf-shadow-sm: 0 2px 4px rgba(0,0,0,0.08);
  --sf-shadow-md: 0 4px 8px rgba(0,0,0,0.12);
}

/* -----------------------------
   Dark Theme
----------------------------- */
[data-theme="dark"] {
  --sf-primary: #60a5fa;
  --sf-primary-fg: #0f172a;
  --sf-secondary: #818cf8;
  --sf-bg: #0f172a;
  --sf-surface: #1e293b;
  --sf-text: #f1f5f9;
  --sf-muted-text: #94a3b8;
  --sf-border: #334155;
}

/* -----------------------------
   Tailwind Theme Mapping
----------------------------- */
@theme {
  --color-primary: var(--sf-primary);
  --color-primary-fg: var(--sf-primary-fg);
  --color-secondary: var(--sf-secondary);
  --color-background: var(--sf-bg);
  --color-surface: var(--sf-surface);
  --color-text: var(--sf-text);
  --color-muted: var(--sf-muted-text);
  --color-border: var(--sf-border);
  --radius-sm: var(--sf-radius-sm);
  --radius-md: var(--sf-radius-md);
  --radius-lg: var(--sf-radius-lg);
  --font-sans: var(--sf-font-sans);
  --font-mono: var(--sf-font-mono);
  --shadow-sm: var(--sf-shadow-sm);
  --shadow-md: var(--sf-shadow-md);
}`,
  },
  {
    icon: Code,
    title: "CSS",
    extension: ".css",
    color: "from-blue-500 to-indigo-500",
    code: `/* =====================================================
   StyloFront Theme Export
   Theme: Midnight Blue
   ===================================================== */

:root {
  /* Colors */
  --sf-primary: #3b82f6;
  --sf-primary-fg: #ffffff;
  --sf-secondary: #8b5cf6;
  --sf-secondary-fg: #ffffff;
  --sf-bg: #ffffff;
  --sf-surface: #f8fafc;
  --sf-text: #1f2937;
  --sf-muted-text: #64748b;
  --sf-border: #e2e8f0;
  --sf-success: #22c55e;
  --sf-warning: #f59e0b;
  --sf-error: #ef4444;

  /* Spacing */
  --sf-space-xs: 4px;
  --sf-space-sm: 8px;
  --sf-space-md: 12px;
  --sf-space-lg: 16px;
  --sf-space-xl: 24px;

  /* Radius */
  --sf-radius-sm: 4px;
  --sf-radius-md: 8px;
  --sf-radius-lg: 12px;

  /* Shadows */
  --sf-shadow-sm: 0 2px 4px rgba(0,0,0,0.08);
  --sf-shadow-md: 0 4px 8px rgba(0,0,0,0.12);
}

[data-theme="dark"] {
  --sf-primary: #60a5fa;
  --sf-primary-fg: #0f172a;
  --sf-secondary: #818cf8;
  --sf-bg: #0f172a;
  --sf-surface: #1e293b;
  --sf-text: #f1f5f9;
  --sf-muted-text: #94a3b8;
  --sf-border: #334155;
}`,
  },
  {
    icon: FileCode,
    title: "SCSS",
    extension: ".scss",
    color: "from-pink-500 to-rose-500",
    code: `// =====================================================
// StyloFront Theme Export
// Theme: Midnight Blue
// =====================================================

// Theme SCSS Variables
$sf-theme: (
  primary: #3b82f6,
  primary-fg: #ffffff,
  secondary: #8b5cf6,
  secondary-fg: #ffffff,
  background: #ffffff,
  surface: #f8fafc,
  text: #1f2937,
  muted-text: #64748b,
  border: #e2e8f0,
  success: #22c55e,
  warning: #f59e0b,
  error: #ef4444,
);

// Spacing Tokens
$sf-spacing: (
  xs: 4px,
  sm: 8px,
  md: 12px,
  lg: 16px,
  xl: 24px,
);

// Radius Tokens
$sf-radius: (
  sm: 4px,
  md: 8px,
  lg: 12px,
);

// Shadow Tokens
$sf-shadows: (
  sm: 0 2px 4px rgba(0,0,0,0.08),
  md: 0 4px 8px rgba(0,0,0,0.12),
);

// Dark Theme
$sf-theme-dark: (
  primary: #60a5fa,
  primary-fg: #0f172a,
  background: #0f172a,
  surface: #1e293b,
  text: #f1f5f9,
);`,
  },
  {
    icon: FileJson,
    title: "JSON",
    extension: ".json",
    color: "from-yellow-500 to-orange-500",
    code: `{
  "name": "Midnight Blue",
  "colors": {
    "light": {
      "primary": "#3b82f6",
      "primaryFg": "#ffffff",
      "secondary": "#8b5cf6",
      "secondaryFg": "#ffffff",
      "background": "#ffffff",
      "surface": "#f8fafc",
      "text": "#1f2937",
      "mutedText": "#64748b",
      "border": "#e2e8f0",
      "success": "#22c55e",
      "warning": "#f59e0b",
      "error": "#ef4444",
      "custom": []
    },
    "dark": {
      "primary": "#60a5fa",
      "primaryFg": "#0f172a",
      "background": "#0f172a",
      "surface": "#1e293b",
      "text": "#f1f5f9",
      "mutedText": "#94a3b8",
      "border": "#334155"
    }
  },
  "baseTokens": {
    "spacing": [
      { "name": "xs", "value": "4px" },
      { "name": "sm", "value": "8px" },
      { "name": "md", "value": "12px" },
      { "name": "lg", "value": "16px" }
    ],
    "radius": [
      { "name": "sm", "value": "4px" },
      { "name": "md", "value": "8px" },
      { "name": "lg", "value": "12px" }
    ]
  }
}`,
  },
]

export function Showcase() {
  const [darkMode, setDarkMode] = useState(false)
  const [hoveredFeature, setHoveredFeature] = useState<number | null>(null)
  const [activeFormat, setActiveFormat] = useState("tailwind")
  const [copiedFormat, setCopiedFormat] = useState<string | null>(null)

  const handleCopy = (code: string, format: string) => {
    navigator.clipboard.writeText(code)
    setCopiedFormat(format)
    toast.success('Copied to clipboard!')
    setTimeout(() => setCopiedFormat(null), 2000)
  }

  return (
    <section id="showcase" className="py-16 sm:py-20 md:py-28 lg:py-32 bg-background relative overflow-hidden border-t">
      {/* Enhanced Background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/3 rounded-full blur-3xl" />
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Enhanced Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-4xl text-center mb-12 sm:mb-16"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mb-6 inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 backdrop-blur-sm px-5 py-2.5 text-sm shadow-sm"
          >
            <Sparkles className="h-4 w-4 text-primary animate-pulse" />
            <span className="font-medium text-primary">Everything You Need</span>
          </motion.div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold font-heading tracking-tight mb-6 leading-tight">
            Powerful Features,
            <br />
            <span className="bg-linear-to-r from-primary via-primary/80 to-primary/60 bg-clip-text text-transparent">
              Beautiful Results
            </span>
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-muted-foreground leading-relaxed max-w-2xl mx-auto">
            Create complete design systems with visual controls, real-time preview, and export in multiple formats.
          </p>
        </motion.div>

        {/* Asymmetric Layout: Features on left, Demo on right */}
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-start mb-10 sm:mb-14">
          {/* Left: Enhanced Features Grid */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6 }}
            className="space-y-4"
          >
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-xl sm:text-2xl font-bold">Key Features</h3>
              <Badge variant="secondary" className="text-xs">
                <Star className="h-3 w-3 mr-1" />
                Popular
              </Badge>
            </div>
            <div className="space-y-3 sm:space-y-4">
              {features.map((feature, idx) => {
                const Icon = feature.icon
                const isHovered = hoveredFeature === idx
                return (
                  <motion.div
                    key={feature.title}
                    onHoverStart={() => setHoveredFeature(idx)}
                    onHoverEnd={() => setHoveredFeature(null)}
                    whileHover={{ scale: 1.02, x: 6 }}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: idx * 0.1 }}
                    className="relative"
                  >
                    <Card className={`border-2 h-full transition-all duration-300 cursor-pointer group ${
                      isHovered 
                        ? 'shadow-xl border-primary/50 bg-primary/5' 
                        : 'border-border hover:border-primary/30'
                    }`}>
                      <CardHeader className="pb-3">
                        <div className="flex items-start gap-4">
                          <motion.div
                            animate={isHovered ? { rotate: [0, -10, 10, -10, 0] } : {}}
                            transition={{ duration: 0.5 }}
                            className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-xl ${feature.bgColor} ${feature.borderColor} border-2 transition-all duration-300 ${
                              isHovered ? 'scale-110 shadow-lg' : ''
                            }`}
                          >
                            <Icon className={`h-6 w-6 ${feature.color}`} />
                          </motion.div>
                          <div className="flex-1 min-w-0">
                            <div className="flex items-center justify-between gap-2 mb-2">
                              <CardTitle className="text-base sm:text-lg">{feature.title}</CardTitle>
                              <Badge variant="outline" className="text-xs shrink-0 hidden sm:inline-flex">
                                {feature.stat}
                              </Badge>
                            </div>
                            <CardDescription className="text-sm sm:text-base leading-relaxed">
                              {feature.description}
                            </CardDescription>
                          </div>
                        </div>
                      </CardHeader>
                    </Card>
                  </motion.div>
                )
              })}
            </div>
          </motion.div>

          {/* Right: Enhanced Interactive Demo */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6 }}
            className="space-y-4"
          >
            {/* Live Preview Section */}
            <div>
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-xl sm:text-2xl font-bold">Live Preview</h3>
                <Badge variant="default" className="text-xs">
                  <TrendingUp className="h-3 w-3 mr-1" />
                  Interactive
                </Badge>
              </div>
              
              {/* Redesigned Live Preview Card */}
              <motion.div
                whileHover={{ scale: 1.01 }}
                transition={{ duration: 0.2 }}
              >
              <Card className="border-2 overflow-hidden shadow-2xl hover:shadow-3xl transition-all duration-300 border-primary/20 bg-card/50 backdrop-blur-sm">
                {/* Card Header with Gradient */}
                <div className="relative bg-linear-to-r from-primary/10 via-primary/5 to-transparent border-b border-primary/20">
                  <div className="absolute inset-0 bg-grid-pattern opacity-5" />
                  <CardHeader className="relative pb-4">
                    <div className="flex items-center justify-between flex-wrap gap-3">
                      <div className="flex items-center gap-3">
                        <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/20 border border-primary/30">
                          <Play className="h-5 w-5 text-primary" />
                        </div>
                        <div>
                          <CardTitle className="text-base sm:text-lg">Theme Preview</CardTitle>
                          <CardDescription className="text-xs sm:text-sm">Real-time theme visualization</CardDescription>
                        </div>
                      </div>
                      <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                        <Button
                          variant="outline"
                          size="sm"
                          onClick={() => setDarkMode(!darkMode)}
                          className="gap-2 hover:bg-primary hover:text-primary-foreground transition-all border-primary/30 shadow-sm"
                        >
                          <AnimatePresence mode="wait">
                            {darkMode ? (
                              <motion.div
                                key="sun"
                                initial={{ rotate: -90, opacity: 0 }}
                                animate={{ rotate: 0, opacity: 1 }}
                                exit={{ rotate: 90, opacity: 0 }}
                                transition={{ duration: 0.2 }}
                              >
                                <Sun className="h-4 w-4" />
                              </motion.div>
                            ) : (
                              <motion.div
                                key="moon"
                                initial={{ rotate: 90, opacity: 0 }}
                                animate={{ rotate: 0, opacity: 1 }}
                                exit={{ rotate: -90, opacity: 0 }}
                                transition={{ duration: 0.2 }}
                              >
                                <Moon className="h-4 w-4" />
                              </motion.div>
                            )}
                          </AnimatePresence>
                          <span className="hidden sm:inline">{darkMode ? "Light" : "Dark"} Mode</span>
                        </Button>
                      </motion.div>
                    </div>
                  </CardHeader>
                </div>

                {/* Enhanced Preview Content */}
                <CardContent className="p-2.5 sm:p-5">
                  <motion.div
                    key={darkMode ? 'dark' : 'light'}
                    initial={{ opacity: 0, scale: 0.96 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.4, ease: "easeOut" }}
                    className={`rounded-xl p-6 sm:p-8 transition-all duration-500 relative overflow-hidden ${
                      darkMode 
                        ? 'bg-linear-to-br from-slate-900 via-slate-800 to-slate-900 text-white shadow-2xl' 
                        : 'bg-linear-to-br from-slate-50 via-white to-slate-50 text-slate-900 shadow-lg'
                    }`}
                  >
                    {/* Animated background pattern */}
                    <div className={`absolute inset-0 opacity-5 ${
                      darkMode ? 'bg-[radial-gradient(circle_at_1px_1px,white_1px,transparent_0)]' : 'bg-[radial-gradient(circle_at_1px_1px,black_1px,transparent_0)]'
                    }`} style={{ backgroundSize: '20px 20px' }} />
                    
                    <div className="relative space-y-4">
                      {/* Hero Section */}
                      <motion.div
                        animate={{ scale: [1, 1.01, 1] }}
                        transition={{ duration: 3, repeat: Infinity }}
                        className={`h-14 rounded-xl ${darkMode ? 'bg-blue-600' : 'bg-blue-500'} shadow-lg flex items-center justify-center`}
                      >
                        <span className="text-sm font-semibold text-white">Primary Action</span>
                      </motion.div>
                      
                      {/* Content Blocks */}
                      <div className="space-y-3">
                        <motion.div
                          initial={{ width: 0 }}
                          animate={{ width: "100%" }}
                          transition={{ duration: 0.6, delay: 0.2 }}
                          className={`h-10 rounded-lg ${darkMode ? 'bg-slate-700/80' : 'bg-slate-200/80'} shadow-sm`}
                        />
                        <motion.div
                          initial={{ width: 0 }}
                          animate={{ width: "85%" }}
                          transition={{ duration: 0.6, delay: 0.3 }}
                          className={`h-10 rounded-lg ${darkMode ? 'bg-slate-700/60' : 'bg-slate-200/60'} shadow-sm`}
                        />
                        <motion.div
                          initial={{ width: 0 }}
                          animate={{ width: "70%" }}
                          transition={{ duration: 0.6, delay: 0.4 }}
                          className={`h-10 rounded-lg ${darkMode ? 'bg-slate-700/40' : 'bg-slate-200/40'} shadow-sm`}
                        />
                      </div>

                      {/* Interactive Buttons */}
                      <div className="flex gap-3 pt-2">
                        <motion.div
                          whileHover={{ scale: 1.05, y: -2 }}
                          whileTap={{ scale: 0.95 }}
                          className={`h-12 flex-1 rounded-lg ${darkMode ? 'bg-blue-600' : 'bg-blue-500'} shadow-md cursor-pointer flex items-center justify-center`}
                        >
                          <span className="text-xs font-medium text-white">Button</span>
                        </motion.div>
                        <motion.div
                          whileHover={{ scale: 1.05, y: -2 }}
                          whileTap={{ scale: 0.95 }}
                          className={`h-12 flex-1 rounded-lg border-2 ${darkMode ? 'border-slate-600 bg-slate-800/50' : 'border-slate-300 bg-white/50'} cursor-pointer flex items-center justify-center`}
                        >
                          <span className={`text-xs font-medium ${darkMode ? 'text-slate-300' : 'text-slate-700'}`}>Outline</span>
                        </motion.div>
                      </div>

                      {/* Color Palette Preview */}
                      <div className="grid grid-cols-4 gap-2 pt-2">
                        {[
                          darkMode ? '#60a5fa' : '#3b82f6',
                          darkMode ? '#818cf8' : '#8b5cf6',
                          darkMode ? '#34d399' : '#10b981',
                          darkMode ? '#f472b6' : '#ec4899',
                        ].map((color, idx) => (
                          <motion.div
                            key={idx}
                            whileHover={{ scale: 1.1, y: -2 }}
                            className="h-12 rounded-lg shadow-md cursor-pointer"
                            style={{ backgroundColor: color }}
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.5 + idx * 0.1 }}
                          />
                        ))}
                      </div>
                    </div>
                  </motion.div>
                </CardContent>
              </Card>
            </motion.div>
            </div>

          </motion.div>
        </div>
            {/* Export Formats Section - Separate */}
            <div className="mt-8">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-xl sm:text-2xl font-bold">Export Formats</h3>
                <Badge variant="default" className="text-xs">
                  <Download className="h-3 w-3 mr-1" />
                  5 Formats
                </Badge>
              </div>
              
              {/* Redesigned Export Formats Preview */}
              <motion.div
                whileHover={{ scale: 1.01 }}
                transition={{ duration: 0.2 }}
              >
              <Card className="border-2 shadow-2xl hover:shadow-3xl transition-all duration-300 border-primary/20 bg-card/50 backdrop-blur-sm overflow-hidden">
                {/* Enhanced Header */}
                <div className="relative bg-linear-to-r from-primary/10 via-primary/5 to-transparent border-b border-primary/20">
                  <div className="absolute inset-0 bg-grid-pattern opacity-5" />
                  <CardHeader className="relative">
                    <div className="flex items-center justify-between flex-wrap gap-2">
                      <div className="flex items-center gap-3">
                        <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/20 border border-primary/30">
                          <Download className="h-5 w-5 text-primary" />
                        </div>
                        <div>
                          <CardTitle className="text-base sm:text-lg">Export Formats</CardTitle>
                          <CardDescription className="text-xs sm:text-sm">Copy or download in your preferred format</CardDescription>
                        </div>
                      </div>
                      <Badge variant="secondary" className="text-xs bg-primary/10 border-primary/20">
                        <CheckCircle2 className="h-3 w-3 mr-1" />
                        5 Formats
                      </Badge>
                    </div>
                  </CardHeader>
                </div>

                <CardContent className="p-4 sm:p-6">
                  <Tabs value={activeFormat} onValueChange={setActiveFormat} className="w-full">
                    {/* Enhanced Tabs List */}
                    <TabsList className="grid w-full grid-cols-4 h-auto mb-6 bg-muted/30 backdrop-blur-sm border border-border/50 p-1 gap-1">
                      {exportFormats.map((format) => {
                        const Icon = format.icon
                        const formatValue = format.title.toLowerCase()
                        const isActive = activeFormat === formatValue
                        return (
                          <TabsTrigger
                            key={format.title}
                            value={formatValue}
                            className={`font-mono text-xs py-2.5 px-3 transition-all duration-200 relative overflow-hidden ${
                              isActive 
                                ? 'bg-primary text-primary-foreground shadow-lg' 
                                : 'hover:bg-muted/50'
                            }`}
                          >
                            {isActive && (
                              <motion.div
                                layoutId="activeTab"
                                className={`absolute inset-0 bg-linear-to-br ${format.color} opacity-90`}
                                transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                              />
                            )}
                            <div className="relative z-10 flex items-center justify-center gap-1.5">
                              <Icon className="h-3.5 w-3.5" />
                              <span className="hidden sm:inline">{format.title}</span>
                            </div>
                          </TabsTrigger>
                        )
                      })}
                    </TabsList>
                    
                    {/* Enhanced Code Display */}
                    {exportFormats.map((format) => {
                      const Icon = format.icon
                      const formatValue = format.title.toLowerCase()
                      const isActive = activeFormat === formatValue
                      const isCopied = copiedFormat === formatValue
                      
                      return (
                        <TabsContent key={format.title} value={formatValue} className="mt-0">
                          <AnimatePresence mode="wait">
                            {isActive && (
                              <motion.div
                                key={formatValue}
                                initial={{ opacity: 0, y: 10, scale: 0.98 }}
                                animate={{ opacity: 1, y: 0, scale: 1 }}
                                exit={{ opacity: 0, y: -10, scale: 0.98 }}
                                transition={{ duration: 0.3 }}
                                className="relative"
                              >
                                {/* Code Header */}
                                <div className="flex items-center justify-between mb-3 p-3 rounded-lg bg-muted/30 border border-border/50">
                                  <div className="flex items-center gap-2.5">
                                    <div className={`flex h-8 w-8 items-center justify-center rounded-lg bg-linear-to-br ${format.color} shadow-sm`}>
                                      <Icon className="h-4 w-4 text-white" />
                                    </div>
                                    <div>
                                      <div className="flex items-center gap-2">
                                        <span className="text-sm font-semibold">{format.title}</span>
                                        <Badge variant="outline" className="text-xs font-mono px-2 py-0.5">
                                          {format.extension}
                                        </Badge>
                                      </div>
                                      <p className="text-xs text-muted-foreground mt-0.5">Ready to use</p>
                                    </div>
                                  </div>
                                  <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                                    <Button
                                      variant="outline"
                                      size="sm"
                                      onClick={() => handleCopy(format.code, formatValue)}
                                      className={`gap-2 h-9 text-xs transition-all ${
                                        isCopied 
                                          ? 'bg-green-500/10 border-green-500/30 text-green-600 dark:text-green-400' 
                                          : 'hover:bg-primary hover:text-primary-foreground'
                                      }`}
                                    >
                                      <AnimatePresence mode="wait">
                                        {isCopied ? (
                                          <motion.div
                                            key="check"
                                            initial={{ scale: 0, rotate: -180 }}
                                            animate={{ scale: 1, rotate: 0 }}
                                            exit={{ scale: 0, rotate: 180 }}
                                            transition={{ duration: 0.2 }}
                                          >
                                            <Check className="h-3.5 w-3.5" />
                                          </motion.div>
                                        ) : (
                                          <motion.div
                                            key="copy"
                                            initial={{ scale: 0 }}
                                            animate={{ scale: 1 }}
                                            exit={{ scale: 0 }}
                                            transition={{ duration: 0.2 }}
                                          >
                                            <Copy className="h-3.5 w-3.5" />
                                          </motion.div>
                                        )}
                                      </AnimatePresence>
                                      <span className="hidden sm:inline">{isCopied ? 'Copied!' : 'Copy'}</span>
                                    </Button>
                                  </motion.div>
                                </div>

                                {/* Enhanced Code Block */}
                                <div className="relative group">
                                  <div className="absolute -inset-0.5 bg-linear-to-r from-primary/20 via-primary/10 to-primary/20 rounded-lg blur opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                                  <pre className="relative bg-slate-950/90 dark:bg-slate-900/90 p-4 sm:p-5 rounded-lg overflow-x-auto text-xs sm:text-sm font-mono border border-slate-800/50 shadow-xl max-h-64 scrollbar-thin scrollbar-thumb-slate-700 scrollbar-track-transparent">
                                    <code className="text-slate-100">
                                      {format.code.split('\n').map((line, idx) => (
                                        <div key={idx} className="flex items-start gap-3">
                                          <span className="text-slate-500 select-none shrink-0 w-6 text-right">{idx + 1}</span>
                                          <span className="flex-1">{line || '\u00A0'}</span>
                                        </div>
                                      ))}
                                    </code>
                                  </pre>
                                </div>
                              </motion.div>
                            )}
                          </AnimatePresence>
                        </TabsContent>
                      )
                    })}
                  </Tabs>
                </CardContent>
              </Card>
            </motion.div>
            </div>

        {/* Enhanced Token Categories Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6 }}
          className="mt-10 sm:mt-14 pt-8 sm:pt-10 border-t"
        >
          <div className="text-center mb-10 sm:mb-12">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="mb-4 inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-2"
            >
              <CheckCircle2 className="h-4 w-4 text-primary" />
              <span className="text-sm font-medium text-primary">Complete Design System</span>
            </motion.div>
            <h3 className="text-2xl sm:text-3xl font-bold mb-4">Every Theme Includes</h3>
            <p className="text-muted-foreground text-sm sm:text-base">Comprehensive design tokens ready to use</p>
          </div>
          
          <div className="grid gap-4 sm:gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {tokenCategories.map((category, idx) => {
              const Icon = category.icon
              return (
                <motion.div
                  key={category.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: idx * 0.1 }}
                  whileHover={{ scale: 1.03, y: -4 }}
                  className="relative"
                >
                  <Card className="border-2 h-full flex flex-col hover:shadow-xl transition-all duration-300 overflow-hidden group border-primary/10 hover:border-primary/30">
                    <div className={`absolute inset-0 bg-linear-to-br ${category.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />
                    <CardHeader className="pb-3 relative z-10">
                      <motion.div
                        whileHover={{ rotate: [0, -5, 5, -5, 0] }}
                        transition={{ duration: 0.5 }}
                        className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 group-hover:bg-primary/20 transition-colors border-2 border-primary/20"
                      >
                        <Icon className="h-6 w-6 text-primary" />
                      </motion.div>
                      <div className="flex items-center justify-between gap-2">
                        <CardTitle className="text-base sm:text-lg">{category.title}</CardTitle>
                        <Badge variant="secondary" className="text-xs shrink-0">
                          {category.count}
                        </Badge>
                      </div>
                    </CardHeader>
                    <CardContent className="flex-1 pt-0 relative z-10">
                      <CardDescription className="text-sm sm:text-base leading-relaxed">
                        {category.description}
                      </CardDescription>
                    </CardContent>
                  </Card>
                </motion.div>
              )
            })}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
