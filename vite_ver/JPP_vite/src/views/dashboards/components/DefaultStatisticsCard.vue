<template>
  <div class="mt-4 col-sm-4 mt-sm-0">
    <div class="card">
      <div class="p-0 card">
        <div class="card">
          <img :src="image" alt="Image" class="card-flight" />
          </div>
          <div class="col-7 text-start mb-2">
            <p class="m-3 mb-1 mt-2 text-sm text-capitalize font-weight-bold">
              {{ title }}
            </p>
            <h5 class="m-3 mb-1 mt-2 font-weight-bolder">{{ count }}</h5>
            <span
              :class="`text-${percentage.color}`"
              class="m-3 mb-1 mt-2 text-sm text-end font-weight-bolder"
              >{{ percentage.value }}
              <span class="font-weight-normal m-2 text-secondary">
                {{ percentage.label }}</span
              >
            </span>
          </div>
        </div>
      </div>
    </div>
</template>

<script>
export default {
  name: "DefaultStatisticsCard",
  props: {
    image: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      default: "Default Statistics Card",
    },
    count: {
      type: String,
      default: "",
    },
    menu: {
      type: String,
      default: "",
    },
    percentage: {
      type: Object,
      default: () => {},
      color: String,
      value: String,
      label: String,
    },
    dropdown: {
      type: Array,
      default: () => [],
      label: String,
      route: String,
    },
  },
  data() {
    return {
      showMenu: false,
    };
  },
};
</script>
