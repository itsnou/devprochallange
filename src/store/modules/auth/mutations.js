export default {
	ADD_NEW_USER_LIST: (state, payload) => {
		state.userList.push(payload);
	},
	UPDATE_PASSWORD_USER: (state, payload) => {
		state.userList = state.userList.map(el => {
			if (payload.email === el.email) {
				return {
					email: payload.email,
					password: payload.password
				}
			}
			return {
				email: el.email,
				password: el.password
			}
		})
	}
}