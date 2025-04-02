import type { Post } from '~/interfaces/Types'
import axios from 'axios'
export const usePostsStore = defineStore('postsStore', () => {
  const posts = ref<Post[]>([])

  const fetchPosts = async (): Promise<void> => {
    try {
      const { data } = await axios.get<Post[]>('https://jsonplaceholder.typicode.com/posts')
      posts.value = data
    } catch {
      alert('Error')
    }
  }

  const getPostsById = (id: number): Post[] => {
    return posts.value.filter((post) => post.userId === id)
  }
  const getPostById = (id: number): Post | undefined => {
    return posts.value.find((post) => post.id === id)
  }
  onMounted(async () => {
    await fetchPosts()
  })
  return {
    posts,
    getPostsById,
    getPostById,
  }
})
