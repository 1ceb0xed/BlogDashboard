<script setup lang="ts">
const loaderPost = ref<boolean>(true)
onMounted(() => {
  setTimeout(() => {
    loaderPost.value = false
  }, 1000)
})
</script>
<template>
  <AppLoader v-show="loaderPost" />
  <AppPostCard v-show="!loaderPost" />
</template>
