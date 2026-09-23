<template>
  <section
    id="especialidades"
    class="bg-vino-950 text-marfil-50 relative overflow-hidden py-20 md:py-28"
  >
    <div
      class="bg-dorado-500/10 pointer-events-none absolute -top-40 -right-40 h-125 w-125 rounded-full blur-3xl"
    ></div>

    <!-- Destello radial superior izquierdo (tono dorado/champagne muy suave) -->
    <div
      class="bg-vino-700/20 pointer-events-none absolute -bottom-40 -left-40 h-100 w-100 rounded-full blur-3xl"
    ></div>
    <div class="mx-auto max-w-7xl gap-3 px-4 sm:px-6 lg:px-8">
      <div class="flex w-[90%] flex-col gap-3 md:w-3/4">
        <p class="text-dorado-400 text-xs font-bold tracking-[0.15rem] uppercase">
          — Soluciones de nicho
        </p>
        <h3 class="font-serif text-4xl font-semibold">
          Entendemos la realidad donde se salvan vidas
        </h3>
        <p class="text-marfil-50/80 text-balance">
          Diseñamos soluciones directivas a la medida de la complejidad operativa de la medicina
          humana y veterinaria. Sin soluciones genéricas de oficina.
        </p>
      </div>
      <div
        class="divide-dorado-400/80 mt-10 grid grid-cols-1 gap-3 divide-y md:grid-cols-3 md:gap-6 md:divide-x md:divide-y-0"
      >
        <div
          v-for="(article, index) in articles"
          :key="article.id"
          class="flex flex-col px-6 pb-3 md:pl-0"
        >
          <div class="flex items-center justify-between py-4">
            <p class="text-dorado-500/60 font-serif text-4xl font-semibold">
              {{ `0${index + 1}` }}
            </p>
            <p
              class="text-dorado-200 bg-dorado-400/10 ring-dorado-400/30 rounded px-3 py-1 text-xs font-bold tracking-wider uppercase ring-1"
            >
              {{ article.category }}
            </p>
          </div>
          <div class="bg-dorado-400/20 h-px w-full"></div>

          <div class="space-y-3 py-4">
            <div class="gap-3 font-serif text-xl font-semibold text-balance">
              <UIcon
                :name="article.icon"
                class="text-dorado-400 mt-1 mr-1.5 shrink-0 align-text-top text-xl lg:mr-2.5"
              ></UIcon>
              <span>{{ article.title }}</span>
            </div>
            <p class="text-marfil-50/80 text-sm">
              {{ article.description }}
            </p>
          </div>
          <div class="bg-dorado-400/20 mt-auto h-px w-full"></div>
          <ul class="py-4">
            <li v-for="item in article.items" :key="item" class="flex items-center gap-3 py-1.5">
              <UIcon name="ph:seal-check-bold" class="text-dorado-400 shrink-0 text-lg"></UIcon>
              <p class="text-xs">{{ item }}</p>
            </li>
          </ul>
        </div>
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
