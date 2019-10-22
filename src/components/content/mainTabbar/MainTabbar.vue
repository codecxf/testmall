<template>
    <Tabbar>
        <Tabitem path="/home" activeColor="#f00">
          <div slot="tabbar-img" class="tabbar-img">
              <img src="@/assets/img/icon/home.svg" />
          </div>
          <div slot="tabbar-img-act" class="tabbar-img">
              <img src="@/assets/img/icon/home-active.svg" />
          </div>
          <div slot="tabbar-title" class="tabbar-title">
              首页
          </div>
      </Tabitem>
      <Tabitem path="/category" activeColor="red">
            <div slot="tabbar-img" class="tabbar-img">
              <img src="@/assets/img/icon/category.svg" />
          </div>
          <div slot="tabbar-img-act" class="tabbar-img">
              <img src="@/assets/img/icon/category-active.svg" />
          </div>
          <div slot="tabbar-title" class="tabbar-title">
              分类
          </div>
      </Tabitem>
      <Tabitem path="/cart" activeColor="red">
            <div slot="tabbar-img" class="tabbar-img">
              <img src="@/assets/img/icon/cart.svg" />
          </div>
          <div slot="tabbar-img-act" class="tabbar-img">
              <img src="@/assets/img/icon/cart-active.svg" />
          </div>
          <div slot="tabbar-title" class="tabbar-title">
              购物车
          </div>
      </Tabitem>
      <Tabitem path="/profile" activeColor="red">
          <div slot="tabbar-img" class="tabbar-img">
              <img src="@/assets/img/icon/profile.svg" />
          </div>
          <div slot="tabbar-img-act" class="tabbar-img">
              <img src="@/assets/img/icon/profile-active.svg" />
          </div>
          <div slot="tabbar-title" class="tabbar-title">
              我的
          </div>
      </Tabitem>
    </Tabbar>
</template>

<script>
import Tabbar from '@/components/common/tabbar/Tabbar'
import Tabitem from '@/components/common/tabbar/Tabitem'
export default {
  name: 'mainTabbar',
  data(){
    return{
      
    }
  },
  components:{
    Tabbar,
    Tabitem
  }
}
</script>

<style>

</style>
