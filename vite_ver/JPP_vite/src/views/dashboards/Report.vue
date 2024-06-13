<template>
  <div class="py-4 container-fluid">
    <div class="row">
      <default-statistics-card
        title="Tokyo, Japan"
        count="$180"
        :percentage="{
          color: 'success',
          value: '-20%',
          label: 'than yesterday',
        }"
        image="https://a.cdn-hotels.com/gdcs/production8/d946/e2c1433c-c92c-4148-82c0-65bde779c5e7.jpg"
      />
      <default-statistics-card
        title="Honolulu, Hawaii"
        count="$480"
        :percentage="{
          color: 'success',
          value: '-12%',
          label: 'than one week ago',
        }"
        image="https://entrip.net/wp-content/uploads/2022/02/hawaii-90931_1920.jpg"
      />
      <default-statistics-card
        title="Paris, France"
        count="$490"
        :percentage="{
          color: 'success',
          value: '-30%',
          label: 'than two days ago',
        }"
        image="https://t1.daumcdn.net/thumb/R1280x0/?fname=http://t1.daumcdn.net/brunch/service/user/STq/image/buRRmheKiwjE4-Ss4kZpkNmCF2Y.jpg"
      />
    </div>
    <div class="mt-4 row">
      <div class="col-lg-4 col-sm-6 ">
        <channels-chart-card />
      </div>
      <div class="col-lg-8 col-sm-6">
          <div class="p-3 pt-4 card card h-100">
            <h6 class="mb-0">Consumption details by item(Bar chart)</h6>
                <horizontal-bar-chart
                :chart="{
                labels: ['Food', 'Transportation', 'Entertainment', 'Fasion', 'Else'],
                datasets: [
                  {
                    label: 'Sales by age',
                    data: [15, 20, 12, 50, 60],
                  },
                ],
              }"
            />
            </div>
      </div>
    </div>
    <div class="mt-4 row">
      <div class="col-lg-8">
        <div class="card h-100 pt-2 p-2">
            <revenue-chart-card />     
        </div>
      </div>
      <div class="col-lg-4 ">
          <transaction-card />     
      </div>
    </div>
    <div class="mt-4 row">
      <div class="col-lg-8 h-100">
        <orders-list-card
          title="List of Registered Accounts"
          :headers="['Accounts List', 'Value']"
          :lists="products"
        />
      </div>
      <div class="col-lg-4 h-100">
        <div class="ps-3 pb-4 ps-1 pt-4 card">
            <h6 class="mb-1 ms-2">Total Asset by Accounts</h6>
          <div class="p-0 mt-3 mb-3 scard-body2">
            <div class="card-body2 mt-3 mb-2 pb-1 d-flex">
              <doughnut-chart
                class="w-40"
                :chart="{
                  labels: [
                    'KB Bank',
                    'KaKao Bank',
                    'Hana Back',
                    'Else'
                  ],
                  datasets: {
                    label: 'Projects',
                    data: [15, 20, 32, 60]
                  }
                }"
              />
              <div class="table-responsive w-50">
                <table class="table align-items-center mb-0">
                  <tbody>
                    <tr>
                      <td>
                        <div class="d-flex px-2 py-1">
                          <div>
                            <img
                              src="https://www.knowingasset.com/images/bank/0010927.png"
                              class="avatar avatar-sm me-2"
                              alt="logo_xd"
                            />
                          </div>
                          <div
                            class=" justify-content-center"
                          >
                            <h6 class="mb-0 text-sm">KB Bank</h6>
                          </div>
                        </div>
                      </td>
                      <td class="align-middle text-center text-sm">
                        <span class="text-xs font-weight-bold">45%</span>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <div class="d-flex px-2 py-1">
                          <div>
                            <img
                              src="https://t1.daumcdn.net/cfile/tistory/997BD7335D089C3023"
                              class="avatar avatar-sm me-2"
                              alt="logo_atlassian"
                            />
                          </div>
                          <div
                            class="d-flex flex-column justify-content-center"
                          >
                            <h6 class="mb-0 text-sm">KaKao Bank</h6>
                          </div>
                        </div>
                      </td>
                      <td class="align-middle text-center text-sm">
                        <span class="text-xs font-weight-bold">13%</span>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <div class="d-flex px-2 py-1">
                          <div>
                            <img
                              src="https://th.bing.com/th/id/R.4c9df3fb7cd1044d77f4199b72826e49?rik=XOS%2f8OEi%2bnt2dg&riu=http%3a%2f%2fwiki.hash.kr%2fimages%2fd%2fd7%2f%ed%95%98%eb%82%98%ec%9d%80%ed%96%89_%eb%a1%9c%ea%b3%a0.png&ehk=kvEFhUnG8IUm%2bkx1Y45I%2fClonhtpXIWX5km6FjAIb0o%3d&risl=&pid=ImgRaw&r=0"
                              class="avatar avatar-sm me-2"
                              alt="logo_slack"
                            />
                          </div>
                          <div
                            class="d-flex flex-column justify-content-center"
                          >
                            <h6 class="mb-0 text-sm">Hana Bank</h6>
                          </div>
                        </div>
                      </td>
                      <td class="align-middle text-center text-sm">
                        <span class="text-xs font-weight-bold">32%</span>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <div class="d-flex px-2 py-1">
                          <div>
                            <img
                              src="https://www.svgrepo.com/show/487601/more-h.svg"
                              class="avatar avatar-sm me-2"
                              alt="logo_spotify"
                            />
                          </div>
                          <div
                            class="d-flex flex-column justify-content-center"
                          >
                            <h6 class="mb-0 text-sm">Else</h6>
                          </div>
                        </div>
                      </td>
                      <td class="align-middle text-center text-sm">
                        <span class="text-xs font-weight-bold">17%</span>
                      </td>
                    </tr>
                  
                  </tbody>
                </table>
              </div>
            </div>
          </div>
      </div>
    </div>
  </div>
