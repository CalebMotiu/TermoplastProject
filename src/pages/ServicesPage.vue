<script setup>
import ComponentaServici from '../components/ComponentaServici.vue';

const servicii = [
  {
    img: "src/assets/hamer.jpeg",
    text: " Montaje tâmplărie PVC și aluminiu",
  },
  {
    img: "src/assets/Reglaje.jpeg",
    text: " Reglaje și reparații tâmplărie PVC",
  },
  {
    img: "src/assets/Blinds.jpeg",
    text: "Reparatii rolete",
  },
  {
    img: "src/assets/Railing.jpeg",
    text: "Montaje balustrade cu sticla securizata",
  },
  {
    img: "src/assets/helmet.jpeg",
    text: "Alte lucrări de construcții",
  },
]
</script>

<template>
  <div class="bg-gradient-to-b from-slate-700 to-slate-400 grow pb-10">
    <div class="flex justify-center mt-8 text-xl sm:text-4xl font-bold">Servicile Noastre</div>
    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 mt-8 grid-flow-row">
      <div v-for="(servicii, index) in servicii" :key="index">
        <ComponentaServici :img="servicii.img" :text="servicii.text" />
      </div>

    </div>
  </div>
</template>

<style></style>