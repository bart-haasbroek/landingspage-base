<script setup lang="ts">
const props = withDefaults(
  defineProps<{
    background?: "primary" | "none";
    title?: string;
    subtitle?: string;
  }>(),
  {
    background: "none", // Stel hier je standaardwaarde in voor background
  }
);
</script>

<template>
  <section class="py-20">
      <div v-if="title || subtitle" class="text-center pb-10" data-aos="fade">
          <h2 v-if="title" class="text-3xl font-bold text-gray-900 sm:text-4xl">{{title}}</h2>
          <p v-if="subtitle" class="mt-4 text-lg text-gray-600">{{ subtitle }}</p>
        </div>

        <div class="container mx-auto px-4">
            <slot></slot>
        </div>
  </section>
</template>

