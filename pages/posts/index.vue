<script setup>
const postsStore = usePostsStore()
const usersStore = useUsersStore()
</script>
<template>
  <ul class="">
    <div class="mb-[2vw] text-white text-lg" v-for="item in postsStore.posts" :key="item.id">
      <VCard
        color="rgb(95, 115, 135)"
        class="rounded-lg"
        :title="`Title: ${item.title}`"
        :subtitle="`Author: ${usersStore.getUserById(item.userId).name}`"
        :text="`Number of symbols: ${item.body.length}`"
      >
        <VCardActions>
          <VBtn :to="`/posts/${item.id}`">view the post</VBtn>
        </VCardActions>
      </VCard>
    </div>
  </ul>
</template>
