"use client"

import { Theme } from "@/lib/types"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import { Plus, X } from "lucide-react"
import { useState } from "react"

interface TypographyTabProps {
  theme: Theme
  onChange: (updates: Partial<Theme>) => void
}

export function TypographyTab({ theme, onChange }: TypographyTabProps) {
  const [newFontSizeName, setNewFontSizeName] = useState("")
  const [newFontSizeValue, setNewFontSizeValue] = useState("16px")

  const updateFontSize = (index: number, value: string) => {
    const newFontSizes = [...theme.baseTokens.typography.fontSizes]
    newFontSizes[index] = { ...newFontSizes[index], value }
    onChange({
      baseTokens: {
        ...theme.baseTokens,
        typography: {
          ...theme.baseTokens.typography,
          fontSizes: newFontSizes,
        },
      },
    })
  }

  const updateLineHeight = (index: number, value: string) => {
    const newLineHeights = [...theme.baseTokens.typography.lineHeights]
    newLineHeights[index] = { ...newLineHeights[index], value }
    onChange({
      baseTokens: {
        ...theme.baseTokens,
        typography: {
          ...theme.baseTokens.typography,
          lineHeights: newLineHeights,
        },
      },
    })
  }

  const updateFontWeight = (index: number, value: string) => {
    const newFontWeights = [...theme.baseTokens.typography.fontWeights]
    newFontWeights[index] = { ...newFontWeights[index], value }
    onChange({
      baseTokens: {
        ...theme.baseTokens,
        typography: {
          ...theme.baseTokens.typography,
          fontWeights: newFontWeights,
        },
      },
    })
  }

  const addCustomFontSize = () => {
    if (!newFontSizeName.trim()) return
    onChange({
      baseTokens: {
        ...theme.baseTokens,
        typography: {
          ...theme.baseTokens.typography,
          fontSizes: [...theme.baseTokens.typography.fontSizes, { name: newFontSizeName, value: newFontSizeValue }],
        },
      },
    })
    setNewFontSizeName("")
    setNewFontSizeValue("16px")
  }

  return (
    <div className="space-y-6">
      <div className="space-y-5">
        <div>
          <Label className="text-sm font-semibold">Font Sizes</Label>
          <p className="text-xs text-muted-foreground mt-1">Typography size tokens</p>
        </div>
        {theme.baseTokens.typography.fontSizes.map((fontSize, index) => (
          <div key={fontSize.name} className="flex items-center gap-2">
            <Label className="w-20 text-xs">{fontSize.name}</Label>
            <Input
              value={fontSize.value}
              onChange={(e) => updateFontSize(index, e.target.value)}
              className="flex-1"
            />
          </div>
        ))}
      </div>
      
      <Separator className="my-6" />
      
      <div className="space-y-5">
        <div>
          <Label className="text-sm font-semibold">Line Heights</Label>
          <p className="text-xs text-muted-foreground mt-1">Line height tokens</p>
        </div>
        {theme.baseTokens.typography.lineHeights.map((lineHeight, index) => (
          <div key={lineHeight.name} className="flex items-center gap-2">
            <Label className="w-20 text-xs">{lineHeight.name}</Label>
            <Input
              value={lineHeight.value}
              onChange={(e) => updateLineHeight(index, e.target.value)}
              className="flex-1"
            />
          </div>
        ))}
      </div>
      
      <Separator className="my-6" />
      
      <div className="space-y-5">
        <div>
          <Label className="text-sm font-semibold">Font Weights</Label>
          <p className="text-xs text-muted-foreground mt-1">Font weight tokens</p>
        </div>
        {theme.baseTokens.typography.fontWeights.map((fontWeight, index) => (
          <div key={fontWeight.name} className="flex items-center gap-2">
            <Label className="w-20 text-xs">{fontWeight.name}</Label>
            <Input
              value={fontWeight.value}
              onChange={(e) => updateFontWeight(index, e.target.value)}
              className="flex-1"
            />
          </div>
        ))}
      </div>
      
      <Separator className="my-6" />
      
      <div className="space-y-4">
        <div>
          <Label className="text-sm font-semibold">Add Custom Font Size</Label>
          <p className="text-xs text-muted-foreground mt-1">Create new font size tokens</p>
        </div>
        <div className="flex gap-2">
          <Input
            placeholder="Font size name"
            value={newFontSizeName}
            onChange={(e) => setNewFontSizeName(e.target.value)}
            className="flex-1"
          />
          <Input
            placeholder="16px"
            value={newFontSizeValue}
            onChange={(e) => setNewFontSizeValue(e.target.value)}
            className="flex-1"
          />
          <Button onClick={addCustomFontSize} size="icon">
            <Plus className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </div>
  )
}

