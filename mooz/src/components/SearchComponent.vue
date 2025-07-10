<template>
  <div class="relative">
    <input
      class="w-[28rem] h-[4rem] border-Color_gray border-solid border-[0.1rem] rounded-[0.5rem] focus:border-Color_blue duration-300 text-Dark_gray px-[1.5rem] py-[1rem] text-[1.4rem]"
      type="text"
      v-model="resultInput"
      placeholder="Введите запрос..."
    />
    <div class="absolute top-[1.3rem] right-[1.5rem]">
      <SeacrhSVG v-if="!resultInput" />
      <ClearSVG class="cursor-pointer" @click="clearSearch" v-else />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, watch } from "vue";
import { ClearSVG, SeacrhSVG } from "./SVG";
import { useCardsStore } from "@/stores/cards";

const resultInput = ref("");
const { setSeacrhWord, clearCards } = useCardsStore();
const TIME_DEBOUNCE = 500;
let timerId: number | undefined;

const clearSearch = () => {
  clearCards();
  resultInput.value = "";
};

watch(resultInput, () => {
  clearTimeout(timerId);
  timerId = setTimeout(() => {
    if (resultInput?.value) {
      setSeacrhWord(resultInput?.value);
    } else {
      clearSearch();
    }
  }, TIME_DEBOUNCE);
});
</script>
