<script setup lang="ts">
import { ChartBarIcon, ClockIcon, UserGroupIcon } from '@heroicons/vue/24/outline';

const props = withDefaults(
  defineProps<{
    cols?: "1" | "2" | "3" | "4";
    title?: string;
    subtitle?: string;
    usps?: {
      icon: string | Function;
      title: string;
      description: string;
      animation: string;
    }[];
  }>(),
  {
    cols: "3",
  }
);

const colsClasses = {
  1: 'md:grid-cols-1',
  2: 'md:grid-cols-2',
  3: 'md:grid-cols-3',
  4: 'md:grid-cols-4',
}

const usps = props.usps;
</script>

<template>
  <PageSection :title="props.title" :subtitle="props.subtitle">
    <div class="grid gap-8" :class="colsClasses[props.cols]">
        <div v-for="(usp, index) in usps" :key="index" class="text-center" :data-aos="usp.animation">
          <div class="bg-white p-6 rounded-xl shadow-lg">
            <component :is="usp.icon" class="w-12 h-12 mx-auto mb-4 text-blue-600" />
            <h3 class="text-xl font-bold mb-2">{{ usp.title }}</h3>
            <p class="text-gray-600">{{ usp.description }}</p>
          </div>
        </div>
      </div>
  </PageSection>
</template>

