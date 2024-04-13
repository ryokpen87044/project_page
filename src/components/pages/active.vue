<script setup>
import left from "../modules/active/left.vue";
import right from "../modules/active/right.vue";

const jan = ["coming soon...coming soon...coming soon...", "coming soon...", "coming soon...", "coming soon..."];
const feb = ["coming soon...", "coming soon...", "coming soon..."];
const mar = ["coming soon...", "coming soon...", "coming soon..."];
const apr = ["coming soon...", "coming soon...", "coming soon..."];
const may = ["coming soon...", "coming soon...", "coming soon..."];
const jun = ["coming soon...", "coming soon...", "coming soon..."];
const jul = ["coming soon...", "coming soon...", "coming soon..."];
const aug = ["coming soon...", "coming soon...", "coming soon..."];
const sep = ["coming soon...", "coming soon...", "coming soon..."];
const oct = ["coming soon...", "coming soon...", "coming soon..."];
const nov = ["coming soon...", "coming soon...", "coming soon..."];
const dec = ["coming soon...", "coming soon...", "coming soon..."];
</script>

<template>
  <div class="absolute h-screen w-screen z-5 overflow-y-scroll overscroll-none">
    <div class="mt-32 flex flex-col font-Poppins text-white">
      <div class="animate-session-in">
        <h1 class="font-bold text-center text-6xl md:text-7xl">active</h1>
      </div>
      <div class="place-self-center mt-10">
        <div class="p-2 mx-auto flex flex-col md:grid grid-cols-9">
          <left month="January" :contents="jan" />
          <right month="February" :contents="feb" />
          <left month="March" :contents="mar" />
          <right month="April" :contents="apr" />
          <left month="May" :contents="may" />
          <right month="June" :contents="jun" />
          <left month="July" :contents="jul" />
          <right month="August" :contents="aug" />
          <left month="September" :contents="sep" />
          <right month="October" :contents="oct" />
          <left month="November" :contents="nov" />
          <right month="December" :contents="dec" />
          <div class="flex md:contents">
            <div class="animate-line-in relative col-start-5 col-end-6 mr-10 md:mx-auto">
              <div class="h-60 w-6 flex items-center justify-center">
                <div class="h-full w-0.5 pointer-events-none bg-white"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
