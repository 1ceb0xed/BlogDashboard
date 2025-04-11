import type { Post } from '~/interfaces/ApiTypes'
import axios from 'axios'
export const usePostsStore = defineStore('postsStore', () => {
  const posts = ref<Post[]>([])
  const isLoaded = ref<boolean>()

  const fetchPosts = async (): Promise<void> => {
    isLoaded.value = false
    try {
      const { data } = await axios.get<Post[]>(useRuntimeConfig().public.POSTS_LINK as string)
      posts.value = data
    } catch {
      alert('Error')
    } finally {
      setTimeout(() => {
        isLoaded.value = true
      }, 1000)
    }
  }

  const getPostsByUserId = (id: number): Post[] => {
    return posts.value.filter((post) => post.userId === id)
  }
  const getPostById = (id: number): Post | undefined => {
    return posts.value.find((post) => post.id === id)
  }
  return {
    posts,
    getPostsByUserId,
    getPostById,
    isLoaded,
    fetchPosts,
  }
})
