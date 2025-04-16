<script setup>
import HomeImgComponent from './HomeImgComponent.vue';
import HomeTextComponent from './HomeTextComponent.vue';
import Nord1 from "../assets/Nord1.jpeg";
import House1 from "../assets/House1.jpeg"; 
</script>



<template>
    <div class="flex justify-center my-4">
        <div class="flex flex-col lg:flex-row  ">
            <div>
                <div class="flex">
                    <HomeImgComponent :img="Nord1" />
                    <HomeTextComponent text="Nord One Apartament nou in centrul Timisoarei" />
                </div>
                <div class="flex">
                    <HomeTextComponent text="Casa Pasiva din Austria" />
                    <HomeImgComponent :img="House1" />
                </div>
            </div>
        </div>
    </div>
</template>

<style></style>
