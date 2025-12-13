"use client"

import Link from "next/link"

export function Footer() {
  return (
    <footer className="border-t bg-background">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
          <div className="space-y-4">
            <h3 className="font-semibold font-heading text-lg">StyloFront</h3>
            <p className="text-sm text-muted-foreground">
              Developer-first UI theme generator. Create production-ready design systems in seconds.
            </p>
          </div>
          
          <div className="space-y-3">
            <h4 className="font-semibold font-heading">Product</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/generator" className="text-muted-foreground hover:text-foreground transition-colors">
                  Theme Generator
                </Link>
              </li>
              <li>
                <Link href="/#what-is" className="text-muted-foreground hover:text-foreground transition-colors">
                  Features
                </Link>
              </li>
              <li>
                <Link href="/#tokens" className="text-muted-foreground hover:text-foreground transition-colors">
                  Design Tokens
                </Link>
              </li>
            </ul>
          </div>
          
          <div className="space-y-3">
            <h4 className="font-semibold font-heading">Resources</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/#how-it-works" className="text-muted-foreground hover:text-foreground transition-colors">
                  How It Works
                </Link>
              </li>
              <li>
                <Link href="/#export-formats" className="text-muted-foreground hover:text-foreground transition-colors">
                  Export Formats
                </Link>
              </li>
              <li>
                <Link href="/#example" className="text-muted-foreground hover:text-foreground transition-colors">
                  Examples
                </Link>
              </li>
            </ul>
          </div>
          
          <div className="space-y-3">
            <h4 className="font-semibold font-heading">Legal</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/about" className="text-muted-foreground hover:text-foreground transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="text-muted-foreground hover:text-foreground transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms" className="text-muted-foreground hover:text-foreground transition-colors">
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="mt-8 border-t pt-8 text-center text-sm text-muted-foreground">
          <p>© {new Date().getFullYear()} StyloFront Theme Generator. Built by StyloFront.</p>
        </div>
      </div>
    </footer>
  )
}
