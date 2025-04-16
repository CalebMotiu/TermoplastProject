<script setup>
defineProps({
    numeProdus: {
    type: String,
    required: true,
  },

});
</script>

<template>
      <div class="flex justify-center text-4xl font-bold">{{numeProdus}}</div>
</template>

<style>
</style>