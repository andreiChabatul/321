<template>
  <div
    class="py-[5rem] px-[8vw] grid grid-rows-[auto_auto_1fr_auto] h-screen laptop:px-[3vw] laptop:py-[3rem]"
  >
    <HeaderComponent class="mb-[4.5rem]" />
    <ResultSearch class="mb-[3.5rem]" />
    <CardsContainer />
    <PaginationComponent />
  </div>
</template>

<script setup lang="ts">
import CardsContainer from "@/components/CardsContainer.vue";
import HeaderComponent from "@/components/HeaderComponent.vue";
import PaginationComponent from "@/components/PaginationComponent.vue";
import ResultSearch from "@/components/ResultSearch.vue";
</script>
