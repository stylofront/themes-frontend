"use client"

import { useTheme } from "@/hooks/use-theme"
import { ThemeEditor } from "@/components/generator/ThemeEditor"
import { ThemePreview } from "@/components/generator/ThemePreview"
import { ResizablePanelGroup, ResizablePanel, ResizableHandle } from "@/components/ui/resizable"
import { ExportDialog } from "@/components/generator/ExportDialog"
import { useState } from "react"

export default function GeneratorPage() {
  const { theme, updateTheme } = useTheme()
  const [exportOpen, setExportOpen] = useState(false)

  return (
    <div className="flex h-[calc(100vh-3rem)] flex-col overflow-hidden bg-linear-to-br from-background via-background to-muted/20">
      {/* Split View */}
      <div className="flex-1 overflow-hidden p-4">
        <ResizablePanelGroup direction="horizontal" className="h-full rounded-lg border shadow-lg bg-background/50 backdrop-blur-sm">
          <ResizablePanel defaultSize={35} minSize={25} maxSize={50} className="min-w-[300px]">
            <div className="h-full border-r bg-card/50 backdrop-blur-sm overflow-hidden rounded-l-lg">
              <ThemeEditor theme={theme} onChange={updateTheme} />
            </div>
          </ResizablePanel>
          <ResizableHandle withHandle className="w-1 hover:w-2 transition-all bg-border hover:bg-primary/50" />
          <ResizablePanel defaultSize={65} className="min-w-[400px]">
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
