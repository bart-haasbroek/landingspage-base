<template>
  <main class="pt-32 pb-20">
    <div class="container mx-auto px-4">
      <div class="text-center max-w-2xl mx-auto mb-16" data-aos="fade-up">
        <h1 class="text-4xl font-bold mb-4">Simple, transparent pricing</h1>
        <p class="text-xl text-gray-600">Choose the plan that's right for your team</p>
      </div>
      <PricingTable />
    </div>
  </main>
</template>

<script setup>
import PricingTable from '~/components/PricingTable.vue'
</script>