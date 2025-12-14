"use client"

import Link from "next/link"
import { Sparkles, Zap, Rocket, Palette, Code, Download } from "lucide-react"
import { motion } from "framer-motion"

export function Footer() {
  return (
    <footer className="border-t bg-background relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-0 w-96 h-96 bg-primary/3 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-primary/3 rounded-full blur-3xl" />
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 sm:py-16 relative z-10">
        <div className="grid grid-cols-1 gap-8 sm:gap-12 md:grid-cols-2 lg:grid-cols-4 mb-8 sm:mb-12">
          {/* Brand Section */}
          <div className="space-y-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <div className="flex items-center gap-2 mb-4">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 border border-primary/20">
                  <Palette className="h-5 w-5 text-primary" />
                </div>
                <h3 className="font-bold font-heading text-lg">StyloFront</h3>
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Developer-first UI theme generator. Create production-ready design systems in seconds with zero code.
              </p>
              <div className="flex items-center gap-2 pt-2">
                <Zap className="h-4 w-4 text-primary" />
                <span className="text-xs text-muted-foreground">Free Forever</span>
              </div>
            </motion.div>
          </div>
          
          {/* Product Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="space-y-3"
          >
            <h4 className="font-semibold font-heading text-base mb-4">Product</h4>
            <ul className="space-y-3 text-sm">
              <li>
                <Link 
                  href="/generator" 
                  className="text-muted-foreground hover:text-primary transition-colors flex items-center gap-2 group"
                >
                  <Rocket className="h-4 w-4 text-primary/60 group-hover:text-primary group-hover:scale-110 transition-all shrink-0" />
                  <span>Theme Generator</span>
                </Link>
              </li>
              <li>
                <Link 
                  href="/#showcase" 
                  className="text-muted-foreground hover:text-primary transition-colors flex items-center gap-2 group"
                >
                  <Sparkles className="h-4 w-4 text-primary/60 group-hover:text-primary group-hover:scale-110 transition-all shrink-0" />
                  <span>Features</span>
                </Link>
              </li>
              <li>
                <Link 
                  href="/#showcase" 
                  className="text-muted-foreground hover:text-primary transition-colors flex items-center gap-2 group"
                >
                  <Code className="h-4 w-4 text-primary/60 group-hover:text-primary group-hover:scale-110 transition-all shrink-0" />
                  <span>Export Formats</span>
                </Link>
              </li>
            </ul>
          </motion.div>
          
          {/* Resources Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="space-y-3"
          >
            <h4 className="font-semibold font-heading text-base mb-4">Resources</h4>
            <ul className="space-y-3 text-sm">
              <li>
                <Link 
                  href="/#how-it-works" 
                  className="text-muted-foreground hover:text-primary transition-colors flex items-center gap-2 group"
                >
                  <Zap className="h-4 w-4 text-primary/60 group-hover:text-primary group-hover:scale-110 transition-all shrink-0" />
                  <span>How It Works</span>
                </Link>
              </li>
              <li>
                <Link 
                  href="/#showcase" 
                  className="text-muted-foreground hover:text-primary transition-colors flex items-center gap-2 group"
                >
                  <Download className="h-4 w-4 text-primary/60 group-hover:text-primary group-hover:scale-110 transition-all shrink-0" />
                  <span>Design Tokens</span>
                </Link>
              </li>
              <li>
                <Link 
                  href="/#get-started" 
                  className="text-muted-foreground hover:text-primary transition-colors flex items-center gap-2 group"
                >
                  <Rocket className="h-4 w-4 text-primary/60 group-hover:text-primary group-hover:scale-110 transition-all shrink-0" />
                  <span>Get Started</span>
                </Link>
              </li>
            </ul>
          </motion.div>
          
          {/* Export Formats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="space-y-3"
          >
            <h4 className="font-semibold font-heading text-base mb-4">Export Formats</h4>
            <ul className="space-y-3 text-sm">
              <li className="text-muted-foreground flex items-center gap-2">
                <Code className="h-4 w-4 text-primary" />
                <span>Tailwind CSS</span>
              </li>
              <li className="text-muted-foreground flex items-center gap-2">
                <Code className="h-4 w-4 text-primary" />
                <span>CSS</span>
              </li>
              <li className="text-muted-foreground flex items-center gap-2">
                <Code className="h-4 w-4 text-primary" />
                <span>SCSS / SASS</span>
              </li>
              <li className="text-muted-foreground flex items-center gap-2">
                <Code className="h-4 w-4 text-primary" />
                <span>JSON</span>
              </li>
            </ul>
          </motion.div>
        </div>
        
        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="border-t pt-8 flex flex-col sm:flex-row items-center justify-between gap-4"
        >
          <p className="text-sm text-muted-foreground text-center sm:text-left">
            © {new Date().getFullYear()} StyloFront Theme Generator. Built with ❤️ by StyloFront.
          </p>
          <div className="flex items-center gap-6 text-sm">
            <Link 
              href="/about" 
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              About
            </Link>
            <Link 
              href="/privacy" 
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              Privacy
            </Link>
            <Link 
              href="/terms" 
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              Terms
            </Link>
          </div>
        </motion.div>
      </div>
    </footer>
  )
}
