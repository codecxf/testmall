<template>
  <div id="app">
    <router-view></router-view>
    <main-tabbar></main-tabbar>
  </div>
</template>

<script>
import mainTabbar from '@/components/content/mainTabbar/MainTabbar'

export default {
  name: 'app',
  components: {
    mainTabbar
  }
}
</script>

<style>
  @import 'assets/css/base.css'
</style>
