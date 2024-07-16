import Vue from "vue";
import VueRouter from "vue-router";
import routes from "./routes";


const originalPush = VueRouter.prototype.push;
VueRouter.prototype.push = function push(location) {
  return originalPush.call(this, location).catch((err) => err);
};

Vue.use(VueRouter);
const router = new VueRouter({
  routes,
  mode: "history",
  scrollBehviour(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition;
    }
    if (to.hash) {
      return {
        selector: to.hash,
      };
    }
  },
});

router.afterEach(() => {
    window.scrollTo(0, 0);
});

router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requiresAuth)) {
    console.log('paso', to)
    // si la ruta requiere autorización, verifica que el usuario esté logueado
    // si no, redirecciona al login.
    if (!localStorage.getItem('token')) {      
      sessionStorage.setItem('devproChallange', to.fullPath)
      window.location.href = '/login'
    } else {
      let redirect = sessionStorage.getItem('devproChallange')
      if (redirect !== undefined && redirect !== null) {
        sessionStorage.removeItem('devproChallange')
        next({ path: redirect })
      }else {
        next()
      }
    }
  } else {
    next()
  }
})

export default router;
