<script setup lang="ts">

const props = withDefaults(
  defineProps<{
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

const handleSubmit = async (formData) => {
  // Handle form submission
  console.log('Form submitted:', formData)
}
</script>

<template>
  <PageSection :title="props.title" :subtitle="props.subtitle">
    <FormKit
      type="form"
      @submit="handleSubmit"
      submit-label="Subscribe Now"
      #default="{ value }"
    >
      <FormKit
        type="email"
        name="email"
        placeholder="Enter your email"
        validation="required|email"
        :classes="{
          input: 'w-full px-4 py-3 rounded-lg text-black mb-4',
          message: 'text-red-200 text-sm'
        }"
      />
    </FormKit>
  </PageSection>
  <!-- <section class="bg-primary text-white py-20">
    <div class="container mx-auto px-4">
      <div class="max-w-2xl mx-auto text-center" data-aos="fade-up">
        <h2 class="text-3xl font-bold mb-4">
          Stay Updated
        </h2>
        <p class="mb-8">Subscribe to our newsletter for the latest updates and features</p>
        <FormKit
          type="form"
          @submit="handleSubmit"
          submit-label="Subscribe Now"
          #default="{ value }"
        >
          <FormKit
            type="email"
            name="email"
            placeholder="Enter your email"
            validation="required|email"
            :classes="{
              input: 'w-full px-4 py-3 rounded-lg text-black mb-4',
              message: 'text-red-200 text-sm'
            }"
          />
        </FormKit>
      </div>
    </div>
  </section> -->
</template>