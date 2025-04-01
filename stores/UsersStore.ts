import type { User } from '~/interfaces/Types'
import axios from 'axios'
export const useUsersStore = defineStore('usersStore', () => {
  const users = ref<User[]>([])
  const usersById = ref<User | null>()
  const fetchUsers = async () => {
    try {
      const { data } = await axios.get<User[]>('https://jsonplaceholder.typicode.com/users')
      users.value = data
    } catch {
      alert('Error')
    }
  }
  const getUserById = (id: number) => {
    usersById.value = users.value.find((user) => user.id === id) || null
  }
  onMounted(async () => {
    await fetchUsers()
  })
  return {
    users,
    usersById,
    getUserById,
  }
})
