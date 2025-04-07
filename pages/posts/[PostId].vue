<script setup>
definePageMeta({
  middleware: (to) => {
    const postsStore = usePostsStore()
    if (!postsStore.posts.some((post) => post.id === Number(to.params.PostId))) {
      return navigateTo('/posts')
    }
  },
})
</script>
<template>
  <PostCard />
</template>
