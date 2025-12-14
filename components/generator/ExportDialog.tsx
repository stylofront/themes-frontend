"use client"

import { useState, useEffect, useCallback, memo, useMemo } from "react"
import { Theme } from "@/lib/types"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { useWasm } from "@/hooks/use-wasm"
import { Copy, Download } from "lucide-react"
import { toast } from "sonner"

interface ExportDialogProps {
  open: boolean
  onOpenChange: (open: boolean) => void
  theme: Theme
}

export const ExportDialog = memo(function ExportDialog({ open, onOpenChange, theme }: ExportDialogProps) {
  const [format, setFormat] = useState<'css' | 'scss' | 'sass' | 'json' | 'tailwind'>('css')
  const [code, setCode] = useState('')
  const { generateCss, generateScss, generateSass, generateJson, generateTailwind } = useWasm()

  // Regenerate code whenever format or theme changes
  const generateCode = useCallback(() => {
    const themeJson = JSON.stringify(theme)
    let generated = ''
    switch (format) {
      case 'css':
        generated = generateCss(themeJson)
        break
      case 'scss':
        generated = generateScss(themeJson)
        break
      case 'sass':
        generated = generateSass(themeJson)
        break
      case 'json':
        generated = generateJson(themeJson)
        break
      case 'tailwind':
        generated = generateTailwind(themeJson)
        break
      default:
        generated = ''
    }
    setCode(generated)
  }, [format, theme, generateCss, generateScss, generateSass, generateJson, generateTailwind])

  // Generate code when dialog opens or format/theme changes
  useEffect(() => {
    if (open) {
      // Small delay to ensure WASM is ready
      const timer = setTimeout(() => {
        generateCode()
      }, 100)
      return () => clearTimeout(timer)
    }
  }, [open, generateCode])
  const extension = format === 'json' ? 'json' : format === 'tailwind' ? 'css' : format

  const handleCopy = useCallback(() => {
    navigator.clipboard.writeText(code)
    toast.success('Copied to clipboard!')
  }, [code])

  const handleDownload = useCallback(() => {
    const blob = new Blob([code], { type: 'text/plain' })
    const url = URL.createObjectURL(blob)
    const a = document.createElement('a')
    a.href = url
    a.download = `${theme.name.toLowerCase().replace(/\s+/g, '-')}.${extension}`
    document.body.appendChild(a)
    a.click()
    document.body.removeChild(a)
    URL.revokeObjectURL(url)
    toast.success('Downloaded!')
  }, [code, theme.name, extension])

  const lineCount = useMemo(() => code.split('\n').length, [code])

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-6xl w-full h-full sm:h-[90vh] p-0 gap-0 overflow-hidden flex flex-col m-0 sm:m-4 rounded-none sm:rounded-lg">
        {/* Enhanced Header */}
        <div className="shrink-0 bg-linear-to-br from-primary/10 via-background to-secondary/10 p-4 sm:p-6 border-b border-border/50">
          <DialogHeader className="space-y-2 sm:space-y-3">
            <DialogTitle className="text-2xl sm:text-3xl font-bold font-heading bg-linear-to-r from-foreground via-foreground/90 to-foreground/70 bg-clip-text text-transparent">
              Export Your Theme
            </DialogTitle>
            <DialogDescription className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
              Choose your preferred format and export your theme code. Copy to clipboard or download as a file.
          </DialogDescription>
        </DialogHeader>
        </div>

        {/* Main Content Area */}
        <div className="flex-1 min-h-0 overflow-hidden flex flex-col p-4 sm:p-6">
          <Tabs value={format} onValueChange={(v) => setFormat(v as typeof format)} className="flex flex-col h-full min-h-0">
            {/* Improved Tabs */}
            <TabsList className="shrink-0 grid w-full grid-cols-5 bg-muted/30 backdrop-blur-sm h-9 sm:h-10 mb-3 sm:mb-4 rounded-md border border-border/50 gap-1 p-1">
              <TabsTrigger 
                value="css" 
                className="text-[10px] sm:text-xs font-medium font-mono data-[state=active]:bg-background data-[state=active]:text-foreground data-[state=active]:shadow-sm transition-all rounded-md px-1 sm:px-2"
              >
                CSS
              </TabsTrigger>
              <TabsTrigger 
                value="scss" 
                className="text-[10px] sm:text-xs font-medium font-mono data-[state=active]:bg-background data-[state=active]:text-foreground data-[state=active]:shadow-sm transition-all rounded-md px-1 sm:px-2"
              >
                SCSS
              </TabsTrigger>
              <TabsTrigger 
                value="sass" 
                className="text-[10px] sm:text-xs font-medium font-mono data-[state=active]:bg-background data-[state=active]:text-foreground data-[state=active]:shadow-sm transition-all rounded-md px-1 sm:px-2"
              >
                SASS
              </TabsTrigger>
              <TabsTrigger 
                value="tailwind" 
                className="text-[10px] sm:text-xs font-medium font-mono data-[state=active]:bg-background data-[state=active]:text-foreground data-[state=active]:shadow-sm transition-all rounded-md px-1 sm:px-2"
              >
                Tailwind
              </TabsTrigger>
              <TabsTrigger 
                value="json" 
                className="text-[10px] sm:text-xs font-medium font-mono data-[state=active]:bg-background data-[state=active]:text-foreground data-[state=active]:shadow-sm transition-all rounded-md px-1 sm:px-2"
              >
                JSON
              </TabsTrigger>
          </TabsList>

            <TabsContent value={format} className="flex-1 min-h-0 flex flex-col mt-0 overflow-hidden">
              <div className="flex flex-col h-full min-h-0 space-y-2 sm:space-y-3">
                {/* Smaller Action Buttons */}
                <div className="shrink-0 flex gap-2">
                  <Button 
                    onClick={handleCopy} 
                    variant="outline" 
                    size="sm"
                    className="h-8 sm:h-9 px-3 sm:px-4 text-xs shadow-sm hover:shadow transition-shadow flex-1 sm:flex-initial"
                  >
                    <Copy className="mr-1.5 sm:mr-2 h-3.5 w-3.5" />
                    <span className="hidden xs:inline">Copy</span>
                  </Button>
                  <Button 
                    onClick={handleDownload} 
                    size="sm"
                    className="h-8 sm:h-9 px-3 sm:px-4 text-xs shadow-sm hover:shadow-md transition-shadow bg-linear-to-r from-primary to-primary/90 flex-1 sm:flex-initial"
                  >
                    <Download className="mr-1.5 sm:mr-2 h-3.5 w-3.5" />
                    <span className="hidden xs:inline">Download</span>
                  </Button>
              </div>

                {/* Footer Info Bar */}
                <div className="shrink-0 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 sm:gap-0 text-[10px] sm:text-xs text-muted-foreground bg-muted/40 backdrop-blur-sm p-2 sm:p-3 rounded-md border border-border/50">
                  <div className="flex items-center gap-2 sm:gap-4 flex-wrap">
                    <span>Format: <span className="font-mono font-semibold text-foreground">{format.toUpperCase()}</span></span>
                    <span className="text-muted-foreground/60 hidden sm:inline">•</span>
                    <span>Theme: <span className="font-semibold text-foreground">{theme.name}</span></span>
                  </div>
                  <span>Lines: <span className="font-mono font-semibold text-foreground">{lineCount}</span></span>
                </div>

                {/* Large Code Preview Area */}
                <div className="flex-1 min-h-0 border rounded-lg overflow-auto bg-muted/20 backdrop-blur-sm">
              <Textarea
                value={code}
                readOnly
                    className="font-mono text-[10px] sm:text-xs w-full resize-none border-0 rounded-none focus-visible:ring-0 bg-transparent p-3 sm:p-5 leading-relaxed"
                    style={{ minHeight: '100%' }}
              />
                </div>
            </div>
          </TabsContent>
        </Tabs>
        </div>
      </DialogContent>
    </Dialog>
  )
})

