<script setup lang="ts">
import axios from 'axios'
import type { Comment } from '~/interfaces/ApiTypes'
const comments = ref<Comment[]>([])
const postsStore = usePostsStore()
const usersStore = useUsersStore()
const { PostId } = useRoute().params
const isLoading = ref<boolean>()
const fetchComments = async (): Promise<void> => {
  isLoading.value = true
  try {
    const { data } = await axios.get<Comment[]>(
      `https://jsonplaceholder.typicode.com/comments?postId=${PostId}`,
    )
    comments.value = data
  } catch {
    alert('Error')
  } finally {
    setTimeout(() => {
      isLoading.value = false
    }, 500)
  }
}
onMounted(async () => {
  await fetchComments()
})
</script>
<template>
  <div>
    <AppBackButton class="mb-[1vw]" />
    <div>
      <div name="postCard">
        <VCard
          :title="`Title: ${postsStore.getPostById(Number(PostId))?.title}`"
          :subtitle="`Author: ${usersStore.getUserById(Number(postsStore.getPostById(Number(PostId))?.userId))?.name}`"
          :text="postsStore.getPostById(Number(PostId))?.body"
        ></VCard>
      </div>
      <h2 class="text-2xl justify-start m-[1vw]">Comments</h2>
      <AppLoader v-show="isLoading" />
      <div name="comments" class="mt-[1.5vw] grid gap-[1vw]" v-show="!isLoading">
        <VCard
          v-for="comment in comments"
          :key="comment.id"
          :title="`Title: ${comment.name}`"
          :subtitle="`Author: ${comment.email}`"
          :text="`Comment: ${comment.body}`"
        >
          <VCardActions> </VCardActions>
        </VCard>
      </div>
    </div>
  </div>
</template>
