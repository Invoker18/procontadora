<script setup lang="ts">
import { calculators } from '~/utils/calculators'

usePageSeo(
  'Calculadoras financieras y fiscales',
  'Calculadoras prácticas para explorar tus números y estimar el ISR mensual RESICO.'
)

const search = ref('')
const selectedCategory = ref('Todos')
const categories = ['Todos', ...new Set(calculators.map((calculator) => calculator.category))]
const filteredCalculators = computed(() => {
  const query = search.value.trim().toLocaleLowerCase('es')
  return calculators.filter(
    (calculator) =>
      (selectedCategory.value === 'Todos' || calculator.category === selectedCategory.value) &&
      `${calculator.title} ${calculator.description} ${calculator.category}`
        .toLocaleLowerCase('es')
        .includes(query)
  )
})

function clearFilters() {
  search.value = ''
  selectedCategory.value = 'Todos'
}
</script>

<template>
  <div class="bg-marfil-50 flex w-full flex-1 flex-col">
    <section class="mx-auto w-full max-w-7xl px-5 py-10 sm:px-8 sm:py-14">
      <div class="grid gap-6 sm:grid-cols-[1fr_auto] sm:items-end">
        <div>
          <p class="text-dorado-700 text-xs font-bold tracking-[0.2em] uppercase">
            Herramientas PRO
          </p>
          <h1 class="text-vino-950 mt-2 font-serif text-3xl font-bold sm:text-4xl">Calculadoras</h1>
          <p class="text-marfil-700 mt-3 text-sm leading-6">
            Herramientas prácticas para explorar tus números.
          </p>
        </div>
        <div class="relative w-full sm:w-72 lg:w-80">
          <label for="calculator-search" class="sr-only">Buscar calculadoras</label>
          <UIcon
            name="i-lucide-search"
            class="text-marfil-600 pointer-events-none absolute top-1/2 left-4 size-5 -translate-y-1/2"
          />
          <input
            id="calculator-search"
            v-model="search"
            type="search"
            placeholder="Buscar una calculadora..."
            class="border-champagne-300 text-vino-950 placeholder:text-marfil-600 focus:border-vino-600 focus:ring-vino-600/20 w-full rounded-lg border bg-white py-3 pr-4 pl-12 text-sm outline-none focus:ring-4"
          />
        </div>
      </div>

      <div class="mt-8 flex flex-wrap items-center justify-between gap-4">
        <div class="flex flex-wrap gap-2" aria-label="Filtrar por categoría">
          <button
            v-for="category in categories"
            :key="category"
            type="button"
            :aria-pressed="selectedCategory === category"
            class="focus-visible:outline-vino-700 rounded-full px-4 py-2 text-sm font-semibold transition-colors focus-visible:outline-2 focus-visible:outline-offset-2"
            :class="
              selectedCategory === category
                ? 'bg-vino-900 text-white'
                : 'text-marfil-700 hover:bg-champagne-100'
            "
            @click="selectedCategory = category"
          >
            {{ category }}
          </button>
        </div>
        <p class="text-marfil-700 text-sm" role="status">
          {{ filteredCalculators.length }}
          {{ filteredCalculators.length === 1 ? 'calculadora' : 'calculadoras' }}
        </p>
      </div>

      <div
        v-if="filteredCalculators.length"
        class="border-champagne-200 mt-5 overflow-hidden rounded-xl border bg-white shadow-sm"
      >
        <table class="w-full text-left text-sm">
          <thead class="bg-champagne-100/70 text-marfil-700 text-xs uppercase">
            <tr>
              <th scope="col" class="px-4 py-4 font-semibold sm:px-6">Calculadora</th>
              <th scope="col" class="hidden px-4 py-4 font-semibold md:table-cell">Categoría</th>
              <th scope="col" class="px-4 py-4 text-right font-semibold sm:px-6">Abrir</th>
            </tr>
          </thead>
          <tbody class="divide-champagne-200 divide-y">
            <tr
              v-for="calculator in filteredCalculators"
              :key="calculator.slug"
              class="hover:bg-champagne-50/80 transition-colors"
            >
              <td class="px-4 py-4 sm:px-6">
                <div class="flex items-center gap-3">
                  <span
                    class="bg-champagne-100 text-vino-800 hidden size-10 shrink-0 items-center justify-center rounded-lg sm:flex"
                  >
                    <UIcon name="i-lucide-calculator" class="size-5" />
                  </span>
                  <div>
                    <NuxtLink
                      :to="`/calculadoras/${calculator.slug}`"
                      class="text-vino-950 hover:text-vino-600 focus-visible:outline-vino-700 rounded font-semibold focus-visible:outline-2 focus-visible:outline-offset-2"
                    >
                      {{ calculator.title }}
                    </NuxtLink>
                    <span class="text-marfil-700 mt-1 block text-xs md:hidden">{{
                      calculator.category
                    }}</span>
                  </div>
                </div>
              </td>
              <td class="hidden px-4 py-4 md:table-cell">
                <span
                  class="bg-champagne-50 text-dorado-800 rounded-full px-3 py-1 text-xs font-semibold"
                  >{{ calculator.category }}</span
                >
              </td>
              <td class="px-4 py-4 text-right sm:px-6">
                <NuxtLink
                  v-if="calculator.status === 'available'"
                  :to="`/calculadoras/${calculator.slug}`"
                  :aria-label="`Abrir ${calculator.title}`"
                  class="text-vino-800 hover:bg-champagne-100 hover:text-vino-600 focus-visible:outline-vino-700 inline-flex items-center gap-2 rounded-lg p-2 text-sm font-bold transition-colors focus-visible:outline-2 focus-visible:outline-offset-2"
                >
                  <span class="hidden sm:inline">Abrir</span>
                  <UIcon name="i-lucide-arrow-right" class="size-5 sm:size-4" />
                </NuxtLink>
                <span
                  v-else
                  class="bg-champagne-100 text-dorado-800 inline-flex rounded-full px-3 py-1.5 text-xs font-semibold"
                  aria-label="Próximamente disponible"
                >
                  Próximamente
                </span>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <div
        v-else
        class="border-champagne-300 mt-5 rounded-xl border border-dashed px-6 py-14 text-center"
      >
        <UIcon name="i-lucide-search-x" class="text-dorado-600 size-8" />
        <h2 class="text-vino-950 mt-4 font-serif text-xl font-bold">No encontramos calculadoras</h2>
        <p class="text-marfil-700 mt-2 text-sm">Prueba con otra búsqueda o categoría.</p>
        <button
          type="button"
          class="text-vino-800 mt-4 text-sm font-bold underline underline-offset-4"
          @click="clearFilters"
        >
          Limpiar filtros
        </button>
      </div>
      <p class="text-marfil-700 mt-6 text-sm leading-6">
        Los resultados son orientativos y no sustituyen la asesoría profesional.
      </p>
    </section>

    <section class="bg-champagne-100 mt-auto px-5 py-14 sm:px-8">
      <div
        class="mx-auto flex max-w-7xl flex-col gap-6 sm:flex-row sm:items-center sm:justify-between"
      >
        <div>
          <p class="text-dorado-700 text-xs font-bold tracking-[0.2em] uppercase">
            Estamos para acompañarte
          </p>
          <h2 class="text-vino-950 mt-3 font-serif text-2xl font-bold sm:text-3xl">
            Tu siguiente paso puede ser más claro.
          </h2>
          <p class="text-marfil-700 mt-3 max-w-2xl leading-7">
            Si necesitas una estrategia a la medida de tu organización, conversemos.
          </p>
        </div>
        <UButton
          to="/#contacto"
          size="lg"
          trailing-icon="i-lucide-arrow-right"
          class="bg-vino-900 text-marfil-50 hover:bg-vino-700 w-fit shrink-0 rounded-lg px-6 py-3.5 font-semibold"
        >
          Contactar a PRO Contadora
        </UButton>
      </div>
    </section>
  </div>
</template>
