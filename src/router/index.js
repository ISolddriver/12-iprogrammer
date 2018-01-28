import Vue from 'vue'
import Router from 'vue-router'
import Register from '@/pages/register/register'
import Login from '@/pages/login/login'
import Discovery from '@/pages/discovery/discovery'
import Exchange from '@/pages/exchange/exchange'
import Mine from '@/pages/aboutMe/Mine'
import Index from '@/pages/home/index'
import Mask from '../components/mask/mask'
import AttDetail from '@/pages/home/att-detail'
import Publish from '@/pages/exchange/publish/publish'

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
      component: Index,
      children: [{
        path: ':id',
        name: 'att-detail',
        component: AttDetail
      }]
    }, {
      path: '/discovery',
      name: 'discovery',
      component: Discovery
    }, {
      path: '/exchange',
      name: 'exchange',
      component: Exchange
    }, {
      path: '/publish',
      name: 'publish',
      component: Publish
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
    }
  ]
})
