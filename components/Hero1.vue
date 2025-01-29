<template>
  <section class="bg-slate-800 text-white pt-40 pb-32 rounded-b-[40px]">
    <div class="container mx-auto px-4">
      <div class="text-center max-w-3xl mx-auto" data-aos="fade-up">
        <div class="bg-gray-400 inline-block px-4 py-2 rounded-full mb-6">
          <a href="#" class="text-sm flex items-center gap-2">
            Discover the all new Gantify 2.0
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
              stroke="currentColor" class="w-4 h-4">
              <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
            </svg>
          </a>
        </div>
        <h1 class="text-5xl font-bold mb-6">
          De Live planner tool
        </h1>
        <p class="text-gray-400 text-xl mb-8">
          Super makkelijk laten weten wanneer en waar je bezoekers moeten zijn!
        </p>
        <div class="flex gap-4 justify-center">
          <button class="bg-white text-black px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">Get
            Started</button>
          <button class="border border-white px-6 py-3 rounded-lg font-semibold hover:bg-white/10 transition-colors">How
            it Works</button>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { onMounted } from 'vue'
import AOS from 'aos'

onMounted(() => {
  AOS.init({
    duration: 1000,
    once: true
  })
})
</script>