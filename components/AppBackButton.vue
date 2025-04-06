<script setup lang="ts">
const previousRoute = (): void => {
  const router = useRouter()
  router.back()
}
</script>

<template>
  <VBtn @click="previousRoute"> ⬅ Back </VBtn>
</template>
