<script setup lang="ts">
const postsStore = usePostsStore()
const countUsers = computed<number>(() => {
  return new Set(postsStore.posts.map((item) => item.userId)).size // сет создает особый объект size только к нему и Map
})
</script>

<template>
  <div>
    <NuxtLink to="/posts">
      <div class="bg-green p-[1vw] rounded-xl">
        <h2 class="text-2xl">Number of users</h2>
        <p>{{ countUsers }}</p>
      </div>
    </NuxtLink>
  </div>
</template>
