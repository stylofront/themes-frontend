"use client"

import { Theme } from "@/lib/types"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { Plus, X } from "lucide-react"
import { useState } from "react"

interface ShadowsTabProps {
  theme: Theme
  onChange: (updates: Partial<Theme>) => void
}

export function ShadowsTab({ theme, onChange }: ShadowsTabProps) {
  const [newShadowName, setNewShadowName] = useState("")
  const [newShadowValue, setNewShadowValue] = useState("0 1px 2px rgba(0,0,0,0.05)")

  const updateShadow = (index: number, value: string) => {
    const newShadows = [...theme.shadows.default]
    newShadows[index] = { ...newShadows[index], value }
    onChange({
      shadows: {
        ...theme.shadows,
        default: newShadows,
      },
    })
  }

  const addCustomShadow = () => {
    if (!newShadowName.trim()) return
    onChange({
      shadows: {
        ...theme.shadows,
        custom: [...theme.shadows.custom, { name: newShadowName, value: newShadowValue }],
      },
    })
    setNewShadowName("")
    setNewShadowValue("0 1px 2px rgba(0,0,0,0.05)")
  }

  const removeCustomShadow = (index: number) => {
    onChange({
      shadows: {
        ...theme.shadows,
        custom: theme.shadows.custom.filter((_, i) => i !== index),
      },
    })
  }

  return (
    <div className="space-y-6">
      <div className="space-y-5">
        <div>
          <Label className="text-sm font-semibold">Default Shadows</Label>
          <p className="text-xs text-muted-foreground mt-1">Predefined shadow tokens</p>
        </div>
        {theme.shadows.default.map((shadow, index) => (
          <div key={shadow.name} className="space-y-2">
            <Label className="text-sm font-medium">{shadow.name}</Label>
            <Input
              value={shadow.value}
              onChange={(e) => updateShadow(index, e.target.value)}
              placeholder="0 1px 2px rgba(0,0,0,0.05)"
            />
            <Card className="py-2 px-4" style={{ boxShadow: shadow.value }}>
              <p className="text-sm">Preview: {shadow.name}</p>
            </Card>
          </div>
        ))}
      </div>
      
      <Separator className="my-6" />
      
      <div className="space-y-4">
        <div>
          <Label className="text-sm font-semibold">Custom Shadows</Label>
          <p className="text-xs text-muted-foreground mt-1">Add your own shadow tokens</p>
        </div>
        {theme.shadows.custom.map((shadow, index) => (
          <div key={index} className="space-y-2">
            <div className="flex items-center gap-2">
              <Input
                value={shadow.name}
                onChange={(e) => {
                  const newCustom = [...theme.shadows.custom]
                  newCustom[index] = { ...newCustom[index], name: e.target.value }
                  onChange({
                    shadows: {
                      ...theme.shadows,
                      custom: newCustom,
                    },
                  })
                }}
                className="flex-1"
                placeholder="Shadow name"
              />
              <Button
                variant="ghost"
                size="icon"
                onClick={() => removeCustomShadow(index)}
              >
                <X className="h-4 w-4" />
              </Button>
            </div>
            <Input
              value={shadow.value}
              onChange={(e) => {
                const newCustom = [...theme.shadows.custom]
                newCustom[index] = { ...newCustom[index], value: e.target.value }
                onChange({
                  shadows: {
                    ...theme.shadows,
                    custom: newCustom,
                  },
                })
              }}
              placeholder="0 1px 2px rgba(0,0,0,0.05)"
            />
            <Card className="p-4" style={{ boxShadow: shadow.value }}>
              <p className="text-sm">Preview: {shadow.name}</p>
            </Card>
          </div>
        ))}
        
        <div className="flex gap-2">
          <Input
            placeholder="Shadow name"
            value={newShadowName}
            onChange={(e) => setNewShadowName(e.target.value)}
            className="flex-1"
          />
          <Input
            placeholder="0 1px 2px rgba(0,0,0,0.05)"
            value={newShadowValue}
            onChange={(e) => setNewShadowValue(e.target.value)}
            className="flex-1"
          />
          <Button onClick={addCustomShadow} size="icon">
            <Plus className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </div>
  )
}

