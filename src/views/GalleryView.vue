<template>
  <HeaderBar_mobile />
  <!-- A D M I N -->
  <div class="w-dvw"></div>
  <!--C O N T E N T-->
  <div
    class="flex gap-4 !px-5 items-top justify-center w-full !py-20 bg-violet-50"
  >
    <div
      v-for="(col, colIndex) in columns"
      :key="colIndex"
      class="flex flex-col gap-4"
    >
      <div
        v-for="(image, imgIndex) in col"
        :key="imgIndex"
        class="relative group"
      >
        <!-- FAVORITE ICON -->
        <button
          @click.stop="toggleFavorite(image)"
          class="absolute top-2 right-2 z-20 bg-white/80 backdrop-blur-md p-1 rounded-full shadow-md group-hover:scale-110 transition-transform"
        >
          <Icon
            :icon="isFavorited(image) ? 'ri:heart-fill' : 'ri:heart-line'"
            class="text-red-500"
            width="24"
            height="24"
          />
        </button>

        <!-- IMAGE -->
        <img
          :src="image"
          alt="Gallery Image"
          class="gallery-image"
          @click="openModal(colIndex, imgIndex)"
        />
      </div>
    </div>
  </div>
  <FooterBar />
  <div
    v-if="isModalOpen"
    class="fixed w-dvw h-dvh inset-0 bg-[rgba(0,0,0,0.5)] flex items-center justify-center z-999 !px-12"
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
        :style="isZoomed ? { transformOrigin: zoomOrigin } : {}"
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
import HeaderBar_mobile from "@/components/layout/HeaderBar_mobile.vue";
import { Icon } from "@iconify/vue";

// F A V O R I T E 💖
const favorites = ref(new Set());

const toggleFavorite = (imagePath) => {
  if (favorites.value.has(imagePath)) {
    favorites.value.delete(imagePath);
  } else {
    favorites.value.add(imagePath);
  }
};

const isFavorited = (imagePath) => favorites.value.has(imagePath);

// Z O O M 🔎
const isZoomed = ref(false);

const zoomOrigin = ref("center center");

const toggleZoom = (event) => {
  if (!isZoomed.value) {
    const img = event.target;
    const rect = img.getBoundingClientRect();
    const offsetX = ((event.clientX - rect.left) / rect.width) * 100;
    const offsetY = ((event.clientY - rect.top) / rect.height) * 100;

    zoomOrigin.value = `${offsetX}% ${offsetY}%`;
  }
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
