<template>
  <HeaderBar />
  <!-- A D M I N -->
  <div class="flex justify-end w-dvw !px-20">
    <div>
      <div>upload new image</div>
    </div>
  </div>
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
    class="fixed w-dvw h-dvh inset-0 bg-[rgba(0,0,0,0.5)] flex items-center justify-center z-50"
    @click="closeModal"
  >
    <div
      class="flex justify-center items-center relative bg-rgba[0,0,0,0.5]"
      @click.stop
    >
      <img
        :src="currentImage"
        alt="Current Image"
        class="max-w-full max-h-[90vh] rounded-lg"
      />
    </div>
    <!-- Close Button -->
    <button
      @click="closeModal"
      class="absolute top-10 right-10 text-white text-4xl font-bold hover:text-gray-400 hover:bg-gray-900 cursor-pointer w-12 h-12 bg-gray-700 rounded-full"
    >
      ×
    </button>

    <!-- Navigation -->
    <button
      @click.stop="prevImage"
      class="absolute left-1 top-1/2 transform -translate-y-1/2 text-white text-4xl w-32 h-32 hover:text-gray-400 cursor-pointer"
    >
      ‹
    </button>
    <button
      @click.stop="nextImage"
      class="absolute right-1 top-1/2 transform -translate-y-1/2 text-white text-4xl w-32 h-32 hover:text-gray-400 cursor-pointer"
    >
      ›
    </button>
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

// ############ MOCK
const user = ref("admin");
// ############ MOCK_END

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
