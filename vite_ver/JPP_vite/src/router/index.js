import { createRouter, createWebHistory } from "vue-router";
// import Home from "../views/Home.vue";
import Default from "../views/dashboards/Default.vue";
import Transaction from "../views/dashboards/Transaction.vue";
import IncomeInput from "../views/transaction/IncomeInput.vue";
import ConsumptionInput from "../views/transaction/ConsumptionInput.vue";
import ExchangeInput from "../views/transaction/ExchangeInput.vue"
import Jouney from "../views/journey/JourneyDefault.vue"
import JouneyWrite from "../views/journey/JourneyWrite.vue"
import Calendar from "../views/transaction/Calendar.vue"
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
    name: "Journey Main",
    component: Jouney,
  },
  {
    path: "/journey/place",
    name: "Journey Write",
    component: JouneyWrite,
  },
  { // 캘린더 
    path: "/travel/calendar", // 여기 바꾸기
    name: "Calendar",
    component: Calendar,
  }
  
];

const router = createRouter({
  history: createWebHistory(),
  routes,
  linkActiveClass: "active",
});

export default router;
