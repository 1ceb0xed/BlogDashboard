<script setup lang="ts">
const postsStore = usePostsStore()
const usersStore = useUsersStore()
const getUserNameForPosts = (postId: number): string => {
  return usersStore.users.find((user) => user.id === postId)?.name || ''
}
</script>

<template>
  <div class="bg-slate-600 p-[1vw] rounded-xl">
    <h2 class="text-2xl">Last 5 posts</h2>
    <ul class="grid gap-[1vw] mt-[1vw]">
      <li v-for="item in postsStore.posts.slice(0, 5)" :key="item.id">
        <NuxtLink :to="`/posts/${item.id}`">
          <h2
            name="title"
            class="origin-left transition-transform duration-300 hover:scale-105 cursor-pointer"
          >
            Title: {{ item.title }}
          </h2>
        </NuxtLink>
        <h2 name="author">Author: {{ getUserNameForPosts(item.userId) }}</h2>
      </li>
    </ul>
  </div>
</template>
