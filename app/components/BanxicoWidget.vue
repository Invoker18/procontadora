<template>
  <div class="border-vino-800 bg-vino-900 border-b px-3 py-1.5 text-white shadow-md">
    <div class="mx-auto flex flex-wrap items-center justify-between gap-4">
      <!-- Section Title / Brand -->
      <div class="flex items-center gap-2">
        <span
          class="border-vino-500/50 bg-rojo-950/60 text-vino-400 rounded border px-2.5 py-1 text-xs font-semibold tracking-wider uppercase"
        >
          Indicadores Financieros
        </span>
      </div>

      <!-- Loading State -->
      <div v-if="pending" class="text-champagne-400 animate-pulse text-sm">
        Cargando indicadores de Banxico...
      </div>

      <!-- Error State -->
      <div v-else-if="error" class="text-rojo-400 text-sm">
        No se pudieron cargar los indicadores económicos.
      </div>

      <!-- Indicators List -->
      <UMarquee
        v-else
        pause-on-hover
        :overlay="false"
        :repeat="2"
        :ui="{
          root: 'flex-1 text-sm [--duration:40s] [--gap:--spacing(8)]',
          content: 'w-max justify-start'
        }"
      >
        <div v-for="item in indicators" :key="item.id" class="flex items-center gap-2">
          <span class="text-champagne-400 font-medium">{{ item.shortTitle }}:</span>
          <span class="text-champagne-100 font-bold">${{ item.value }}</span>
          <span class="text-champagne-500 text-[10px]">({{ item.dateLabel }})</span>
        </div>
      </UMarquee>
    </div>
  </div>
</template>

<script setup>
const { data: indicators, pending, error } = await useFetch('/api/banxico')
</script>
