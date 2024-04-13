<script setup>
const type = defineProps({
  title: String,
});
</script>

<template>
  <div class="w-full flex flex-row items-center space-x-6">
    <div class="animate-part-left-in flex-1 border-b-2 pointer-events-none"></div>
    <h2 class="animate-part-in font-medium text-2xl md:text-3xl">{{ title }}</h2>
    <div class="animate-part-right-in flex-1 border-b-2 pointer-events-none"></div>
  </div>
</template>
