"use client"

import { Theme } from "@/lib/types"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import { Plus, X } from "lucide-react"
import { useState } from "react"

interface SpacingTabProps {
  theme: Theme
  onChange: (updates: Partial<Theme>) => void
}

export function SpacingTab({ theme, onChange }: SpacingTabProps) {
  const [newSpacingName, setNewSpacingName] = useState("")
  const [newSpacingValue, setNewSpacingValue] = useState("4px")

  const updateSpacing = (index: number, value: string) => {
    const newSpacing = [...theme.baseTokens.spacing]
    newSpacing[index] = { ...newSpacing[index], value }
    onChange({
      baseTokens: {
        ...theme.baseTokens,
        spacing: newSpacing,
      },
    })
  }

  const addCustomSpacing = () => {
    if (!newSpacingName.trim()) return
    onChange({
      baseTokens: {
        ...theme.baseTokens,
        spacing: [...theme.baseTokens.spacing, { name: newSpacingName, value: newSpacingValue }],
      },
    })
    setNewSpacingName("")
    setNewSpacingValue("4px")
  }

  const removeCustomSpacing = (index: number) => {
    onChange({
      baseTokens: {
        ...theme.baseTokens,
        spacing: theme.baseTokens.spacing.filter((_, i) => i !== index),
      },
    })
  }

  return (
    <div className="space-y-6">
      <div className="space-y-5">
        <div>
          <Label className="text-sm font-semibold">Default Spacing</Label>
          <p className="text-xs text-muted-foreground mt-1">Predefined spacing tokens</p>
        </div>
        {theme.baseTokens.spacing.map((spacing, index) => (
          <div key={spacing.name} className="flex items-center gap-2">
            <Label className="w-20 text-xs">{spacing.name}</Label>
            <Input
              value={spacing.value}
              onChange={(e) => updateSpacing(index, e.target.value)}
              className="flex-1"
            />
            {index >= 6 && (
              <Button
                variant="ghost"
                size="icon"
                onClick={() => removeCustomSpacing(index)}
              >
                <X className="h-4 w-4" />
              </Button>
            )}
          </div>
        ))}
      </div>
      
      <Separator className="my-6" />
      
      <div className="space-y-4">
        <div>
          <Label className="text-sm font-semibold">Add Custom Spacing</Label>
          <p className="text-xs text-muted-foreground mt-1">Create new spacing tokens</p>
        </div>
        <div className="flex gap-2">
          <Input
            placeholder="Spacing name"
            value={newSpacingName}
            onChange={(e) => setNewSpacingName(e.target.value)}
            className="flex-1"
          />
          <Input
            placeholder="4px"
            value={newSpacingValue}
            onChange={(e) => setNewSpacingValue(e.target.value)}
            className="flex-1"
          />
          <Button onClick={addCustomSpacing} size="icon">
            <Plus className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </div>
  )
}

