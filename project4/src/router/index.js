import Vue from 'vue'
import Router from 'vue-router'
import Count from '@/components/Count'
import Hi from '@/components/Hi'
import Hi1 from '@/components/Hi1'
import Hi2 from '@/components/Hi2'
import Left from '@/components/Left'
import Right from '@/components/Right'
import Params from '@/components/Params'
import Error from '@/components/Error'

Vue.use(Router)

export default new Router({
  mode:'history',
  routes: [
    {
      path: '/',
      name: 'Count',
      components: {
        default:Count,
        left:Left,
        right:Right
      }
    },{
      path:'/Hi',
      component:Hi,
      children:[
        {path:'/',name:'Hi',component:Hi},
        {path:'Hi1',name:'hi1',component:Hi1},
        {path:'Hi2',name:'hi2',component:Hi2},
      ]
    },{
      path:'/Left',
      component:Left
    },{
      path:'/params/:newsId/:newsTitle',
      component:Params,
      // beforeEnter:(to,from,next)=>{
      //   // 此設置可以在路由進入之前設置一個防線
      //   console.log(to)
      //   console.log(from)
      //   next() // 允許跳轉
      //   // next({path:'/'}) // 跳轉道首頁
      // }
    },{
      path:'/GoHome',
      redirect:'/'
    },{
      path:'/goParams/:newsId/:newsTitle',
      redirect:'/params/:newsId/:newsTitle'
    },{
      path:'/hi1',
      component:Hi1,
      alias:'/jspang'
    },{
      path:'*',
      component:Error
    }
  ]
})
