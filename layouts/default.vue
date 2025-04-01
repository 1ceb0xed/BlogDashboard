<template>
  <div name="header" class="flex justify-around p-[1.2vw] text-[1.6vw] bg-[rgb(99,144,199)]">
    <NuxtLink class="transition duration-300 hover:scale-105 hover:text-white" :to="'/'"
      >Home</NuxtLink
    >
    <NuxtLink class="transition duration-300 hover:scale-105 hover:text-white" :to="'/posts'"
      >Posts</NuxtLink
    >
    <NuxtLink class="transition duration-300 hover:scale-110 hover:text-white" :to="'/users'"
      >Users</NuxtLink
    >
  </div>
  <div class="h-1 bg-[rgb(200,200,200)] w-full"></div>

  <div class="bg-[rgb(200,210,220)] rounded-xl h-auto m-[1.2vw] p-[2vw]">
    <div class="mb-[1.5vw]">
      <h2 class="text-xl font-bold">Name of social network</h2>
    </div>
    <NuxtPage />
  </div>
</template>
//bg-[rgb(68,85,105)] - фон для центрального блока
