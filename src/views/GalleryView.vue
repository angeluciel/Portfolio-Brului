<template>
  <HeaderBar />
  <div class="grid grid-cols-4 gap-4">
    <!-- Iterate over the grouped images -->
    <div
      v-for="(group, index) in groupedImages"
      :key="index"
      :class="{ 'col-span-2 col-start-2 col-end-4': group.type === 'wide' }"
    >
      <template v-if="group.type === 'tall'">
        <div
          class="grid grid-cols-2 gap-4 col-start-2 col-end-2 items-end w-auto"
        >
          <div v-for="img in group.images" :key="img.id">
            <img
              :src="img.src"
              alt="Gallery image"
              class="w-full object-cover"
            />
          </div>
        </div>
      </template>

      <!-- For wide images: simply render the image spanning both columns -->
      <template v-else-if="group.type === 'wide'">
        <img
          :src="group.image.src"
          alt="Gallery image"
          class="w-full object-cover"
        />
      </template>
    </div>
  </div>
  <FooterBar />
</template>

<script setup>
import HeaderBar from "@/components/layout/HeaderBar.vue";
import FooterBar from "@/components/layout/FooterBar.vue";
import { ref, computed } from "vue";

// Example images array with a type for each image
const images = ref([
  { id: 1, src: "@/src/assets/images/first-first.jpg", type: "tall" },
  { id: 2, src: "@/src/assets/images/first-second.jpg", type: "tall" },
  { id: 3, src: "@/src/assets/images/wallpaper1.png", type: "wide" },
  { id: 1, src: "@/src/assets/images/second-first.jpg", type: "tall" },
  { id: 2, src: "@/src/assets/images/second-second.jpg", type: "tall" },
  { id: 3, src: "@/src/assets/images/wallpaper2.png", type: "wide" },
  { id: 1, src: "@/src/assets/images/third-first.jpg", type: "tall" },
  { id: 2, src: "@/src/assets/images/third-second.jpg", type: "tall" },
  { id: 3, src: "@/src/assets/images/wallpaper3.jpeg", type: "wide" },
]);

const groupedImages = computed(() => {
  const groups = [];
  let tallBuffer = [];

  images.value.forEach((image) => {
    if (image.type === "tall") {
      tallBuffer.push(image);
      if (tallBuffer.length === 2) {
        groups.push({ type: "tall", images: [...tallBuffer] });
        tallBuffer = [];
      }
    } else if (image.type === "wide") {
      // Flush any buffered tall images before adding a wide image
      if (tallBuffer.length) {
        groups.push({ type: "tall", images: [...tallBuffer] });
        tallBuffer = [];
      }
      groups.push({ type: "wide", image });
    }
  });
  // Add any leftover tall images (if you have an odd number)
  if (tallBuffer.length) {
    groups.push({ type: "tall", images: [...tallBuffer] });
  }
  return groups;
});
</script>
