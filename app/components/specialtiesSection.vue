<template>
  <section id="especialidades2" class="py-20 md:py-28">
    <div class="mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
      <p class="text-dorado-600 text-sm font-bold tracking-[0.02em] uppercase">
        Soluciones de nicho
      </p>
      <h2 class="text-vino-900 mx-auto mt-3 max-w-2xl font-serif text-3xl font-bold md:text-4xl">
        Entendemos la realidad donde se salvan vidas
      </h2>
      <h5 class="text-marfil-700 mt-3">
        Selecciona tu sector para ver el impacto concreto del modelo de contabilidad clínica y
        veterinaria.
      </h5>
      <div class="mt-10 grid gap-5 text-left md:grid-cols-3">
        <article
          v-for="article in articles"
          :key="article.id"
          class="border-dorado-400/30 bg-marfil-50 hover:ring-dorado-400/30 relative flex flex-col gap-6 overflow-hidden rounded-lg border p-6 transition-transform duration-300 ease-out hover:-translate-y-1 hover:ring-1"
        >
          <div class="flex items-center justify-between">
            <UButton
              size="xl"
              :icon="article.icon"
              class="bg-vino-50 text-vino-900 hover:bg-inherit"
            ></UButton>
            <p class="text-dorado-400 text-xs font-semibold uppercase">{{ article.category }}</p>
          </div>
          <div class="flex flex-col gap-1">
            <h3 class="text-vino-900 font-serif text-lg font-bold">{{ article.title }}</h3>
            <p class="text-marfil-700 text-sm leading-5">
              {{ article.description }}
            </p>
          </div>
          <div class="bg-dorado-400/30 mt-auto h-px w-full"></div>
          <div class="flex flex-col gap-2">
            <div
              v-for="item in article.items"
              :key="item"
              class="text-vino-900 flex items-center gap-2 text-xs font-semibold"
            >
              <UIcon name="i-lucide-circle-check"></UIcon>
              {{ item }}
            </div>
          </div>
        </article>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const articles = [
  {
    id: 1,
    category: 'Salud Humana',
    icon: 'i-lucide-lab:cross-square',
    title: 'Clínicas y Centros Médicos',
    description:
      'Control de convenios con aseguradoras, conciliación de honorarios quirúrgicos y auditoría diaria de cobranza ambulatoria.',
    items: [
      'Recuperación de cartera en aseguradoras (-65% retraso)',
      'Cálculo de punto de equilibrio por quirófano'
    ]
  },
  {
    id: 2,
    category: 'Veterinaria',
    icon: 'i-fa6-solid:paw',
    title: 'Hospitales y Clínicas Veterinarias',
    description:
      'Separación de márgenes entre hospitalización, quirófano, estética y farmacia de biológicos para erradicar pérdidas invisibles.',
    items: [
      'Blindaje de merma en vacunas e inventario crítico',
      'Rentabilidad real por tipo de consulta y procedimiento'
    ]
  },
  {
    id: 3,
    category: 'Laboratorio',
    icon: 'i-heroicons:beaker-20-solid',
    title: 'Laboratorios de Diagnóstico',
    description:
      'Costeo preciso de reactivos por prueba, evaluación financiera para arrendamiento (leasing) de analizadores automatizados.',
    items: [
      '12 años de experiencia directa en alta dirección',
      'Alineación fiscal específica para pruebas diagnósticas'
    ]
  }
]
</script>
