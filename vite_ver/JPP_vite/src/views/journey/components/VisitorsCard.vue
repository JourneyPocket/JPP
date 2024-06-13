<template>
  <div class="row">
    <div class="col-lg-12">
      <section class="card col-lg-12 pt-lg-4 pb-4 mb-3 ps-3">
        <div class="pt-2 px-4 ps-lg-0 pe-xl-5">
          <!-- Title-->
          <div class="d-sm-flex flex-wrap justify-content-between align-items-center border-bottom">
            <h2 class="h3 py-2 me-2 text-center text-sm-start">Your Saved Places<span
                class="badge bg-faded-accent fs-sm text-body align-middle ms-2">{{ count }}</span></h2>
            <h3>{{ country }}</h3>
            <div class="py-2">
              <div class="d-flex flex-nowrap align-items-center pb-3">
                <label class="form-label fw-normal text-nowrap mb-0 me-2" for="sorting">Sort by:</label>
                <select class="form-select form-select-sm me-2" id="sorting">
                  <option>Date Created</option>
                  <option>Product Name</option>
                  <option>Price</option>
                  <option>Your Rating</option>
                  <option>Updates</option>
                </select>
              </div>
            </div>
          </div>
          <Places v-for="place in placeList" :place="place"></Places>
        </div>
      </section>
    </div>
  </div>
</template>

<script setup>
import Places from './Places.vue';
import { ref, onMounted } from 'vue'
import { useSimpleStore } from '@/store/journeyJSON.js';

const { fetchPlaceList, fetchExternalAPIExchageList } = useSimpleStore();

const placeList = ref('')
const count = ref(0)
const exchange = ref([])

// 저장된 장소 불러옴
const getList = async () => {
  await fetchPlaceList(placeList)
  count.value = placeList.value.length
}


// 외부 환율 API
const getExchange = async () => {
  await fetchExternalAPIExchageList(exchange)
  console.log(exchange.value)
}

const props = defineProps({
  country: {
    type: String,
  }
});

console.log(props)

onMounted(() => {
  getList()
  getExchange()
})





</script>
