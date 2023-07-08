<script setup lang="ts">
import { ref, reactive } from 'vue'
import api from '@/services/apiService'
import { ElMessage } from 'element-plus'

const approveUser = async (userId: any) => {
  console.log('userid', userId)
  const headers = { 'Content-Type': 'multipart/form-data' }
  const isApproved = await api.put(`CreateAccount/${userId}/ApproveDisapproved/${true}`, headers)
  if (isApproved) {
    ElMessage({
      type: 'success',
      message: 'Successfully approved request!'
    })
  }
}

const disapproveUser = async (userId: any) => {
  console.log('userid', userId)
  const headers = { 'Content-Type': 'multipart/form-data' }
  const isApproved = await api.put(`CreateAccount/${userId}/ApproveDisapproved/${false}`, headers)
  if (isApproved) {
    ElMessage({
      type: 'success',
      message: 'Successfully approved request!'
    })
  }
}

const props = defineProps({
  getAllUsers: {
    type: Array,
    default: []
  }

})
</script>

<template>
  <div
    class="user-summary-wrapper"
  >
    <div class="summary-title">
      <span>Client List</span>
    </div>
    <div class="table-wrapper">
      <table>
        <tr>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Age</th>
          <th>Email Address</th>
          <th>Gender</th>
          <th />
        </tr>
        <template
          v-for="user in props.getAllUsers"
          :key="user.userId"
        >
          <tr v-if="user.userType !== 1">
            <td>{{ user.firstname }}</td>
            <td>{{ user.lastname }}</td>
            <td>{{ user.age }}</td>
            <td>{{ user.email }}</td>
            <td>{{ user.gender }}</td>
            <td>
              <el-button
                type="primary"
                @click="approveUser(user.userId)"
              >
                Approve
              </el-button>
              <el-button
                type="danger"
                @click="disapproveUser(user.userId)"
              >
                Disapprove
              </el-button>
            </td>
          </tr>
        </template>
      </table>
    </div>
  </div>
</template>

<style>
.row-wrapper {
  width: 100%;
}
.table-wrapper {
  padding: 1rem;
}

table {
  width: 100%;
  border-collapse: collapse;
}
th {
  color: #00000080;
  border-bottom: 4px solid #ebedf2;
  padding: 1rem;
  text-align: left;
  font-weight: 700;
  background-color: rgba(234, 241, 255, 0.74);
}
td {
  color: #00000080;
  border-bottom: 4px solid #ebedf2;
  padding: 1rem;
}
.summary-title {
  background-color: #542B7C;
  width: 300px;
  height: 37px;
  border-radius: 30px;
  margin-left: 2rem;
  display: flex;
  justify-content: center;
  align-items: center;
}

.summary-title span {
  color: #F6F6F6;
}
.user-summary-wrapper {
  background-color: #F6F6F6;
  width: 70vw;
  height: auto;
  box-shadow: 0px 4px 4px 0px #00000040;
  border-radius: 30px;
  margin-top: 5rem;
  margin-bottom: 2rem;
}
.main-content {
  display: flex;
  align-items: center;
  flex-direction: column;
  flex-grow: 1;
}
</style>
