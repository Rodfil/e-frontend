<script setup lang="ts">

</script>

<template>
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
</template>

<style scoped>
.sidebar {
    width: 14vw;
    height: 100vh;
    background-color: #542B7C;
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
.sidebar-menu {
   padding: 1rem;
}
.sidebar-menu ul {
   list-style-type: none;
   line-height: 5;
}

.sidebar-menu ul li {
    color: #FFFFFF;
    font-size: 25px;
    font-weight: 400;
}
.fas {
    padding-right: 5px;
}
</style>
