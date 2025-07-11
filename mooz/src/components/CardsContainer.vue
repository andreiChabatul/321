<template>
  <div class="flex-1 overflow-y-auto mb-[6rem] laptop:mb-[3rem]">
    <div v-if="!isLoading">
      <div
        v-if="cards?.length"
        class="flex flex-wrap gap-[5rem] justify-center h-max laptop:gap-[2.5rem]"
      >
        <ItemCard v-for="card in cards" :item="card" :key="card.Title" />
      </div>

      <p v-else class="text-[2rem] text-left text-Dark_gray">
        {{ !searchWord ? TEXT_FIRST : TEXT_NO_FOUND }}
      </p>
    </div>

    <div class="flex items-center justify-center h-full" v-else>
      <LoaderSVG />
    </div>
  </div>
</template>

<script setup lang="ts">
import { storeToRefs } from "pinia";
import ItemCard from "./ItemCard.vue";
import { useCardsStore } from "@/stores/cards";
import { LoaderSVG } from "./SVG";

const { cards, searchWord, isLoading } = storeToRefs(useCardsStore());
const TEXT_FIRST = "Введите запрос для поиска видео.";
const TEXT_NO_FOUND =
  "К сожалению ничего не нашли. Попробуйте изменить параметры поиска.";
</script>
