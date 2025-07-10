<template>
  <div class="w-[24.5rem] h-[38rem] text-[1.6rem] text-left">
    <div
      class="w-full h-[27rem] border-solid border-[1px] border-Color_blue rounded-[1rem] mb-[2.3rem] flex items-center justify-center"
    >
      <img src="../assets/placeholder.png" alt="placeholder" />
    </div>
    <p>Name: Batman</p>
    <p>Name: Batman</p>
    <p>Name: Batman</p>
    <p>Name: Batman</p>
  </div>
</template>

<script setup lang="ts">
import { Movie } from "@/stores/types";
import { defineProps } from "vue";

defineProps<{
  item: Movie;
}>();
</script>
