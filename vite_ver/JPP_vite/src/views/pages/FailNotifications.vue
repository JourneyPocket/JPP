<template>
    <div class="container-fluid py-4">
      <div class="row">
        <div class="col-md-8 mx-auto">
            <material-alert class="font-weight-light" color="danger" dismissible>
              <span class="text-sm"
                >Add Failed
                </span>
            </material-alert>
        </div>
      </div>
      
      
    </div>
  </template>
  
  <script>
  import MaterialAlert from "@/components/MaterialAlert.vue";
  import MaterialSnackbar from "@/components/MaterialSnackbar.vue";
  
  export default {
    name: "Notifications",
    components: {
      MaterialAlert,
      MaterialSnackbar,
    },
    data() {
      return {
        snackbar: null,
      };
    },
    methods: {
      closeSnackbar() {
        this.snackbar = null;
      },
    },
  };
  </script>
  