<script setup>
import Hero from '@/components/Hero.vue';
import Usps from '@/components/Usps.vue';
import Testimonials from '@/components//Testimonials.vue';
import Subscribe from '@/components/Subscribe.vue';
import StepGuide from '~/components/StepGuide.vue';
import Faq from '~/components/Faq.vue';
import { homeContent } from './homeContent';

const active = [
  'hero',
  // 'steps',
  // 'faq',
  // 'subscribe'
];

const componentMap = {
  hero: Hero,
  usps: Usps,
  testimonials: Testimonials,
  steps: StepGuide,
  faq: Faq,
  subscribe: Subscribe,
}

const all = active.map((component) => {
  const section = homeContent.find((content) => content.name === component);
  return {
    ...section,
    component: componentMap[component],
  }
})

const steps = [
  { title: 'Personal Information', completed: true, description: 'Enter your personal information' },
  { title: 'Account Details', completed: false },
  { title: 'Review', completed: false },
  { title: 'Confirmation', completed: false }
]

</script>

<template>
  <main>
    <component v-for="(component, index) in all" :key="index" :is="component.component" v-bind="component.props" />
    <!-- <StepIndicator :steps="steps"/> -->
    <!-- <Footer /> -->
  </main>
</template>