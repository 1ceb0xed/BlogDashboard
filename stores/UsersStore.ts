import type { User } from '~/interfaces/ApiTypes'
import axios from 'axios'
export const useUsersStore = defineStore('usersStore', () => {
  const users = ref<User[]>([])
  const fetchUsers = async (): Promise<void> => {
    try {
      const { data } = await axios.get<User[]>(useRuntimeConfig().public.USERS_LINK as string)
      users.value = data
    } catch {
      alert('Error')
    }
  }
  const getUserById = (id: number): User | undefined => {
    return users.value.find((user) => user.id === id)
  }
  return {
    users,
    getUserById,
    fetchUsers,
  }
})
