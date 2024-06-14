<template>
  <div
    id="sidenav-collapse-main"
    class="w-auto h-auto collapse navbar-collapse max-height-vh-100 h-100"
  >
    <ul class="navbar-nav">
      
      <li class="nav-item" :class="getRoute() === 'dashboards' ? 'active' : ''">
        <sidenav-collapse
          collapse-ref="dashboardsExamples"
          nav-text="Dashboards"
          :class="getRoute() === 'dashboards' ? 'active' : ''"
        >
          <template #icon>
            <i class="material-icons-round opacity-10">dashboard</i>
          </template>
          <template #list>
            <ul class="nav pe-0">
              <!-- nav links -->
              <sidenav-item
                :to="{ name: 'Default' }"
                mini-icon="H"
                text="Home"
              />
              <sidenav-item
                :to="{ name: 'Report' }"
                mini-icon="R"
                text="Report"
              />            
            </ul>
          </template>
        </sidenav-collapse>
      </li>
      <li class="mt-3 nav-item">
        <h6
          class="text-xs ps-4 text-uppercase font-weight-bolder text-white"
          :class="isRTL ? 'me-4' : 'ms-2'"
        >
          Travel
        </h6>
      </li>
      <li class="nav-item" :class="getRoute() === 'dashboards' ? 'active' : ''">
        <sidenav-collapse
          collapse-ref="travelExamples"
          nav-text="Travel"
          :class="getRoute() === 'travel' ? 'active' : ''"
        >
          <template #icon>
            <i class="material-icons-round opacity-10">shopping_basket</i>
          </template>
          <template #list>
            <ul class="nav pe-1">
              <!-- nav links -->
              <sidenav-item
                :to="{name: 'JourneyMain'}"
                mini-icon="JM"
                text="Journey"
                />
                  
              <sidenav-item
              :to="{name: 'JourneyWrite'}"
              mini-icon="JW"
              text="Journey write"
            />
                
              
              
            </ul>
          </template>
        </sidenav-collapse>
      </li>

      <li class="nav-item" :class="getRoute() === 'dashboards' ? 'active' : ''">
        <sidenav-collapse
          collapse-ref="transactionExamples"
          nav-text="Transaction"
          :class="getRoute() === 'transaction' ? 'active' : ''"
        >
          <template #icon>
            <i class="material-icons-round opacity-10">shopping_basket</i>
          </template>
          <template #list>
            <ul class="nav pe-1">
              <!-- nav links -->
              <sidenav-item
                :to="{ name: 'Calendar' }"
                  mini-icon="C"
                  text="Calendar"
                />
                <sidenav-item
                :to="{ name: 'TransactionList' }"
                  mini-icon="L"
                  text="List"
                />
              <sidenav-item
                  :to="{ name: 'IncomeInput' }"
                  mini-icon="I"
                  text="Income Input"
                />
                <sidenav-item
                  :to="{ name: 'ConsumptionInput' }"
                  mini-icon="C"
                  text="Consume Input"
                />
                <sidenav-item
                  :to="{ name: 'ExchangeInput' }"
                  mini-icon="E"
                  text="Exchange Input"
                />
              
              
            </ul>
          </template>
        </sidenav-collapse>
      </li>

    </ul>
  </div>
</template>
<script>
import SidenavItem from "./SidenavItem.vue";
import SidenavCollapse from "./SidenavCollapse.vue";
import SidenavCollapseItem from "./SidenavCollapseItem.vue";
import { mapState } from "vuex";
export default {
  name: "SidenavList",
  components: {
    SidenavItem,
    SidenavCollapse,
    SidenavCollapseItem
  },
  data() {
    return {
      title: "Soft UI Dashboard PRO",
      controls: "dashboardsExamples",
      isActive: "active"
    };
  },
  computed: {
    ...mapState(["isRTL"])
  },
  methods: {
    getRoute() {
      const routeArr = this.$route.path.split("/");
      
      return routeArr[1];
    }
  }
};
</script>
