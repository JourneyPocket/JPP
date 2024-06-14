<template>
    <div class="d-block d-sm-flex align-items-center py-4 ps-4 border-bottom position-relative"><a
            class="d-block mb-3 mb-sm-0 me-sm-4 ms-sm-0 mx-auto" href="marketplace-single.html"
            style="width: 12.5rem;"><img class="rounded-3" v-bind:src="place.img" alt="Product"
                style="width: 200px;"></a>
        <div class="text-center text-sm-start">
            <h3 class="h6 product-title mb-2"><a v-bind:href="place.link">{{ place.link }}</a>
            </h3>
            <h1> {{ place.name }} </h1>
            <div class="d-inline-block text-accent">{{ place.category }}</div>
            <div class="d-inline-block text-muted fs-ms border-start ms-2 ps-2">{{ place.priority }}
            </div>
            <div class="d-inline-block text-muted fs-ms border-start ms-2 ps-2">{{ place.date }}</div>
            <div class="d-flex justify-content-center justify-content-sm-start pt-3">{{ place.reason }}
            </div>
        </div>
        <div class="position-absolute end-0 cursor-pointer" @click="deletePlace(place.id)"><h4>X</h4></div>
    </div>
</template>
<script setup>
import { defineEmits } from 'vue';

const emit = defineEmits(['deleteId'])

const props = defineProps({
    place: { type: Object }
})


const deletePlace = (id) => {
    emit('deleteId', id)
}

</script>