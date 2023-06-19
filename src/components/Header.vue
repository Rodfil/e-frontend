<script setup lang="ts">

</script>

<template>
  <nav class="header-menu">
    <ul class="header-content">
      <li>
        <h2 class="home">
          Home
        </h2>
      </li>
      <li>
        <h2 class="features">
          Features
        </h2>
      </li>
      <li>
        <h2 class="about-us">
          About Us
        </h2>
      </li>
      <div class="right-menu">
        <li>
          <h2 class="login">
            Log In
          </h2>
        </li>
        <li>
          <div class="started-wrapper">
            <h2 class="get-started">
              Get Started
            </h2>
          </div>
        </li>
      </div>
    </ul>
  </nav>
</template>

<style scoped>
.header-menu {
    display: flex;
}
.header-content {
    display: flex;
}
.right-menu {
    display: flex;
    position: absolute;
    right: 0;
}
.header-content li {
    padding: 2rem 8rem 0 0;
    list-style-type: none;
    font-weight: 500;
    font-size: 16px;
    color: #00000080;
}

.started-wrapper {
  border-radius: 20px;
  padding: 1px 20px 1px 20px;
  background-color: #FFFFFF;
  box-shadow: 0px 4px 4px 0px #00000040;
}
.get-started {

}
</style>
