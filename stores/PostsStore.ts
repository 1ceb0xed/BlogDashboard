import type { Post } from '~/interfaces/Types'
import axios from 'axios'
export const usePostsStore = defineStore('postsStore', () => {
  const posts = ref<Post[]>([])
  const postById = ref<Post[] | null>()
  const fetchPosts = async () => {
    try {
      const { data } = await axios.get<Post[]>('https://jsonplaceholder.typicode.com/posts')
      posts.value = data
    } catch {
      alert('Error')
    }
  }
  const getPostById = (id: number) => {
    postById.value = posts.value.filter((post) => post.userId === id) || null
  }
  onMounted(async () => {
    await fetchPosts()
  })
  return {
    posts,
    getPostById,
    postById,
  }
})
