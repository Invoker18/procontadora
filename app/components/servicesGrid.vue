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
          v-for="(service, index) in services"
          :key="index"
          class="border-dorado-400/30 hover:ring-dorado-400/30 relative flex flex-col gap-3 overflow-hidden rounded-lg border bg-white p-6 transition-all duration-300 ease-out hover:-translate-y-1 hover:shadow-lg hover:ring-1 lg:p-8"
        >
          <div class="flex items-center justify-between">
            <p class="text-dorado-400 font-serif text-2xl font-bold">0{{ index + 1 }}</p>

            <h5
              class="bg-dorado-100 text-dorado-600 rounded px-2 py-0.5 text-xs font-semibold uppercase"
            >
              {{ service.subtitle }}
            </h5>
          </div>
          <div class="bg-dorado-400/20 h-px w-full"></div>
          <div class="flex flex-1 flex-col justify-center gap-3 py-3">
            <h3 class="text-vino-900 font-serif text-xl font-bold lg:text-2xl">
              {{ service.title }}
            </h3>
            <p class="text-marfil-700 text-sm">{{ service.description }}</p>
          </div>
          <div class="bg-dorado-400/20 h-px w-full"></div>
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
      'Conciliación de cobranza estancada con aseguradoras, auditoría de admisiones y saneamiento exhaustivo de cuentas por cobrar.',
    cta: 'Saneamiento y flujo inmediato'
  },
  {
    title: 'Blindaje y Estrategia Fiscal en Salud',
    subtitle: 'Cumplimiento',
    icon: 'ph:shield-check-bold',
    description:
      'Cumplimiento tributario legítimo para clínicas y consultorios, aprovechamiento de estímulos sanitarios y deducción óptima de equipamiento médico.',
    cta: 'Cero multas, máxima deducción legal'
  },
  {
    title: 'Control de Costos e Insumos Críticos',
    subtitle: 'Operación',
    icon: 'ph:chart-bar-bold',
    description:
      'Erradicación de mermas invisibles en inventario, trazabilidad de anestésicos y material biológico de alto costo con costeo quirúrgico por hora.',
    cta: 'Márgenes claros por quirófano y laboratorio'
  },
  {
    title: 'Dirección Financiera Externa',
    subtitle: 'Dirección',
    icon: 'ph:user-circle-gear-bold',
    description:
      'Acompañamiento mensual en la toma de decisiones estratégicas, comités de socios, valuación de leasing médico y expansión de instalaciones.',
    cta: 'Decisiones estratégicas con datos en mano'
  }
]
</script>
