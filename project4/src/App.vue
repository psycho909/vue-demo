<template>
  <div id="app">
    <div>
      <button @click="goBack">後退</button>
      <button @click="goGo">前進</button>
      <button @click="goHome">返回首頁</button>
    </div>
    <div>
      <router-link to="/">Count</router-link>
      <router-link to="/Hi">Hi</router-link>
      <router-link to="/Left">Left</router-link>
      <router-link to="/Params/198/tktasdsadwqe">Params</router-link>
      <router-link to="/GoHome">GoHome</router-link>
      <router-link to="/goParams/20181023/GoGOGOGOGOG">GoHome</router-link>
      <router-link to="/Hi1">Go Hi1</router-link>
      <router-link to="/jspang">Go jspang</router-link>
      <!-- <router-link :to="{name:'hi1',params:{username:'Chen'}}">Hi-1</router-link>
      <router-link :to="{name:'hi2',params:{id:'7788788'}}">Hi-2</router-link> -->
      
    </div>
    <transition name="fade" mode="out-in">
      <router-view></router-view>
    </transition>
    <router-view name="left"></router-view>
    <router-view name="right"></router-view>
  </div>
</template>

<script>
  export default {
    name: 'App',
    components: {},
    data() {
      return {

      }
    },
    methods: {
      goBack(){
        this.$router.go(-1)
      },
      goGo(){
        this.$router.go(1)
      },
      goHome(){
        this.$router.push('/')
      }
    }
  }
</script>

<style>
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
  }
  .fade-enter,
  .fade-leave-to{
    opacity: 0;
  }
  .fade-enter-to,
  .fade-leave{
    opacity: 1;
  }
  .fade-enter-active,
  .fade-leave-active{
    transition:all .3s;
  }
</style>
