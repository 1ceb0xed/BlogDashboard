<script setup lang="ts">
const loader = ref<boolean>(true)
onMounted(() => {
  setTimeout(() => {
    loader.value = false
  }, 1500)
})
</script>
<template>
  <AppLoader v-show="loader" />
  <div v-show="!loader">
    <AppHeader />
    <div class="bg-[rgb(200,210,220)] rounded-xl h-auto m-[1.2vw] p-[2vw]">
      <AppNameOfSocialNetwork />
      <NuxtPage />
    </div>
  </div>
</template>
