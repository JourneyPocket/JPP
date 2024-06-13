<template>

    <div
        class="page-header align-items-start min-vh-100"
        style="
          background-image: url(&quot;https://images.unsplash.com/photo-1497294815431-9365093b7331?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1950&q=80&quot;);
        "
      >
        <span class="mask bg-gradient-dark opacity-6"></span>
        <div class="container my-auto">
          <div class="row">
            <div class="col-lg-4 col-md-8 col-12 mx-auto">
              <div class="card z-index-0 fadeIn3 fadeInBottom">
                <div class="card-header p-0 position-relative mt-n4 mx-3 z-index-2">
                  <div
                    class="bg-gradient-con shadow-con bg-opacity-50 border-radius-lg py-3 pe-1"
                  >
                  
                    <h4 class="title text-white font-weight-bolder text-center mt-2 mb-0">
                      Consumption Input
                    </h4>
                  </div>
                </div>
                <div class="card-body">
                  <form role="form" class="text-start mt-3">
                    <div class="mb-3">
                      <label for="incomeDate">Date</label>
                      <material-input
                        id="dateInput"
                        type="date"                    
                        name="incomeDate"
                      />
                    </div>
                    <div class="mb-3">
                      <label for="amountInput">Price</label>
                      <material-input
                        id="amountInput"
                        type="number"
                        label="Price"
                        name="amountInput"                   
                      />
                    </div>
                    <div class="form-group mb-3">
                      <label for="conType">Select Consumption Type</label>
                      <select name="incomeTypeSelection" class="form-select border ps-2" v-model="selectedConType" >                    
                        <option class="ms-3" v-for="conType in conTypes" :key="conType" :value="conType" selected>{{ conType }}</option>
                      </select>
                    </div>          
                    
                    <div class="mb-3">
                        <label for="desInput">Description</label>
                        <material-input
                            class="textarea-style"
                            id="desInput"
                            type="text"
                            label="Description"
                            name="desInput"                   
                        />
                    </div>
    
    
                    
                    <div class="text-center">
                      <material-button
                        class="my-4 mb-2"
                        variant="gradient"
                        color="danger"
                        full-width
                        >Add</material-button
                      >
                    </div>
                    
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
        <footer class="footer position-absolute bottom-2 py-2 w-100">
          <div class="container">
            <div class="row align-items-center justify-content-lg-between">
              <div class="col-12 col-md-6 my-auto">
                <div class="copyright text-center text-sm text-white text-lg-start">
                  © {{ new Date().getFullYear() }}, made with
                  <i class="fa fa-heart" aria-hidden="true"></i> by
                  <a
                    href="https://github.com/JourneyPocket/JPP"
                    class="font-weight-bold text-white"
                    target="_blank"
                    >Journey Pocket Team</a>
                </div>
              </div>
              <div class="col-12 col-md-6">
                <ul
                  class="nav nav-footer justify-content-center justify-content-lg-end"
                >
                  <li class="nav-item">
                    <a
                      href="https://github.com/JourneyPocket/JPP"
                      class="nav-link text-white"
                      target="_blank"
                      >Journey Pocket Team</a
                    >
                  </li>
                  <li class="nav-item">
                    <a
                      href="https://github.com/JourneyPocket/JPP"
                      class="nav-link text-white"
                      target="_blank"
                      >About Us</a
                    >
                  </li>
                  <li class="nav-item">
                    <a
                      href="https://www.creative-tim.com/blog"
                      class="nav-link text-white"
                      target="_blank"
                      >Blog</a
                    >
                  </li>
                  <li class="nav-item">
                    <a
                      href="https://www.creative-tim.com/license"
                      class="nav-link pe-0 text-white"
                      target="_blank"
                      >License</a
                    >
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </footer>
      </div>
      
    </template>
    
    <script>
    import MaterialInput from "@/components/MaterialInput.vue";
    import MaterialButton from "@/components/MaterialButton.vue";
    import { mapMutations } from "vuex";
    
    export default {
      name: "ConsumptionInput",
      data() {
        return {
          selectedConType: 'Food',
          conTypes: ['Food', 'Transportation', 'Cultural Life', 'Fashion/Beauty',
          'Housing/Communication', 'Health', 'Education', 'Association Fees', 'Others'
        ]
          
        };
      },

      components: {
        MaterialInput,
        MaterialButton,
      },
      beforeMount() {
        this.toggleEveryDisplay();
        this.toggleHideConfig();
      },
      beforeUnmount() {
        this.toggleEveryDisplay();
        this.toggleHideConfig();
      },
    
      methods: {
        ...mapMutations(["toggleEveryDisplay", "toggleHideConfig"]),
        Add() {
    
        }
      },
    };
</script>
<style>
.bg-gradient-con {
    background: linear-gradient(87deg, #ff8c00, #ff2d55);
    transition: 0.3ms ease;
}
.title:hover {
    background: linear-gradient(#ff8c00, #ff2d55, 87deg);
}

.shadow-con {
  box-shadow: 0 4px 25px 0 rgba(255, 141, 96, 0.7);
}


</style>