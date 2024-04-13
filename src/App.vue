<script setup>
import top from "./components/modules/globals/header.vue";
import fot from "./components/modules/globals/footer.vue";
import bg from "./components/modules/globals/background.vue";
</script>

<template>
  <div class="relative h-screen overflow-hidden overscroll-none bg-black">
    <top></top>
    <bg></bg>
    <router-view></router-view>
    <fot></fot>
  </div>
</template>
