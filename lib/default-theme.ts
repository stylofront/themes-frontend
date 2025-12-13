import { Theme } from './types'

export const defaultTheme: Theme = {
  name: "Midnight Blue",
  baseTokens: {
    spacing: [
      { name: "xs", value: "4px" },
      { name: "sm", value: "8px" },
      { name: "md", value: "12px" },
      { name: "lg", value: "16px" },
      { name: "xl", value: "24px" },
      { name: "2xl", value: "32px" },
    ],
    radius: [
      { name: "none", value: "0px" },
      { name: "sm", value: "4px" },
      { name: "md", value: "8px" },
      { name: "lg", value: "12px" },
      { name: "xl", value: "16px" },
      { name: "full", value: "9999px" },
    ],
    borderWidth: [
      { name: "thin", value: "1px" },
      { name: "thick", value: "2px" },
    ],
    typography: {
      fontSizes: [
        { name: "xs", value: "12px" },
        { name: "sm", value: "14px" },
        { name: "md", value: "16px" },
        { name: "lg", value: "18px" },
        { name: "xl", value: "20px" },
        { name: "2xl", value: "24px" },
        { name: "3xl", value: "30px" },
      ],
      lineHeights: [
        { name: "tight", value: "1.2" },
        { name: "normal", value: "1.5" },
        { name: "relaxed", value: "1.75" },
      ],
      fontWeights: [
        { name: "regular", value: "400" },
        { name: "medium", value: "500" },
        { name: "semibold", value: "600" },
        { name: "bold", value: "700" },
      ],
    },
  },
  colors: {
    light: {
      primary: "#3b82f6", // Blue
      primaryFg: "#ffffff",
      secondary: "#6366f1", // Indigo
      secondaryFg: "#ffffff",
      background: "#ffffff",
      surface: "#f8fafc", // Slate 50
      text: "#0f172a", // Slate 900
      mutedText: "#64748b", // Slate 500
      border: "#e2e8f0", // Slate 200
      success: "#22c55e", // Green 500
      warning: "#f59e0b", // Amber 500
      error: "#ef4444", // Red 500
      custom: [],
    },
    dark: {
      primary: "#60a5fa", // Blue 400
      primaryFg: "#0f172a",
      secondary: "#818cf8", // Indigo 400
      secondaryFg: "#0f172a",
      background: "#0f172a", // Slate 900
      surface: "#1e293b", // Slate 800
      text: "#f1f5f9", // Slate 100
      mutedText: "#94a3b8", // Slate 400
      border: "#334155", // Slate 700
      success: "#4ade80", // Green 400
      warning: "#fbbf24", // Amber 400
      error: "#f87171", // Red 400
      custom: [],
    },
  },
  shadows: {
    default: [
      { name: "xs", value: "0 1px 2px rgba(0,0,0,0.05)" },
      { name: "sm", value: "0 2px 4px rgba(0,0,0,0.08)" },
      { name: "md", value: "0 4px 8px rgba(0,0,0,0.12)" },
      { name: "lg", value: "0 8px 16px rgba(0,0,0,0.16)" },
    ],
    custom: [],
  },
  fonts: {
    sans: {
      name: "Inter",
      importUrl: "https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap",
      weights: ["400", "500", "600", "700"],
    },
    mono: {
      name: "JetBrains Mono",
      importUrl: "https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;500;600;700&display=swap",
      weights: ["400", "500", "600", "700"],
    },
  },
}

