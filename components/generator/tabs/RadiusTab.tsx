"use client"

import { Theme } from "@/lib/types"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import { Plus, X } from "lucide-react"
import { useState } from "react"

interface RadiusTabProps {
  theme: Theme
  onChange: (updates: Partial<Theme>) => void
}

export function RadiusTab({ theme, onChange }: RadiusTabProps) {
  const [newRadiusName, setNewRadiusName] = useState("")
  const [newRadiusValue, setNewRadiusValue] = useState("4px")

  const updateRadius = (index: number, value: string) => {
    const newRadius = [...theme.baseTokens.radius]
    newRadius[index] = { ...newRadius[index], value }
    onChange({
      baseTokens: {
        ...theme.baseTokens,
        radius: newRadius,
      },
    })
  }

  const addCustomRadius = () => {
    if (!newRadiusName.trim()) return
    onChange({
      baseTokens: {
        ...theme.baseTokens,
        radius: [...theme.baseTokens.radius, { name: newRadiusName, value: newRadiusValue }],
      },
    })
    setNewRadiusName("")
    setNewRadiusValue("4px")
  }

  const removeCustomRadius = (index: number) => {
    onChange({
      baseTokens: {
        ...theme.baseTokens,
        radius: theme.baseTokens.radius.filter((_, i) => i !== index),
      },
    })
  }

  return (
    <div className="space-y-6">
      <div className="space-y-5">
        <div>
          <Label className="text-sm font-semibold">Default Radius</Label>
          <p className="text-xs text-muted-foreground mt-1">Predefined border radius tokens</p>
        </div>
        {theme.baseTokens.radius.map((radius, index) => (
          <div key={radius.name} className="flex items-center gap-2">
            <Label className="w-20 text-xs">{radius.name}</Label>
            <Input
              value={radius.value}
              onChange={(e) => updateRadius(index, e.target.value)}
              className="flex-1"
            />
            {index >= 6 && (
              <Button
                variant="ghost"
                size="icon"
                onClick={() => removeCustomRadius(index)}
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
          <Label className="text-sm font-semibold">Add Custom Radius</Label>
          <p className="text-xs text-muted-foreground mt-1">Create new radius tokens</p>
        </div>
        <div className="flex gap-2">
          <Input
            placeholder="Radius name"
            value={newRadiusName}
            onChange={(e) => setNewRadiusName(e.target.value)}
            className="flex-1"
          />
          <Input
            placeholder="4px"
            value={newRadiusValue}
            onChange={(e) => setNewRadiusValue(e.target.value)}
            className="flex-1"
          />
          <Button onClick={addCustomRadius} size="icon">
            <Plus className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </div>
  )
}

