
import * as types from '../mutation-types'

// Initial State
const state = {
  images: []
}

// Getters
const getters = {
  images: state => state.images
}

// Mutations
const mutations = {
  [types.PROGRESS_ADD_IMAGE] (state, imageURL) { state.images.push(imageURL) }
}

// Actions
const actions = {
  addImageProgress ({ commit }, imageURL) {
    commit(types.PROGRESS_ADD_IMAGE, imageURL)
  }
}

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions
}