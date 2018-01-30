import Vue from 'vue'
import Router from 'vue-router'
import Register from '@/pages/register/register'
import Login from '@/pages/login/login'
import Discovery from '@/pages/discovery/discovery'
import Exchange from '@/pages/exchange/exchange'
import Mine from '@/pages/aboutMe/Mine'
import Index from '@/pages/home/index'
import Mask from '../components/mask/mask'
import Publish from '@/pages/exchange/publish/publish'
import MyPublish from '@/pages/mypublish/mypublish'
import Funs from '@/pages/exchange/myfuns/funs'
import Follow from '@/pages/exchange/myfollow/follow'
import Address from '@/pages/aboutMe/address'
import Setting from '@/pages/aboutMe/setting'
import AttDetail from '@/pages/detail/attDetail'
import Classify from '@/pages/home/classifyDetail'
import Rec from '@/pages/aboutMe/rec'

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
        name: 'classify-detail',
        component: Classify
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
    }, {
      path: '/mypublish',
      name: 'mypublish',
      component: MyPublish
    }, {
      path: '/funs',
      name: 'funs',
      component: Funs
    }, {
      path: '/follow',
      name: 'follow',
      component: Follow
    }, {
      path: '/address',
      name: 'address',
      component: Address
    }, {
      path: '/attDetail',
      name: 'att-detail',
      component: AttDetail,
      props: true
    }, {
      path: '/setting',
      name: 'setting',
      component: Setting
    }, {
      path: '/rec',
      name: 'rec',
      component: Rec
    }
  ]
})
