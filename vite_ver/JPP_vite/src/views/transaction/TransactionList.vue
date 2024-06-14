<template>
  <div class="py-4 container-fluid">
    <div class="mt-4 row">
      <div class="col-12">
        <div class="card">
          <!-- Card header -->
          <div class="card-header bg-success">
            <h5 class="mb-0 text-white">수입내역</h5>          
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
                  <td class="text-sm font-weight-normal" style="max-width: 200px">
                    <div class="row justify-content-md-center">                    
                      <div class="col">{{income.description}}</div>
                      <!-- <div class="col-auto"><button class="btn btn-success" @click="delList(income.id, 0)">edit</button></div> -->
                      <div class="col-auto me-6"><button class="btn btn-secondary" @click="delList(income.id, 0)">delete</button>
                    </div>
                  </div>
                </td>
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
          <div class="card-header bg-danger">
            <h5 class="mb-0 text-white">지출내역</h5>
            
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
                  <td class="text-sm font-weight-normal" style="max-width: 200px;">
                    <div class="row justify-content-md-center">
                      <div class="col">{{consumption.description}}</div>
                      <!-- <div class="col-auto"><button class="btn btn-success" @click="delList(income.id, 0)">edit</button></div> -->
                      <div class="col-auto me-5"><button class="btn btn-secondary" @click="delList(consumption.id, 1)">delete</button></div>
                  </div></td>
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
  const editList = async(id, type) => {


  }


  
  const delList = async(id, type) => {
    let listUrl="";

    if(type===0){
      listUrl="/api/income";
    }
    else{
      listUrl="/api/consumption";
    }
    
    console.log(listUrl+'/'+id.toString());
    try {
      
      let response = await axios.delete(listUrl+'/'+id.toString());
      getIncomeList();
      getConList();

    } catch(error) {
      alert("에러발생");
    }
  }
  getIncomeList();
  getConList();
  

</script>
