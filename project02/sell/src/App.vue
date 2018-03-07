<template>
  <div id="app">
    <!-- 頭部 -->
    <Myheader v-bind:poiInfo="poiInfo"></Myheader>

    <!-- 導航 -->
    <Mynav :commentNum="commentNum"></Mynav>

    <!-- 主體內容 -->
    <keep-alive>
      <router-view></router-view>
    </keep-alive>
    
  </div>
</template>

<script>
// 導入
import Myheader from '@/components/Header/Header'
import Mynav from '@/components/Nav/Nav'
export default {
  name: 'App',
  components: {
    // 註冊
    Myheader,
    Mynav
  },
  data() {
    return {
      // header組件需要的信息
      poiInfo: {},
      commentNum:0
    }
  },
  created() { //發起異步請求，獲取數據
    var that=this;
    // 透過axios發起get請求
    this.$axios.get('/api/goods')
      .then(function(response){ // 獲取到數據
        var dataSource=response.data;
        if(dataSource.code == 0){
          that.poiInfo=dataSource.data.poi_info;
        }
      })
      .catch(function(error){ // 出錯處理
        console.log(error)
      })
    this.$axios.get('/api/ratings')
      .then(function(response){ // 獲取到數據
        var dataSource=response.data;
        if(dataSource.code == 0){
          that.commentNum=dataSource.data.comment_num;
        }
      })
      .catch(function(error){ // 出錯處理
        console.log(error)
      })
  }
}
</script>

<style>
#app{
  display: flex;
  flex-direction: column;
}
</style>
