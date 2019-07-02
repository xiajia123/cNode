import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";

Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "home",
      component: Home
    },
    {
      path: "/details",
      name: "details",
      component: () => import("./views/Details")
    },
    {
      path: "/home",
      name: "home",
      component: () => import("./views/Home")
    },
    {
      path: "/signins",
      name: "signins",
      component: () => import("./views/Signins")
    }
  ]
});
