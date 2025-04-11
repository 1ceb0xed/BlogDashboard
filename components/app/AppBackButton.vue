<script setup lang="ts">
const historyStack = useState<string[]>('historyStack', () => [])
const goBack = () => {
  historyStack.value.pop() //удаление последнего пути
  const previous = historyStack.value.pop() // удаление последнего пути и запись его в переменную, чтобы перейти на него
  if (previous) {
    navigateTo(previous)
  } else {
    navigateTo('...')
  }
}
</script>

<template>
  <VBtn @click="goBack"> ⬅ Back </VBtn>
</template>
