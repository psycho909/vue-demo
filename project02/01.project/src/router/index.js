import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import A from '@/components/A'
import B from '@/components/B'
import AA from '@/components/AA/AA'
import AB from '@/components/AA/AB'

Vue.use(Router)

export default new Router({
  linkActiveClass:'active',
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Hello
    },
    {
      path: '/A/:id',
      component: A,
      children:[
        {
          path:'AA',
          component:AA
        },
        {
          path:'AB',
          component:AB
        }
      ]
    },
    {
      path: '/B',
      name: 'B',
      component: B
    }
  ]
})
