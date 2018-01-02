import * as types from '../mutation-types'

// Initial State
const state = {
  viewport: { width: 0, height: 0 },
  content: { width: 0, height: 0 },
  scroll: { size: 0, position: 0 }
}

// Getters
const getters = {
  viewport: state => state.viewport,
  content: state => state.content,
  scroll: state => state.scroll
}

// Mutations
const mutations = {
  [types.LAYOUT_SET_VIEWPORT] (state, viewport) {
    state.viewport = viewport
  },
  [types.LAYOUT_SET_CONTENT] (state, content) {
    state.content = content
    if (state.viewport.height < content.height) {
      state.scroll.size = state.viewport.height / content.height * 100
    } else {
      state.scroll.size = 0
    }
  },
  [types.LAYOUT_SET_SCROLL_POSITION] (state, scrollPosition) {
    let scrollSpace = state.content.height - state.viewport.height
    state.scroll.position = scrollPosition / scrollSpace * 100
  }
}

// Actions
const actions = {
  setViewport ({ commit }, viewport) {
    commit(types.LAYOUT_SET_VIEWPORT, viewport)
  },
  setContent ({ commit }, content) {
    commit(types.LAYOUT_SET_CONTENT, content)
  },
  setScrollPosition ({ commit }, scrollPosition) {
    commit(types.LAYOUT_SET_SCROLL_POSITION, scrollPosition)
  }
}

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions
}
