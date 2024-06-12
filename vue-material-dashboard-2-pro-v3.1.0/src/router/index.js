import { createRouter, createWebHistory } from "vue-router";
// import Home from "../views/Home.vue";
import Default from "../views/dashboards/Default.vue";
import Transaction from "../views/dashboards/Transaction.vue";

const routes = [
  {
    path: "/",
    name: "/",
    redirect: "/dashboards/dashboard-default",
  },
  {
    path: "/dashboards/dashboard-default",
    name: "Default",
    component: Default,
  },
  {
    path: "/dashboards/transaction",
    name: "Transaction",
    component: Transaction,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
  linkActiveClass: "active",
});

export default router;
