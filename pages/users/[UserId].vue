<script setup lang="ts">
const usersStore = useUsersStore()
const postsStore = usePostsStore()
const { UserId } = useRoute().params

const test = () => {
  console.log(usersStore.usersById)
}
onMounted(() => {
  setTimeout(() => {
    usersStore.getUserById(Number(UserId))
    postsStore.getPostById(Number(UserId))
  }, 500) // тк основные данные не успевают загрузиться
})
</script>
<template>
  <NuxtLink :to="'/users'">Назад</NuxtLink>
  <br />
  <button @click="test">test</button>
  <h2>user id {{ UserId }}</h2>
  <h2>user name {{ usersStore.usersById?.name }}</h2>
  <h2>user email {{ usersStore.usersById?.email }}</h2>
  <div class="bg-slate-500 mt-10">
    <ul>
      <li v-for="item in postsStore.postById" :key="item.id">
        <h2 class="text-2xl flex justify-center">Title</h2>
        <h2 name="title">{{ item.title }}</h2>
        <h2 class="text-2xl flex justify-center">Body</h2>
        <h2 name="body">{{ item.body }}</h2>
        <br />
      </li>
    </ul>
  </div>
</template>
