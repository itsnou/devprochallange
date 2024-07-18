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
			path: "/register",
			name: "auth-register",
			meta: { requiresAuth: false },
		},
		defaultComponentPath: "Pages/auth/Register",
	},
	{
		params: {
			path: "/recovery",
			name: "auth-recovery",
			meta: { requiresAuth: false },
		},
		defaultComponentPath: "Pages/auth/RecoveryPass",
	},
	{
		params: {
			path: "/dashboard",
			name: "pages-home",
			meta: { requiresAuth: true },
		},
		defaultComponentPath: "Pages/Home/Dashboard",
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