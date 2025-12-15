"use client"

import { useTheme } from "@/hooks/use-theme"
import { useShepherdTour } from "@/hooks/use-shepherd-tour"
import { ThemeEditor } from "@/components/generator/ThemeEditor"
import { ThemePreview } from "@/components/generator/ThemePreview"
import { ResizablePanelGroup, ResizablePanel, ResizableHandle } from "@/components/ui/resizable"
import { ExportDialog } from "@/components/generator/ExportDialog"
import { useState, useEffect } from "react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Settings, Eye } from "lucide-react"

export default function GeneratorPage() {
  const { theme, updateTheme } = useTheme()
  useShepherdTour() // Initialize tour
  const [exportOpen, setExportOpen] = useState(false)
  const [mobileView, setMobileView] = useState<'editor' | 'preview'>('editor')

  // Prevent body scroll on generator page
  useEffect(() => {
    // Disable body scroll when component mounts
    document.body.style.overflow = 'hidden'
    document.documentElement.style.overflow = 'hidden'
    
    // Re-enable body scroll when component unmounts
    return () => {
      document.body.style.overflow = ''
      document.documentElement.style.overflow = ''
    }
  }, [])

  return (
    <div className="fixed inset-0 top-14 flex flex-col overflow-hidden bg-linear-to-br from-background via-background to-muted/20">
      {/* Mobile/Tablet View - Tabs to switch between Editor and Preview */}
      <div className="lg:hidden flex-1 overflow-hidden">
        <Tabs 
          value={mobileView} 
          onValueChange={(value) => setMobileView(value as 'editor' | 'preview')}
          className="h-full flex flex-col"
        >
          <div className="border-b bg-background/95 backdrop-blur-sm px-4 py-2 shrink-0">
            <TabsList className="grid w-full grid-cols-2 p-1">
              <TabsTrigger value="editor" className="flex items-center gap-2">
                <Settings className="h-4 w-4" />
                <span className="hidden sm:inline">Editor</span>
              </TabsTrigger>
              <TabsTrigger value="preview" className="flex items-center gap-2">
                <Eye className="h-4 w-4" />
                <span className="hidden sm:inline">Preview</span>
              </TabsTrigger>
            </TabsList>
          </div>
          <TabsContent value="editor" className="flex-1 overflow-hidden m-0 mt-0">
            <div className="h-full">
              <ThemeEditor theme={theme} onChange={updateTheme} />
            </div>
          </TabsContent>
          <TabsContent value="preview" className="flex-1 overflow-hidden m-0 mt-0">
            <div className="h-full">
              <ThemePreview theme={theme} onExport={() => setExportOpen(true)} />
            </div>
          </TabsContent>
        </Tabs>
      </div>

      {/* Desktop View - Resizable Panels */}
      <div className="hidden lg:flex flex-1 overflow-hidden p-4">
        <ResizablePanelGroup direction="horizontal" className="h-full rounded-lg border shadow-lg bg-background/50 backdrop-blur-sm">
          <ResizablePanel defaultSize={40} minSize={30} maxSize={50} className="min-w-[300px]">
            <div className="h-full border-r bg-card/50 backdrop-blur-sm overflow-hidden rounded-l-lg" data-tour-id="editor-panel">
              <ThemeEditor theme={theme} onChange={updateTheme} />
            </div>
          </ResizablePanel>
          <ResizableHandle withHandle className="w-1 hover:w-2 transition-all bg-border hover:bg-primary/50" />
          <ResizablePanel defaultSize={60} className="min-w-[400px]">
            <div className="h-full bg-linear-to-br from-muted/40 to-muted/20 overflow-hidden rounded-r-lg">
              <ThemePreview theme={theme} onExport={() => setExportOpen(true)} />
            </div>
          </ResizablePanel>
        </ResizablePanelGroup>
      </div>

      <ExportDialog open={exportOpen} onOpenChange={setExportOpen} theme={theme} />
    </div>
  )
}
