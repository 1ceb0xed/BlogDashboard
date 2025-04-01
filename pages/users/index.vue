<script setup>
const usersStore = useUsersStore()
const test = () => {
  console.log(userStore.users)
}
</script>
<template>
  <h2>Users index</h2>
  <button @click="test">test</button>
  <div>
    <div class="mb-[20px] bg-slate-" name="card" v-for="item in usersStore.users" :key="item.id">
      <h2 name="name">{{ item.name }}</h2>
      <h2 name="email">{{ item.email }}</h2>
      <h2 name="city">{{ item.address.city }}</h2>
      <NuxtLink :to="`/users/${item.id}`">Профиль</NuxtLink>
    </div>
  </div>
</template>
