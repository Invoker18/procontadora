<template>
  <UHeader
    :ui="{
      root: 'bg-champagne-50/80 border-dorado-400/30 h-22 border-b backdrop-blur-sm transition-all duration-300',
      header: 'h-22',
      container: 'bg-champagne-50',
      toggle: 'text-vino-900'
    }"
  >
    <template #title>
      <NuxtLink to="/" class="group block shrink-0">
        <img
          src="/images/logo.png"
          alt="PRO Contadora"
          class="h-12 w-auto object-contain transition-opacity group-hover:opacity-80"
        />
      </NuxtLink>
    </template>

    <nav v-if="links.length" class="hidden lg:block" aria-label="Navegación principal">
      <ul class="flex items-center justify-center gap-4">
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

    <template #right>
      <UButton
        :to="cta.href"
        size="md"
        trailing-icon="i-lucide-arrow-right"
        class="bg-rojo-950 hover:bg-rojo-900 text-marfil-50 hidden rounded-lg px-5 py-2.5 font-semibold shadow-xs transition-all duration-300 ease-linear hover:scale-105 active:scale-95 md:flex"
        :ui="{
          trailingIcon: 'text-dorado-400'
        }"
      >
        {{ cta.label }}
      </UButton>
    </template>
  </UHeader>
</template>

<script lang="ts" setup>
const links = [
  { label: 'Especialidades', href: '#especialidades' },
  { label: 'Método PRO', href: '#metodo-pro' },
  { label: 'Las 3T', href: '#las-3t' },
  { label: 'Marisela Sánchez', href: '#nosotros' },
  { label: 'Servicios', href: '#servicios' }
  // { label: 'Casos de Éxito', href: '#testimonios' }
]

const cta = { label: 'Diagnóstico Financiero', href: '#contacto' }
</script>

<style></style>
