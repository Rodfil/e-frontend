<script setup lang="ts">

</script>

<template>
  <div class="main-profile-wrapper">
    <div class="header-profile-content">
      <div class="account-settings">
        <span>Back</span>
        <h2>Acount Settings</h2>
      </div>
      <div class="account-buttons">
        <button>Cancel</button>
        <button>Confirm</button>
      </div>
    </div>
    <hr>
    <div class="form-wrapper">
      <div class="left-form-content">
        <div class="left-header">
          <h2>User Information</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit,
            sed do eiusmod tempor incididunt ut labore et dolore
            magna aliqua.
          </p>
        </div>
        <div class="form-fields">
          <label for="Email">Email Address</label>
          <input
            class="form-input"
            type="text"
            placeholder="Email Address"
          >
          <div class="fullname-wrapper">
            <label for="Email">Full Name</label>
            <div class="fullname-holder">
              <input
                class="firstname-input"
                type="text"
                placeholder="Firstname"
              >
              <input
                class="lastname-input"
                type="text"
                placeholder="Lastname"
              >
            </div>
          </div>
          <label for="Email">Address</label>
          <input
            class="form-input"
            type="text"
            placeholder="Email Address"
          >
          <div class="fullname-wrapper">
            <div class="fullname-holder">
              <input
                class="firstname-input"
                type="text"
                placeholder="Gender"
              >
              <input
                class="lastname-input"
                type="text"
                placeholder="Birthdate"
              >
            </div>
          </div>
          <div class="fullname-wrapper">
            <div class="fullname-holder">
              <input
                class="firstname-input"
                type="text"
                placeholder="Age"
              >
              <input
                class="lastname-input"
                type="text"
                placeholder="Voter Registration Status"
              >
            </div>
          </div>
          <input
            class="form-input"
            type="password"
            placeholder="Password"
          >
        </div>
      </div>
      <div class="right-form-content">
        <h2 class="profile-photo">
          Profile Photo
        </h2>
        <div class="image-photo">
          <img
            src="@/assets/img/left-image.png"
            alt=""
          >
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>

.image-photo {
    display: flex;
    justify-content: center;
}
.image-photo img {
    max-width: 50%;
    height: 166px;
    border-radius: 50%;
}
.profile-photo {
    padding-left: 2rem;
}
.fullname-wrapper {
    display: flex;
    flex-direction: column;
    width: 80%;
    margin-bottom: 1rem;
}

.fullname-holder {
    display: flex;
    justify-content: space-between;
}
.form-wrapper {
    display: flex;
    flex-direction: row;
    width: 100%;
}
.form-input {
    width: 80%;
    margin-top: 0.5rem;
    height: 30px;
    border-radius: 8px;
    border: 1px solid #00000040;
    margin-bottom: 1rem;
}
.firstname-input {
    width: 45%;
    margin-top: 0.5rem;
    height: 35px;
    border-radius: 8px;
    border: 1px solid #00000040;
}
.lastname-input {
    width: 45%;
    margin-top: 0.5rem;
    height: 35px;
    border-radius: 8px;
    border: 1px solid #00000040;
}
.firstname-input::placeholder,
.lastname-input::placeholder,
.form-input::placeholder {
    padding: 0.6rem;
}

.form-fields {
    display: flex;
    flex-direction: column;
    margin-top: 2rem;
}

.left-form-content {
    width: 50%;
}
.right-form-content {
    width: 50%;
}
 hr {
    border: none;
    border-top: 3px solid #342474;
    width: 100%;
  }
.main-profile-wrapper {
    padding: 3rem;
}
.account-settings {
    display: flex;
    align-items: center;
    gap: 2rem;
}
.account-settings span {
    font-size: 25px;
    color: #F48D2D;
    cursor: pointer;
}
.account-settings h2 {
    font-size: 30px;
    font-weight: 600;
}
.account-buttons {
    display: flex;
    gap: 1rem;
}
.account-buttons button{
    cursor: pointer;
    border: none;
    background: none;
}
.account-buttons button:nth-child(1){
    cursor: pointer;
    background-color: #F48D2D;
    color: #FFFF;
    width: 98px;
    height: 50px;
    font-size: 15px;
    border-radius: 30px;
}
.account-buttons button:nth-child(2){
    cursor: pointer;
    background-color: #041C74;
    color: #FFFF;
    width: 98px;
    height: 50px;
    font-size: 15px;
    border-radius: 30px;
}
.header-profile-content {
    display: flex;
    justify-content: space-between;
    flex-grow: 1;
    align-items: center;
}

</style>
