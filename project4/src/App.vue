<template>
  <div id="app">
    <Dialog 
      title="彈出視窗"
      @ok="handleOk"
      @cancel="handleCancel"
      v-if="isShow"
    ><p>我是內容</p></Dialog>
    <button click="" @click="toggleModel">click</button>
    <img src="./assets/logo.png">
    <router-view/>
  </div>
</template>

<script>
import Dialog from '@/components/Dialog'
export default {
  name: 'App',
  components:{
    Dialog
  },
  data(){
    return {
      isShow:false
    }
  },
  methods:{
    toggleModel(){
      this.isShow=true
    },
    handleOk(){

    },
    handleCancel(){
      this.isShow=false
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
