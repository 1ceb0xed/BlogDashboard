<script setup lang="ts">
const postsStore = usePostsStore()
const usersStore = useUsersStore()
const countLengthPosts = computed(() => {
  return postsStore.posts.length
})

const countUsers = computed(() => {
  return new Set(postsStore.posts.map((item) => item.userId)).size // set создает особый объект без дубликатов size только к нему
})

const test = () => {
  console.log(postsStore.posts)
}
const getUserNameForPosts = (postId: number) => {
  return usersStore.users.find((user) => user.id === postId)?.name
}
</script>

<template>
  <div>
    <h2>HOME</h2>
    <button @click="test">test</button>
  </div>
  <div class="bg-red-500">
    <h2 class="text-2xl">Number of posts</h2>
    <p>{{ countLengthPosts }}</p>
  </div>
  <div class="bg-green">
    <h2>Number of users</h2>
    <p>{{ countUsers }}</p>
  </div>
  <div class="bg-slate-600">
    <h2 class="text-2xl">Last 5 posts</h2>
    <ul class="grid gap-[1vw]">
      <li v-for="item in postsStore.posts.slice(-5)" :key="item.id">
        <h2 name="title">Title:{{ item.title }}</h2>
        <h2 name="author">Author: {{ getUserNameForPosts(item.userId) }}</h2>
      </li>
    </ul>
  </div>
</template>
