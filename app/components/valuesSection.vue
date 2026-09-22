<script setup lang="ts">
import { ref } from 'vue'

const activeValue = ref<string | null>(null)

const values = [
  {
    label: 'T1',
    title: 'Transparencia',
    description:
      'Analizamos la realidad cruda de tu negocio para corregir fallas antes de que se conviertan en crisis.',
    icon: 'i-ph:eye',
    backTitle: 'Compromiso T1',
    backDescription:
      '"Te hablamos con claridad quirúrgica: analizamos la realidad cruda de tu negocio para corregir fallas antes de que se conviertan en crisis."',
    backSubtitle: 'Cero Maquillaje Financiero'
  },
  {
    label: 'T2',
    title: 'Total Congruencia',
    description:
      'Exigimos estructura y rigor administrativo porque nuestro despacho opera con la misma precisión.',
    icon: 'i-fa7-solid:scale-balanced',
    backTitle: 'Compromiso T2',
    backDescription:
      '"Exigimos estructura y rigor administrativo porque nuestro despacho opera con la misma precisión médica que tu equipo de especialistas."',
    backSubtitle: 'Ejemplo y Disciplina'
  },
  {
    label: 'T3',
    title: 'Tenacidad',
    description: 'Nos involucramos en tu operación hasta consolidar el cambio y la rentabilidad.',
    icon: 'i-mingcute:flash-circle-line',
    backTitle: 'Compromiso T3',
    backDescription:
      '"No enviamos reportes pasivos por correo: nos involucramos en tu operación e insistimos hasta consolidar el cambio y la rentabilidad."',
    backSubtitle: 'Resultados Tangibles'
  }
]
</script>

<template>
  <section id="las-3t" class="py-20 md:py-28">
    <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div class="flex flex-col justify-between gap-2 md:flex-row md:items-center">
        <div class="flex flex-col gap-1">
          <p class="text-dorado-500 text-sm font-bold tracking-[0.02em] uppercase">
            Código de ética inquebrantable
          </p>
          <h2 class="text-vino-900 font-serif text-3xl font-bold md:text-4xl">
            Las 3T de PRO Contadora
          </h2>
        </div>
        <p class="text-marfil-700 max-w-sm text-sm md:self-end">
          Nuestros tres valores rectores. Haz hover en cada tarjeta para conocer el compromiso
          directo con tu práctica.
        </p>
      </div>

      <div class="mt-10 grid gap-5 md:grid-cols-3">
        <article
          v-for="value in values"
          :key="value.title"
          :aria-pressed="activeValue === value.title"
          class="group cursor-pointer perspective-[1000px]"
          role="button"
          tabindex="0"
          @click="activeValue = activeValue === value.title ? null : value.title"
          @keydown.enter="activeValue = activeValue === value.title ? null : value.title"
          @keydown.space.prevent="activeValue = activeValue === value.title ? null : value.title"
        >
          <div
            :class="{ 'transform-[rotateY(180deg)]': activeValue === value.title }"
            class="grid w-full transition-transform duration-600 ease-in-out will-change-transform transform-3d group-hover:transform-[rotateY(180deg)]"
          >
            <div
              class="border-dorado-400/30 bg-marfil-50 col-start-1 row-start-1 rounded-lg border p-6 py-3 [-webkit-backface-visibility:hidden] backface-hidden"
            >
              <div class="flex items-center justify-between">
                <div
                  class="text-vino-900 bg-dorado-200 grid size-10 shrink-0 grow-0 place-content-center rounded-full text-sm font-bold"
                >
                  {{ value.label }}
                </div>
                <UIcon :name="value.icon" class="text-dorado-400 text-xl"></UIcon>
              </div>
              <h3 class="text-vino-900 mt-3 font-serif text-xl font-bold">{{ value.title }}</h3>
              <p class="text-marfil-700 mt-3 leading-6">
                {{ value.description }}
              </p>
            </div>
            <div
              class="border-dorado-400/30 bg-rojo-950 text-marfil-50 col-start-1 row-start-1 flex transform-[rotateY(180deg)] flex-col gap-6 rounded-lg border p-6 [-webkit-backface-visibility:hidden] backface-hidden"
            >
              <h3 class="text-dorado-400 font-bold uppercase">
                {{ value.backTitle }}
              </h3>
              <p class="text-marfil-50 text-sm italic">
                {{ value.backDescription }}
              </p>
              <p class="text-vino-50 mt-auto text-xs tracking-wider uppercase">
                {{ value.backSubtitle }}
              </p>
            </div>
          </div>
        </article>
      </div>
    </div>
  </section>
</template>
