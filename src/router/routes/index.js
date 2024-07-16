export default [
    {
		params: {
			path: "/login",
			name: "auth-login",
			meta: { requiresAuth: false },
		},
		defaultComponentPath: "Pages/auth/Login",
	},
	{
		params: {
			path: "/home",
			name: "pages-home",
			meta: { requiresAuth: true },
		},
		defaultComponentPath: "Pages/Home/index",
	},
	{
	params: {
		path: "*",
		name: "PageNotFound",
		meta: { layout: "full", requiresAuth: false },
	},
	defaultComponentPath: "Pages/Errors/Error404",
	}
]