<!-- app/app.vue -->
<script setup lang="ts">
useHead({
  htmlAttrs: { lang: 'es-MX' }
})

useSeoMeta({
  ogSiteName: 'PRO Contadora',
  ogType: 'website',
  ogLocale: 'es_MX',
  twitterCard: 'summary_large_image'
})
</script>

<template>
  <UApp>
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </UApp>
</template>
