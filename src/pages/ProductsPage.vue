<script setup>
import ProductCard from '../components/ProductCard.vue';

const products = [
  {
    imageSrc: "src/assets/Ferestre.jpeg",
    route: "/ferestre",
  },
  {
    imageSrc: "src/assets/Usi.jpeg",
    route: "/usi",
  },
  {
    imageSrc: "src/assets/rolete.jpeg",
    route: "/rolete",
  },
  {
    imageSrc: "src/assets/balustrade.jpeg",
    route: "/balustrade",
  },
];
</script>

<template>
  <div class="flex flex-col justify-around">
    <div class="flex justify-center my-8 text-xl sm:text-4xl font-bold">Produse</div>
    <div v-for="(product, index) in products" :key="index" class="flex justify-center mt-4">
      <ProductCard :imageSrc="product.imageSrc" :route="product.route" />
    </div>
  </div>
</template>

<style></style>






