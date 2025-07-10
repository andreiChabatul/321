<template>
  <div class="flex-1 overflow-y-auto mb-[6rem]">
    <div class="flex flex-wrap gap-[5rem] justify-center h-max">
      <ItemCard />
      <ItemCard />
      <ItemCard />
      <ItemCard />
      <ItemCard />
      <ItemCard />
    </div>
  </div>
</template>

<script setup lang="ts">
import ItemCard from "./ItemCard.vue";
</script>
