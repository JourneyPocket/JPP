<template>
    <div class="d-block d-sm-flex align-items-center py-4 ps-4 border-bottom"><a
            class="d-block mb-3 mb-sm-0 me-sm-4 ms-sm-0 mx-auto" href="marketplace-single.html"
            style="width: 12.5rem;"><img class="rounded-3" src="../../../assets/img/apple-icon.png" alt="Product"></a>
        <div class="text-center text-sm-start">
            <h3 class="h6 product-title mb-2"><a v-bind:href="place.link">{{ place.link }}</a>
            </h3>
            <h1> {{ place.name }} </h1>
            <div class="d-inline-block text-accent">{{place.category}}</div>
            <div class="d-inline-block text-muted fs-ms border-start ms-2 ps-2">{{ place.priority }}
            </div>
            <div class="d-inline-block text-muted fs-ms border-start ms-2 ps-2">{{ place.date }}</div>
            <div class="d-flex justify-content-center justify-content-sm-start pt-3">{{ place.reason }}
            </div>
        </div>
    </div>
</template>
<script setup>
const props = defineProps({
    place: { type: Object }
})
</script>