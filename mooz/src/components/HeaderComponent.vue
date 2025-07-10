<template>
  <div class="flex justify-between items-center">
    <LogoSVG />
    <SearchComponent />
    <div class="flex items-center gap-[1rem]">
      <UserSVG />
      <p>Your Name</p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { LogoSVG, UserSVG } from "./SVG";
import SearchComponent from "./SearchComponent.vue";
</script>
