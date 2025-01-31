<template>
  <div>
    <!-- <Navigation /> -->
    <NuxtPage />
  </div>
</template>

<script setup>
import { onMounted } from 'vue'
import AOS from 'aos'

onMounted(() => {
  AOS.init(
    {
      once: true
    }
  )
})
</script>