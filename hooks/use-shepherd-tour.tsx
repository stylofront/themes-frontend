"use client"

import { useEffect, useRef } from 'react'
import Shepherd from 'shepherd.js'
import 'shepherd.js/dist/css/shepherd.css'
import '../app/shepherd-theme.css'

const TOUR_STORAGE_KEY = 'stylofront-tour-completed'

export function useShepherdTour() {
  const tourRef = useRef<any>(null)

  useEffect(() => {
    // Check if user has completed tour
    if (typeof window !== 'undefined' && localStorage.getItem(TOUR_STORAGE_KEY) === 'true') {
      return
    }

    // Create tour
    const tour = new Shepherd.Tour({
      useModalOverlay: true,
      defaultStepOptions: {
        cancelIcon: { enabled: true },
        classes: 'shepherd-theme-custom',
        scrollTo: { behavior: 'smooth', block: 'center' },
      },
    })

    // Define steps
    tour.addStep({
      id: 'welcome',
      title: '👋 Welcome to Theme Generator!',
      text: 'Let\'s take a quick tour of the main features. You can skip anytime by clicking the × button.',
      buttons: [
        {
          text: 'Skip Tour',
          classes: 'shepherd-button-secondary',
          action: () => {
            localStorage.setItem(TOUR_STORAGE_KEY, 'true')
            tour.cancel()
          },
        },
        {
          text: 'Start Tour',
          classes: 'shepherd-button-primary',
          action: tour.next,
        },
      ],
    })

    tour.addStep({
      id: 'editor-panel',
      title: '🎨 Theme Editor',
      text: 'This is your control center. Use the tabs to customize colors, shadows, spacing, radius, typography, and fonts for your design system.',
      attachTo: { element: '[data-tour-id="editor-panel"]', on: 'right' },
      buttons: [
        {
          text: 'Back',
          classes: 'shepherd-button-secondary',
          action: tour.back,
        },
        {
          text: 'Next',
          classes: 'shepherd-button-primary',
          action: tour.next,
        },
      ],
      when: {
        show: function() {
          const el = document.querySelector('[data-tour-id="editor-panel"]')
          if (!el) {
            console.warn('Editor panel not found, skipping to next step')
            tour.next()
          }
        }
      }
    })


    tour.addStep({
      id: 'preview-panel',
      title: '👁️ Live Preview',
      text: 'See your theme applied in real-time! The preview updates instantly as you make changes. Toggle between desktop/mobile views and light/dark modes.',
      attachTo: { element: '[data-tour-id="preview-panel"]', on: 'left' },
      buttons: [
        {
          text: 'Back',
          classes: 'shepherd-button-secondary',
          action: tour.back,
        },
        {
          text: 'Next',
          classes: 'shepherd-button-primary',
          action: tour.next,
        },
      ],
      when: {
        show: function() {
          const el = document.querySelector('[data-tour-id="preview-panel"]')
          if (!el) {
            console.warn('Preview panel not found, skipping to next step')
            tour.next()
          }
        }
      }
    })

    tour.addStep({
      id: 'preview-tabs',
      title: '🎯 Preview Tabs',
      text: 'Dive into different preview sections to see your theme tokens in action! ✨ Explore:\n\n**🎨 Colors:** Your vibrant palette on display.\n**📏 Spacing:** Get a feel for your margins and padding.\n**⭕ Radius:** Discover your border curves.\n**🧩 Components:** See your UI come alive with your theme.\n**💡 Shadows:** Observe the depth and nuance.\n**✍️ Typography:** Preview your font scales and styles.',
      attachTo: { element: '[data-tour-id="preview-tabs"]', on: 'bottom' },
      buttons: [
        {
          text: 'Back',
          classes: 'shepherd-button-secondary',
          action: tour.back,
        },
        {
          text: 'Next',
          classes: 'shepherd-button-primary',
          action: tour.next,
        },
      ],
      when: {
        show: function() {
          const el = document.querySelector('[data-tour-id="preview-tabs"]')
          if (!el) {
            console.warn('Preview tabs not found, skipping to next step')
            tour.next()
          }
        }
      }
    })

    tour.addStep({
      id: 'export',
      title: '💾 Export Your Theme',
      text: 'When you\'re happy with your theme, click Export to download it in various formats: CSS, SCSS, Sass, Tailwind CSS, or JSON.',
      attachTo: { element: '[data-tour-id="export-btn"]', on: 'bottom' },
      buttons: [
        {
          text: 'Back',
          classes: 'shepherd-button-secondary',
          action: tour.back,
        },
        {
          text: 'Next',
          classes: 'shepherd-button-primary',
          action: tour.next,
        },
      ],
      when: {
        show: function() {
          const el = document.querySelector('[data-tour-id="export-btn"]')
          if (!el) {
            console.warn('Export button not found, skipping to next step')
            tour.next()
          }
        }
      }
    })

    tour.addStep({
      id: 'complete',
      title: '🎉 You\'re All Set!',
      text: 'You now know the basics of the Theme Generator. Start creating your perfect design system. Happy theming! 🚀',
      buttons: [
        {
          text: 'Finish',
          classes: 'shepherd-button-primary',
          action: () => {
            localStorage.setItem(TOUR_STORAGE_KEY, 'true')
            tour.complete()
          },
        },
      ],
    })

    // Add progress counter to footer
    tour.on('show', () => {
      const currentStep = tour.getCurrentStep()
      if (currentStep) {
        const stepIndex = tour.steps.indexOf(currentStep)
        const footer = currentStep.getElement()?.querySelector('.shepherd-footer')
        
        if (footer) {
          let progress = footer.querySelector('.tour-progress')
          if (!progress) {
            progress = document.createElement('div')
            progress.className = 'tour-progress'
            footer.insertBefore(progress, footer.firstChild)
          }
          progress.textContent = `Step ${stepIndex + 1} of ${tour.steps.length}`
        }
      }
    })

    // Save on cancel
    tour.on('cancel', () => {
      localStorage.setItem(TOUR_STORAGE_KEY, 'true')
    })

    tourRef.current = tour

    // Auto-start after delay
    const timer = setTimeout(() => {
      tour.start()
    }, 1000)

    return () => {
      clearTimeout(timer)
      if (tourRef.current) {
        tourRef.current.complete()
      }
    }
  }, [])

  return tourRef.current
}
