<script setup lang="ts">
import type { Component } from 'vue'

interface Step {
  number: number
  title: string
  description: string
  icon?: Component
}

interface Props {
  steps: Step[];
  title?: string;
  subtitle?: string;
  showIcons?: boolean;
  activeStep?: number;
}

const props = withDefaults(defineProps<Props>(), {
  showIcons: true,
  activeStep: 1
})
</script>

<template>
    <PageSection :title="props.title" :subtitle="props.subtitle">
        <div class="space-y-16">
        <div v-for="(step, index) in steps" :key="step.number" class="flex">
            <div class="relative">
            <!-- Circle with number or icon -->
            <div
                class="w-12 h-12 rounded-full flex items-center justify-center"
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
                class="absolute left-6 top-[22px] h-[2px] w-16 -translate-x-1/2"
            >
                <div
                class="h-full w-full bg-gray-200"
                :class="{ 'bg-indigo-600': step.number < activeStep }"
                />
            </div>
            </div>
            <!-- Step content -->
            <div class="ml-6 text-left">
            <h3 class="text-lg font-semibold text-gray-900">{{ step.title }}</h3>
            <p class="mt-1 text-gray-600">{{ step.description }}</p>
            </div>
        </div>
        </div>
    </PageSection>
</template>