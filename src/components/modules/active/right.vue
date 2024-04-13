<script setup>
const type = defineProps({
  month: String,
  contents: Array,
});
</script>

<template>
  <div class="flex md:contents">
    <div class="animate-vertical-in relative col-start-5 col-end-6 mr-10 md:mx-auto">
      <div class="h-full w-6 flex items-center justify-center">
        <div class="h-full w-0.5 pointer-events-none bg-white"></div>
      </div>
      <div class="absolute h-4 w-4 rounded-full ml-1 bg-white top-[21%] md:top-[22%]"></div>
    </div>
    <div class="animate-month-right-in hov-hl rounded-lg col-start-6 col-end-10 p-4 my-4 mr-auto">
      <h2 class="text-4xl md:text-5xl">{{ month }}</h2>
      <ul class="list-disc list-inside pl-2 mt-3">
        <li v-for="content in contents">{{ content }}</li>
      </ul>
    </div>
  </div>
</template>
