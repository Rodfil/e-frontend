<script setup lang="ts">
import { ref } from 'vue'
import { ArrowDown } from '@element-plus/icons-vue'

const showForm = ref(false)
</script>

<template>
  <div
    v-if="showForm"
    class="container"
  >
    <div class="left-content">
      <img
        src="@/assets/img/organization.jpg"
        alt=""
        class="left-image"
      >
    </div>
    <div class="right-content">
      <div class="right-wrapper">
        <img
          src="@/assets/img/fetchit-login.png"
          alt=""
          class="fetchit-login"
        >
        <img
          src="@/assets/img/hello-login.png"
          alt=""
          class="hello-login"
        >
      </div>

      <form action="">
        <div class="input-wrapper">
          <div class="input-field">
            <input
              class="input-content"
              type="text"
              placeholder="Email Address"
            >
          </div>
          <div class="input-field">
            <input
              class="input-content"
              type="password"
              placeholder="Password"
            >
          </div>
          <div class="password-validtation">
            <el-checkbox
              label="Remember Password"
              class="check-box"
              size="large"
            />
            <h2 class="forgot-password">
              Forgot Password
            </h2>
          </div>
        </div>
      </form>
      <div class="login-button">
        <button class="icon-button">
          Login
        </button>
      </div>
      <div class="login-verification">
        <h2>Don’t have an account yet?</h2> <span>Sign Up</span>
      </div>
    </div>
  </div>
  <div
    v-else
    class="container-register"
  >
    <div class="left-content">
      <img
        src="@/assets/img/organization.jpg"
        alt=""
        class="left-image"
      >
    </div>
    <div class="right-content-register">
      <div class="right-wrapper">
        <img
          src="@/assets/img/fetchit-login.png"
          alt=""
          class="fetchit-login-register"
        >
        <img
          src="@/assets/img/create.png"
          alt=""
          class="create-login"
        >
      </div>

      <form action="">
        <div class="input-wrapper-register">
          <div class="field-wrapper-row">
            <div class="input-field-row">
              <input
                class="input-content-row"
                type="text"
                placeholder="First Name"
              >
            </div>
            <div class="input-field-row">
              <input
                class="input-content-row"
                type="text"
                placeholder="Last Name"
              >
            </div>
          </div>

          <div class="field-wrapper-row">
            <div class="input-field-row">
              <el-dropdown :hide-on-click="false">
                <span class="input-content-row">
                  Gender<el-icon class="el-icon--right"><arrow-down /></el-icon>
                </span>
                <template #dropdown>
                  <el-dropdown-menu>
                    <el-dropdown-item>Male</el-dropdown-item>
                    <el-dropdown-item>Female</el-dropdown-item>
                  </el-dropdown-menu>
                </template>
              </el-dropdown>
            </div>
            <div class="input-field-row">
              <input
                class="input-content"
                type="date"
                placeholder="BirthDate"
              >
            </div>
          </div>
          <div class="input-field">
            <el-dropdown :hide-on-click="false">
              <span class="input-content-row">
                Registered Votered/ Non-Registered<el-icon class="el-icon--right"><arrow-down /></el-icon>
              </span>
              <template #dropdown>
                <el-dropdown-menu>
                  <el-dropdown-item>Registered</el-dropdown-item>
                  <el-dropdown-item>Non-Registered</el-dropdown-item>
                </el-dropdown-menu>
              </template>
            </el-dropdown>
          </div>

          <div class="input-field">
            <input
              class="input-content"
              type="password"
              placeholder="Create your password"
            >
          </div>
          <div class="input-field">
            <input
              class="input-content"
              type="password"
              placeholder="Confirm your password"
            >
          </div>
        </div>
      </form>
      <div class="login-button">
        <button class="icon-button">
          Register
        </button>
      </div>
      <div class="login-verification">
        <h2>Already have an account?</h2> <span>Log In</span>
      </div>
    </div>
  </div>
</template>

<style scoped>

.container {
  display: flex;
  height: 75vh;
  width: 61%;
  margin: auto;
  box-shadow: 1px 5px 5px 0px #00000040;
  margin-top: 6rem;
}
.container-register {
  display: flex;
  height: 80vh;
  width: 70%;
  margin: auto;
  box-shadow: 1px 5px 5px 0px #00000040;
  margin-top: 5rem;
}
.right-content {
  width: 50%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 5px;
}
.right-content-register {
  width: 50%;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.right-wrapper {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.left-content {
  width: 50%;
  display: flex;
}
.left-image {
  width: 100%;
  height: auto;
  background-size: cover;
}
.fetchit-login {
  width: 50%;
  height: auto;
  margin-bottom: 2rem;
}
.fetchit-login-register {
  width: 50%;
  height: auto;
}
.hello-login {
  width: 70%;
  height: 7vh;
  margin-bottom: 4rem;
}
.input-wrapper {
  display: flex;
  flex-direction: column;
  gap: 2rem;
}
.input-wrapper-register {
  display: flex;
  flex-direction: column;
  gap: 15px;
}
.input-content {
  border: none;
  outline: none;
  background: none;
  padding: 1rem;
  width: 100%;
}
.input-content-row {
  border: none;
  outline: none;
  background: none;
  padding: 1rem;
  width: 100%;
  font-size: 20px;
  font-weight: 600 !important;
  color: #00000080;
}
.input-content::placeholder {
  font-size: 20px;
  font-weight: 700;
  color: #00000080;
  width: 100%;
}

.input-content-row {
  font-size: 20px;
  font-weight: 700;
  color: #00000080;
  width: 100%;
}
.input-field {
  width: 25vw;
  height: 7vh;
  box-shadow: 0px 4px 4px 0px #00000040;
  border-radius: 10px;
  align-items: center;
  display: flex;
}
.input-field-row {
  width: 12vw;
  height: 7vh;
  box-shadow: 0px 4px 4px 0px #00000040;
  border-radius: 10px;
  align-items: center;
  display: flex;
}

.field-wrapper-row {
  display: flex;
  justify-content: space-between;
}

.password-validtation {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.forgot-password {
  text-decoration: underline;
  color: #542B7C;
  font-weight: 600;
  font-size: 15px;
}
.login-button {
  margin-top: 2rem;
  width: 25vw;
  height: 7vh;
  border-radius: 10px;
  background: #FB4C8E;
  display: flex;
  align-items: center;
  justify-content: center;
}
.icon-button {
  background: none;
  border: none;
  color: #FFFFFF;
  font-size: 20px;
  font-weight: 700;
}
.login-verification {
  display: flex;
  align-items: center;
  gap: 5px;
  margin-top: 1rem;
}
.login-verification h2 {
  font-size: 15px;
  font-weight: 600;
  color: #00000099;
}

.login-verification span {
  font-size: 15px;
  font-weight: 700;
  color: #542B7C;
}
.create-login {
  width: 100%;
  height: 4vh;
  margin-bottom: 1rem;
}
</style>
