import { createRouter, createWebHistory } from "vue-router";
// import Home from "../views/Home.vue";
import Default from "../views/dashboards/Default.vue";
import Transaction from "../views/dashboards/Transaction.vue";
import IncomeInput from "../views/transaction/IncomeInput.vue";
import ConsumptionInput from "../views/transaction/ConsumptionInput.vue";
import ExchangeInput from "../views/transaction/ExchangeInput.vue"
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
  {
    path: "/dashboards/incomeinput",
    name: "IncomeInput",
    component: IncomeInput,
  },
  {
    path: "/dashboards/coninput",
    name: "ConsumptionInput",
    component: ConsumptionInput,
  },
  {
    path: "/dashboards/exchangeinput",
    name: "ExchangeInput",
    component: ExchangeInput,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
  linkActiveClass: "active",
});

export default router;
