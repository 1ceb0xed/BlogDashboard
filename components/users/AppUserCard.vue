<script setup lang="ts">
const usersStore = useUsersStore()
const postsStore = usePostsStore()
const { UserId } = useRoute().params
</script>
<template>
  <div>
    <AppBackButton class="mb-[1vw]" />
    <VCard
      :title="`User Name: ${usersStore.getUserById(Number(UserId))?.name}`"
      :subtitle="`User email: ${usersStore.getUserById(Number(UserId))?.email}`"
      :text="`City: ${usersStore.getUserById(Number(UserId))?.address.city}`"
    />
    <h2 class="grid justify-center text-2xl mt-[2vw]">Posts</h2>
    <div class="bg-slate-500 mt-10">
      <div class="p-[1.5vw]" v-for="item in postsStore.getPostsById(Number(UserId))" :key="item.id">
        <NuxtLink :to="`/posts/${item.id}`">
          <VCard
            :title="`Title: ${item.title}`"
            subtitle="The main part of the post:"
            :text="item.body"
          />
        </NuxtLink>
      </div>
    </div>
  </div>
</template>
