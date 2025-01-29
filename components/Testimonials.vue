<script setup lang="ts">
interface Testimonial {
  id: number;
  content: string;
  author: string;
  role: string;
  image: string;
}

const props = withDefaults(
  defineProps<{
    cols?: "1" | "2" | "3" | "4";
    title?: string;
    subtitle?: string;
    testimonials?: Testimonial[];
  }>(),
  {
    cols: "3",
  }
);

const testimonials: Testimonial[] = [
  {
    id: 1,
    content: "This product has completely transformed how we work. The efficiency gains are remarkable!",
    author: "Sarah Johnson",
    role: "CEO at TechCorp",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150"
  },
  {
    id: 2,
    content: "The best investment we've made this year. Customer satisfaction is up by 40%.",
    author: "Michael Chen",
    role: "Product Manager",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150"
  },
  {
    id: 3,
    content: "Incredible support team and fantastic features. Couldn't be happier!",
    author: "Emily Rodriguez",
    role: "Director of Operations",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150"
  }
];
</script>

<template>
    <PageSection class="bg-gray-50" :title="props.title" :subtitle="props.subtitle">
        <div class="grid gap-8 lg:grid-cols-3 lg:gap-x-8">
        <div v-for="testimonial in testimonials" :key="testimonial.id" class="bg-white rounded-lg shadow-lg p-8">
          <div class="relative">
            <svg class="absolute -top-4 -left-4 h-8 w-8 text-gray-200" fill="currentColor" viewBox="0 0 32 32">
              <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
            </svg>
            <p class="relative text-lg text-gray-600">{{ testimonial.content }}</p>
          </div>
          <div class="mt-8 flex items-center">
            <img :src="testimonial.image" :alt="testimonial.author" class="h-12 w-12 rounded-full object-cover">
            <div class="ml-4">
              <p class="font-medium text-gray-900">{{ testimonial.author }}</p>
              <p class="text-sm text-gray-500">{{ testimonial.role }}</p>
            </div>
          </div>
        </div>
      </div>
    </PageSection>
</template>