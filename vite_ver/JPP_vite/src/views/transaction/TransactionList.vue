<template>
  <div class="py-4 container-fluid">
    <div class="mt-4 row">
      <div class="col-12">
        <div class="card">
          <!-- Card header -->
          <div class="card-header">
            <h5 class="mb-0">수입내역</h5>
            <p class="mb-0 text-sm">
              A lightweight, extendable, dependency-free javascript HTML table
              plugin.
            </p>
          </div>
          <div class="table-responsive">
            <table id="datatable-basic" class="table table-flush">
              <thead class="thead-light">
                <tr>
                  <th>Date</th>
                  <th>Price</th>
                  <th>Option</th>
                  <th>Description</th>            
                </tr>
              </thead>
              <tbody>
                <tr class="ps-3" v-for="income in incomeList" :key="income.id">
                  <td class="text-sm font-weight-normal">{{ income.date }}</td>
                  <td class="text-sm font-weight-normal">{{ income.price }}</td>
                  <td class="text-sm font-weight-normal">{{ income.options }}</td>
                  <td class="text-sm font-weight-normal">{{ income.description }}</td>                    
                </tr>                  
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
    <div class="mt-4 row">
      <div class="col-12">
        <div class="card">
          <!-- Card header -->
          <div class="card-header">
            <h5 class="mb-0">지출내역</h5>
            <p class="mb-0 text-sm">
              A lightweight, extendable, dependency-free javascript HTML table
              plugin.
            </p>
          </div>
          <div class="table-responsive">
            <table id="datatable-search" class="table table-flush">
              <thead class="thead-light">
                <tr>
                  <th>Date</th>
                  <th>Price</th>
                  <th>Option</th>
                  <th>Description</th>                    
                </tr>
              </thead>
              <tbody>
                <tr v-for="consumption in consumptionList" :key="consumption.id">
                  <td class="text-sm font-weight-normal">{{ consumption.date }}</td>
                  <td class="text-sm font-weight-normal">{{ consumption.price }}</td>
                  <td class="text-sm font-weight-normal">{{ consumption.options }}</td>
                  <td class="text-sm font-weight-normal">{{consumption.description}}</td>                    
                </tr>                  
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import {ref} from 'vue';
import axios from 'axios';

  
  const incomeList=ref([]);
  const consumptionList=ref([]);

  const getIncomeList = async(e)=> {
    const params={};
    let requestURL="/api/income";
    try {
      let response = await axios.get(requestURL);
      // console.log(response.data)
      incomeList.value=response.data;
      incomeList.value.sort((a, b) => new Date(a.date) - new Date(b.date));
    } catch(error) {
      console.log(error);
      alert("에러발생");
    }
  }

  const getConList =async(e) => {
    const params={};
    let requestURL="/api/consumption";
    try {
      let response = await axios.get(requestURL);
      console.log(response.data)
      consumptionList.value=response.data;
      consumptionList.value.sort((a, b) => new Date(a.date) - new Date(b.date));
    } catch(error) {
      console.log(error);
      alert("에러발생");
    }
  }
  getIncomeList();
  getConList();
  

</script>
