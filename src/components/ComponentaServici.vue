<script setup>
defineProps({
  img: {
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
    <div class="flex justify-center">
              <div class="flex flex-col">
                <div class="flex justify-center">
                  <img :src="img" alt="Montaje" class="w-28 rounded-full border border-black bg-white motion-safe:animate-bounce">
                </div>
                <div class="w-36 font-bold">
                    {{ text }}
                </div>
              </div>
            </div>
</template>

<style>
</style>