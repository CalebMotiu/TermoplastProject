<script setup>
import { RouterLink } from 'vue-router';

defineProps({
  imageSrc: {
    type: String,
    required: true,
  },
  route: {
    type: String,
    required: true,
  },
});
</script>

<template>
    <div class="flex flex-col">
          <div class="flex justify-center"><img :src="imageSrc" alt="" class="w-40 h-40" ></div>
        </div>
        <RouterLink :to="route" class="flex justify-center"></RouterLink>

</template>

<style>
</style>