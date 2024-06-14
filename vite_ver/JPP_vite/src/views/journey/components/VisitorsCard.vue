<template>
  <div class="row">
    <div class="col-lg-12">
      <section class="card col-lg-12 pt-lg-4 pb-4 mb-3 ps-3">
        <div class="pt-2 px-4 ps-lg-0 pe-xl-5">
          <!-- Title-->
          <div class="d-sm-flex flex-wrap justify-content-between align-items-center border-bottom">
            <h2 class="h3 py-2 me-2 text-center text-sm-start">Your Saved Places<span
                class="badge bg-faded-accent fs-sm text-body align-middle ms-2">{{ filteredPlaceList.length }}</span>
            </h2>
            <div class="py-2">
              <div class="d-flex flex-nowrap align-items-center pb-3">
              </div>
            </div>
          </div>
          <Places v-for="place in filteredPlaceList" :place="place" @deleteId="handledDeleteId"></Places>
        </div>
      </section>
    </div>
  </div>
</template>

<script setup>
import Places from './Places.vue';
import { ref, onMounted, computed } from 'vue'
import { useSimpleStore } from '@/store/journeyJSON.js';

const { fetchPlaceList, deletePlace } = useSimpleStore();

const placeList = ref([])


const props = defineProps({
  country: {
    type: String,
  }
});

const handledDeleteId = async (id) => {
  let index = placeList.value.findIndex((place) => place.id === id);
  placeList.value.splice(index, 1)
  deletePlace(id)
}

// 저장된 장소 불러옴
const getList = async () => {
  await fetchPlaceList(placeList)
}




// 필터링된 리스트를 계산합니다.
const filteredPlaceList = computed(() => {
  return Array.isArray(placeList.value)
    ? placeList.value.filter(place => place.country === props.country)
    : [];
});

onMounted(() => {
  getList()
});

</script>
