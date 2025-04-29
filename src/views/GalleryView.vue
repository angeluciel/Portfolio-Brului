<template>
  <HeaderBar />
  <!-- A D M I N -->
  <div class="w-dvw"></div>
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
    class="fixed w-dvw h-dvh inset-0 bg-[rgba(0,0,0,0.5)] flex items-center justify-center z-50 !px-12"
    @click="closeModal"
  >
    <div
      class="flex justify-center items-center relative bg-rgba[0,0,0,0.5]"
      @click.stop
    >
      <img
        :src="currentImage"
        alt="Current Image"
        class="rounded-lg transition-transform duration-300 cursor-zoom-in"
        :class="{
          'max-w-full max-h-[90vh]': !isZoomed,
          'scale-150 cursor-zoom-out': isZoomed,
        }"
        @click.stop="toggleZoom"
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

// Z O O M 🔎
const isZoomed = ref(false);

const toggleZoom = () => {
  isZoomed.value = !isZoomed.value;
};

// Z O O M 🔎❌ E N D

const columns = [
  [
    "/images/gostosao_ouro.jpg",
    "/images/first-first.jpg",
    "/images/third-first.jpg",
    "/images/gostosao_loiro.jpg",
  ],
  [
    "/images/cultivador_branco.jpg",
    "/images/wallpaper1.png",
    "/images/second-first.jpg",
    "/images/OC_big.jpg",
  ],
  [
    "/images/second-second.jpg",
    "/images/first-second.jpg",
    "/images/last-last.jpg",
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
