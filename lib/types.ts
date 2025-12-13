export interface Theme {
  name: string
  baseTokens: {
    spacing: Array<{ name: string; value: string }>
    radius: Array<{ name: string; value: string }>
    borderWidth: Array<{ name: string; value: string }>
    typography: {
      fontSizes: Array<{ name: string; value: string }>
      lineHeights: Array<{ name: string; value: string }>
      fontWeights: Array<{ name: string; value: string }>
    }
  }
  colors: {
    light: {
      primary: string
      primaryFg: string
      secondary: string
      secondaryFg: string
      background: string
      surface: string
      text: string
      mutedText: string
      border: string
      success: string
      warning: string
      error: string
      custom: Array<{ name: string; value: string }>
    }
    dark: {
      primary: string
      primaryFg: string
      secondary: string
      secondaryFg: string
      background: string
      surface: string
      text: string
      mutedText: string
      border: string
      success: string
      warning: string
      error: string
      custom: Array<{ name: string; value: string }>
    }
  }
  shadows: {
    default: Array<{ name: string; value: string }>
    custom: Array<{ name: string; value: string }>
  }
  fonts: {
    sans: { name: string; importUrl: string; weights?: string[] }
    mono: { name: string; importUrl: string; weights?: string[] }
  }
}

export interface GoogleFont {
  family: string
  variants: string[]
  subsets: string[]
  category: string
  files: Record<string, string>
}

export interface GoogleFontsResponse {
  items: GoogleFont[]
}

