<template>
  <div id="app">
    <ul class="ul-list">
        <li><router-link to="/">Home</router-link></li>
        <li><router-link to="/A">A</router-link></li>
        <li><router-link to="/B">B</router-link></li>
    </ul>
    <div class="box">
      <div v-for="(item,index) in list" :key="index" v-on:click="addList(index)">{{item}}</div>
      <span>{{count}}</span>
      <button @click="addCount">add</button>
    </div>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
      list:['','','','','','','','',''],
      count:0
    }
  },
  methods:{
    addCount:function(){
      return this.count++;
    },
    addList:function(index){
      //this.list[index]='x'
      this.list[index]='X'
      console.log(this.list)
    }
  }
}
</script>

<style>
.box{
  display: flex;
  width: 150px;
  height: 150px;
  box-sizing: border-box;
  flex-wrap: wrap;
}
.box div{
  border:1px solid #000;
  box-sizing: border-box;
  width: 50px;
  height: 50px;
  cursor: pointer;
}
</style>
