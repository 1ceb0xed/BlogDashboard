<script setup lang="ts">
const loaderUserCard = ref<boolean>(true)
onMounted(() => {
  setTimeout(() => {
    loaderUserCard.value = false
  }, 1000)
})
</script>
<template>
  <AppLoader v-show="loaderUserCard" />
  <AppUserCard v-show="!loaderUserCard" />
</template>
