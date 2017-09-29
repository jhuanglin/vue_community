import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import Login from '@/page/Login'
import Index from '@/page/Index'
import MyIndex from '@/page/MyIndex'
import My from '@/page/My'
import About from '@/page/About'
import Message from '@/page/Message'

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
      path: '/my',
      name: 'My',
      component: My
    },{
      path: '/about',
      name: 'About',
      component: About
    },{
      path: '/message',
      name: 'Message',
      component: Message
    }
  ]
})
