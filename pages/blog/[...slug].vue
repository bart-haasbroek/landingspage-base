<template>
  <main class="py-20">
    <div class="container mx-auto px-4 max-w-3xl">
      <article class="prose lg:prose-xl mx-auto">
        <NuxtImg
          :src="post.image"
          width="1200"
          height="600"
          class="w-full rounded-xl mb-8"
          alt="Blog post image"
        />
        <h1 class="mb-4">{{ post.title }}</h1>
        <div class="text-gray-600 mb-8">
          <time>{{ new Date(post.date).toLocaleDateString() }}</time>
        </div>
        <ContentRenderer :value="post" />
      </article>
    </div>
  </main>
</template>

<script setup>
const { path } = useRoute()
const { data: post } = await useAsyncData(`post-${path}`, () => queryContent(path).findOne())
</script>