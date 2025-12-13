"use client"

import { Theme } from "@/lib/types"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { useGoogleFonts } from "@/hooks/use-google-fonts"
import { generateFontImportUrl } from "@/lib/fonts"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import { Loader2 } from "lucide-react"

interface FontsTabProps {
  theme: Theme
  onChange: (updates: Partial<Theme>) => void
}

export function FontsTab({ theme, onChange }: FontsTabProps) {
  const { fonts, isLoading, searchQuery, setSearchQuery } = useGoogleFonts()

  const selectFont = (type: 'sans' | 'mono', fontFamily: string) => {
    const weights = ['400', '500', '600', '700']
    const importUrl = generateFontImportUrl(fontFamily, weights)
    onChange({
      fonts: {
        ...theme.fonts,
        [type]: {
          name: fontFamily,
          importUrl,
          weights,
        },
      },
    })
  }

  return (
    <div className="space-y-6">
      <div className="space-y-5">
        <div className="space-y-2">
          <Label className="text-sm font-medium">Sans Serif Font</Label>
          <Input
            value={theme.fonts.sans.name}
            readOnly
            className="mt-1"
          />
        </div>
        
        <div className="space-y-2">
          <Label className="text-sm font-medium">Monospace Font</Label>
          <Input
            value={theme.fonts.mono.name}
            readOnly
            className="mt-1"
          />
        </div>
      </div>
      
      <Separator className="my-6" />
      
      <div className="space-y-4">
        <div>
          <Label className="text-sm font-semibold">Select from Google Fonts</Label>
          <p className="text-xs text-muted-foreground mt-1">Choose fonts for your theme</p>
        </div>
        <Input
          placeholder="Search fonts..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        
        <ScrollArea className="h-[400px]">
          {isLoading ? (
            <div className="flex items-center justify-center py-8">
              <Loader2 className="h-6 w-6 animate-spin" />
            </div>
          ) : (
            <div className="space-y-2">
              {fonts.slice(0, 50).map((font) => (
                <Card key={font.family} className="p-3">
                  <CardContent className="p-0">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="font-medium" style={{ fontFamily: font.family }}>
                          {font.family}
                        </p>
                        <p className="text-xs text-muted-foreground">{font.category}</p>
                      </div>
                      <div className="flex gap-2">
                        <Button
                          size="sm"
                          variant="outline"
                          onClick={() => selectFont('sans', font.family)}
                        >
                          Sans
                        </Button>
                        {font.category === 'monospace' && (
                          <Button
                            size="sm"
                            variant="outline"
                            onClick={() => selectFont('mono', font.family)}
                          >
                            Mono
                          </Button>
                        )}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          )}
        </ScrollArea>
      </div>
    </div>
  )
}

