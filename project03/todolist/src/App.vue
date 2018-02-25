<template>
  <div id="app">
    <!-- 父組件向子組件傳參 -->
    <HeaderView v-bind:msg="title"></HeaderView>
    <img src="./assets/logo.png">

    <!-- 子組件向父組件傳參 -->
    <!-- 在父組件當中做一個事件的綁定 -->
    <ListView v-on:myMsg="getData"></ListView>
    <div>{{msg}}</div>
  </div>
</template>

<script>
// App.vue 是父組件,以下是子組件 組件間通信
// 父組件 --> 子組件  props選項
// 子組件 --> 父組件  自定義事件

import ListView from '@/components/List'
import HeaderView from '@/components/Header'

export default {
  name: 'App',
  components: {
    ListView,
    HeaderView
  },
  data() {
    return {
      title:'Vue入門學習',
      msg:''
    }
  },
  methods:{
    getData(msg){
      this.msg=msg;
      console.log('App.vue: '+msg)
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
</style>
