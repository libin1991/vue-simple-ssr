import * as types from '../mutation-types'

// Initial State
const state = {
  viewport: { width: 0, height: 0 },
  scrollPercentage: 0,
  contentHeight: 0
}

// Getters
const getters = {
  viewport: state => state.viewport,
  scrollPercentage: state => state.scrollPercentage,
  contentHeight: state => state.contentHeight
}

// Mutations
const mutations = {
  [types.LAYOUT_SET_VIEWPORT] (state) {
    state.viewport = {width: window.innerWidth, height: window.innerHeight}
  },
  [types.LAYOUT_SET_CONTENT_HEIGHT] (state, contentHeight) {
    state.contentHeight = contentHeight
  }  
}

// Actions
const actions = {
  setViewport ({ commit }) {
    commit(types.LAYOUT_SET_VIEWPORT)
  },
  setContentHeight ({ commit }, contentHeight) {
    commit(types.LAYOUT_SET_CONTENT_HEIGHT, contentHeight)
  }  
}

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions
}