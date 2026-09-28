<script setup>
const testimonios = [
  {
    rating: 5,
    quote:
      '“Marisela no es una contadora tradicional. Comprendió el flujo de nuestros quirófanos desde el día uno y recuperó un 28% de cartera que dábamos por perdida con aseguradoras.”',
    author: 'Dr. Roberto Valenzuela',
    role: 'Director Médico, Centro Quirúrgico Sta. Elena',
    color: 'border-rojo-900'
  },
  {
    rating: 5,
    quote:
      '“Como médico veterinario los números me quitaban la paz. El Método PRO nos dio orden en 90 días. Hoy sé cuánto rinde cada área y quirófano de mi hospital.”',
    author: 'Dra. Claudia Benítez',
    role: 'Propietaria, Hospital Veterinario San Jerónimo',
    color: 'border-dorado-400'
  },
  {
    rating: 5,
    quote:
      '“Su tenacidad y transparencia son admirables. Nos dijeron con precisión quirúrgica dónde fallábamos con los reactivos y pudimos adquirir analizadores sin asfixiarnos.”',
    author: 'Q.F.B. Andrés Montesinos',
    role: 'Director General, Laboratorios Diagnóstica Plus',
    color: 'border-rojo-900'
  }
]
</script>

<template>
  <section id="testimonios" class="py-20 md:py-28">
    <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <p class="text-dorado-600 text-sm font-bold tracking-[0.02em] uppercase">Casos reales</p>
      <h2 class="text-vino-900 mt-3 font-serif text-3xl font-bold md:text-4xl">
        La voz de quienes confiaron en el Método PRO
      </h2>
      <div class="mt-10 grid gap-5 md:grid-cols-3">
        <div v-for="(item, index) in testimonios" :key="index" class="flex">
          <div class="h-full w-px border-2" :class="item.color"></div>
          <figure class="flex flex-col gap-3 p-6">
            <UInputRating v-model="item.rating" readonly color="warning" size="sm" />
            <blockquote class="text-vino-800 leading-7 italic">
              {{ item.quote }}
            </blockquote>
            <figcaption class="text-vino-900 mt-auto text-sm font-bold">
              <span class="uppercase">{{ item.author }}</span>
              <span class="text-marfil-700 mt-1 block text-xs font-normal">
                {{ item.role }}
              </span>
            </figcaption>
          </figure>
        </div>
      </div>
    </div>
  </section>
</template>
