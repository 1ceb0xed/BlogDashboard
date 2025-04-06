<script setup lang="ts">
usePostsStore() // тк, если перезагрузить страницу на странице /users а потом перейти на /posts там идет прогрузка данных, тк стор с постами не был задействован
</script>
<template>
  <AppUsersCardList />
</template>
