<template>
  <section id="metodo-pro" class="text-vino-900 py-20 md:py-28 md:pt-25">
    <div class="mx-auto max-w-6xl text-pretty">
      <!-- Header -->
      <div class="mx-auto mb-12 max-w-3xl text-center">
        <span class="text-dorado-400 text-xs font-bold tracking-widest uppercase">
          Metodología Exclusiva
        </span>
        <h2 class="mt-2 mb-4 font-serif text-3xl font-bold md:text-5xl">
          El Método PRO: Potencia · Reestructura · Optimiza
        </h2>
        <p class="text-vino-950/80 text-sm md:text-base">
          Un protocolo sistemático en 3 fases para pasar de la zozobra administrativa al control
          patrimonial absoluto.
        </p>
      </div>

      <!-- STEPPER CONTAINER -->
      <div class="relative">
        <!-- DESKTOP VIEW (Horizontal) -->
        <div class="relative hidden md:block">
          <!-- Horizontal connecting line centered across step badges -->
          <div
            class="bg-dorado-400/50 absolute top-7 right-[16.66%] left-[16.66%] z-0 h-0.5"
            aria-hidden="true"
          />

          <div class="relative z-10 grid grid-cols-3 gap-12">
            <div v-for="(step, i) in steps" :key="i" class="flex flex-col items-center text-center">
              <div
                class="bg-vino-900 ring-dorado-400/30 mb-6 flex size-14 items-center justify-center rounded-full font-serif text-2xl font-bold text-white shadow-lg ring-2"
              >
                {{ step.letter }}
              </div>
              <span class="text-[11px] font-bold tracking-wider text-[#9A7B38] uppercase">{{
                step.phase
              }}</span>
              <h3 class="mb-3 font-serif text-2xl font-bold text-[#4A0E17]">{{ step.title }}</h3>
              <p class="text-vino-950/80 mb-3 text-sm leading-relaxed">{{ step.description }}</p>

              <div class="bg-dorado-400/20 my-3 mt-auto h-px w-full"></div>

              <div class="w-full text-xs font-bold">
                <UIcon
                  :name="step.icon"
                  class="text-dorado-400 mr-1.5 shrink-0 align-text-top text-lg"
                ></UIcon>
                <span>{{ step.highlight }}</span>
              </div>
            </div>
          </div>
        </div>

        <!-- MOBILE VIEW (Vertical) -->
        <div class="relative block md:hidden">
          <!-- Vertical line down the left side -->
          <div
            class="bg-dorado-400/50 absolute top-7 bottom-10 left-7 z-0 w-0.5"
            aria-hidden="true"
          />

          <div class="relative z-10 space-y-5">
            <div v-for="(step, i) in steps" :key="i" class="flex items-start gap-x-4">
              <div
                class="ring-dorado-400 bg-vino-900 flex h-14 w-14 shrink-0 items-center justify-center rounded-full font-serif text-2xl font-bold text-white shadow-lg ring-2"
              >
                {{ step.letter }}
              </div>

              <div class="pt-1">
                <span class="text-dorado-400 text-[11px] font-bold tracking-wider uppercase">{{
                  step.phase
                }}</span>
                <h3 class="mb-2 font-serif text-2xl font-bold">{{ step.title }}</h3>
                <p class="text-vino-950/80 mb-4 text-xs">{{ step.description }}</p>
                <div class="w-full text-xs font-bold">
                  <UIcon
                    :name="step.icon"
                    class="text-dorado-400 mr-1.5 shrink-0 align-text-top text-lg"
                  ></UIcon>
                  <span>{{ step.highlight }}</span>
                </div>
                <div v-if="i <= steps.length - 2" class="bg-dorado-400/20 mt-6 h-px w-full"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const steps = [
  {
    letter: 'P',
    phase: '01 · Fase Diagnóstica',
    title: 'Potencia',
    description:
      'Auditoría forense de fugas financieras, aceleración de cobranza estancada y reactivación inmediata del flujo de caja.',
    highlight: 'Detección precisa de fugas operativas',
    icon: 'i-lucide-zap'
  },
  {
    letter: 'R',
    phase: '02 · Fase Estructural',
    title: 'Reestructura',
    description:
      'Manuales de control interno en farmacia/almacén, digitalización de egresos y saneamiento riguroso de pasivos.',
    highlight: 'Control estricto de insumos y almacén',
    icon: 'heroicons:adjustments-horizontal-16-solid'
  },
  {
    letter: 'O',
    phase: '03 · Fase de Blindaje',
    title: 'Optimiza',
    description:
      'Planeación fiscal 100% legal para el sector salud y tableros ejecutivos en tiempo real para tomar decisiones con certeza.',
    highlight: 'Estrategia fiscal y expansión rentable',
    icon: 'i-lucide-shield-check'
  }
]
</script>
