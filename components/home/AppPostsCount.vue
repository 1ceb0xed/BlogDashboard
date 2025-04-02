<script setup lang="ts">
const postsStore = usePostsStore()
const countLengthPosts = computed<number>(() => {
  return postsStore.posts.length
})
</script>
<template>
  <div>
    <NuxtLink to="/posts">
      <div class="bg-red-500 p-[1vw] rounded-xl">
        <h2 class="text-2xl">Number of posts</h2>
        <p>{{ countLengthPosts }}</p>
      </div>
    </NuxtLink>
  </div>
</template>
