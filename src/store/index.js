import Vue from 'vue'
import Vuex from 'vuex'

import layout from './modules/layout'
import progress from './modules/progress'

Vue.use(Vuex)

export function createStore () {
  return new Vuex.Store({
    modules: {
      layout,
      progress
    }
  })
}
