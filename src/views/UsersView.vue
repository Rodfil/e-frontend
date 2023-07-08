<script setup lang="ts">
import { onMounted, ref } from 'vue'
import api from '@/services/apiService'
import UserList from '@/components/UserList.vue'
const getAllUsers = ref([])
const getUserData = async () => {
  const responseUser = await api.get('CreateAccount')
  console.log('user', responseUser.data)
  getAllUsers.value = responseUser.data.map((item: any) => {
    const birthdate = new Date(item.birthdate)
    const now = new Date()
    const ageInMilliseconds = now - birthdate
    const ageInYears = Math.floor(ageInMilliseconds / (365.25 * 24 * 60 * 60 * 1000))
    return {
      ...item,
      age: ageInYears
    }
  })
}
onMounted(() => {
  getUserData()
})
</script>

<template>
  <user-list :get-all-users="getAllUsers" />
</template>
