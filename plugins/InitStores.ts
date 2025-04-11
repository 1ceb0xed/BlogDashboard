export default defineNuxtPlugin(async () => {
  const postsStore = usePostsStore()
  const usersStore = useUsersStore()
  await postsStore.fetchPosts()
  await usersStore.fetchUsers()
})
