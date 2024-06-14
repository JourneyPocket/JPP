<template>
  <div class="col-lg-15 col-sm-13 mt-sm-0">
    <div class="px-3 ps-4 pb-0 card-header">
      <div class="d-flex justify-content-between">
        <h6 class="mb-0">Revenue and expenditure details by monthly</h6>
        <button type="button"
          class="mb-0 btn btn-icon-only btn-rounded btn-outline-secondary ms-2 btn-sm d-flex align-items-center justify-content-center"
          data-bs-toggle="tooltip" data-bs-placement="bottom" title=""
          data-bs-original-title="See which ads perform better">
          <i class="fas fa-info" aria-hidden="true"></i>
        </button>
      </div>
      <div class="d-flex align-items-center">
        <span class="badge badge-md badge-dot me-4">
          <i class="bg-danger"></i>
          <span class="text-xs text-dark">Consume</span>
        </span>
        <span class="badge badge-md badge-dot me-4">
          <i class="bg-dark"></i>
          <span class="text-xs text-dark">Revenue</span>
        </span>
      </div>
    </div>
    <div class="p-3 card-body">
      <default-line-chart id="chart-line3" title="Traffic channels" :chart="chartInfo" />
    </div>
  </div>
</template>

<script setup>
import DefaultLineChart from "@/examples/Charts/DefaultLineChart.vue";
import { ref, onBeforeMount, onMounted, onUpdated } from 'vue';
import axios from 'axios';


const incomeList = ref([]);
const consumptionList = ref([]);
const totalPrice = ref(0);
const monthlyTotalPrice = ref([]);
const monthlyTotalConsume = ref([]);
const isLoading = ref(true);

// const p=ref(500)
// const incomeDateList=ref([]);
// const conDateList=ref([]);
let incomeDateList = [];
let conDateList = [];

const chartInfo = ({
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
  datasets: [
    {
      label: 'Revenue',
      data: [9,8,7,6,5,4,3,2,1],
    },
    {
      label: 'Consume',
      data: [1,2,3,4,5,6,7,8,9],
    },
  ],
});

const getIncomeList = async (e) => {
  const params = {};
  let requestURL = "/api/income";
  try {
    let response = await axios.get(requestURL);
    // console.log(response.data)
    incomeList.value = response.data;
    incomeList.value.sort((a, b) => new Date(a.date) - new Date(b.date));

    incomeList.value.forEach(element => {
      incomeDateList.push({
        "date": element.date,
        "price": element.price
      })

    });
    console.log(incomeDateList)
    let im = new Date(incomeDateList[0].date)
    console.log(im.getMonth() + 1)
    let ps = incomeDateList[0].price.toString();
    const numberOnly = ps.replace(/\D/g, '');
    console.log(numberOnly)
    // 월별 총 수입 계산
    let currentMonth = -1;
    let currentTotalPrice = 0;
    for (let i = 0; i < incomeDateList.length; i++) {
      let mm = new Date(incomeDateList[i].date).getMonth() + 1;
      let pp = incomeDateList[i].price.toString();
      const numberOnly = pp.replace(/\D/g, '');

      if (mm !== currentMonth) {
        if (currentMonth !== -1) {
          monthlyTotalPrice.value[currentMonth] = currentTotalPrice;
        }
        currentMonth = mm;
        currentTotalPrice = 0;
      }

      currentTotalPrice += parseInt(numberOnly);
    }
    monthlyTotalPrice.value[currentMonth] = currentTotalPrice;
    console.log(monthlyTotalPrice.value);
    isLoading.value = false;
  } catch (error) {
    console.log(error);
    alert("에러발생");
  }

}
const getConList = async (e) => {
  const params = {};
  let requestURL = "/api/consumption";
  try {
    let response = await axios.get(requestURL);
    consumptionList.value = response.data;
    consumptionList.value.sort((a, b) => new Date(a.date) - new Date(b.date));

    consumptionList.value.forEach((element) => {
      conDateList.push({
        date: element.date,
        price: element.price,
      });
    });

    // 월별 총 지출 계산
    let currentMonth = -1;
    let currentTotalConsume = 0;
    for (let i = 0; i < conDateList.length; i++) {
      let mm = new Date(conDateList[i].date).getMonth() + 1;
      let pp = conDateList[i].price.toString();
      const numberOnly = pp.replace(/\D/g, '');

      if (mm !== currentMonth) {
        if (currentMonth !== -1) {
          monthlyTotalConsume.value[currentMonth] = currentTotalConsume;
        }
        currentMonth = mm;
        currentTotalConsume = 0;
      }

      currentTotalConsume += parseInt(numberOnly);
    }
    monthlyTotalConsume.value[currentMonth] = currentTotalConsume;
    console.log(monthlyTotalConsume.value);
    isLoading.value = false;
  } catch (error) {
    console.log(error);
    alert("에러발생");
  }
};
getConList();
getIncomeList();




</script>
