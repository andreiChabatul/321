<template>
  <svg
    class="w-[10rem] animate-spin"
    viewBox="0 0 100 100"
    xmlns="http://www.w3.org/2000/svg"
  >
    <circle
      cx="50"
      cy="50"
      r="45"
      fill="none"
      stroke="#3256FF"
      stroke-width="8"
      stroke-dasharray="70 200"
      stroke-linecap="round"
    />
  </svg>
</template>

<style>
.animate-spin {
  animation: spin 1.5s linear infinite;
}

@keyframes spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>
