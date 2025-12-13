import { Theme } from './types'

const DRAFTS_KEY = 'themes-frontend-drafts'
const PREFS_KEY = 'themes-frontend-prefs'

export interface UserPreferences {
  theme: 'light' | 'dark' | 'system'
  panelSizes?: {
    editor?: number
    preview?: number
  }
}

export function saveThemeDraft(theme: Theme): void {
  try {
    const drafts = getThemeDrafts()
    const existingIndex = drafts.findIndex(d => d.name === theme.name)
    
    if (existingIndex >= 0) {
      drafts[existingIndex] = theme
    } else {
      drafts.push(theme)
    }
    
    localStorage.setItem(DRAFTS_KEY, JSON.stringify(drafts))
  } catch (error) {
    console.error('Failed to save theme draft:', error)
  }
}

export function getThemeDrafts(): Theme[] {
  try {
    const data = localStorage.getItem(DRAFTS_KEY)
    return data ? JSON.parse(data) : []
  } catch (error) {
    console.error('Failed to load theme drafts:', error)
    return []
  }
}

export function getLastTheme(): Theme | null {
  try {
    const drafts = getThemeDrafts()
    return drafts.length > 0 ? drafts[drafts.length - 1] : null
  } catch (error) {
    console.error('Failed to load last theme:', error)
    return null
  }
}

export function deleteThemeDraft(name: string): void {
  try {
    const drafts = getThemeDrafts()
    const filtered = drafts.filter(d => d.name !== name)
    localStorage.setItem(DRAFTS_KEY, JSON.stringify(filtered))
  } catch (error) {
    console.error('Failed to delete theme draft:', error)
  }
}

export function savePreferences(prefs: UserPreferences): void {
  try {
    localStorage.setItem(PREFS_KEY, JSON.stringify(prefs))
  } catch (error) {
    console.error('Failed to save preferences:', error)
  }
}

export function getPreferences(): UserPreferences {
  try {
    const data = localStorage.getItem(PREFS_KEY)
    return data ? JSON.parse(data) : { theme: 'system' }
  } catch (error) {
    console.error('Failed to load preferences:', error)
    return { theme: 'system' }
  }
}

