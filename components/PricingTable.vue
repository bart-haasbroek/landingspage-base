<template>
  <div class="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
    <!-- Starter Plan -->
    <div class="bg-white rounded-2xl shadow-lg p-8" data-aos="fade-up" data-aos-delay="0">
      <h3 class="text-lg font-semibold text-gray-400 mb-4">Starter</h3>
      <div class="mb-6">
        <span class="text-4xl font-bold">$9</span>
        <span class="text-gray-500">/month</span>
      </div>
      <p class="text-gray-500 mb-6">Perfect for individuals and small teams getting started</p>
      <ul class="space-y-4 mb-8">
        <li class="flex items-center gap-3">
          <CheckIcon class="w-5 h-5 text-green-500" />
          <span>Up to 5 team members</span>
        </li>
        <li class="flex items-center gap-3">
          <CheckIcon class="w-5 h-5 text-green-500" />
          <span>Basic project management</span>
        </li>
        <li class="flex items-center gap-3">
          <CheckIcon class="w-5 h-5 text-green-500" />
          <span>2GB storage</span>
        </li>
      </ul>
      <button class="w-full py-3 px-4 border border-blue-600 text-blue-600 rounded-lg hover:bg-blue-50 transition-colors">
        Get Started
      </button>
    </div>

    <!-- Pro Plan -->
    <div class="bg-blue-600 rounded-2xl shadow-lg p-8 transform scale-105 -translate-y-4" data-aos="fade-up" data-aos-delay="100">
      <div class="absolute -top-4 left-1/2 -translate-x-1/2 bg-blue-700 text-white px-4 py-1 rounded-full text-sm">
        Most Popular
      </div>
      <h3 class="text-lg font-semibold text-blue-100 mb-4">Pro</h3>
      <div class="mb-6">
        <span class="text-4xl font-bold text-white">$29</span>
        <span class="text-blue-200">/month</span>
      </div>
      <p class="text-blue-200 mb-6">Best for growing teams and businesses</p>
      <ul class="space-y-4 mb-8 text-white">
        <li class="flex items-center gap-3">
          <CheckIcon class="w-5 h-5" />
          <span>Unlimited team members</span>
        </li>
        <li class="flex items-center gap-3">
          <CheckIcon class="w-5 h-5" />
          <span>Advanced project management</span>
        </li>
        <li class="flex items-center gap-3">
          <CheckIcon class="w-5 h-5" />
          <span>10GB storage</span>
        </li>
        <li class="flex items-center gap-3">
          <CheckIcon class="w-5 h-5" />
          <span>Priority support</span>
        </li>
      </ul>
      <button class="w-full py-3 px-4 bg-white text-blue-600 rounded-lg hover:bg-blue-50 transition-colors">
        Get Started
      </button>
    </div>

    <!-- Enterprise Plan -->
    <div class="bg-white rounded-2xl shadow-lg p-8" data-aos="fade-up" data-aos-delay="200">
      <h3 class="text-lg font-semibold text-gray-400 mb-4">Enterprise</h3>
      <div class="mb-6">
        <span class="text-4xl font-bold">$99</span>
        <span class="text-gray-500">/month</span>
      </div>
      <p class="text-gray-500 mb-6">For large organizations with advanced needs</p>
      <ul class="space-y-4 mb-8">
        <li class="flex items-center gap-3">
          <CheckIcon class="w-5 h-5 text-green-500" />
          <span>Everything in Pro</span>
        </li>
        <li class="flex items-center gap-3">
          <CheckIcon class="w-5 h-5 text-green-500" />
          <span>Custom integrations</span>
        </li>
        <li class="flex items-center gap-3">
          <CheckIcon class="w-5 h-5 text-green-500" />
          <span>Unlimited storage</span>
        </li>
        <li class="flex items-center gap-3">
          <CheckIcon class="w-5 h-5 text-green-500" />
          <span>24/7 dedicated support</span>
        </li>
      </ul>
      <button class="w-full py-3 px-4 border border-blue-600 text-blue-600 rounded-lg hover:bg-blue-50 transition-colors">
        Contact Sales
      </button>
    </div>
  </div>
</template>

<script setup>
import { CheckIcon } from '@heroicons/vue/24/solid'
</script>