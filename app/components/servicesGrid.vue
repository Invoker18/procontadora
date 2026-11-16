<template>
  <section
    id="servicios"
    aria-labelledby="servicios-title"
    class="bg-champagne-50/70 relative overflow-hidden py-20 md:py-28"
  >
    <div
      aria-hidden="true"
      class="border-dorado-400/20 pointer-events-none absolute -top-32 -right-32 size-80 rounded-full border"
    ></div>
    <div class="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div
        class="flex flex-col gap-5 md:flex-row md:items-end md:justify-between md:gap-12"
        v-animate:zoom="{ duration: 1200, delay: 300 }"
      >
        <div>
          <p
            class="text-dorado-700 flex items-center gap-3 text-xs font-bold tracking-[0.16em] uppercase"
          >
            <span class="bg-dorado-400 h-px w-8" aria-hidden="true"></span>
            Servicios especializados
          </p>
          <h2
            id="servicios-title"
            class="text-vino-900 mt-4 max-w-xl font-serif text-3xl leading-tight font-bold md:text-4xl"
          >
            Servicios financieros de precisión
          </h2>
        </div>
        <p class="text-marfil-700 max-w-sm text-sm leading-7 md:pb-1">
          Acompañamiento para comprender tus números y tomar decisiones con mayor claridad.
        </p>
      </div>
      <div class="mt-10 grid gap-4 md:mt-12 md:grid-cols-2 md:gap-6">
        <article
          v-for="(service, index) in services"
          :key="service.subtitle"
          :id="service.subtitle.toLowerCase()"
          v-animate:fade-down
          class="group border-champagne-200 hover:border-dorado-400/70 relative flex h-full flex-col overflow-hidden rounded-xl border bg-white p-6 shadow-sm transition-[border-color,box-shadow,translate] duration-300 ease-out hover:-translate-y-1 hover:shadow-xl motion-reduce:transition-none motion-reduce:hover:translate-y-0 sm:p-8"
        >
          <div
            aria-hidden="true"
            class="from-dorado-400 via-dorado-300 absolute inset-x-0 top-0 h-1 bg-linear-to-r to-transparent"
          ></div>
          <div class="flex items-start justify-between gap-4">
            <div
              class="bg-vino-900 text-dorado-300 flex size-14 shrink-0 items-center justify-center rounded-xl"
            >
              <UIcon :name="service.icon" class="size-7" aria-hidden="true" />
            </div>
            <span class="text-dorado-700/60 font-serif text-2xl" aria-hidden="true">
              0{{ index + 1 }}
            </span>
          </div>
          <div class="mt-6 flex flex-1 flex-col">
            <p class="text-dorado-700 text-xs font-bold tracking-[0.12em] uppercase">
              {{ service.subtitle }}
            </p>
            <h3 class="text-vino-900 mt-2 font-serif text-xl leading-snug font-bold lg:text-2xl">
              {{ service.title }}
            </h3>
            <p class="text-marfil-700 mt-3 max-w-lg text-sm leading-7">
              {{ service.description }}
            </p>
          </div>
          <div
            class="border-champagne-200 mt-7 flex flex-wrap items-center justify-between gap-x-4 gap-y-3 border-t pt-5"
          >
            <p class="text-marfil-700 text-sm font-medium">{{ service.cta }}</p>
            <!-- <NuxtLink
              to="/#contacto"
              :aria-label="`Consultar sobre ${service.title}`"
              class="text-vino-800 hover:text-vino-600 focus-visible:outline-vino-700 inline-flex items-center gap-2 rounded-sm text-sm font-bold focus-visible:outline-2 focus-visible:outline-offset-4"
            >
              Hablemos
              <UIcon
                name="i-lucide-arrow-up-right"
                class="size-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 motion-reduce:transform-none"
                aria-hidden="true"
              />
            </NuxtLink> -->
          </div>
        </article>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const services = [
  {
    title: 'Auditoría y Detección de Fugas Financieras',
    subtitle: 'Diagnóstico',
    icon: 'ph:list-magnifying-glass-bold',
    description:
      'Análisis de la información financiera y de las cuentas por cobrar para identificar oportunidades de mejora.',
    cta: 'Claridad en tus finanzas'
  },
  {
    title: 'Estrategia Fiscal para tu Negocio',
    subtitle: 'Cumplimiento',
    icon: 'ph:shield-check-bold',
    description:
      'Orientación sobre obligaciones fiscales y organización de la información necesaria para atenderlas.',
    cta: 'Cumplimiento y planeación'
  },
  {
    title: 'Control de Costos e Insumos Críticos',
    subtitle: 'Operación',
    icon: 'ph:chart-bar-bold',
    description:
      'Análisis de costos, inventario e insumos para comprender mejor la operación de tu negocio.',
    cta: 'Visibilidad de costos e inventario'
  },
  {
    title: 'Dirección Financiera Externa',
    subtitle: 'Dirección',
    icon: 'ph:user-circle-gear-bold',
    description:
      'Acompañamiento en decisiones estratégicas y revisión financiera para el desarrollo de tu negocio.',
    cta: 'Decisiones estratégicas con datos en mano'
  }
]
</script>
