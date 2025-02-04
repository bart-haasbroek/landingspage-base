<script setup>

import {useSupabase} from '~/composables/api/useSupabase';
const { getAll } = useSupabase('b_blogs');

const blogs = await getAll()

</script>

<template>
  <main v-if="blogs">
    <div class="prose w-[800px] mx-auto" v-html="blogs[0].content">

    </div>
  </main>
</template>