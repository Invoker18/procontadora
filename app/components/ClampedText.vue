<template>
  <UTooltip :text="title" :disabled="!isClamped" :delay-duration="300">
    <p ref="titleRef" :class="class">
      {{ title }}
    </p>
  </UTooltip>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useResizeObserver } from '@vueuse/core'

defineProps<{
  title: string
  class: string
}>()

const titleRef = ref<HTMLParagraphElement | null>(null)
const isClamped = ref(false)

// Check if scrollHeight exceeds visible clientHeight
const checkClamping = () => {
  if (titleRef.value) {
    isClamped.value = titleRef.value.scrollHeight > titleRef.value.clientHeight
  }
}

// Automatically recalculates on window/container resizes
useResizeObserver(titleRef, checkClamping)
</script>
