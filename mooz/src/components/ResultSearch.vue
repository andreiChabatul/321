<template>
  <div class="flex items-center justify-start gap-[1.7rem]">
    <p class="text-[2.2rem]">{{ `You searched for: ${temp}` }}</p>
    <button
      class="bg-Color_blue pointer-events-none h-[3rem] px-[1.5rem] text-[1.4rem] text-white rounded-[0.5rem] font-medium"
    >
      {{ `${13123} results` }}
    </button>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";

const temp = ref("vdvd");
</script>
