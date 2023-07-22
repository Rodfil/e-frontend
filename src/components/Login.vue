<script setup lang="ts">
import { ref, reactive, onMounted } from 'vue'
import api from '@/services/apiService'
import { ElMessage } from 'element-plus'
import { useRouter } from 'vue-router'

const showLoginForm = ref(true)
const showRegisterForm = ref(false)

onMounted(() => {
  const loginButton = ref(null)
  if (loginButton.value) {
    loginButton.value.focus()
  }
})
const clickLogin = () => {
  showLoginForm.value = true
  showRegisterForm.value = false
}

const clickRegister = () => {
  showRegisterForm.value = true
  showLoginForm.value = false
}

const formFields = reactive({
  firstName: '',
  lastName: '',
  gender: '',
  birthdate: '',
  voterStatus: '',
  address: '',
  email: '',
  password: ''
})

const loginFields = reactive({
  email: '',
  password: ''
})
const router = useRouter()

const loginForm = async () => {
  try {
    await api.post('CreateAccount/Authenticate', loginFields).then((response) => {
      if (response.data) {
        ElMessage({
          type: 'success',
          message: 'Successfully Login!'
        })
        const userId = response.data.userId
        sessionStorage.setItem('userId', userId)
        if (response.data.userType === 1) {
          router.push('/documents')
        } else {
          router.push('/dashboard')
        }
      } else {
        ElMessage({
          type: 'error',
          message: 'We cant find your account'
        })
      }
    })
  } catch (error) {
    console.log('Error', error)
  }
}
const submitForm = async () => {
  console.log('the data', formFields)
  try {
    await api.post('CreateAccount', formFields)
  } catch (error) {
    console.log('Error', error)
  }
}
</script>

<template>
  <div
    v-if="showLoginForm"
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

      <form :model="loginFields">
        <div class="input-wrapper">
          <div class="input-field">
            <input
              v-model="loginFields.email"
              class="input-content-row"
              type="text"
              placeholder="Email Address"
              @keyup.enter="loginForm()"
            >
          </div>
          <div class="input-field">
            <input
              v-model="loginFields.password"
              class="input-content-row"
              type="password"
              placeholder="Password"
              @keyup.enter="loginForm()"
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
        <button
          ref="loginButton"
          class="icon-button"
          @click="loginForm()"
        >
          Login
        </button>
      </div>
      <div class="login-verification">
        <h2>Don’t have an account yet?</h2> <span @click="clickRegister()">Sign Up</span>
      </div>
    </div>
  </div>
  <div
    v-if="showRegisterForm"
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
          src="@/assets/img/create.png"
          alt=""
          class="create-login"
        >
      </div>

      <form :v-model="formFields">
        <div class="input-wrapper-register">
          <div class="field-wrapper-row">
            <div class="input-field-row">
              <input
                v-model="formFields.firstName"
                class="input-content-row"
                type="text"
                placeholder="First Name"
              >
            </div>
            <div class="input-field-row">
              <input
                v-model="formFields.lastName"
                class="input-content-row"
                type="text"
                placeholder="Last Name"
              >
            </div>
          </div>

          <div class="field-wrapper-row">
            <div class="input-field-row">
              <select
                v-model="formFields.gender"
                class="input-content-row"
              >
                <option
                  disabled
                  selected
                  value=""
                  hidden
                  class="input-content"
                >
                  Gender
                </option>
                <option
                  value="Male"
                  class="input-content"
                >
                  Male
                </option>
                <option
                  value="Female"
                  class="input-content"
                >
                  Female
                </option>
              </select>
            </div>
            <div class="input-field-row">
              <input
                v-model="formFields.birthdate"
                class="input-content"
                type="date"
                placeholder="BirthDate"
              >
            </div>
          </div>
          <div class="input-field">
            <select
              v-model="formFields.voterStatus"
              class="input-content-row"
            >
              <option
                disabled
                selected
                value=""
                hidden
                class="input-content"
              >
                Registered Voter/Non-Voter
              </option>
              <option
                value="Registered Voter"
                class="input-content"
              >
                Registered Voter
              </option>
              <option
                value="Non Registered Voter"
                class="input-content"
              >
                Non-Voters
              </option>
            </select>
          </div>

          <div class="input-field">
            <input
              v-model="formFields.address"
              class="input-content-row"
              type="text"
              placeholder="Address"
            >
          </div>
          <div class="input-field">
            <input
              v-model="formFields.email"
              class="input-content-row"
              type="text"
              placeholder="Email Address"
            >
          </div>
          <div class="input-field">
            <input
              v-model="formFields.password"
              class="input-content-row"
              type="password"
              placeholder="Create your password"
            >
          </div>
          <div class="input-field">
            <input
              v-model="formFields.password"
              class="input-content-row"
              type="password"
              placeholder="Confirm your password"
            >
          </div>
        </div>
      </form>
      <div class="login-button">
        <button
          class="icon-button"
          @click="submitForm()"
        >
          Register
        </button>
      </div>
      <div class="login-verification">
        <h2>Already have an account?</h2> <span @click="clickLogin()">Log In</span>
      </div>
    </div>
  </div>
