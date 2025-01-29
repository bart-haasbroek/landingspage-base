<script setup lang="ts">
import { ref } from 'vue'
import { ChevronUpIcon, ChevronDownIcon } from '@heroicons/vue/24/outline'
import { useAutoAnimate } from '@formkit/auto-animate/vue'

const [parent] = useAutoAnimate()

interface FAQItem {
  question: string
  answer: string
}

interface Props {
    title?: string;
    subtitle?: string;
    items: FAQItem[];
}

const props = defineProps<Props>()
const openItems = ref<Set<number>>(new Set())

const toggleItem = (index: number) => {
  const newOpenItems = new Set(openItems.value)
  if (newOpenItems.has(index)) {
    newOpenItems.delete(index)
  } else {
    newOpenItems.add(index)
  }
  openItems.value = newOpenItems
}

const isOpen = (index: number): boolean => openItems.value.has(index)
</script>

<template>
    <PageSection :title="props.title" :subtitle="props.subtitle">
        <div class="max-w-3xl mx-auto py-12 px-4">
            <div ref="parent" class="space-y-4">
                <div
                    v-for="(item, index) in items"
                    :key="index"
                    class="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden"
                >
                    <button
                    @click="toggleItem(index)"
                    class="w-full px-6 py-4 flex justify-between items-center hover:bg-gray-50 transition-colors duration-150"
                    >
                    <span class="text-lg font-medium text-gray-900">{{ item.question }}</span>
                    <component
                        :is="isOpen(index) ? ChevronUpIcon : ChevronDownIcon"
                        class="h-5 w-5 text-gray-500"
                    />
                    </button>

                    <div v-auto-animate>
                        <div v-if="isOpen(index)" class="px-6 pb-4">
                            <p class="text-gray-600">{{ item.answer }}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </PageSection>
</template>