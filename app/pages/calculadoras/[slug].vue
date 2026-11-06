<script setup lang="ts">
import { availableCalculators } from '~/utils/calculators'

const route = useRoute()
const calculator = computed(() => {
  const match = availableCalculators.find((item) => item.slug === route.params.slug)
  if (!match) throw createError({ statusCode: 404, statusMessage: 'Calculadora no encontrada' })
  return match
})

usePageSeo(
  () => calculator.value.title,
  () => calculator.value.description
)

</script>

<template>
  <section class="bg-marfil-50 px-5 py-10 sm:px-8 sm:py-14">
    <div class="mx-auto max-w-5xl">
      <NuxtLink
        to="/calculadoras"
        class="text-vino-800 hover:text-vino-600 inline-flex items-center gap-2 text-sm font-semibold"
      >
        <UIcon name="i-lucide-arrow-left" class="size-4" /> Todas las calculadoras
      </NuxtLink>
      <p class="text-dorado-700 mt-8 text-xs font-bold tracking-[0.2em] uppercase">
        {{ calculator.category }}
      </p>
      <h1 class="text-vino-950 mt-2 font-serif text-3xl font-bold sm:text-4xl">
        {{ calculator.title }}
      </h1>
      <p class="text-marfil-700 mt-3 max-w-2xl leading-7">{{ calculator.description }}</p>

      <ResicoCalculator />
    </div>
  </section>
</template>
