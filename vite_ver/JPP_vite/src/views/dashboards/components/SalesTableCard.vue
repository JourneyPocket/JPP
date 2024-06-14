<template>
  <div class="card mb-4">
    <div class="d-flex">
      <div class="icon icon-shape icon-lg bg-gradient-success shadow text-center border-radius-xl mt-n3 ms-4">
        <i class="material-icons opacity-10" aria-hidden="true">language</i>
      </div>
      <h6 class="mt-3 mb-2 ms-3">{{ title }}</h6>
    </div>
    <div class="card-body p-3">
      <div class="row">
        <div class="col-lg-6 col-md-7">
          <div class="table-responsive">
            <table class="table align-items-center">
              <tbody>
                <tr v-for="({ country, Currency, Buy, Sell, Rate }, index) of rows" :key="index">
                  <td class="w-30">
                    <div class="px-2 py-1 d-flex align-items-center">
                      <div>
                        <img :src="country[0]" alt="Country flag" />
                      </div>
                      <div class="ms-4">
                        <p class="mb-0 text-xs font-weight-bold">Country:</p>
                        <h6 class="mb-0 text-sm font-weight-normal">
                          {{ country[1] }}
                        </h6>
                      </div>
                    </div>
                  </td>
                  <td>
                    <div class="text-center">
                      <p class="mb-0 text-xs font-weight-bold">Currency unit:</p>
                      <h6 class="mb-0 text-sm font-weight-normal">
                        {{ Currency }}
                      </h6>
                    </div>
                  </td>
                  <td>
                    <div class="text-center">
                      <p class="mb-0 text-xs font-weight-bold">Buy:</p>
                      <h6 class="mb-0 text-sm font-weight-normal">
                        {{ Buy }}
                      </h6>
                    </div>
                  </td>
                  <td>
                    <div class="text-center">
                      <p class="mb-0 text-xs font-weight-bold">Sell:</p>
                      <h6 class="mb-0 text-sm font-weight-normal">
                        {{ Sell }}
                      </h6>
                    </div>
                  </td>
                  <td class="text-sm align-middle">
                    <div class="text-center col">
                      <p class="mb-0 text-xs font-weight-bold">Rate:</p>
                      <h6 class="mb-0 text-sm font-weight-normal">
                        {{ Rate }}
                      </h6>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <div class="col-lg-6 col-md-5">
          <div id="map" class="mt-0 mt-lg-n4"></div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import "@/assets/js/world.js";

export default {
  name: "SalesTableCard",
  props: {
    title: {
      type: String,
      default: "Sales by Country",
    },
    rows: {
      type: Array,
      required: true,
      sales: [Number, String],
      value: String,
      percentage: [Number, String],
      country: Array,
    },
  },

  mounted() {
    // eslint-disable-next-line no-undef
    new jsVectorMap({
      selector: "#map",
      map: "world_merc",
      zoomOnScroll: false,
      zoomButtons: false,
      selectedMarkers: [1, 3],
      markersSelectable: true,
      markers: [
        {
          name: "USA",
          coords: [40.71296415909766, -74.00437720027804],
        },
        {
          name: "EUR",
          coords: [41.9102088, 12.3711917],
        },
        {
          name: "Great Britain",
          coords: [53.4722462, -2.379346],
        },
        {
          name: "Australia",
          coords: [-33.8461025, 150.3081819]
        }
      ],
      labels: {
        markers: {
          render(marker, index) {
            return marker.name || marker.labelName || 'Not available'
          }
        }
      },
      markerStyle: {
        initial: {
          fill: "#e91e63",
        },
        hover: {
          fill: "E91E63",
        },
        selected: {
          fill: "E91E63",
        },
      },
    });
  },
};
</script>
