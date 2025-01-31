<script setup lang="ts">

const props = withDefaults(
  defineProps<{
    steps: { title: string; completed: boolean; description: string; }[];
    currentStep: number;
  }>(),
  {
    currentStep: 0,
  },
);

</script>

<template>
    <div class="flex" v-if="steps.length > 0">
        <div class="relative">
            <div class="flex flex-col space-y-12">
                <div v-for="(step, index) in steps" :key="index" class="flex gap-4">
                    <div class="relative z-10 flex items-center justify-center w-8 h-8 rounded-full shrink-0" :class="{
                        'bg-blue-600 text-white': index <= currentStep,
                        'bg-gray-200 text-gray-500': index > currentStep
                    }">
                        <span v-if="step.completed" class="text-sm">✓</span>
                        <span v-else class="text-sm">{{ index + 1 }}</span>
                    </div>
                    <div data-aos="fade-left">
                        <span class="text-lg font-medium" :class="{
                            'text-blue-600': index <= currentStep,
                            'text-gray-500': index > currentStep
                        }">

                            {{ step.title }}
                        </span>
                        <div>
                            {{ step.description }}
                        </div>
                    </div>
                </div>
            </div>

            <div class="absolute left-4 top-0 transform -translate-x-1/2 h-full">
                <div class="h-full w-0.5 bg-gray-200"></div>
                <div class="absolute top-0 w-0.5 bg-blue-600 transition-all duration-500"
                    :style="{ height: `${(currentStep / (steps.length - 1)) * 100}%` }"></div>
            </div>
        </div>
    </div>
</template>