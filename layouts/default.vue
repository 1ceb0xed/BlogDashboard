<script setup lang="ts">
const postsStore = usePostsStore()
</script>
<template>
  <AppHeader />
  <AppLoader v-show="!postsStore.isLoaded" />
  <div
    v-show="postsStore.isLoaded"
    class="bg-[rgb(200,210,220)] rounded-xl h-auto m-[1.2vw] p-[2vw]"
  >
    <AppTitle />
    <NuxtPage />
  </div>
</template>
