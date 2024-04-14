<script setup>
import { ref } from "vue";

const type = defineProps({
  month: String,
  contents: Array,
  imgs: Array,
});

let flg = ref(false);
const over = () => {
  flg.value = true;
};
const leave = () => {
  flg.value = false;
};
</script>

<template>
  <div class="flex flex-row-reverse md:contents" @mouseover="over" @mouseleave="leave">
    <div class="animate-month-left-in hov-hl rounded-lg col-start-1 col-end-5 p-4 my-4 mr-auto md:mr-0 md:ml-auto">
      <h2 class="text-4xl md:text-5xl">{{ month }}</h2>
      <ul class="list-disc list-inside pl-2 mt-3">
        <li v-for="content in contents">{{ content }}</li>
      </ul>
      <transition
        enter-from-class="opacity-0"
        enter-active-class="duration-200"
        leave-to-class="opacity-0"
        leave-active-class="duration-200"
      >
        <ul class="list-none list-inside grid justify-items-center pl-2 mt-3" v-show="flg">
          <li v-for="img in imgs"><img class="w-72" :src="img" alt="img" /></li>
        </ul>
      </transition>
    </div>
    <div class="animate-vertical-in relative col-start-5 col-end-6 mr-10 md:mx-auto">
      <div class="h-full w-6 flex items-center justify-center">
        <div class="h-full w-0.5 pointer-events-none bg-white"></div>
      </div>
      <div class="absolute h-4 w-4 rounded-full ml-1 bg-white top-[19%] md:top-[25%]"></div>
    </div>
  </div>
</template>
