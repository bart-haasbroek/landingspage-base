<template>
  <nav :class="[
    'absolute w-full z-50 transition-all duration-300',
    scrolled ? 'bg-white shadow-lg' : 'bg-transparent'
  ]">
    <div class="container mx-auto px-4">
      <div class="flex justify-between items-center h-16">
        <div class="flex items-center">
          <NuxtLink to="/" class="text-xl font-bold" :class="scrolled ? 'text-gray-900' : 'text-white'">Gantify
          </NuxtLink>
        </div>

        <!-- Desktop Menu -->
        <div class="hidden md:flex items-center space-x-8">
          <NuxtLink
            to="/"
            class="hover:text-blue-600 transition-colors"
            :class="scrolled ? 'text-gray-700' : 'text-white'"
          >
            Home
          </NuxtLink>
          <NuxtLink
            to="/blog"
            class="hover:text-blue-600 transition-colors"
            :class="scrolled ? 'text-gray-700' : 'text-white'"
          >
            Blog
          </NuxtLink>
          <NuxtLink
            to="/pricing"
            class="hover:text-blue-600 transition-colors"
            :class="scrolled ? 'text-gray-700' : 'text-white'"
          >
            Pricing
          </NuxtLink>
          <button class="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors">
            Get Started
          </button>
        </div>

        <!-- Mobile Menu Button -->
        <div class="md:hidden">
          <button @click="isOpen = !isOpen" :class="scrolled ? 'text-gray-700' : 'text-white'">
            <svg v-if="!isOpen" xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24"
              stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
            <svg v-else xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24"
              stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
      </div>

      <!-- Mobile Menu -->
      <div v-show="isOpen" class="md:hidden bg-white rounded-lg mt-2 shadow-lg">
        <div class="px-2 pt-2 pb-3 space-y-1">
          <NuxtLink to="/" class="block px-3 py-2 text-gray-700 hover:text-blue-600 rounded-lg">Home</NuxtLink>
          <NuxtLink to="/blog" class="block px-3 py-2 text-gray-700 hover:text-blue-600 rounded-lg">Blog</NuxtLink>
          <NuxtLink to="/pricing" class="block px-3 py-2 text-gray-700 hover:text-blue-600 rounded-lg">Pricing</NuxtLink>
          <button class="w-full text-left px-3 py-2 bg-blue-600 text-white rounded-lg mt-2 hover:bg-blue-700">Get Started</button>
        </div>
      </div>
    </div>
  </nav>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const isOpen = ref(false)
const scrolled = ref(false)

const handleScroll = () => {
  scrolled.value = window.scrollY > 50
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>