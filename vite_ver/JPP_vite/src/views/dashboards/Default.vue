<template>
  <div class="py-4 container-fluid">
    <div class="row">
      <div class="col-lg-12 position-relative z-index-2">
        <sales-table-card title="Exchange Rate" :rows="exchangeRow" />
        <div class="row mb-4">
          <div class="col-lg-4 col-md-6 mt-4 mb-4">
            <chart-holder-card title="Monthly Revenue" subtitle="Detailed Monthly Revenue Analysis"
              update="campaign sent 2 days ago">
              <reports-bar-chart :chart="{
                labels: ['M', 'T', 'W', 'T', 'F', 'S', 'S'],
                datasets: {
                  label: 'Sales',
                  data: [50, 20, 10, 22, 50, 10, 40],
                },
              }" />
            </chart-holder-card>
          </div>
          <div class="col-lg-4 col-md-6 mt-4 mb-4">
            <chart-holder-card title="Monthly Consume" subtitle="Detailed Monthly Consume Analysis"
              update="updated 4 min ago" color="success">
              <reports-line-chart :chart="{
                labels: [
                  'Apr',
                  'May',
                  'Jun',
                  'Jul',
                  'Aug',
                  'Sep',
                  'Oct',
                  'Nov',
                  'Dec',
                ],
                datasets: {
                  label: 'Mobile apps',
                  data: [50, 40, 300, 320, 500, 350, 200, 230, 500],
                },
              }" />
            </chart-holder-card>
          </div>
          <div class="col-lg-4 mt-4 mb-3">
            <chart-holder-card title="My Property" subtitle="My Total Assets" update="just updated" color="dark">
              <reports-line-chart id="tasks-chart" :chart="{
                labels: [
                  'Apr',
                  'May',
                  'Jun',
                  'Jul',
                  'Aug',
                  'Sep',
                  'Oct',
                  'Nov',
                  'Dec',
                ],
                datasets: {
                  label: 'Mobile apps',
                  data: [50, 40, 300, 220, 500, 250, 400, 230, 500],
                },
              }" />
            </chart-holder-card>
          </div>
        </div>
        <div class="row">
          <div class="col-lg-3 col-md-6 col-sm-6">
            <mini-statistics-card :title="{ text: 'Housing Expense', value: '₩300,000' }"
              detail="<span class='text-success text-sm font-weight-bolder'>+55%</span> than last month" :icon="{
                name: 'weekend',
                color: 'text-white',
                background: 'dark',
              }" />
          </div>
          <div class="col-lg-3 col-md-6 col-sm-6 mt-lg-0 mt-4">
            <mini-statistics-card :title="{ text: 'Food Expense', value: '₩400,000' }"
              detail="<span class='text-success text-sm font-weight-bolder'>+3%</span> than last month" :icon="{
                name: 'leaderboard',
                color: 'text-white',
                background: 'primary',
              }" />
          </div>
          <div class="col-lg-3 col-md-6 col-sm-6 mt-lg-0 mt-4">
            <mini-statistics-card :title="{ text: 'Transportation Expense', value: '₩100,000' }"
              detail="<span class='text-success text-sm font-weight-bolder'>+1%</span> than last month" :icon="{
                name: 'leaderboard',
                color: 'text-white',
                background: 'success',
              }" />
          </div>
          <div class="col-lg-3 col-md-6 col-sm-6 mt-lg-0 mt-4">
            <mini-statistics-card :title="{ text: 'Leisure / Fasion Expense', value: '₩500,000' }"
              detail="<span class='text-success text-sm font-weight-bolder'>+10%</span> than last month" :icon="{
                name: 'leaderboard',
                color: 'text-white',
                background: 'primary',
              }" />
          </div>
        </div>
        <div class="row mt-5">
          <div class="col-lg-4 col-md-6">
            <booking-card :img="booking1" title="Cozy 5 Stars Hotel" description="The place is close to Barceloneta Beach and bus stop
            just 2 min by walk and near to 'Naviglio' where you can enjoy the
            main night life in Barcelona." price="$899/night" location="Barcelona, Spain" />
          </div>
          <div class="col-lg-4 col-md-6">
            <booking-card :img="booking2" title="Kolkovna Celnice" description="The
            place is close to Metro Station and bus stop just 2 min by walk and
            near to 'Naviglio' where you can enjoy the night life in London,
            UK." price="$1.119/1 person" location="London, UK" />
          </div>
          <div class="col-lg-4 col-md-6">
            <booking-card :img="booking3" title="Beautiful Resort with Swimming Pool" description="The
            place is close to Metro Station and bus stop just 2 min by walk and
            near to 'Naviglio' where you can enjoy the night life in London,
            UK." price="$459/night" location="Milan, Italy" />
          </div>
        </div>
      </div>
    </div>

    <div class="row"></div>
  </div>
