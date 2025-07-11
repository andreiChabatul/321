<template>
  <div class="w-[24.5rem] h-[38rem] text-[1.6rem] text-left">
    <div
      class="w-full h-[27rem] overflow-hidden border-solid border-[1px] rounded-[1rem] mb-[2.3rem] flex items-center justify-center"
      :class="{ 'border-Color_blue': errorImg }"
    >
      <img
        class="w-full"
        v-if="!errorImg"
        :src="item?.Poster"
        alt="poster"
        @error="handleImageError"
      />
      <img v-else src="../assets/placeholder.png" alt="placeholder" />
    </div>
    <p>Name: {{ item?.Title }}</p>
    <p>Year: {{ item?.Year }}</p>
    <p>imdbID: {{ item?.imdbID }}</p>
    <p>Type: {{ item?.Type }}</p>
  </div>
</template>

<script setup lang="ts">
import { Movie } from "@/stores/types";
import { defineProps, ref } from "vue";

defineProps<{
  item: Movie;
}>();
const errorImg = ref(false);

const handleImageError = () => {
  errorImg.value = true;
};
</script>
