import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import Login from '@/page/Login'
import Index from '@/page/Index'
import MyIndex from '@/page/MyIndex'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Login',
      component: Login
    },{
      path: '/index',
      name: 'Index',
      component: Index
    },{
      path: '/myIndex',
      name: 'MyIndex',
      component: MyIndex
    }
  ]
})
