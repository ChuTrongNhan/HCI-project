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
  {
    path: "/plan",
    name: "plan",
    component: () => import("../views/Plan.vue"),
  },
  {
    path: "/create-plan",
    name: "create plan",
    component: () => import("../views/CreatePlan.vue"),
  },
  {
    path: "/edit-plan/:name/:id",
    name: "edit plan",
    component: () => import("../views/EditPlan.vue"),
  },
];

const router = new VueRouter({
  mode: "history",
  routes,
});

export default router;
