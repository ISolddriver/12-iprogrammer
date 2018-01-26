import Vue from 'vue'
import Router from 'vue-router'
import Register from '@/pages/register/register'
import Login from '@/pages/login/login'
import Discovery from '@/pages/discovery/discovery'
import Exchange from '@/pages/exchange/exchange'
import Mine from '@/pages/aboutMe/Mine'
import Index from '@/pages/home/index'
import Mask from '../components/mask/mask'
import MyPublish from '@/pages/mypublish/mypublish'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'mask',
      component: Mask
    }, {
      path: '/index',
      name: 'index',
      component: Index
    }, {
      path: '/discovery',
      name: 'discovery',
      component: Discovery
    }, {
      path: '/exchange',
      name: 'exchange',
      component: Exchange
    }, {
      path: '/mine',
      name: 'mine',
      component: Mine
    }, {
      path: '/register',
      name: 'register',
      component: Register
    }, {
      path: '/login',
      name: 'login',
      component: Login
    }, {
      path: '/publish',
      name: 'mypublish',
      component: MyPublish
    }
  ]
})
