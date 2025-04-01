<script setup lang="ts">
const usersStore = useUsersStore()
const postsStore = usePostsStore()
const { UserId } = useRoute().params

// const test = () => {
//   console.log(usersStore)
// }
</script>
<template>
  <VBtn class="mb-[1vw]" :to="'/users'">Back</VBtn>
  <VCard
    :title="`User Name: ${usersStore.getUserById(Number(UserId))?.name}`"
    :subtitle="`User email: ${usersStore.getUserById(Number(UserId))?.email}`"
  />
  <div class="bg-slate-500 mt-10">
    <div class="p-[1.5vw]" v-for="item in postsStore.getPostById(Number(UserId))" :key="item.id">
      <VCard
        :title="`Title: ${item.title}`"
        subtitle="The main part of the post:"
        :text="item.body"
      />
    </div>
  </div>
</template>
