<template>
  <div id="app">
    <ul class="ul-list">
        <li><router-link to="/">Home</router-link></li>
        <li><router-link to="/A">A</router-link></li>
        <li><router-link to="/B">B</router-link></li>
    </ul>
    <router-view/>
    <span>childName / {{childName}}</span>
    <input type="text" v-model="name">
    <input type="text" v-model="age">
    <hr>
    <Child 
      :my-name="name" 
      :my-age="age" 
      @update:my-name="val=>name=val"
      @update:my-age="val=>age=val"
      @addCount="getName"
    ></Child>
  </div>
</template>

<script>
import Child from '@/components/Child'

export default {
  name: 'App',
  components:{
    Child
  },
  data() {
    return {
      list:['','','','','','','','',''],
      count:0,
      name:'Chings',
      age:1001,
      childName:''
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
    },
    getName:function(val){
      console.log('father : '+val)
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
