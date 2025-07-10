<template>
  <div class="py-[5rem] px-[8vw] grid grid-rows-[auto_auto_1fr_auto] h-screen">
    <HeaderComponent class="mb-[4.5rem]" />
    <ResultSearch class="mb-[3.5rem]" />
    <CardsContainer />
    <div>пагианция</div>
  </div>
</template>

<script setup lang="ts">
import CardsContainer from "@/components/CardsContainer.vue";
import HeaderComponent from "@/components/HeaderComponent.vue";
import ResultSearch from "@/components/ResultSearch.vue";
</script>
