<template>
  <!-- Contenedor fijo flotante con Glassmorphism -->
  <header
    class="pointer-events-none sticky top-0 right-0 left-0 z-50 flex justify-center transition-all duration-500 ease-in-out"
    :class="[isScrolled ? 'px-4 pt-4 sm:px-6' : 'px-0 pt-0']"
  >
    <UHeader
      class="pointer-events-auto w-full border transition-all duration-500 ease-in-out"
      :class="[
        isScrolled
          ? 'bg-champagne-100/50 border-dorado-400/40 shadow-vino-950/10 h-20 max-w-6xl rounded-2xl bg-blend-color-dodge shadow-xl backdrop-blur-2xl sm:rounded-full'
          : 'bg-champagne-100/80 border-dorado-400/30 h-22 max-w-full rounded-none border-x-0 border-t-0 border-b shadow-none backdrop-blur-md'
      ]"
      :ui="{
        root: 'h-full border-0',
        header: 'bg-champagne-100 h-20 px-4 sm:px-8',
        body: 'bg-champagne-100 h-full'
      }"
    >
      <template #title>
        <NuxtLink to="/" class="group block shrink-0">
          <img
            src="/images/logo.png"
            alt="PRO Contadora"
            class="mb-2 w-auto object-contain transition-all duration-300"
            :class="[isScrolled ? 'h-11 md:h-10' : 'h-12']"
          />
        </NuxtLink>
      </template>

      <!-- Menú con animación de línea dorada en hover -->
      <!-- En el UNavigationMenu principal -->
      <UNavigationMenu
        highlight
        variant="link"
        arrow
        :items="items"
        class="border-dorado-400"
        :ui="{
          arrow: 'bg-champagne-100/95 border-dorado-400',
          // Removed 'transform-gpu', added 'antialiased' and 'backface-hidden'
          link: 'text-vino-950 hover:text-rojo-950 data-[state=open]:text-rojo-950 font-semibold antialiased transition-transform duration-300 ease-out backface-hidden hover:-translate-y-px',
          childLink: 'hover:bg-champagne-200 rounded',
          childLinkIcon: 'text-vino-950',
          viewport: 'bg-champagne-100 ring-dorado-400 ring-2'
        }"
      />

      <template #right>
        <UButton
          :to="cta.href"
          :size="isScrolled ? 'sm' : 'md'"
          trailing-icon="i-lucide-arrow-right"
          class="bg-rojo-950 hover:bg-rojo-900 text-marfil-50 hidden rounded-lg px-5 py-2.5 font-semibold shadow-xs transition-all duration-300 ease-linear hover:scale-105 active:scale-95 md:flex"
          :ui="{
            trailingIcon: 'text-dorado-400'
          }"
        >
          {{ cta.label }}
        </UButton>
      </template>

      <template #body>
        <UNavigationMenu
          :items="items"
          orientation="vertical"
          :ui="{
            link: 'hover:before:bg-champagne-200 text-vino-950 hover:text-rojo-950 p-3',
            childList: 'bg-champagne-100/95 border-dorado-400 p-2',
            childLink: 'text-vino-950 hover:text-rojo-950',
            childLinkIcon: 'text-vino-950 hover:text-rojo-950',
            linkLeadingIcon: 'text-rojo-950 group-hover:text-rojo-950'
          }"
        />
      </template>
    </UHeader>
  </header>
</template>

<script lang="ts" setup>
import type { NavigationMenuItem } from '@nuxt/ui'

const isScrolled = ref(false)

const handleScroll = () => {
  isScrolled.value = window.scrollY > 20
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll, { passive: true })
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})

// Estructura de items con submenús (children) para UNavigationMenu
const items = ref<NavigationMenuItem[]>([
  {
    label: 'Especialidades',
    to: '#especialidades',
    children: [
      {
        label: 'Clínicas y Hospitales',
        description: 'Gestión contable y financiera para centros médicos.',
        to: '#clinicas',
        icon: 'i-heroicons-building-office-2'
      },
      {
        label: 'Medicina Veterinaria',
        description: 'Control contable especializado para clínicas veterinarias.',
        to: '#veterinaria',
        icon: 'i-heroicons-heart'
      },
      {
        label: 'Laboratorios y Bancos de Sangre',
        description: 'Cumplimiento normativo y fiscal en el sector diagnóstico.',
        to: '#laboratorios',
        icon: 'i-heroicons-beaker'
      }
    ]
  },
  {
    label: 'Método PRO',
    to: '#metodo-pro'
  },
  {
    label: 'Las 3T',
    to: '#las-3t'
  },
  {
    label: 'Servicios',
    to: '#servicios',
    children: [
      {
        label: 'Auditoría Clínica',
        to: '#auditoria',
        icon: 'i-heroicons-clipboard-document-check'
      },
      {
        label: 'Planeación Fiscal',
        to: '#planeacion-fiscal',
        icon: 'i-heroicons-calculator'
      }
    ]
  },
  {
    label: 'Marisela Sánchez',
    to: '#nosotros'
  }
])

const cta = { label: 'Diagnóstico Financiero', href: '#contacto' }
</script>