</div>

</template>

<script>
import ChannelsChartCard from "./components/ChannelsChartCard.vue";
import RevenueChartCard from "./components/RevenueChartCard.vue";
import HorizontalBarChart from "@/examples/Charts/HorizontalBarChart.vue";
import DefaultStatisticsCard from "./components/DefaultStatisticsCard.vue";
import OrdersListCard from "@/examples/Cards/OrdersListCard.vue";
import TransactionCard from "./components/TransactionCard.vue";
import DoughnutChart from "@/examples/Charts/DoughnutChart.vue";

// images
import setTooltip from "@/assets/js/tooltip.js";
// import {ref} from 'vue';
// import axios from 'axios';


export default {
  name: "Report",
  components: {
    ChannelsChartCard,
    RevenueChartCard,
    HorizontalBarChart,
    DefaultStatisticsCard,
    OrdersListCard,
    TransactionCard,
    DoughnutChart,
  },
  data() {
    return {
      products: [
        {
          title: "KB Bank easy all titanium card",
          order: "4629-12-3456783",
          values: ["$130.992"],
          image:
            "https://www.knowingasset.com/images/bank/0010927.png"
        },
        {
          title: "Kakao Bank Check Card",
          order: "3333-20-0123452",
          values: ["$80.250"],
          image:
            "https://t1.daumcdn.net/cfile/tistory/997BD7335D089C3023"
        },
        {
          title: "Hana Preferred Savings Account",
          order: "4567-89-0123452",
          values: ["$40.600"],
          image:
          "https://th.bing.com/th/id/R.4c9df3fb7cd1044d77f4199b72826e49?rik=XOS%2f8OEi%2bnt2dg&riu=http%3a%2f%2fwiki.hash.kr%2fimages%2fd%2fd7%2f%ed%95%98%eb%82%98%ec%9d%80%ed%96%89_%eb%a1%9c%ea%b3%a0.png&ehk=kvEFhUnG8IUm%2bkx1Y45I%2fClonhtpXIWX5km6FjAIb0o%3d&risl=&pid=ImgRaw&r=0"
        },
        {
          title: "KB Bank Time Deposit Account",
          order: "4629-12-3456783",
          values: ["$1021.300"],
          image:
          "https://www.knowingasset.com/images/bank/0010927.png"
        },
      ],
      
    };
  },
  // setup() {
  //   const incomeList=ref([]);
  //   const consumptionList=ref([]);
    
  //   // const incomeDateList=ref([]);
  //   // const conDateList=ref([]);
  //   let incomeDateList=[];
  //   let conDateList=[];
  //   const getIncomeList = async(e)=> {
  //     const params={};
  //     let requestURL="/api/income";
  //     try {
  //       let response = await axios.get(requestURL);
  //       // console.log(response.data)
  //       incomeList.value=response.data;
  //       incomeList.value.sort((a, b) => new Date(a.date) - new Date(b.date));

  //       incomeList.value.forEach(element => {
  //         incomeDateList.push({"date" :element.date,
  //         "price" : element.price
  //         })

  //       });
  //       console.log(incomeDateList)
  //       let im= new Date(incomeDateList[0].date)
  //       console.log(im.getMonth()+1)
  //       let ps = incomeDateList[0].price.toString();
  //       const numberOnly = ps.replace(/\D/g, '');
  //       console.log(numberOnly)

  //       let totalPrice = 0;
  //       for(let i = 0; i < incomeDateList.length; i++){
  //         let mm = new Date(incomeDateList[i].data)
  //         let pp = incomeDateList[i].price.toString();
  //         const numberOnly = pp.replace(/\D/g, '');
  //         if ((mm) == (mm)) {
  //         totalPrice = parseInt(numberOnly) + parseInt(incomeDateList[i].price);
  //         } else {
  //           totalPrice = parseInt(numberOnly);
  //         }
  //       }
  //       console.log(totalPrice)
  //     } catch(error) {
  //       console.log(error);
  //       alert("에러발생");
  //     }
  //   }

  //   const getConList =async(e) => {
  //     const params={};
  //     let requestURL="/api/consumption";
  //     try {
  //       let response = await axios.get(requestURL);
        
  //       consumptionList.value=response.data;
  //       consumptionList.value.sort((a, b) => new Date(a.date) - new Date(b.date));

  //       consumptionList.value.forEach(element => {
  //         conDateList.push({"date" :element.date,
  //         "price" : element.price
  //       })
  //       });
  //     } catch(error) {
  //       console.log(error);
  //       alert("에러발생");
  //     }
  //   }
  //   getIncomeList();
  //   getConList();
    
  //   return {incomeList, consumptionList}
  // },
  mounted() {
    setTooltip(this.$store.state.bootstrap);
  },
};
</script>
