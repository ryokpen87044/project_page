<script setup>
import { ref } from "vue";
import card from "../globals/card.vue";

const path = ref("https://github.com/OTAproject2024");
const img = ref("./assets/general/logo.png");
</script>

<template>
  <div class="hov-hl animate-part-in rounded-lg p-3 mt-2 mb-12">
    <h3 class="mb-4 font-medium text-2xl md:text-3xl">platform</h3>
    <p>開発プロセスを効率化するために、GitHubを活用しています。</p>
    <card title="PPP Project - GitHub" text="GitHub is where PPP Project builds software." :path="path" :img="img" />
    <p>
      GitHubを使用することで、バージョン管理や問題追跡などが容易に行えます。<br />
      プロジェクトの進行状況やコードの変更履歴を透明にし、より効果的な開発プロセスを実現しています。
    </p>
  </div>
</template>
