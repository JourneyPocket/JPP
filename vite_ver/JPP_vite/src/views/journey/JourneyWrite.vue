<template>
    <div class="py-4 container-fluid">
        <div class="row">
            <div class="col-lg-6">
                <h4>My Journey Plans</h4>
                <p>
                    Enter and easily manage the places you want to visit on your journey.
                </p>
            </div>
        </div>
        <div class="mt-4 row">
            <div class="mt-4 col-lg-10 mt-lg-0 mx-auto">
                <div class="card">
                    <div class="card-body">
                        <h5 class="font-weight-bolder">Record Your Journey Plans</h5>
                        <div class="row mt-4">
                            <div class="col-12 col-sm-6">
                                <material-input id="name" variant="dynamic" label="Place Name" />
                            </div>
                            <div class="mt-3 col-12 col-sm-6 mt-sm-0">
                                <material-input id="link" variant="dynamic" label="Google Link" />
                            </div>
                        </div>
                        <div class="row mt-4">
                            <div class="col-6">
                                <material-input id="reason" variant="dynamic" label="Reason for Visit" />
                            </div>
                            <div class="col-3">
                                <material-input id="quantity" variant="dynamic" label="Planned Visit Date" />
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-sm-6">
                                <label class="mt-4 ms-0">Description</label>
                                <p class="text-xs form-text text-muted ms-1 d-inline">
                                    (optional)
                                </p>
                                <div id="edit-description-edit" class="h-50">
                                    Long sleeves black denim jacket with a twisted design.
                                    Contrast stitching. Button up closure. White arrow prints on
                                    the back.
                                </div>
                            </div>
                            <div class="col-sm-6">
                                <label class="mt-4 ms-0">Category</label>
                                <select id="choices-category-edit" class="form-control" name="choices-category">
                                    <option value="Choice 1" selected> choice!</option>
                                    <option value="Choice 2">Restaurant</option>
                                    <option value="Choice 3">Entertainment</option>
                                    <option value="Choice 4">Shopping</option>
                                    <option value="Choice 5">Other</option>
                                </select>
                                <label class="mt-2 ms-0">Priority</label>
                                <select id="choices-color-edit" class="form-control" name="choices-priority">
                                    <option value="Choice 1" selected>Top of the List</option>
                                    <option value="Choice 2">Can't Miss</option>
                                    <option value="Choice 3">Would Love to See</option>
                                    <option value="Choice 4">If There's Time</option>
                                    <option value="Choice 5">Maybe Someday</option>
                                </select>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="mt-4 mb-4 row">
            <div class="col-lg-4 mx-auto">
                <div class="row">
                    <div class="col-lg-6 col-sm-6 col-12">
                        <button class="btn bg-gradient-success w-100 mb-0 toast-btn" type="button"
                            data-target="successToast" @click="snackbar = 'success'">
                            Success
                        </button>
                    </div>
                    <div class="col-lg-6 col-sm-6 col-12 mt-lg-0 mt-2">
                        <button class="btn bg-gradient-warning w-100 mb-0 toast-btn" type="button"
                            data-target="warningToast" @click="snackbar = 'warning'">
                            Warning
                        </button>
                    </div>
                </div>
            </div>
        </div>
        <div class="position-fixed bottom-1 end-1 z-index-2">
            <material-snackbar v-if="snackbar === 'success'" title="Material Dashboard" date="11 mins ago"
                description="Hello, world! This is a notification message."
                :icon="{ component: 'done', color: 'white' }" color="success" :close-handler="closeSnackbar" />
            <material-snackbar v-if="snackbar === 'warning'" title="Material Dashboard" date="11 mins ago"
                description="Hello, world! This is a notification message."
                :icon="{ component: 'travel_explore', color: 'white' }" color="warning"
                :close-handler="closeSnackbar" />
        </div>
    </div>
</template>

<script>

/* eslint-disable prettier/prettier */
import Quill from "quill";
import Choices from "choices.js";
import MaterialInput from "@/components/MaterialInput.vue";
import MaterialSnackbar from "@/components/MaterialSnackbar.vue";
import MaterialAlert from "@/components/MaterialAlert.vue";


export default {
    name: "EditProduct",

    components: {
        MaterialInput,
        MaterialAlert,
        MaterialSnackbar,
    },
    data() {
        return {
            snackbar: null,
        };
    },
    mounted() {
        if (document.getElementById("edit-description-edit")) {
            new Quill("#edit-description-edit", {
                theme: "snow", // Specify theme in configuration
            });
        }
        this.getChoices("choices-category-edit");
        this.getChoices("choices-color-edit");
        this.getChoices("choices-currency-edit");

        if (document.getElementById("choices-tags-edit")) {
            var tags = document.getElementById("choices-tags-edit");
            const examples = new Choices(tags, {
                removeItemButton: true,
                allowHTML: true,
            });

            examples.setChoices(
                [
                    {
                        value: "One",
                        label: "Expired",
                        disabled: true,
                    },
                    {
                        value: "Two",
                        label: "Out of Stock",
                        selected: true,
                    },
                ],
                "value",
                "label",
                false
            );
        }
    },
    methods: {
        closeSnackbar() {
            this.snackbar = null;
        },
        getChoices(id) {
            if (document.getElementById(id)) {
                var element = document.getElementById(id);
                return new Choices(element, {
                    searchEnabled: false,
                    allowHTML: true,
                });
            }
        },
    },
};
</script>