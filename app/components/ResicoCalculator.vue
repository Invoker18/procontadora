<script setup lang="ts">
const tabs = [
  { label: 'Mensual', value: 'mensual', slot: 'mensual' as const },
  { label: 'Anual', value: 'anual', slot: 'anual' as const }
]
</script>

<template>
  <UTabs
    :items="tabs"
    default-value="mensual"
    :unmount-on-hide="false"
    class="mt-8"
    :ui="{
      list: 'bg-champagne-100 w-full max-w-sm rounded-lg p-1',
      indicator: 'bg-vino-900 rounded-md',
      trigger: 'text-vino-800 font-semibold data-[state=active]:text-white',
      content: 'mt-6'
    }"
  >
    <template #mensual>
      <ResicoCalculatorForm period="mensual" />
    </template>
    <template #anual>
      <ResicoCalculatorForm period="anual" />
    </template>
  </UTabs>
</template>
