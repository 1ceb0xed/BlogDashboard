<script setup>
definePageMeta({
  middleware: (to) => {
    const usersStore = useUsersStore()
    if (!usersStore.users.some((user) => user.id === Number(to.params.UserId))) {
      return navigateTo('/users')
    }
  },
})
</script>
<template>
  <UserCard />
</template>
