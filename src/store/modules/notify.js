export const state = {
  type: '',
  message: '',
  loading: false,
  icon: ''
}

export const getters = {
  isLoading: (state) => state.loading ? state.loading : false,
  hasMessage: (state) => (state.message !== '' && state.message !== undefined),
  notification: (state) => { state.type, state.message }
}

export const mutations = {
  setNotify: (state, notify) => {
    state.type = notify.type
    state.message = notify.message
    state.icon = notify.icon
  },
  toggleLoading: (state, loading) => {
    state.loading = loading
  },
  clearNotify: (state) => {
    state.type = ''
    state.message = ''
    state.icon = ''
  }
}

export const actions = {
  doSetNotify: ({ commit }, notify) => {
    commit('setNotify', notify)
  },
  doToggleLoading: ({ commit }, loading) => {
    commit('toggleLoading', loading)
  },
  doClearNotify: ({ commit }) => {
    commit('clearNotify')
  }
}

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions,
};