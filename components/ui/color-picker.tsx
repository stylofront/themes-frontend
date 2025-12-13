"use client"

import { useState, useRef, useEffect, useCallback } from "react"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"
import { Popover, PopoverButton, PopoverPanel, PopoverBackdrop } from "@/components/animate-ui/components/headless/popover"
import { cn } from "@/lib/utils"
import { hexToHsl, hslToHex } from "@/lib/colors"
import { Check, X } from "lucide-react"

interface ColorPickerProps {
  value: string // Hex value like "#3b82f6"
  onChange: (hexValue: string) => void
  label?: string
  className?: string
}

const PRESET_COLORS = [
  { name: "Red", hsl: "0 84.2% 60.2%", hex: "#ef4444" },
  { name: "Orange", hsl: "24.6 95% 53.1%", hex: "#f97316" },
  { name: "Yellow", hsl: "47.9 95.8% 53.1%", hex: "#eab308" },
  { name: "Green", hsl: "142.1 76.2% 36.3%", hex: "#22c55e" },
  { name: "Blue", hsl: "221.2 83.2% 53.3%", hex: "#3b82f6" },
  { name: "Indigo", hsl: "262.1 83.3% 57.8%", hex: "#6366f1" },
  { name: "Purple", hsl: "270.7 91% 65.1%", hex: "#a855f7" },
  { name: "Pink", hsl: "330.4 81.2% 60.4%", hex: "#ec4899" },
  { name: "Gray", hsl: "215.4 16.3% 46.9%", hex: "#6b7280" },
  { name: "Black", hsl: "0 0% 0%", hex: "#000000" },
  { name: "White", hsl: "0 0% 100%", hex: "#ffffff" },
]

