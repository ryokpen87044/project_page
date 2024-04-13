<script setup>
const type = defineProps({
  title: String,
});
</script>

<template>
  <div class="hov-hl animate-part-in rounded-lg p-3 mt-6">
    <p>当プロジェクトでは、以下の行動規範に基づいて活動しています。</p>
    <div class="my-6">
      <lo class="list-decimal">
        <li class="pl-[1em] indent-[-1em]">
          <span class="font-semibold">尊重と礼儀:&emsp;</span>
          他のメンバーやコミュニティの参加者を尊重し、礼儀正しく接することを求めます。差別や嫌がらせのような行為は絶対に許されません。
        </li>
        <li class="pl-[1em] indent-[-1em] mt-2">
          <span class="font-semibold">協力と貢献:&emsp;</span>
          他のメンバーやコミュニティの参加者と協力し、貢献することを求めます。自分の意見を述べる際には、他の人の意見を尊重し、議論を建設的に進めることを心がけます。
        </li>
        <li class="pl-[1em] indent-[-1em] mt-2">
          <span class="font-semibold">公平と透明性:&emsp;</span>
          意思決定や活動においては、公平かつ透明性を持って行うことを求めます。情報の共有や意思決定のプロセスには、全てのメンバーが参加できるようにします。
        </li>
      </lo>
    </div>
    <p>これらの行動規範に基づいて、私たちはプロジェクトの成功と共に、個々のメンバーの成長と満足を追求します。</p>
  </div>
</template>
