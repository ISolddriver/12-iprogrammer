import Vue from 'vue'
import actions from './actions'
import mutations from './mutations'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    mutations
  },
  actions
})