export function ColorPicker({ value, onChange, label, className }: ColorPickerProps) {
  const [hexInput, setHexInput] = useState("")
  const [hslInput, setHslInput] = useState("")
  const [localHex, setLocalHex] = useState("")
  const debounceTimerRef = useRef<NodeJS.Timeout | null>(null)
  const isDraggingRef = useRef(false)

  // Initialize with hex value
  useEffect(() => {
    if (value) {
      // If value is already hex, use it directly
      const hex = value.startsWith('#') ? value : `#${value.replace(/^#/, '')}`
      setLocalHex(hex)
      setHexInput(hex)
      // Convert to HSL for display
      const hsl = hexToHsl(hex)
      setHslInput(hsl)
    }
  }, [value])

  const handleHexChange = (hex: string) => {
    setHexInput(hex)
    setLocalHex(hex)
    if (/^#[0-9A-F]{6}$/i.test(hex)) {
      const hsl = hexToHsl(hex)
      setHslInput(hsl)
      onChange(hex) // Store hex directly
    }
  }

  const handleHslChange = (hsl: string) => {
    setHslInput(hsl)
    if (hsl.match(/^\d+\.?\d*\s+\d+\.?\d*%\s+\d+\.?\d*%$/)) {
      const hex = hslToHex(hsl)
      setHexInput(hex)
      setLocalHex(hex)
      onChange(hex) // Store hex directly
    }
  }

  const handlePresetClick = (preset: typeof PRESET_COLORS[0]) => {
    setHexInput(preset.hex)
    setLocalHex(preset.hex)
    const hsl = hexToHsl(preset.hex)
      setHslInput(hsl)
      onChange(preset.hex) // Store hex directly
  }

  // Throttled onChange callback - only updates parent at reasonable intervals
  const throttledOnChange = useCallback((hex: string) => {
    if (debounceTimerRef.current) {
      clearTimeout(debounceTimerRef.current)
    }
    // Throttle to ~30fps (33ms) for smooth performance
    debounceTimerRef.current = setTimeout(() => {
      onChange(hex)
    }, 100)
  }, [onChange])

  const handleNativeColorChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const hex = e.target.value
    
    // Update visual state immediately for smooth interaction (no lag in UI)
    setLocalHex(hex)
    setHexInput(hex)
    const hsl = hexToHsl(hex)
    setHslInput(hsl)
    
    // Throttle the parent onChange to prevent lag from too many updates
    throttledOnChange(hex)
  }

  const handleNativeColorMouseUp = (e: React.MouseEvent<HTMLInputElement>) => {
    const hex = (e.target as HTMLInputElement).value
    // Clear any pending throttled updates
    if (debounceTimerRef.current) {
      clearTimeout(debounceTimerRef.current)
    }
    // Final update when user releases mouse - ensure latest value is set
    onChange(hex)
  }

  // Cleanup on unmount
  useEffect(() => {
    return () => {
      if (debounceTimerRef.current) {
        clearTimeout(debounceTimerRef.current)
      }
    }
  }, [])

  return (
    <div className={cn("space-y-2", className)}>
      {label && <Label>{label}</Label>}
      <Popover>
        <PopoverButton className="flex gap-2 w-full items-center outline-none">
            <div
            className="w-16 h-9 rounded-md border-2 border-border cursor-pointer hover:opacity-80 transition-opacity shrink-0"
              style={{ backgroundColor: localHex || "#000000" }}
            />
            <Input
              value={hexInput}
              onChange={(e) => handleHexChange(e.target.value)}
              placeholder="#000000"
              className="font-mono flex-1"
              maxLength={7}
            onClick={(e) => e.stopPropagation()}
            onFocus={(e) => e.stopPropagation()}
            />
        </PopoverButton>
        <PopoverBackdrop />
        <PopoverPanel className="w-80 p-4" anchor={{ to: 'bottom', gap: 8 }}>
          <div className="space-y-4">
            {/* Native Color Picker */}
            <div className="space-y-2">
              <Label className="text-xs">Color Picker</Label>
              <Input
                type="color"
                value={localHex || "#000000"}
                onChange={handleNativeColorChange}
                onMouseUp={handleNativeColorMouseUp}
                className="w-full h-12 p-1 rounded border cursor-pointer"
                onClick={(e) => e.stopPropagation()}
              />
            </div>

            {/* Hex Input */}
            <div className="space-y-2">
              <Label className="text-xs">Hex</Label>
              <Input
                value={hexInput}
                onChange={(e) => handleHexChange(e.target.value)}
                placeholder="#000000"
                className="font-mono"
                maxLength={7}
                onClick={(e) => e.stopPropagation()}
              />
            </div>

            {/* HSL Input */}
            <div className="space-y-2">
              <Label className="text-xs">HSL</Label>
              <Input
                value={hslInput}
                onChange={(e) => handleHslChange(e.target.value)}
                placeholder="221.2 83.2% 53.3%"
                className="font-mono"
                onClick={(e) => e.stopPropagation()}
              />
            </div>

            {/* Preset Colors */}
            <div className="space-y-2">
              <Label className="text-xs">Presets</Label>
              <div className="grid grid-cols-6 gap-2">
                {PRESET_COLORS.map((preset) => (
                  <button
                    key={preset.name}
                    onClick={() => handlePresetClick(preset)}
                    className="h-8 w-8 rounded border-2 border-border hover:scale-110 transition-transform"
                    style={{ backgroundColor: preset.hex }}
                    title={preset.name}
                  />
                ))}
              </div>
            </div>

            {/* Current Color Display */}
            <div className="flex items-center justify-between p-2 rounded border bg-muted/50">
              <span className="text-xs text-muted-foreground">Current:</span>
              <div className="flex items-center gap-2">
                <div
                  className="h-6 w-6 rounded border"
                  style={{ backgroundColor: localHex || "#000000" }}
                />
                <span className="text-xs font-mono">{localHex}</span>
              </div>
            </div>
          </div>
        </PopoverPanel>
      </Popover>
    </div>
  )
}

