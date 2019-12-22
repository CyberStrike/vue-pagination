import Vue from 'vue'
import Vuex from 'vuex'

import people from '@/store/data/people'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    people: people
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  }
})
