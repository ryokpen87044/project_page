<script setup>
import { ref } from "vue";
import card from "../globals/card.vue";

const path1 = ref("https://vitejs.dev/");
const img1 = ref("./assets/general/logo.png");
const path2 = ref("https://v2.ja.vuejs.org/");
const img2 = ref("./assets/general/logo.png");
</script>

<template>
  <div class="hov-hl animate-part-in rounded-lg p-3 mt-2">
    <h3 class="mb-4 font-medium text-2xl md:text-3xl">frontend</h3>
    <p>フロントエンド開発ビルドツールとして、Viteを採用しています。</p>
    <card title="Vite" text="Vite is what PPP Project builds website." :path="path1" :img="img1" />
    <p>
      Viteを使用することで、開発者は煩雑な設定を気にすることなく、迅速にアプリケーションのプロトタイプを構築し、生産性を向上させることができます。
    </p>
    <p class="mt-5">JavaScriptフレームワークとして、Vue.jsを採用しています。</p>
    <card title="Vue.js" text="Vue.js is what PPP Project builds website." :path="path2" :img="img2" />
    <p>
      Vue.jsは、ビューレイヤーの構築に焦点を当て、データ駆動なUIの構築を容易にします。<br />
      また、Vue.jsは他のライブラリやフレームワークとの組み合わせが容易であり、開発者が自分の好みに合わせて柔軟に選択できることが特長です。
    </p>
  </div>
</template>
