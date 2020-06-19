import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: Home,
  },
  {
    path: "/payload",
    name: "payload",
    component: () => import("../views/Payload.vue"),
  },
  {
    path: "/status",
    name: "status",
    component: () => import("../views/Status.vue"),
  },
  {
    path: "/unknown",
    name: "unknown",
    component: () => import("../views/UnderConstruct.vue"),
  },
  // {
  //   path: "/about",
  //   name: "about",
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () =>
  //     import(/* webpackChunkName: "about" */ "../views/About.vue"),
  // },
];

const router = new VueRouter({
  mode: "history",
  routes,
});

export default router;
