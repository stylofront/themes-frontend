"use client"

import { memo, useCallback } from "react"
import { Theme } from "@/lib/types"
import { Label } from "@/components/ui/label"
import { ColorPicker } from "@/components/ui/color-picker"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Separator } from "@/components/ui/separator"
import { Plus, X } from "lucide-react"
import { useState } from "react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

interface ColorsTabProps {
  theme: Theme
  onChange: (updates: Partial<Theme>) => void
}

export const ColorsTab = memo(function ColorsTab({ theme, onChange }: ColorsTabProps) {
  const [newColorName, setNewColorName] = useState("")
  const [newColorValue, setNewColorValue] = useState("#3b82f6")

  const updateColor = useCallback((mode: 'light' | 'dark', key: keyof Theme['colors']['light'], value: string) => {
    onChange({
      colors: {
        ...theme.colors,
        [mode]: {
          ...theme.colors[mode],
          [key]: value,
        },
      },
    })
  }, [theme.colors, onChange])

  const addCustomColor = (mode: 'light' | 'dark') => {
    if (!newColorName.trim()) return
    onChange({
      colors: {
        ...theme.colors,
        [mode]: {
          ...theme.colors[mode],
          custom: [...theme.colors[mode].custom, { name: newColorName, value: newColorValue }],
        },
      },
    })
    setNewColorName("")
    setNewColorValue("#3b82f6")
  }

  const removeCustomColor = (mode: 'light' | 'dark', index: number) => {
    onChange({
      colors: {
        ...theme.colors,
        [mode]: {
          ...theme.colors[mode],
          custom: theme.colors[mode].custom.filter((_, i) => i !== index),
        },
      },
    })
  }

  return (
    <Tabs defaultValue="light" className="w-full">
      <TabsList className="grid w-full grid-cols-2 p-1">
        <TabsTrigger value="light">Light Mode</TabsTrigger>
        <TabsTrigger value="dark">Dark Mode</TabsTrigger>
      </TabsList>
      
      <TabsContent value="light" className="space-y-6 mt-6">
        <div className="space-y-5">
          <div className="space-y-2">
            <Label className="text-sm font-medium">Primary</Label>
            <ColorPicker
              value={theme.colors.light.primary}
              onChange={(v) => updateColor('light', 'primary', v)}
            />
          </div>
          
          <div className="space-y-2">
            <Label className="text-sm font-medium">Primary Foreground</Label>
            <ColorPicker
              value={theme.colors.light.primaryFg}
              onChange={(v) => updateColor('light', 'primaryFg', v)}
            />
          </div>
          
          <div className="space-y-2">
            <Label className="text-sm font-medium">Secondary</Label>
            <ColorPicker
              value={theme.colors.light.secondary}
              onChange={(v) => updateColor('light', 'secondary', v)}
            />
          </div>
          
          <div className="space-y-2">
            <Label className="text-sm font-medium">Background</Label>
            <ColorPicker
              value={theme.colors.light.background}
              onChange={(v) => updateColor('light', 'background', v)}
            />
          </div>
          
          <div className="space-y-2">
            <Label className="text-sm font-medium">Surface</Label>
            <ColorPicker
              value={theme.colors.light.surface}
              onChange={(v) => updateColor('light', 'surface', v)}
            />
          </div>
          
          <div className="space-y-2">
            <Label className="text-sm font-medium">Text</Label>
            <ColorPicker
              value={theme.colors.light.text}
              onChange={(v) => updateColor('light', 'text', v)}
            />
          </div>
          
          <div className="space-y-2">
            <Label className="text-sm font-medium">Muted Text</Label>
            <ColorPicker
              value={theme.colors.light.mutedText}
              onChange={(v) => updateColor('light', 'mutedText', v)}
            />
          </div>
          
          <div className="space-y-2">
            <Label className="text-sm font-medium">Border</Label>
            <ColorPicker
              value={theme.colors.light.border}
              onChange={(v) => updateColor('light', 'border', v)}
            />
          </div>
          
          <div className="space-y-2">
            <Label className="text-sm font-medium">Success</Label>
            <ColorPicker
              value={theme.colors.light.success}
              onChange={(v) => updateColor('light', 'success', v)}
            />
          </div>
          
          <div className="space-y-2">
            <Label className="text-sm font-medium">Warning</Label>
            <ColorPicker
              value={theme.colors.light.warning}
              onChange={(v) => updateColor('light', 'warning', v)}
            />
          </div>
          
          <div className="space-y-2">
            <Label className="text-sm font-medium">Error</Label>
            <ColorPicker
              value={theme.colors.light.error}
              onChange={(v) => updateColor('light', 'error', v)}
            />
          </div>
        </div>
        
        <Separator className="my-6" />
        
        <div className="space-y-4">
          <div>
            <Label className="text-sm font-semibold">Custom Colors</Label>
            <p className="text-xs text-muted-foreground mt-1">Add your own color tokens</p>
          </div>
          
          {theme.colors.light.custom.map((color, index) => (
            <div key={index} className="flex items-center gap-2">
              <div className="flex-1">
                <Label className="text-xs">{color.name}</Label>
                <ColorPicker
                  value={color.value}
                  onChange={(v) => {
                    const newCustom = [...theme.colors.light.custom]
                    newCustom[index] = { ...newCustom[index], value: v }
                    onChange({
                      colors: {
                        ...theme.colors,
                        light: {
                          ...theme.colors.light,
                          custom: newCustom,
                        },
                      },
                    })
                  }}
                />
              </div>
              <Button
                variant="ghost"
                size="icon"
                onClick={() => removeCustomColor('light', index)}
              >
                <X className="h-4 w-4" />
              </Button>
            </div>
          ))}
          
          <div className="flex gap-2">
            <Input
              placeholder="Color name"
              value={newColorName}
              onChange={(e) => setNewColorName(e.target.value)}
              className="flex-1"
            />
            <ColorPicker
              value={newColorValue}
              onChange={setNewColorValue}
              className="flex-1"
            />
            <Button onClick={() => addCustomColor('light')} size="icon">
              <Plus className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </TabsContent>
      
      <TabsContent value="dark" className="space-y-6 mt-6">
        <div className="space-y-5">
          <div className="space-y-2">
            <Label className="text-sm font-medium">Primary</Label>
            <ColorPicker
              value={theme.colors.dark.primary}
              onChange={(v) => updateColor('dark', 'primary', v)}
            />
          </div>
          
          <div className="space-y-2">
            <Label className="text-sm font-medium">Primary Foreground</Label>
            <ColorPicker
              value={theme.colors.dark.primaryFg}
              onChange={(v) => updateColor('dark', 'primaryFg', v)}
            />
          </div>
          
          <div className="space-y-2">
            <Label className="text-sm font-medium">Secondary</Label>
            <ColorPicker
              value={theme.colors.dark.secondary}
              onChange={(v) => updateColor('dark', 'secondary', v)}
            />
          </div>
          
          <div className="space-y-2">
            <Label className="text-sm font-medium">Background</Label>
            <ColorPicker
              value={theme.colors.dark.background}
              onChange={(v) => updateColor('dark', 'background', v)}
            />
          </div>
          
          <div className="space-y-2">
            <Label className="text-sm font-medium">Surface</Label>
            <ColorPicker
              value={theme.colors.dark.surface}
              onChange={(v) => updateColor('dark', 'surface', v)}
            />
          </div>
          
          <div className="space-y-2">
            <Label className="text-sm font-medium">Text</Label>
            <ColorPicker
              value={theme.colors.dark.text}
              onChange={(v) => updateColor('dark', 'text', v)}
            />
          </div>
          
          <div className="space-y-2">
            <Label className="text-sm font-medium">Muted Text</Label>
            <ColorPicker
              value={theme.colors.dark.mutedText}
              onChange={(v) => updateColor('dark', 'mutedText', v)}
            />
          </div>
          
          <div className="space-y-2">
            <Label className="text-sm font-medium">Border</Label>
            <ColorPicker
              value={theme.colors.dark.border}
              onChange={(v) => updateColor('dark', 'border', v)}
            />
          </div>
          
          <div className="space-y-2">
            <Label className="text-sm font-medium">Success</Label>
            <ColorPicker
              value={theme.colors.dark.success}
              onChange={(v) => updateColor('dark', 'success', v)}
            />
          </div>
          
          <div className="space-y-2">
            <Label className="text-sm font-medium">Warning</Label>
            <ColorPicker
              value={theme.colors.dark.warning}
              onChange={(v) => updateColor('dark', 'warning', v)}
            />
          </div>
          
          <div className="space-y-2">
            <Label className="text-sm font-medium">Error</Label>
            <ColorPicker
              value={theme.colors.dark.error}
              onChange={(v) => updateColor('dark', 'error', v)}
            />
          </div>
        </div>
        
        <Separator className="my-6" />
        
        <div className="space-y-4">
          <div>
            <Label className="text-sm font-semibold">Custom Colors</Label>
            <p className="text-xs text-muted-foreground mt-1">Add your own color tokens</p>
          </div>
          
          {theme.colors.dark.custom.map((color, index) => (
            <div key={index} className="flex items-center gap-2">
              <div className="flex-1">
                <Label className="text-xs">{color.name}</Label>
                <ColorPicker
                  value={color.value}
                  onChange={(v) => {
                    const newCustom = [...theme.colors.dark.custom]
                    newCustom[index] = { ...newCustom[index], value: v }
                    onChange({
                      colors: {
                        ...theme.colors,
                        dark: {
                          ...theme.colors.dark,
                          custom: newCustom,
                        },
                      },
                    })
                  }}
                />
              </div>
              <Button
                variant="ghost"
                size="icon"
                onClick={() => removeCustomColor('dark', index)}
              >
                <X className="h-4 w-4" />
              </Button>
            </div>
          ))}
          
          <div className="flex gap-2">
            <Input
              placeholder="Color name"
              value={newColorName}
              onChange={(e) => setNewColorName(e.target.value)}
              className="flex-1"
            />
            <ColorPicker
              value={newColorValue}
              onChange={setNewColorValue}
              className="flex-1"
            />
            <Button onClick={() => addCustomColor('dark')} size="icon">
              <Plus className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </TabsContent>
    </Tabs>
  )
})

