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
                        <div class="row mb-4">
                            <div class="col-lg-6 col-sm-6">
                                <material-input id="name" variant="dynamic" name="name" v-model:value="name"
                                    label="Place Name" />
                            </div>
                            <div class="col-lg-6 col-sm-6">
                                <material-input id="link" variant="dynamic" name="link" v-model:value="link"
                                    label="Google Link" />
                            </div>
                        </div>
                        <div class="row mt-4">
                            <div class="col-6">
                                <material-input id="reason" variant="dynamic" name="reason" v-model:value="reason"
                                    label="Reason for Visit" />
                            </div>
                            <div class="col-3">
                                <material-input id="date" variant="dynamic" name="date" v-model:value="date"
                                    label="Planned Visit Date" />
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-sm-6">
                                <label class="mt-4 ms-0">Description</label>
                                <p class="text-xs form-text text-muted ms-1 d-inline">
                                    (optional)
                                </p>
                                <div id="edit-description-edit" class="h-50">
                                    
                                </div>
                            </div>
                            <div class="col-sm-6">
                                <label class="mt-4 ms-0">Category</label>
                                <select id="choices-category-edit" v-model="category" class="form-control"
                                    name="choices-category">
                                    <option value="" selected> choice!</option>
                                    <option value="Restaurant">Restaurant</option>
                                    <option value="Entertainment">Entertainment</option>
                                    <option value="Shopping">Shopping</option>
                                    <option value="Other">Other</option>
                                </select>
                                <label class="mt-2 ms-0">Priority</label>
                                <select id="choices-color-edit" v-model="priority" class="form-control"
                                    name="choices-category">
                                    <option value="Top of the List" selected>Top of the List</option>
                                    <option value="Can't Miss">Can't Miss</option>
                                    <option value="Would Love to See">Would Love to See</option>
                                    <option value="If There's Time">If There's Time</option>
                                    <option value="Maybe Someday">Maybe Someday</option>
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
                            data-target="successToast" @click="submit">
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
                :icon="{ component: 'done', color: 'white' }" color="success" @click="closeSnackbar" />
            <material-snackbar v-if="snackbar === 'warning'" title="Material Dashboard" date="11 mins ago"
                description="Hello, world! This is a notification message."
                :icon="{ component: 'travel_explore', color: 'white' }" color="warning" @click="closeSnackbar" />
        </div>
    </div>
</template>

<script setup>

/* eslint-disable prettier/prettier */
import Quill from "quill";
import Choices from "choices.js";
import MaterialInput from "@/components/MaterialInput.vue";
import MaterialSnackbar from "@/components/MaterialSnackbar.vue";
import MaterialAlert from "@/components/MaterialAlert.vue";
import { ref, onMounted } from 'vue'
import axios from "axios";
import { useRouter } from 'vue-router'

const router = useRouter()

const snackbar = ref(null)

const closeSnackbar = () => {
    snackbar.value = null;
}

const name = ref('')
const link = ref('')
const reason = ref('')
const date = ref('')
const category = ref('')
const priority = ref('')
const description = ref('')

const submit = async () => {
    try {
        const place = {
            "name": name.value,
            "link": link.value,
            "reason": reason.value,
            "date": date.value,
            "category": category.value,
            "priority": priority.value
        }
        const request = await axios.post('/api/savedPlace', place)
        router.push('/journey')
    } catch (error) {
        alert('에러 >>>' + error)
    }
}

onMounted(() => {
    if (document.getElementById("edit-description-edit")) {
        new Quill("#edit-description-edit", {
            theme: "snow", // Specify theme in configuration
        });
    }
    getChoices("choices-category-edit");
    getChoices("choices-color-edit");
    getChoices("choices-currency-edit");

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
})


const getChoices = (id) => {
    if (document.getElementById(id)) {
        var element = document.getElementById(id);
        return new Choices(element, {
            searchEnabled: false,
            allowHTML: true,
        });
    }
}
</script>