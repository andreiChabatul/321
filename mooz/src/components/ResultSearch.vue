<template>
  <div
    class="flex items-center justify-start gap-[1.7rem] opacity-0"
    :class="{ 'opacity-100': totalResults }"
  >
    <p class="text-[2.2rem]">
      You searched for: <span class="underline">{{ searchWord }}</span>
    </p>
    <button
      class="bg-Color_blue pointer-events-none h-[3rem] px-[1.5rem] text-[1.4rem] text-white rounded-[0.5rem] font-medium"
    >
      {{ `${totalResults} results` }}
    </button>
  </div>
</template>

<script setup lang="ts">
import { useCardsStore } from "@/stores/cards";
import { storeToRefs } from "pinia";

const { totalResults, searchWord } = storeToRefs(useCardsStore());
</script>
