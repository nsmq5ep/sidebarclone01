<template>
  <div id="app">
    <SideBar />
    <div id="main-content">
      <router-view />
    </div>
  </div>
</template>

<script>
import SideBar from './components/SideBar.vue'

export default {
  name: 'App',
  components: {
    SideBar
  }
}
</script>

<style>
#app {
  display: flex;
}

#main-content {
  margin-left: 240px;
}
</style>
