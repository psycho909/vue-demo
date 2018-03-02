import Vue from 'vue'
import Router from 'vue-router'
import Vuex from 'vuex'
import shop from '@/components/pages/shop'
import products from '@/components/pages/products'
import shoppingcart from '@/components/pages/shoppingCart'

Vue.use(Router)
Vue.use(Vuex)

export default new Router({
  routes:[
    {
      path:"/",
      component:shop
    },
    {
      path:'/products',
      component:products
    },
    {
      path:'/cart',
      component:shoppingcart
    }
  ]
})
