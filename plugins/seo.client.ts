import { defineNuxtPlugin } from '#app';
import { useSeo } from '../composables/useSeo';

export default defineNuxtPlugin(() => {
  useSeo();
});