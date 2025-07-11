<template>
  <div
    class="bg-Color_gray duration-300 flex items-center gap-[0.1rem] p-[0.1rem] w-max rounded-[0.4rem] mx-auto text-[1.2rem] text-Color_black"
    :class="{ 'opacity-0': !totalResults }"
  >
    <div
      @click="prevPage"
      class="container rounded-l-[0.4rem]"
      :class="{ 'pointer-events-none': currentPage === 1 }"
    >
      <ArrowSVG :class="{ 'opacity-50': currentPage === 1 }" />
    </div>

    <div
      v-for="item in maxPagination < 11 ? maxPagination : paginationArray"
      :key="item"
      class="container"
      :class="{
        '!bg-[#F3F5F9]': currentPage === item,
        'pointer-events-none': item === '...',
      }"
      @click="handlePagination(item)"
    >
      {{ item }}
    </div>

    <div
      @click="nextPage"
      class="container rounded-r-[0.4rem]"
      :class="{ 'pointer-events-none': currentPage === maxPagination }"
    >
      <ArrowSVG
        class="scale-x-[-1]"
        :class="{ 'opacity-50': currentPage === maxPagination }"
      />
    </div>
  </div>
</template>

<script lang="ts" setup>
import { computed } from "vue";
import ArrowSVG from "./SVG/ArrowSVG.vue";

import { useCardsStore } from "@/stores/cards";
import { storeToRefs } from "pinia";

const cardsStore = useCardsStore();
const AMOUNT_CARD = 10; // карточек на странице в ответе на сервере
const { currentPage, totalResults } = storeToRefs(cardsStore);
const { setPage } = cardsStore;
const maxPagination = computed(() =>
  Math.ceil(totalResults.value / AMOUNT_CARD)
);

const centerItem = computed(() =>
  Math.max(Math.min(currentPage.value, maxPagination.value - 3), 4)
);

const paginationArray = computed<(string | number)[]>(() => [
  1,
  2,
  "...",
  centerItem.value - 1,
  centerItem.value,
  centerItem.value + 1,
  "...",
  maxPagination.value - 1,
  maxPagination.value,
]);

const handlePagination = (value: number | string) => {
  if (typeof value === "number") setPage(value);
};

const nextPage = () =>
  setPage(Math.min(currentPage?.value + 1, maxPagination.value));

const prevPage = () => setPage(Math.max(currentPage?.value - 1, 1));
</script>

<style scoped lang="scss">
.container {
  @apply w-[2.6rem] h-[2.6rem] flex items-center justify-center bg-white cursor-pointer;
}
</style>
