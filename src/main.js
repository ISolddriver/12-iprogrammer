// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Fastclick from 'fastclick'
import VueLazyload from 'vue-lazyload'
import './assets/style/base/reset.css'
import './assets/style/base/border.css'
import './assets/style/base/iconfont/iconfont.css'

Vue.config.productionTip = false
Fastclick.attach(document.body)
Vue.use(VueLazyload, {
  preLoad: 1.3,
  error: 'http://img1.qunarzz.com/sight/p0/1511/d2/d2aec2dfc5aa771290.water.jpg_140x140_abb362a7.jpg',
  loading: 'http://img1.qunarzz.com/sight/p0/1604/1e/1e75f8e1af9fe81f90.img.jpg_140x140_b555f882.jpg',
  attempt: 1
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
