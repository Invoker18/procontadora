<template>
  <section id="servicios" class="py-20 md:py-28">
    <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <p class="text-dorado-500 text-sm font-bold tracking-[0.02em] uppercase">
        Servicios especializados
      </p>
      <h2 class="text-vino-900 mt-3 font-serif text-3xl font-bold md:text-4xl">
        Servicios financieros de precisión
      </h2>
      <div class="mt-10 grid gap-6 md:grid-cols-2">
        <article
          v-for="service in services"
          :key="service.title"
          class="bg-marfil-50 border-dorado-400/30 hover:ring-dorado-400/30 relative flex flex-col gap-3 overflow-hidden rounded-lg border p-6 transition-transform duration-300 ease-out hover:-translate-y-1 hover:ring-1"
        >
          <div class="flex items-center justify-between">
            <UButton
              size="xl"
              :icon="service.icon"
              class="bg-dorado-100 text-vino-900 hover:bg-inherit"
            ></UButton>
            <h5 class="bg-dorado-100 text-vino-800 rounded px-2 text-sm font-semibold uppercase">
              {{ service.subtitle }}
            </h5>
          </div>
          <h3 class="text-vino-900 font-serif text-xl font-bold">{{ service.title }}</h3>
          <p class="text-marfil-700">{{ service.description }}</p>
          <div class="bg-vino-500/10 h-px w-full"></div>
          <div class="flex items-center justify-between">
            <p class="text-vino-800 text-sm font-semibold">{{ service.cta }}</p>
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
      'Localizamos cuentas por cobrar extraviadas, discrepancias en farmacia y cobros no reportados.',
    cta: 'Saneamiento y flujo inmediato'
  },
  {
    title: 'Blindaje y Estrategia Fiscal en Salud',
    subtitle: 'Cumplimiento',
    icon: 'ph:shield-check-bold',
    description: 'Incentivos y deducciones legales para proteger tu operación y patrimonio.',
    cta: 'Cero multas, máxima deducción legal'
  },
  {
    title: 'Control de Costos e Insumos Críticos',
    subtitle: 'Operación',
    icon: 'ph:chart-bar-bold',
    description: 'Matrices de costeo y conteo cíclico para fármacos, biológicos y reactivos.',
    cta: 'Márgenes claros por quirófano y laboratorio'
  },
  {
    title: 'Dirección Financiera Externa',
    subtitle: 'Dirección',
    icon: 'ph:user-circle-gear-bold',
    description: 'Presupuestos, proyecciones y acompañamiento en comités directivos.',
    cta: 'Decisiones estratégicas con datos en mano'
  }
]
</script>
