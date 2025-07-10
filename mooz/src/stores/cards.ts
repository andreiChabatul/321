import { defineStore } from "pinia";
import { ref } from "vue";

export const useFlowersStore = defineStore("cards", () => {
  const cards = ref([]);

  return {
    //state
    cards,
  };
});
