<template>
  <div class="py-4 container-fluid">
    <div class="row mb-3">
      <div class="col-lg-12 position-relative z-index-2">
        <sales-table-card title="Sales by Country" :rows="[
          {
            country: [US, 'United States'],
            sales: 2500,
            value: '$230,900',
            percentage: '29.9%',
          },
          {
            country: [DE, 'Germany'],
            sales: '3.900',
            value: '$440,000',
            percentage: '40.22%',
          },
          {
            country: [GB, 'Great Britain'],
            sales: '1.400',
            value: '$190,700',
            percentage: '23.44%',
          },
          {
            country: [BR, 'Brasil'],
            sales: 562,
            value: '$143,960',
            percentage: '32.14%',
          },
        ]" />
        <visitors-card></visitors-card>
      </div>
    </div>
    
  </div>
</template>
<script setup>
import SalesTableCard from "./components/SalesTableCard.vue";
import VisitorsCard from "./components/VisitorsCard.vue";

import US from "../../assets/img/icons/flags/US.png";
import DE from "../../assets/img/icons/flags/DE.png";
import GB from "../../assets/img/icons/flags/GB.png";
import BR from "../../assets/img/icons/flags/BR.png";

</script>
