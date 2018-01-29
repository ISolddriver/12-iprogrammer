// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import store from './store/'
import router from './router'
import Fastclick from 'fastclick'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import VueLazyload from 'vue-lazyload'
import './assets/style/base/reset.css'
import './assets/style/base/border.css'
import './assets/style/base/iconfont/iconfont.css'
import 'swiper/dist/css/swiper.css'

import directives from './directives/touch'
directives(Vue)

Vue.config.productionTip = false
Fastclick.attach(document.body)
Vue.use(VueAwesomeSwiper)
Vue.use(VueLazyload, {
  preLoad: 1.3,
  error: 'http://img1.qunarzz.com/sight/p0/1511/d2/d2aec2dfc5aa771290.water.jpg_140x140_abb362a7.jpg',
  loading: 'http://img1.qunarzz.com/sight/p0/1604/1e/1e75f8e1af9fe81f90.img.jpg_140x140_b555f882.jpg',
  attempt: 1
})
// simple history management
const history = window.sessionStorage
let historyCount = history.getItem('count') * 1
router.beforeEach(function (to, from, next) {
  const toIndex = history.getItem(to.path)
  const fromIndex = history.getItem(from.path)

  if (toIndex) {
    if (!fromIndex || parseInt(toIndex, 10) > parseInt(fromIndex, 10) || (toIndex === '0' && fromIndex === '0')) {
      store.commit('UPDATE_DIRECTION', {direction: 'forward'})
    } else {
      store.commit('UPDATE_DIRECTION', {direction: 'reverse'})
    }
  } else {
    ++historyCount
    history.setItem('count', historyCount)
    to.path !== '/' && history.setItem(to.path, historyCount)
    store.commit('UPDATE_DIRECTION', {direction: 'forward'})
  }
  if (/\/http/.test(to.path)) {
    let url = to.path.split('http')[1]
    window.location.href = `http${url}`
  } else {
    next()
  }
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App },
  data: {
    bus: new Vue()
  }
})
