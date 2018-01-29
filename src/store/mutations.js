import * as types from './types'
import getters from './getters'
const state = {
  direction: 'forward',
  imgUrls: '',
  titles: '',
  contents: ''
}

const mutations = {
  [types.UPDATE_DIRECTION] (state, payload) {
    state.direction = payload.direction
  },
  changeAtt (state, action) {
    state.titles = action.titles
    state.imgUrls = action.imgUrls
    state.contents = action.contents
  }
}

export default {
  state,
  mutations,
  getters
}
