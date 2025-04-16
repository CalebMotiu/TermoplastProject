<script setup>
defineProps({
    img: {
        type: String,
        required: true,
    },

});
</script>



<template>
    <div>
        <img :src="img" alt="Nord1" class="w-80 sm:w-96 lg:mr-4 lg:w-8/12">
    </div>
</template>

<style></style>
