
<script setup>
import { computed, onMounted } from 'vue'
import { useRoute } from 'vue-router'
import { useUsi } from '../stores/usi'

import ProductName from '../components/ProductName.vue'
import ProductImg from '../components/ProductImg.vue'
import ProudctText from '../components/ProudctText.vue'

const route = useRoute()
const store = useUsi()

onMounted(() => {
  if (store.lists.length === 0) {
    store.fetchusi()
  }
})

const produs = computed(() => {
  const index = parseInt(route.params.id)
  return store.lists[index]
})
</script>

<template>
  <div v-if="produs">
    <ProductName :numeProdus="produs.title" />
    <div class="flex flex-col sm:flex-row justify-around mt-8">
      <ProductImg :imageSrc="produs.img" />
      <ProudctText :header="produs.title" :text="produs.description" />
    </div>
  </div>

  <div v-else class="text-white text-center mt-10">
    Produsul nu a fost găsit.
  </div>
</template>
