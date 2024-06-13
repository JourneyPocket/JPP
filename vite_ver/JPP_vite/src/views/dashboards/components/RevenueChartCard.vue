<template>
  <div class="col-lg-15 col-sm-13 mt-sm-0">
    <div class="px-3 ps-4 pb-0 card-header">
      <div class="d-flex justify-content-between">
        <h6 class="mb-0">Revenue and expenditure details by monthly</h6>
        <button
          type="button"
          class="mb-0 btn btn-icon-only btn-rounded btn-outline-secondary ms-2 btn-sm d-flex align-items-center justify-content-center"
          data-bs-toggle="tooltip"
          data-bs-placement="bottom"
          title=""
          data-bs-original-title="See which ads perform better"
        >
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
      <default-line-chart
        id="chart-line3"
        title="Traffic channels"
        :chart="{
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
              data: [50, 100, 200, 190, 400, 350, 500, 450, 700, 800, 900, 1000, 1100, 1200, 1300],
            },
            {
              label: 'Consume',
              data: [10, 30, 40, 120, 150, 220, 280, 250, 280],
            },
          ],
        }"
      />
    </div>
  </div>
</template>

<script>
import DefaultLineChart from "@/examples/Charts/DefaultLineChart.vue";
export default {
  name: "RevenueChartCard",
  components: {
    DefaultLineChart,
  },
};
</script>
