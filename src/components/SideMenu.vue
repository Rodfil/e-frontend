<script setup lang="ts">

</script>

<template>
  <div class="main-dashboard">
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
                <i class="fas fa-home" /><span>Home</span>
              </li>
              <li>
                <i class="fas fa-bell" /><span>Notification</span>
              </li>
              <li>
                <i class="fas fa-star" /><span>Feedback</span>
              </li>
              <li>
                <i class="fas fa-book" /><span>About Us</span>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
    <div class="main-content">
      <div class="header-profile">
        <div class="profile-picture">
          <img
            src="@/assets/img/left-image.png"
            alt=""
          >
          <div class="holder-name">
            <span class="fullname">Rodfil</span>
            <span class="manage-profile">Manage Profile</span>
          </div>
        </div>
      </div>
      <div class="request-document-wrapper">
        <div class="frequently-documents-wrapper">
          <div class="document-content">
            <span>Frequently Requested Documents</span>
          </div>
        </div>
        <div class="requirements-wrapper">
          <div class="requirements">
            <h2 class="requirement-name">
              Barangay Clearance
            </h2>
            <div class="requirements-desc">
              <span>Requirements</span>
              <span>
                Lorem ipsum dolor sit amet, consectetur</span>
            </div>
            <div class="requirements-desc">
              <span>Fee</span>
              <span>
                Php 12.34</span>
            </div>
            <button class="request-button">
              Request Now!
            </button>
          </div>
          <hr>
          <div class="requirements">
            <h2 class="requirement-name">
              Certificate of Indigency
            </h2>
            <div class="requirements-desc">
              <span>Requirements</span>
              <span>
                Lorem ipsum dolor sit amet, consectetur</span>
            </div>
            <div class="requirements-desc">
              <span>Fee</span>
              <span>
                Php 12.34</span>
            </div>
            <button class="request-button">
              Request Now!
            </button>
          </div>
        </div>
      </div>
      <div class="booking-summary-wrapper">
        <div class="summary-title">
          <span>Booking Summary</span>
        </div>
        <table>
          <tr>
            <th>dasdasdas</th>
          </tr>
        </table>
      </div>
    </div>
  </div>
</template>

<style scoped>
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
.booking-summary-wrapper {
  background-color: #F6F6F6;
  width: 70vw;
  height: 50%;
  box-shadow: 0px 4px 4px 0px #00000040;
  border-radius: 30px;
  margin-top: 2rem;
}

hr {
  border: none;
  border-top: 3px solid #342474;
  width: 96%;
}
.request-button {
  margin-left: auto;
  margin-right: auto;
  width: 158px;
  height: 48px;
  border-radius: 10rem;
  font-size: 18px;
  color: #342474;
  background-color: #F48D2D;
  font-weight: 700;
  border: none;
}
.requirements-wrapper {
  width: 100%;
}
.requirement-name {
  font-size: 25px;
  color: #041C74;
  font-weight: 600;
  width: 25%;
}

.requirements-desc span:nth-child(1) {
  text-decoration: underline;
  font-size: 18px;
  color: #FB4C8E;
}
.requirements-desc span:nth-child(2) {
  font-size: 15px;
  color: #FB4C8E;
}
.requirements-desc {
  display: grid;
}
.requirements {
  display: flex;
  margin-left: 2rem;
  align-items: center;
  gap: 4rem;
}
.main-dashboard {
  display: flex;
}
.frequently-documents-wrapper {
  display: flex;
  justify-content: center;
  align-items: center;
}
.document-content {
  background-color: #542B7C;
  width: 300px;
  height: 5vh;
  border-radius: 30px;
  margin-top: -20px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0.5rem;
}
.document-content span {
  color: #F6F6F6;
}
.request-document-wrapper {
  background-color: #F6F6F6;
  width: 70vw;
  height: 200px;
  box-shadow: 0px 4px 4px 0px #00000040;
  border-radius: 30px;

}
.main-content {
  display: flex;
  align-items: center;
  flex-direction: column;
  flex-grow: 1;
}
.header-profile {
  width: 175px;
  height: 60px;
  background-color: #F48D2D;
  margin: 2rem 5rem;
  display: flex;
  justify-content: flex-end;
  border-radius: 30px;
  margin-left: auto;
}
.profile-picture {
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 1rem;
  padding: 1rem;
}
.profile-picture img {
  border-radius: 50%;
  background-color: #D9D9D9;
  max-width: 24%;
}
.holder-name {
  display: grid;
  gap: 0.2rem;
}
.fullname {
  font-size: 15px;
  font-weight: 600;
  line-height: 1;
  color: #FFFFFF;
}
.manage-profile {
  font-size: 10px;
  line-height: 1;
  color: #FFFFFF;
  width: 100%;
}
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
}
.fas {
    padding-right: 5px;
}
</style>