</template>

<style scoped>

.container {
  display: flex;
  height: 550px;
  width: 61%;
  margin: auto;
  box-shadow: 1px 5px 5px 0px #00000040;
  margin-top: 6rem;
}
.container-register {
  display: flex;
  height: 630px;
  width: 70%;
  margin: auto;
  box-shadow: 1px 5px 5px 0px #00000040;
  margin-top: 4rem;
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
  height: 40px;
  margin-bottom: 2rem;
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
.input-content::placeholder {
  font-size: 20px;
  font-weight: 700;
  color: #00000080;
  width: 100%;
}

.input-content-row {
  border: none;
  outline: none;
  background: none;
  padding: 1rem;
  width: 100%;
  font-size: 16px;
  font-weight: 600 !important;
  color: #00000080;
}
.input-field {
  width: 25vw;
  height: 50px;
  box-shadow: 0px 4px 4px 0px #00000040;
  border-radius: 10px;
  align-items: center;
  display: flex;
}
.input-field-row {
  width: 12vw;
  height: 50px;
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
  height: 50px;
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
  cursor: pointer;
}
.create-login {
  width: 100%;
  height: 27px;
  margin: 1rem;
}

.sign-in-container {
left: 0;
width: 50%;
z-index: 2;
}

.container.right-panel-active .sign-in-container {
transform: translateX(100%);
}

.sign-up-container {
left: 0;
width: 50%;
opacity: 0;
z-index: 1;
}

.container.right-panel-active .sign-up-container {
transform: translateX(100%);
opacity: 1;
z-index: 5;
animation: show 0.6s;
}

@keyframes show {
0%, 49.99% {
    opacity: 0;
    z-index: 1;
}

50%, 100% {
    opacity: 1;
    z-index: 5;
}
}

.overlay-container {
position: absolute;
top: 0;
left: 50%;
width: 50%;
height: 100%;
overflow: hidden;
transition: transform 0.6s ease-in-out;
z-index: 100;
}

.container.right-panel-active .overlay-container{
transform: translateX(-100%);
}

.overlay {
background: #FF416C;
background: -webkit-linear-gradient(to right, #FF4B2B, #FF416C);
background: linear-gradient(to right, #FF4B2B, #FF416C);
background-repeat: no-repeat;
background-size: cover;
background-position: 0 0;
color: #FFFFFF;
position: relative;
left: -100%;
height: 100%;
width: 200%;
transform: translateX(0);
transition: transform 0.6s ease-in-out;
}

.container.right-panel-active .overlay {
transform: translateX(50%);
}

.overlay-panel {
position: absolute;
display: flex;
align-items: center;
justify-content: center;
flex-direction: column;
padding: 0 40px;
text-align: center;
top: 0;
height: 100%;
width: 50%;
transform: translateX(0);
transition: transform 0.6s ease-in-out;
}

.overlay-left {
transform: translateX(-20%);
}

.container.right-panel-active .overlay-left {
transform: translateX(0);
}

.overlay-right {
right: 0;
transform: translateX(0);
}

.container.right-panel-active .overlay-right {
transform: translateX(20%);
}

</style>
