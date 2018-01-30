import * as types from './types'
import getters from './getters'
const state = {
  direction: 'forward',
  imgUrls: '',
  titles: '',
  contents: '',
  province: '',
  city: '',
  area: ''
}

const mutations = {
  [types.UPDATE_DIRECTION] (state, payload) {
    state.direction = payload.direction
  },
  changeAtt (state, action) {
    state.titles = action.titles
    state.imgUrls = action.imgUrls
    state.contents = action.contents
    state.address = action.address
  },
  changeAddr (state, action) {
    state.province = action.province
    state.city = action.city
    state.area = action.area
  }
}

export default {
  state,
  mutations,
  getters
}
