<script setup>
const postsStore = usePostsStore()
// const usersStore = useUsersStore()
</script>
<template>
  <h2>Posts index</h2>
  <ul class="bg-slate-600">
    <li class="mb-[20px]" v-for="item in postsStore.posts" :key="item.id">
      <h2 name="title">{{ item.title }}</h2>
      <h2 name="author">Name</h2>
      <h2 name="number of simbols">{{ item.body.length }}</h2>
      <NuxtLink :to="`/posts/${item.id}`">Посмотреть пост</NuxtLink>
    </li>
  </ul>
</template>
