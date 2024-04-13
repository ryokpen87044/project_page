<script setup>
import { ref } from "vue";

let flg_a = ref(true);
let flg_b = ref(false);
let flg_c = ref(false);
const toggle = () => {
  flg_a.value = !flg_a.value;
  flg_b.value = !flg_b.value;
};

const base_url = location.href;
const x_url = ref("https://x.com/share?url=" + base_url + "&text=PPP project2024");
const facebook_url = ref("http://www.facebook.com/share.php?u=" + base_url);
const copy = () => {
  try {
    navigator.clipboard.writeText(base_url);
  } catch (e) {
    document.getElementById("notice").innerHTML = "Copy failed.<br/>your device not supported.";
  } finally {
    flg_c.value = true;
    setTimeout(() => {
      flg_c.value = false;
    }, 5000);
  }
};
</script>

<template>
  <footer class="absolute right-0 z-20 bottom-24 sm:bottom-12 md:bottom-6 lg:bottom-3 xl:bottom-0">
    <div class="flex flex-col font-Poppins font-light text-white">
      <transition
        enter-from-class="translate-x-full opacity-0"
        enter-active-class="transition duration-700"
        leave-to-class="translate-x-full opacity-0"
        leave-active-class="transition duration-700"
      >
        <div class="self-end rounded-lg bg-zinc-900 bg-opacity-80 p-5 mb-3 mr-5 md:mb-5 md:mr-10" v-show="flg_c">
          <p id="notice" class="text-lg md:text-xl">Copy completed.</p>
        </div>
      </transition>
      <div class="self-end rounded-lg bg-zinc-900 bg-opacity-80 mb-7 p-5 mr-5 md:mr-10">
        <div class="animate-footer-in cursor-pointer" @click="toggle" v-show="flg_a">
          <p class="text-lg md:text-xl">&gt; share</p>
        </div>
        <div v-show="flg_b">
          <ul class="flex items-center">
            <li class="animate-footer-in cursor-pointer" @click="toggle">
              <p class="text-lg md:text-xl">&lt; return</p>
            </li>
            <li class="animate-footer-in cursor-pointer ml-14 mr-7" @click="copy">
              <p class="text-lg md:text-xl">copy</p>
            </li>
            <li class="animate-footer-in cursor-pointer mr-7">
              <a :href="x_url" target="_blank" rel="noreferrer">
                <img class="h-7 w-7" src="/assets/sns/X_logo.png" alt="X" />
              </a>
            </li>
            <li class="animate-footer-in cursor-pointer">
              <a :href="facebook_url" target="_blank" rel="noreferrer">
                <img class="h-7 w-7" src="/assets/sns/Facebook_logo.png" alt="Facebook" />
              </a>
            </li>
          </ul>
          <p class="animate-footer-in mt-4">
            © 2024
            <a href="https://github.com/ryokpen87044" target="_blank" rel="noreferrer">ryokpen87044.&nbsp;</a>
            All Rights Reserved.
          </p>
        </div>
      </div>
    </div>
  </footer>
</template>
