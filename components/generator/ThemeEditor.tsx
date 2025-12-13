"use client"

import { memo } from "react"
import { Theme } from "@/lib/types"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Tabs, TabsContent, TabsList } from "@/components/ui/tabs"
import { ExpandableTabTrigger } from "@/components/ui/expandable-tab-trigger"
import { Palette, Layers, MoveHorizontal, CornerUpRight, Type, FileText } from "lucide-react"
import { ColorsTab } from "./tabs/ColorsTab"
import { ShadowsTab } from "./tabs/ShadowsTab"
import { SpacingTab } from "./tabs/SpacingTab"
import { RadiusTab } from "./tabs/RadiusTab"
import { TypographyTab } from "./tabs/TypographyTab"
import { FontsTab } from "./tabs/FontsTab"

interface ThemeEditorProps {
  theme: Theme
  onChange: (updates: Partial<Theme>) => void
}

export const ThemeEditor = memo(function ThemeEditor({ theme, onChange }: ThemeEditorProps) {
  return (
    <div className="flex h-full flex-col bg-linear-to-b from-card to-card/50">
      <div className="border-b bg-linear-to-r from-primary/5 to-secondary/5 p-4 backdrop-blur-sm">
        <h2 className="text-xl font-bold font-heading bg-linear-to-r from-foreground to-foreground/70 bg-clip-text text-transparent">Theme Editor</h2>
        <p className="text-sm text-muted-foreground mt-1">Customize your theme settings</p>
      </div>
      
      <ScrollArea className="flex-1">
        <Tabs defaultValue="colors" className="w-full p-4 space-y-4">
          <TabsList className="flex w-full gap-2 flex-wrap bg-muted/50 backdrop-blur-sm">
            <ExpandableTabTrigger value="colors" icon={Palette} label="Colors" />
            <ExpandableTabTrigger value="shadows" icon={Layers} label="Shadows" />
            <ExpandableTabTrigger value="spacing" icon={MoveHorizontal} label="Spacing" />
            <ExpandableTabTrigger value="radius" icon={CornerUpRight} label="Radius" />
            <ExpandableTabTrigger value="typography" icon={Type} label="Typography" />
            <ExpandableTabTrigger value="fonts" icon={FileText} label="Fonts" />
          </TabsList>
          
          <TabsContent value="colors" className="mt-4">
            <ColorsTab theme={theme} onChange={onChange} />
          </TabsContent>
          
          <TabsContent value="shadows" className="mt-4">
            <ShadowsTab theme={theme} onChange={onChange} />
          </TabsContent>
          
          <TabsContent value="spacing" className="mt-4">
            <SpacingTab theme={theme} onChange={onChange} />
          </TabsContent>
          
          <TabsContent value="radius" className="mt-4">
            <RadiusTab theme={theme} onChange={onChange} />
          </TabsContent>
          
          <TabsContent value="typography" className="mt-4">
            <TypographyTab theme={theme} onChange={onChange} />
          </TabsContent>
          
          <TabsContent value="fonts" className="mt-4">
            <FontsTab theme={theme} onChange={onChange} />
          </TabsContent>
        </Tabs>
      </ScrollArea>
    </div>
  )
})

