<template>
  <HeaderBar />
  <!--C O N T E N T-->
  <div class="flex gap-4 !px-5 items-top justify-center w-full !py-12">
    <div
      v-for="(col, colIndex) in columns"
      :key="colIndex"
      class="flex flex-col gap-4"
    >
      <img
        v-for="(image, imgIndex) in col"
        :key="imgIndex"
        :src="image"
        alt="Gallery Image"
        class="gallery-image"
        @click="openModal(colIndex, imgIndex)"
      />
    </div>
  </div>
  <FooterBar />
  <div
    v-if="isModalOpen"
    class="fixed inset-0 bg-[rgba(0,0,0,0.5)] flex items-center justify-center z-50"
  >
    <div class="relative">
      <img
        :src="currentImage"
        alt="Current Image"
        class="max-w-full max-h-[90vh] rounded-lg"
      />

      <!-- Close Button -->
      <button
        @click="closeModal"
        class="absolute top-2 right-2 text-white text-3xl font-bold"
      >
        ×
      </button>

      <!-- Navigation -->
      <button
        @click="prevImage"
        class="absolute left-2 top-1/2 transform -translate-y-1/2 text-white text-4xl"
      >
        ‹
      </button>
      <button
        @click="nextImage"
        class="absolute right-2 top-1/2 transform -translate-y-1/2 text-white text-4xl"
      >
        ›
      </button>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from "vue";
import HeaderBar from "@/components/layout/HeaderBar.vue";
import FooterBar from "@/components/layout/FooterBar.vue";

const columns = [
  [
    "../../src/assets/images/first-first.jpg",
    ".../../src/assets/images/first-second.jpg",
    "../../src/assets/images/second-first.jpg",
  ],
  [
    "../../src/assets/images/third-first.jpg",
    "../../src/assets/images/last-last.jpg",
    "../../src/assets/images/third-first.jpg",
  ],
  [
    "../../src/assets/images/wallpaper1.png",
    "../../src/assets/images/first-second.jpg",
    "../../src/assets/images/second-first.jpg",
  ],
];

// Modal controls
const isModalOpen = ref(false);
const currentCol = ref(0);
const currentImg = ref(0);

const openModal = (colIndex, imgIndex) => {
  currentCol.value = colIndex;
  currentImg.value = imgIndex;
  isModalOpen.value = true;
};

const closeModal = () => {
  isModalOpen.value = false;
};

const currentImage = computed(
  () => columns[currentCol.value][currentImg.value]
);

// Navigation
const prevImage = () => {
  if (currentImg.value > 0) {
    currentImg.value--;
  } else if (currentCol.value > 0) {
    currentCol.value--;
    currentImg.value = columns[currentCol.value].length - 1;
  }
};

const nextImage = () => {
  if (currentImg.value < columns[currentCol.value].length - 1) {
    currentImg.value++;
  } else if (currentCol.value < columns.length - 1) {
    currentCol.value++;
    currentImg.value = 0;
  }
};
</script>

<style lang="scss" scoped></style>
