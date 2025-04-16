<script setup>
defineProps({
  header: {
    type: String,
    required: true,
  },
  text: {
    type: String,
    required: true,
  },
});
</script>

<template>
  <div class="flex flex-col justify-center sm:w-52 mr-8">
    <div class="text-lg font-bold">{{ header }}</div>
    <div>{{ text }}</div>
  </div>
</template>

<style>
</style>
