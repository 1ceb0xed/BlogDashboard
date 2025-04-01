<script setup lang="ts">
import type { Filter } from '~/interfaces/Types'
const postsStore = usePostsStore()
const usersStore = useUsersStore()
const searchQuery = ref<string>('')
const filters = ref<Filter[]>([
  { label: 'Author', value: 'author' },
  { label: 'Length ↑', value: 'lengthUp' },
  { label: 'Length ↓', value: 'lengthDown' },
])
const filter = ref<'author' | 'lengthUp' | 'lengthDown' | ''>('author')
const filteredPosts = computed(() => {
  const result = postsStore.posts.filter((post) =>
    post.title.toLowerCase().includes(searchQuery.value?.toLowerCase()),
  )
  switch (filter.value) {
    case 'lengthUp':
      return result.sort((a, b) => a.body.length - b.body.length)
    case 'lengthDown':
      return result.sort((a, b) => b.body.length - a.body.length)
    case 'author':
      return result.sort((a, b) => {
        const nameA = usersStore.users.find((user) => user.id === a.userId)?.name || ''
        const nameB = usersStore.users.find((user) => user.id === b.userId)?.name || ''
        return nameA.localeCompare(nameB)
      })
    default:
      return result
  }
})
</script>
<template>
  <div class="flex justify-end gap-[2vw]">
    <div>
      <VSelect
        v-model="filter"
        :items="filters"
        item-title="label"
        item-value="value"
        label="Filter"
        class="w-[30vw]"
      />
    </div>
    <div>
      <VTextField class="w-[30vw]" placeholder="Post search..." v-model="searchQuery" />
    </div>
  </div>
  <div class="mb-[2vw] text-white text-lg" v-for="item in filteredPosts" :key="item.id">
    <VCard
      color="rgb(95, 115, 135)"
      class="rounded-lg"
      :title="`Title: ${item.title}`"
      :subtitle="`Author: ${usersStore.getUserById(item.userId)?.name}`"
      :text="`Number of symbols: ${item.body.length}`"
    >
      <VCardActions>
        <VBtn :to="`/posts/${item.id}`">view the post</VBtn>
      </VCardActions>
    </VCard>
  </div>
</template>
