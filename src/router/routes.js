import LazyLoad from "@/utils/AsyncRouteHelpers";
import index from "./routes/index";

const AppSidebar = () =>
  import(
    /* webpackChunkName: "Vusenavs", webpackPreload: true */ "@/layouts/App/side-bar"
  );
const AppToolbar = () =>
  import(
    /* webpackChunkName: "Vusenavs", webpackPreload: true */ "@/layouts/App/Toolbar"
  );
const AppFooter = () =>
  import(
    /* webpackChunkName: "Vusenavs",  webpackPreload: true */ "@/layouts/App/Footer"
  );

const AllRoutes = [...index];
const routes = AllRoutes.map((route) => {
  const { params, defaultComponentPath, navs } = route;
  const componentObj = navs
    ? {
        components: {
          default: LazyLoad(defaultComponentPath),
          sidebar: AppSidebar,
          header: AppToolbar,
          footer: AppFooter,
        },
      }
    : {
        component: LazyLoad(defaultComponentPath),
      };
  return {
    ...params,
    ...componentObj,
  };
});

export default [{ path: "/" }, ...routes];
