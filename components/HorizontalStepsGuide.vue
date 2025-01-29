<script setup lang="ts">
import type { Component } from 'vue'

interface Step {
  number: number
  title: string
  description: string
  icon?: Component
}

interface Props {
  steps: Step[]
  showIcons?: boolean
  activeStep?: number
}

const props = withDefaults(defineProps<Props>(), {
  showIcons: true,
  activeStep: 1
})
</script>

<template>
  <div class="max-w-4xl mx-auto py-12 px-4">
    <div class="flex justify-between items-start">
      <div
        v-for="(step, index) in steps"
        :key="step.number"
        class="flex flex-col items-center relative"
        :class="[
          index === steps.length - 1 ? 'flex-1' : 'flex-1 pr-8'
        ]"
      >
        <!-- Circle with number or icon -->
        <div
          class="w-12 h-12 rounded-full flex items-center justify-center mb-4"
          :class="[
            step.number <= activeStep ? 'bg-indigo-600' : 'bg-gray-200',
            'transition-colors duration-200'
          ]"
        >
          <template v-if="showIcons && step.icon">
            <component
              :is="step.icon"
              class="h-6 w-6 text-white"
              aria-hidden="true"
            />
          </template>
          <template v-else>
            <span class="text-white font-semibold">{{ step.number }}</span>
          </template>
        </div>
        <!-- Connecting line -->
        <div
          v-if="index < steps.length - 1"
          class="absolute left-[calc(50%+24px)] right-[calc(50%-24px)] top-6 -translate-y-1/2"
        >
          <div
            class="h-[2px] w-full bg-gray-200"
            :class="{ 'bg-indigo-600': step.number < activeStep }"
          />
        </div>
        <!-- Step content -->
        <div class="text-center">
          <h3 class="text-lg font-semibold text-gray-900">{{ step.title }}</h3>
          <p class="mt-1 text-gray-600 text-sm">{{ step.description }}</p>
        </div>
      </div>
    </div>
  </div>
</template>