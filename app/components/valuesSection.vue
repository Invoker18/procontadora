<script setup lang="ts">
import { ref } from 'vue'

// Tracks cards that are persistently flipped via click
const flippedCards = ref<Record<string, boolean>>({})

const toggleCard = (title: string) => {
  flippedCards.value[title] = !flippedCards.value[title]
}

const values = [
  {
    label: 'T1',
    title: 'Transparencia',
    description:
      'Analizamos la realidad cruda de tu negocio para corregir fallas antes de que se conviertan en crisis.',
    icon: 'i-ph:eye',
    backTitle: 'Compromiso T1',
    backDescription:
      'Te hablamos con claridad quirúrgica: analizamos la realidad cruda de tu negocio para corregir fallas antes de que se conviertan en crisis.',
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
      'Exigimos estructura y rigor administrativo porque nuestro despacho opera con la misma precisión médica que tu equipo de especialistas.',
    backSubtitle: 'Ejemplo y Disciplina'
  },
  {
    label: 'T3',
    title: 'Tenacidad',
    description: 'Nos involucramos en tu operación hasta consolidar el cambio y la rentabilidad.',
    icon: 'i-mingcute:flash-circle-line',
    backTitle: 'Compromiso T3',
    backDescription:
      'No enviamos reportes pasivos por correo: nos involucramos en tu operación e insistimos hasta consolidar el cambio y la rentabilidad.',
    backSubtitle: 'Resultados Tangibles'
  }
]
</script>

<template>
  <section id="las-3t" class="bg-[#F8F4EA]/50 py-20 md:py-28">
    <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <!-- Header -->
      <div class="flex flex-col justify-between gap-4 md:flex-row md:items-end">
        <div class="flex flex-col gap-1.5">
          <p class="text-dorado-500 text-xs font-bold tracking-widest uppercase">
            Código de ética inquebrantable
          </p>
          <h2 class="text-vino-900 font-serif text-3xl font-bold tracking-tight md:text-4xl">
            Las 3T de PRO Contadora
          </h2>
        </div>
        <p class="text-marfil-700 max-w-sm text-sm leading-relaxed">
          Nuestros tres valores rectores. Haz hover o clic para revelar nuestro compromiso directo
          con tu práctica.
        </p>
      </div>

      <!-- Grid -->
      <div class="mt-12 grid gap-6 md:grid-cols-3">
        <article
          v-for="value in values"
          :key="value.title"
          :aria-pressed="!!flippedCards[value.title]"
          class="group cursor-pointer perspective-[1200px]"
          role="button"
          tabindex="0"
          @click="toggleCard(value.title)"
          @keydown.enter="toggleCard(value.title)"
          @keydown.space.prevent="toggleCard(value.title)"
        >
          <!-- 3D Card Inner Container -->
          <div
            :class="[
              'relative grid h-full w-full items-stretch rounded-xl transition-all duration-700 ease-[cubic-bezier(0.34,1.3,0.64,1)] transform-3d group-hover:scale-[1.02] group-hover:transform-[rotateY(180deg)] group-hover:shadow-2xl',
              { 'scale-[1.01] transform-[rotateY(180deg)] shadow-xl': flippedCards[value.title] }
            ]"
          >
            <!-- FRONT SIDE -->
            <div
              class="border-dorado-400/40 bg-marfil-50 group-hover:border-dorado-400/70 col-start-1 row-start-1 flex flex-col justify-between rounded-xl border p-7 shadow-sm transition-colors duration-300 [-webkit-backface-visibility:hidden] backface-hidden"
            >
              <div>
                <div class="flex items-center justify-between gap-3">
                  <div
                    class="text-vino-900 bg-dorado-200/80 border-dorado-400/30 grid size-11 shrink-0 place-content-center rounded-full border font-serif text-base font-bold shadow-inner"
                  >
                    {{ value.label }}
                  </div>
                  <div
                    class="from-dorado-400/40 via-dorado-400/20 h-px w-full bg-gradient-to-r to-transparent"
                  ></div>
                  <UIcon
                    :name="value.icon"
                    class="text-dorado-500 shrink-0 text-2xl transition-transform duration-300 group-hover:scale-110"
                  ></UIcon>
                </div>

                <h3 class="text-vino-900 mt-5 font-serif text-2xl font-bold tracking-tight">
                  {{ value.title }}
                </h3>
                <p class="text-marfil-700 mt-3 text-sm leading-relaxed">
                  {{ value.description }}
                </p>
              </div>

              <!-- Interactive Flip Indicator -->
              <div
                class="text-dorado-600 border-dorado-400/20 mt-8 flex items-center gap-1.5 border-t pt-4 text-[11px] font-bold tracking-wider uppercase"
              >
                <span>Ver compromiso</span>
                <span class="transition-transform duration-300 group-hover:translate-x-1">→</span>
              </div>
            </div>

            <!-- BACK SIDE -->
            <div
              class="border-dorado-400/50 text-marfil-50 from-vino-800 via-vino-900 to-vino-950 relative col-start-1 row-start-1 flex transform-[rotateY(180deg)] flex-col justify-between overflow-hidden rounded-xl border bg-linear-to-br p-7 shadow-2xl [-webkit-backface-visibility:hidden] backface-hidden"
            >
              <!-- Ambient Subtle Gold Light Glow -->
              <div
                class="bg-dorado-400/10 pointer-events-none absolute -top-12 -right-12 h-32 w-32 rounded-full blur-2xl"
              ></div>

              <div>
                <div class="mb-4 flex items-center justify-between gap-2">
                  <h3
                    class="text-dorado-400 border-dorado-400/30 border-b pb-1 text-xs font-bold tracking-widest uppercase"
                  >
                    {{ value.backTitle }}
                  </h3>
                  <UIcon name="i-ph:quotes-fill" class="text-dorado-400/40 text-2xl"></UIcon>
                </div>

                <p class="text-marfil-100 font-serif text-sm leading-relaxed italic">
                  "{{ value.backDescription }}"
                </p>
              </div>

              <div
                class="border-dorado-400/20 mt-6 flex items-center justify-between border-t pt-4"
              >
                <p class="text-dorado-300/80 text-[11px] font-semibold tracking-wider uppercase">
                  {{ value.backSubtitle }}
                </p>
                <span class="text-dorado-400 text-xs">↩</span>
              </div>
            </div>
          </div>
        </article>
      </div>
    </div>
  </section>
</template>
