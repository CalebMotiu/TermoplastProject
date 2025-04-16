<script setup>
import ProudctText from '../components/ProudctText.vue';
import ProductImg from '../components/ProductImg.vue';
import ProductName from '../components/ProductName.vue';

const title =  "balustrada"
const img = "src/assets/produsBalustrada.jpeg"
const text = { header: "Product name", text: "A lot of information about the the product lalalallalallalalallalalalalalalallala" }
</script>

<template>
    <div class="flex-grow">
        <ProductName :numeProdus="title"/>
        <div class="flex flex-col sm:flex-row justify-around mt-8">
            <ProductImg :imageSrc="img" />
            <ProudctText :header="text.header" :text="text.text" />
        </div>
    </div>
</template>

<style></style>