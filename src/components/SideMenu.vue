<script setup lang="ts">
import { ref, reactive, onMounted } from 'vue'
import api from '@/services/apiService'

const user = reactive({
  userId: null,
  userType: null
})

const getAllUsers = async () => {
  const userId = sessionStorage.getItem('userId')

  if (userId) {
    user.userId = userId
    const response = await api.get(`CreateAccount/${user.userId}`)
    console.log('login user', response.data)
    user.userType = response.data.find(item => item.userType === 1)
  }
}

onMounted(() => {
  getAllUsers()
})

</script>

<template>
  <div
    v-if="user.userType"
    class="main-dashboard"
  >
    <div class="sidebar">
      <div class="sidebar-wrapper">
        <div class="sidebar-logo">
          <img
            src="@/assets/img/sidebar-logo.png"
            alt=""
          >
        </div>
        <div class="sidebar-menu">
          <nav>
            <ul>
              <li>
                <i
                  class="fas fa-file"
                />
                <router-link to="/documents">
                  <span>Documents</span>
                </router-link>
              </li>
              <li>
                <i class="fas fa-users" /><router-link
                  to="/users"
                >
                  <span>Users</span>
                </router-link>
              </li>
              <li>
                <i class="fas fa-archive" />
                <span>Inventory</span>
              </li>
              <li>
                <i class="fas fa-book" /><span>Add Admin</span>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  </div>
  <div
    v-else
    class="main-dashboard"
  >
    <div class="sidebar">
      <div class="sidebar-wrapper">
        <div class="sidebar-logo">
          <img
            src="@/assets/img/sidebar-logo.png"
            alt=""
          >
        </div>
        <div class="sidebar-menu">
          <nav>
            <ul>
              <li>
                <i
                  class="fas fa-home"
                />
                <router-link to="/Dashboard">
                  <span>Home</span>
                </router-link>
              </li>
              <li>
                <i class="fas fa-bell" /><router-link
                  to="/Notification"
                >
                  <span>Notification</span>
                </router-link>
              </li>
              <li>
                <i class="fas fa-star" />
                <span>Feedback</span>
              </li>
              <li>
                <i class="fas fa-book" /><span>About Us</span>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.sidebar {
    width: 240px;
    height: 100vh;
    background-color: #542B7C;
    top: 0;
    left: 0;
    bottom: 0;
    overflow: hidden;
    position: sticky;
    transition: all 0.5s linear;
}
.sidebar-wrapper {
  padding: 1rem;
  display: flex;
  flex-direction: column;
}
.sidebar-logo {
    margin-top: 2rem;
    display: flex;
    justify-content: center;
    width: 90%;
}
.sidebar-logo img {
    height: auto;
    width: auto;
}
.sidebar-menu ul {
   list-style-type: none;
   line-height: 5;
}

.sidebar-menu ul li {
    color: #FFFFFF;
    font-size: 25px;
    font-weight: 400;
    overflow: hidden;
    transition: all 0.5s ease-in-out;
    cursor: pointer;
}
.sidebar-menu a {
    color: #FFFFFF;
    text-decoration: none;
}
.fas {
    padding-right: 5px;
}
</style>
