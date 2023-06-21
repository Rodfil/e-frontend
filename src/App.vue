<script setup lang="ts">
import SideMenu from '@/components/SideMenu.vue'
import { useRoute } from 'vue-router'

const route = useRoute()
const excludedRoutes = ['/login', '/register', '/']
const shouldRenderSideMenu = () => {
  return !excludedRoutes.includes(route.path)
}

</script>

<template>
  <div class="layout-wrapper">
    <SideMenu v-if="shouldRenderSideMenu()" />
    <div class="main-content">
      <router-view />
    </div>
  </div>
</template>

<style scoped>
.layout-wrapper {
  display: flex;
}
.main-content {
  flex-grow: 1;
}
</style>
