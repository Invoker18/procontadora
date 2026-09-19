<script setup lang="ts">
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
      <p class="text-dorado-500 text-sm font-bold tracking-[0.02em] uppercase">
        Código de ética inquebrantable
      </p>
      <h2 class="text-vino-900 mt-3 font-serif text-3xl font-bold md:text-4xl">
        Las 3T de PRO Contadora
      </h2>
      <p class="text-marfil-700 mt-4 max-w-2xl leading-7">
        Nuestros tres valores rectores para acompañar tu práctica con rigor y compromiso directo.
      </p>
      <div class="mt-10 grid gap-5 md:grid-cols-3">
        <article
          v-for="value in values"
          :key="value.title"
          class="group min-h-52 cursor-pointer [perspective:1000px]"
        >
          <div
            class="relative h-full w-full transition-transform duration-[600ms] [transition-timing-function:cubic-bezier(0.4,0,0.2,1)] will-change-transform [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]"
          >
            <div
              class="border-dorado-400/30 bg-marfil-50 absolute inset-0 rounded-lg border p-6 py-3 [-webkit-backface-visibility:hidden] [backface-visibility:hidden]"
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
              class="border-dorado-400/30 bg-rojo-950 text-marfil-50 absolute inset-0 flex [transform:rotateY(180deg)] flex-col gap-6 rounded-lg border p-6 [-webkit-backface-visibility:hidden] [backface-visibility:hidden]"
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
