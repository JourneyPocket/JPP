<template>
  <div class="row">
    <div class="col-lg-12">
      <section class="card col-lg-12 pt-lg-4 pb-4 mb-3 ps-3">
        <div class="pt-2 px-4 ps-lg-0 pe-xl-5">
          <!-- Title-->
          <div class="d-sm-flex flex-wrap justify-content-between align-items-center border-bottom">
            <h2 class="h3 py-2 me-2 text-center text-sm-start">Your Saved Places<span
                class="badge bg-faded-accent fs-sm text-body align-middle ms-2">{{ placeCount }}</span></h2>
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
          <Places v-for="place in placeList" :place="place" ></Places>
        </div>
      </section>
    </div>
  </div>
</template>

<script setup>
import Places from './Places.vue';
import { ref, onMounted } from 'vue'
import { useSimpleStore } from '@/store/journeyJSON.js';
import { storeToRefs } from 'pinia';
const { fetchPlaceList } = useSimpleStore();

const placeList = ref('')
const placeCount = ref(0)

const getList = async () => {
  await fetchPlaceList(placeList)
}
onMounted(() => {
  getList()
  console.log(placeList.length)
  placeCount.value = placeList.length
})





</script>
