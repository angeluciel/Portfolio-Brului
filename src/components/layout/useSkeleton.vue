<template>
  <div class="relative w-[300px]" :style="{ height, minHeight: height }">
    <ImgPlaceholder
      height="32px"
      width="32px"
      borderRadius="50%"
      class="absolute top-2 right-2 z-20"
    />

    <ImgPlaceholder
      :height="height"
      width="300px"
      borderRadius="16px"
      class="z-0"
    />

    <div class="absolute inset-0 bg-black/10 z-10 rounded-[16px]"></div>
  </div>
</template>

<script setup lang="ts">
import ImgPlaceholder from "./imgPlaceholder.vue";
defineProps({
  height: { type: String, default: "300px" },
});
</script>

<style scoped></style>
