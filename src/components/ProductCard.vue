<script setup>
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
  <router-link
    :to="route"
    class="flex justify-center w-full sm:w-5/6 lg:w-4/5 h-32 sm:h-40 lg:h-48"
  >
    <img
      :src="imageSrc"
      alt=""
      class="object-cover w-full h-full rounded-lg shadow-md"
    />
  </router-link>
</template>
