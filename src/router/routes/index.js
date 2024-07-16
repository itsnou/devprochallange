export default [
    {
		params: {
			path: "/login",
			name: "auth-login",
			meta: { layout: "auth", requiresAuth: false },
		},
		defaultComponentPath: "Pages/auth/Login",
	},
	{
		params: {
			path: "/home",
			name: "auth-login",
			meta: { layout: "auth", requiresAuth: true },
		},
		defaultComponentPath: "Pages/auth/Login",
	}
]