import { defineStore } from "pinia";
import { ref } from "vue";
import { ApiResponse, Movie } from "./types";

export const useCardsStore = defineStore("cards", () => {
  const cards = ref<Movie[]>([]);
  const totalResults = ref<number>(0);
  const searchWord = ref<string>("");
  const isLoading = ref<boolean>(false);

  const setSeacrhWord = (value: string) => {
    searchWord.value = value;
    getCards();
  };

  const clearCards = () => {
    cards.value = [];
    totalResults.value = 0;
    searchWord.value = "";
  };

  const getCards = async () => {
    isLoading.value = true;
    try {
      const response = await fetch(
        `https://www.omdbapi.com/?i=tt3896198&apikey=8523cbb8&s=${searchWord?.value}&page=2`
      );
      const data: ApiResponse = await response.json();
      totalResults.value = Number(data.totalResults) || 0;
      cards.value = data?.Search || [];
    } catch (error) {
      console.log(error);
    } finally {
      isLoading.value = false;
    }
  };

  return {
    //state
    cards,
    searchWord,
    totalResults,
    isLoading,
    // actions
    setSeacrhWord,
    clearCards,
  };
});
