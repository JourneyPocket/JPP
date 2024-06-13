<template>
  <div
    id="sidenav-collapse-main"
    class="w-auto h-auto collapse navbar-collapse max-height-vh-100 h-100"
  >
    <ul class="navbar-nav">
      
      <li class="nav-item" :class="getRoute() === 'dashboards' ? 'active' : ''">
        <sidenav-collapse
          collapse-ref="brooklynAlice"
          nav-text="Brooklyn Alice"
          :class="getRoute() === 'brooklynAlice' ? 'active' : ''"
        >
          <template #icon>
            <img src="../../assets/img/team-3.jpg" class="avatar" />
          </template>
          <template #list>
            <ul class="nav pe-0">
              <!-- nav links -->
              <sidenav-item
                to="Profile Overview"
                mini-icon="MP"
                text="My Profile"
              />
              <sidenav-item
                to="Settings"
                mini-icon="S"
                text="Settings"
              />
              <sidenav-item
                to="Signin Basic"
                mini-icon="L"
                text="Logout"
              />
            </ul>
          </template>
        </sidenav-collapse>
      </li>
      <hr class="horizontal light mt-2 mb-2" />
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
              <sidenav-item
                :to="{ name: 'Transaction' }"
                mini-icon="T"
                text="Transaction History"
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
                  to="Default"
                  mini-icon="D"
                  text="Analytics"
                />
                <sidenav-item
                  to="Sales"
                  mini-icon="S"
                  text="Sales"
                />
              
              <sidenav-collapse-item
                refer="projectsExample"
                mini-icon="P"
                text="Projects"
              >
              <template #nav-child-item>
                <sidenav-item
                  to="Default"
                  mini-icon="D"
                  text="Analytics"
                />
                <sidenav-item
                  to="Sales"
                  mini-icon="S"
                  text="Sales"
                />
              </template>
            </sidenav-collapse-item>
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
