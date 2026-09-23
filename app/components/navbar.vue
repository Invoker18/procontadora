<!-- components/Navbar.vue -->
<script setup lang="ts">
const links = [
  { label: 'Especialidades', href: '#especialidades' },
  { label: 'Método PRO', href: '#metodo-pro' },
  { label: 'Las 3T', href: '#las-3t' },
  { label: 'Marisela Sánchez', href: '#nosotros' },
  { label: 'Servicios', href: '#servicios' },
  { label: 'Casos de Éxito', href: '#testimonios' }
]

const cta = { label: 'Diagnóstico Financiero', href: '#contacto' }

const isMobileOpen = ref(false)
const isScrolled = ref(false)

const handleScroll = () => {
  isScrolled.value = window.scrollY > 20
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>

<template>
  <header
    class="bg-marfil-50/80 border-dorado-400/30 sticky top-0 right-0 left-0 z-50 border-b backdrop-blur-sm transition-all duration-300"
  >
    <div
      class="mx-auto flex max-w-7xl items-center justify-between gap-3 px-4 py-3 sm:px-6 lg:px-8"
    >
      <NuxtLink to="/" class="group block shrink-0">
        <img
          src="/images/logo.png"
          alt="PRO Contadora"
          class="h-12 w-auto object-contain transition-opacity group-hover:opacity-80"
        />
      </NuxtLink>

      <!-- Links stay in Vue; their label, URL, and optional Tailwind class come from content/navigation.yml. -->
      <nav v-if="links.length" class="hidden lg:block" aria-label="Navegación principal">
        <ul class="flex items-center justify-center gap-8">
          <li v-for="link in links" :key="link.href">
            <NuxtLink
              :to="link.href"
              class="text-marfil-900 hover:text-rojo-950 after:bg-dorado-400 relative truncate pb-1 text-sm font-medium transition-colors after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:transition-[width] after:duration-300 hover:after:w-full"
            >
              {{ link.label }}
            </NuxtLink>
          </li>
        </ul>
      </nav>

      <!-- CTA Button -->
      <div
        class="ml-auto hidden w-fit items-center justify-center gap-4 text-balance md:flex lg:ml-0"
      >
        <UButton
          :to="cta.href"
          size="md"
          trailing-icon="i-lucide-arrow-right"
          class="bg-rojo-950 hover:bg-rojo-900 text-marfil-50 rounded-lg px-5 py-2.5 font-semibold shadow-xs transition-all duration-300 ease-linear hover:scale-105 active:scale-95"
          :ui="{
            trailingIcon: 'text-dorado-400'
          }"
        >
          {{ cta.label }}
        </UButton>
      </div>

      <!-- Mobile Button -->
      <UButton
        color="neutral"
        variant="ghost"
        class="text-marfil-900 hover:text-rojo-950 hover:bg-marfil-200 lg:hidden"
        :icon="isMobileOpen ? 'i-heroicons-x-mark' : 'i-heroicons-bars-3'"
        @click="isMobileOpen = !isMobileOpen"
        aria-label="Toggle navigation"
      />
    </div>

    <!-- Mobile Drawer -->
    <Transition
      enter-active-class="transition duration-200 ease-out"
      enter-from-class="opacity-0 -translate-y-2"
      enter-to-class="opacity-100 translate-y-0"
      leave-active-class="transition duration-150 ease-in"
      leave-from-class="opacity-100 translate-y-0"
      leave-to-class="opacity-0 -translate-y-2"
    >
      <div
        v-if="isMobileOpen && links.length"
        class="bg-marfil-50 border-marfil-200 space-y-4 border-b px-4 pt-3 pb-6 shadow-lg lg:hidden"
      >
        <nav aria-label="Navegación móvil">
          <ul class="flex flex-col gap-1 text-sm">
            <li v-for="link in links" :key="link.href">
              <NuxtLink
                :to="link.href"
                class="hover:bg-marfil-100 hover:text-rojo-950 block rounded-md px-3 py-2.5 font-medium transition-colors"
                @click="isMobileOpen = false"
              >
                {{ link.label }}
              </NuxtLink>
            </li>
          </ul>
        </nav>
      </div>
    </Transition>
  </header>
</template>
