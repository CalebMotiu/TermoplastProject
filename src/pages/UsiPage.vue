<script setup>
import AveragePrice from '../components/AveragePrice.vue';
import ProductCard from '../components/ProductCard.vue';
import { ref, computed } from 'vue';

const products = [
  {
    title: "Usa 1",
    imageSrc: "src/assets/produsUsi.jpeg",
    route: "/usa",
  },
  {
    title: "Usa 2",
    imageSrc: "src/assets/produsUsi.jpeg",
    route: "/usa",
  },
  {
    title: "Usa 3",
    imageSrc: "src/assets/produsUsi.jpeg",
    route: "/usa",
  },
  {
    title: "Usa 4",
    imageSrc: "src/assets/produsUsi.jpeg",
    route: "/usa",
  },
  {
    title: "Usa 5",
    imageSrc: "src/assets/produsUsi.jpeg",
    route: "/usa",
  },
  {
    title: "Usa 6",
    imageSrc: "src/assets/produsUsi.jpeg",
    route: "/usa",
  },
];

const searchQuery = ref('');

const filteredProducts = computed(() =>
  products.filter(product =>
    product.title.toLowerCase().includes(searchQuery.value.toLowerCase())
  )
);
</script>

<template>
  <div class="bg-gradient-to-b from-slate-700 to-slate-400 grow pb-10">
    <div class="flex justify-center mt-8 text-xl sm:text-4xl font-bold">Usa</div>

    <div class="flex justify-center mt-4">
      <input
        type="text"
        v-model="searchQuery"
        placeholder="Search by title..."
        class="border border-gray-300 p-2 rounded w-2/3 sm:w-1/3"
      />
    </div>

    <div class="grid grid-cols-2 grid-flow-row sm:grid-cols-3 lg:grid-cols-4 mt-6">
      <AveragePrice />
      <div
        v-for="(product, index) in filteredProducts"
        :key="index"
        class="flex justify-center mt-4"
      >
        <ProductCard :imageSrc="product.imageSrc" :route="product.route" />
      </div>
    </div>
  </div>
</template>

<style></style>
