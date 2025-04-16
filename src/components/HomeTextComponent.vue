<script setup>
defineProps({
    text: {
        type: String,
        required: true,
    },

});
</script>



<template>
    <div>
        <div class="text-xl w-80">{{ text }}</div>
    </div>
</template>

<style></style>
