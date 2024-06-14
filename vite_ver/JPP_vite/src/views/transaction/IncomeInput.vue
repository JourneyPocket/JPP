<template>

<div
    class="page-header align-items-start min-vh-100"
    style="
      background-image: url(&quot;https://images.unsplash.com/photo-1497294815431-9365093b7331?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1950&q=80&quot;);
    "
  >
  <transition-group name="slide">
    <success-notifications class="position-absolute bottom-10 start-50 z-index-1" v-show="isAdd"/>
    <fail-notifications class="position-absolute bottom-10 start-50 z-index-1" v-show="isFailed"/>
  </transition-group>

    
    <span class="mask bg-gradient-dark opacity-6"></span>
    <div class="container my-auto">
      <div class="row">
        <div class="col-lg-4 col-md-8 col-12 mx-auto">
          <div class="card z-index-0 fadeIn3 fadeInBottom">
            
            <div class="card-header p-0 position-relative mt-n4 mx-3 z-index-2">
              <div
                class="bg-gradient-success shadow-success border-radius-lg py-3 pe-1"
              >
              
                <h4 class="text-white font-weight-bolder text-center mt-2 mb-0">
                  Income Input
                </h4>
              </div>
            </div>
            <div class="card-body">
              <form role="form" class="text-start mt-3" @submit.prevent="submit">
                <label for="incomeDate">Date</label>
                <div class="mb-3 input-group border ps-3 pe-3">
                  
                  <input
                  v-model="date"
                  class="form-control"
                    id="dateInput"
                    type="date"                    
                    name="incomeDate"
                  />
                </div>
                <label for="amountInput">Price</label>
                <div class="mb-3 input-group border ps-3">                  
                  <input
                    v-model="price"
                    class="form-control"
                    id="amountInput"
                    type="number"
                    label="Price"
                    name="amountInput"                   
                  />
                </div>
                <div class="form-group mb-3">
                  <label for="incomeTypeSelection">Select Income Type</label>
                  <select name="incomeTypeSelection" class="form-select border ps-2" v-model="selectedIncomeType" >                    
                    <option class="ms-3" v-for="incomeType in incomeTypes" :key="incomeType" :value="incomeType" selected>{{ incomeType }}</option>
                  </select>
                </div>     
                
                <label for="desInput">Description</label>
                <div class="mb-3 input-group border ps-3">     
                  <input
                    placeholder="Please Write Memo"
                    v-model="description"
                    class="form-control"
                    id="desInput"
                    type="text"
                    label="Description"
                    name="desInput"                   
                  />
                </div>
                <div class="container">
                  <div class="row">
                    <div class="col">
                      <button class="btn btn-success" @click="backBtn">Back</button>
                    </div>
                
                    <div class="col text-center">
                      <button                
                        class="btn btn-success"              
                        >Add
                        </button>
                    </div>
                  </div>
                </div>
                                                                          
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
    <footer class="footer position-absolute bottom-2 py-2 w-100">
      <div class="container">
        <div class="row align-items-center justify-content-lg-between">
          <div class="col-12 col-md-6 my-auto">
            <div class="copyright text-center text-sm text-white text-lg-start">
              © {{ new Date().getFullYear() }}, made with
              <i class="fa fa-heart" aria-hidden="true"></i> by
              <a
                href="https://github.com/JourneyPocket/JPP"
                class="font-weight-bold text-white"
                target="_blank"
                >Journey Pocket Team</a>
            </div>
          </div>
          <div class="col-12 col-md-6">
            <ul
              class="nav nav-footer justify-content-center justify-content-lg-end"
            >    
              <li class="nav-item">
                <a
                  href="https://github.com/JourneyPocket/JPP"
                  class="nav-link text-white"
                  target="_blank"
                  >Journey Pocket Team</a
                >
              </li>
              <li class="nav-item">
                <a
                  href="https://github.com/JourneyPocket/JPP"
                  class="nav-link text-white"
                  target="_blank"
                  >About Us</a
                >
              </li>
              <li class="nav-item">
                <a
                  href="https://www.creative-tim.com/blog"
                  class="nav-link text-white"
                  target="_blank"
                  >Blog</a
                >
              </li>
              <li class="nav-item">
                <a
                  href="https://www.creative-tim.com/license"
                  class="nav-link pe-0 text-white"
                  target="_blank"
                  >License</a
                >
              </li>                                  
            </ul>     
            
          </div>          
          
        </div>
      </div>
    </footer>
  </div>
  
</template>

<script>
import MaterialInput from "@/components/MaterialInput.vue";
import MaterialButton from "@/components/MaterialButton.vue";
import SuccessNotifications from "../pages/SuccessNotifications.vue";
import FailNotifications from "../pages/FailNotifications.vue";
import { mapMutations } from "vuex";
import {ref} from 'vue';
import axios from 'axios';
import {useRouter} from 'vue-router';
export default {
  name: "IncomeInput",
  setup() {    
    const listUrl = "/api/income";
    const date=ref("");
    const price=ref(0);
    const description=ref('');
    const selectedIncomeType=ref('salary');
    const incomeTypes=ref(['salary', 'pin money', ' financial income', ' other']);
    const isAdd=ref(false);
    const isFailed=ref(false);
    const router= useRouter();

    const backBtn=()=> {
      router.push('/transaction/calendar');
    }
    //date 형식이 맞는지 확인하는 함수
    const isValidDateFormat=(dateString)=> {
      const regex = /^\d{4}-\d{2}-\d{2}$/;
      if (!regex.test(dateString)) {
        return false;
      }
      
      // 'yyyy-mm-dd' 형식에 맞게 분리
      const [year, month, day] = dateString.split('-').map(Number);
      
      // 월과 일이 올바른 범위에 있는지 확인
      if (month < 1 || month > 12 || day < 1 || day > 31) {
        return false;
      }
      if (month === 2) {
        const isLeapYear = (year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0);
        if (day > (isLeapYear ? 29 : 28)) {
          return false;
        }
      }

      if ([4, 6, 9, 11].includes(month) && day > 30) {
        return false;
      }

      return true;
    }
    const submit = async (e) => {
      let newIncome={
        "date": date.value,
        "price": price.value+'원',
        "options": selectedIncomeType.value,
        "description": description.value
      }
      // console.log(newIncome)
      // alert('!')
      if (!isValidDateFormat(newIncome.date)) {
        isFailed.value=true;          
        if(isFailed.value) {
            setTimeout(()=> {
              isFailed.value=!isFailed.value;
            }, 1500);
          }
        return
       }
        
      
      try {
        let response = await axios.post(listUrl, newIncome)
        // console.log(response.data);
        
        if (response.data) {
          isAdd.value=true;
          if(isAdd.value) {
            setTimeout(()=> {
              isAdd.value=!isAdd.value;
            }, 1500);
          }          

          // 달력 페이지로 이동
          router.push('/transaction/calendar');
          
        }
      } catch(error) {
        alert('에러발생');
        isFailed.value=true;          
        if(isFailed.value) {
          setTimeout(()=> {
            isFailed.value=!isFailed.value;
          }, 1500);
        }isAdd.value=false;
      }
      
    }


    return {backBtn, submit, selectedIncomeType, incomeTypes, date, price, description, isAdd, isFailed};
  },
  components: {
    MaterialInput,
    MaterialButton,
    SuccessNotifications,
    FailNotifications,
  },
  beforeMount() {
    this.toggleEveryDisplay();
    this.toggleHideConfig();
  },
  beforeUnmount() {
    this.toggleEveryDisplay();
    this.toggleHideConfig();
  },

  methods: {
    ...mapMutations(["toggleEveryDisplay", "toggleHideConfig"]),
    
    
  },
  
};
</script>

<style>
.slide-enter {
  transform: translateX(-100%);
}
.slide-enter-active {
  animation: slide-in 1s ease-out backwards;
  transition: opacity .5s transform 1s;
}

.slide-leave {
  transform: translateX(0);
}

.slide-leave-active {
  animation: slide-out 1s ease-out forwards;
  transition: opacity .5s transform 1s;
  opacity: 0;
}

@keyframe slide-in {
  from {
    transform: translateX(-100%);
  }
  to {
    transform: translateX(0);
  }
}

@keyframe slide-out {
  from {
    transform: translateX(0);
  }
  to {
    transform: translateX(-100%);
  }
}

</style>