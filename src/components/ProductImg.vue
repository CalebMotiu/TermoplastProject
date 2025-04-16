<script setup>
defineProps({
    imageSrc: {
    type: String,
    required: true,
  },

});
</script>

<template>
        <div class="flex justify-center"><img :src="imageSrc" class="w-96 h-60"></div>

</template>

<style>
</style>