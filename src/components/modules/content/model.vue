<script setup>
import { ref } from "vue";
import card from "../globals/card.vue";

const path = ref("https://www.autodesk.co.jp/products/fusion-360/overview?term=1-YEAR&tab=subscription");
const img = ref("./assets/general/logo.png");
</script>

<template>
  <div class="hov-hl animate-part-in rounded-lg p-3 mt-2 mb-12">
    <h3 class="mb-4 font-medium text-2xl md:text-3xl">software</h3>
    <p>3Dモデルの開発にはAutodesk Fusion 360を使用しており、チーム全体の共同作業の効率化を図っています。</p>
    <card title="Autodesk Fusion" text="Fusion is what PPP Project builds 3D model." :path="path" :img="img" />
    <p>
      クラウドベースのため、リアルタイムでの共同編集やデータの同期が容易に行えます。<br />
      また、Fusion 360の強力な機能を活用することで、高度な3Dモデリングや設計作業を効率的に行うことができます。<br />
    </p>
  </div>
</template>
