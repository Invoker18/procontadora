<template>
  <!-- Contenedor fijo flotante con Glassmorphism -->
  <header
    class="pointer-events-none sticky top-0 right-0 left-0 z-50 flex justify-center transition-all duration-500 ease-in-out motion-reduce:transition-none"
    :class="[isScrolled ? 'px-4 pt-4 sm:px-6' : 'px-0 pt-0']"
  >
    <UHeader
      title="PRO Contadora"
      class="pointer-events-auto w-full border transition-all duration-500 ease-in-out motion-reduce:transition-none"
      :class="[
        isScrolled
          ? 'bg-marfil-50/95 border-champagne-300 shadow-vino-950/10 h-20 max-w-6xl rounded-2xl shadow-lg backdrop-blur-xl sm:rounded-full'
          : 'bg-marfil-50/95 border-champagne-200 h-22 max-w-full rounded-none border-x-0 border-t-0 border-b shadow-none backdrop-blur-md'
      ]"
      :ui="{
        root: 'h-full border-0',
        header: 'h-20 bg-transparent px-4 sm:px-8',
        body: 'bg-marfil-50 h-full'
      }"
    >
      <template #title>
        <img
          src="/images/logo.png"
          alt="PRO Contadora"
          width="2211"
          height="574"
          class="mb-2 w-auto object-contain transition-all duration-300 motion-reduce:transition-none"
          :class="[isScrolled ? 'h-11 md:h-10' : 'h-12']"
          @click.prevent="scrollToTop"
        />
      </template>

      <!-- Menú con animación de línea dorada en hover -->
      <!-- En el UNavigationMenu principal -->
      <UNavigationMenu
        highlight
        highlight-color="neutral"
        variant="link"
        arrow
        :items="items"
        :ui="{
          arrow: 'border-champagne-300 bg-marfil-50',
          link: 'text-vino-900 hover:text-vino-700 data-[state=open]:text-vino-700 data-active:after:bg-dorado-600 font-semibold antialiased transition-transform duration-200 ease-out hover:-translate-y-px motion-reduce:transition-none motion-reduce:hover:transform-none',
          childLink:
            'text-vino-900 hover:bg-champagne-100 data-active:bg-champagne-100 rounded-md',
          childLinkDescription: 'text-marfil-700 line-clamp-3 overflow-hidden',
          childLinkIcon: 'text-dorado-700',
          viewport: 'border-champagne-200 bg-marfil-50 ring-1 ring-vino-950/5 shadow-lg'
        }"
      />

      <template #right>
        <UButton
          :to="cta.href"
          :size="isScrolled ? 'sm' : 'md'"
          trailing-icon="i-lucide-arrow-right"
          class="bg-vino-900 hover:bg-vino-700 text-marfil-50 hidden rounded-lg px-5 py-2.5 font-semibold shadow-sm transition-colors duration-200 motion-reduce:transition-none md:flex"
          :ui="{
            trailingIcon: 'text-champagne-200'
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
            link: 'hover:before:bg-champagne-100 text-vino-900 hover:text-vino-700 p-3',
            childList: 'border-champagne-200 bg-marfil-50 p-2',
            childLink: 'data-active:bg-champagne-100 text-vino-900 hover:text-vino-700',
            childLinkIcon: 'text-dorado-700',
            linkLeadingIcon: 'text-dorado-700 group-hover:text-vino-700'
          }"
        />
      </template>
    </UHeader>
  </header>
</template>

<script lang="ts" setup>
import type { NavigationMenuItem } from '@nuxt/ui'

