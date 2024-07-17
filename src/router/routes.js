import LazyLoad from "@/utils/AsyncRouteHelpers";
import index from "./routes/index";


const AllRoutes = [...index];
const routes = AllRoutes.map((route) => {
  const { params, defaultComponentPath } = route;
  const componentObj = {
        component: LazyLoad(defaultComponentPath),
      };
  return {
    ...params,
    ...componentObj,
  };
});

export default [{ path: "/", redirect: '/dashboard' }, ...routes];
