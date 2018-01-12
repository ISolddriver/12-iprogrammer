import Vue from 'vue'
import Router from 'vue-router'
import Register from '@/pages/register/register'
import Login from '@/pages/login/login'
import Discovery from '@/pages/discovery/discovery'
import Mine from '@/pages/aboutMe/Mine'
import Index from '@/pages/home/index'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: Index
    }, {
      path: '/register',
      name: 'register',
      component: Register
    }, {
      path: '/login',
      name: 'login',
      component: Login
    }, {
      path: '/discovery',
      name: 'discovery',
      component: Discovery
    }, {
      path: '/mine',
      name: 'mine',
      component: Mine
    }
  ]
})
