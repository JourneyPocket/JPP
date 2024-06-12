<template>
  <a
    data-bs-toggle="collapse"
    :href="collapse ? `#${collapseRef}` : collapseRef"
    :aria-controls="collapseRef"
    aria-expanded="true"
    class="nav-link"
    v-bind="$attrs"
    @click="isExpanded = !isExpanded"
  >
    <div
      class="text-center d-flex align-items-center justify-content-center"
      :class="isRTL ? ' ms-2' : 'me-2'"
    >
      <slot name="icon"></slot>
    </div>
    <span class="nav-link-text" :class="isRTL ? ' me-1' : 'ms-1'">{{
      navText
    }}</span>
  </a>
  <div :id="collapseRef" class="collapse show">
    <slot name="list"></slot>
  </div>
</template>
<script>
import { mapState } from "vuex";
export default {
  name: "SidenavCollapse",
  props: {
    collapseRef: {
      type: String,
      required: true,
    },
    navText: {
      type: String,
      required: true,
    },
    collapse: {
      type: Boolean,
      default: true,
    },
  },
  data() {
    return {
      isExpanded: true,
    };
  },
  computed: {
    ...mapState(["isRTL"]),
  },
};
</script>
