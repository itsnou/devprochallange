import Vue from 'vue'
import Vuex from 'vuex'
import notify from './modules/notify'
import auth from './modules/auth/index'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
  },
  getters: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    auth,
    notify
  }
})
