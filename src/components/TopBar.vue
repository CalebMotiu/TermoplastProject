<script setup>
import NavBar from './NavBar.vue';
import Flags from './Flags.vue';
import Sigla from './icons/Sigla.vue';

</script>

<template>
    <div class=" flex flex-col ">
        <div>
            <div class="grid grid-cols-3 grid-flow-row p-5 flex-none">
                <Sigla/>
                <NavBar/>
                <div
                    class="flex flex-row justify-end sm:col-start-2 sm:justify-center lg:row-start-1 lg:col-start-3 lg:justify-end animate__animated animate__backInRight">
                    <i class="bi bi-search"></i>
                    <input class="ml-3 w-24" type="text" placeholder="  search">
                </div>
                <Flags/>
            </div>
        </div>
    </div>
</template>

<style>
</style>