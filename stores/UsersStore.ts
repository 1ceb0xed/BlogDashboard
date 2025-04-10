import type { User } from '~/interfaces/Types'
import axios from 'axios'
export const useUsersStore = defineStore('usersStore', () => {
  const users = ref<User[]>([])
  const fetchUsers = async (): Promise<void> => {
    try {
      const { data } = await axios.get<User[]>('https://jsonplaceholder.typicode.com/users')
      users.value = data
    } catch {
      alert('Error')
    }
  }
  const getUserById = (id: number): User | undefined => {
    return users.value.find((user) => user.id === id)
  }
  onMounted(async () => {
    await fetchUsers()
  })
  return {
    users,
    getUserById,
  }
})
