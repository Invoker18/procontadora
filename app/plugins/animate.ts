// plugins/animate.ts
import { useIntersectionObserver } from '@vueuse/core'
import type { DirectiveBinding } from 'vue'

export type AnimationType =
  'fade-up' | 'fade-down' | 'fade-left' | 'fade-right' | 'fade' | 'zoom-in' | 'zoom-out' | 'flip-up'

interface AnimateBindingValue {
  delay?: number
  duration?: number
  threshold?: number
}

export default defineNuxtPlugin((nuxtApp) => {
  let lastScrollY = 0

  // Track scroll direction globally on the window
  if (import.meta.client) {
    window.addEventListener(
      'scroll',
      () => {
        lastScrollY = window.scrollY
      },
      { passive: true }
    )
  }

  nuxtApp.vueApp.directive('animate', {
    mounted(el: HTMLElement, binding: DirectiveBinding<AnimateBindingValue | undefined>) {
      el.style.transitionProperty = 'all'
      el.style.transitionTimingFunction = 'cubic-bezier(0.16, 1, 0.3, 1)'

      const duration = binding.value?.duration ?? 700
      el.style.transitionDuration = `${duration}ms`

      const delay = binding.value?.delay ?? 0
      if (delay) {
        el.style.transitionDelay = `${delay}ms`
      }

      const threshold = binding.value?.threshold ?? 0.15
      const animationType = (binding.arg as AnimationType) || 'fade-up'

      const getAnimationClasses = (type: AnimationType): string[] => {
        switch (type) {
          case 'fade-up':
            return ['opacity-0', 'translate-y-8']
          case 'fade-down':
            return ['opacity-0', '-translate-y-8']
          case 'fade-left':
            return ['opacity-0', 'translate-x-12']
          case 'fade-right':
            return ['opacity-0', '-translate-x-12']
          case 'zoom-in':
            return ['opacity-0', 'scale-90']
          case 'zoom-out':
            return ['opacity-0', 'scale-105']
          case 'flip-up':
            return ['opacity-0', 'translate-y-6', 'rotate-3']
          case 'fade':
          default:
            return ['opacity-0']
        }
      }

      const hiddenClasses = getAnimationClasses(animationType)
      const visibleClasses = [
        'opacity-100',
        'translate-y-0',
        'translate-x-0',
        'scale-100',
        'rotate-0'
      ]

      const applyHiddenState = () => {
        el.classList.add(...hiddenClasses)
        el.classList.remove(...visibleClasses)
      }

      const applyVisibleState = () => {
        el.classList.remove(...hiddenClasses)
        el.classList.add(...visibleClasses)
      }

      // Initial state: hidden
      applyHiddenState()

      useIntersectionObserver(
        el,
        (entries) => {
          const entry = entries[0]
          if (!entry) return

          const currentScrollY = window.scrollY
          const isScrollingDown = currentScrollY > lastScrollY

          if (entry.isIntersecting) {
            if (isScrollingDown) {
              // Trigger entry animation ONLY when scrolling down into the view
              applyVisibleState()
            } else {
              // If entering from the top while scrolling UP, make sure it's visible without re-playing entrance lag
              applyVisibleState()
            }
          } else {
            // Element is no longer visible in viewport
            const isBelowViewport = entry.boundingClientRect.top > 0

            // ONLY reset to hidden when element drops off the BOTTOM of the screen
            // (So it is primed to animate again next time user scrolls DOWN)
            if (isBelowViewport) {
              applyHiddenState()
            }
          }
        },
        { threshold }
      )
    }
  })
})
