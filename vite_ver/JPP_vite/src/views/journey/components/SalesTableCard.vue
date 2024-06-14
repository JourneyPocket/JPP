<template>
  <div class="row">
    <div class="col-lg-7">
      <div class="card mb-4">
        <div class="d-flex">
          <div class="icon icon-shape icon-lg bg-gradient-success shadow text-center border-radius-xl mt-n3 ms-4">
            <i class="material-icons opacity-10" aria-hidden="true">language</i>
          </div>
          <h4 class="mt-3 mb-2 ms-3">World Journey Map</h4>
        </div>
        <div class="card-body p-3">
          <div class="row">
            <div id="map-wrap" class="mx-auto" style="height: 360px; width: 500px;">
              <div id="map" class="mt-0 mt-lg-n4"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="col-lg-5">
      <div class="card mb-4">
        <div class="p-3 pb-0 card-header">
          <div class="d-flex justify-content-between">
            <h4 class="mb-0">Sales by Country</h4>
          </div>
        </div>
        <div class="p-3 card-body">
          <ul class="list-group list-group-flush list my--3">
            <li v-for="item in exchangeList" class="px-0 border-0 list-group-item">
              <div class="row align-items-center">
                <div class="col-auto">
                  <!-- Country flag -->
                  <img :src="item.flag" alt="Country flag" />
                </div>
                <div class="col">
                  <p class="mb-0 text-xs font-weight-bold">CountryCode:</p>
                  <h6 class="mb-0 text-sm">{{ item.country_code }}</h6>
                </div>
                <div class="text-center col">
                  <p class="mb-0 text-xs font-weight-bold">global:</p>
                  <h6 class="mb-0 text-sm">{{ item.global_money }}</h6>
                </div>
                <div class="text-center col">
                  <p class="mb-0 text-xs font-weight-bold">national:</p>
                  <h6 class="mb-0 text-sm">{{ item.national_money }}</h6>
                </div>
              </div>
              <hr class="mt-3 mb-1 horizontal dark" />
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
  <div class="mb-3">
    <router-link to="/journey/place"><material-button color="success" variant="gradient">Add
        place</material-button></router-link>
  </div>
  <div class="p-3 pb-2 card mb-4">
    <div class="d-flex justify-content-between">
      <h5 class="mb-0">Places Table</h5>
    </div>
    <p class="text-sm mb-3">
      Places I've Saved in the Countries I've Chosen.
    </p>
  </div>
</template>
<script setup>
import { onMounted, defineEmits } from 'vue';
import { useSimpleStore } from '@/store/journeyJSON.js';
import { storeToRefs } from 'pinia';
import { RouterLink } from 'vue-router'
import "@/assets/js/world.js";
import MaterialButton from "@/components/MaterialButton.vue"

//imgs
import AU from "@/assets/img/icons/flags/AU.png";
import US from "@/assets/img/icons/flags/US.png";
import EU from "@/assets/img/icons/flags/EU.png";
import GB from "@/assets/img/icons/flags/GB.png";
import BR from "@/assets/img/icons/flags/BR.png";
import { onUpdated } from 'vue/dist/vue.d.mts';
const simpleStore = useSimpleStore();
const { exchangeList } = storeToRefs(simpleStore);
const emit = defineEmits(['selected-country'])

const updateFlag = (data) => {
  data.forEach(element => {
    if(element.country_code === "US"){
      element.flag = US
    } else if(element.country_code === "AU") {
      element.flag = AU
    } else if(element.country_code === "EU") {
      element.flag = EU
    } 
    else {
      element.flag = BR
    }
  });
}

onMounted(() => {
  updateFlag(exchangeList.value);

  // eslint-disable-next-line no-undef
  const map = new jsVectorMap({
    selector: "#map",
    map: "world_merc",
    zoomOnScroll: false,
    zoomButtons: false,
    markersSelectable: true,
    markersSelectableOne: true,
    markers: [
      {
        name: "USA",
        coords: [40.71296415909766, -74.00437720027804],
      },
      {
        name: "Germany",
        coords: [51.17661451970939, 10.97947735117339],
      },
      {
        name: "Brazil",
        coords: [-7.596735421549542, -54.781694323779185],
      },
      {
        name: "Russia",
        coords: [62.318222797104276, 89.81564777631716],
      },
      {
        name: "Japan",
        coords: [27.7495886, 134.3918065],
      },{
        name: "South Korea",
        coords : [37.5511694, 126.9882266],
      }
    ],
    labels: {
      markers: {
        render(marker, index) {
          return marker.name || marker.labelName || 'Not available'
        }
      }
    },
    onMarkerSelected: function (code, isSelected, selectedMarkers) {
      if (isSelected) {
        emit('selected-country', this.markers[code].config.name)
      }
    },
    markerStyle: {
      initial: {
        fill: "#1ee9a4",
      },
      hover: {
        fill: "#E91E63",
      },
      selected: {
        fill: "#E91E63",
      },
    },
  });
});

onUpdated(() => {
  updateFlag(exchangeList.value);
})
</script>