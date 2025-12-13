"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Copy } from "lucide-react"
import { Button } from "@/components/ui/button"
import { toast } from "sonner"

const exampleCode = {
  css: `:root {
  --color-primary: #3b82f6;
  --color-primary-fg: #ffffff;
  --color-background: #ffffff;
  --color-text: #1f2937;
  --spacing-xs: 0.25rem;
  --spacing-sm: 0.5rem;
  --spacing-md: 1rem;
  --radius-sm: 0.25rem;
  --radius-md: 0.5rem;
  --font-sans: 'Inter', sans-serif;
  --shadow-sm: 0 1px 2px rgba(0,0,0,0.05);
}`,
  scss: `$color-primary: #3b82f6;
$color-primary-fg: #ffffff;
$color-background: #ffffff;
$color-text: #1f2937;
$spacing-xs: 0.25rem;
$spacing-sm: 0.5rem;
$spacing-md: 1rem;
$radius-sm: 0.25rem;
$radius-md: 0.5rem;
$font-sans: 'Inter', sans-serif;
$shadow-sm: 0 1px 2px rgba(0,0,0,0.05);`,
  json: `{
  "colors": {
    "primary": "#3b82f6",
    "primaryFg": "#ffffff",
    "background": "#ffffff",
    "text": "#1f2937"
  },
  "spacing": {
    "xs": "0.25rem",
    "sm": "0.5rem",
    "md": "1rem"
  },
  "radius": {
    "sm": "0.25rem",
    "md": "0.5rem"
  }
}`
}

export function ExampleOutput() {
  const handleCopy = (code: string) => {
    navigator.clipboard.writeText(code)
    toast.success('Copied to clipboard!')
  }

  return (
    <section id="example" className="py-16 sm:py-20 md:py-32 bg-muted/30">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center mb-16">
          <h2 className="text-3xl font-bold font-heading tracking-tight sm:text-4xl mb-4">
            Example Theme Output
          </h2>
          <p className="text-lg text-muted-foreground">
            See what your exported theme code looks like. Clean, organized, and ready to use.
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <Card className="border-2 hover:shadow-lg transition-shadow">
            <CardHeader>
              <CardTitle>Theme Export Preview</CardTitle>
            </CardHeader>
            <CardContent>
              <Tabs defaultValue="css" className="w-full">
                <TabsList className="grid w-full grid-cols-3 h-auto">
                  <TabsTrigger value="css" className="font-mono text-xs py-2">CSS</TabsTrigger>
                  <TabsTrigger value="scss" className="font-mono text-xs py-2">SCSS</TabsTrigger>
                  <TabsTrigger value="json" className="font-mono text-xs py-2">JSON</TabsTrigger>
                </TabsList>
                
                {Object.entries(exampleCode).map(([format, code]) => (
                  <TabsContent key={format} value={format} className="mt-4">
                    <div className="relative">
                      <Button
                        variant="outline"
                        size="sm"
                        className="absolute top-2 right-2 z-10"
                        onClick={() => handleCopy(code)}
                      >
                        <Copy className="h-4 w-4 mr-2" />
                        Copy
                      </Button>
                      <pre className="bg-muted/50 p-4 rounded-lg overflow-x-auto text-xs font-mono border border-border">
                        <code className="text-foreground">{code}</code>
                      </pre>
                    </div>
                  </TabsContent>
                ))}
              </Tabs>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
