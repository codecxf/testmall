<template>
    <div class="tabbar-item" @click="itemclick">
        <div v-if="!isActive"><slot  name="tabbar-img"></slot></div>
        <div v-else><slot name="tabbar-img-act"></slot></div>
        <div :class="{active:isActive}" :style="activeStyle"><slot name="tabbar-title"></slot></div>
        
    </div>
</template>

<script>
export default {
  name: 'tabbaritem',
  data () {
    return {
       // isActive:false
    }
  },
  props:{
      path:String,
      activeColor: {
          type:String,
          default:'red'
      }
  },
  methods: {
      itemclick(){
        this.$router.replace(this.path)
      }
  },
  computed: {
      isActive(){
          return this.$route.path.indexOf(this.path) !== -1
      },
      activeStyle(){
          return this.isActive ? {color:this.activeColor} : {}
      }
  }
 
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    .tabbar-item{ flex:1; text-align: center}
    .tabbar-img img{width:22px}
    
</style>