</template>
<script setup>
import { ref } from 'vue'
import { useSimpleStore } from '@/store/journeyJSON.js';
import SalesTableCard from "./components/SalesTableCard.vue";
import ChartHolderCard from "./components/ChartHolderCard.vue";
import ReportsBarChart from "@/examples/Charts/ReportsBarChart.vue";
import ReportsLineChart from "./components/ReportsLineChart.vue";
import MiniStatisticsCard from "./components/MiniStatisticsCard.vue";
import BookingCard from "./components/BookingCard.vue";

import US from "../../assets/img/icons/flags/US.png";
import EU from "../../assets/img/icons/flags/EU.png";
import GB from "../../assets/img/icons/flags/GB.png";
import AU from "../../assets/img/icons/flags/AU.png";
import booking1 from "../../assets/img/products/product-1-min.jpg";
import booking2 from "../../assets/img/products/product-2-min.jpg";
import booking3 from "../../assets/img/products/product-3-min.jpg";

const { fetchExternalAPIExchageList } = useSimpleStore();
const exchangeRow = ref([
  {
    country: [US, 'United States'],
    Currency: 'USD',
    Buy: '',
    Sell: '',
    Rate: ''
  },
  {
    country: [EU, 'Europe'],
    Currency: 'EUR',
    Buy: '',
    Sell: '',
    Rate: ''
  },
  {
    country: [GB, 'Great Britain'],
    Currency: 'GBP',
    Buy: '',
    Sell: '',
    Rate: ''
  },
  {
    country: [AU, 'Australia'],
    Currency: 'AUD',
    Buy: '',
    Sell: '',
    Rate: ''
  },
])


const exchange = ref([])
// 외부 환율 API
const getExchange = async () => {
  await fetchExternalAPIExchageList(exchange)
  exchange.value.forEach((ex) => {
    if (ex.cur_unit === "USD") {
      exchangeRow.value.forEach((row) => {
        if (row.Currency === "USD") {
          row.Buy = "₩ " + ex.tts
          row.Sell = "₩ " + ex.ttb
          row.Rate = ex.deal_bas_r
        }
      })
    } else if (ex.cur_unit === "EUR") {
      exchangeRow.value.forEach((row) => {
        if (row.Currency === "EUR") {
          row.Buy = "₩ " + ex.tts
          row.Sell = "₩ " + ex.ttb
          row.Rate = ex.deal_bas_r
        }
      })
    } else if (ex.cur_unit === "GBP") {
      exchangeRow.value.forEach((row) => {
        if (row.Currency === "GBP") {
          row.Buy = "₩ " + ex.tts
          row.Sell = "₩ " + ex.ttb
          row.Rate = ex.deal_bas_r
        }
      })
    } else if (ex.cur_unit === "AUD") {
      exchangeRow.value.forEach((row) => {
        if (row.Currency === "AUD") {
          row.Buy = "₩ " + ex.tts
          row.Sell = "₩ " + ex.ttb
          row.Rate = ex.deal_bas_r
        }
      })
    } 
  })
}


getExchange()
</script>
