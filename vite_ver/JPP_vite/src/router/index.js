import { createRouter, createWebHistory } from "vue-router";
// import Home from "../views/Home.vue";
import Default from "../views/dashboards/Default.vue";
import Transaction from "../views/dashboards/Transaction.vue";
import IncomeInput from "../views/transaction/IncomeInput.vue";
import ConsumptionInput from "../views/transaction/ConsumptionInput.vue";
import ExchangeInput from "../views/transaction/ExchangeInput.vue"
import Journey from "../views/journey/JourneyDefault.vue"
import JouneyWrite from "../views/journey/JourneyWrite.vue"
import Calendar from "../views/transaction/Calendar.vue"
import TransactionList from "../views/transaction/TransactionList.vue"
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
  {
    path: "/journey",
    name: "JourneyMain",
    component: Journey,
  },
  {
    path: "/journey/place",
    name: "JourneyWrite",
    component: JouneyWrite,
  },
  { // 캘린더 
    path: "/transaction/calendar",
    name: "Calendar",
    component: Calendar,
  },
  { // 거래 내역
    path: "/transaction/list",
    name: "TransactionList",
    component: TransactionList,
  },
  
];

const router = createRouter({
  history: createWebHistory(),
  routes,
  linkActiveClass: "active",
});

export default router;
