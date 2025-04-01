<script setup lang="ts">
const postsStore = usePostsStore()
const usersStore = useUsersStore()
const countLengthPosts = computed(() => {
  return postsStore.posts.length
})

const countUsers = computed(() => {
  return new Set(postsStore.posts.map((item) => item.userId)).size // set создает особый объект без дубликатов size только к нему
})

// const test = () => {
//   console.log(postsStore.posts)
// }
const getUserNameForPosts = (postId: number) => {
  return usersStore.users.find((user) => user.id === postId)?.name
}
</script>

<template>
  <div class="grid gap-[2.5vw] text-white text-lg">
    <div class="bg-red-500 p-[1vw] rounded-xl">
      <h2 class="text-2xl">Number of posts</h2>
      <p>{{ countLengthPosts }}</p>
    </div>
    <div class="bg-green p-[1vw] rounded-xl">
      <h2 class="text-2xl">Number of users</h2>
      <p>{{ countUsers }}</p>
    </div>
    <div class="bg-slate-600 p-[1vw] rounded-xl">
      <h2 class="text-2xl">Last 5 posts</h2>
      <ul class="grid gap-[1vw] mt-[1vw]">
        <li v-for="item in postsStore.posts.slice(0, 5)" :key="item.id">
          <h2 name="title">Title: {{ item.title }}</h2>
          <h2 name="author">Author: {{ getUserNameForPosts(item.userId) }}</h2>
        </li>
      </ul>
    </div>
  </div>
</template>
