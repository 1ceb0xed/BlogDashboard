<script setup>
const usersStore = useUsersStore()
// const test = () => {
//   console.log(userStore.users)
// }
</script>
<template>
  <div>
    <div class="mb-[20px]" name="card" v-for="item in usersStore.users" :key="item.id">
      <VCard
        color="rgb(95, 115, 135)"
        :title="`Name: ${item.name}`"
        :subtitle="`Email: ${item.email}`"
        :text="`City: ${item.address.city}`"
      >
        <VCardActions>
          <VBtn :to="`/users/${item.id}`">Profile</VBtn>
        </VCardActions>
      </VCard>
    </div>
  </div>
</template>
