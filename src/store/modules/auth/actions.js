export default {
  doAddNewUser({ commit, state }, payload) {
    try {
      const isExist = state.userList.find(el => el.email === payload.email)
      if (isExist) {
        throw Error
      }
      commit('ADD_NEW_USER_LIST', payload)
      return
    } catch (error) {
      throw new Error
    }
  }
}