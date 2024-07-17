import actions from "./actions"
import mutations from "./mutations"
import getters from "./getters"
import { users } from '@/utils/api'

export const state = {
	userList: JSON.parse(JSON.stringify(users))
}

export default {
	namespaced: true,
	state,
	getters,
	mutations,
	actions,
};