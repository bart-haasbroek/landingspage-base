<template>
  <main class="py-20">
    <div class="container mx-auto px-4">
      <h1 class="text-4xl font-bold mb-12 text-center" data-aos="fade-up">Latest Blog Posts</h1>
      <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        <article v-for="post in posts" :key="post._path" class="bg-white rounded-xl shadow-lg overflow-hidden" data-aos="fade-up">
          <NuxtImg
            :src="post.image"
            width="600"
            height="300"
            class="w-full h-48 object-cover"
            alt="Blog post image"
          />
          <div class="p-6">
            <h2 class="text-xl font-bold mb-2">{{ post.title }}</h2>
            <p class="text-gray-600 mb-4">{{ post.description }}</p>
            <NuxtLink :to="post._path" class="text-blue-600 font-semibold hover:text-blue-800">
              Read More →
            </NuxtLink>
          </div>
        </article>
      </div>
    </div>
  </main>
</template>

<script setup>
const { data: posts } = await useAsyncData('posts', () => queryContent('/blog').find())
</script>