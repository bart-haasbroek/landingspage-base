<script setup lang="ts">
import { CheckIcon } from "@heroicons/vue/24/outline";
// import Loader from '~/components/Loader.vue';
import AppButton from '~/components/AppButton.vue';
import { onMounted } from 'vue';
import useApiCall from '~/composables/api/useApiCall';

import AOS from 'aos';

const props = defineProps<{
  title?: string;
  subtitle?: string;
  usps?: {
    title: string;
    description: string;
  }[]
}>()

onMounted(() => {
  AOS.init({
    duration: 1000,
    once: true
  })
})

const { isLoading, error, success, data, apiCall, mockCall } = useApiCall();

const successVisible = ref(false);
async function send(data) {
  console.log('data', data);

  const { email, name } = data;
  // await apiCall('/api/save-email', 'POST', { email, name }, true, 2000);
  await mockCall('/api/save-email', 'POST', { email, name }, true, 2000);
  // await addToMailchimp({ email, name });
}
</script>

<template>
  <section class="bg-slates-800 bg-primary text-white pt-32 pb-20 rounded-b-[40px] min-h-[90vh]">
    <div class="container mx-auto px-4">
      <div class="w-full flex gap-16" data-aos="fade-in">
        <div class="shrink-0 w-[55%]">
          <h1 class="text-5xl font-bold mb-6">
            {{ props.title }}
          </h1>

          <p v-if="props.subtitle" class="text-gray-400 text-xl mb-8">
            {{subtitle}}
          </p>

          <div v-if="props.usps && props.usps.length" class="flex flex-col gap-4">
            <div class="flex gap-2" v-for="usp of props.usps">
              <CheckIcon class="size-6" />
              {{ usp }}
            </div>
          </div>

          <div class="mt-6 w-[600px]">
            <h2 class="text-xl">Schrijf je in!</h2>
            <p class="text-gray-400 text-sm">
              Krijg direct toegang zodra het platform live is! <br>
            </p>

            <div class="mt-6 pr-40">
              <transition name="fade" @after-leave="successVisible = true">
                <formKit v-if="!success" type="form" @submit="send" novalidate :actions="false">
                  <div class="flex flex-col gap-3">
                    <formKit type="text" name="name" placeholder="Voornaam" validation="required"
                      input-class=" rounded-lg p-2 w-full text-black" />
                    <formKit type="email" name="email" placeholder="Email" validation="required | email"
                      input-class="rounded-lg p-2 w-full text-black" />
                  </div>
                  <app-button submit class="mt-4" type="secondary" variant="ghost">
                    <Loader v-if="isLoading" text="Laden"></Loader>
                    <span v-else>
                      Verzenden
                    </span>
                  </app-button>
                </formKit>
              </transition>
              <transition name="fade">
                <div v-if="successVisible" class="success-message">
                  Bedankt! Je bent succesvol ingeschreven.
                </div>
              </transition>
            </div>
          </div>

        </div>

        <div class="rounded-xl  overflow-hidden">
          <img
            src="https://cdn.dribbble.com/userupload/15944390/file/original-b5d8c45be3d2dc9d914d3cd0e7a538f1.png?resize=2048x1536&vertical=center">
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

.fade-enter-to,
.fade-leave-from {
  opacity: 1;
}
</style>