const isScrolled = ref(false)
const route = useRoute()

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
const items = computed<NavigationMenuItem[]>(() => {
  const specialtiesActive = [
    '#especialidades',
    '#clinicas',
    '#veterinaria',
    '#laboratorios'
  ].includes(route.hash)
  const servicesActive = [
    '#servicios',
    '#diagnóstico',
    '#cumplimiento',
    '#operación',
    '#dirección'
  ].includes(route.hash)
  const toolsActive = route.path.startsWith('/calculadoras') || route.path === '/recursos'

  return [
    {
      label: 'Especialidades',
      to: '/#especialidades',
      active: specialtiesActive,
      class: specialtiesActive ? 'after:bg-dorado-400' : undefined,
      children: [
        {
          label: 'Clínicas y Hospitales',
          description: 'Gestión contable y financiera para centros médicos.',
          to: '/#especialidades',
          active: route.hash === '#clinicas',
          icon: 'i-heroicons-building-office-2'
        },
        {
          label: 'Medicina Veterinaria',
          description: 'Control contable especializado para clínicas veterinarias.',
          to: '/#especialidades',
          active: route.hash === '#veterinaria',
          icon: 'i-heroicons-heart'
        },
        {
          label: 'Laboratorios y Bancos de Sangre',
          description: 'Cumplimiento normativo y fiscal en el sector diagnóstico.',
          to: '/#especialidades',
          active: route.hash === '#laboratorios',
          icon: 'i-heroicons-beaker'
        }
      ]
    },
    {
      label: 'E3 PRO',
      to: '/#metodo-pro',
      active: route.hash === '#metodo-pro'
    },
    {
      label: 'Marisela Sánchez',
      to: '/#nosotros',
      active: route.hash === '#nosotros'
    },
    {
      label: 'Servicios',
      to: '/#servicios',
      active: servicesActive,
      class: servicesActive ? 'after:bg-dorado-400' : undefined,
      children: [
        {
          label: 'Auditoría y Detección de Fugas Financieras',
          icon: 'ph:list-magnifying-glass-bold',
          description:
            'Conciliación de cobranza estancada con aseguradoras, auditoría de admisiones y saneamiento exhaustivo de cuentas por cobrar.',
          to: '/#diagnóstico',
          active: route.hash === '#diagnóstico'
        },
        {
          label: 'Blindaje y Estrategia Fiscal en Salud',
          icon: 'ph:shield-check-bold',
          description:
            'Cumplimiento tributario legítimo para clínicas y consultorios, aprovechamiento de estímulos sanitarios y deducción óptima de equipamiento médico.',
          to: '/#cumplimiento',
          active: route.hash === '#cumplimiento'
        },
        {
          label: 'Control de Costos e Insumos Críticos',
          icon: 'ph:chart-bar-bold',
          description:
            'Erradicación de mermas invisibles en inventario, trazabilidad de anestésicos y material biológico de alto costo con costeo quirúrgico por hora.',
          to: '/#operación',
          active: route.hash === '#operación'
        },
        {
          label: 'Dirección Financiera Externa',
          icon: 'ph:user-circle-gear-bold',
          description:
            'Acompañamiento mensual en la toma de decisiones estratégicas, comités de socios, valuación de leasing médico y expansión de instalaciones.',
          to: '/#dirección',
          active: route.hash === '#dirección'
        }
      ]
    },
    {
      label: 'Herramientas',
      active: toolsActive,
      class: toolsActive ? 'after:bg-dorado-400' : undefined,
      children: [
        {
          label: 'Calculadoras',
          icon: 'ph:calculator-bold',
          description: 'Herramienta para realizar cálculos financieros específicos.',
          to: '/calculadoras',
          active: route.path.startsWith('/calculadoras')
        },
        {
          label: 'Recursos',
          icon: 'lucide:folder-down',
          description: 'Descarga recursos financieros.',
          to: '/recursos',
          active: route.path === '/recursos'
        }
      ]
    }
  ]
})

const cta = { label: 'Diagnóstico Financiero', href: '/#contacto' }

const router = useRouter()

const scrollToTop = async () => {
  // If we are already on the home page, just scroll smoothly
  if (route.path === '/') {
    window.scrollTo({ top: 0, behavior: 'smooth' })
    // Optional: clear the hash from the URL without triggering a page reload
    if (route.hash) {
      router.push({ path: '/' })
    }
  } else {
    // If we are on another page (like /calculadoras), navigate to home
    await router.push('/')
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }
}
</script>
