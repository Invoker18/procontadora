import type {} from 'gsap'
import type { DirectiveBinding } from 'vue'

export type AnimationType =
  | 'fade-up'
  | 'fade-down'
  | 'fade-left'
  | 'fade-right'
  | 'fade'
  | 'zoom'
  | 'zoom-in'
  | 'zoom-out'
  | 'flip-up'

interface AnimateBindingValue {
  delay?: number
  duration?: number
  threshold?: number
}

interface AnimationState {
  element: HTMLElement
  type: AnimationType
  delay: number
  duration: number
  opacity: string
  opacityPriority: string
  threshold: number
  tween?: gsap.core.Tween
  onFocus: () => void
}

const initialStates: Record<AnimationType, gsap.TweenVars> = {
  'fade-up': { opacity: 0, y: 28 },
  'fade-down': { opacity: 0, y: -28 },
  'fade-left': { opacity: 0, x: 32 },
  'fade-right': { opacity: 0, x: -32 },
  fade: { opacity: 0 },
  zoom: { opacity: 0, scale: 0.97 },
  'zoom-in': { opacity: 0, scale: 0.97 },
  'zoom-out': { opacity: 0, scale: 1.03 },
  'flip-up': { opacity: 0, y: 24, rotation: 2 }
}

export default defineNuxtPlugin((nuxtApp) => {
  if (import.meta.server) {
    nuxtApp.vueApp.directive('animate', { getSSRProps: () => ({}) })
    return
  }

  if (!('IntersectionObserver' in window)) {
    nuxtApp.vueApp.directive('animate', {})
    return
  }

  const motion = window.matchMedia('(prefers-reduced-motion: reduce)')
  const states = new Map<HTMLElement, AnimationState>()
  const observers = new Map<number, IntersectionObserver>()
  let gsapPromise: Promise<typeof import('gsap').gsap | null> | undefined
  let loadFailed = false

  function restore(state: AnimationState) {
    if (!states.has(state.element)) return

    states.delete(state.element)
    preloadObserver.unobserve(state.element)
    const observer = observers.get(state.threshold)
    observer?.unobserve(state.element)
    if (observer && ![...states.values()].some((item) => item.threshold === state.threshold)) {
      observer.disconnect()
      observers.delete(state.threshold)
    }
    state.element.removeEventListener('focusin', state.onFocus)
    state.tween?.revert()

    if (state.opacity) {
      state.element.style.setProperty('opacity', state.opacity, state.opacityPriority)
    } else {
      state.element.style.removeProperty('opacity')
    }
  }

  function loadGsap() {
    gsapPromise ??= import('gsap')
      .then(({ gsap }) => gsap)
      .catch((error: unknown) => {
        console.error('[animate] Unable to load GSAP; revealing content.', error)
        loadFailed = true
        for (const state of states.values()) restore(state)
        return null
      })
    return gsapPromise
  }

  const preloadObserver = new IntersectionObserver(
    (entries) => {
      for (const entry of entries) {
        if (entry.isIntersecting) {
          preloadObserver.unobserve(entry.target)
          void loadGsap()
        }
      }
    },
    { rootMargin: '250px 0px' }
  )

  function getObserver(threshold: number) {
    let observer = observers.get(threshold)
    if (observer) return observer

    observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          const state = states.get(entry.target as HTMLElement)
          if (!state) continue

          if (entry.boundingClientRect.bottom <= 0) {
            restore(state)
          } else if (entry.isIntersecting && entry.intersectionRatio >= threshold) {
            observers.get(threshold)?.unobserve(state.element)
            preloadObserver.unobserve(state.element)
            void loadGsap().then((gsap) => {
              if (!states.has(state.element)) return
              if (!gsap) {
                restore(state)
                return
              }
              if (motion.matches) {
                restore(state)
                return
              }

              if (state.opacity) {
                state.element.style.setProperty('opacity', state.opacity, state.opacityPriority)
              } else {
                state.element.style.removeProperty('opacity')
              }
              state.tween = gsap.fromTo(state.element, initialStates[state.type], {
                opacity: 1,
                x: 0,
                y: 0,
                scale: 1,
                rotation: 0,
                duration: state.duration / 1000,
                delay: state.delay / 1000,
                ease: 'power3.out',
                onComplete: () => restore(state)
              })
            })
          }
        }
      },
      { threshold: [0, threshold] }
    )
    observers.set(threshold, observer)
    return observer
  }

  motion.addEventListener('change', (event) => {
    if (event.matches) {
      for (const state of states.values()) restore(state)
    }
  })

  window.addEventListener(
    'resize',
    () => {
      for (const state of states.values()) restore(state)
    },
    { passive: true }
  )

  nuxtApp.vueApp.directive('animate', {
    mounted(el: HTMLElement, binding: DirectiveBinding<AnimateBindingValue | undefined>) {
      if (motion.matches || loadFailed || el.getClientRects().length === 0) return

      const rect = el.getBoundingClientRect()
      if (rect.top < window.innerHeight) return

      const requestedThreshold = binding.value?.threshold ?? 0.15
      const maxVisibleRatio = Math.min(1, window.innerHeight / rect.height)
      const threshold = Math.max(0, Math.min(requestedThreshold, maxVisibleRatio * 0.8))
      const animation = binding.arg as AnimationType | undefined
      const state: AnimationState = {
        element: el,
        type: animation && animation in initialStates ? animation : 'fade-up',
        delay: Math.max(0, binding.value?.delay ?? 0),
        duration: Math.max(1, binding.value?.duration ?? 700),
        opacity: el.style.getPropertyValue('opacity'),
        opacityPriority: el.style.getPropertyPriority('opacity'),
        threshold,
        onFocus: () => restore(state)
      }

      states.set(el, state)
      el.addEventListener('focusin', state.onFocus)
      el.style.opacity = '0'
      preloadObserver.observe(el)
      getObserver(threshold).observe(el)
    },
    beforeUnmount(el: HTMLElement) {
      const state = states.get(el)
      if (state) restore(state)
    }
  })
})
