'use client';

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Palette, Code, Clock, Copy, RefreshCw, AlertTriangle } from "lucide-react";

const issues = [
  {
    title: "Manual color setup",
    description: "Copy-paste color tokens into every new project. No consistency across projects.",
    Icon: Palette,
    badge: "Colors",
    stat: "12 tokens",
    statLabel: "rewritten weekly",
    impact: "Palette drift",
    tag: "Duplicate work",
    iconColor: "text-destructive",
    bgColor: "bg-destructive/10",
    borderColor: "border-destructive/30",
  },
  {
    title: "CSS boilerplate chaos",
    description: "Every team builds the same Tailwind config from scratch. Hours wasted on setup.",
    Icon: Code,
    badge: "Utilities",
    stat: "480 lines",
    statLabel: "of boilerplate",
    impact: "Global overrides",
    tag: "Collision risk",
    iconColor: "text-destructive",
    bgColor: "bg-destructive/10",
    borderColor: "border-destructive/30",
  },
  {
    title: "No theme preview",
    description: "Can't see how your theme looks until you export and test. Trial and error.",
    Icon: AlertTriangle,
    badge: "Preview",
    stat: "0 preview",
    statLabel: "before export",
    impact: "Guess work",
    tag: "Wasted time",
    iconColor: "text-destructive",
    bgColor: "bg-destructive/10",
    borderColor: "border-destructive/30",
  },
  {
    title: "Export format limits",
    description: "Stuck with one format. Need CSS? SCSS? JSON? You're out of luck.",
    Icon: Copy,
    badge: "Export",
    stat: "1 format",
    statLabel: "per tool",
    impact: "Manual conversion",
    tag: "Limited options",
    iconColor: "text-destructive",
    bgColor: "bg-destructive/10",
    borderColor: "border-destructive/30",
  },
  {
    title: "No dark mode support",
    description: "Build themes for light mode only. Dark mode requires separate work.",
    Icon: RefreshCw,
    badge: "Modes",
    stat: "1 mode",
    statLabel: "per theme",
    impact: "Double work",
    tag: "Missing feature",
    iconColor: "text-destructive",
    bgColor: "bg-destructive/10",
    borderColor: "border-destructive/30",
  },
  {
    title: "Time wasted",
    description: "Hours burned before anyone ships a single screen. Setup takes forever.",
    Icon: Clock,
    badge: "Time",
    stat: "18 hrs",
    statLabel: "lost monthly",
    impact: "Ship slower",
    tag: "Blocked teams",
    iconColor: "text-destructive",
    bgColor: "bg-destructive/10",
    borderColor: "border-destructive/30",
  },
];

export function Problems() {
  return (
    <section id="problems" className="py-16 sm:py-20 md:py-32 bg-muted/30">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center mb-16">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-destructive/30 bg-destructive/10 px-4 py-2">
            <AlertTriangle className="h-4 w-4 text-destructive" />
            <span className="text-sm font-medium text-destructive">Real Problems</span>
          </div>
          <h2 className="text-3xl font-bold font-heading tracking-tight sm:text-4xl mb-4">
            Why building themes still hurts?
          </h2>
          <p className="text-lg text-muted-foreground">
            Developers waste hours doing the same repetitive theme setup again and again.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {issues.map((issue) => {
            const Icon = issue.Icon;
            return (
              <Card key={issue.title} className="border-2 h-full flex flex-col hover:shadow-lg transition-shadow border-destructive/30 bg-card">
                <CardHeader className="pb-3">
                  <div className="flex items-start justify-between mb-4">
                    <div className={`flex h-12 w-12 items-center justify-center rounded-lg ${issue.bgColor}`}>
                      <Icon className={`h-6 w-6 ${issue.iconColor}`} />
                    </div>
                    <Badge variant="destructive" className="text-xs">
                      {issue.badge}
                    </Badge>
                  </div>
                  <CardTitle className="text-lg">{issue.title}</CardTitle>
                </CardHeader>
                <CardContent className="flex-1 pt-0 space-y-4">
                  <CardDescription className="text-base leading-relaxed">
                    {issue.description}
                  </CardDescription>
                  
                  <div className="pt-4 border-t border-border space-y-3">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-2xl font-bold text-foreground">{issue.stat}</p>
                        <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground mt-1">
                          {issue.statLabel}
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex items-center justify-between text-xs pt-2">
                      <span className="text-destructive font-semibold">{issue.impact}</span>
                      <Badge variant="outline" className="text-[10px] uppercase tracking-[0.3em] border-destructive/30 text-destructive">
                        {issue.tag}
                      </Badge>
                    </div>
                  </div>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  );
}

