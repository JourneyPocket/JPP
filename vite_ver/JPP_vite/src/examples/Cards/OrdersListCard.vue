<template>
  <div class="mb-4 card">
    <div class="pb-0 card-header">
      <h6>{{ title }}</h6>
    </div>
    <div class="px-0 pt-0 pb-2 card-body">
      <div class="p-0 table-responsive">
        <table class="table mb-0 align-items-center">
          <thead>
            <tr>
              <th
                v-for="(header, index) of headers"
                :key="index"
                :class="index >= 1 ? 'text-center ps-2' : ''"
                class="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7"
              >
                {{ header }}
              </th>
            </tr>
          </thead>
          <tbody>
            <tr
              v-for="(
                { title: listTitle, order, values, image }, index
              ) in lists"
              :key="index"
            >
              <td>
                <div class="px-3 py-1 d-flex">
                  <material-avatar
                    :img="image"
                    class="me-3"
                    circular
                    alt="avatar image"
                  />
                  <div class="d-flex flex-column justify-content-center">
                    <h6 class="mb-0 text-sm">{{ listTitle }}</h6>
                    <p class="mb-0 text-sm font-weight-bold text-secondary">
                      <span class="text-success">{{ order }}</span>

                    </p>
                  </div>
                </div>
              </td>
              <td>
                <p class="text-center mb-3 text-sm font-weight-bold">
                  {{ values[0] }}
                </p>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
import MaterialAvatar from "@/components/MaterialAvatar.vue";
export default {
  name: "OrdersListCard",
  components: {
    MaterialAvatar,
  },
  props: {
    title: {
      type: String,
      default: "",
    },
    headers: {
      type: Array,
      default: () => [],
    },
    lists: {
      type: Array,
      default: () => [],
      values: Array,
      title: String,
      order: String,
    },
  },
};
</script>
