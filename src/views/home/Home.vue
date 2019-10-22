<template>
  <div id="home">
    <nav-bar class="home-nav">
      <div slot="center">首页</div>
    </nav-bar>
  </div>
</template>

<script>
import NavBar from '@/components/common/navbar/NavBar'
import {getHomeMultidata} from '@/network/home'

export default {
  name: 'home',
  components:{
    NavBar
  },
  data(){
    return{
      homeData:null
    }
  },
  created(){
    //1请求多个数据
    getHomeMultidata().then(res =>{
      this.homeData = res;
    })
  },
  data () {
    return {
      
    }
  },
 
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .home-nav{
    background-color:var(--color-pink);
    color:#fff;
  }
</style>
