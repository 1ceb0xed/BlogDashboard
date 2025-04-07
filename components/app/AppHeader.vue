<script setup lang="ts">
const route = useRoute()
</script>
<template>
  <div name="header" class="flex justify-around p-[1.2vw] text-[1.6vw] bg-[rgb(99,144,199)]">
    <NuxtLink
      active-class="text-white"
      class="transition duration-300 hover:scale-105 hover:text-white"
      :to="'/'"
      >Home</NuxtLink
    >
    <NuxtLink
      :class="{ 'text-white': route.path.startsWith('/posts') }"
      class="transition duration-300 hover:scale-105 hover:text-white"
      :to="'/posts'"
      >Posts</NuxtLink
    >
    <NuxtLink
      :class="{ 'text-white': route.path.startsWith('/users') }"
      class="transition duration-300 hover:scale-110 hover:text-white"
      :to="'/users'"
      >Users</NuxtLink
    >
  </div>
  <div class="h-1 bg-[rgb(200,200,200)] w-full"></div>
</template>
