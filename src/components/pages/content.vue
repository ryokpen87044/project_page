<script setup>
import part from "../modules/globals/part.vue";
import web from "../modules/content/web.vue";
import program from "../modules/content/program.vue";
import model from "../modules/content/model.vue";
</script>

<template>
  <div class="absolute h-screen w-screen z-5 overflow-y-scroll overscroll-none">
    <div class="mt-32 flex flex-col items-center font-Poppins text-white">
      <div class="animate-session-in">
        <h1 class="font-bold text-center text-6xl md:text-7xl">content</h1>
      </div>
      <div class="mt-10 mb-60 flex flex-col items-center w-3/4 md:w-2/5">
        <part title="source code" />
        <web />
        <program />
        <!-- <part title="3D model" /> -->
        <!-- <model /> -->
      </div>
    </div>
  </div>
</template>
