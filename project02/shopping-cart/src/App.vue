<template>
  <div id="app">
    <navbar></navbar>
    <router-view/>
  </div>
</template>

<script>
import navbar from '@/components/shared/navbar'
export default {
  name: 'App',
  components:{
    navbar
  }
}
</script>

<style>
#app {
    font-size: 18px;
}
#app .commonbtn {
    font-size: 18px;
    padding: 10px 30px;
    border: 1px solid #FF7744;
    color: #FF7744;
}
#app .commonbtn:hover {
    background: #FF7744;
    color: #fff;
}
</style>
