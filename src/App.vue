<script setup>
import { RouterLink, RouterView } from 'vue-router';
// import HelloWorld from './components/HelloWorld.vue'
// import NavBar from './components/NavBar.vue';
import AboutUsComponent from './components/AboutUsComponent.vue';
import TopBar from './components/TopBar.vue'
</script>

<template>
  <header>
    <TopBar/>
  </header>

  <RouterView />
  <footer>
    <AboutUsComponent/>
  </footer>
</template>

<style>
@import "tailwindcss";

</style>
