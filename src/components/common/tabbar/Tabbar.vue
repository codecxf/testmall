<template>
  <div class="tabbar">
    <slot></slot>
  </div>
</template>

<script>

export default {
  name: 'tabbar',
  data () {
    return {
        
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    .tabbar{ height:49px;position:fixed; left:0; right:0;bottom:0; display:flex}
   
</style>
